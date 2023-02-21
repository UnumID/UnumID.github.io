"use strict";(self.webpackChunkunum_id=self.webpackChunkunum_id||[]).push([[23],{5785:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>s,metadata:()=>d,toc:()=>u});var n=i(7462),a=(i(7294),i(3905)),r=(i(7874),i(106));const s={id:"verifier-service",title:"Verifier Service",sidebar_label:"Verifier Service",slug:"/verifier-service"},o=void 0,d={unversionedId:"verifier-service",id:"verifier-service",title:"Verifier Service",description:"The Verifier Service is a custodial and managed interface to facilitate handling Verifier operations.",source:"@site/docs/verifier-service.mdx",sourceDirName:".",slug:"/verifier-service",permalink:"/verifier-service",draft:!1,tags:[],version:"current",frontMatter:{id:"verifier-service",title:"Verifier Service",sidebar_label:"Verifier Service",slug:"/verifier-service"}},l={},u=[{value:"Overview",id:"overview",level:2},{value:"Setup",id:"setup",level:3},{value:"Authentication",id:"authentication",level:3},{value:"Functionality",id:"functionality",level:2},{value:"Create a Request",id:"create-a-request",level:3},{value:"Request Body",id:"request-body",level:4},{value:"Response Body: <code>PresentationRequestPostDto</code>",id:"response-body-presentationrequestpostdto",level:4},{value:"Get Shared Credentials",id:"get-shared-credentials",level:3},{value:"Request Body",id:"request-body-1",level:4},{value:"Response Body: <code>DecryptedPresentation</code>",id:"response-body-decryptedpresentation",level:4}],p={toc:u};function c(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The Verifier Service is a custodial and managed interface to facilitate handling ",(0,a.kt)(r.Z,{type:"verifier",mdxType:"Tip"},"Verifier")," operations."),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"This is a custodial service that is implemented with a security first architecture to manage your keys and leverages the Server SDK to handle all cryptographic operations on your behalf. The result is a greatly simplified process of being a Verifier and getting instantaneous access to data shared by ",(0,a.kt)(r.Z,{type:"subject",mdxType:"Tip"},"subjects"),"."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"If you would like to setup your Verifier integration in a non-custodial manner, please see the ",(0,a.kt)("a",{parentName:"p",href:"/server-sdk"},"Server SDK")," documentation.")),(0,a.kt)("h3",{id:"setup"},"Setup"),(0,a.kt)("p",null,"In order to use the Verifier Service you will need to create a Verifier in our self service ",(0,a.kt)("a",{parentName:"p",href:"https://dashboard.unumid.co/"},"dashboard"),". ",(0,a.kt)("em",{parentName:"p"},"Please reference the ",(0,a.kt)("a",{parentName:"em",href:"/quick-start-guide#dashboard"},"Quick Start")," guide for how to use the dashboard.")),(0,a.kt)("h3",{id:"authentication"},"Authentication"),(0,a.kt)("p",null,"All requests require an Authorization header token that contains your Verifier's ",(0,a.kt)("inlineCode",{parentName:"p"},"apiKey"),". "),(0,a.kt)("h2",{id:"functionality"},"Functionality"),(0,a.kt)("p",null,"Information of the API methods to create  ",(0,a.kt)(r.Z,{type:"request",mdxType:"Tip"},"requests")," and verify ",(0,a.kt)(r.Z,{type:"presentation",mdxType:"Tip"},"presentations"),"."),(0,a.kt)("p",null,"Jump to:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#create-a-request"},"Create a Request")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#get-shared-credentials"},"Get Shared Credentials"))),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"create-a-request"},"Create a Request"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Create a ",(0,a.kt)(r.Z,{type:"request",mdxType:"Tip"})," to be displayed or sent to a ",(0,a.kt)(r.Z,{type:"subject",mdxType:"Tip"}),".")),(0,a.kt)("p",null,"You need to provide:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"credential request(s)")),(0,a.kt)("p",null,"A (credential requests) encodes which ",(0,a.kt)(r.Z,{type:"credential",mdxType:"Tip"},"credentials")," you're asking the user to include in a presentation. It's a list of one or more ",(0,a.kt)("a",{parentName:"p",href:"https://docs.unumid.co/types/interfaces/credentialrequest.html"},(0,a.kt)("inlineCode",{parentName:"a"},"CredentialRequest"))," objects (defined in the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/UnumID/types/blob/00ba819e661e2856ba9909923ac6f083b9a15e85/index.d.ts#L113-L117"},"Unum ID generic types project"),"):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="CredentialRequest"',title:'"CredentialRequest"'},"{\n  type: string; // credential type. This must match type of previously issued credential.\n  issuers: string[]; // list of DIDs for acceptable issuers. If multiple, any one is acceptable.\n  required?: boolean; // if credential is required (default is true)\n}\n")),(0,a.kt)("p",null,"If you list multiple ",(0,a.kt)(r.Z,{type:"issuer",mdxType:"Tip"},"issuers"),", the user can include a credential issued by ",(0,a.kt)("em",{parentName:"p"},"any one")," of those listed."),(0,a.kt)("p",null,"You can optionally provide:"),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"expiration date as a Unix timestamp in seconds since the epoch."),(0,a.kt)("li",{parentName:"ol"},"metadata")),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Your Verifier ApiKey provided via the Authorization request header grants you and only you access to the encrypted data. Please keep this key secure.")),(0,a.kt)("p",null,"The response body consists of enriched information regarding entities referenced in the request. For example, the verifier's encryption and signing ",(0,a.kt)("a",{parentName:"p",href:"https://docs.unumid.co/types/interfaces/publickeyinfo.html"},"PublicKeyInfo")," is included to facilitate verifying the presentation request's signature and submitting and encrypted presentation in response."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="PublicKeyInfo"',title:'"PublicKeyInfo"'},'{\n    "id": string, // key id\n    "type": "secp256r1" || "RSA, // key type\n    "status": "valid" || "invalid", // key status\n    "encoding": "pem" || "base58", // key encoding\n    "publicKey": string, // public key value\n    "createdAt": Date, // when key was created \n    "updatedAt": Date, // when key status was last updated\n}\n')),(0,a.kt)("h4",{id:"request-body"},"Request Body"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'"credentialRequests": CredentialRequest[], // a list of one or more CredentialRequest objects. Encodes which credentials should be included in presentation that responds to PresentationRequest.\n"expiresAt"?: number, // (optional) when PresentationRequest will no longer be valid (Unix timestamp). Default is 10 minutes after creation.\n"metadata"?: object // (optional) any additional data to include in PresentationRequest\n')),(0,a.kt)("h4",{id:"response-body-presentationrequestpostdto"},"Response Body: ",(0,a.kt)("a",{parentName:"h4",href:"https://docs.unumid.co/types/interfaces/presentationrequestpostdto.html"},(0,a.kt)("inlineCode",{parentName:"a"},"PresentationRequestPostDto"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="PresentationRequestPostDto"',title:'"PresentationRequestPostDto"'},'{\n  "presentationRequest": {\n    "uuid": string, // identifies PresentationRequest in Unum ID database\n    "createdAt": string, // when PresentationRequest was created (ISO 8601 date/time)\n    "updatedAt": string, // when PresentationRequest was last updated (ISO 8601 date/time). Should always be same as createdAt.\n    "expiresAt": string, // when PresentationRequest will no longer be valid (ISO 8601 date/time)\n    "verifier": string, // your verifier DID\n    "credentialRequests": CredentialRequest[], // a list of one or more CredentialRequest objects. Encodes which credentials should be included in presentation that responds to PresentationRequest.\n    "proof": Proof, // acryptographic proof created by signing PresentationRequest with your verifier signing private key. Can be used to verify PresentationRequest.\n    "metadata": object // any additional data to include in PresentationRequest\n  },\n  "verifier": {\n      "name": string, // human readable name for verifier. Displayed to users in mobile apps.\n      "did": string, // your verifier DID\n      "encryptionPublicKey": PublicKeyInfo, // PublicKeyInfo for the RSA key\n      "signingPublicKey": PublicKeyInfo // PublicKeyInfo for the secp256r1 key\n  },\n  "issuers": {\n      "IssuerDid:string": { // map keyed on issuer DID(s) that issued requested credential(s)\n        "name": string, // human readable name for issuer\n        "did": string, // issuer DID\n        "cardImageUrl": string // issuer\'s card image URL\n      }\n  },\n  /* You send this to a user with the Web SDK: */\n  // highlight-next-line\n  "deeplink": string, // deep link (URL) that can be used to trigger intended mobile app to load PresentationRequest\n  /* You display this to a user with the Web SDK */\n  // highlight-next-line\n  "qrCode": string // QR code representation of deep link (encoded as data URL)\n}\n')),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"get-shared-credentials"},"Get Shared Credentials"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Get verified ",(0,a.kt)(r.Z,{type:"presentation",mdxType:"Tip"})," data shared by ",(0,a.kt)(r.Z,{type:"subject",mdxType:"Tip"}),".")),(0,a.kt)("p",null,"When subjects respond to presentations requests the encrypted data is sent, verified and stored in the Verifier Service. This interface gives you access to the decrypted data the user shared."),(0,a.kt)("p",null,"You need to provide:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"the presentation's ",(0,a.kt)("inlineCode",{parentName:"li"},"uuid")," that was returned to your client via your callback handler.")),(0,a.kt)("admonition",{type:"important"},(0,a.kt)("p",{parentName:"admonition"},"Unum ID only ever stores encrypted presentation data and is deleted after 5 minutes of the corresponding Verifier doing the initial data retrieval.")),(0,a.kt)("h4",{id:"request-body-1"},"Request Body"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'"uuid": string, // uuid of the encrypted presentation data to retrieve\n')),(0,a.kt)("h4",{id:"response-body-decryptedpresentation"},"Response Body: ",(0,a.kt)("a",{parentName:"h4",href:"https://docs.unumid.co/server-sdk-typescript/interfaces/decryptedpresentation.html"},(0,a.kt)("inlineCode",{parentName:"a"},"DecryptedPresentation"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="DecryptedPresentation"',title:'"DecryptedPresentation"'},'{\n  "isVerified": boolean; // whether the presentation is valid\n  "type": \'VerifiablePresentation\' | \'DeclinedPresentation\' // type of presentation. DeclinedPresentation means user declined request and the submitted presentation\'s VerifiableCredential attribute was undefined or an empty array.\n  "presentation": Presentation, // decrypted Presentation object\n  "message"?: string; // (optional) included if isVerified is false. Explains why verification failed.\n}\n')),(0,a.kt)("p",null,"You can decide what to do with the result of the verification. We recommend using the Server SDK's ",(0,a.kt)("inlineCode",{parentName:"p"},"extractCredentialData")," to facilitate getting the data from the presentation."),(0,a.kt)("hr",null))}c.isMDXComponent=!0}}]);