"use strict";(self.webpackChunkunum_id=self.webpackChunkunum_id||[]).push([[643,19],{1279:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>h,frontMatter:()=>d,metadata:()=>o,toc:()=>u});var a=n(7462),i=(n(7294),n(3905)),r=(n(7874),n(106)),s=n(4456);const d={id:"api-overview",title:"API",sidebar_label:"API",slug:"/api-overview"},l=void 0,o={unversionedId:"api-overview",id:"api-overview",title:"API",description:"Before you begin: You need to be registered as an Verified Inc. customer to create a brand API key. You can register zero to many brands, depending on your use case. For API keys to use for authentication please reach out to support@verified.inc. Our self service dashboard is coming soon!",source:"@site/docs/api-overview.mdx",sourceDirName:".",slug:"/api-overview",permalink:"/api-overview",draft:!1,tags:[],version:"current",frontMatter:{id:"api-overview",title:"API",sidebar_label:"API",slug:"/api-overview"},sidebar:"sidebar",previous:{title:"Issuance Guide",permalink:"/issuance-guide"},next:{title:"Data Schemas",permalink:"/schema"}},p={},u=[{value:"Overview",id:"overview",level:2},{value:"Authentication",id:"authentication",level:3},{value:"Environments",id:"environments",level:3},{value:"Development",id:"development",level:3},{value:"Functionality",id:"functionality",level:2},{value:"Check User Credentials",id:"check-user-credentials",level:3},{value:"Request Body",id:"request-body",level:4},{value:"Response Body:",id:"response-body",level:4},{value:"Get Shared Credentials",id:"get-shared-credentials",level:3},{value:"Response Body",id:"response-body-1",level:4},{value:"Issue Credentials",id:"issue-credentials",level:3},{value:"Request Body",id:"request-body-1",level:4},{value:"Response Body:",id:"response-body-2",level:4},{value:"Patch Credential",id:"patch-credential",level:3},{value:"Request Body",id:"request-body-2",level:4},{value:"Response Body:",id:"response-body-3",level:4},{value:"Patch All User Credentials",id:"patch-all-user-credentials",level:3},{value:"Request Body",id:"request-body-3",level:4},{value:"Response Body:",id:"response-body-4",level:4},{value:"Get Credential",id:"get-credential",level:3},{value:"Response Body:",id:"response-body-5",level:4},{value:"Get All User Credentials",id:"get-all-user-credentials",level:3},{value:"Response Body:",id:"response-body-6",level:4},{value:"Get Partner Credential Requests",id:"get-partner-credential-requests",level:3},{value:"Response Body:",id:"response-body-7",level:4}],c={toc:u};function h(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Before you begin:")," You need to be registered as an Verified Inc. customer to create a brand API key. You can register zero to many brands, depending on your use case. For API keys to use for authentication please reach out to ",(0,i.kt)("a",{parentName:"p",href:"mailto:support@verified.inc."},"support@verified.inc.")," ",(0,i.kt)("em",{parentName:"p"},"Our self service dashboard is coming soon!")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Postman documentation of this API can be found ",(0,i.kt)("a",{parentName:"p",href:"https://api.docs.verified.inc/"},"here"),".")),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"Integrating with Verified Inc. can be completed with minimal effort by following this documentation. That said, if you desire further assistance, please do not hesitate to reach out to ",(0,i.kt)("a",{parentName:"p",href:"mailto:support@verified.inc."},"support@verified.inc.")," Once complete, you will be able to boast ",(0,i.kt)("a",{parentName:"p",href:"https://www.verified.inc/1-click"},"1-click")," (or free) KYC onboarding and secure additional revenue streams for any user data shared with other network participants."),(0,i.kt)("h3",{id:"authentication"},"Authentication"),(0,i.kt)("p",null,"Every request detailed below requires an Verified Inc. ApiKey as an Authorization Bearer token header, which is used to authenticate requests to the Verified Inc. cloud."),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("strong",{parentName:"p"},"API keys are sensitive, so please only use them in a secure backend service environment.")," This means that ideally your clients will communicate with your own backend service, which will then call the Verified Inc. API. Your clients should never have direct access to your Verified Inc. API key.")),(0,i.kt)("h3",{id:"environments"},"Environments"),(0,i.kt)("p",null,"Upon the ApiKey creation you will receive one for each environment: Sandbox and Production. We encourage that all integration work be done against the Sandbox environment."),(0,i.kt)("p",null,"The base url for the Sandbox API is ",(0,i.kt)("inlineCode",{parentName:"p"},"https://core-api.sandbox-verifiedinc.com"),".",(0,i.kt)("br",null),"\nThe base url for the Production API is ",(0,i.kt)("inlineCode",{parentName:"p"},"https://core-api.verified.inc"),"."),(0,i.kt)("p",null,"The wallet url for the Sandbox environment is ",(0,i.kt)("inlineCode",{parentName:"p"},"https://wallet.sandbox-verifiedinc.com"),".",(0,i.kt)("br",null),"\nThe wallet url for the Production environment is ",(0,i.kt)("inlineCode",{parentName:"p"},"https://wallet.verified.inc"),"."),(0,i.kt)("h3",{id:"development"},"Development"),(0,i.kt)("p",null,"While developing your integration you can use a dummy user account if you would like."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:"test",test:!0},"email: richard@piedpiper.net\nphone: +10123456789\n")),(0,i.kt)("p",null,"By using these test identifiers you can authenticate to the wallet using a static OTP value of ",(0,i.kt)("inlineCode",{parentName:"p"},"111111"),", allowing you to test the full flow of the integration more easily. We recommend using a proper test email or phone to recieve actual OTP authentication messages during the final stages of development."),(0,i.kt)("h2",{id:"functionality"},"Functionality"),(0,i.kt)("p",null,"The Verified Inc. API lets your company partcipate in the Verified Inc. identity data network. You can use the API methods to check if ",(0,i.kt)(r.Z,{type:"user",mdxType:"Tip"},"users")," have credentials of interest, create ",(0,i.kt)(r.Z,{type:"request",mdxType:"Tip"},"requests")," for and retrieve user data in the form of ",(0,i.kt)(r.Z,{type:"credential",mdxType:"Tip"},"credentials"),", issue ",(0,i.kt)(r.Z,{type:"credential",mdxType:"Tip"},"credentials")," of user data, and update previously issued credential statuses (e.g. to invalidate a credential)"),(0,i.kt)("p",null,"Jump to:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#check-user-credentials"},"Check User Credentials")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#get-shared-credentials"},"Get Shared Credentials")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#issue-credentials"},"Issue Credentials"))),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"check-user-credentials"},"Check User Credentials"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Check if a user has matching ",(0,i.kt)(r.Z,{type:"credential",mdxType:"Tip"},"credentials"),". If so, a ",(0,i.kt)(r.Z,{type:"request",mdxType:"Tip"})," is created to get the ",(0,i.kt)(r.Z,{type:"user",mdxType:"Tip"},"user"),"'s consent to share the data.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Method"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"POST")," ",(0,i.kt)("br",null),"\n",(0,i.kt)("strong",{parentName:"p"},"Path"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"/hasMatchingCredentials")),(0,i.kt)("p",null,"You need to provide:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"User's email or phone"),(0,i.kt)("li",{parentName:"ol"},"(Optional) Credential request(s). ",(0,i.kt)("em",{parentName:"li"},"Required if Partner UUID is not provided.")),(0,i.kt)("li",{parentName:"ol"},"(Optional) Partner UUID. ",(0,i.kt)("em",{parentName:"li"},"More information on the partner UUID use case can be found in the ",(0,i.kt)("a",{parentName:"em",href:"/issuance-guide#already-issued-credentials"},"Issuance Guide"),"."))),(0,i.kt)("p",null,"A credential requests encodes which ",(0,i.kt)(r.Z,{type:"credential",mdxType:"Tip"},"credentials")," you're asking the user to share with your ",(0,i.kt)(r.Z,{type:"brand",mdxType:"Tip"}),". It's a list of one or more ",(0,i.kt)("a",{parentName:"p",href:"https://docs.verified.inc/types/interfaces/credentialrequest.html"},(0,i.kt)("inlineCode",{parentName:"a"},"CredentialRequest"))," objects."),(0,i.kt)(s.default,{mdxType:"CredentialRequestCodeSnippet"}),(0,i.kt)("p",null,"If you list multiple ",(0,i.kt)(r.Z,{type:"issuer",mdxType:"Tip"},"issuers"),", the user can include a credential issued by ",(0,i.kt)("em",{parentName:"p"},"any one")," of those listed. If ",(0,i.kt)("inlineCode",{parentName:"p"},"issuers")," is left empty the user can include a credential with matching type issued by ",(0,i.kt)("em",{parentName:"p"},"any")," issuer."),(0,i.kt)("admonition",{title:"Note 1",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"The Credential ",(0,i.kt)(r.Z,{type:"request",mdxType:"Tip"},"requests")," attribute is required if a Partner UUID is ",(0,i.kt)("strong",{parentName:"p"},"not")," provided. If Partner UUID is provided, the Credential requests attribute is not used. Instead, a pre-defined set of accepting partner's credentials requests are used.\n",(0,i.kt)("em",{parentName:"p"},"More information on the partner UUID use case can be found in the ",(0,i.kt)("a",{parentName:"em",href:"/issuance-guide#already-issued-credentials"},"Issuance Guide"),"."))),(0,i.kt)("admonition",{title:"Note 2",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"If ",(0,i.kt)("b",null,"mandatory")," or ",(0,i.kt)("b",null,"required")," fields are both missing, then the credential will be treated as optional.")),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"The same ApiKey necessary to call /hasMatchingCredentials grants you and only you access to the encrypted credential data documented in ",(0,i.kt)("a",{parentName:"p",href:"#get-shared-credentials"},"Get Shared Credentials"),". Please keep this key secure.")),(0,i.kt)("h4",{id:"request-body"},"Request Body"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"{\n  email?: string, // user's email address; optional if phone is provided\n  phone?: string, // user's phone number; optional if email is provided\n  credentialRequests: CredentialRequest[], // a list of one or more CredentialRequest objects. Encodes which credentials are being asked for; not used if partnerUuid is provided\n  partnerUuid?: string, // partner's uuid; optional\n  description?: string // A description displayed in the consent page header. If no description is provided, a default value will be displayed.\n}\n")),(0,i.kt)("h4",{id:"response-body"},"Response Body:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="HasMatchingCredentials"',title:'"HasMatchingCredentials"'},'{\n  "match": boolean, // indicates whether the user has matching credentials\n  "url": string // Verified Inc. Web Wallet url to redirect user to for credential request handling. It will redirect back to your client. Only present if match is true.\n}\n')),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"url")," from the response ought to then be enriched with a ",(0,i.kt)("inlineCode",{parentName:"p"},"redirectUrl")," query param that will take the next step in your target service's user onboarding webpage. ",(0,i.kt)("em",{parentName:"p"},"More information on this can be found in the ",(0,i.kt)("a",{parentName:"em",href:"/acceptance-guide"},"Acceptance Guide"),".")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"get-shared-credentials"},"Get Shared Credentials"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Get verified ",(0,i.kt)(r.Z,{type:"credential",mdxType:"Tip"})," data shared by a ",(0,i.kt)(r.Z,{type:"user",mdxType:"Tip"}),".")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Method"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"GET")," ",(0,i.kt)("br",null),"\n",(0,i.kt)("strong",{parentName:"p"},"Path"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"/sharedCredentials/{sharedCredentialsUuid}")),(0,i.kt)("p",null,"When a ",(0,i.kt)(r.Z,{type:"user",mdxType:"Tip"})," responds to a ",(0,i.kt)(r.Z,{type:"request",mdxType:"Tip"})," the verified data is sent and stored securely awaiting retrieval. Additionally, as mentioned above in ",(0,i.kt)("a",{parentName:"p",href:"#check-user-credentials"},"Check User Credentials"),", upon the user responding to the request, the user will be redirected back to your client with a ",(0,i.kt)("inlineCode",{parentName:"p"},"sharedCredentialsUuid")," as a query parameter."),(0,i.kt)("p",null,"This endpoint allows you to retrieve the shared ",(0,i.kt)(r.Z,{type:"credential",mdxType:"Tip"},"credentials")," data related to the ",(0,i.kt)(r.Z,{type:"request",mdxType:"Tip"})," created as a result of a successful match from the ",(0,i.kt)("inlineCode",{parentName:"p"},"/hasMatchingCredentials")," endpoint."),(0,i.kt)("p",null,"You need to provide:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"the ",(0,i.kt)("inlineCode",{parentName:"li"},"sharedCredentialsUuid")," that was returned in the query param after redirecting the user to the ",(0,i.kt)("inlineCode",{parentName:"li"},"redirectUrl")," attribute from the ",(0,i.kt)("inlineCode",{parentName:"li"},"/hasMatchingCredentials"),"response")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Your brand's access to shared credentials is deleted after 5 minutes of the initial credential data retrieval.")),(0,i.kt)("p",null,"The response body consists of Credential objects with the plaintext user data."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="Credential"',title:'"Credential"'},'{\n    "id": string, // credential id\n    "type": string, // credential type\n    "issuer": string, // credential issuer brandId\n    "issuanceDate": number, // when credential was created as a milliseconds since epoch unix timestamp\n    "expirationDate"?: number, // when credentials expires as a milliseconds since epoch unix timestamp\n    "data": Map<string, any> // credential data map that matches the credential type\'s JSON Schema definition\n}\n')),(0,i.kt)("h4",{id:"response-body-1"},"Response Body"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="SharedCredentials"',title:'"SharedCredentials"'},'{\n  "uuid": string, // the uuid from the query parameter of the redirect back to your client; identifies the collection of credentials shared by the user\n  "credentials": Credential[], // a list of one or more Credential objects\n  "email"?: string, // the user\'s email from the input to /hasMatchingCredentials; only present if email was provided\n  "phone"?: string // the user\'s phone from the input to /hasMatchingCredentials; only present if phone was provided\n}\n')),(0,i.kt)("p",null,"To facilitate extracting the credential data we recommend leveraging the Schema Resolver to get the ",(0,i.kt)("a",{parentName:"p",href:"/schema"},"schema")," of the credential types. Because Credential schemas are immutable they can then be cached and referenced when retrieving the credential data."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"issue-credentials"},"Issue Credentials"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Issue ",(0,i.kt)(r.Z,{type:"credential",mdxType:"Tip"}),"s to a ",(0,i.kt)(r.Z,{type:"user",mdxType:"Tip"}),".")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Method"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"POST")," ",(0,i.kt)("br",null),"\n",(0,i.kt)("strong",{parentName:"p"},"Path"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"/credentials")),(0,i.kt)("p",null,"You need to provide:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Credentials data array"),(0,i.kt)("li",{parentName:"ol"},"Either a phone and/or email attribute"),(0,i.kt)("li",{parentName:"ol"},"(Optional) Partner UUID. ",(0,i.kt)("em",{parentName:"li"},"More information on the partner UUID use case can be found in the ",(0,i.kt)("a",{parentName:"em",href:"/issuance-guide#partner-issuance"},"Issuance Guide"),"."))),(0,i.kt)("p",null,"Data about the user, must comply with our credential ",(0,i.kt)("a",{parentName:"p",href:"/schema"},"schema")," definitions."),(0,i.kt)("p",null,"An example Credentials object is below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="Credentials"',title:'"Credentials"'},'{\n  "type": string, // credential type\n  "data": Map<string, any>, // credential data map that matches the credential type\'s JSON Schema definition\n  "id"?: string, // credential id - uuid formatted; optional. If not provided, a random uuid will be generated\n  "expirationDate?": number // when the credential expires as a milliseconds since unix epoch; optional\n}\n')),(0,i.kt)("p",null,"While not required, we recommend providing a unique ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," following ",(0,i.kt)("inlineCode",{parentName:"p"},"uuid")," ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Universally_unique_identifier"},"format")," for each credential. This allows for idempotent credential issuance - meaning if a duplicate ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," value is seen another credential will not be created. Expect a HTTP status code of ",(0,i.kt)("inlineCode",{parentName:"p"},"409")," if this is the case. If you do not provide an ",(0,i.kt)("inlineCode",{parentName:"p"},"id"),", a random uuid will be generated for you."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"An expiration date is not the only control on whether a credential is valid. You can also change the credential's status at any time, for example to revoke it. See ",(0,i.kt)("a",{parentName:"p",href:"#patch-credentials"},"Patch Credentials"),".")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Credential data is stored securely via a data privacy vault that encrypts and tokenizes the data. The data is only retrieved and decrypted for the brand that the ",(0,i.kt)(r.Z,{type:"user",mdxType:"Tip"})," agrees to share with.")),(0,i.kt)("h4",{id:"request-body-1"},"Request Body"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},'{\n  "credentials": Credentials[], // a list of one or more Credentials objects\n  "email"?: string, // user\'s email address; optional if phone is provided\n  "phone"?: string // user\'s phone number; optional if email is provided\n}\n')),(0,i.kt)("h4",{id:"response-body-2"},"Response Body:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="CredentialsDto"',title:'"CredentialsDto"'},'{\n  "email": string, // user\'s email address if provided\n  "phone": phone, // user\'s phone number if provided\n  "credentials": [{\n    "id": string, // credential id\n    "type": string, // credential type\n    "data": Map<string, any> // credential data map that matches your provided data and the credential type\'s JSON Schema definition\n    "issuanceDate": string, // when credential was created as a milliseconds since epoch unix timestamp\n    "expirationDate?": string, // when the credential expires as a milliseconds since unix epoch; optional\n    "status": \'valid\' | \'revoked\' // an enum to denote whether the credential is valid (all credentials are valid when first issued) \u2014 note that this is independent of the expirationDate\n  }],\n  "url"?: string // Only present if partnerUuid was provided and conditions are met. See the Issuance Guide for more information.\n}\n')),(0,i.kt)("p",null,"The issued credential contains an ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," that you should store. You'll need this, for example, if you ever want to revoke the credential. ",(0,i.kt)("strong",{parentName:"p"},"We recommend storing the entire credential, indexed on the credential ",(0,i.kt)("inlineCode",{parentName:"strong"},"id"),".")," However, it is also an acceptable to store credential ",(0,i.kt)("inlineCode",{parentName:"p"},"id"),"s associated with a user and use the ",(0,i.kt)("a",{parentName:"p",href:"/api-overview#get-credential"},"Get Credential")," or ",(0,i.kt)("a",{parentName:"p",href:"/api-overview#get-all-user-credentials"},"Get All User Credentials")," endpoint to retrieve the full credential."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"patch-credential"},"Patch Credential"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Patch a previously issued ",(0,i.kt)(r.Z,{type:"credential",mdxType:"Tip"}),".")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Method"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"PATCH")," ",(0,i.kt)("br",null),"\n",(0,i.kt)("strong",{parentName:"p"},"Path"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"/credentials/{id}")),(0,i.kt)("p",null,"You can optionally provide any of the following in the request body:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"(Optional) new credential data"),(0,i.kt)("li",{parentName:"ol"},"(Optional) new credential expiration date"),(0,i.kt)("li",{parentName:"ol"},"(Optional) new credential status")),(0,i.kt)("p",null,"Credential data must comply with our credential ",(0,i.kt)("a",{parentName:"p",href:"/schema"},"schema")," definitions."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"If a credential is expired but the status is 'valid' it is an unusable credential. Likewise, if the credential as not expired but the status is 'revoked', it is also not usable credential.")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Credential data is stored securely via a data privacy vault that encrypts and tokenizes the data. The data is only retrieved and decrypted for the brand that the ",(0,i.kt)(r.Z,{type:"user",mdxType:"Tip"})," agrees to share with.")),(0,i.kt)("h4",{id:"request-body-2"},"Request Body"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},'{\n  "data": Map<string, any> // credential data map that matches the credential type\'s JSON schema definition\n  "expirationDate?": number // when the credentials expires as a milliseconds since epoch unix timestamp; optional\n  "status": \'valid\' | \'revoked\' // an enum to denote whether the credential is valid (all credentials are valid when first issued) \u2014 note that this is independent of the expirationDate\n}\n')),(0,i.kt)("h4",{id:"response-body-3"},"Response Body:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="CredentialDto"',title:'"CredentialDto"'},'{\n  "id": string, // credential id\n  "type": string, // credential type\n  "data": Map<string, any> // credential data map that matches your provided data and the credential type\'s JSON Schema definition\n  "issuanceDate": string, // when credential was created as a milliseconds since epoch unix timestamp\n  "expirationDate?": number, // when the credential expires as a milliseconds since epoch unix timestamp; optional\n  "status": \'valid\' | \'revoked\' // an enum to denote whether the credential is valid (all credentials are valid when first issued) \u2014 note that this is independent of the expirationDate.\n}\n')),(0,i.kt)("p",null,"The resultant credential ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," remains the same, so after a 200 HTTP response code is received, nothing further needs to be updated on your end."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"patch-all-user-credentials"},"Patch All User Credentials"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Patch all previously issued ",(0,i.kt)(r.Z,{type:"credentials",mdxType:"Tip"})," by your brand to a user.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Method"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"PATCH")," ",(0,i.kt)("br",null),"\n",(0,i.kt)("strong",{parentName:"p"},"Path"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"/userCredentials/{userIdentifier}")),(0,i.kt)("p",null,"A ",(0,i.kt)(r.Z,{type:"userIdentifier",mdxType:"Tip"})," is either a phone number or email address associated with a user."),(0,i.kt)("p",null,"The only credential value that can by updated in this manner is ",(0,i.kt)("inlineCode",{parentName:"p"},"status"),". A credential status must be in the request body."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"This endpoint all modifies credentials issued to the user by your brand.")),(0,i.kt)("h4",{id:"request-body-3"},"Request Body"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"{\n  \"status\": 'valid' | 'revoked' // an enum to denote whether the credential is valid (all credentials are valid when first issued) \u2014 note that this is independent of the expirationDate\n}\n")),(0,i.kt)("h4",{id:"response-body-4"},"Response Body:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="UserCredentialsDto"',title:'"UserCredentialsDto"'},'{\n  "credentials": {\n    "id": string, // credential id\n    "type": string, // credential type\n    "data": Map<string, any> // credential data map that matches your provided data and the credential type\'s JSON Schema definition\n    "issuanceDate": string, // when credential was created as a milliseconds since epoch unix timestamp\n    "expirationDate?": number, // when the credential expires as a milliseconds since epoch unix timestamp; optional\n    "status": \'valid\' | \'revoked\' // an enum to denote whether the credential is valid (all credentials are valid when first issued) \u2014 note that this is independent of the expirationDate.\n  }[]\n}\n')),(0,i.kt)("p",null,"The response body contains a list of all credentials that were modified on the ",(0,i.kt)("inlineCode",{parentName:"p"},"credentials")," key."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"get-credential"},"Get Credential"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Get a previously issued ",(0,i.kt)(r.Z,{type:"credential",mdxType:"Tip"}),".")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Method"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"GET")," ",(0,i.kt)("br",null),"\n",(0,i.kt)("strong",{parentName:"p"},"Path"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"/credentials/{id}")),(0,i.kt)("p",null,"This endpoint returns a credential (issued by your brand) via the credential ",(0,i.kt)("inlineCode",{parentName:"p"},"id"),"."),(0,i.kt)("h4",{id:"response-body-5"},"Response Body:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="CredentialDto"',title:'"CredentialDto"'},'{\n  "id": string, // credential id\n  "type": string, // credential type\n  "data": Map<string, any> // credential data map that matches your provided data and the credential type\'s JSON Schema definition\n  "issuanceDate": string, // when credential was created as a milliseconds since epoch unix timestamp\n  "expirationDate?": number, // when the credential expires as a milliseconds since epoch unix timestamp; optional\n  "status": \'valid\' | \'revoked\' // an enum to denote whether the credential is valid (all credentials are valid when first issued) \u2014 note that this is independent of the expirationDate.\n}\n')),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"get-all-user-credentials"},"Get All User Credentials"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Get all previously issued ",(0,i.kt)(r.Z,{type:"credentials",mdxType:"Tip"})," by your brand to a user.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Method"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"GET")," ",(0,i.kt)("br",null),"\n",(0,i.kt)("strong",{parentName:"p"},"Path"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"/userCredentials/{userIdentifier}")),(0,i.kt)("p",null,"A ",(0,i.kt)(r.Z,{type:"userIdentifier",mdxType:"Tip"})," is either a phone number or email address associated with a user."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"This endpoint all modifies credentials issued to the user by your brand.")),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"It should be clear that this endpoint should not be used in place of ",(0,i.kt)("a",{parentName:"p",href:"/api-overview/#check-user-credentials"},(0,i.kt)("inlineCode",{parentName:"a"},"/hasMatchingCredentials")),", which can check user credentials across many issuers but does not return the credentials' values."),(0,i.kt)("p",{parentName:"admonition"},"This endpoint is simply a nice to have for an issuer to see all credentials they have issued to a user.")),(0,i.kt)("h4",{id:"response-body-6"},"Response Body:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="UserCredentialsDto"',title:'"UserCredentialsDto"'},'{\n  "credentials": {\n    "id": string, // credential id\n    "type": string, // credential type\n    "data": Map<string, any> // credential data map that matches your provided data and the credential type\'s JSON Schema definition\n    "issuanceDate": string, // when credential was created as a milliseconds since epoch unix timestamp\n    "expirationDate?": number, // when the credential expires as a milliseconds since epoch unix timestamp; optional\n    "status": \'valid\' | \'revoked\' // an enum to denote whether the credential is valid (all credentials are valid when first issued) \u2014 note that this is independent of the expirationDate.\n  }[]\n}\n')),(0,i.kt)("p",null,"The response body contains a list of all credentials on the ",(0,i.kt)("inlineCode",{parentName:"p"},"credentials")," key."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"get-partner-credential-requests"},"Get Partner Credential Requests"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Get the partner's pre-defined ",(0,i.kt)(r.Z,{type:"request",mdxType:"Tip"},"credential requests"),".")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Method"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"GET")," ",(0,i.kt)("br",null),"\n",(0,i.kt)("strong",{parentName:"p"},"Path"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"/credentialRequests/{partnerUuid}")),(0,i.kt)("p",null,"This endpoint returns a list of credential requests that the partner has defined for their brand."),(0,i.kt)("h4",{id:"response-body-7"},"Response Body:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="CredentialRequestsResponse"',title:'"CredentialRequestsResponse"'},'{\n  "credentialRequests": CredentialRequest[]\n}\n')),(0,i.kt)(s.default,{mdxType:"CredentialRequestCodeSnippet"}),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"This endpoint is helpful when developing the partner issuance flow. More information about partner issuance can be found in the ",(0,i.kt)("a",{parentName:"p",href:"/issuance-guide#partner-issuance"},"Issuance Guide"),".")),(0,i.kt)("hr",null))}h.isMDXComponent=!0},4456:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>d,toc:()=>o});var a=n(7462),i=(n(7294),n(3905));const r={},s=void 0,d={unversionedId:"reusables/credential-request-code-snippet",id:"reusables/credential-request-code-snippet",title:"credential-request-code-snippet",description:"",source:"@site/docs/reusables/credential-request-code-snippet.mdx",sourceDirName:"reusables",slug:"/reusables/credential-request-code-snippet",permalink:"/reusables/credential-request-code-snippet",draft:!1,tags:[],version:"current",frontMatter:{}},l={},o=[],p={toc:o};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="CredentialRequest"',title:'"CredentialRequest"'},"{\n  type: string, // the type of credential data being requested\n  issuers: string[], // list of acceptable brandIds; if empty, all issuer brands are valid\n  required?: boolean, // @deprecated - Use mandatory field instead. If the credential is required\n  mandatory?: 'yes' | 'no' | 'if_available' // if the credential is required, not required, or required if available.\n  description?: string // a description field that is shown to the user; can be used to explain why the information is being requested\n}\n")))}u.isMDXComponent=!0}}]);