"use strict";(self.webpackChunkverified_inc_docs=self.webpackChunkverified_inc_docs||[]).push([[8923],{76465:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>I,contentTitle:()=>F,default:()=>O,frontMatter:()=>A,metadata:()=>t,toc:()=>E});const t=JSON.parse('{"id":"schema","title":"Data Schemas","description":"Introduction","source":"@site/versioned_docs/version-1/schema.mdx","sourceDirName":".","slug":"/schema","permalink":"/v1/schema","draft":false,"unlisted":false,"tags":[],"version":"1","frontMatter":{"id":"schema","title":"Data Schemas","sidebar_label":"Data Schemas","slug":"/schema"},"sidebar":"sidebar","previous":{"title":"Reference","permalink":"/v1/api-reference"}}');var r=n(74848),s=n(28453),a=(n(58035),n(5243)),d=n(96540),c=n(87743),l=n(62616),o=n(10905);const h={container:"container__ccj",search:"search_dnlB","container-grid":"container-grid_gdNR","list-card":"list-card_xwza","list-card-skeleton":"list-card-skeleton_i4sb","coming-soon":"coming-soon_qq8j","list-card-title":"list-card-title_cv_5",pulse:"pulse_Dpg8"},m={container:"container_Yx8b",back:"back_YMET",header:"header_qWYl",title:"title_tglL",subtitle:"subtitle_n5yt","section-title":"section-title_JJIx","meta-container":"meta-container_AWlX",properties:"properties_IZUr","property-title":"property-title_jUnQ","properties-container":"properties-container_ik0p","property-field":"property-field_GOOn","property-span":"property-span_Kxn3","skeleton-title":"skeleton-title_nNzQ","skeleton-content-md":"skeleton-content-md_JFBE","skeleton-content-lg":"skeleton-content-lg_nAnC","skeleton-content-xl":"skeleton-content-xl_AAs6","attribute-container":"attribute-container_uCHO"},u=/([A-Z][a-z0-9]+)/gm,p=e=>e.split(u).filter((e=>e)).join(" "),x=e=>{let{value:i,onCredentialClick:n}=e;return Array.isArray(i)?(0,r.jsx)("ul",{style:{listStyleType:"decimal"},children:i.map(((e,i)=>(0,r.jsx)("li",{children:(0,r.jsx)(x,{value:e,onCredentialClick:n})},i)))}):"object"!=typeof i||Array.isArray(i)?(0,r.jsxs)("span",{className:"text--primary",children:[String(i),(t=i,/^\w+Credential$/.test(t)&&(0,r.jsx)("button",{className:"button button--sm button--outline button--primary margin-left--md",onClick:()=>n(i),children:"See Credential"}))]}):(0,r.jsx)("ul",{children:Object.entries(i).map(((e,i)=>{let[t,s]=e;return(0,r.jsxs)("li",{children:[(0,r.jsxs)("strong",{className:"text--padding-left--md margin-bottom--sm margin-top--md",children:[t,":"]})," ",(0,r.jsx)(x,{value:s,onCredentialClick:n})]},i)}))});var t};function j(e){let{schema:i,onRequestClose:n,onCredentialClick:t}=e;const[s,a]=(0,d.useState)(!1);return(0,d.useEffect)((()=>{const e=setTimeout((()=>a(!1)),3e3);return()=>{clearTimeout(e)}}),[s]),(0,r.jsx)(c.P.div,{className:`${m.container} --ifm-modal-overlay`,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:(0,r.jsxs)("div",{className:"margin-top--sm padding--lg",children:[(0,r.jsx)("button",{className:`${m.back} button button--md button--primary margin-bottom--lg`,onClick:n}),(0,r.jsxs)("div",{className:m.header,children:[(0,r.jsx)("button",{className:"button button--xs button--secondary",onClick:()=>{navigator.clipboard.writeText(JSON.stringify(i.raw,null,2)),a(!0)},children:s?"Copied!":"Copy schema"}),(0,r.jsx)("h4",{className:m.title,children:(0,r.jsx)(c.P.span,{layoutId:i.id,className:"margin-right--md",style:{display:"inline-block"},children:i.name})})]}),(0,r.jsx)("p",{children:i.id}),(0,r.jsx)(c.P.div,{initial:{opacity:0},animate:{opacity:1,transition:{delay:.3}},exit:{opacity:0},children:(0,r.jsx)(x,{value:(e=>{const i={...e};return delete i.raw,i})(i),onCredentialClick:t})})]})},i.id)}const f=e=>({$id:e,type:"object",comingSoon:!0,properties:{_:{description:"",examples:[],title:"",displayFormat:"String",input:{type:"Text"},type:"string"}}}),g={CreditCardCredential:{anyOf:[f("CreditCardNumberCredential"),f("CreditCardExpirationDateCredential"),f("CreditCardTypeCredential"),f("CreditCardTokenCredential"),f("BalanceCredential"),f("TransactionHistoryCredential")],$id:"CreditCardCredential",unevaluatedProperties:!1,comingSoon:!0},BankAccountCredential:{anyOf:[f("RoutingNumberCredential"),f("AccountNumberCredential"),f("BalanceCredential"),f("TransactionHistoryCredential")],$id:"BankAccountCredential",unevaluatedProperties:!1,comingSoon:!0},FraudInsightsCredential:{anyOf:[f("AuthoritativeSourceCheckCredential"),f("PEPCredential"),f("OFACCredential"),f("AdverseMediaScreenCredential")],$id:"FraudInsightsCredential",unevaluatedProperties:!1,comingSoon:!0}};function y(){return{async getSchemas(){var e,i;return{...await(e="https://schema-resolver.verified.inc/jsonSchema",i={method:"GET",mode:"cors"},fetch(e,i).then((e=>{if(e.ok)return e.json();throw new Error(`Http response error: ${e.status}`)}))),...g}}}}function v(e){let[i,n]=e;const{$id:t,...r}=n;return[i,{...r,id:i,name:p(t),raw:n}]}const C=e=>i=>{let[n]=i;return p(n).toLowerCase().indexOf(e.toLowerCase())>=0},b=(e,i)=>e.toLocaleString().localeCompare(i);function w(e){let{schema:i,onSchemaSelect:n}=e;const t={hidden:{opacity:0},show:{opacity:1},[`selected-${i.id}`]:{backgroundColor:"var(--ifm-color-primary)"},idle:{opacity:1,transition:{duration:0}},exit:{opacity:0}};return(0,r.jsxs)(c.P.div,{className:`${h["list-card"]} ${i.comingSoon?h["coming-soon"]:""}`,variants:t,whileHover:{backgroundColor:"var(--ifm-color-primary)"},onClick:()=>!i.comingSoon&&n(i),layout:!0,children:[(0,r.jsx)(c.P.h3,{layoutId:i.id,className:h["list-card-title"],children:i.name}),i.comingSoon&&(0,r.jsx)(c.P.span,{layoutId:i.id+"span",className:h["coming-soon"],children:"Coming soon!"})]},i.id)}function N(){return(0,r.jsx)("div",{className:h["list-card-skeleton"]})}function S(e){let{schemas:i}=e;const[n,t]=(0,d.useState)(null),[s,a]=(0,d.useState)(""),m=(0,d.useRef)(),[u,p]=(0,d.useState)("auto"),[x,f]=(0,d.useState)(0),g=(0,l.W)(m,{amount:"some"}),[y,N]=(0,d.useState)(g),S=Object.entries(i).map(v),k=S.filter(C(s)).sort(b),A=(0,d.useMemo)((()=>n?`selected-${n.id}`:y?"idle":g?"show":void 0),[n,g,y]);return(0,d.useEffect)((()=>{y||g&&N(!0)}),[g,y]),(0,d.useEffect)((()=>{const e=new ResizeObserver((e=>{const i=e[0].contentRect.height;f((e=>Math.max(e,i))),p(i)}));return e.observe(m.current),()=>{e.disconnect()}}),[]),(0,r.jsx)(c.P.div,{className:h.container,animate:{height:n?x:u,transition:{duration:.2}},layout:!0,children:(0,r.jsxs)(c.P.div,{ref:m,children:[(0,r.jsxs)(c.P.div,{variants:{hidden:{},show:{transition:{staggerChildren:.025}},selected:{},idle:{}},initial:"hidden",animate:A,whileInView:"show",viewport:{once:!0,margin:"-50%"},children:[(0,r.jsx)("input",{className:h.search,placeholder:"Search for a schema e.g Email Credential",onChange:e=>a(e.target.value)}),!k.length&&(0,r.jsxs)("h2",{className:"text--center margin-top--lg margin-bottom--lg",children:["No schema found with term ",s]}),(0,r.jsx)(c.P.div,{className:h["container-grid"],children:(0,r.jsx)(o.N,{children:k.map((e=>{let[i,n]=e;return(0,r.jsx)(w,{schema:n,onSchemaSelect:t},i)}))})})]}),(0,r.jsx)(o.N,{initial:!1,children:n&&(0,r.jsx)(j,{schema:n,onRequestClose:()=>t(null),onCredentialClick:async e=>{t(null),await new Promise((e=>setTimeout(e,500)));const i=S.find((i=>i[0]===e))[1];t(i)}})})]})})}function k(e){const[i,n]=(0,d.useState)(!0),[t,s]=(0,d.useState)(null);return(0,d.useEffect)((()=>{n(!0),y().getSchemas().then((e=>{s(e),n(!1)}))}),[]),i?(0,r.jsx)("div",{className:h.container,children:(0,r.jsx)("div",{className:h["container-grid"],children:new Array(28).fill(void 0).map(((e,i)=>(0,r.jsx)(N,{},i)))})}):(0,r.jsx)(S,{schemas:t})}const A={id:"schema",title:"Data Schemas",sidebar_label:"Data Schemas",slug:"/schema"},F=void 0,I={},E=[{value:"Introduction",id:"introduction",level:2},{value:"Schema Definitions",id:"schema-definitions",level:2},{value:"JSON Schema",id:"json-schema",level:4},{value:"Schema Library",id:"schema-library",level:2},{value:"Example",id:"example",level:2}];function _(e){const i={a:"a",admonition:"admonition",code:"code",h2:"h2",h4:"h4",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.h2,{id:"introduction",children:"Introduction"}),"\n",(0,r.jsxs)(i.p,{children:["Verified Inc. enables securely sharing verified ",(0,r.jsx)("a",{href:"/terminology#credential",children:(0,r.jsx)(a.A,{type:"credential"})})," data amongst network participants. While in theory this data can take any shape, a structured schema must be defined and followed for every credential type for the sake of all network participants."]}),"\n",(0,r.jsxs)(i.p,{children:["We use ",(0,r.jsx)(i.a,{href:"https://json-schema.org/",children:"JSON Schema"})," syntax for data validation purposes via a pre-compiled ",(0,r.jsx)(i.a,{href:"https://ajv.js.org/guide/why-ajv.html",children:"AJV"})," engine. This ensures our credential schemas are robust enough to encapsulate any data while still being easily described, displayed, and validated."]}),"\n",(0,r.jsx)(i.h2,{id:"schema-definitions",children:"Schema Definitions"}),"\n",(0,r.jsxs)(i.p,{children:["You can view all of the Verified Inc. defined credential schemas via ",(0,r.jsx)(i.a,{href:"https://schema-resolver.verified.inc/jsonSchema",children:"https://schema-resolver.verified.inc/jsonSchema"}),". If you want to know the schema for a particular credential type you can use that same url with the desired credential type in the path. For example, ",(0,r.jsx)(i.a,{href:"https://schema-resolver.verified.inc/jsonSchema/EmailCredential",children:"https://schema-resolver.verified.inc/jsonSchema/EmailCredential"}),", would yield the EmailCredential's schema information."]}),"\n",(0,r.jsxs)(i.admonition,{type:"tip",children:[(0,r.jsxs)(i.p,{children:["We have this API documented via our public ",(0,r.jsx)(i.a,{href:"https://api.docs.verified.inc/",children:"Postman collection"})," documentation under ",(0,r.jsx)(i.strong,{children:"Schema Resolver"}),"."]}),(0,r.jsxs)(i.p,{children:["It is possible to view the response bodies from ",(0,r.jsx)(i.a,{href:"https://schema-resolver.verified.inc/jsonSchema",children:"https://schema-resolver.verified.inc/jsonSchema"})," in the browser, but we recommend Postman, which automatically formats the JSON response for human readability."]})]}),"\n",(0,r.jsx)(i.admonition,{type:"important",children:(0,r.jsxs)(i.p,{children:["We hope to soon make it possible for you as a ",(0,r.jsx)("a",{href:"/terminology#customer",children:(0,r.jsx)(a.A,{type:"customer"})})," to define your own credential schemas. But ",(0,r.jsx)(i.strong,{children:"currently, we Verified Inc. define all credential schemas."})," If you would like a new credential schema for your use case, please let us know and we will gladly define one for you."]})}),"\n",(0,r.jsx)(i.p,{children:'We currently support what can be referred to as "single attribute atomic credentials" and "composite credentials".'}),"\n",(0,r.jsxs)(i.p,{children:["Atomic credentials provide users a means of selective disclosure for ",(0,r.jsx)("a",{href:"/terminology#request",children:(0,r.jsx)(a.A,{type:"request"})}),"s with optional fields."]}),"\n",(0,r.jsxs)(i.p,{children:['Composite credentials are credentials that contain multiple "Atomic Credentials". For example, the ',(0,r.jsx)(i.code,{children:"FullNameCredential"})," contains ",(0,r.jsx)(i.code,{children:"FirstNameCredential"}),", ",(0,r.jsx)(i.code,{children:"LastNameCredential"})," and ",(0,r.jsx)(i.code,{children:"MiddleNameCredential"}),". This provides a means of grouping atomic credentials with related data."]}),"\n",(0,r.jsx)(i.h4,{id:"json-schema",children:"JSON Schema"}),"\n",(0,r.jsxs)(i.p,{children:["The ",(0,r.jsx)(i.code,{children:"/jsonSchema"})," path will return the JSON schema definition, e.g. ",(0,r.jsx)(i.a,{href:"https://schema-resolver.verified.inc/jsonSchema/FirstNameCredential",children:"https://schema-resolver.verified.inc/jsonSchema/FirstNameCredential"}),":"]}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-json",metastring:'title="Example FirstNameCredential JSON Schema"',children:'{\n  "$id": "FirstNameCredential",\n  "type": "object",\n  "properties": {\n    "firstName": {\n      "description": "A person\'s first name",\n      "examples": ["John", "Mary Kate"],\n      "title": "First Name",\n      "displayFormat": "String",\n      "type": "string"\n    }\n  },\n  "required": ["firstName"]\n}\n'})}),"\n",(0,r.jsxs)(i.p,{children:["For composite credential schemas, the object will contain a ",(0,r.jsx)(i.code,{children:"allOf"})," property, which is an array of the atomic credential schemas:"]}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-json",metastring:'title="Example FullNameCredential JSON Schema"',children:'{\n  "$id": "FullNameCredential",\n  "type": "object",\n  "allOf": [\n    {\n      "$ref": "FirstNameCredential"\n    },\n    {\n      "$ref": "LastNameCredential"\n    },\n    {\n      "$ref": "MiddleNameCredential"\n    }\n  ]\n}\n'})}),"\n",(0,r.jsx)(i.admonition,{type:"tip",children:(0,r.jsxs)(i.p,{children:["The ",(0,r.jsx)(i.code,{children:"$ref"})," property is a JSON Pointer, which is a string containing a URI fragment identifier. In this case, it is a reference to another schema. This is how we define composite credential schemas."]})}),"\n",(0,r.jsx)(i.admonition,{type:"note",children:(0,r.jsxs)(i.p,{children:["It's important to note that each of these credentials inside ",(0,r.jsx)(i.code,{children:"FullNameCredential"})," are single attribute atomic credentials, so you are able to request individually.\nBut if you need create or request a ",(0,r.jsx)(i.code,{children:"CityCredential"})," and a ",(0,r.jsx)(i.code,{children:"StateCredential"})," you will need to use ",(0,r.jsx)(i.code,{children:"AddressCredential"})," so data doesn't get mismatched."]})}),"\n",(0,r.jsx)(i.h2,{id:"schema-library",children:"Schema Library"}),"\n",(0,r.jsx)(i.p,{children:"Search for or select a schema, see its properties and attributes, and copy the schema JSON:"}),"\n",(0,r.jsx)(k,{}),"\n",(0,r.jsx)(i.h2,{id:"example",children:"Example"}),"\n",(0,r.jsxs)(i.p,{children:["First, we get the JSON schemas for the ",(0,r.jsx)(i.a,{href:"https://schema-resolver.verified.inc/jsonSchema/SsnCredential",children:(0,r.jsx)(i.code,{children:"SsnCredential"})}),", ",(0,r.jsx)(i.a,{href:"https://schema-resolver.verified.inc/jsonSchema/FullNameCredential",children:(0,r.jsx)(i.code,{children:"FullNameCredential"})}),", which contains ",(0,r.jsx)(i.a,{href:"https://schema-resolver.verified.inc/jsonSchema/FirstNameCredential",children:(0,r.jsx)(i.code,{children:"FirstNameCredential"})})," and ",(0,r.jsx)(i.a,{href:"https://schema-resolver.verified.inc/jsonSchema/LastNameCredential",children:(0,r.jsx)(i.code,{children:"LastNameCredential"})})," and review their attributes' ",(0,r.jsx)(i.code,{children:"description"}),"s and ",(0,r.jsx)(i.code,{children:"examples"}),"."]}),"\n",(0,r.jsx)(i.p,{children:"Next, we construct valid credential bodies, according to the schemas:"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-typescript",children:"/*The credential data compliant with the Ssn, FullName (FirstName and LastName) Credentials schemas*/\nconst credentialsList: Credentials = [\n  {\n    type: 'SsnCredential',\n    data: {\n      ssn: '333224444',\n    },\n  },\n  {\n    type: 'FullNameCredential',\n    data: [\n      {\n        type: 'FirstNameCredential',\n        data: {\n          firstName: 'John',\n        },\n      },\n      {\n        type: 'LastNameCredential',\n        data: {\n          lastName: 'Doe',\n        },\n      },\n    ],\n  },\n];\n"})}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-typescript",metastring:'title="Example Request Body for Issuing Credentials"',children:'{\n  "credentials": credentialsList, // a list of one or more Credentials objects\n  "email": "richard.hendricks@pipedpiper.net"\n}\n\n'})})]})}function O(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(_,{...e})}):_(e)}},5243:(e,i,n)=>{n.d(i,{A:()=>c});n(96540);var t=n(44526),r=n(58035),s=n(87614),a=n.n(s),d=n(74848);const c=e=>{let{type:i,text:n,children:s}=e;if(i&&l[i]){var a=(0,t.A)();return s?(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(r.A,{id:a,children:l[i]}),(0,d.jsx)("u",{"data-tip":!0,"data-for":a,children:s})]}):(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(r.A,{id:a,children:l[i]}),(0,d.jsx)("u",{"data-tip":!0,"data-for":a,children:i})]})}var c=(0,t.A)();return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(r.A,{id:c}),(0,d.jsx)("u",{"data-tip":n,"data-for":c,children:s})]})},l={credential:(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)("div",{children:[(0,d.jsxs)("b",{children:["A ",(0,d.jsx)("a",{href:"/terminology#credential",children:"credential"})," is a collection of data about a person."]})," It's issued by a company and can be requested by other network participants, gated by the user's consent."]}),(0,d.jsxs)(a(),{trigger:"+ More...",triggerWhenOpen:"- Less",children:[(0,d.jsxs)("div",{children:[(0,d.jsx)("b",{children:"Example:"})," ACME Lending issues a KYC verification credential to Richard (an ACME user). This includes Richard's contact information and account numbers, as well as a level of confidence in the accuracy of the data."]}),(0,d.jsxs)("div",{children:[(0,d.jsx)("b",{children:"Components:"})," A company issues credentials following the steps in the ",(0,d.jsx)("a",{href:"/issuance-guide",children:"Issuance Guide"}),"."]})]})]}),request:(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)("div",{children:[(0,d.jsxs)("b",{children:["A ",(0,d.jsx)("a",{href:"/terminology#request",children:"request"})," (or ",(0,d.jsx)("i",{children:"credential request"}),") is a request for a ",(0,d.jsx)("a",{href:"/terminology#credential",children:"credentials"})," to be shared by a ",(0,d.jsx)("a",{href:"/terminology#user",children:"user"}),"."]})," It's created when a company successfully checks if a user has matching credentials, via ",(0,d.jsx)("a",{href:"/api-overview#check-user-credentials",children:"/hasMatchingCredentials."}),"  Only if the user has the ability to response with the matching credentials is a request created."]}),(0,d.jsxs)(a(),{trigger:"+ More...",triggerWhenOpen:"- Less",children:[(0,d.jsxs)("div",{children:[(0,d.jsx)("b",{children:"Example:"})," Hooli FinTech checks if Richard has a SSN and LastName credential issued by ACME Lending. Because he does, a request is created for those credentials specifically from ACME Lending. Hooli presents this request to Richard by directing him to the `url` received in the `/hasMatchingCredentials` response body."]}),(0,d.jsxs)("div",{children:[(0,d.jsx)("b",{children:"Components:"})," A company creates a user specific request by using ",(0,d.jsx)("a",{href:"/api-overview#check-user-credentials",children:"/hasMatchingCredentials."}),". If it is case the ",(0,d.jsx)("a",{href:"/terminology#user",children:"user"})," does not have the desired credentials then a request is not created. If it is the case the user does, a request is created and is returned in the form of a `url` attribute in response to the client."]})]})]}),user:(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)("div",{children:[(0,d.jsxs)("b",{children:["A ",(0,d.jsx)("a",{href:"/terminology#user",children:"user"})," is an individual in the Verified Inc. network."]})," Each user has at least one phone or emails, aka ",(0,d.jsx)("a",{href:"/terminology#user-identifier",children:"userIdentifiers"})," associated with them. They can have multiple of either."]}),(0,d.jsxs)(a(),{trigger:"+ More...",triggerWhenOpen:"- Less",children:[(0,d.jsxs)("div",{children:[(0,d.jsx)("b",{children:"Example:"})," Richard is a user in your account system and potentially of the Verified Inc. network. He has two email addresses and one phone with him. Credentials can be issued to or requested of him using any of these identifiers."]}),(0,d.jsxs)("div",{children:[(0,d.jsx)("b",{children:"Components:"})," Referenced in API endpoints `/hasMatchingCredentials` and `/issueCredentials`. User data is associated by using these user identifiers that you already keep on your users."]})]})]}),userIdentifier:(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)("div",{children:[(0,d.jsxs)("b",{children:["A ",(0,d.jsx)("a",{href:"/terminology#user-identifier",children:"userIdentifier"})," is an email or phone value"]})," which is associated with a ",(0,d.jsx)("a",{href:"/terminology#user",children:"user"}),"."]}),(0,d.jsxs)(a(),{trigger:"+ More...",triggerWhenOpen:"- Less",children:[(0,d.jsxs)("div",{children:[(0,d.jsx)("b",{children:"Example:"})," richard@pipedpiper.net is one of Richard Hendrick's user identifiers. He also has a phone number of +10123456789, another one of his user identifiers."]}),(0,d.jsxs)("div",{children:[(0,d.jsx)("b",{children:"Components:"})," We have abstracted away the complexity of dealing with a third party uuid to refer to a user. Instead, you can use the user's email or phone number to refer to and issue credentials to users in our system."]})]})]}),brand:(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)("div",{children:[(0,d.jsxs)("b",{children:["A ",(0,d.jsx)("a",{href:"/terminology#brand",children:"brand"})," is a company entity that has a corresponding unique api key, name, and card image."]})," Brands can issue, request and receive ",(0,d.jsx)("a",{href:"/terminology#credential",children:"credentials"})," to and from ",(0,d.jsx)("a",{href:"/terminology#user",children:"users"}),"."]}),(0,d.jsxs)(a(),{trigger:"+ More...",triggerWhenOpen:"- Less",children:[(0,d.jsxs)("div",{children:[(0,d.jsx)("b",{children:"Example:"})," ACME Bank is an Verified Inc. customer. However, they have two separate brands: ACME Lending and ACME Savings. Each brand has a unique api key, name, and card image."]}),(0,d.jsxs)("div",{children:[(0,d.jsx)("b",{children:"Components:"})," Each brand has an associated umbrella customer. It is totally okay if your customer only has one brand. We want to have the flexibility to support multiple brands per customer."]})]})]}),customer:(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("div",{children:(0,d.jsxs)("b",{children:["A ",(0,d.jsx)("a",{href:"/terminology#customer",children:"customer"})," is a company entity that serves as a parent to brands and their corresponding ApiKeys."]})}),(0,d.jsxs)(a(),{trigger:"+ More...",triggerWhenOpen:"- Less",children:[(0,d.jsxs)("div",{children:[(0,d.jsx)("b",{children:"Example:"})," ACME Bank is the Verified Inc. customer where their self service dashboard access rights are defined."]}),(0,d.jsxs)("div",{children:[(0,d.jsx)("b",{children:"Components:"})," The admins of the customer can manage individual ",(0,d.jsx)("a",{href:"/terminology#brand",children:"brand"})," settings."]})]})]})}},58035:(e,i,n)=>{n.d(i,{A:()=>s});n(96540);var t=n(62336),r=n(74848);const s=e=>{let{children:i,...n}=e;return(0,r.jsx)(t.A,{type:"dark",place:"top",effect:"solid",multiline:!0,textColor:"white",backgroundColor:"#2e2e2e",arrowColor:"transparent",delayHide:250,delayUpdate:250,resizeHide:!1,...n,className:"tooltip",wrapper:"span",children:i})}}}]);