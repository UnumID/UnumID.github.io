"use strict";(self.webpackChunkunum_id=self.webpackChunkunum_id||[]).push([[829],{4524:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>c});var n=a(7462),i=(a(7294),a(3905)),r=(a(7874),a(106));const s={id:"schema",title:"Credential Data Schema",sidebar_label:"Data Schema",slug:"/schema"},o=void 0,d={unversionedId:"schema",id:"schema",title:"Credential Data Schema",description:"Unum ID enables securely sharing verified  data amongst network participants. While in theory this data can take any shape, a defined schema must be defined and followed for every credential type for the sake of all network participants.",source:"@site/docs/schema.mdx",sourceDirName:".",slug:"/schema",permalink:"/schema",draft:!1,tags:[],version:"current",frontMatter:{id:"schema",title:"Credential Data Schema",sidebar_label:"Data Schema",slug:"/schema"},sidebar:"sidebar",previous:{title:"Privacy and Security",permalink:"/privacy-and-security"},next:{title:"Quick Start Guide",permalink:"/quick-start-guide"}},l={},c=[],m={toc:c};function h(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Unum ID enables securely sharing verified ",(0,i.kt)("a",{href:"/terminology#credential"},(0,i.kt)(r.Z,{type:"credential",mdxType:"Tip"}))," data amongst network participants. While in theory this data can take any shape, a defined schema must be defined and followed for every credential type for the sake of all network participants."),(0,i.kt)("p",null,"We opted to format our data using W3C's ",(0,i.kt)("a",{parentName:"p",href:"https://www.w3.org/standards/semanticweb/data"},"Linked Data")," serialized via ",(0,i.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/json-ld11/"},"JSON-LD"),". It gives us the structure to create a data validation framework along with a human readable vocabulary around the data. We feel this meets our goal to have a credential schema definition that is robust enough to encapsulate and define any data with the property of being easily displayed and validated."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"JSON-LD is actually the syntax used in the W3C's ",(0,i.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/vc-data-model/#json-ld"},"Verifiable Credential")," and ",(0,i.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/did-core/#json-ld"},"Decentralized Identifier")," specs of which our data network is built around.")),(0,i.kt)("p",null,"Our entire human readable JSON-LD ",(0,i.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/json-ld11/#the-context"},"context")," semantics file can be download and viewed via, ",(0,i.kt)("a",{parentName:"p",href:"https://schema.unumid.co/context"},"https://schema.unumid.co/context"),". The context file serves as a building block for the basis for the shared vocabulary that ultimately make up our credential data schemas. However more than likely as an ",(0,i.kt)(r.Z,{type:"issuer",mdxType:"Tip"})," or ",(0,i.kt)(r.Z,{type:"verifier",mdxType:"Tip"})," you want to know what is the schema for a particular credential type."),(0,i.kt)("p",null,"To view all of the Unum ID defined credential schemas one can do so via, ",(0,i.kt)("a",{parentName:"p",href:"https://schema.unumid.co/schema"},"https://schema.unumid.co/schema"),". If you want to know the schema for a particular credential type one can use that same  url with the desired credential ",(0,i.kt)("inlineCode",{parentName:"p"},"type")," as a query param, for example ",(0,i.kt)("a",{parentName:"p",href:"https://schema.unumid.co/schema?type=EmailCredential"},"https://schema.unumid.co/schema?type=EmailCredential"),"."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"We have this API documented via our public ",(0,i.kt)("a",{parentName:"p",href:"https://docs.api.unumid.org/"},"Postman collection")," documentation under ",(0,i.kt)("strong",{parentName:"p"},"Schema Resolver"),"."),(0,i.kt)("p",{parentName:"admonition"},"You can view the response bodies from ",(0,i.kt)("a",{parentName:"p",href:"https://schema.unumid.co/schema"},"https://schema.unumid.co/schema")," in the browser but probably best to format the json response for human readability.")),(0,i.kt)("admonition",{type:"important"},(0,i.kt)("p",{parentName:"admonition"},"Given use of JSON-LD standard for schema definitions we hope it make Issuer defined credentials schemas a reality very soon. However, until then, all credential types have schemas defined by Unum ID. Please let us know if you would like to define a new credential schema for your use case.")),(0,i.kt)("p",null,'We currently are opting to only support what can be referred to as "single attribute atomic credentials". This means that we break data into into it simplest form for every credential. This is to provide users a means of selective disclosure for ',(0,i.kt)("a",{href:"/terminology#request"},(0,i.kt)(r.Z,{type:"request",mdxType:"Tip"})),"s with optional fields."))}h.isMDXComponent=!0}}]);