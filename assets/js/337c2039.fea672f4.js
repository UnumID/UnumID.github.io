(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{83:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),o=(n(0),n(102)),i=(n(104),n(105)),s={id:"deployment-overview",title:"Deployment Overview",sidebar_label:"Deployment Overview",slug:"/deployment-overview"},l={unversionedId:"deployment-overview",id:"deployment-overview",isDocsHomePage:!1,title:"Deployment Overview",description:"This section provides a brief overview of how your company can deploy Unum ID tech. For full technical details, see the documentation for each component:",source:"@site/docs/deployment-overview.mdx",slug:"/deployment-overview",permalink:"/deployment-overview",version:"current",sidebar_label:"Deployment Overview",sidebar:"sidebar",previous:{title:"Architecture",permalink:"/architecture"},next:{title:"Privacy and Security",permalink:"/privacy-and-security"}},b=[{value:"Process",id:"process",children:[{value:"Simulated Deployment",id:"simulated-deployment",children:[]}]},{value:"Installing Components",id:"installing-components",children:[{value:"Mobile SDK",id:"mobile-sdk",children:[]},{value:"Server SDK",id:"server-sdk",children:[]},{value:"Web SDK",id:"web-sdk",children:[]}]},{value:"Versioning Strategy",id:"versioning-strategy",children:[]},{value:"FAQ",id:"faq",children:[]}],c={toc:b};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This section provides a brief overview of how your company can deploy Unum ID tech. For full technical details, see the documentation for each component:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/server-sdk"},"Server SDK")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/mobile-sdk"},"Mobile SDK")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/web-sdk"},"Web SDK"))),Object(o.b)("h2",{id:"process"},"Process"),Object(o.b)("p",null,"Each Unum ID component is simple to install and use. Your development team should be able to try the platform in a matter of hours and complete an integration suitable for a pilot in a few days. We provide dedicated engineering support to make the process as easy as possible."),Object(o.b)("h3",{id:"simulated-deployment"},"Simulated Deployment"),Object(o.b)("p",null,"For pilots, we can also provide a \u200b",Object(o.b)("strong",{parentName:"p"},"simulated deployment,")," which allows you to try Unum ID technology with zero integration work. We host all the components for you and provide a dedicated mobile app and website with your branding. Your testers can then try the platform by simply installing the app and using the website. "),Object(o.b)("p",null,"This is a great way to build the business case for Unum ID before progressing to a full deployment. Please \u200b",Object(o.b)("a",{parentName:"p",href:"mailto:sales@Unum.ID"},"contact sales\u200b")," for more."),Object(o.b)("h2",{id:"installing-components"},"Installing Components"),Object(o.b)("p",null,"When you register as an Unum ID customer, we send you API keys for each component."),Object(o.b)("h3",{id:"mobile-sdk"},"Mobile SDK"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"See full documentation ",Object(o.b)("a",{parentName:"em",href:"/mobile-sdk-overview"},"here"),".")),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Add the SDK to your mobile app (e.g. through Maven/CocoaPods)."),Object(o.b)("li",{parentName:"ol"},"Publish an update to the app stores."),Object(o.b)("li",{parentName:"ol"},"Store the user identifier the SDK returns in your database.")),Object(o.b)("p",null,"As noted in the ",Object(o.b)("a",{parentName:"p",href:"#faq"},"\u200bFAQ\u200b"),", you can add Unum ID on top of your existing account system. To do so, simply initialize the Mobile SDK after a user logs into their account. You can later transition away from the account system to fully eliminate passwords."),Object(o.b)("p",null,"The Mobile SDK works entirely behind the scenes, benefitting users without intruding on the UI/UX of your app. The only components exposed to the user are system alerts and a QR code scanner, which you can trigger from anywhere in the app (e.g. with a Scan button)."),Object(o.b)("h3",{id:"server-sdk"},"Server SDK"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"See full documentation ",Object(o.b)("a",{parentName:"em",href:"/server-sdk"},"here"),".")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"You can also choose to deploy this as a (containerized) app that you interact with through an API.")),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Install the SDK on your server (e.g. through NPM)."),Object(o.b)("li",{parentName:"ol"},"Store the private keys that the SDK returns securely in your database.")),Object(o.b)("h4",{id:"if-acting-as-a-verifier"},"If acting as a ",Object(o.b)("a",{parentName:"h4",href:"/terminology#verifier"},"Verifier")),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Create an interface the Web SDK can use to interact with the Server SDK. For example so a presentation request created by the Server SDK can be displayed on the client."),Object(o.b)("li",{parentName:"ol"},"Create an ",Object(o.b)("a",{parentName:"li",href:"https://gist.github.com/UnumIDAdmin/2bffdf092594196beba48ce7738b60fa"},"endpoint")," to receive encrypted ",Object(o.b)("a",{parentName:"li",href:"/terminology#presentation"},"Presentation")," data from our Identity Engine cloud. ")),Object(o.b)("h4",{id:"if-acting-as-an-issuer"},"If acting as an ",Object(o.b)("a",{parentName:"h4",href:"terminology#issuer"},"Issuer")),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Create an ",Object(o.b)("a",{parentName:"li",href:"https://gist.github.com/UnumIDAdmin/4548f589140bcd42407cff45d63794e2"},"endpoint")," to receive user ",Object(o.b)("a",{parentName:"li",href:"/terminology#did"},"DID")," data from our Identity Engine cloud."),Object(o.b)("li",{parentName:"ol"},"Create an ",Object(o.b)("a",{parentName:"li",href:"https://gist.github.com/UnumIDAdmin/d76d9fe46e459e529d7f7b6f9319a0b6"},"endpoint")," to receive signed ",Object(o.b)("a",{parentName:"li",href:"/terminology#subject"},"Subject")," credential requests from our Identity Engine wallet.")),Object(o.b)("p",null,"Using the Server SDK is straightforward. To issue (send) a ",Object(o.b)(i.a,{type:"credential",mdxType:"Tip"})," to a user, you input identity data and the user\u2019s ",Object(o.b)(i.a,{type:"DID",mdxType:"Tip"},"DID"),". And to ",Object(o.b)(i.a,{type:"request",mdxType:"Tip"})," a ",Object(o.b)(i.a,{type:"presentation",mdxType:"Tip"})," from a user, you input the type of credential and acceptable ",Object(o.b)(i.a,{type:"issuer",mdxType:"Tip"},"issuers"),". The SDK handles the rest."),Object(o.b)("h3",{id:"web-sdk"},"Web SDK"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"See full documentation ",Object(o.b)("a",{parentName:"em",href:"/web-sdk"},"here"),".")),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Add the SDK to your web client (e.g. through NPM)."),Object(o.b)("li",{parentName:"ol"},"Point the Web SDK at the Server SDK interface you created in step (3) above."),Object(o.b)("li",{parentName:"ol"},"Define a redirect for when a ",Object(o.b)(i.a,{type:"presentation",mdxType:"Tip"})," is verified (e.g. granting the user access).")),Object(o.b)("p",null,"Using the Web SDK is simple. Just call the Server SDK to create ",Object(o.b)(i.a,{type:"request",mdxType:"Tip"},"requests")," for presentations from users. The Web SDK takes care of everything else \u2014 the user interface, fallback options, error handling, etc."),Object(o.b)("h2",{id:"versioning-strategy"},"Versioning Strategy"),Object(o.b)("p",null,"The Unum ID ",Object(o.b)("a",{parentName:"p",href:"/server-sdk"},"Server"),", ",Object(o.b)("a",{parentName:"p",href:"/mobile-sdk-overview"},"Mobile"),", and ",Object(o.b)("a",{parentName:"p",href:"/web-sdk"},"Web")," SDK major versions correspond to one another. It is recommended to keep the Web and Server SDK versions aligned with one another for the best experience. For example, if using version ",Object(o.b)("inlineCode",{parentName:"p"},"3.1.0")," of the Server SDK it is advised to use version ",Object(o.b)("inlineCode",{parentName:"p"},"3.x.x")," of the Web SDK. By nature of the network, keeping Holder SDK version alignment with the Server SDK is practically impossible. However, we have a solution."),Object(o.b)("p",null,"Each major version of the Server and Holder SDKs are ",Object(o.b)("em",{parentName:"p"},"mostly")," backwards compatible with older versions of one another. If performing the role of an ",Object(o.b)("a",{parentName:"p",href:"/terminology#issuer"},"Issuer")," all SDK versions will be backwards compatible. If performing the role of ",Object(o.b)("a",{parentName:"p",href:"/terminology#verifier"},"Verifier")," presentation verification is often the functionality that is not backwards compatible. In order to support presentation verification from variable Holder SDKs one will need to leverage all Server SDK versions that they need to support. This is akin to normal mobile application versioning strategies of the server always supporting a version greater than or equal to the mobile version. "),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"Upon leveraging or testing a new Server SDK major version end to end we the version information corresponding to your ",Object(o.b)("a",{href:"/terminology#verifier"},Object(o.b)(i.a,{type:"verifier",mdxType:"Tip"}))," needs to be updated so we know how to route ",Object(o.b)("a",{href:"/terminology#presentation"},Object(o.b)(i.a,{type:"presentation",mdxType:"Tip"})),"s to the version of your application with corresponding Server SDK version. This information is originally provided during ",Object(o.b)("a",{parentName:"p",href:"https://docs.unum.id/server-sdk#registerverifier"},"registration"),"."))),Object(o.b)("h2",{id:"faq"},"FAQ"),Object(o.b)("details",null,Object(o.b)("summary",null,Object(o.b)("b",null,"Do we have to replace our account system?")),Object(o.b)("br",null),Object(o.b)("p",null,Object(o.b)("b",null,"No.")," Unum ID can sit on top of your existing account system, facilitating a gradual transition away from passwords. You don\u2019t have to eliminate them right away, or ever if you prefer."),Object(o.b)("p",null,"We recommend first using Unum ID as a second step in the authentication process, on top of your existing account system. Then, you can gradually replace that system entirely to fully eliminate passwords and remove the weak link.")),Object(o.b)("br",null),Object(o.b)("details",null,Object(o.b)("summary",null,Object(o.b)("b",null,"Are there setup steps for users?")),Object(o.b)("br",null),Object(o.b)("p",null,Object(o.b)("b",null,"No, for users everything works automatically, behind the scenes.")," When you set up Unum ID, you add our Mobile SDK to your app and publish an update to the app store. The next time the user opens the app, they\u2019ll have all the functionality Unum ID provides without having to do anything. It\u2019s just like a normal feature update.")),Object(o.b)("br",null),Object(o.b)("details",null,Object(o.b)("summary",null,Object(o.b)("b",null,"What if a user loses their phone?")),Object(o.b)("br",null),Object(o.b)("p",null,Object(o.b)("b",null,"Not a problem.")," The user\u2019s app is backed up, and they can remotely deactivate their lost phone, just like they can cancel a credit card."),Object(o.b)("p",null,"The default backup is to the user\u2019s iCloud (on iOS) or Google Drive (on Android) account, so when they get a new phone everything will work like before. We also provide an easy way for you to store a backup on the user\u2019s behalf."),Object(o.b)("p",null,"Unum ID requires that the user has a device biometric and passcode set up. Lost phones that have these enabled are extremely secure. (Even the FBI couldn\u2019t break into an iPhone.) But for extra protection, we provide a way for the user to remotely deactivate the app on the lost phone, making it useless even if an attacker breaks through the biometric. And for ultimate protection, the user can choose to remotely erase their device.")),Object(o.b)("br",null),Object(o.b)("details",null,Object(o.b)("summary",null,Object(o.b)("b",null,"What if a user has multiple phones?")),Object(o.b)("br",null),Object(o.b)("p",null,Object(o.b)("b",null,"They can use all of them")," and keep them synchronized.")))}p.isMDXComponent=!0}}]);