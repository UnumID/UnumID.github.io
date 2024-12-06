"use strict";(self.webpackChunkverified_inc_docs=self.webpackChunkverified_inc_docs||[]).push([[5538],{6059:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var i=t(5893),o=t(1151),r=t(9047);const s={},a=void 0,c={id:"reusables/integration-type-admonition",title:"integration-type-admonition",description:"With the {props.option} tab active above, your brand's integration type setting should be set to {props.option} in the Dashboard. See Determine integration type if you need help deciding which type is right for you.",source:"@site/versioned_docs/version-2/reusables/integration-type-admonition.mdx",sourceDirName:"reusables",slug:"/reusables/integration-type-admonition",permalink:"/reusables/integration-type-admonition",draft:!1,unlisted:!1,tags:[],version:"2",frontMatter:{},sidebar:"sidebar",previous:{title:"include-verified-legal-language",permalink:"/reusables/include-verified-legal-language"},next:{title:"local-testing-admonition",permalink:"/reusables/local-testing-admonition"}},d={},l=[];function u(n){const e={a:"a",em:"em",p:"p",strong:"strong",...(0,o.a)(),...n.components};return(0,i.jsx)(r.Z,{type:"note",children:(0,i.jsxs)(e.p,{children:["With the ",(0,i.jsx)(e.strong,{children:n.option})," tab active above, your brand's ",(0,i.jsx)(e.strong,{children:"integration type"})," setting should be set to ",(0,i.jsx)(e.strong,{children:n.option})," in the ",(0,i.jsx)(e.a,{href:"https://dashboard.verified.inc",children:"Dashboard"}),". ",(0,i.jsxs)(e.em,{children:["See ",(0,i.jsx)(e.a,{href:"/integration-guide#2-determine-integration-type",children:"Determine integration type"})," if you need help deciding which type is right for you."]})]})})}function h(n={}){const{wrapper:e}={...(0,o.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(u,{...n})}):u(n)}},9047:(n,e,t)=>{t.d(e,{Z:()=>k});var i=t(7294),o=t(5893);function r(n){const{mdxAdmonitionTitle:e,rest:t}=function(n){const e=i.Children.toArray(n),t=e.find((n=>i.isValidElement(n)&&"mdxAdmonitionTitle"===n.type)),r=e.filter((n=>n!==t)),s=t?.props.children;return{mdxAdmonitionTitle:s,rest:r.length>0?(0,o.jsx)(o.Fragment,{children:r}):null}}(n.children),r=n.title??e;return{...n,...r&&{title:r},children:t}}var s=t(6905),a=t(5999),c=t(5281);const d={admonition:"admonition_xJq3",admonitionHeading:"admonitionHeading_Gvgb",admonitionIcon:"admonitionIcon_Rf37",admonitionContent:"admonitionContent_BuS1"};function l(n){let{type:e,className:t,children:i}=n;return(0,o.jsx)("div",{className:(0,s.Z)(c.k.common.admonition,c.k.common.admonitionType(e),d.admonition,t),children:i})}function u(n){let{icon:e,title:t}=n;return(0,o.jsxs)("div",{className:d.admonitionHeading,children:[(0,o.jsx)("span",{className:d.admonitionIcon,children:e}),t]})}function h(n){let{children:e}=n;return e?(0,o.jsx)("div",{className:d.admonitionContent,children:e}):null}function m(n){const{type:e,icon:t,title:i,children:r,className:s}=n;return(0,o.jsxs)(l,{type:e,className:s,children:[(0,o.jsx)(u,{title:i,icon:t}),(0,o.jsx)(h,{children:r})]})}function f(n){return(0,o.jsx)("svg",{viewBox:"0 0 14 16",...n,children:(0,o.jsx)("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})})}const p={icon:(0,o.jsx)(f,{}),title:(0,o.jsx)(a.Z,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)",children:"note"})};function x(n){return(0,o.jsx)(m,{...p,...n,className:(0,s.Z)("alert alert--secondary",n.className),children:n.children})}function g(n){return(0,o.jsx)("svg",{viewBox:"0 0 12 16",...n,children:(0,o.jsx)("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})})}const v={icon:(0,o.jsx)(g,{}),title:(0,o.jsx)(a.Z,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)",children:"tip"})};function j(n){return(0,o.jsx)(m,{...v,...n,className:(0,s.Z)("alert alert--success",n.className),children:n.children})}function y(n){return(0,o.jsx)("svg",{viewBox:"0 0 14 16",...n,children:(0,o.jsx)("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})})}const b={icon:(0,o.jsx)(y,{}),title:(0,o.jsx)(a.Z,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)",children:"info"})};function N(n){return(0,o.jsx)(m,{...b,...n,className:(0,s.Z)("alert alert--info",n.className),children:n.children})}function w(n){return(0,o.jsx)("svg",{viewBox:"0 0 16 16",...n,children:(0,o.jsx)("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})})}const C={icon:(0,o.jsx)(w,{}),title:(0,o.jsx)(a.Z,{id:"theme.admonition.warning",description:"The default label used for the Warning admonition (:::warning)",children:"warning"})};function Z(n){return(0,o.jsx)("svg",{viewBox:"0 0 12 16",...n,children:(0,o.jsx)("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})})}const z={icon:(0,o.jsx)(Z,{}),title:(0,o.jsx)(a.Z,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)",children:"danger"})};const M={icon:(0,o.jsx)(w,{}),title:(0,o.jsx)(a.Z,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)",children:"caution"})};const T={...{note:x,tip:j,info:N,warning:function(n){return(0,o.jsx)(m,{...C,...n,className:(0,s.Z)("alert alert--warning",n.className),children:n.children})},danger:function(n){return(0,o.jsx)(m,{...z,...n,className:(0,s.Z)("alert alert--danger",n.className),children:n.children})}},...{secondary:n=>(0,o.jsx)(x,{title:"secondary",...n}),important:n=>(0,o.jsx)(N,{title:"important",...n}),success:n=>(0,o.jsx)(j,{title:"success",...n}),caution:function(n){return(0,o.jsx)(m,{...M,...n,className:(0,s.Z)("alert alert--warning",n.className),children:n.children})}}};function k(n){const e=r(n),t=(i=e.type,T[i]||(console.warn(`No admonition component found for admonition type "${i}". Using Info as fallback.`),T.info));var i;return(0,o.jsx)(t,{...e})}},1151:(n,e,t)=>{t.d(e,{Z:()=>a,a:()=>s});var i=t(7294);const o={},r=i.createContext(o);function s(n){const e=i.useContext(r);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:s(n.components),i.createElement(r.Provider,{value:e},n.children)}}}]);