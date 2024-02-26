(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[71639],{65270:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/checkbox",function(){return n(33650)}])},33650:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return $}});var o=n(24246),a=n(71670),l=n(27378),c=n(94193);let r=`
import { Checkbox } from '@mantine/core';


function Demo() {
  return (
    <Checkbox
      defaultChecked
      {{props}}
    />
  );
}
`,i={type:"configurator",component:e=>l.createElement(c.X,{...e,defaultChecked:!0}),code:r,centered:!0,controls:[{prop:"labelPosition",type:"segmented",data:[{value:"right",label:"Right"},{value:"left",label:"Left"}],initialValue:"right",libraryValue:"right"},{prop:"label",type:"string",initialValue:"I agree to sell my privacy",libraryValue:""},{prop:"description",type:"string",initialValue:"",libraryValue:""},{prop:"error",type:"string",initialValue:"",libraryValue:""},{prop:"color",type:"color",initialValue:"blue",libraryValue:"blue"},{prop:"variant",type:"segmented",data:[{value:"filled",label:"Filled"},{value:"outline",label:"Outline"}],initialValue:"filled",libraryValue:"filled"},{prop:"radius",type:"size",initialValue:"sm",libraryValue:"sm"},{prop:"size",type:"size",initialValue:"sm",libraryValue:"sm"},{prop:"disabled",type:"boolean",initialValue:!1,libraryValue:!1},{prop:"indeterminate",type:"boolean",initialValue:!1,libraryValue:!1}]};var s=n(27884);let d=`
import { Checkbox, Stack } from '@mantine/core';

function Demo() {
  return (
    <Stack>
      <Checkbox checked={false} onChange={() => {}} label="Default checkbox" />
      <Checkbox checked={false} onChange={() => {}} indeterminate label="Indeterminate checkbox" />
      <Checkbox checked onChange={() => {}} label="Checked checkbox" />
      <Checkbox checked variant="outline" onChange={() => {}} label="Outline checked checkbox" />
      <Checkbox
        variant="outline"
        onChange={() => {}}
        indeterminate
        label="Outline indeterminate checkbox"
      />
      <Checkbox disabled label="Disabled checkbox" />
      <Checkbox disabled checked onChange={() => {}} label="Disabled checked checkbox" />
      <Checkbox disabled indeterminate label="Disabled indeterminate checkbox" />
    </Stack>
  );
}
`,m={type:"code",component:function(){return l.createElement(s.K,null,l.createElement(c.X,{checked:!1,onChange:()=>{},label:"Default checkbox"}),l.createElement(c.X,{checked:!1,onChange:()=>{},indeterminate:!0,label:"Indeterminate checkbox"}),l.createElement(c.X,{checked:!0,onChange:()=>{},label:"Checked checkbox"}),l.createElement(c.X,{checked:!0,variant:"outline",onChange:()=>{},label:"Outline checked checkbox"}),l.createElement(c.X,{variant:"outline",onChange:()=>{},indeterminate:!0,label:"Outline indeterminate checkbox"}),l.createElement(c.X,{disabled:!0,label:"Disabled checkbox"}),l.createElement(c.X,{disabled:!0,checked:!0,onChange:()=>{},label:"Disabled checked checkbox"}),l.createElement(c.X,{disabled:!0,indeterminate:!0,label:"Disabled indeterminate checkbox"}))},code:d};var h=n(54764),u=(0,h.Z)("radioactive","IconRadioactive",[["path",{d:"M13.5 14.6l3 5.19a9 9 0 0 0 4.5 -7.79h-6a3 3 0 0 1 -1.5 2.6",key:"svg-0"}],["path",{d:"M13.5 9.4l3 -5.19a9 9 0 0 0 -9 0l3 5.19a3 3 0 0 1 3 0",key:"svg-1"}],["path",{d:"M10.5 14.6l-3 5.19a9 9 0 0 1 -4.5 -7.79h6a3 3 0 0 0 1.5 2.6",key:"svg-2"}]]),b=(0,h.Z)("biohazard","IconBiohazard",[["path",{d:"M12 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0",key:"svg-0"}],["path",{d:"M11.939 14c0 .173 .048 .351 .056 .533l0 .217a4.75 4.75 0 0 1 -4.533 4.745l-.217 0m-4.75 -4.75a4.75 4.75 0 0 1 7.737 -3.693m6.513 8.443a4.75 4.75 0 0 1 -4.69 -5.503l-.06 0m1.764 -2.944a4.75 4.75 0 0 1 7.731 3.477l0 .217m-11.195 -3.813a4.75 4.75 0 0 1 -1.828 -7.624l.164 -.172m6.718 0a4.75 4.75 0 0 1 -1.665 7.798",key:"svg-1"}]]);let p=`
import { Checkbox, CheckboxProps } from '@mantine/core';
import { IconBiohazard, IconRadioactive } from '@tabler/icons-react';

const CheckboxIcon: CheckboxProps['icon'] = ({ indeterminate, ...others }) =>
  indeterminate ? <IconRadioactive {...others} /> : <IconBiohazard {...others} />;

function Demo() {
  return (
    <>
      <Checkbox icon={CheckboxIcon} label="Custom icon" defaultChecked />
      <Checkbox icon={CheckboxIcon} label="Custom icon: indeterminate" indeterminate mt="sm" />
    </>
  );
}
`,x=({indeterminate:e,...t})=>e?l.createElement(u,{...t}):l.createElement(b,{...t}),k={type:"code",component:function(){return l.createElement(l.Fragment,null,l.createElement(c.X,{icon:x,label:"Custom icon",defaultChecked:!0}),l.createElement(c.X,{icon:x,label:"Custom icon: indeterminate",indeterminate:!0,mt:"sm"}))},code:p},f=`
import { Checkbox } from '@mantine/core';

function Demo() {
  return (
    <Checkbox
      defaultChecked
      color="lime.4"
      iconColor="dark.8"
      size="md"
      label="Bright lime checkbox"
    />
  );
}
`,C={type:"code",component:function(){return l.createElement(c.X,{defaultChecked:!0,color:"lime.4",iconColor:"dark.8",size:"md",label:"Bright lime checkbox"})},code:f,centered:!0};var v=n(63630),g=n(9136);let y=`
import { Checkbox, Anchor } from '@mantine/core';

function Demo() {
  return (
    <Checkbox
      label={
        <>
          I accept{' '}
          <Anchor href="https://mantine.dev" target="_blank" inherit>
            terms and conditions
          </Anchor>
        </>
      }
    />
  );
}
`,T={type:"code",component:function(){return l.createElement(c.X,{label:l.createElement(l.Fragment,null,"I accept"," ",l.createElement(g.e,{href:"https://mantine.dev",target:"_blank",inherit:!0},"terms and conditions"))})},code:y};var E=n(99684);let j=`
import { Tooltip, Checkbox } from '@mantine/core';

function Demo() {
  return (
    <>
      <Tooltip label="Checkbox with tooltip">
        <Checkbox label="Tooltip on checkbox only" />
      </Tooltip>

      <Tooltip label="Checkbox with tooltip" refProp="rootRef">
        <Checkbox label="Tooltip the entire element" mt="md" />
      </Tooltip>
    </>
  );
}
`,w={type:"code",component:function(){return l.createElement(l.Fragment,null,l.createElement(E.u,{label:"Checkbox with tooltip"},l.createElement(c.X,{label:"Tooltip on checkbox only"})),l.createElement(E.u,{label:"Checkbox with tooltip",refProp:"rootRef"},l.createElement(c.X,{label:"Tooltip the entire element",mt:"md"})))},code:j,centered:!0};var V=n(69300),D=n(74369),N=n(2256);let S=`.root {
  --checkbox-size-xxl: rem(42px);
  --checkbox-size-xxs: rem(14px);

  &[data-size='xxl'] {
    .label {
      font-size: rem(22px);
      line-height: rem(40px);
    }
  }

  &[data-size='xxs'] {
    .label {
      font-size: rem(10px);
      line-height: rem(14px);
    }
  }
}
`,X=`
import { MantineProvider, Checkbox, createTheme } from '@mantine/core';
import classes from './Demo.module.css';

const theme = createTheme({
  components: {
    Checkbox: Checkbox.extend({ classNames: classes }),
  },
});

function Demo() {
  return (
    <MantineProvider theme={theme}>
      <Checkbox size="xxs" label="Extra small checkbox" />
      <Checkbox size="xxl" label="Extra large checkbox" mt="md" />
    </MantineProvider>
  );
}
`,z=(0,D.j)({components:{Checkbox:c.X.extend({classNames:{root:"m-4308addd",label:"m-1db1f159"}})}}),I={type:"code",centered:!0,component:function(){return l.createElement(N.M2,{theme:z},l.createElement(c.X,{size:"xxs",label:"Extra small checkbox"}),l.createElement(c.X,{size:"xxl",label:"Extra large checkbox",mt:"md"}))},code:[{fileName:"Demo.tsx",code:X,language:"tsx"},{fileName:"Demo.module.css",code:S,language:"scss"}]};var P=n(22971);let R=`
import { Checkbox, Group } from '@mantine/core';


function Demo() {
  return (
    <Checkbox.Group
      defaultValue={['react']}
      {{props}}
    >
      <Group mt="xs">
        <Checkbox value="react" label="React" />
        <Checkbox value="svelte" label="Svelte" />
        <Checkbox value="ng" label="Angular" />
        <Checkbox value="vue" label="Vue" />
      </Group>
    </Checkbox.Group>
  );
}
`,B={type:"configurator",component:function(e){return l.createElement(c.X.Group,{defaultValue:["react"],...e},l.createElement(P.Z,{mt:"xs"},l.createElement(c.X,{value:"react",label:"React"}),l.createElement(c.X,{value:"svelte",label:"Svelte"}),l.createElement(c.X,{value:"ng",label:"Angular"}),l.createElement(c.X,{value:"vue",label:"Vue"})))},code:R,centered:!0,maxWidth:"100%",controls:[{prop:"label",type:"string",initialValue:"Select your favorite frameworks/libraries",libraryValue:""},{prop:"description",type:"string",initialValue:"This is anonymous",libraryValue:""},{prop:"error",type:"string",initialValue:"",libraryValue:""},{prop:"withAsterisk",type:"boolean",initialValue:!0,libraryValue:!1}]};var M=n(86423);let A=`
import { Checkbox } from '@mantine/core';

function Demo() {
  return (
    <Checkbox
      label="Checkbox"
      description="Checkbox description"
      error="Checkbox error"
      defaultChecked
     {{props}}
    />
  );
}
`,_={type:"styles-api",data:M.B,component:function(e){return l.createElement(c.X,{label:"Checkbox",description:"Checkbox description",error:"Checkbox error",defaultChecked:!0,...e})},code:A,centered:!0};var G=n(58311),O=n(19397),Text=n(26569);let W=`.root {
  position: relative;
}

.control {
  background-color: light-dark(var(--mantine-color-white), var(--mantine-color-dark-7));
  border: rem(1px) solid light-dark(var(--mantine-color-gray-3), var(--mantine-color-dark-4));
  padding: var(--mantine-spacing-md);
  padding-left: rem(60px);
  border-radius: var(--mantine-radius-md);
  transition: border-color 100ms ease;

  &[data-checked] {
    border-color: var(--mantine-color-blue-filled);
  }
}

.checkboxWrapper {
  position: absolute;
  top: var(--mantine-spacing-md);
  left: var(--mantine-spacing-md);
  pointer-events: none;
}

.checkbox {
  &:not(:checked) {
    background-color: var(--mantine-color-body);
  }
}

.label {
  font-family: var(--mantine-font-family-monospace);
  font-weight: bold;
  font-size: var(--mantine-font-size-md);
  line-height: 1.3;
  color: var(--mantine-color-bright);
}

.description {
  margin-top: rem(8px);
  color: var(--mantine-color-dimmed);
  font-size: var(--mantine-font-size-xs);
}
`,Y=`
import { Checkbox, UnstyledButton, Text } from '@mantine/core';
import classes from './Demo.module.css';

function Demo() {
  const [checked, setChecked] = useState(false);

  return (
    <div className={classes.root}>
      <Checkbox
        classNames={{ root: classes.checkboxWrapper, input: classes.checkbox }}
        checked={checked}
        onChange={(event) => setChecked(event.currentTarget.checked)}
        tabIndex={-1}
        size="md"
        aria-label="Checkbox example"
      />

      <UnstyledButton
        className={classes.control}
        data-checked={checked || undefined}
        onClick={() => setChecked((c) => !c)}
      >
        <Text className={classes.label}>@mantine/core</Text>
        <Text className={classes.description}>
          Core components library: inputs, buttons, overlays, etc.
        </Text>
      </UnstyledButton>
    </div>
  );
}
`,F={type:"code",centered:!0,maxWidth:320,component:function(){let[e,t]=(0,l.useState)(!1);return l.createElement("div",{className:"m-2cb8989f"},l.createElement(c.X,{classNames:{root:"m-aa376f73",input:"m-dd220d00"},checked:e,onChange:e=>t(e.currentTarget.checked),tabIndex:-1,size:"md","aria-label":"Checkbox example"}),l.createElement(O.k,{className:"m-241ed880","data-checked":e||void 0,onClick:()=>t(e=>!e)},l.createElement(Text.x,{className:"m-69ff5ed7"},"@mantine/core"),l.createElement(Text.x,{className:"m-cf98ad9f"},"Core components library: inputs, buttons, overlays, etc.")))},defaultExpanded:!1,code:[{fileName:"Demo.tsx",language:"tsx",code:Y},{fileName:"Demo.module.css",language:"scss",code:W}]};var L={root:"m-43bfb50c"};let U=`
.root {
  border: rem(1px) solid light-dark(var(--mantine-color-gray-3), var(--mantine-color-dark-4));
  padding: var(--mantine-spacing-xs) var(--mantine-spacing-sm);
  border-radius: var(--mantine-radius-md);
  font-weight: 500;
  transition:
    color 100ms ease,
    background-color 100ms ease,
    border-color 100ms ease;
  cursor: pointer;

  &[data-checked] {
    background-color: var(--mantine-color-blue-filled);
    border-color: var(--mantine-color-blue-filled);
    color: var(--mantine-color-white);
  }

  & * {
    pointer-events: none;
    user-select: none;
  }
}
`,Z=`
import { Checkbox } from '@mantine/core';
import classes from './Demo.module.css';

function Demo() {
  const [checked, setChecked] = useState(false);

  return (
    <Checkbox
      classNames={classes}
      label="Checkbox button"
      checked={checked}
      onChange={(event) => setChecked(event.currentTarget.checked)}
      wrapperProps={{
        onClick: () => setChecked((c) => !c),
      }}
    />
  );
}
`,K={type:"code",component:function(){let[e,t]=(0,l.useState)(!1);return l.createElement(c.X,{classNames:L,label:"Checkbox button",checked:e,onChange:e=>t(e.currentTarget.checked),wrapperProps:{onClick:()=>t(e=>!e)}})},centered:!0,defaultExpanded:!1,code:[{fileName:"Demo.tsx",code:Z,language:"tsx"},{fileName:"Demo.module.css",code:U,language:"scss"}]};var q=n(3916),H=n(54568);let J=(0,q.A)(H.us.Checkbox);function Q(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components},{Demo:n,GetElementRef:l,StylesApiSelectors:c,WrapperProps:r}=t;return n||ee("Demo",!0),l||ee("GetElementRef",!0),c||ee("StylesApiSelectors",!0),r||ee("WrapperProps",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsx)(n,{data:i}),"\n",(0,o.jsx)(t.h2,{id:"controlled",children:"Controlled"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { Checkbox } from '@mantine/core';\n\nfunction Demo() {\n  const [checked, setChecked] = useState(false);\n  return (\n    <Checkbox\n      checked={checked}\n      onChange={(event) => setChecked(event.currentTarget.checked)}\n    />\n  );\n}\n"})}),"\n",(0,o.jsx)(t.h2,{id:"states",children:"States"}),"\n",(0,o.jsx)(n,{data:m}),"\n",(0,o.jsx)(t.h2,{id:"change-icons",children:"Change icons"}),"\n",(0,o.jsx)(n,{data:k}),"\n",(0,o.jsx)(t.h2,{id:"change-icon-color",children:"Change icon color"}),"\n",(0,o.jsxs)(t.p,{children:["Use ",(0,o.jsx)(t.code,{children:"iconColor"})," prop to change icon color. You can reference colors from ",(0,o.jsx)(t.code,{children:"theme.colors"})," or use any valid CSS color:"]}),"\n",(0,o.jsx)(n,{data:C}),"\n",(0,o.jsx)(t.h2,{id:"indeterminate-state",children:"Indeterminate state"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"Checkbox"})," supports indeterminate state. When ",(0,o.jsx)(t.code,{children:"indeterminate"})," prop is set,\n",(0,o.jsx)(t.code,{children:"checked"})," prop is ignored (checkbox always has checked styles):"]}),"\n",(0,o.jsx)(n,{data:v.N,demoProps:{toggle:!0}}),"\n",(0,o.jsx)(t.h2,{id:"label-with-link",children:"Label with link"}),"\n",(0,o.jsx)(n,{data:T}),"\n",(0,o.jsx)(t.h2,{id:"checkbox-with-tooltip",children:"Checkbox with tooltip"}),"\n",(0,o.jsxs)(t.p,{children:["You can change target element to which tooltip is attached with ",(0,o.jsx)(t.code,{children:"refProp"}),":"]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["If ",(0,o.jsx)(t.code,{children:"refProp"})," is not set, the tooltip is attached to the checkbox input"]}),"\n",(0,o.jsxs)(t.li,{children:["If ",(0,o.jsx)(t.code,{children:'refProp="rootRef"'})," is set, the tooltip is attached to the root element (contains label, input and other elements)"]}),"\n"]}),"\n",(0,o.jsx)(n,{data:w}),"\n",(0,o.jsx)(t.h2,{id:"pointer-cursor",children:"Pointer cursor"}),"\n",(0,o.jsxs)(t.p,{children:["By default, checkbox input and label have ",(0,o.jsx)(t.code,{children:"cursor: default"})," (same as native ",(0,o.jsx)(t.code,{children:'input[type="checkbox"]'}),").\nTo change cursor to pointer, set ",(0,o.jsx)(t.code,{children:"cursorType"})," on ",(0,o.jsx)(t.a,{href:"/theming/theme-object/",children:"theme"}),":"]}),"\n",(0,o.jsx)(n,{data:V.g}),"\n",(0,o.jsx)(t.h2,{id:"add-custom-sizes",children:"Add custom sizes"}),"\n",(0,o.jsxs)(t.p,{children:["You can add any number of custom sizes with ",(0,o.jsx)(t.a,{href:"/styles/data-attributes/",children:"data-size"})," attribute:"]}),"\n",(0,o.jsx)(n,{data:I}),"\n",(0,o.jsx)(r,{component:"Checkbox"}),"\n",(0,o.jsx)(t.h2,{id:"checkboxgroup",children:"Checkbox.Group"}),"\n",(0,o.jsx)(n,{data:B}),"\n",(0,o.jsx)(t.h2,{id:"controlled-checkboxgroup",children:"Controlled Checkbox.Group"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",children:'import { useState } from \'react\';\nimport { Checkbox } from \'@mantine/core\';\n\nfunction Demo() {\n  const [value, setValue] = useState<string[]>([]);\n\n  return (\n    <Checkbox.Group value={value} onChange={setValue}>\n      <Checkbox value="react" label="React" />\n      <Checkbox value="svelte" label="Svelte" />\n    </Checkbox.Group>\n  );\n}\n'})}),"\n",(0,o.jsx)(l,{component:"Checkbox",refType:"input"}),"\n",(0,o.jsx)(c,{component:"Checkbox"}),"\n",(0,o.jsx)(n,{data:_}),"\n",(0,o.jsx)(t.h2,{id:"example-table-with-row-selection",children:"Example: Table with row selection"}),"\n",(0,o.jsx)(n,{data:G.j}),"\n",(0,o.jsx)(t.h2,{id:"example-checkbox-card",children:"Example: Checkbox card"}),"\n",(0,o.jsx)(n,{data:F}),"\n",(0,o.jsx)(t.h2,{id:"example-customize-with-styles-api",children:"Example: Customize with Styles API"}),"\n",(0,o.jsx)(n,{data:K}),"\n",(0,o.jsx)(t.h2,{id:"accessibility",children:"Accessibility"}),"\n",(0,o.jsxs)(t.p,{children:["Set ",(0,o.jsx)(t.code,{children:"aria-label"})," or ",(0,o.jsx)(t.code,{children:"label"})," prop to make the checkbox accessible:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",children:'import { Checkbox } from \'@mantine/core\';\n\n// Not ok, input is not labeled\nfunction Bad() {\n  return <Checkbox />;\n}\n\n// Ok, input is labelled by aria-label\nfunction GoodAriaLabel() {\n  return <Checkbox aria-label="My checkbox" />;\n}\n\n// Ok, input is labelled by label element\nfunction GoodLabel() {\n  return <Checkbox label="My checkbox" />;\n}\n'})})]})}function $(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.jsx)(J,{...e,children:(0,o.jsx)(Q,{...e})})}function ee(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},63630:function(e,t,n){"use strict";n.d(t,{N:function(){return s}});var o=n(27378),a=n(94193),l=n(56589),c=n(55574);let r=`
import { useListState, randomId } from '@mantine/hooks';
import { Checkbox } from '@mantine/core';

const initialValues = [
  { label: 'Receive email notifications', checked: false, key: randomId() },
  { label: 'Receive sms notifications', checked: false, key: randomId() },
  { label: 'Receive push notifications', checked: false, key: randomId() },
];

export function IndeterminateCheckbox() {
  const [values, handlers] = useListState(initialValues);

  const allChecked = values.every((value) => value.checked);
  const indeterminate = values.some((value) => value.checked) && !allChecked;

  const items = values.map((value, index) => (
    <Checkbox
      mt="xs"
      ml={33}
      label={value.label}
      key={value.key}
      checked={value.checked}
      onChange={(event) => handlers.setItemProp(index, 'checked', event.currentTarget.checked)}
    />
  ));

  return (
    <>
      <Checkbox
        checked={allChecked}
        indeterminate={indeterminate}
        label="Receive all notifications"
        onChange={() =>
          handlers.setState((current) =>
            current.map((value) => ({ ...value, checked: !allChecked }))
          )
        }
      />
      {items}
    </>
  );
}
`,i=[{label:"Receive email notifications",checked:!1,key:(0,c.k)()},{label:"Receive sms notifications",checked:!1,key:(0,c.k)()},{label:"Receive push notifications",checked:!1,key:(0,c.k)()}],s={type:"code",code:r,component:function(){let[e,t]=function(e=[]){let[t,n]=(0,o.useState)(e);return[t,{setState:n,append:(...e)=>n(t=>[...t,...e]),prepend:(...e)=>n(t=>[...e,...t]),insert:(e,...t)=>n(n=>[...n.slice(0,e),...t,...n.slice(e)]),pop:()=>n(e=>{let t=[...e];return t.pop(),t}),shift:()=>n(e=>{let t=[...e];return t.shift(),t}),apply:e=>n(t=>t.map((t,n)=>e(t,n))),applyWhere:(e,t)=>n(n=>n.map((n,o)=>e(n,o)?t(n,o):n)),remove:(...e)=>n(t=>t.filter((t,n)=>!e.includes(n))),reorder:({from:e,to:t})=>n(n=>{let o=[...n],a=n[e];return o.splice(e,1),o.splice(t,0,a),o}),swap:({from:e,to:t})=>n(n=>{let o=[...n],a=o[e],l=o[t];return o.splice(t,1,a),o.splice(e,1,l),o}),setItem:(e,t)=>n(n=>{let o=[...n];return o[e]=t,o}),setItemProp:(e,t,o)=>n(n=>{let a=[...n];return a[e]={...a[e],[t]:o},a}),filter:e=>{n(t=>t.filter(e))}}]}(i),n=e.every(e=>e.checked),c=e.some(e=>e.checked)&&!n,r=e.map((e,n)=>o.createElement(a.X,{mt:"xs",ml:33,label:e.label,key:e.key,checked:e.checked,onChange:e=>t.setItemProp(n,"checked",e.currentTarget.checked)}));return o.createElement(l.x,{maw:400,mx:"auto"},o.createElement(a.X,{checked:n,indeterminate:c,label:"Receive all notifications",onChange:()=>t.setState(e=>e.map(e=>({...e,checked:!n})))}),r)}}},58311:function(e,t,n){"use strict";n.d(t,{j:function(){return i}});var o=n(27378),a=n(28862),l=n(94193);let c=`
import { Table, Checkbox } from '@mantine/core';

const elements = [
  { position: 6, mass: 12.011, symbol: 'C', name: 'Carbon' },
  { position: 7, mass: 14.007, symbol: 'N', name: 'Nitrogen' },
  { position: 39, mass: 88.906, symbol: 'Y', name: 'Yttrium' },
  { position: 56, mass: 137.33, symbol: 'Ba', name: 'Barium' },
  { position: 58, mass: 140.12, symbol: 'Ce', name: 'Cerium' },
];

function Demo() {
  const [selectedRows, setSelectedRows] = useState<number[]>([]);

  const rows = elements.map((element) => (
    <Table.Tr
      key={element.name}
      bg={selectedRows.includes(element.position) ? 'var(--mantine-color-blue-light)' : undefined}
    >
      <Table.Td>
        <Checkbox
          aria-label="Select row"
          checked={selectedRows.includes(element.position)}
          onChange={(event) =>
            setSelectedRows(
              event.currentTarget.checked
                ? [...selectedRows, element.position]
                : selectedRows.filter((position) => position !== element.position)
            )
          }
        />
      </Table.Td>
      <Table.Td>{element.position}</Table.Td>
      <Table.Td>{element.name}</Table.Td>
      <Table.Td>{element.symbol}</Table.Td>
      <Table.Td>{element.mass}</Table.Td>
    </Table.Tr>
  ));

  return (
    <Table>
      <Table.Thead>
        <Table.Tr>
          <Table.Th />
          <Table.Th>Element position</Table.Th>
          <Table.Th>Element name</Table.Th>
          <Table.Th>Symbol</Table.Th>
          <Table.Th>Atomic mass</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
  );
}
`,r=[{position:6,mass:12.011,symbol:"C",name:"Carbon"},{position:7,mass:14.007,symbol:"N",name:"Nitrogen"},{position:39,mass:88.906,symbol:"Y",name:"Yttrium"},{position:56,mass:137.33,symbol:"Ba",name:"Barium"},{position:58,mass:140.12,symbol:"Ce",name:"Cerium"}],i={type:"code",component:function(){let[e,t]=(0,o.useState)([]),n=r.map(n=>o.createElement(a.i.Tr,{key:n.name,bg:e.includes(n.position)?"var(--mantine-color-blue-light)":void 0},o.createElement(a.i.Td,null,o.createElement(l.X,{"aria-label":"Select row",checked:e.includes(n.position),onChange:o=>t(o.currentTarget.checked?[...e,n.position]:e.filter(e=>e!==n.position))})),o.createElement(a.i.Td,null,n.position),o.createElement(a.i.Td,null,n.name),o.createElement(a.i.Td,null,n.symbol),o.createElement(a.i.Td,null,n.mass)));return o.createElement(a.i,null,o.createElement(a.i.Thead,null,o.createElement(a.i.Tr,null,o.createElement(a.i.Th,null),o.createElement(a.i.Th,null,"Element position"),o.createElement(a.i.Th,null,"Element name"),o.createElement(a.i.Th,null,"Symbol"),o.createElement(a.i.Th,null,"Atomic mass"))),o.createElement(a.i.Tbody,null,n))},defaultExpanded:!1,code:c}},69300:function(e,t,n){"use strict";n.d(t,{g:function(){return s}});var o=n(27378),a=n(74369),l=n(94193),c=n(2256);let r=`
import { MantineProvider, createTheme, Checkbox } from '@mantine/core';

const theme = createTheme({
  cursorType: 'pointer',
});

function Demo() {
  return (
    <>
      <Checkbox label="Default cursor" />

      <MantineProvider theme={theme}>
        <Checkbox label="Pointer cursor" mt="md" />
      </MantineProvider>
    </>
  );
}
`,i=(0,a.j)({cursorType:"pointer"}),s={type:"code",component:function(){return o.createElement(o.Fragment,null,o.createElement(l.X,{label:"Default cursor"}),o.createElement(c.M2,{theme:i},o.createElement(l.X,{label:"Pointer cursor",mt:"md",styles:{input:{cursor:"pointer"},label:{cursor:"pointer"}}})))},centered:!0,code:r}}},function(e){e.O(0,[30370,15819,2775,49774,92888,40179],function(){return e(e.s=65270)}),_N_E=e.O()}]);