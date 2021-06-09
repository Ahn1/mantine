import React, { useRef, useState, useEffect } from 'react';
import cx from 'clsx';
import { DefaultProps, useMantineTheme, mergeStyles, MantineNumberSize } from '../../theme';
import { MantineTransition } from '../Transition/Transition';
import { getClientPosition, ClientPositionEvent } from './get-client-position';
import { getPosition } from './get-position';
import { getChangeValue } from './get-change-value';
import { getDragEventsAssigner } from './get-drag-events-assigner';
import { Thumb, ThumbStylesNames } from './Thumb/Thumb';
import { Track, TrackStylesNames } from './Track/Track';
import { MarksStylesNames } from './Marks/Marks';
import useStyles from './Slider.styles';

export type SliderStylesNames =
  | keyof ReturnType<typeof useStyles>
  | ThumbStylesNames
  | TrackStylesNames
  | MarksStylesNames;

export interface SliderProps
  extends DefaultProps<SliderStylesNames>,
    Omit<React.ComponentPropsWithoutRef<'div'>, 'value' | 'onChange'> {
  /** Color from theme.colors */
  color?: string;

  /** Track border-radius from theme or number to set border-radius in px */
  radius?: MantineNumberSize;

  /** Predefined track and thumb size, number to set sizes in px */
  size?: MantineNumberSize;

  /** Minimal possible value */
  min?: number;

  /** Maximum possible value */
  max?: number;

  /** Number by which value will be incremented/decremented with thumb drag and arrows */
  step?: number;

  /** Current value for controlled slider */
  value?: number;

  /** Default value for uncontrolled slider */
  defaultValue?: number;

  /** Called each time value changes */
  onChange?(value: number): void;

  /** Hidden input name, use with uncontrolled variant */
  name?: string;

  /** Marks which will be placed on the track */
  marks?: { value: number; label?: React.ReactNode }[];

  /** Function to generate label or any react node to render instead, set to null to disable label */
  label?: React.ReactNode | ((value: number) => React.ReactNode);

  /** Label appear/disappear transition */
  labelTransition?: MantineTransition;

  /** Label appear/disappear transition duration in ms */
  labelTransitionDuration?: number;

  /** Label appear/disappear transition timing function, defaults to theme.transitionRimingFunction */
  labelTransitionTimingFunction?: string;

  /** If true label will be not be hidden when user stops dragging */
  labelAlwaysOn?: boolean;
}

export function Slider({
  className,
  style,
  themeOverride,
  classNames,
  styles,
  color,
  value,
  onChange,
  size = 'md',
  radius = 'xl',
  min = 0,
  max = 100,
  step = 1,
  defaultValue,
  name,
  marks = [],
  label = (f) => f,
  labelTransition = 'skew-down',
  labelTransitionDuration = 150,
  labelTransitionTimingFunction,
  labelAlwaysOn = false,
  ...others
}: SliderProps) {
  const theme = useMantineTheme(themeOverride);
  const classes = useStyles({ theme, size }, classNames as any);
  const _styles = mergeStyles(classes, styles as any);
  const [dragging, setDragging] = useState(false);
  const [_value, setValue] = useState(
    typeof value === 'number' ? value : typeof defaultValue === 'number' ? defaultValue : 0
  );
  const container = useRef<HTMLDivElement>();
  const thumb = useRef<HTMLDivElement>();
  const start = useRef<number>();
  const offset = useRef<number>();
  const position = getPosition({ value: _value, min, max });
  const _label = typeof label === 'function' ? label(_value) : label;

  useEffect(() => {
    if (typeof value === 'number') {
      setValue(value);
    }
  }, [value]);

  const _setValue = (val: number) => {
    setValue(val);
    typeof onChange === 'function' && onChange(val);
  };

  const handleChange = (val: number) => {
    if (container.current) {
      const containerWidth = container.current.getBoundingClientRect().width;
      const nextValue = getChangeValue({ value: val, containerWidth, min, max, step });
      _setValue(nextValue);
    }
  };

  const assignEvents = getDragEventsAssigner({
    onDrag: (event: ClientPositionEvent) => {
      container.current && container.current.focus();
      handleChange(getClientPosition(event) + start.current - offset.current);
    },
    onDragEnd: () => {
      setDragging(false);
    },
  });

  function handleThumbMouseDown(
    event: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>
  ) {
    if (event.cancelable) {
      event.preventDefault();
      event.stopPropagation();
    }

    start.current = thumb.current.offsetLeft;
    offset.current = getClientPosition(event as any);

    assignEvents();
  }

  const handleTrackMouseDown = (
    event: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>
  ) => {
    if (event.cancelable) {
      event.preventDefault();
    }

    const changePosition = getClientPosition(event.nativeEvent);
    const rect = container.current.getBoundingClientRect();

    start.current = changePosition - rect.left;
    offset.current = changePosition;

    assignEvents();
    handleChange(changePosition - rect.left);
  };

  const handleTrackKeydownCapture = (event: React.KeyboardEvent<HTMLDivElement>) => {
    switch (event.nativeEvent.code) {
      case 'ArrowUp':
      case 'ArrowRight': {
        event.preventDefault();
        thumb.current.focus();
        _setValue(Math.min(Math.max(_value + step, min), max));
        break;
      }

      case 'ArrowDown':
      case 'ArrowLeft': {
        event.preventDefault();
        thumb.current.focus();
        _setValue(Math.min(Math.max(_value - step, min), max));
        break;
      }

      default: {
        break;
      }
    }
  };

  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div
      {...others}
      tabIndex={-1}
      className={cx(classes.root, className)}
      ref={container}
      onTouchStart={handleTrackMouseDown}
      onMouseDown={handleTrackMouseDown}
      onTouchStartCapture={() => setDragging(true)}
      onTouchEndCapture={() => setDragging(false)}
      onMouseDownCapture={() => setDragging(true)}
      onMouseUpCapture={() => setDragging(false)}
      onKeyDownCapture={handleTrackKeydownCapture}
      style={{ ...style, ..._styles.root }}
    >
      <Track
        position={position}
        marks={marks}
        size={size}
        radius={radius}
        color={color}
        min={min}
        max={max}
        value={_value}
        themeOverride={themeOverride}
        styles={styles as any}
        classNames={classNames as any}
        onChange={setValue}
      >
        <Thumb
          max={max}
          min={min}
          value={_value}
          position={position}
          dragging={dragging}
          color={color}
          size={size}
          label={_label}
          elementRef={thumb}
          onMouseDown={handleThumbMouseDown}
          labelTransition={labelTransition}
          labelTransitionDuration={labelTransitionDuration}
          labelTransitionTimingFunction={labelTransitionTimingFunction}
          labelAlwaysOn={labelAlwaysOn}
          themeOverride={themeOverride}
          classNames={classNames as any}
          styles={styles as any}
        />
      </Track>

      <input type="hidden" name={name} value={_value} />
    </div>
  );
}

Slider.displayName = '@mantine/core/Slider';
