"use strict";(self.webpackChunkverified_inc_docs=self.webpackChunkverified_inc_docs||[]).push([[8455],{45053:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>c,metadata:()=>t,toc:()=>h});const t=JSON.parse('{"id":"click-signup/quick-start-guide","title":"Quick Start Guide","description":"Quickly try 1-Click Signup at a technical level","source":"@site/versioned_docs/version-2/1-click-signup/quick-start-guide.mdx","sourceDirName":"1-click-signup","slug":"/quick-start-guide","permalink":"/quick-start-guide","draft":false,"unlisted":false,"tags":[],"version":"2","sidebarPosition":2,"frontMatter":{"id":"quick-start-guide","title":"Quick Start Guide","sidebar_position":2,"sidebar_label":"Quick Start Guide","description":"Quickly try 1-Click Signup at a technical level","slug":"/quick-start-guide","toc_max_heading_level":3},"sidebar":"sidebar","previous":{"title":"1-Click Signup","permalink":"/"},"next":{"title":"Integration Guide","permalink":"/integration-guide"}}');var r=i(74848),s=i(28453),a=(i(58035),i(5243),i(11470),i(19365),i(27293),i(84864)),o=(i(62369),i(50099)),d=(i(88567),i(38308));const c={id:"quick-start-guide",title:"Quick Start Guide",sidebar_position:2,sidebar_label:"Quick Start Guide",description:"Quickly try 1-Click Signup at a technical level",slug:"/quick-start-guide",toc_max_heading_level:3},l=void 0,u={},h=[{value:"Setup",id:"setup",level:2},{value:"1. Access Dashboard.",id:"1-access-dashboard",level:3},...a.toc,{value:"1-Click Signup",id:"1-click-signup",level:2},{value:"2. Call <code>POST /1-click</code>.",id:"2-call-post-1-click",level:3},...o.toc,{value:"3. Complete user experience.",id:"3-complete-user-experience",level:3},{value:"a. Navigate to <code>url</code>.",id:"a-navigate-to-url",level:4},{value:"b. Enter <code>code</code>.",id:"b-enter-code",level:4},{value:"c. Click the 1-Click Signup button.",id:"c-click-the-1-click-signup-button",level:4},{value:"4. Call <code>GET /1-click</code>.",id:"4-call-get-1-click",level:3}];function p(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",strong:"strong",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"This Quick Start Guide is the fastest way to try 1-Click Signup at a technical level."}),"\n",(0,r.jsxs)("table",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Time to Complete"}),(0,r.jsx)("td",{children:"5 minutes"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Skills Required"}),(0,r.jsx)("td",{children:"Ability to make API calls"})]})]}),"\n",(0,r.jsx)(n.h2,{id:"setup",children:"Setup"}),"\n",(0,r.jsxs)(d.CF,{children:[(0,r.jsxs)(d.MU,{children:[(0,r.jsx)(d.Ct,{children:(0,r.jsxs)(n.h3,{id:"1-access-dashboard",children:["1. Access ",(0,r.jsx)(n.a,{href:"https://dashboard.verified.inc",children:"Dashboard"}),"."]})}),(0,r.jsx)(a.default,{}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"For this Quick Start Guide, just leave the default brand settings in place."})," Notice that the default setting for ",(0,r.jsx)(n.strong,{children:"integration type"})," is Hosted. This means you'll use a user interface and phone verification that Verified hosts. This is the quickest way to get started."]}),(0,r.jsxs)(n.p,{children:["For full technical details on how to integrate 1-Click Signup, see ",(0,r.jsx)(n.a,{href:"./integration-guide",children:"Integration Guide"}),". For more information on integration types, see ",(0,r.jsx)(n.a,{href:"./integration-guide#2-determine-integration-type",children:"Determine integration type"}),"."]})]}),(0,r.jsx)(n.h2,{id:"1-click-signup",children:"1-Click Signup"}),(0,r.jsxs)(d.MU,{children:[(0,r.jsx)(d.Ct,{children:(0,r.jsxs)(n.h3,{id:"2-call-post-1-click",children:["2. Call ",(0,r.jsx)(n.code,{children:"POST /1-click"}),"."]})}),(0,r.jsxs)(n.p,{children:["Call ",(0,r.jsx)(n.a,{href:"./endpoints?integrationType=hosted#post-1-click",children:(0,r.jsx)(n.code,{children:"POST /1-click"})})," with your own phone number (or one of our ",(0,r.jsx)(n.a,{href:"./environments#test-user",children:"test user"}),"'s phone numbers). Use the Sandbox API key for the brand you just created in the ",(0,r.jsx)(n.a,{href:"https://dashboard.verified.inc",children:"Dashboard"}),"."]}),(0,r.jsx)(o.default,{}),(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.a,{href:"./endpoints?integrationType=hosted#post-1-click-response",children:"response body"})," will contain ",(0,r.jsx)(n.code,{children:"url"})," and ",(0,r.jsx)(n.code,{children:"code"}),", which you'll use in the following steps."]}),(0,r.jsxs)(n.p,{children:["In a full integration, you'd send an SMS containing ",(0,r.jsx)(n.code,{children:"code"})," to the user to verify the phone number. But for this Quick Start Guide, we'll skip the SMS step. Just pretend you sent the SMS."]})]}),(0,r.jsxs)(d.MU,{children:[(0,r.jsx)(d.Ct,{children:(0,r.jsx)(n.h3,{id:"3-complete-user-experience",children:"3. Complete user experience."})}),(0,r.jsxs)(n.p,{children:["Because for this Quick Start Guide we're using a Hosted integration type, the 1-Click Signup user interface will be hosted by Verified (at ",(0,r.jsx)(n.code,{children:"url"}),")."]}),(0,r.jsxs)(n.h4,{id:"a-navigate-to-url",children:["a. Navigate to ",(0,r.jsx)(n.code,{children:"url"}),"."]}),(0,r.jsxs)(n.p,{children:["Open ",(0,r.jsx)(n.code,{children:"url"})," in any web browser, on any device. This will take you to our hosted user interface."]}),(0,r.jsxs)(n.h4,{id:"b-enter-code",children:["b. Enter ",(0,r.jsx)(n.code,{children:"code"}),"."]}),(0,r.jsxs)(n.p,{children:["When we prompt you for a verification code, enter ",(0,r.jsx)(n.code,{children:"code"}),"."]}),(0,r.jsx)(n.h4,{id:"c-click-the-1-click-signup-button",children:"c. Click the 1-Click Signup button."}),(0,r.jsx)(n.p,{children:"We'll display your (mock) verified data and ask you to confirm you want to share it with the brand. Do so by clicking the 1-Click Signup button."}),(0,r.jsxs)(n.p,{children:["Then, we'll redirect you to the default redirect URL defined in your brand settings in the ",(0,r.jsx)(n.a,{href:"https://dashboard.verified.inc",children:"Dashboard"}),". (Unless you changed what we autofilled, this will be the same as your email domain.) We'll append an ",(0,r.jsx)(n.code,{children:"identityUuid"})," URL parameter, which you'll use in the next step."]})]}),(0,r.jsxs)(d.MU,{children:[(0,r.jsx)(d.Ct,{children:(0,r.jsxs)(n.h3,{id:"4-call-get-1-click",children:["4. Call ",(0,r.jsx)(n.code,{children:"GET /1-click"}),"."]})}),(0,r.jsxs)(n.p,{children:["Call ",(0,r.jsx)(n.a,{href:"./endpoints?integrationType=hosted#get-1-click",children:(0,r.jsx)(n.code,{children:"GET /1-click/{identityUuid}"})})," with the value of the ",(0,r.jsx)(n.code,{children:"identityUuid"})," URL paramter on the redirect URL we navigate you to."]}),(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:["If you can't find the ",(0,r.jsx)(n.code,{children:"identityUuid"})," parameter (for example if your website automatically strips URL parameters), you can instead use ",(0,r.jsx)(n.code,{children:"uuid"})," from the response body of ",(0,r.jsx)(n.code,{children:"POST /1-click"}),", which has the same value."]})}),(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.a,{href:"./endpoints?integrationType=hosted#get-1-click-response",children:"response body"})," will be a ",(0,r.jsx)(n.a,{href:"./types#1clickentity",children:(0,r.jsx)(n.code,{children:"1ClickEntity"})})," (see this ",(0,r.jsx)(n.a,{href:"./types#example-1clickentity",children:"example"}),"), which contains the user's data and metadata about it. You can use this data however you like to create a new account for the user!"]})]})]})]})}function m(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},88567:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"reusables/click-entity-example","title":"click-entity-example","description":"","source":"@site/versioned_docs/version-2/reusables/1-click-entity-example.mdx","sourceDirName":"reusables","slug":"/reusables/click-entity-example","permalink":"/reusables/click-entity-example","draft":false,"unlisted":false,"tags":[],"version":"2","sidebarPosition":1,"frontMatter":{},"sidebar":"sidebar","previous":{"title":"Data","permalink":"/data"},"next":{"title":"api-keys-admonition","permalink":"/reusables/api-keys-admonition"}}');var r=i(74848),s=i(28453);const a={},o=void 0,d={},c=[];function l(e){const n={code:"code",pre:"pre",...(0,s.R)(),...e.components};return(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",metastring:'title="1ClickEntity Example"',children:'{\n    "identifiers": {\n        "phone": "+10123456789"\n    },\n    "credentials": {\n        // Multiple emails because `multi` was set to `true` in the email credential request\n        "email": [\n            "richard@piedpiper.net",\n            "richard@hooli.com"\n        ],\n        "fullName": {\n            "firstName": "Richard",\n            "lastName": "Hendricks"\n        },\n        // Multiple addresses because `multi` was set to `true` in the address credential request\n        "address": [\n            {\n                "line1": "5320 Newell Rd",\n                "city": "Palo Alto",\n                "state": "CA",\n                "zipCode": "94303",\n                "country": "US"\n            },\n            {\n                "line1": "9536 Meadow Dr",\n                "line2": "Apt 301",\n                "city": "San Francisco",\n                "state": "CA",\n                "zipCode": "94112",\n                "country": "US"\n            },\n            {\n                "line1": "7292 Hanover St",\n                "city": "San Jose",\n                "state": "CA",\n                "zipCode": "95122",\n                "country": "US"\n            }\n        ],\n        "birthDate": "1989-08-01",\n        "ssn": "123456789"\n    },\n    "metadata": {\n        "identifiers": {\n            "verificationMethod": {\n                "phone": "otp"\n            }\n        },\n        // Follows the same structure as `credentials` and maintains the same order for array items when `multi` is set to `true`\n        "credentials": {\n            "id": {\n                // e.g. Follows the same structure as the email credential and maintains the same order for array items\n                "email": [\n                    "8a1d4e35-413d-496b-b499-8810b55cfb5c",\n                    "b82e39cf-3bb6-4105-b9c1-bfd1ed2a4dbc"\n                ]\n                "fullName": {\n                    "firstName": "2e6a7b9a-e93e-43ba-98a9-c554f4e16457",\n                    "lastName": "9a5817ef-e621-4277-8c48-c8ee3776b6c4"\n                },\n                // e.g. Follows the same structure as the address credential and maintains the same order for array items\n                "address": [\n                    {\n                        "line1": "f5a4dc93-bc06-4bb8-bd05-17b5ba912bcd",\n                        "city": "efd3820f-676a-4db1-b63e-695b66ed8ba0",\n                        "state": "b65022a2-2016-41df-88f3-252e8e3a29c5",\n                        "zipCode": "b747ff84-39d8-4df9-98f9-24a465f1a9ae",\n                        "country": "d57a7bca-2a7c-4671-86ad-5647731cad02"\n                    },\n                    {\n                        "line1": "6c7350bd-ea84-485b-baa8-fba3381cc859",\n                        "line2": "5311e2c8-67a1-4fe4-8ddb-88dc8a900915",\n                        "city": "c315d4ed-34c6-41a9-b7ca-c17cb4bac927",\n                        "state": "e3774b5f-0996-4dc7-a9b3-8ad24c9a286c",\n                        "zipCode": "abc2e42c-2864-4bf6-b262-05cb51416957",\n                        "country": "fca7d486-c99b-436e-9a92-95e221e4ba5d"\n                    },\n                    {\n                        "line1": "afdaca85-4abe-4c0d-910d-7f48261bcbe0",\n                        "city": "cf17d0d8-08f3-4205-82a9-812a0be747da",\n                        "state": "b1480256-bd81-4ed5-a748-62890304a2e3",\n                        "zipCode": "62d14d62-bd4e-4175-8a0d-01f21a22d833",\n                        "country": "baff8fea-34cd-451c-9324-ca0cf1582dd7"\n                    }\n                ],\n                "birthDate": "ec1ef0ce-eeed-46a4-94a9-29b46e64403d",\n                "ssn": "ec1ef0ce-eeed-46a4-94a9-29b46e64403d"\n            },\n            "verificationMethod": {\n                "email": [\n                    "self_attested",\n                    "credit_bureau"\n                ]\n                "fullName": {\n                    "firstName": "phone_carrier",\n                    "lastName": "phone_carrier"\n                },\n                "address": [\n                    {\n                        "line1": "credit_bureau",\n                        "city": "credit_bureau",\n                        "state": "credit_bureau",\n                        "zipCode": "credit_bureau",\n                        "country": "credit_bureau"\n                    },\n                    {\n                        "line1": "credit_bureau",\n                        "line2": "credit_bureau",\n                        "city": "credit_bureau",\n                        "state": "credit_bureau",\n                        "zipCode": "credit_bureau",\n                        "country": "credit_bureau"\n                    },\n                    {\n                        "line1": "phone_carrier",\n                        "city": "phone_carrier",\n                        "state": "phone_carrier",\n                        "zipCode": "phone_carrier",\n                        "country": "phone_carrier"\n                    }\n                ],\n                "birthDate": "phone_carrier",\n                "ssn": "phone_carrier"\n            },\n            "status": {\n                "email": [\n                    "valid",\n                    "valid"\n                ],\n                "fullName": {\n                    "firstName": "valid",\n                    "lastName": "valid"\n                },\n                "address": [\n                    {\n                        "line1": "valid",\n                        "city": "valid",\n                        "state": "valid",\n                        "zipCode": "valid",\n                        "country": "valid"\n                    },\n                    {\n                        "line1": "valid",\n                        "line2": "valid",\n                        "city": "valid",\n                        "state": "valid",\n                        "zipCode": "valid",\n                        "country": "valid"\n                    },\n                    {\n                        "line1": "valid",\n                        "city": "valid",\n                        "state": "valid",\n                        "zipCode": "valid",\n                        "country": "valid"\n                    }\n                ],\n                "birthDate": "valid",\n                "ssn": "valid"\n            },\n            "expirationDate": {\n                "email": [\n                    "1871839024044",\n                    "1885082680000"\n                ],\n                "fullName": {\n                    "firstName": "1871839024044",\n                    "lastName": "1871839024044"\n                },\n                "address": [\n                    {\n                        "line1": "1871839024044",\n                        "city": "1871839024044",\n                        "state": "1871839024044",\n                        "zipCode": "1871839024044",\n                        "country": "1871839024044"\n                    },\n                    {\n                        "line1": "1871839024044",\n                        "line1": "1871839024044",\n                        "city": "1871839024044",\n                        "state": "1871839024044",\n                        "zipCode": "1871839024044",\n                        "country": "1871839024044"\n                    },\n                    {\n                        "line1": "1875924280000",\n                        "city": "1875924280000",\n                        "state": "1875924280000",\n                        "zipCode": "1875924280000",\n                        "country": "1875924280000"\n                    },\n                ],\n                "birthDate": null,\n                "ssn": null\n            }\n        }\n    }\n}\n'})})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},50099:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"reusables/authentication-admonition","title":"authentication-admonition","description":"All requests to the Verified API require an API key as the Authorization header value.","source":"@site/versioned_docs/version-2/reusables/authentication-admonition.mdx","sourceDirName":"reusables","slug":"/reusables/authentication-admonition","permalink":"/reusables/authentication-admonition","draft":false,"unlisted":false,"tags":[],"version":"2","frontMatter":{},"sidebar":"sidebar","previous":{"title":"api-keys-admonition","permalink":"/reusables/api-keys-admonition"},"next":{"title":"birth-date-format-admonition","permalink":"/reusables/birth-date-format-admonition"}}');var r=i(74848),s=i(28453);const a={},o=void 0,d={},c=[];function l(e){const n={a:"a",admonition:"admonition",p:"p",strong:"strong",...(0,s.R)(),...e.components};return(0,r.jsxs)(n.admonition,{title:"Authentication Requirement",type:"warning",children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"All requests to the Verified API require an API key"})," as the Authorization header value."]}),(0,r.jsxs)(n.p,{children:["For detailed information on authentication, see the ",(0,r.jsx)(n.a,{href:"./authentication",children:"Authentication Page"}),"."]})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},98030:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"reusables/brands-admonition","title":"brands-admonition","description":"Your company account can have one or more brands. Generally, you\'ll only need one brand, but there are some cases where it\'s helpful to use multiple. For example:","source":"@site/versioned_docs/version-2/reusables/brands-admonition.mdx","sourceDirName":"reusables","slug":"/reusables/brands-admonition","permalink":"/reusables/brands-admonition","draft":false,"unlisted":false,"tags":[],"version":"2","frontMatter":{},"sidebar":"sidebar","previous":{"title":"birth-date-format-admonition","permalink":"/reusables/birth-date-format-admonition"},"next":{"title":"credential-request-table-hosted","permalink":"/reusables/credential-request-table-hosted"}}');var r=i(74848),s=i(28453);const a={},o=void 0,d={},c=[];function l(e){const n={admonition:"admonition",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(n.admonition,{title:"Why Multiple Brands?",type:"info",children:[(0,r.jsx)(n.p,{children:"Your company account can have one or more brands. Generally, you'll only need one brand, but there are some cases where it's helpful to use multiple. For example:"}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"If you have multiple products:"})," If you have products that go by different names, it can be useful to create different brands to help users know which product they're using 1-Click Signup for \u2014\xa0and to help your team track metrics specific to that product."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"If you want to try different brand settings:"})," If you want to change brand settings without affecting your existing implementation (even in Sandbox), you can duplicate your brand and configure different settings on the new brand."]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},84864:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>p,frontMatter:()=>d,metadata:()=>t,toc:()=>u});const t=JSON.parse('{"id":"reusables/setup-login-to-dashboard","title":"setup-login-to-dashboard","description":"Someone at your company may have already created an account for you, in which case you would have received an email invite. Check for this before creating a new account.","source":"@site/versioned_docs/version-2/reusables/setup-login-to-dashboard.mdx","sourceDirName":"reusables","slug":"/reusables/setup-login-to-dashboard","permalink":"/reusables/setup-login-to-dashboard","draft":false,"unlisted":false,"tags":[],"version":"2","frontMatter":{},"sidebar":"sidebar","previous":{"title":"set-brands-integration-type","permalink":"/reusables/set-brands-integration-type"},"next":{"title":"supported-phone-numbers-admonition","permalink":"/reusables/supported-phone-numbers-admonition"}}');var r=i(74848),s=i(28453),a=i(98030),o=(i(27293),i(40751));const d={},c=void 0,l={},u=[{value:"a. Enter your email and click the 1-Click Login button.",id:"a-enter-your-email-and-click-the-1-click-login-button",level:4},...o.toc,{value:"b. Complete the verification step.",id:"b-complete-the-verification-step",level:4},{value:"c. (if necessary) Confirm your company name.",id:"c-if-necessary-confirm-your-company-name",level:4},...a.toc,{value:"d. (optional) Invite team members.",id:"d-optional-invite-team-members",level:4}];function h(e){const n={em:"em",h4:"h4",p:"p",...(0,s.R)(),...e.components},{Details:i}=n;return i||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"Someone at your company may have already created an account for you, in which case you would have received an email invite. Check for this before creating a new account."}),"\n",(0,r.jsxs)(i,{children:[(0,r.jsx)("summary",{children:"Detailed Steps"}),(0,r.jsx)(n.h4,{id:"a-enter-your-email-and-click-the-1-click-login-button",children:"a. Enter your email and click the 1-Click Login button."}),(0,r.jsx)(n.p,{children:"We'll send you a verification code by email."}),(0,r.jsx)(o.default,{}),(0,r.jsx)(n.h4,{id:"b-complete-the-verification-step",children:"b. Complete the verification step."}),(0,r.jsxs)(n.p,{children:["Click the verification button in the email or enter the verification code. We'll automatically log you in. ",(0,r.jsx)(n.em,{children:"It's a 1-click experience, as promised!"})]}),(0,r.jsx)(n.h4,{id:"c-if-necessary-confirm-your-company-name",children:"c. (if necessary) Confirm your company name."}),(0,r.jsxs)(n.p,{children:["If you're creating the Dashboard account for your company, we'll ask you to confirm your company name. ",(0,r.jsx)(n.em,{children:"If someone on your team has already created your account, you won't need to do this."})]}),(0,r.jsx)(n.p,{children:"If your account doesn't have a brand yet, we'll automatically create one for you and take you to its Brand Details page."}),(0,r.jsx)(a.default,{}),(0,r.jsx)(n.h4,{id:"d-optional-invite-team-members",children:"d. (optional) Invite team members."}),(0,r.jsx)(n.p,{children:"Invite your team members to join your Dashboard account."})]})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},62369:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>o,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"reusables/use-your-own-phone-number-admonition","title":"use-your-own-phone-number-admonition","description":"We recommend using your own phone number, so you can send yourself SMS for testing. But you can also use one of our test user\'s phone number. For any phone number, in our Sandbox environment, we\'ll return mock data.","source":"@site/versioned_docs/version-2/reusables/use-your-own-phone-number-admonition.mdx","sourceDirName":"reusables","slug":"/reusables/use-your-own-phone-number-admonition","permalink":"/reusables/use-your-own-phone-number-admonition","draft":false,"unlisted":false,"tags":[],"version":"2","frontMatter":{},"sidebar":"sidebar","previous":{"title":"use-user-input-admonition","permalink":"/reusables/use-user-input-admonition"},"next":{"title":"when-step-is-necessary-admonition","permalink":"/reusables/when-step-is-necessary-admonition"}}');var r=i(74848),s=i(28453),a=i(27293);const o={},d=void 0,c={},l=[];function u(e){const n={a:"a",p:"p",strong:"strong",...(0,s.R)(),...e.components};return(0,r.jsx)(a.A,{type:"tip",children:(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"We recommend using your own phone number, so you can send yourself SMS for testing."})," But you can also use one of our ",(0,r.jsx)(n.a,{href:"/environments#test-user",children:"test user"}),"'s phone number. For any phone number, in our ",(0,r.jsx)(n.a,{href:"/environments#sandbox",children:"Sandbox"})," environment, we'll return ",(0,r.jsx)(n.a,{href:"/environments#mock-data",children:"mock data"}),"."]})})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},40751:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"reusables/work-email-admonition","title":"work-email-admonition","description":"Use your work email. We use AI magic to autofill brand information based on your email domain, so you don\'t have to manually enter it!","source":"@site/versioned_docs/version-2/reusables/work-email-admonition.mdx","sourceDirName":"reusables","slug":"/reusables/work-email-admonition","permalink":"/reusables/work-email-admonition","draft":false,"unlisted":false,"tags":[],"version":"2","frontMatter":{},"sidebar":"sidebar","previous":{"title":"when-step-is-necessary-admonition","permalink":"/reusables/when-step-is-necessary-admonition"}}');var r=i(74848),s=i(28453);const a={},o=void 0,d={},c=[];function l(e){const n={admonition:"admonition",p:"p",strong:"strong",...(0,s.R)(),...e.components};return(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Use your work email."})," We use AI magic to autofill brand information based on your email domain, so you don't have to manually enter it!"]})})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},67416:(e,n,i)=>{i.d(n,{A:()=>o});i(96540);var t=i(5556),r=i.n(t),s=i(74848);const a=e=>{let{id:n,offset:i="-70px"}=e;return(0,s.jsx)("div",{id:n,style:{position:"relative",top:i,visibility:"hidden",height:"0"}})};a.propTypes={id:r().string.isRequired,offset:r().string};const o=a},38308:(e,n,i)=>{i.d(n,{CF:()=>p,Ct:()=>u,MU:()=>h});var t=i(96540),r=i(5556),s=i.n(r),a=i(85916),o=i(11692),d=i(67733),c=i(67416),l=i(74848);const u=e=>{let{children:n,isActive:i}=e;return(0,l.jsxs)("div",{className:"collapsable-header",children:[i?(0,l.jsx)(a.A,{}):(0,l.jsx)(o.A,{}),n]})},h=e=>{let{activeId:n,setActiveId:i,id:r,children:s}=e;const a=r===n,o=t.Children.toArray(s).find((e=>e.type===u)),h=t.Children.toArray(s).filter((e=>e.type!==u));return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(c.A,{id:`section-anchor-${r}`,className:"section-anchor",offset:"-80px"}),(0,l.jsxs)("div",{id:`collapsable-section-${r}`,className:"collapsable-section",children:[(0,l.jsx)(d.A,{onClick:e=>{e.target.classList.contains("hash-link")||i(a?void 0:r)},style:{cursor:"pointer",fontWeight:"bold"},children:t.cloneElement(o,{isActive:a})}),a&&h]})]})},p=e=>{let{children:n,firstSectionExpanded:i=!0}=e;const[r,s]=(0,t.useState)(void 0),a=(0,t.useId)(),o=(0,t.useRef)(!1),d=e=>`${a}-${e}`,c=e=>{e?(s(e),setTimeout((()=>{!function(e,n,i){void 0===n&&(n="instant"),void 0===i&&(i=-80);const t=document.querySelector(`#collapsable-section-${CSS.escape(e)}`).getBoundingClientRect().top+window.scrollY+i;window.scrollTo({top:t,behavior:n})}(e)}),0)):s(void 0)};(0,t.useEffect)((()=>{if(!i)return;let e=null;t.Children.forEach(n,((n,i)=>{n.type===h&&null===e&&(e=i,o.current=!0,s(d(e)))}))}),[n]);const u=!i||o.current;return(0,l.jsx)(l.Fragment,{children:u&&t.Children.map(n,((e,n)=>{if(e.type!==h)return e;const i=t.cloneElement(e,{activeId:r,setActiveId:c,id:d(n),componentId:a});return(0,l.jsx)("div",{children:i},n+a)}))})};u.propTypes={children:s().node.isRequired},h.propTypes={activeId:s().oneOfType([s().string,s().number]),children:s().node.isRequired},p.propTypes={children:s().node.isRequired,firstSectionExpanded:s().bool}},5243:(e,n,i)=>{i.d(n,{A:()=>d});i(96540);var t=i(44526),r=i(58035),s=i(87614),a=i.n(s),o=i(74848);const d=e=>{let{type:n,text:i,children:s}=e;if(n&&c[n]){var a=(0,t.A)();return s?(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.A,{id:a,children:c[n]}),(0,o.jsx)("u",{"data-tip":!0,"data-for":a,children:s})]}):(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.A,{id:a,children:c[n]}),(0,o.jsx)("u",{"data-tip":!0,"data-for":a,children:n})]})}var d=(0,t.A)();return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.A,{id:d}),(0,o.jsx)("u",{"data-tip":i,"data-for":d,children:s})]})},c={credential:(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("div",{children:[(0,o.jsxs)("b",{children:["A ",(0,o.jsx)("a",{href:"/terminology#credential",children:"credential"})," is a collection of data about a person."]})," It's issued by a company and can be requested by other network participants, gated by the user's consent."]}),(0,o.jsxs)(a(),{trigger:"+ More...",triggerWhenOpen:"- Less",children:[(0,o.jsxs)("div",{children:[(0,o.jsx)("b",{children:"Example:"})," ACME Lending issues a KYC verification credential to Richard (an ACME user). This includes Richard's contact information and account numbers, as well as a level of confidence in the accuracy of the data."]}),(0,o.jsxs)("div",{children:[(0,o.jsx)("b",{children:"Components:"})," A company issues credentials following the steps in the ",(0,o.jsx)("a",{href:"/issuance-guide",children:"Issuance Guide"}),"."]})]})]}),request:(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("div",{children:[(0,o.jsxs)("b",{children:["A ",(0,o.jsx)("a",{href:"/terminology#request",children:"request"})," (or ",(0,o.jsx)("i",{children:"credential request"}),") is a request for a ",(0,o.jsx)("a",{href:"/terminology#credential",children:"credentials"})," to be shared by a ",(0,o.jsx)("a",{href:"/terminology#user",children:"user"}),"."]})," It's created when a company successfully checks if a user has matching credentials, via ",(0,o.jsx)("a",{href:"/api-overview#check-user-credentials",children:"/hasMatchingCredentials."}),"  Only if the user has the ability to response with the matching credentials is a request created."]}),(0,o.jsxs)(a(),{trigger:"+ More...",triggerWhenOpen:"- Less",children:[(0,o.jsxs)("div",{children:[(0,o.jsx)("b",{children:"Example:"})," Hooli FinTech checks if Richard has a SSN and LastName credential issued by ACME Lending. Because he does, a request is created for those credentials specifically from ACME Lending. Hooli presents this request to Richard by directing him to the `url` received in the `/hasMatchingCredentials` response body."]}),(0,o.jsxs)("div",{children:[(0,o.jsx)("b",{children:"Components:"})," A company creates a user specific request by using ",(0,o.jsx)("a",{href:"/api-overview#check-user-credentials",children:"/hasMatchingCredentials."}),". If it is case the ",(0,o.jsx)("a",{href:"/terminology#user",children:"user"})," does not have the desired credentials then a request is not created. If it is the case the user does, a request is created and is returned in the form of a `url` attribute in response to the client."]})]})]}),user:(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("div",{children:[(0,o.jsxs)("b",{children:["A ",(0,o.jsx)("a",{href:"/terminology#user",children:"user"})," is an individual in the Verified Inc. network."]})," Each user has at least one phone or emails, aka ",(0,o.jsx)("a",{href:"/terminology#user-identifier",children:"userIdentifiers"})," associated with them. They can have multiple of either."]}),(0,o.jsxs)(a(),{trigger:"+ More...",triggerWhenOpen:"- Less",children:[(0,o.jsxs)("div",{children:[(0,o.jsx)("b",{children:"Example:"})," Richard is a user in your account system and potentially of the Verified Inc. network. He has two email addresses and one phone with him. Credentials can be issued to or requested of him using any of these identifiers."]}),(0,o.jsxs)("div",{children:[(0,o.jsx)("b",{children:"Components:"})," Referenced in API endpoints `/hasMatchingCredentials` and `/issueCredentials`. User data is associated by using these user identifiers that you already keep on your users."]})]})]}),userIdentifier:(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("div",{children:[(0,o.jsxs)("b",{children:["A ",(0,o.jsx)("a",{href:"/terminology#user-identifier",children:"userIdentifier"})," is an email or phone value"]})," which is associated with a ",(0,o.jsx)("a",{href:"/terminology#user",children:"user"}),"."]}),(0,o.jsxs)(a(),{trigger:"+ More...",triggerWhenOpen:"- Less",children:[(0,o.jsxs)("div",{children:[(0,o.jsx)("b",{children:"Example:"})," richard@pipedpiper.net is one of Richard Hendrick's user identifiers. He also has a phone number of +10123456789, another one of his user identifiers."]}),(0,o.jsxs)("div",{children:[(0,o.jsx)("b",{children:"Components:"})," We have abstracted away the complexity of dealing with a third party uuid to refer to a user. Instead, you can use the user's email or phone number to refer to and issue credentials to users in our system."]})]})]}),brand:(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("div",{children:[(0,o.jsxs)("b",{children:["A ",(0,o.jsx)("a",{href:"/terminology#brand",children:"brand"})," is a company entity that has a corresponding unique api key, name, and card image."]})," Brands can issue, request and receive ",(0,o.jsx)("a",{href:"/terminology#credential",children:"credentials"})," to and from ",(0,o.jsx)("a",{href:"/terminology#user",children:"users"}),"."]}),(0,o.jsxs)(a(),{trigger:"+ More...",triggerWhenOpen:"- Less",children:[(0,o.jsxs)("div",{children:[(0,o.jsx)("b",{children:"Example:"})," ACME Bank is an Verified Inc. customer. However, they have two separate brands: ACME Lending and ACME Savings. Each brand has a unique api key, name, and card image."]}),(0,o.jsxs)("div",{children:[(0,o.jsx)("b",{children:"Components:"})," Each brand has an associated umbrella customer. It is totally okay if your customer only has one brand. We want to have the flexibility to support multiple brands per customer."]})]})]}),customer:(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("div",{children:(0,o.jsxs)("b",{children:["A ",(0,o.jsx)("a",{href:"/terminology#customer",children:"customer"})," is a company entity that serves as a parent to brands and their corresponding ApiKeys."]})}),(0,o.jsxs)(a(),{trigger:"+ More...",triggerWhenOpen:"- Less",children:[(0,o.jsxs)("div",{children:[(0,o.jsx)("b",{children:"Example:"})," ACME Bank is the Verified Inc. customer where their self service dashboard access rights are defined."]}),(0,o.jsxs)("div",{children:[(0,o.jsx)("b",{children:"Components:"})," The admins of the customer can manage individual ",(0,o.jsx)("a",{href:"/terminology#brand",children:"brand"})," settings."]})]})]})}},58035:(e,n,i)=>{i.d(n,{A:()=>s});i(96540);var t=i(62336),r=i(74848);const s=e=>{let{children:n,...i}=e;return(0,r.jsx)(t.A,{type:"dark",place:"top",effect:"solid",multiline:!0,textColor:"white",backgroundColor:"#2e2e2e",arrowColor:"transparent",delayHide:250,delayUpdate:250,resizeHide:!1,...i,className:"tooltip",wrapper:"span",children:n})}}}]);