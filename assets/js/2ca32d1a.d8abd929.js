"use strict";(self.webpackChunkunum_id=self.webpackChunkunum_id||[]).push([[945],{5162:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(7294),r=n(6010);const i="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,l),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>I});var a=n(7462),r=n(7294),i=n(6010),l=n(2466),s=n(6775),o=n(1980),u=n(7392),d=n(12);function p(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function c(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const a=(0,s.k6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,o._X)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(a.location.search);t.set(i,e),a.replace({...a.location,search:t.toString()})}),[i,a])]}function k(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,i=c(e),[l,s]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:i}))),[o,u]=h({queryString:n,groupId:a}),[p,k]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,i]=(0,d.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:a}),g=(()=>{const e=o??p;return m({value:e,tabValues:i})?e:null})();(0,r.useLayoutEffect)((()=>{g&&s(g)}),[g]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),k(e)}),[u,k,i]),tabValues:i}}var g=n(2389);const f="tabList__CuJ",v="tabItem_LNqP";function D(e){let{className:t,block:n,selectedValue:s,selectValue:o,tabValues:u}=e;const d=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),c=e=>{const t=e.currentTarget,n=d.indexOf(t),a=u[n].value;a!==s&&(p(t),o(a))},m=e=>{var t;let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=d.indexOf(e.currentTarget)+1;n=d[t]??d[0];break}case"ArrowLeft":{const t=d.indexOf(e.currentTarget)-1;n=d[t]??d[d.length-1];break}}null==(t=n)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>d.push(e),onKeyDown:m,onClick:c},l,{className:(0,i.Z)("tabs__item",v,null==l?void 0:l.className,{"tabs__item--active":s===t})}),n??t)})))}function b(e){let{lazy:t,children:n,selectedValue:a}=e;if(n=Array.isArray(n)?n:[n],t){const e=n.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function y(e){const t=k(e);return r.createElement("div",{className:(0,i.Z)("tabs-container",f)},r.createElement(D,(0,a.Z)({},e,t)),r.createElement(b,(0,a.Z)({},e,t)))}function I(e){const t=(0,g.Z)();return r.createElement(y,(0,a.Z)({key:String(t)},e))}},5706:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var a=n(7462),r=(n(7294),n(3905)),i=(n(4866),n(5162),n(7874),n(106));const l={id:"mobile-sdk-flutter",title:"Mobile SDK - Flutter",sidebar_label:"Flutter",slug:"/mobile-sdk-flutter"},s=void 0,o={unversionedId:"mobile-sdk-flutter",id:"mobile-sdk-flutter",title:"Mobile SDK - Flutter",description:"This is a cross-platform SDK that allows a host app to receive and store credentials, receive requests, and share presentations. It supports both Android and iOS applications built using the Flutter framework.",source:"@site/docs/mobile-sdk-flutter.mdx",sourceDirName:".",slug:"/mobile-sdk-flutter",permalink:"/mobile-sdk-flutter",draft:!1,tags:[],version:"current",frontMatter:{id:"mobile-sdk-flutter",title:"Mobile SDK - Flutter",sidebar_label:"Flutter",slug:"/mobile-sdk-flutter"}},u={},d=[{value:"Overview",id:"overview",level:2},{value:"Minimum Requirements",id:"minimum-requirements",level:3},{value:"Required Permissions",id:"required-permissions",level:3},{value:"Setup",id:"setup",level:2},{value:"Installation",id:"installation",level:3},{value:"Usage",id:"usage",level:2},{value:"SDK Initialization",id:"sdk-initialization",level:3},{value:"SDK handle deeplink",id:"sdk-handle-deeplink",level:3},{value:"SDK QR Code Scanner",id:"sdk-qr-code-scanner",level:3},{value:"SDK Logging",id:"sdk-logging",level:3},{value:"SDK Logout",id:"sdk-logout",level:3},{value:"SDK Event Listener",id:"sdk-event-listener",level:3},{value:"SDK Presentation Response",id:"sdk-presentation-response",level:3},{value:"Handling Multiple Users",id:"handling-multiple-users",level:2},{value:"Example Flow",id:"example-flow",level:3}],p={toc:d};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This is a cross-platform SDK that allows a host app to receive and store ",(0,r.kt)(i.Z,{type:"credential",mdxType:"Tip"},"credentials"),", receive ",(0,r.kt)(i.Z,{type:"request",mdxType:"Tip"},"requests"),", and share ",(0,r.kt)(i.Z,{type:"presentation",mdxType:"Tip"},"presentations"),". It supports both Android and iOS applications built using the Flutter framework."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Before you begin:")," You need to be registered as Verified Inc. customer, and you need to register at least one ",(0,r.kt)(i.Z,{type:"holder app",mdxType:"Tip"}),". (You can register zero to many, depending on your use case.) You'll receive a holder app API key to use with this SDK."),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("h3",{id:"minimum-requirements"},"Minimum Requirements"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Android 6.0 (Marshmallow) and above")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"iOS 13 and above")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"English language")," (internationalization coming soon)")),(0,r.kt)("h3",{id:"required-permissions"},"Required Permissions"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Camera:")," requested when you show the QR code scanner"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Biometrics/Passcode:")," requested when you call ",(0,r.kt)("inlineCode",{parentName:"li"},"initialize()"))),(0,r.kt)("p",null,"Permissions and any permission rational messages should be updated in the individual native sections of the host application."),(0,r.kt)("h2",{id:"setup"},"Setup"),(0,r.kt)("h3",{id:"installation"},"Installation"),(0,r.kt)("p",null,"Install the flutter plugin by adding it to your pubspec.yaml file."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"dependencies:\n  unumidflutter:\n      git:\n        url: git@github.com:UnumID/unumid-sdk-flutter.git\n")),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("h3",{id:"sdk-initialization"},"SDK Initialization"),(0,r.kt)("p",null,"This function initializes the Verified Inc. SDK, allowing the host app to use it. It must be called before any other SDK functionality can be used. In most cases, it should be called when the application loads/comes to the foreground. Once onSuccess is returned, the developer will then be able to retrieve the saved did."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},'import \'package:unumidflutter/unumidflutter.dart\';\n\nFuture<void> _sdkInit() async {\n        final prefs = await SharedPreferences.getInstance();\n        var userId = currentUserID;\n        var did = currentUserDid; // can be empty\n        var customerId = "YourCustomerId";\n        var apiKey = "YourApiKey";\n        var results = await Unumidflutter.initialize(userId, did, customerId, apiKey);\n\n        // returned results will be the user DID\n        print("Result: " + results);\n        if (results.toString().isNotEmpty) {\n          // store DID for future reference\n        }\n      }\n\n      _sdkInit();\n')),(0,r.kt)("h3",{id:"sdk-handle-deeplink"},"SDK handle deeplink"),(0,r.kt)("p",null,"Used to manually handle a link."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"import 'package:unumidflutter/unumidflutter.dart';\n\nUnumidflutter.handleLink(\"deepLinkUri\");\n")),(0,r.kt)("h3",{id:"sdk-qr-code-scanner"},"SDK QR Code Scanner"),(0,r.kt)("p",null,"Used to scan a QR code using the build in scanner. If you would like to use a custom scanner, simple send the received url to the handleLink api."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"import 'package:unumidflutter/unumidflutter.dart';\n\nUnumidflutter.scanQrCode();\n")),(0,r.kt)("h3",{id:"sdk-logging"},"SDK Logging"),(0,r.kt)("p",null,"Turn on SDK Logging"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"import 'package:unumidflutter/unumidflutter.dart';\n\nUnumidflutter.turnOnLogging();\n")),(0,r.kt)("h3",{id:"sdk-logout"},"SDK Logout"),(0,r.kt)("p",null,"Log the current user out of the SDK."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"import 'package:unumidflutter/unumidflutter.dart';\n\nUnumidflutter.logout();\n")),(0,r.kt)("h3",{id:"sdk-event-listener"},"SDK Event Listener"),(0,r.kt)("p",null,"If the client application would like to be notified of SDK events (like presentation requests), then the ",(0,r.kt)("inlineCode",{parentName:"p"},"FlutterEventLister")," can be set."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"import 'package:unumidflutter/unumidflutter.dart';\n\nUnumidflutter.setupEventListener(FlutterEventListener listener);\n")),(0,r.kt)("h3",{id:"sdk-presentation-response"},"SDK Presentation Response"),(0,r.kt)("p",null,"If the client application is handling presentation requests with a custom UI, then the response can be sent back to the SDK with ",(0,r.kt)("inlineCode",{parentName:"p"},"handlePresentationResponse"),".\nThis should include an enum of the response (Accept, Decline, FLag), and the original JSON payload. However, the payload can be modified by the client application to only include selected credentials in the case that some credentials are optional, or there are multiple values for same credential type."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"import 'package:unumidflutter/unumidflutter.dart';\n\nUnumidflutter.handlePresentationResponse(String response, String json);\n")),(0,r.kt)("h2",{id:"handling-multiple-users"},"Handling Multiple Users"),(0,r.kt)("p",null,"Each user is identified by some user ID in your system and by a ",(0,r.kt)(i.Z,{type:"DID",mdxType:"Tip"})," in the Verified Inc. ecosystem. You simply need to store an association between each user ID and DID. That way, when your host app has a particular user ID (for example once a user is logged into your existing account system), it can pass the corresponding DID to the SDK."),(0,r.kt)("p",null,"If you don't have existing user IDs, you ",(0,r.kt)("em",{parentName:"p"},"could")," use the DIDs themselves as user IDs. However, we recommend using separate identifiers (internal to your company), to distinguish them from DIDs, which are global to the Verified Inc. ecosystem."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The technical details of DIDs are not relevant to deploying or using Verified Inc.. You can think of DIDs as identifiers in the normal sense \u2014 unique, random strings of characters like UUIDs.")),(0,r.kt)("p",null,"When you ",(0,r.kt)("a",{parentName:"p",href:"#initialize"},"initialize")," the SDK, you can optionally include a DID."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Don't include a DID for a user who's new to the SDK.")," The SDK will generate a new one that you should store, associated with the user ID in your system."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Do include a DID for a user who returns to the SDK.")," The SDK will use this DID to access the correct stored data for that user.")),(0,r.kt)("admonition",{type:"important"},(0,r.kt)("p",{parentName:"admonition"},"DIDs are the ",(0,r.kt)("em",{parentName:"p"},"only")," identifiers the SDK understands, so it relies entirely on the host app to pass the correct one."),(0,r.kt)("p",{parentName:"admonition"},"For example, suppose Users 1 and 2 are associated with DIDs 1 and 2, respectively. If User 1 is using the host app, but the app passes DID 2 to the SDK, the SDK will give User 1 access to to User 2's data.")),(0,r.kt)("h3",{id:"example-flow"},"Example Flow"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"New User 1 logs into host app."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"SDK is initialized with no DID."),(0,r.kt)("li",{parentName:"ul"},"SDK returns newly generated DID 1."),(0,r.kt)("li",{parentName:"ul"},"Host app stores DID 1 and associates it with User 1."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"New User 2 logs into host app."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"SDK is initialized with no DID."),(0,r.kt)("li",{parentName:"ul"},"SDK returns newly generated DID 2."),(0,r.kt)("li",{parentName:"ul"},"Host app stores DID 2 and associates it with User 2."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Returning User 1 logs into host app."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Host app retrieves DID 1 and includes it in SDK initialization."),(0,r.kt)("li",{parentName:"ul"},"SDK recognizes this is a returning user and does not generate a new DID.")))))}c.isMDXComponent=!0}}]);