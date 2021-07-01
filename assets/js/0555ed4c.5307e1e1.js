(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{128:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/architecture-a2005fb41ed8ffde70cba0d556fb2dca.png"},197:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/issuance-e09a4b6a8670b81dc0faf1a67cc8cd1d.png"},198:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/sharing-ec6c2514bd111c98b6c434f00f617e59.png"},71:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return o})),a.d(t,"toc",(function(){return d})),a.d(t,"default",(function(){return l}));var n=a(3),r=a(7),i=(a(0),a(100)),s=(a(102),a(103)),c={id:"privacy-and-security",title:"Privacy and Security",sidebar_label:"Privacy and Security",slug:"/privacy-and-security"},o={unversionedId:"privacy-and-security",id:"privacy-and-security",isDocsHomePage:!1,title:"Privacy and Security",description:"Our Encrypted Domain approach ensures that:",source:"@site/docs/privacy-and-security.mdx",slug:"/privacy-and-security",permalink:"/privacy-and-security",version:"current",sidebar_label:"Privacy and Security",sidebar:"sidebar",previous:{title:"Deployment Overview",permalink:"/deployment-overview"},next:{title:"Server SDK",permalink:"/server-sdk"}},d=[{value:"Encrypted Domain",id:"encrypted-domain",children:[{value:"Example",id:"example",children:[]}]},{value:"Features",id:"features",children:[{value:"Multi-Layer Encryption",id:"multi-layer-encryption",children:[]},{value:"Secure Mobile Hardware",id:"secure-mobile-hardware",children:[]},{value:"Privacy and Consent",id:"privacy-and-consent",children:[]},{value:"Local Cryptography",id:"local-cryptography",children:[]},{value:"No Shared Secrets",id:"no-shared-secrets",children:[]},{value:"Bi-Directional Auth",id:"bi-directional-auth",children:[]}]}],p={toc:d};function l(e){var t=e.components,c=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},p,c,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Our ",Object(i.b)("a",{parentName:"p",href:"#encrypted-domain"},"Encrypted Domain")," approach ensures that:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"We \u200bnever \u200bhave access to \u200b",Object(i.b)("em",{parentName:"strong"},"any")," \u200bsensitive user data.")," "),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"The user has full control over their data.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"The user\u2019s data is robustly tied back to a single human being.")," ")),Object(i.b)("p",null,"We accomplish this with a state-of-the-art ",Object(i.b)("em",{parentName:"p"},"\u200bdistributed")," system \u2014 not a massive central database vulnerable to attack and privacy violations. This is the real magic of Unum ID."),Object(i.b)("h2",{id:"encrypted-domain"},"Encrypted Domain"),Object(i.b)("p",null,Object(i.b)("img",{src:a(128).default}),"\n",Object(i.b)("em",{parentName:"p"},Object(i.b)("b",null,"Encrypted Domain:")," You use SDKs to interact with our Identity Engine cloud. We "),"never",Object(i.b)("em",{parentName:"p"}," have access to sensitive user data. See the ",Object(i.b)("a",{parentName:"em",href:"/architecture"},"Architecture")," section for more information about each component.")),Object(i.b)("p",null,"A user\u2019s Unum ID ",Object(i.b)(s.a,{type:"credential",mdxType:"Tip"},"credentials")," are stored locally on their device, in an app using our ",Object(i.b)("a",{parentName:"p",href:"/mobile-sdk-overview"},"Mobile SDK"),". The ",Object(i.b)("em",{parentName:"p"},"only")," ones who ever have access to the sensitive data in each credential are:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"the company that issued the credential"),Object(i.b)("li",{parentName:"ol"},"the user the credential was issued to"),Object(i.b)("li",{parentName:"ol"},"companies the user shares the credential with")),Object(i.b)("p",null,"The upshot is this: ",Object(i.b)("strong",{parentName:"p"},"Unum ID coordinates sharing of verified identity data, but we are ",Object(i.b)("em",{parentName:"strong"},"never")," able to interact with that data in plaintext.")," Our sharified identity\u2122 solutions come with unparalleled privacy and security."),Object(i.b)("h3",{id:"example"},"Example"),Object(i.b)("h4",{id:"issuing-a-credential"},"Issuing a Credential"),Object(i.b)("p",null," When you issue (send) a ",Object(i.b)(s.a,{type:"credential",mdxType:"Tip"})," to a user, that credential is encrypted with the user\u2019s public key. (The ",Object(i.b)("a",{parentName:"p",href:"/server-sdk"},"Server SDK")," does this locally on your server and sends the encrypted version to us.) We temporarily store and route the encrypted credential to the correct user\u2019s app but have no ability to decrypt the data. The user\u2019s app then receives and decrypts the credential. See the diagram below."),Object(i.b)("p",null,Object(i.b)("img",{src:a(197).default}),"\n",Object(i.b)("em",{parentName:"p"},Object(i.b)("b",null,"Issuance:")," The Server SDK encrypts a credential with a user\u2019s public key before sending it to us. This ensures that only you and that specific user have access to the plaintext data \u2014 Unum ID never does.")),Object(i.b)("h4",{id:"sharing-a-credential"},"Sharing a Credential"),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"The shared credential is actually contained in a ",Object(i.b)(s.a,{type:"presentation",mdxType:"Tip"})," object, but this is unimportant jargon in this context. See the ",Object(i.b)("a",{parentName:"p",href:"/mobile-sdk-overview"},"Mobile SDK")," and ",Object(i.b)("a",{parentName:"p",href:"/server-sdk"},"Server SDK")," docs for full details."))),Object(i.b)("p",null,"Then, when a user responds to a ",Object(i.b)(s.a,{type:"request",mdxType:"Tip"})," for a credential, that credential is encrypted with ",Object(i.b)("em",{parentName:"p"},"your")," public key.(The ",Object(i.b)("a",{parentName:"p",href:"/mobile-sdk"},"Mobile SDK")," does this locally on the user\u2019s device and sends the encrypted version to us.) We store nonsensitive metadata about the encrypted credential and route it to you, but we have no ability to decrypt the data. You then receive and decrypt the credential. See the diagram below."),Object(i.b)("p",null,Object(i.b)("img",{src:a(198).default}),"\n",Object(i.b)("em",{parentName:"p"},Object(i.b)("b",null,"Sharing:")," The Mobile SDK encrypts a credential with your public key before sending it to us. This ensures that only the user and you have access to the underlying plaintext data \u2014 Unum ID never does.")),Object(i.b)("div",{className:"admonition admonition-important alert alert--info"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"The encryption described above is \u200b",Object(i.b)("em",{parentName:"p"},"in addition to")," the standard encryption like TLS that applies to all data in transit and at rest. This encryption is done with a specific public key and ensures only the holder of the corresponding private key can decrypt the data."))),Object(i.b)("h2",{id:"features"},"Features"),Object(i.b)("p",null,"Unum ID solutions have best-in-class privacy and security features. Some of these are detailed below."),Object(i.b)("h3",{id:"multi-layer-encryption"},"Multi-Layer Encryption"),Object(i.b)("p",null,"Standard encryption like TLS applies to all data in transit and at rest, but there\u2019s an additional layer. When you send a ",Object(i.b)(s.a,{type:"credential",mdxType:"Tip"})," to a user, it\u2019s encrypted locally on your server such that only that user\u2019s device can decrypt it (using your app). When the user shares the credential, it\u2019s encrypted locally on their device (in your app) so that only the intended recipient can decrypt it. In other words, Unum ID coordinates sharing of verified identity data, but ",Object(i.b)("strong",{parentName:"p"},"\u200bwe ",Object(i.b)("em",{parentName:"strong"},"\u200bnever")," h\u200bave access to sensitive data in plaintext.")),Object(i.b)("h3",{id:"secure-mobile-hardware"},"Secure Mobile Hardware"),Object(i.b)("p",null,"A user\u2019s credentials are stored locally on their device, encrypted in your app. This is tied to the trusted execution environment (TEE) and secure hardware of the user\u2019s phone so that the credentials can only be accessed or shared by passing a biometric or passcode check."),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"The secure hardware in a mobile device has the amazing property that an app can ask it to create key pairs and use the private keys ",Object(i.b)("em",{parentName:"p"},"without ever directly accessing those private keys.")," The private keys never leave the device, and even the manufacturer has no ability to access them."),Object(i.b)("p",{parentName:"div"},"Unum ID uses this to enable end-to-end public key cryptography. But, crucially, we package it behind a simple user experience so that users never need to even know what a public key is."))),Object(i.b)("h3",{id:"privacy-and-consent"},"Privacy and Consent"),Object(i.b)("p",null,"Data is \u200b",Object(i.b)("em",{parentName:"p"},"only")," \u200bshared with full consent of the user. Unum ID goes far beyond what\u2019s needed for compliance with GDPR, CCPA, and other privacy regulations."),Object(i.b)("h3",{id:"local-cryptography"},"Local Cryptography"),Object(i.b)("p",null,"All cryptography (key generation, signing, encryption, etc.) is done locally, on your server or in your app on the user\u2019s device. We provide software that makes this easy to do, but all operations are done independently of Unum ID. This ensures \u200b",Object(i.b)("strong",{parentName:"p"},"your security is under your control.")),Object(i.b)("h3",{id:"no-shared-secrets"},"No Shared Secrets"),Object(i.b)("p",null,"We use zero shared secrets: no passwords, passcodes, PINs, or otherwise. Unum ID instead uses ",Object(i.b)("strong",{parentName:"p"},"\u200bpublic key cryptography")," tied to the secure hardware of users\u2019 phones. This completely eliminates common account takeover attacks like SIM swapping and behavioral fraud more generally. How? Because there\u2019s no secret to intercept. See our white paper ",Object(i.b)("a",{parentName:"p",href:"https://www.unum.id/resources#white-papers"},"\u200bHow Unum ID Stops Account Takeover\u200b")," for more."),Object(i.b)("h3",{id:"bi-directional-auth"},"Bi-Directional Auth"),Object(i.b)("p",null,"The security of our passwordless auth solution (",Object(i.b)("a",{parentName:"p",href:"https://www.unum.id/solutions/beyond-passwordless"},"\u200bBeyond Passwordless\u200b"),"\u2122) applies to \u200ball \u200binteractions in Unum ID. This authentication is bi-directional: y\u200bou authenticate the user, \u200band \u200bthe user authenticates you! This eliminates phishing attacks because the user is unable to share data with anyone other than your company, no matter how convincing the phishing material may be."))}l.isMDXComponent=!0}}]);