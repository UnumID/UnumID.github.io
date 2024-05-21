"use strict";(self.webpackChunkverified_inc_docs=self.webpackChunkverified_inc_docs||[]).push([[2019],{9970:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>d,toc:()=>o});var n=r(5893),i=r(1151);const s={},a=void 0,d={id:"reusables/credential-request-code-snippet",title:"credential-request-code-snippet",description:"",source:"@site/docs/reusables/credential-request-code-snippet.mdx",sourceDirName:"reusables",slug:"/reusables/credential-request-code-snippet",permalink:"/reusables/credential-request-code-snippet",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{}},l={},o=[];function c(e){const t={code:"code",pre:"pre",...(0,i.a)(),...e.components};return(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",metastring:'title="CredentialRequest"',children:"{\n  type: string, // the type of credential data being requested\n  issuers: string[], // list of acceptable brandIds; if empty, all issuer brands are valid\n  required?: boolean, // @deprecated - Use mandatory field instead. If the credential is required\n  mandatory?: 'yes' | 'no' | 'if_available' // if the credential is required, not required, or required if available.\n  description?: string // a description field that is shown to the user; can be used to explain why the information is being requested\n  allowUserInput?: boolean // when true, the user will be shown an input to add their own information if they choose.\n  children?: CredentialRequest[] // list of sub-credentials relevant to the parent credential (e.g. FullNameCredential(FirstNameCredential, MiddleNameCredential LastNameCredential)\n}\n"})})}function u(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}}}]);