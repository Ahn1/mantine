import { MantineStylesTransform, useMantineTheme } from '@mantine/core';
// prettier-ignore
import { useCss } from './use-css';

function sxTransform(sx: any) {
  const theme = useMantineTheme();
  const { css } = useCss();
  const parsedSx = typeof sx === 'function' ? sx(theme) : sx;
  return !parsedSx ? '' : css(parsedSx);
}

function stylesTransform(styles: any, payload: any) {
  const theme = useMantineTheme();
  const { css } = useCss();

  if (!styles) {
    return {};
  }

  const stylesObject =
    typeof styles === 'function' ? styles(theme, payload.props, payload.ctx) : styles;

  return Object.keys(stylesObject).reduce((acc, key) => {
    const value = stylesObject[key];
    const parsedValue = typeof value === 'function' ? value(theme) : value;
    return { ...acc, [key]: css(parsedValue) };
  }, {});
}

export const emotionTransform: MantineStylesTransform = {
  sx: sxTransform,
  styles: stylesTransform,
};