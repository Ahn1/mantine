(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9595],{33507:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var o=(0,n(30853).Z)("arrow-left","IconArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},12162:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var o=(0,n(30853).Z)("arrow-right","IconArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])},8427:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var o=(0,n(30853).Z)("calendar","IconCalendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]])},38767:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var o=(0,n(30853).Z)("license","IconLicense",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]])},94342:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var o=(0,n(30853).Z)("list","IconList",[["path",{d:"M9 6l11 0",key:"svg-0"}],["path",{d:"M9 12l11 0",key:"svg-1"}],["path",{d:"M9 18l11 0",key:"svg-2"}],["path",{d:"M5 6l0 .01",key:"svg-3"}],["path",{d:"M5 12l0 .01",key:"svg-4"}],["path",{d:"M5 18l0 .01",key:"svg-5"}]])},30471:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var o=(0,n(30853).Z)("pencil","IconPencil",[["path",{d:"M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},62640:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var o=(0,n(30853).Z)("switch-2","IconSwitch2",[["path",{d:"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",key:"svg-0"}],["path",{d:"M18 4l3 3l-3 3",key:"svg-1"}],["path",{d:"M3 7h5l7 10h6",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]])},63335:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/hooks/use-focus-return",function(){return n(78164)}])},78164:function(e,t,n){"use strict";n.r(t);var o=n(85893),r=n(11151),s=n(19905),c=n(9904),a=n(61615);let u=(0,s.A)(c.us.useFocusReturn);function i(e){let t=Object.assign({h2:"h2",p:"p",code:"code",a:"a",pre:"pre"},(0,r.ah)(),e.components),{Demo:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"use-focus-return"})," automatically returns focus to the last focused element when a given condition is met.\nFor example, it is used in ",(0,o.jsx)(t.a,{href:"/core/modal/",children:"Modal"})," component to restore focus after the modal was closed."]}),"\n",(0,o.jsxs)(t.p,{children:["Close the modal with the ",(0,o.jsx)(t.code,{children:"Escape"})," key and see how focus returns to the button after the modal closes:"]}),"\n",(0,o.jsx)(n,{data:a.j,demoProps:{toggle:!0}}),"\n",(0,o.jsxs)(t.p,{children:["In most cases, you should use this hook with ",(0,o.jsx)(t.a,{href:"/hooks/use-focus-trap/",children:"use-focus-trap"}),"."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",children:"useFocusReturn({\n  // Is region with focus trap active?\n  // When it activates hook saves document.activeElement to the internal state\n  // and focuses this element once focus trap is deactivated\n  opened: false,\n\n  // Determines whether focus should be returned automatically, true by default\n  shouldReturnFocus: true,\n});\n"})}),"\n",(0,o.jsxs)(t.p,{children:["If ",(0,o.jsx)(t.code,{children:"shouldReturnFocus"})," option is set to ",(0,o.jsx)(t.code,{children:"false"})," you can call returned function to focus last active element:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",children:"const returnFocus = useFocusReturn({\n  opened: false,\n  shouldReturnFocus: false,\n});\n\n// ... later\nreturnFocus();\n"})}),"\n",(0,o.jsx)(t.h2,{id:"definition",children:"Definition"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",children:"function useFocusReturn(options: { opened: boolean; shouldReturnFocus?: boolean }): () => void;\n"})})]})}t.default=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.jsx)(u,Object.assign({},e,{children:(0,o.jsx)(i,e)}))}},93693:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var o=(0,n(54764).Z)("at","IconAt",[["path",{d:"M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0",key:"svg-0"}],["path",{d:"M16 12v1.5a2.5 2.5 0 0 0 5 0v-1.5a9 9 0 1 0 -5.5 8.28",key:"svg-1"}]])},38956:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var o=(0,n(54764).Z)("lock","IconLock",[["path",{d:"M5 13a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-6z",key:"svg-0"}],["path",{d:"M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0",key:"svg-1"}],["path",{d:"M8 11v-4a4 4 0 1 1 8 0v4",key:"svg-2"}]])},66471:function(e){"use strict";e.exports=function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){if(t.constructor!==n.constructor)return!1;if(Array.isArray(t)){if((o=t.length)!=n.length)return!1;for(r=o;0!=r--;)if(!e(t[r],n[r]))return!1;return!0}if(t.constructor===RegExp)return t.source===n.source&&t.flags===n.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===n.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===n.toString();if((o=(s=Object.keys(t)).length)!==Object.keys(n).length)return!1;for(r=o;0!=r--;)if(!Object.prototype.hasOwnProperty.call(n,s[r]))return!1;for(r=o;0!=r--;){var o,r,s,c=s[r];if(!e(t[c],n[c]))return!1}return!0}return t!=t&&n!=n}},28380:function(e,t,n){"use strict";function o(e,t,n){"object"==typeof n.value&&(n.value=r(n.value)),n.enumerable&&!n.get&&!n.set&&n.configurable&&n.writable&&"__proto__"!==t?e[t]=n.value:Object.defineProperty(e,t,n)}function r(e){if("object"!=typeof e)return e;var t,n,s,c=0,a=Object.prototype.toString.call(e);if("[object Object]"===a?s=Object.create(e.__proto__||null):"[object Array]"===a?s=Array(e.length):"[object Set]"===a?(s=new Set,e.forEach(function(e){s.add(r(e))})):"[object Map]"===a?(s=new Map,e.forEach(function(e,t){s.set(r(t),r(e))})):"[object Date]"===a?s=new Date(+e):"[object RegExp]"===a?s=RegExp(e.source,e.flags):"[object DataView]"===a?s=new e.constructor(r(e.buffer)):"[object ArrayBuffer]"===a?s=e.slice(0):"Array]"===a.slice(-6)&&(s=new e.constructor(e)),s){for(n=Object.getOwnPropertySymbols(e);c<n.length;c++)o(s,n[c],Object.getOwnPropertyDescriptor(e,n[c]));for(c=0,n=Object.getOwnPropertyNames(e);c<n.length;c++)Object.hasOwnProperty.call(s,t=n[c])&&s[t]===e[t]||o(s,t,Object.getOwnPropertyDescriptor(e,t))}return s||e}n.d(t,{Y:function(){return r}})},61615:function(e,t,n){"use strict";n.d(t,{j:function(){return i}});var o=n(67294),r=n(29613),s=n(14469),c=n(12177),a=n(79734);let u=`
import { useDisclosure } from '@mantine/hooks';
import { Modal, Button } from '@mantine/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal opened={opened} onClose={close} title="Authentication">
        {/* Modal content */}
      </Modal>

      <Button onClick={open}>Open modal</Button>
    </>
  );
}
`,i={type:"code",code:u,centered:!0,component:function(){let[e,{open:t,close:n}]=(0,c.q)(!1);return o.createElement(o.Fragment,null,o.createElement(r.u,{opened:e,onClose:n,title:"Authentication"},o.createElement(a._,{noShadow:!0,noPadding:!0})),o.createElement(s.z,{onClick:t},"Open modal"))}}}},function(e){e.O(0,[8992,178,160,6346,9774,2888,179],function(){return e(e.s=63335)}),_N_E=e.O()}]);