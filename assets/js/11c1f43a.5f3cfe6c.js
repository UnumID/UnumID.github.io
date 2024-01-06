"use strict";(self.webpackChunkverified_inc=self.webpackChunkverified_inc||[]).push([[416,6284],{36:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var s=r(5893),t=r(1151),i=(r(7874),r(106),r(4866),r(5162),r(9474));const a={id:"issue-to-earn",title:"Issue to Earn",sidebar_label:"Issue to Earn",slug:"/issue-to-earn"},o=void 0,l={id:"issue-to-earn",title:"Issue to Earn",description:"- Time to read: 10 minutes",source:"@site/docs/issue-to-earn.mdx",sourceDirName:".",slug:"/issue-to-earn",permalink:"/issue-to-earn",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"issue-to-earn",title:"Issue to Earn",sidebar_label:"Issue to Earn",slug:"/issue-to-earn"},sidebar:"sidebar",previous:{title:"1-Click Signup",permalink:"/"},next:{title:"1-Click Signup",permalink:"/demo-1-click-signup"}},c={},d=[{value:"How It Works",id:"how-it-works",level:2},{value:"User Experience",id:"user-experience",level:3},{value:"Implement",id:"implement",level:2},{value:"1. Get User Consent",id:"1-get-user-consent",level:3},{value:"2. Issue Credentials to User",id:"2-issue-credentials-to-user",level:3},{value:"(optional) Enable Affiliate Offers",id:"optional-enable-affiliate-offers",level:2}];function u(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Time to read:"})," 10 minutes"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Time to implement:"})," 1-3 hours"]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsxs)(n.p,{children:["If your company verifies user identities, ",(0,s.jsx)(n.strong,{children:"you can issue digital ID cards to those users and earn passive revenue when they're used."})]}),"\n",(0,s.jsx)(n.p,{children:"Doing so requires only two things:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#1-get-user-consent",children:(0,s.jsx)(n.strong,{children:"Get user consent"})})}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"#2-issue-credentials-to-user",children:(0,s.jsx)(n.strong,{children:"Issue credentials to user"})})," (1 API call)"]}),"\n"]}),"\n",(0,s.jsx)(i.default,{}),"\n",(0,s.jsx)(n.h2,{id:"how-it-works",children:"How It Works"}),"\n",(0,s.jsx)(n.h3,{id:"user-experience",children:"User Experience"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.em,{children:[(0,s.jsxs)(n.strong,{children:["Try our ",(0,s.jsx)(n.a,{href:"/demo-issue-to-earn",children:"Issue to Earn demos"})]})," to see this user experience in action."]})}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["A user only needs to click 1 button to receive a digital ID card. (When they do, you make 1 API call behind the scenes.) ",(0,s.jsx)(n.strong,{children:"It all takes less than 1 second!"})]}),"\n",(0,s.jsx)(n.p,{children:"Specifically, the user experience is:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"See prompt to activate ID card"})," (e.g. a button)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Give consent"})," (e.g. click button)"]}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"Receive email showing new ID card"})}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["The prompt is often a button, as in our ",(0,s.jsx)(n.a,{href:"/demo-issue-to-earn?type=next-user-sign-in#static",children:"Next User Sign In"}),", ",(0,s.jsx)(n.a,{href:"/demo-issue-to-earn?type=marketing-email#static",children:"Marketing Email"}),", and ",(0,s.jsx)(n.a,{href:"/demo-issue-to-earn?type=in-app-offer#static",children:"In App Offer"})," demos. But it can also take other forms \u2014 like a checkbox, as in our ",(0,s.jsx)(n.a,{href:"/demo-issue-to-earn?type=after-user-sign-up#static",children:"After User Sign Up"})," demo."]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["This ID card is a purely ",(0,s.jsx)(n.em,{children:"digital"})," one, and it has your brand on it. When you're ready for an API key for your brand, we will create an ID card design for you (or use one you send us)."]})}),"\n",(0,s.jsx)(n.h2,{id:"implement",children:"Implement"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.em,{children:[(0,s.jsxs)(n.strong,{children:["Try our ",(0,s.jsx)(n.a,{href:"/demo-issue-to-earn",children:"Issue to Earn demos"})]})," to see example implementations. These are open source, so feel free to use the ",(0,s.jsx)(n.a,{href:"https://github.com/VerifiedInc/Hooli-Demo-Web",children:"source code"})," as a reference."]})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"You can issue an ID card to a user in many ways. All of them involve the same two steps:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#get-user-consent",children:(0,s.jsx)(n.strong,{children:"Get user consent"})})}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"#issue-credentials-to-user",children:(0,s.jsx)(n.strong,{children:"Issue credentials to user"})})," (1 API call)"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"1-get-user-consent",children:"1. Get User Consent"}),"\n",(0,s.jsx)(n.admonition,{title:"You Must Get User Consent",type:"warning",children:(0,s.jsxs)(n.p,{children:["You ",(0,s.jsx)(n.strong,{children:"must"})," get a user's consent before issuing them an ID card. Not doing so violates our terms and will prevent us from paying you when the card is used."]})}),"\n",(0,s.jsxs)(n.p,{children:["Prompt the user to activate their digital ID card (from your brand). You can use a button prompt, as in our ",(0,s.jsx)(n.a,{href:"/demo-issue-to-earn?type=next-user-sign-in#static",children:"Next User Sign In"}),", ",(0,s.jsx)(n.a,{href:"/demo-issue-to-earn?type=marketing-email#static",children:"Marketing Email"}),", and ",(0,s.jsx)(n.a,{href:"/demo-issue-to-earn?type=in-app-offer#static",children:"In App Offer"})," demos. Or you can use another type of prompt \u2014 like a checkbox, as in our ",(0,s.jsx)(n.a,{href:"/demo-issue-to-earn?type=after-user-sign-up#static",children:"After User Sign Up"})," demo."]}),"\n",(0,s.jsx)(n.p,{children:"Include this legal language:"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["By ",(0,s.jsx)(n.code,{children:"TAKING_THIS_ACTION"}),", I direct ",(0,s.jsx)(n.code,{children:"YOUR_BRAND_NAME"})," to use Verified Inc. to create a digital ID card with my personal information, and I agree to Verified Inc.\u2019s ",(0,s.jsx)("a",{href:"https://www.verified.inc/legal#terms-of-use",children:"Terms of Use"})," and acknowledge its ",(0,s.jsx)("a",{href:"https://www.verified.inc/legal#privacy-policy",children:"Privacy Policy"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Replace ",(0,s.jsx)(n.code,{children:"TAKING_THIS_ACTION"})," with language appropriate to the nature of your prompt. For example, if your prompt is an Activate button, you could replace ",(0,s.jsx)(n.code,{children:"TAKING_THIS_ACTION"})," with:","\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:'clicking "Activate"'}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Replace ",(0,s.jsx)(n.code,{children:"YOUR_BRAND_NAME"})," with, well, your brand name!"]}),"\n",(0,s.jsxs)(n.li,{children:['Make "Terms of Use" and "Privacy Policy" underlined or colored and hyperlinked to ',(0,s.jsx)("a",{href:"https://www.verified.inc/legal#terms-of-use",children:(0,s.jsx)(n.code,{children:"https://www.verified.inc/legal#terms-of-use"})})," and ",(0,s.jsx)("a",{href:"https://www.verified.inc/legal#privacy-policy",children:(0,s.jsx)(n.code,{children:"https://www.verified.inc/legal#privacy-policy"})})," (respectively)."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Here's full example:"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:['By clicking "Activate", I direct Hooli to use Verified Inc. to create a digital ID card with my personal information, and I agree to Verified Inc.\u2019s ',(0,s.jsx)("a",{href:"https://www.verified.inc/legal#terms-of-use",children:"Terms of Use"})," and acknowledge its ",(0,s.jsx)("a",{href:"https://www.verified.inc/legal#privacy-policy",children:"Privacy Policy"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"2-issue-credentials-to-user",children:"2. Issue Credentials to User"}),"\n",(0,s.jsxs)(n.admonition,{title:'An "ID Card" is a Collection of Credentials',type:"info",children:[(0,s.jsx)(n.p,{children:"We define a digital ID card as a collection of credentials, issued by a brand to a user. We defined a credential as a piece of data about a user \u2014 like their phone number, address, or government ID."}),(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:'To "issue an ID card" is just to issue credentials to a user for the first time.'}),' (To "update an ID card" is just to issue subsequent credentials to that user.)']})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsxs)(n.strong,{children:["Call ",(0,s.jsx)(n.a,{href:"/api-overview#issue-credentials",children:(0,s.jsx)(n.code,{children:"POST /credentials"})})]})," with a user identifier (a verified email or phone for the user) and one or more credentials. For each credential, include a ",(0,s.jsx)(n.code,{children:"type"})," and ",(0,s.jsx)(n.code,{children:"data"})," in accordance with one of our ",(0,s.jsx)(n.a,{href:"/schema",children:"data schemas"}),"."]}),"\n",(0,s.jsx)(n.admonition,{title:"Ask Us for New Schemas If Needed",type:"note",children:(0,s.jsxs)(n.p,{children:["If we don't have a data schema that suits your needs, email us at ",(0,s.jsx)(n.a,{href:"mailto:Support@Verified.Inc",children:"Support@Verified.Inc"}),") and we'll make one for you."]})}),"\n",(0,s.jsxs)(n.p,{children:["For example, if you have a verified Social Security Number (SSN) and a full name for a user, you can issue them credentials. Just call ",(0,s.jsx)(n.a,{href:"/api-overview#issue-credentials",children:(0,s.jsx)(n.code,{children:"POST /credentials"})})," with the user's email or phone, the ",(0,s.jsx)(n.code,{children:"SsnCredential"})," and ",(0,s.jsx)(n.code,{children:"FullNameCredential"})," type, and the SSN and full name data:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",metastring:'title="Example Issue Credentials Request Body"',children:'{\n  "email": "test@example.com",\n  "credentials": [\n    {\n      "type": "SsnCredential",\n      // based on the properties attribute of the schema\n      // highlight-start\n      // single object, not an array of objects, since Ssn is an atomic credential\n      "data": {\n        "ssn": "111223333"\n      },\n      // highlight-end\n      "expirationDate": 1893484800000\n    },\n    {\n      "type": "FullNameCredential",\n      // based on the properties attribute of the schema\n      // highlight-start\n      // an array of objects, not a single object, since FullName is a composite credential\n      "data": [\n        {\n          "type": "FirstNameCredential",\n          "data": {\n            "firstName": "Richard"\n          }\n        },\n        {\n          "type": "LastNameCredential",\n          "data": {\n            "lastName": "Hendricks"\n          }\n        }\n      ]\n      // highlight-end\n    }\n  ]\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["The credential data must be formatted according to the ",(0,s.jsx)(n.code,{children:"properties"})," attribute of the credential type's schema definition. Please see our ",(0,s.jsx)(n.a,{href:"/schema#schema-library",children:"data schema library"})," for more information."]}),"\n",(0,s.jsx)(n.h2,{id:"optional-enable-affiliate-offers",children:"(optional) Enable Affiliate Offers"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.a,{href:"#implement",children:"Implement"})," section above describes how to implement ",(0,s.jsx)(n.em,{children:"standard issuance"})," of ID cards. With standard issuance, you issue an ID card to a user, and that's it. There are no further steps."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsxs)(n.strong,{children:["But you can also implement ",(0,s.jsx)(n.em,{children:"partner issuance"})," to enable affiliate offers for partner brands."]})," With partner issuance, you issue an ID card to a user, and then you redirect them to a ",(0,s.jsx)(n.a,{href:"/1-click-signup",children:"1-Click Signup"})," flow for the partner brand. That way, the user can immediately use their ID card to sign up for the partner, and you immediately earn revenue!"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"This allows you to present users with affiliate offers that convert with 1-click,"})," meaning far higher conversion for partners and far more revenue for you."]}),"\n",(0,s.jsxs)(n.p,{children:["Brands in our network that have implemented partner issuance have seen on average ",(0,s.jsx)(n.strong,{children:"7.9x higher conversion rates"})," compared with normal affiliate offers."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.em,{children:["If you'd like to enable partner issuance for your brand, email us at ",(0,s.jsx)(n.a,{href:"mailto:Support@Verified.Inc",children:"Support@Verified.Inc"}),"."]})}),"\n"]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},9474:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var s=r(5893),t=r(1151);const i={},a=void 0,o={id:"reusables/sandbox-testing-credentials",title:"sandbox-testing-credentials",description:"To test 1-Click Signup in our sandbox environment, you can use our test brand and user:",source:"@site/docs/reusables/sandbox-testing-credentials.mdx",sourceDirName:"reusables",slug:"/reusables/sandbox-testing-credentials",permalink:"/reusables/sandbox-testing-credentials",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{}},l={},c=[];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,t.a)(),...e.components},{Details:r}=n;return r||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(n.admonition,{title:"Sandbox Testing",type:"tip",children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"To test 1-Click Signup in our sandbox environment, you can use our test brand and user"}),":"]}),(0,s.jsxs)(r,{children:[(0,s.jsx)("summary",{children:(0,s.jsx)("b",{children:"Test Brand API Credentials"})}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",metastring:'title="Sandbox API Key"',children:"yVg3LEnF08y0MDmpHcPxB+sZWFcDARmPRKdY2M906ng=\n"})}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",metastring:'title="Sandbox URL"',children:"https://core-api.sandbox-verifiedinc.com\n"})})]}),(0,s.jsxs)(n.p,{children:["To get an API key for your own brand, email us at ",(0,s.jsx)(n.a,{href:"mailto:Support@Verified.Inc",children:"Support@Verified.Inc"}),"."]}),(0,s.jsxs)(r,{children:[(0,s.jsx)("summary",{children:(0,s.jsx)("b",{children:"Test User Login Credentials"})}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",metastring:'title="Phone"',children:"+10123456789\n"})}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",metastring:'title="Email"',children:"richard@piedpiper.net\n"})}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",metastring:'title="Verification Code"',children:"111111\n"})})]}),(0,s.jsxs)(n.p,{children:["These are Hooli and Richard Hendricks \u2014 yes, the ones from ",(0,s.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Silicon_Valley_(TV_series)",children:(0,s.jsx)(n.em,{children:"Silicon Valley"})}),"! \ud83d\ude02"]})]})}function u(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},5162:(e,n,r)=>{r.d(n,{Z:()=>a});r(7294);var s=r(6905);const t={tabItem:"tabItem_Ymn6"};var i=r(5893);function a(e){let{children:n,hidden:r,className:a}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,s.Z)(t.tabItem,a),hidden:r,children:n})}},4866:(e,n,r)=>{r.d(n,{Z:()=>I});var s=r(7294),t=r(6905),i=r(2466),a=r(6550),o=r(469),l=r(1980),c=r(7392),d=r(12);function u(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:r}=e;return(0,s.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:r,attributes:s,default:t}}=e;return{value:n,label:r,attributes:s,default:t}}))}(r);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function p(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:r}=e;const t=(0,a.k6)(),i=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,l._X)(i),(0,s.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(t.location.search);n.set(i,e),t.replace({...t.location,search:n.toString()})}),[i,t])]}function f(e){const{defaultValue:n,queryString:r=!1,groupId:t}=e,i=h(e),[a,l]=(0,s.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const s=r.find((e=>e.default))??r[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:i}))),[c,u]=m({queryString:r,groupId:t}),[f,x]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[t,i]=(0,d.Nk)(r);return[t,(0,s.useCallback)((e=>{r&&i.set(e)}),[r,i])]}({groupId:t}),j=(()=>{const e=c??f;return p({value:e,tabValues:i})?e:null})();(0,o.Z)((()=>{j&&l(j)}),[j]);return{selectedValue:a,selectValue:(0,s.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),x(e)}),[u,x,i]),tabValues:i}}var x=r(2389);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=r(5893);function b(e){let{className:n,block:r,selectedValue:s,selectValue:a,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),d=e=>{const n=e.currentTarget,r=l.indexOf(n),t=o[r].value;t!==s&&(c(n),a(t))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=l.indexOf(e.currentTarget)+1;n=l[r]??l[0];break}case"ArrowLeft":{const r=l.indexOf(e.currentTarget)-1;n=l[r]??l[l.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.Z)("tabs",{"tabs--block":r},n),children:o.map((e=>{let{value:n,label:r,attributes:i}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>l.push(e),onKeyDown:u,onClick:d,...i,className:(0,t.Z)("tabs__item",j.tabItem,i?.className,{"tabs__item--active":s===n}),children:r??n},n)}))})}function y(e){let{lazy:n,children:r,selectedValue:t}=e;const i=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===t));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==t})))})}function v(e){const n=f(e);return(0,g.jsxs)("div",{className:(0,t.Z)("tabs-container",j.tabList),children:[(0,g.jsx)(b,{...e,...n}),(0,g.jsx)(y,{...e,...n})]})}function I(e){const n=(0,x.Z)();return(0,g.jsx)(v,{...e,children:u(e.children)},String(n))}}}]);