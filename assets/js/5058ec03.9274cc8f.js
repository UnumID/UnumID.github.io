"use strict";(self.webpackChunkunum_id=self.webpackChunkunum_id||[]).push([[497],{5162:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(7294),r=a(6010);const i="tabItem_Ymn6";function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,l),hidden:a},t)}},5488:(e,t,a)=>{a.d(t,{Z:()=>c});var n=a(7462),r=a(7294),i=a(6010),l=a(2389),o=a(7392),s=a(7094),p=a(2466);const d="tabList__CuJ",u="tabItem_LNqP";function m(e){var t,a;const{lazy:l,block:m,defaultValue:c,values:h,groupId:k,className:f}=e,g=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),N=null!=h?h:g.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),y=(0,o.l)(N,((e,t)=>e.value===t.value));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const b=null===c?c:null!=(t=null!=c?c:null==(a=g.find((e=>e.props.default)))?void 0:a.props.value)?t:g[0].props.value;if(null!==b&&!N.some((e=>e.value===b)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+N.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:v,setTabGroupChoices:w}=(0,s.U)(),[C,I]=(0,r.useState)(b),x=[],{blockElementScrollPositionUntilNextRender:T}=(0,p.o5)();if(null!=k){const e=v[k];null!=e&&e!==C&&N.some((t=>t.value===e))&&I(e)}const D=e=>{const t=e.currentTarget,a=x.indexOf(t),n=N[a].value;n!==C&&(T(t),I(n),null!=k&&w(k,String(n)))},U=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{var n;const t=x.indexOf(e.currentTarget)+1;a=null!=(n=x[t])?n:x[0];break}case"ArrowLeft":{var r;const t=x.indexOf(e.currentTarget)-1;a=null!=(r=x[t])?r:x[x.length-1];break}}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,i.Z)("tabs-container",d)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":m},f)},N.map((e=>{let{value:t,label:a,attributes:l}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:e=>x.push(e),onKeyDown:U,onFocus:D,onClick:D},l,{className:(0,i.Z)("tabs__item",u,null==l?void 0:l.className,{"tabs__item--active":C===t})}),null!=a?a:t)}))),l?(0,r.cloneElement)(g.filter((e=>e.props.value===C))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==C})))))}function c(e){const t=(0,l.Z)();return r.createElement(m,(0,n.Z)({key:String(t)},e))}},5612:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>m});var n=a(7462),r=(a(7294),a(3905)),i=(a(7874),a(106)),l=a(5488),o=a(5162);const s={id:"quick-start-guide",title:"Quick Start Guide",sidebar_label:"Quick Start Guide",slug:"/quick-start-guide"},p=void 0,d={unversionedId:"quick-start-guide",id:"quick-start-guide",title:"Quick Start Guide",description:"Time to read: 5 min",source:"@site/docs/quick-start-guide.mdx",sourceDirName:".",slug:"/quick-start-guide",permalink:"/quick-start-guide",draft:!1,tags:[],version:"current",frontMatter:{id:"quick-start-guide",title:"Quick Start Guide",sidebar_label:"Quick Start Guide",slug:"/quick-start-guide"},sidebar:"sidebar",previous:{title:"About Unum ID",permalink:"/"},next:{title:"Terminology",permalink:"/terminology"}},u={},m=[],c={toc:m};function h(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Time to read:")," 5 min"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Time to implement:")," 30 min"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"You will need an API key and an email and/or phone for each user. Below is a valid API Key for your initial usage along with suggested test email and phone values."),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Sandbox API Key"',title:'"Sandbox',API:!0,'Key"':!0},"5YugDQgjPn2LG2xTAs/+c6Kfrf7Ie45PIGjJurP8vNk=\n")),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Sandbox User Email"',title:'"Sandbox',User:!0,'Email"':!0},"test@example.com\n")),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Sandbox User Phone"',title:'"Sandbox',User:!0,'Phone"':!0},"+10123456789\n"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://www.unumid.co"},"Unum ID"))," enables 1-Click or Free ID Verification (IDV), powered by our digital ID cards. "),(0,r.kt)("p",null,"You can implement any of the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Free IDV Only:")," You issue a digital ID card to any of your users (new or existing), and we pay you for it."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Demo of Free Only:"),(0,r.kt)("p",null,"This demo shows Hooli using Free IDV. Richard is a an existing, verified user. The next time he signs in, Hooli asks him if he wants to activate his Hooli digital ID card. When he clicks the Activate button, Hooli issues the card, and Unum ID pays."),(0,r.kt)("iframe",{src:"https://marvelapp.com/prototype/18ej4ajj?emb=1&iosapp=false&frameless=false",width:"453",height:"864",allowTransparency:"true",frameborder:"0"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"1-Click IDV only:")," If a user has a digital ID card, they can verify with 1-Click. If they don't, you take them through your existing verification process (no change needed)."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Demo of 1-Click Only:"),(0,r.kt)("p",null,"This demo shows Kredita using 1-Click IDV when it's available. They collect email and phone from the user (Richard) and check if the user has matching credentials. The user does, so Kredita lets them verify with 1-Click."),(0,r.kt)("iframe",{src:"https://marvelapp.com/prototype/9cab6ai?emb=1&iosapp=false&frameless=false",width:"453",height:"864",allowTransparency:"true",frameborder:"0"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Both:")," If a user has a digital ID card, they can verify with 1-Click. If they don't, you take them through your existing verification process (no change needed) \u2014 ",(0,r.kt)("em",{parentName:"p"},"and at the end you issue them a digital ID card, and we pay you for it"),". "))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"What do you want to implement?")),(0,r.kt)(l.Z,{groupId:"options",defaultValue:"free",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"free",label:"Free Only",mdxType:"TabItem"},(0,r.kt)("p",null,"  ",(0,r.kt)("strong",{parentName:"p"},"You need to issue ",(0,r.kt)(i.Z,{type:"credential",mdxType:"Tip"},"credentials")," to a user.")," When you do, Unum ID will pay you according to your contract."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Get user consent.")," Ask the user if they want to activate their digital ID card (from your brand), and include Unum ID legal language:"),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"By activating, you agree to Unum ID's ",(0,r.kt)("a",{href:"https://www.unumid.co/legal"},(0,r.kt)("u",null,"Terms of Use")),".")),(0,r.kt)("p",{parentName:"li"},'"Terms of Use" should be underlined and hyperlinked to ',(0,r.kt)("a",{href:"https://www.unumid.co/legal"},(0,r.kt)("inlineCode",{parentName:"p"},"https://www.unumid.co/legal")),"."),(0,r.kt)("admonition",{parentName:"li",type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"You must obtain user consent before issuing credentials.")," Not doing so violates our terms and will prevent us from paying you for issuing credentials. "))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Call ",(0,r.kt)("a",{parentName:"strong",href:"/api-overview#issue-credentials"},(0,r.kt)("inlineCode",{parentName:"a"},"/credentials")))," with the user's verified email and/or phone and one or more credentials. For each credential, include a ",(0,r.kt)("inlineCode",{parentName:"p"},"type")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"data")," in accordance with one of our ",(0,r.kt)("a",{parentName:"p",href:"/schema"},"schemas"),". "),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("em",{parentName:"p"},"If we don't have a schema that suits your needs, ",(0,r.kt)("a",{parentName:"em",href:"mailto:support@unumid.co"},"email us")," and we'll make one for you.")),(0,r.kt)("admonition",{parentName:"li",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"When issuing credentials, you must only use an email or phone that you've verified.")," This is to ensure that only the controller of that email or phone can access the credentials you issue to them.")),(0,r.kt)("p",{parentName:"li"},"For example, if you have a verified Social Security Number (SSN) for a user, you can issue them a ",(0,r.kt)("inlineCode",{parentName:"p"},"SsnCredential"),". Just call the ",(0,r.kt)("inlineCode",{parentName:"p"},"/credentials")," endpoint with the user's email and/or phone, the ",(0,r.kt)("inlineCode",{parentName:"p"},"SsnCredential")," type, and the SSN data:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Example Issue Credentials Request Body"',title:'"Example',Issue:!0,Credentials:!0,Request:!0,'Body"':!0},'{\n  "email": "test@example.com",\n  "phone": "+11111111111",\n  "credentials": [\n    {\n      "type": "SsnCredential",\n      // based on the properties attribute of the schema\n      // highlight-start\n      "data": {\n        "ssn": "111-22-3333"\n      },\n      // highlight-end\n      "expirationDate": 1893484800\n    }\n  ]\n}\n')),(0,r.kt)("p",{parentName:"li"},"Format the credential data according to the ",(0,r.kt)("inlineCode",{parentName:"p"},"json.properties")," attribute of the credential schema. In this case, the schema is for a ",(0,r.kt)("inlineCode",{parentName:"p"},"SsnCredential")," and is hosted at ",(0,r.kt)("a",{parentName:"p",href:"https://schema.unumid.co/jsonSchema/SsnCredential"},(0,r.kt)("inlineCode",{parentName:"a"},"https://schema.unumid.co/jsonSchema/SsnCredential")),"."),(0,r.kt)("p",{parentName:"li"},"\u2705 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"}," You're done!")))))),(0,r.kt)(o.Z,{value:"1-click",label:"1-Click Only",mdxType:"TabItem"},(0,r.kt)("p",null,"  ",(0,r.kt)("strong",{parentName:"p"},"You need to check whether the user has matching ",(0,r.kt)(i.Z,{type:"credential",mdxType:"Tip"},"credentials"),".")," If they do, 1-Click IDV is available."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Call ",(0,r.kt)("a",{parentName:"strong",href:"/api-overview/#check-user-credentials"},(0,r.kt)("inlineCode",{parentName:"a"},"/hasMatchingCredentials")))," with the user's email and/or phone and the credential type(s) you need."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="Example Response Body"',title:'"Example',Response:!0,'Body"':!0},'{\n    "match": true,\n    "url": "https://wallet-beta.unumid.co/request/9f2053fc-cc4c-41cb-8d14-7d3ccf6167eb"\n}\n')),(0,r.kt)("details",null,(0,r.kt)("summary",null,"What counts as a match?"),(0,r.kt)("p",null,"When you call ",(0,r.kt)("code",null,"/hasMatchingCredentials"),", you include one or more credential requests. For each credential requests, you specify:",(0,r.kt)("ul",null,(0,r.kt)("li",null,"the type"),(0,r.kt)("li",null,"(optional) which issuers are acceptable"),(0,r.kt)("li",null,"(optional) whether the credential is required"))),(0,r.kt)("p",null,"There's a match if, for each credential request for a required credential, the user has a credential of the correct type from an acceptable issuer.")),"The user will either have matching credentials, or they won't. If they do, continue to step (2). If they don't, you're done with Unum ID and should take the user through your existing verification flow. ",(0,r.kt)("i",null,"If you would like your existing verification flow verification costs to be covered, please look into the ",(0,r.kt)("b",null,"Both")," section of this quick start, which includes both Free IDV and 1-Click IDV.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Direct the user to the ",(0,r.kt)("inlineCode",{parentName:"strong"},"url"))," the response body contains with an additional ",(0,r.kt)("inlineCode",{parentName:"p"},"redirectUrl")," query param that you define which will serve as the ultimate landing page after the user completes 1-Click IDV from the Unum ID web wallet. For example the final url you need to redirect the user to is:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="Example Redirect to Unum ID Wallet URL"',title:'"Example',Redirect:!0,to:!0,Unum:!0,ID:!0,Wallet:!0,'URL"':!0},"https://wallet-beta.unumid.co/request/9f2053fc-cc4c-41cb-8d14-7d3ccf6167eb?redirectUrl=https://acme-bank.co/sign-up/complete\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Capture the ",(0,r.kt)("inlineCode",{parentName:"strong"},"sharedCredentialsUuid")," query param")," from the ",(0,r.kt)("inlineCode",{parentName:"p"},"redirectUrl")," page you defined in step (2). To continue the example in step (2), the final url the user will be redirected to will be something like this:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="Example Redirect Back to Acme Bank URL"',title:'"Example',Redirect:!0,Back:!0,to:!0,Acme:!0,Bank:!0,'URL"':!0},"https://acme-bank.co/sign-up/complete?sharedCredentialsUuid=37ce0fff-af32-457e-9458-057125eb417d\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Call ",(0,r.kt)("inlineCode",{parentName:"strong"},"/sharedCredentials/{uuid}"))," from your backend with the ",(0,r.kt)("inlineCode",{parentName:"p"},"sharedCredentialsUuid")," the callback URL contains. The response body will contain the credentials the user agreed to share via 1-Click IDV."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="Example Response Body"',title:'"Example',Response:!0,'Body"':!0},'{\n    "uuid": string // the sharedCredentialsUuid\n    "credentials": [{\n        "id": "8a1d4e35-413d-496b-b499-8810b55cfb5c",\n        "type": "SsnCredential",\n        "data": {\n            "ssn": "111-22-3333"\n        },\n        "issuanceDate": "1671847264479",\n        "expirationDate": "1871839024044",\n        "issuer": "32ef9562-312d-4a8b-8f3e-ccb8df500b55",\n    }],\n    // user\'s email from input to /hasMatchingCredentials\n    // only present if email was provided\n    "email"?: string,\n    // user\'s phone from input to /hasMatchingCredentials\n    // only present if email was provided \n    "phone"?: string\n}\n')),(0,r.kt)("p",{parentName:"li"},"It's easiest to extract the data from each credential using the corresponding ",(0,r.kt)("a",{parentName:"p",href:"/schema"},"schema"),". The extracted data is verified according to the issuer of the credential, but you can perform additional verification steps if you like."),(0,r.kt)("p",{parentName:"li"},"\u2705 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"You're done!")))))),(0,r.kt)(o.Z,{value:"both",label:"Both",mdxType:"TabItem"},(0,r.kt)("p",null,"  ",(0,r.kt)("em",{parentName:"p"},"This simply combines the 1-Click Only and Free Only options.")),(0,r.kt)("p",null,"  ",(0,r.kt)("strong",{parentName:"p"},"You need to check whether the user has matching ",(0,r.kt)(i.Z,{type:"credential",mdxType:"Tip"},"credentials"),".")," If they do, 1-Click IDV is available."),(0,r.kt)("p",null,"  ",(0,r.kt)("strong",{parentName:"p"},"If they don't, you need to issue them credentials.")," When you do, Unum ID will pay you according to your contract."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Call ",(0,r.kt)("a",{parentName:"strong",href:"/api-overview/#check-user-credentials"},(0,r.kt)("inlineCode",{parentName:"a"},"/hasMatchingCredentials")))," with the user's email and/or phone and the credential type(s) you need."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="Example Response Body"',title:'"Example',Response:!0,'Body"':!0},'{\n    "match": true,\n    "url": "https://wallet-beta.unumid.co/request/9f2053fc-cc4c-41cb-8d14-7d3ccf6167eb"\n}\n')),(0,r.kt)("details",null,(0,r.kt)("summary",null,"What counts as a match?"),(0,r.kt)("p",null,"When you call ",(0,r.kt)("code",null,"/hasMatchingCredentials"),", you include one or more credential requests. For each credential requests, you specify:",(0,r.kt)("ul",null,(0,r.kt)("li",null,"the type"),(0,r.kt)("li",null,"(optional) which issuers are acceptable"),(0,r.kt)("li",null,"(optional) whether the credential is required"))),(0,r.kt)("p",null,"There's a match if, for each credential request for a required credential, the user has a credential of the correct type from an acceptable issuer.")),"The user will either have matching credentials, or they won't. If they do, continue to the ",(0,r.kt)("b",null,"Match")," tab of step (2). If they don't, continue to the ",(0,r.kt)("b",null,"No Match")," tab of step (2).")),(0,r.kt)(l.Z,{defaultValue:"no-match",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"match",label:"Match",mdxType:"TabItem"},(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Direct the user to the ",(0,r.kt)("inlineCode",{parentName:"strong"},"url"))," the response body contains with an additional ",(0,r.kt)("inlineCode",{parentName:"p"},"redirectUrl")," query param that you define which will serve as the ultimate landing page after the user completes 1-Click IDV from the Unum ID web wallet. For example, the final url the user is redirected to is:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="Example Redirect to Unum ID Wallet URL"',title:'"Example',Redirect:!0,to:!0,Unum:!0,ID:!0,Wallet:!0,'URL"':!0},"https://wallet-beta.unumid.co/request/9f2053fc-cc4c-41cb-8d14-7d3ccf6167eb?redirectUrl=https://acme-bank.co/sign-up/complete\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Capture the ",(0,r.kt)("inlineCode",{parentName:"strong"},"sharedCredentialsUuid")," query param")," from the ",(0,r.kt)("inlineCode",{parentName:"p"},"redirectUrl")," page you defined in step (2). To continue the example in step (2), the final url the user will be redirected to will be something like this:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="Example Redirect Back to Acme Bank URL"',title:'"Example',Redirect:!0,Back:!0,to:!0,Acme:!0,Bank:!0,'URL"':!0},"https://acme-bank.co/sign-up/complete?sharedCredentialsUuid=37ce0fff-af32-457e-9458-057125eb417d\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Call ",(0,r.kt)("a",{parentName:"strong",href:"/api-overview/#get-shared-credentials"},(0,r.kt)("inlineCode",{parentName:"a"},"/sharedCredentials/{uuid}")))," from your backend with the ",(0,r.kt)("inlineCode",{parentName:"p"},"sharedCredentialsUuid")," the callback URL contains. The response body will contain the credentials the user agreed to share via 1-Click IDV."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="Example Response Body"',title:'"Example',Response:!0,'Body"':!0},'{\n    "uuid": string // the sharedCredentialsUuid\n    "credentials": [{\n        "id": "8a1d4e35-413d-496b-b499-8810b55cfb5c",\n        "type": "SsnCredential",\n        "data": {\n            "ssn": "111-22-3333"\n        },\n        "issuanceDate": "1671847264479",\n        "expirationDate": "1871839024044",\n        "issuer": "32ef9562-312d-4a8b-8f3e-ccb8df500b55",\n    }],\n    // user\'s email from input to /hasMatchingCredentials\n    // only present if email was provided\n    "email"?: string,\n    // user\'s phone from input to /hasMatchingCredentials\n    // only present if email was provided \n    "phone"?: string\n}\n')),(0,r.kt)("p",{parentName:"li"},"It's easiest to extract the data from each credential using the corresponding ",(0,r.kt)("a",{parentName:"p",href:"/schema"},"schema"),". The extracted data is verified according to the issuer of the credential, but you can perform additional verification steps if you like."),(0,r.kt)("p",{parentName:"li"},"\u2705 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"}," You're done!")))))),(0,r.kt)(o.Z,{value:"no-match",label:"No Match",mdxType:"TabItem"},(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Get user consent.")," Ask the user if they want to activate their digital ID card (from your brand), and include Unum ID legal language:"),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"By activating, you agree to Unum ID's ",(0,r.kt)("u",null,"Terms of Use"),".")),(0,r.kt)("p",{parentName:"li"},'"Terms of Use" should be underlined and hyperlinked to ',(0,r.kt)("inlineCode",{parentName:"p"},"https://www.unumid.co/legal"),"."),(0,r.kt)("admonition",{parentName:"li",type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"You must obtain user consent before issuing credentials.")," Not doing so violates our terms and will prevent us from paying you for issuing credentials. "))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Call ",(0,r.kt)("a",{parentName:"strong",href:"/api-overview#issue-credentials"},(0,r.kt)("inlineCode",{parentName:"a"},"/credentials")))," from your backend with the user's verified email and/or phone and one or more credentials. For each credential, include a ",(0,r.kt)("inlineCode",{parentName:"p"},"type")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"data")," in accordance with one of our ",(0,r.kt)("a",{parentName:"p",href:"/schema"},"schemas"),". "),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("em",{parentName:"p"},"If we don't have a schema that suits your needs, ",(0,r.kt)("a",{parentName:"em",href:"mailto:support@unumid.co"},"email us")," and we'll make one for you.")),(0,r.kt)("admonition",{parentName:"li",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"When issuing credentials, you must only use an email or phone that you've verified.")," This is to ensure that only the controller of that email or phone can access the credentials you issue to them.")),(0,r.kt)("p",{parentName:"li"},"For example, if you have a verified Social Security Number (SSN) for a user, you can issue them a ",(0,r.kt)("inlineCode",{parentName:"p"},"SsnCredential")," to their verified phone. Just call the ",(0,r.kt)("inlineCode",{parentName:"p"},"/credentials")," endpoint with the user's verified email and/or phone, the ",(0,r.kt)("inlineCode",{parentName:"p"},"SsnCredential")," type, and the SSN data:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Example Issue Credentials Request Body"',title:'"Example',Issue:!0,Credentials:!0,Request:!0,'Body"':!0},'{\n  "email": "test@example.com",\n  "phone": "+11111111111",\n  "credentials": [\n    {\n      "type": "SsnCredential",\n      // based on the properties attribute of the schema\n      // highlight-start\n      "data": {\n        "ssn": "111-22-3333"\n      },\n      // highlight-end\n      "expirationDate": 1893484800\n    }\n  ]\n}\n')),(0,r.kt)("p",{parentName:"li"},"Format the credential data according to the ",(0,r.kt)("inlineCode",{parentName:"p"},"json.properties")," attribute of the credential schema. In this case, the schema is for a ",(0,r.kt)("inlineCode",{parentName:"p"},"SsnCredential")," and is hosted at ",(0,r.kt)("a",{parentName:"p",href:"https://schema.unumid.co/jsonSchema/SsnCredential"},(0,r.kt)("inlineCode",{parentName:"a"},"https://schema.unumid.co/jsonSchema/SsnCredential")),"."),(0,r.kt)("p",{parentName:"li"},"\u2705 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"}," You're done!"))))))))))}h.isMDXComponent=!0}}]);