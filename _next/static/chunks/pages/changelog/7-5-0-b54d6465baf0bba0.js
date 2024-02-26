(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[47642],{39485:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/changelog/7-5-0",function(){return n(14539)}])},14539:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return x}});var a=n(24246),r=n(71670),o=n(38607),l=n(62464),i=n(86786),s=n(92302),c=n(5496),d=n(20507),u=n(63273),m=n(3916),h=n(54568);let p=(0,m.A)(h.us.Changelog750);function f(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components},{Demo:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"donutchart-component",children:"DonutChart component"}),"\n",(0,a.jsxs)(t.p,{children:["New ",(0,a.jsx)(t.a,{href:"/charts/donut-chart",children:"DonutChart"})," component:"]}),"\n",(0,a.jsx)(n,{data:o.j}),"\n",(0,a.jsx)(t.h2,{id:"piechart-component",children:"PieChart component"}),"\n",(0,a.jsxs)(t.p,{children:["New ",(0,a.jsx)(t.a,{href:"/charts/pie-chart",children:"PieChart"})," component:"]}),"\n",(0,a.jsx)(n,{data:l.j}),"\n",(0,a.jsx)(t.h2,{id:"mantinedates-value-formatter",children:"@mantine/dates value formatter"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"/dates/date-picker-input",children:"DatePickerInput"}),", ",(0,a.jsx)(t.a,{href:"/dates/month-picker-input",children:"MonthPickerInput"})," and\n",(0,a.jsx)(t.a,{href:"/dates/year-picker-input",children:"YearPickerInput"})," now support ",(0,a.jsx)(t.code,{children:"valueFormatter"})," prop."]}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"valueFormatter"})," is a more powerful alternative to ",(0,a.jsx)(t.code,{children:"valueFormat"})," prop.\nIt allows formatting value label with a custom function.\nThe function is the same for all component types (",(0,a.jsx)(t.code,{children:"default"}),", ",(0,a.jsx)(t.code,{children:"multiple"})," and ",(0,a.jsx)(t.code,{children:"range"}),")\n– you need to perform additional checks inside the function to handle different types."]}),"\n",(0,a.jsxs)(t.p,{children:["Example of using a custom formatter function with ",(0,a.jsx)(t.code,{children:'type="multiple"'}),":"]}),"\n",(0,a.jsx)(n,{data:i.wD}),"\n",(0,a.jsx)(t.h2,{id:"mantinedates-consistent-weeks",children:"@mantine/dates consistent weeks"}),"\n",(0,a.jsxs)(t.p,{children:["You can now force each month to have 6 weeks by setting ",(0,a.jsx)(t.code,{children:"consistentWeeks: true"})," on\n",(0,a.jsx)(t.a,{href:"/dates/getting-started",children:"DatesProvider"}),". This is useful if you want to avoid layout\nshifts when month changes."]}),"\n",(0,a.jsx)(n,{data:s.U}),"\n",(0,a.jsx)(t.h2,{id:"charts-series-label",children:"Charts series label"}),"\n",(0,a.jsxs)(t.p,{children:["It is now possible to change series labels with ",(0,a.jsx)(t.code,{children:"label"})," property\nin ",(0,a.jsx)(t.code,{children:"series"})," object. This feature is supported in ",(0,a.jsx)(t.a,{href:"/charts/area-chart",children:"AreaChart"}),",\n",(0,a.jsx)(t.a,{href:"/charts/bar-chart",children:"BarChart"})," and ",(0,a.jsx)(t.a,{href:"/charts/line-chart",children:"LineChart"})," components."]}),"\n",(0,a.jsx)(n,{data:c.Z}),"\n",(0,a.jsx)(t.h2,{id:"charts-value-formatter",children:"Charts value formatter"}),"\n",(0,a.jsxs)(t.p,{children:["All ",(0,a.jsx)(t.code,{children:"@mantine/charts"})," components now support ",(0,a.jsx)(t.code,{children:"valueFormatter"})," prop, which allows\nformatting value that is displayed on the y axis and inside the tooltip."]}),"\n",(0,a.jsx)(n,{data:d.w}),"\n",(0,a.jsx)(t.h2,{id:"headings-text-wrap",children:"Headings text wrap"}),"\n",(0,a.jsxs)(t.p,{children:["New ",(0,a.jsx)(t.a,{href:"/core/title",children:"Title"})," ",(0,a.jsx)(t.code,{children:"textWrap"})," prop sets ",(0,a.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/text-wrap",children:"text-wrap"}),"\nCSS property. It controls how text inside an element is wrapped."]}),"\n",(0,a.jsx)(n,{data:u.V}),"\n",(0,a.jsxs)(t.p,{children:["You can also set ",(0,a.jsx)(t.code,{children:"textWrap"})," on ",(0,a.jsx)(t.a,{href:"/theming/theme-object",children:"theme"}),":"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-tsx",children:"import { createTheme, MantineProvider } from '@mantine/core';\n\nconst theme = createTheme({\n  headings: {\n    textWrap: 'wrap',\n  },\n});\n\nfunction Demo() {\n  return (\n    <MantineProvider theme={theme}>\n      <Title>Some very long title that should wrap</Title>\n    </MantineProvider>\n  );\n}\n"})}),"\n",(0,a.jsxs)(t.p,{children:["If set on theme, ",(0,a.jsx)(t.code,{children:"textWrap"})," is also applied to headings in ",(0,a.jsx)(t.a,{href:"/core/typography-styles-provider",children:"TypographyStylesProvider"})]}),"\n",(0,a.jsx)(t.h2,{id:"mod-prop",children:"mod prop"}),"\n",(0,a.jsxs)(t.p,{children:["All components now support ",(0,a.jsx)(t.code,{children:"mod"})," prop, which allows adding data attributes to\nthe root element:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-tsx",children:"import { Box } from '@mantine/core';\n\n<Box mod=\"data-button\" />;\n// -> <div data-button />\n\n<Box mod={{ opened: true }} />;\n// -> <div data-opened />\n\n<Box mod={{ opened: false }} />;\n// -> <div />\n\n<Box mod={['button', { opened: true }]} />;\n// -> <div data-button data-opened />\n\n<Box mod={{ orientation: 'horizontal' }} />;\n// -> <div data-orientation=\"horizontal\" />\n"})}),"\n",(0,a.jsx)(t.h2,{id:"documentation-updates",children:"Documentation updates"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["New ",(0,a.jsx)(t.a,{href:"/guides/vitest/",children:"testing with Vitest guide"})]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"/core/native-select/#with-dividers",children:"NativeSelect"})," with dividers demo"]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"/core/popover/#middlewares",children:"Popover"})," ",(0,a.jsx)(t.code,{children:"shift"})," and ",(0,a.jsx)(t.code,{children:"flip"})," middlewares documentation"]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"/core/combobox/#popover-props",children:"Combobox"})," props related to ",(0,a.jsx)(t.a,{href:"/core/popover",children:"Popover"})," documentation"]}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"/styles/mantine-styles/#loading-styles-from-cdn",children:"Loading styles from CDN guide"})}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"/core/anchor/#text-props",children:"Anchor"})," now includes additional documentation on how to use ",(0,a.jsx)(t.a,{href:"/core/text",children:"Text"})," props"]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"/core/pagination",children:"Pagination"})," now includes props tables for all compound components"]}),"\n",(0,a.jsxs)(t.li,{children:["A more detailed breakdown of ",(0,a.jsx)(t.a,{href:"/about/#browser-support",children:"browser support"})," has been added to the about page"]}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"help-center-updates",children:"Help center updates"}),"\n",(0,a.jsxs)(t.p,{children:["New articles added to the ",(0,a.jsx)(t.a,{href:"https://help.mantine.dev",children:"help center"}),":"]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://help.mantine.dev/q/can-i-use-mantine-with-astro",children:"Can I use Mantine with Astro?"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://help.mantine.dev/q/how-can-i-contribute",children:"How can I contribute to the library?"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://help.mantine.dev/q/dynamic-css-styles",children:"How can I add dynamic CSS styles?"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://help.mantine.dev/q/next-load-fonts",children:"How can I load fonts in Next.js?"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://help.mantine.dev/q/vite-load-fonts",children:"How can I load fonts in Vite?"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://help.mantine.dev/q/floating-action-button",children:"Is there a floating action button component?"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://help.mantine.dev/q/inputs-placeholder-color",children:"How to change inputs placeholder color?"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://help.mantine.dev/q/dates-missing-styles",children:"I do not have styles in my dates components..."})}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"other-changes",children:"Other changes"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"/core/checkbox",children:"Checkbox.Group"}),", ",(0,a.jsx)(t.a,{href:"/core/radio",children:"Radio.Group"})," and ",(0,a.jsx)(t.a,{href:"/core/switch",children:"Switch.Group"})," now support ",(0,a.jsx)(t.code,{children:"readOnly"})," prop"]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"/core/action-icon",children:"ActionIcon"})," now has ",(0,a.jsx)(t.code,{children:"loading"})," state animation"]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"/core/segmented-control",children:"SegmentedControl"})," now supports ",(0,a.jsx)(t.code,{children:"withItemsBorder"})," prop which allows removing border between items"]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"/core/progress",children:"Progress"})," now supports ",(0,a.jsx)(t.code,{children:"transitionDuration"})," prop which controls section width animation duration"]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"/core/textarea",children:"Textarea"})," and ",(0,a.jsx)(t.a,{href:"/core/json-input",children:"JsonInput"})," components now support ",(0,a.jsx)(t.code,{children:"resize"})," prop, which allows setting ",(0,a.jsx)(t.code,{children:"resize"})," CSS property on the input"]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"@mantine/hooks"})," package now exports ",(0,a.jsx)(t.a,{href:"/hooks/use-local-storage/#read-storage-value",children:"readLocalStorageValue and readSessionStorageValue"})," function to get value from storage outside of React components"]}),"\n"]})]})}function x(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,a.jsx)(p,{...e,children:(0,a.jsx)(f,{...e})})}},5496:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var a=n(27378),r=n(44432),o=n(61566);let l=`
import { AreaChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <AreaChart
      h={300}
      data={data}
      dataKey="date"
      type="stacked"
      withLegend
      legendProps={{ verticalAlign: 'bottom' }}
      series={[
        { name: 'Apples', label: 'Apples sales', color: 'indigo.6' },
        { name: 'Oranges', label: 'Oranges sales', color: 'blue.6' },
        { name: 'Tomatoes', label: 'Tomatoes sales', color: 'teal.6' },
      ]}
    />
  );
}
`,i={type:"code",component:function(){return a.createElement(r.T,{h:300,data:o.aT,dataKey:"date",type:"stacked",withLegend:!0,legendProps:{verticalAlign:"bottom"},series:[{name:"Apples",label:"Apples sales",color:"indigo.6"},{name:"Oranges",label:"Oranges sales",color:"blue.6"},{name:"Tomatoes",label:"Tomatoes sales",color:"teal.6"}]})},code:[{code:l,language:"tsx",fileName:"Demo.tsx"},{code:o.op,language:"tsx",fileName:"data.ts"}]}},20507:function(e,t,n){"use strict";n.d(t,{w:function(){return i}});var a=n(27378),r=n(44432),o=n(61566);let l=`
import { AreaChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <AreaChart
      h={300}
      data={data}
      dataKey="date"
      type="stacked"
      valueFormatter={(value) => new Intl.NumberFormat('en-US').format(value)}
      series={[
        { name: 'Apples', color: 'indigo.6' },
        { name: 'Oranges', color: 'blue.6' },
        { name: 'Tomatoes', color: 'teal.6' },
      ]}
    />
  );
}
`,i={type:"code",component:function(){return a.createElement(r.T,{h:300,data:o.aT,dataKey:"date",type:"stacked",valueFormatter:e=>new Intl.NumberFormat("en-US").format(e),series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:l,language:"tsx",fileName:"Demo.tsx"},{code:o.op,language:"tsx",fileName:"data.ts"}]}},38607:function(e,t,n){"use strict";n.d(t,{j:function(){return i}});var a=n(27378),r=n(15514),o=n(7750);let l=`
import { DonutChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <DonutChart data={data} />;
}
`,i={type:"code",component:function(){return a.createElement(r.Y,{data:o.a})},code:[{code:l,language:"tsx",fileName:"Demo.tsx"},{code:o.o,language:"tsx",fileName:"data.ts"}],centered:!0}},7750:function(e,t,n){"use strict";n.d(t,{a:function(){return a},o:function(){return r}});let a=[{name:"USA",value:400,color:"indigo.6"},{name:"India",value:300,color:"yellow.6"},{name:"Japan",value:100,color:"teal.6"},{name:"Other",value:200,color:"gray.6"}],r=`
export const data = [
  { name: 'USA', value: 400, color: 'indigo.6' },
  { name: 'India', value: 300, color: 'yellow.6' },
  { name: 'Japan', value: 100, color: 'teal.6' },
  { name: 'Other', value: 200, color: 'gray.6' },
];
`},62464:function(e,t,n){"use strict";n.d(t,{j:function(){return i}});var a=n(27378),r=n(88915),o=n(58822);let l=`
import { PieChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <PieChart data={data} />;
}
`,i={type:"code",component:function(){return a.createElement(r.u,{data:o.a})},code:[{code:l,language:"tsx",fileName:"Demo.tsx"},{code:o.o,language:"tsx",fileName:"data.ts"}],centered:!0}},58822:function(e,t,n){"use strict";n.d(t,{a:function(){return a},o:function(){return r}});let a=[{name:"USA",value:400,color:"indigo.6"},{name:"India",value:300,color:"yellow.6"},{name:"Japan",value:300,color:"teal.6"},{name:"Other",value:200,color:"gray.6"}],r=`
export const data = [
  { name: 'USA', value: 400, color: 'indigo.6' },
  { name: 'India', value: 300, color: 'yellow.6' },
  { name: 'Japan', value: 300, color: 'teal.6' },
  { name: 'Other', value: 200, color: 'gray.6' },
];
`},63273:function(e,t,n){"use strict";n.d(t,{V:function(){return l}});var a=n(27378),r=n(57847);let o=`
import { Title } from '@mantine/core';

function Demo() {
  return (
    <Title order={3}{{props}}>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi voluptatibus inventore iusto
      cum dolore molestiae perspiciatis! Totam repudiandae impedit maxime!
    </Title>
  );
}
`,l={type:"configurator",component:function(e){return a.createElement(r.D,{order:3,...e},"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi voluptatibus inventore iusto cum dolore molestiae perspiciatis! Totam repudiandae impedit maxime!")},code:o,centered:!0,controls:[{type:"segmented",prop:"textWrap",initialValue:"wrap",libraryValue:"__",data:[{value:"wrap",label:"wrap"},{value:"balance",label:"balance"}]}]}},86786:function(e,t,n){"use strict";n.d(t,{$S:function(){return u},gB:function(){return s},j_:function(){return o},m6:function(){return l},oC:function(){return c},qv:function(){return d},w6:function(){return i},wD:function(){return m}});var a=n(83014);n(27378);var r=n(6306);let{usage:o,multiple:l,range:i,configurator:s,modal:c,icon:d,clearable:u,valueFormatter:m}=(0,r.B)(a.a)},92302:function(e,t,n){"use strict";n.d(t,{U:function(){return i}});var a=n(27378),r=n(19529),o=n(68959);let l=`
import { DatePicker, DatesProvider } from '@mantine/dates';

function Demo() {
  return (
    <DatesProvider settings={{ consistentWeeks: true }}>
      <DatePicker />
    </DatesProvider>
  );
}
`,i={type:"code",component:function(){return a.createElement(r.wf,{settings:{consistentWeeks:!0}},a.createElement(o.M,null))},code:l,centered:!0}},6306:function(e,t,n){"use strict";n.d(t,{B:function(){return x}});var a=n(27378);let r=e=>`
import { ${e} } from '@mantine/dates';

function Demo() {
  return (
    <${e}
      clearable
      defaultValue={new Date()}
      label="Pick date"
      placeholder="Pick date"
    />
  );
}
`,o=e=>`import { ${e} } from '@mantine/dates';


function Demo() {
  return (
    <${e}
      {{props}}
    />
  );
}
`;var l=n(942),i=n(71078);let s=e=>`
import { useState } from 'react';
import { rem } from '@mantine/core';
import { IconCalendar } from '@tabler/icons-react';
import { ${e} } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<Date | null>(null);
  const icon = <IconCalendar style={{ width: rem(18), height: rem(18) }} stroke={1.5} />;
  return (
    <${e}
      leftSection={icon}
      leftSectionPointerEvents="none"
      label="Pick date"
      placeholder="Pick date"
      value={value}
      onChange={setValue}
    />
  );
}
`,c=e=>`
import { useState } from 'react';
import { ${e} } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<Date | null>(null);
  return (
    <${e}
      dropdownType="modal"
      label="Pick date"
      placeholder="Pick date"
      value={value}
      onChange={setValue}
    />
  );
}
`,d=e=>`
import { useState } from 'react';
import { ${e} } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<Date[]>([]);
  return (
    <${e}
      type="multiple"
      label="Pick dates"
      placeholder="Pick dates"
      value={value}
      onChange={setValue}
    />
  );
}
`,u=e=>`
import { useState } from 'react';
import { ${e} } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<[Date | null, Date | null]>([null, null]);
  return (
    <${e}
      type="range"
      label="Pick dates range"
      placeholder="Pick dates range"
      value={value}
      onChange={setValue}
    />
  );
}
`,m=e=>`
import { useState } from 'react';
import { ${e} } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<Date | null>(null);
  return (
    <${e}
      label="Pick date"
      placeholder="Pick date"
      value={value}
      onChange={setValue}
    />
  );
}
`;var h=n(27693);let p=e=>`
import dayjs from 'dayjs';
import { useState } from 'react';
import { ${e}, DateFormatter } from '@mantine/dates';

const formatter: DateFormatter = ({ type, date, locale, format }) => {
  if (type === 'multiple' && Array.isArray(date)) {
    if (date.length === 1) {
      return dayjs(date[0]).locale(locale).format(format);
    }

    if (date.length > 1) {
      return \`\${date.length} dates selected\`;
    }

    return '';
  }

  return '';
};

function Demo() {
  const [value, setValue] = useState<Date[]>([]);

  return (
    <${e}
      label="Pick 2 dates or more"
      placeholder="Pick 2 dates or more"
      value={value}
      onChange={setValue}
      type="multiple"
      valueFormatter={formatter}
    />
  );
}
`,f=({type:e,date:t,locale:n,format:a})=>{if("multiple"===e&&Array.isArray(t)){if(1===t.length)return h(t[0]).locale(n).format(a);if(t.length>1)return`${t.length} dates selected`}return""};function x(e){return{usage:{type:"code",centered:!0,maxWidth:400,code:m(e.displayName.replace("@mantine/dates/","")),component:()=>{let[t,n]=(0,a.useState)(null);return a.createElement(e,{label:"Pick date",placeholder:"Pick date",value:t,onChange:n})}},multiple:{type:"code",centered:!0,maxWidth:400,code:d(e.displayName.replace("@mantine/dates/","")),component:()=>{let[t,n]=(0,a.useState)([]);return a.createElement(e,{type:"multiple",label:"Pick dates",placeholder:"Pick dates",value:t,onChange:n})}},range:{type:"code",centered:!0,maxWidth:400,code:u(e.displayName.replace("@mantine/dates/","")),component:()=>{let[t,n]=(0,a.useState)([null,null]);return a.createElement(e,{type:"range",label:"Pick dates range",placeholder:"Pick dates range",value:t,onChange:n})}},configurator:{type:"configurator",component:e,centered:!0,maxWidth:400,code:o(e.displayName.replace("@mantine/dates/","")),controls:[{prop:"placeholder",type:"string",initialValue:"Pick date",libraryValue:"__"},{prop:"label",type:"string",initialValue:"Pick date",libraryValue:""},{prop:"description",type:"string",initialValue:"",libraryValue:""},{prop:"error",type:"string",initialValue:"",libraryValue:""},{prop:"variant",type:"select",data:[{label:"default",value:"default"},{label:"filled",value:"filled"},{label:"unstyled",value:"unstyled"}],initialValue:"default",libraryValue:"default"},{prop:"radius",type:"size",initialValue:"sm",libraryValue:"sm"},{prop:"size",type:"size",initialValue:"sm",libraryValue:"sm"},{prop:"disabled",type:"boolean",initialValue:!1,libraryValue:!1},{prop:"withAsterisk",type:"boolean",initialValue:!0,libraryValue:!1}]},modal:{type:"code",centered:!0,maxWidth:400,code:c(e.displayName.replace("@mantine/dates/","")),component:()=>{let[t,n]=(0,a.useState)(null);return a.createElement(e,{dropdownType:"modal",label:"Pick date",placeholder:"Pick date",value:t,onChange:n})}},icon:{type:"code",centered:!0,maxWidth:400,code:s(e.displayName.replace("@mantine/dates/","")),component:()=>{let[t,n]=(0,a.useState)(null);return a.createElement(e,{leftSection:a.createElement(l.Z,{style:{width:(0,i.h)(18),height:(0,i.h)(18)},stroke:1.5}),leftSectionPointerEvents:"none",label:"Pick date",placeholder:"Pick date",value:t,onChange:n})}},clearable:{type:"code",centered:!0,maxWidth:400,code:r(e.displayName.replace("@mantine/dates/","")),component:()=>a.createElement(e,{clearable:!0,defaultValue:new Date,label:"Pick date",placeholder:"Pick date"})},valueFormatter:{type:"code",centered:!0,maxWidth:400,code:p(e.displayName.replace("@mantine/dates/","")),component:()=>{let[t,n]=(0,a.useState)([]);return a.createElement(e,{label:"Pick 2 dates or more",placeholder:"Pick 2 dates or more",value:t,onChange:n,type:"multiple",valueFormatter:f})}}}}},15514:function(e,t,n){"use strict";n.d(t,{Y:function(){return w}});var a=n(27378),r=n(14569),o=n(9911),l=n(32071),i=n(3509),s=n(44460),c=n(83453),d=n(89738),u=n(71078),m=n(20410),h=n(96739),p=n(2256),f=n(6231),x=n(5564),v=n(56589),g=n(96688),j={root:"m-a410e613",label:"m-ddb0bfe3"};let y={withTooltip:!0,withLabelsLine:!0,paddingAngle:0,thickness:20,size:160,strokeWidth:1,startAngle:0,endAngle:360,tooltipDataSource:"all"},b=(0,c.Z)((e,{strokeColor:t,labelColor:n,withLabels:a,size:r})=>({root:{"--chart-stroke-color":t?(0,d.p)(t,e):void 0,"--chart-labels-color":n?(0,d.p)(n,e):void 0,"--chart-size":a?(0,u.h)(r+80):(0,u.h)(r)}})),w=(0,m.d)((e,t)=>{let n=(0,h.w)("DonutChart",y,e),{classNames:c,className:u,style:m,styles:w,unstyled:k,vars:P,data:D,withTooltip:S,tooltipAnimationDuration:C,tooltipProps:A,pieProps:E,paddingAngle:V,withLabels:N,withLabelsLine:T,size:I,thickness:W,strokeWidth:$,startAngle:F,endAngle:_,tooltipDataSource:z,chartLabel:B,children:O,pieChartProps:L,valueFormatter:q,...M}=n,U=(0,p.rZ)(),H=(0,f.y)({name:"DonutChart",classes:j,props:n,className:u,style:m,classNames:c,styles:w,unstyled:k,vars:P,varsResolver:b}),{resolvedClassNames:Z,resolvedStyles:K}=(0,x.h)({classNames:c,styles:w,props:n}),R=D.map((e,t)=>a.createElement(r.b,{key:t,fill:(0,d.p)(e.color,U),stroke:"var(--chart-stroke-color, var(--mantine-color-body))",strokeWidth:$}));return a.createElement(v.x,{ref:t,size:I,...H("root"),...M},a.createElement(o.h,null,a.createElement(l.u,{...L},a.createElement(i.b,{data:D,innerRadius:I/2-W,outerRadius:I/2,dataKey:"value",isAnimationActive:!1,paddingAngle:V,startAngle:F,endAngle:_,label:!!N&&{fill:"var(--chart-labels-color, var(--mantine-color-dimmed))",fontSize:12,fontFamily:"var(--mantine-font-family)"},labelLine:!!T&&{stroke:"var(--chart-label-color, var(--mantine-color-dimmed))",strokeWidth:1},...E},R),B&&a.createElement("text",{x:"50%",y:"50%",textAnchor:"middle",dominantBaseline:"middle",...H("label")},B),S&&a.createElement(s.u,{animationDuration:C,isAnimationActive:!1,content:({payload:e})=>a.createElement(g.h,{payload:D,classNames:Z,styles:K,type:"radial",segmentId:"segment"===z?e?.[0]?.name:void 0,valueFormatter:q}),...A}),O)))});w.displayName="@mantine/charts/DonutChart",w.classes=j},88915:function(e,t,n){"use strict";n.d(t,{u:function(){return k}});var a=n(27378),r=n(14569),o=n(9911),l=n(32071),i=n(3509),s=n(44460),c=n(83453),d=n(89738),u=n(71078),m=n(20410),h=n(96739),p=n(2256),f=n(6231),x=n(5564),v=n(56589),g=n(96688),j={root:"m-cd8943fd",label:"m-e3441f39"};let y={withTooltip:!1,withLabelsLine:!0,paddingAngle:0,size:160,strokeWidth:1,startAngle:0,endAngle:360,tooltipDataSource:"all",labelsPosition:"outside",labelsType:"value"},b=(0,c.Z)((e,{strokeColor:t,labelColor:n,withLabels:a,size:r,labelsPosition:o})=>({root:{"--chart-stroke-color":t?(0,d.p)(t,e):void 0,"--chart-labels-color":n?(0,d.p)(n,e):void 0,"--chart-size":a&&"outside"===o?(0,u.h)(r+80):(0,u.h)(r)}})),w=e=>({cx:t,cy:n,midAngle:r,innerRadius:o,outerRadius:l,value:i,percent:s})=>{let c=Math.PI/180,d=o+(l-o)*.5,u=t+d*Math.cos(-r*c);return a.createElement("text",{x:u,y:n+d*Math.sin(-r*c),textAnchor:u>t?"start":"end",dominantBaseline:"central",className:j.label},"percent"===e?`${(100*s).toFixed(0)}%`:i)},k=(0,m.d)((e,t)=>{let n=(0,h.w)("PieChart",y,e),{classNames:c,className:u,style:m,styles:k,unstyled:P,vars:D,data:S,withTooltip:C,tooltipAnimationDuration:A,tooltipProps:E,pieProps:V,paddingAngle:N,withLabels:T,withLabelsLine:I,size:W,strokeWidth:$,startAngle:F,endAngle:_,tooltipDataSource:z,children:B,pieChartProps:O,labelsPosition:L,valueFormatter:q,labelsType:M,...U}=n,H=(0,p.rZ)(),Z=(0,f.y)({name:"PieChart",classes:j,props:n,className:u,style:m,classNames:c,styles:k,unstyled:P,vars:D,varsResolver:b}),{resolvedClassNames:K,resolvedStyles:R}=(0,x.h)({classNames:c,styles:k,props:n}),J=S.map((e,t)=>a.createElement(r.b,{key:t,fill:(0,d.p)(e.color,H),stroke:"var(--chart-stroke-color, var(--mantine-color-body))",strokeWidth:$}));return a.createElement(v.x,{ref:t,size:W,...Z("root"),...U},a.createElement(o.h,null,a.createElement(l.u,{...O},a.createElement(i.b,{data:S,innerRadius:0,outerRadius:W/2,dataKey:"value",isAnimationActive:!1,paddingAngle:N,startAngle:F,endAngle:_,label:!!T&&("inside"===L?w(M||"value"):"percent"===M?({percent:e,x:t,y:n,cx:r,cy:o})=>a.createElement("text",{x:t,y:n,cx:r,cy:o,textAnchor:t>r?"start":"end",dominantBaseline:"central",fill:"var(--chart-labels-color, var(--mantine-color-dimmed))",fontFamily:"var(--mantine-font-family)",fontSize:12},a.createElement("tspan",{x:t},`${(100*e).toFixed(0)}%`)):{fill:"var(--chart-labels-color, var(--mantine-color-dimmed))",fontSize:12,fontFamily:"var(--mantine-font-family)"}),labelLine:!!I&&"outside"===L&&{stroke:"var(--chart-label-color, var(--mantine-color-dimmed))",strokeWidth:1},...V},J),C&&a.createElement(s.u,{animationDuration:A,isAnimationActive:!1,content:({payload:e})=>a.createElement(g.h,{payload:S,classNames:K,styles:R,type:"radial",segmentId:"segment"===z?e?.[0]?.name:void 0,valueFormatter:q}),...E}),B)))});k.displayName="@mantine/charts/PieChart",k.classes=j}},function(e){e.O(0,[30370,60898,84889,290,32071,85126,15819,2775,53993,83014,7654,49774,92888,40179],function(){return e(e.s=39485)}),_N_E=e.O()}]);