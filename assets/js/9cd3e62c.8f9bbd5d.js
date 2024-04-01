"use strict";(self.webpackChunkverified_inc_docs=self.webpackChunkverified_inc_docs||[]).push([[834,1608,5316,7693],{8515:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>d,default:()=>f,frontMatter:()=>o,metadata:()=>c,toc:()=>h});var r=t(5893),i=t(1151),a=(t(7874),t(106)),s=(t(4866),t(5162),t(1655)),l=t(4288);t(7970);const o={id:"1-click-guide",title:"1-Click Signup Guide",sidebar_label:"1-Click Signup Guide",slug:"/1-click-guide"},d=void 0,c={id:"hidden/1-click-guide",title:"1-Click Signup Guide",description:"Time to read: 5 min",source:"@site/docs/hidden/1-click-guide.mdx",sourceDirName:"hidden",slug:"/1-click-guide",permalink:"/1-click-guide",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"1-click-guide",title:"1-Click Signup Guide",sidebar_label:"1-Click Signup Guide",slug:"/1-click-guide"}},u={},h=[{value:"Overview",id:"overview",level:2},{value:"Motivations",id:"motivations",level:2},{value:"Implementation",id:"implementation",level:2},{value:"Integration Testing",id:"integration-testing",level:2}];function p(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components},{Details:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Time to read:"})," 5 min"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Time to implement:"})," 1 - 4 hours"]}),"\n",(0,r.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.a,{href:"https://www.verified.inc",children:"Verified Inc."})})," enables brands to provide their users with best in class onboarding - now truly with 1-Click. This particular guide focuses on how and why to become a ",(0,r.jsx)(a.Z,{type:"brand",children:"brand"})," that use's Verified Inc.'s 1-Click Signup."]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["This guide is outlines a more streamlined integration of the ",(0,r.jsx)(n.a,{href:"/acceptance-guide",children:"Acceptance"})," guide."]}),"\n"]}),"\n",(0,r.jsxs)(n.admonition,{type:"tip",children:[(0,r.jsx)(n.p,{children:"You will need an API key and phone for each user. Below is a valid API Key and URL for your initial usage."}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-text",metastring:'title="Sandbox API Key"',children:"it6JXCP4E+j9W4oG+UyR1eJ4XNfvp8cB+lx2vxDJluo=\n"})}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-text",metastring:'title="Sandbox URL"',children:"https://core-api.sandbox-verifiedinc.com\n"})}),(0,r.jsx)(n.p,{children:"Because this integration requires receiving an SMS you will need to have a number to receive messages to."})]}),"\n",(0,r.jsx)(n.h2,{id:"motivations",children:"Motivations"}),"\n",(0,r.jsx)(n.p,{children:"Using the 1-Click Signup flow, you will allow users to easily retrieve and verify their:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"first and last name"}),"\n",(0,r.jsx)(n.li,{children:"phone number"}),"\n",(0,r.jsx)(n.li,{children:"email"}),"\n",(0,r.jsx)(n.li,{children:"address"}),"\n",(0,r.jsx)(n.li,{children:"birth date"}),"\n",(0,r.jsx)(n.li,{children:"social security number"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"This data is from Identity Verification Providers and is packaged in manner that allows users to share with 1-Click."}),"\n",(0,r.jsxs)(n.p,{children:["In brief: using the 1-Click the Verified Inc. network, you will gain all the benefits of being an ",(0,r.jsx)(n.a,{href:"/acceptance-guide#motivations",children:"Acceptor"})," but with additional value\u2026"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Leverage identity data that always provided by a trusted identity verification provider."}),"\n",(0,r.jsx)(n.li,{children:"Our fastest and easiest integration experience to get it up and running."}),"\n",(0,r.jsx)(n.li,{children:"Impress 95% of United States adults with this truly 1-Click experience."}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"implementation",children:"Implementation"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsxs)(n.strong,{children:["Call ",(0,r.jsx)(n.a,{href:"/api-overview/#1-click-onboarding",children:(0,r.jsx)(n.code,{children:"/1-click"})})]})," with the user's phone. If there is a match, will be the case for 95% of United States adults, you will get a URL value in the response body."]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",metastring:'title="Example Response Body"',children:'  {\n      "url": "https://wallet.verified.inc/request/9f2053fc-cc4c-41cb-8d14-7d3ccf6167eb"\n  }\n'})}),"\n",(0,r.jsxs)(t,{children:[(0,r.jsx)("summary",{children:"Match for 95% of United States Adults?"}),(0,r.jsxs)("p",{children:[(0,r.jsxs)(n.p,{children:["Yes, we have data for 95% of United States adults through our service providers. When you call ",(0,r.jsx)("code",{children:"/1-click"})," using our default credential requests value we can rely on our IDV service providers having the necessary data.\nThe accessible data incudes:"]}),(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:(0,r.jsx)(n.p,{children:"first name"})}),(0,r.jsx)("li",{children:(0,r.jsx)(n.p,{children:"last name"})}),(0,r.jsx)("li",{children:(0,r.jsx)(n.p,{children:"email"})}),(0,r.jsx)("li",{children:(0,r.jsx)(n.p,{children:"phone"})}),(0,r.jsx)("li",{children:(0,r.jsx)(n.p,{children:"address"})}),(0,r.jsx)("li",{children:(0,r.jsx)(n.p,{children:"birth date"})}),(0,r.jsx)("li",{children:(0,r.jsx)(n.p,{children:"social security number"})})]})]})]}),"\n",(0,r.jsx)(n.p,{children:"The user will either have matching credentials, or they won't. If they do, continue to step (2). If they don't you should take the user through your existing verification flow."}),"\n",(0,r.jsxs)(n.ol,{start:"2",children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsxs)(n.strong,{children:["Direct the user to the ",(0,r.jsx)(n.code,{children:"url"})]})," the response body contains with an additional ",(0,r.jsx)(n.code,{children:"redirectUrl"})," query param that you define which will serve as the ultimate landing page after the user completes 1-Click IDV from the Verified Inc. web wallet. For example the final url you need to redirect the user to is:"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-text",metastring:'title="Example Redirect to Verified Inc. Wallet URL"',children:"https://wallet.verified.inc/request/9f2053fc-cc4c-41cb-8d14-7d3ccf6167eb?redirectUrl=https://acme-bank.co/sign-up/complete\n"})}),"\n",(0,r.jsxs)(n.ol,{start:"3",children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsxs)(n.strong,{children:["Capture the ",(0,r.jsx)(n.code,{children:"sharedCredentialsUuid"})," query param"]})," from the ",(0,r.jsx)(n.code,{children:"redirectUrl"})," page you defined in step (2). To continue the example in step (2), the final url the user will be redirected to will be something like this:"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-text",metastring:'title="Example Redirect Back to Acme Bank URL"',children:"https://acme-bank.co/sign-up/complete?sharedCredentialsUuid=37ce0fff-af32-457e-9458-057125eb417d\n"})}),"\n",(0,r.jsxs)(n.ol,{start:"4",children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsxs)(n.strong,{children:["Call ",(0,r.jsx)(n.code,{children:"/sharedCredentials/{uuid}"})]})," from your backend with the ",(0,r.jsx)(n.code,{children:"sharedCredentialsUuid"})," the callback URL contains. The response body will contain the credentials the user agreed to share via 1-Click IDV."]}),"\n"]}),"\n",(0,r.jsx)(l.default,{}),"\n",(0,r.jsxs)(n.p,{children:["It's easiest to extract the data from each credential using the corresponding ",(0,r.jsx)(n.a,{href:"/schema",children:"schema"}),". The extracted data is verified according to the issuer of the credential, but you can perform additional verification steps if you like."]}),"\n",(0,r.jsx)(s.default,{}),"\n",(0,r.jsxs)(n.p,{children:["\u2705 ",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.em,{children:"You're done!"})})]}),"\n",(0,r.jsx)(n.h2,{id:"integration-testing",children:"Integration Testing"}),"\n",(0,r.jsxs)(n.p,{children:["All testing and development ought to be done against our Sandbox environment. The publicly published ",(0,r.jsx)(n.a,{href:"https://api.docs.verified.inc/",children:"Postman collection's"})," ",(0,r.jsx)(n.em,{children:"Integration Test Suite"})," is very helpful facilitating testing your Acceptor integration. All instructions below are in reference to this Postman collection. ",(0,r.jsx)(n.em,{children:"If you are more accustom to an alternative HTTP request client for development purposes, please let us know and we maybe be able to accommodate you."})]}),"\n",(0,r.jsxs)(n.p,{children:["To test either flavor of integration, you need to replace the ",(0,r.jsx)(n.code,{children:"acceptorBrandApiKey"})," from the also published ",(0,r.jsx)(n.code,{children:"Public API"})," environment variables with your brand's Sandbox API key to make the calls to ",(0,r.jsx)(n.code,{children:"/1-click"})," and ",(0,r.jsx)(n.code,{children:"/sharedCredentials/{uuid}"}),"."]}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsx)(n.p,{children:"Some pre-configuration is necessary to test this appropriately. However, if we have already given you an ApiKey this should already be done for you. If you are unsure, please contact us."})}),"\n",(0,r.jsx)(n.p,{children:"Testing in our Sandbox environment will be returning mocked data from our IDV service providers. We can configure that data in the response to suite your needs."})]})}function f(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},1655:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var r=t(5893),i=t(1151);const a={},s=void 0,l={id:"reusables/credential-usage-example-snippet",title:"credential-usage-example-snippet",description:"Example Application Code Credential Handling",source:"@site/docs/reusables/credential-usage-example-snippet.mdx",sourceDirName:"reusables",slug:"/reusables/credential-usage-example-snippet",permalink:"/reusables/credential-usage-example-snippet",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{}},o={},d=[];function c(e){const n={code:"code",pre:"pre",...(0,i.a)(),...e.components},{Details:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(t,{children:[(0,r.jsx)("summary",{children:"Example Application Code Credential Handling"}),(0,r.jsx)("p",{children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"import _ from 'lodash';\n\n/**\n * Finds value in an object that matches a property name.\n * @param object\n * @param propertyName\n */\nexport function findByPropertyName<Type>(\n  object: Record<string, any>,\n  propertyName: string\n): Type | undefined {\n  if (_.has(object, propertyName)) {\n    // a hit, return the value\n    return object[propertyName];\n  }\n\n  for (const key in object) {\n    if (_.isArray(object[key])) {\n      // if the value is an array, iterate over it and recursively call this function\n      for (const item of object[key]) {\n        const result = findByPropertyName(item, propertyName);\n        if (result !== undefined) {\n          return result as Type;\n        }\n      }\n    }\n    if (_.isPlainObject(object[key])) {\n      // just look for the value in the object\n      const result = findByPropertyName(object[key], propertyName);\n      if (result !== undefined) {\n        return result as Type;\n      }\n    }\n  }\n\n  // no hit, return undefined\n  return undefined;\n}\n"})})})]})}function u(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},7970:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var r=t(5893),i=t(1151),a=t(4288);const s={},l=void 0,o={id:"reusables/shared-credentials-body-atomic-details",title:"shared-credentials-body-atomic-details",description:"Example Shared Credentials Body",source:"@site/docs/reusables/shared-credentials-body-atomic-details.mdx",sourceDirName:"reusables",slug:"/reusables/shared-credentials-body-atomic-details",permalink:"/reusables/shared-credentials-body-atomic-details",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{}},d={},c=[];function u(e){const{Details:n}={...(0,i.a)(),...e.components};return n||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(n,{children:[(0,r.jsx)("summary",{children:"Example Shared Credentials Body"}),(0,r.jsx)("p",{children:(0,r.jsx)(a.default,{})})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},4288:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var r=t(5893),i=t(1151);const a={},s=void 0,l={id:"reusables/shared-credentials-body-atomic",title:"shared-credentials-body-atomic",description:"",source:"@site/docs/reusables/shared-credentials-body-atomic.mdx",sourceDirName:"reusables",slug:"/reusables/shared-credentials-body-atomic",permalink:"/reusables/shared-credentials-body-atomic",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{}},o={},d=[];function c(e){const n={code:"code",pre:"pre",...(0,i.a)(),...e.components};return(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",metastring:'title="Example Response Body"',children:'{\n  "uuid": "d2fc31c3-8174-4e61-ab85-65be6446e8cf", // the sharedCredentialsUuid\n  "phone": "+14044327570",\n  "credentials": [\n      {\n          "id": "8743dce2-b0d3-46bd-a866-7af1b389ff0f",\n          "createdAt": "1703101781006",\n          "updatedAt": "1703101781006",\n          "type": "FullNameCredential",\n          "issuanceDate": "1703101781005",\n          "expirationDate": null,\n          "data": {\n              "fullName": "Richard Hendricks"\n          },\n          "issuerUuid": "e1f20210-f8a5-4f88-b760-9e34a6e65d28",\n          "status": "valid",\n          "verificationMethod": "phone_carrier"\n      },\n      {\n          "id": "53622515-7509-4ed1-9d70-5c3f17c148d9",\n          "createdAt": "1703101772943",\n          "updatedAt": "1703101772943",\n          "type": "PhoneCredential",\n          "issuanceDate": "1703101772943",\n          "expirationDate": null,\n          "data": {\n              "phone": "+14044327070"\n          },\n          "issuerUuid": "e1f20210-f8a5-4f88-b760-9e34a6e65d28",\n          "status": "valid",\n          "verificationMethod": "phone_carrier"\n      },\n      {\n          "id": "2a9b6f78-eaaf-4526-a131-d919d1a1d0cb",\n          "createdAt": "1703101781008",\n          "updatedAt": "1703101781008",\n          "type": "AddressCredential",\n          "issuanceDate": "1703101781006",\n          "expirationDate": null,\n          "data": {\n              "address": "6536 Del Playa Dr, Goleta, US-CA 93117-5117"\n          },\n          "issuerUuid": "e1f20210-f8a5-4f88-b760-9e34a6e65d28",\n          "status": "valid",\n          "verificationMethod": "phone_carrier"\n      },\n      {\n          "id": "46dc73e8-659e-41f8-be66-f7cedad26bd8",\n          "createdAt": "1703101781006",\n          "updatedAt": "1703101781006",\n          "type": "BirthDateCredential",\n          "issuanceDate": "1703101781005",\n          "expirationDate": null,\n          "data": {\n              "birthDate": "721310400000"\n          },\n          "issuerUuid": "e1f20210-f8a5-4f88-b760-9e34a6e65d28",\n          "status": "valid",\n          "verificationMethod": "phone_carrier"\n      },\n      {\n          "id": "e3a55df0-2245-4ec2-ad6a-64ba186a7089",\n          "createdAt": "1703101781006",\n          "updatedAt": "1703101781006",\n          "type": "SsnCredential",\n          "issuanceDate": "1703101781005",\n          "expirationDate": null,\n          "data": {\n              "ssn": "333224444"\n          },\n          "issuerUuid": "e1f20210-f8a5-4f88-b760-9e34a6e65d28",\n          "status": "valid",\n          "verificationMethod": "phone_carrier"\n      }\n    ]\n  }\n'})})}function u(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},5162:(e,n,t)=>{t.d(n,{Z:()=>s});t(7294);var r=t(6905);const i={tabItem:"tabItem_Ymn6"};var a=t(5893);function s(e){let{children:n,hidden:t,className:s}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.Z)(i.tabItem,s),hidden:t,children:n})}},4866:(e,n,t)=>{t.d(n,{Z:()=>w});var r=t(7294),i=t(6905),a=t(2466),s=t(6550),l=t(469),o=t(1980),d=t(7392),c=t(12);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:i}}=e;return{value:n,label:t,attributes:r,default:i}}))}(t);return function(e){const n=(0,d.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:t}=e;const i=(0,s.k6)(),a=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,o._X)(a),(0,r.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(i.location.search);n.set(a,e),i.replace({...i.location,search:n.toString()})}),[a,i])]}function m(e){const{defaultValue:n,queryString:t=!1,groupId:i}=e,a=h(e),[s,o]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:a}))),[d,u]=f({queryString:t,groupId:i}),[m,b]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[i,a]=(0,c.Nk)(t);return[i,(0,r.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:i}),x=(()=>{const e=d??m;return p({value:e,tabValues:a})?e:null})();(0,l.Z)((()=>{x&&o(x)}),[x]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),b(e)}),[u,b,a]),tabValues:a}}var b=t(2389);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=t(5893);function j(e){let{className:n,block:t,selectedValue:r,selectValue:s,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:d}=(0,a.o5)(),c=e=>{const n=e.currentTarget,t=o.indexOf(n),i=l[t].value;i!==r&&(d(n),s(i))},u=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;n=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;n=o[t]??o[o.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":t},n),children:l.map((e=>{let{value:n,label:t,attributes:a}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>o.push(e),onKeyDown:u,onClick:c,...a,className:(0,i.Z)("tabs__item",x.tabItem,a?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function v(e){let{lazy:n,children:t,selectedValue:i}=e;const a=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===i));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==i})))})}function y(e){const n=m(e);return(0,g.jsxs)("div",{className:(0,i.Z)("tabs-container",x.tabList),children:[(0,g.jsx)(j,{...e,...n}),(0,g.jsx)(v,{...e,...n})]})}function w(e){const n=(0,b.Z)();return(0,g.jsx)(y,{...e,children:u(e.children)},String(n))}}}]);