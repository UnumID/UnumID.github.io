"use strict";(self.webpackChunkverified_inc_docs=self.webpackChunkverified_inc_docs||[]).push([[4986],{4095:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>a,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var t=n(5893),s=n(1151);const r={id:"example-app",title:"1-Click Signup Example App",sidebar_position:3.1,sidebar_label:"Example App",description:"1-Click Signup Example App",slug:"/example-app",toc_max_heading_level:2},o=void 0,l={id:"click-signup/example-app",title:"1-Click Signup Example App",description:"1-Click Signup Example App",source:"@site/versioned_docs/version-2/1-click-signup/example-app.mdx",sourceDirName:"1-click-signup",slug:"/example-app",permalink:"/example-app",draft:!1,unlisted:!1,tags:[],version:"2",sidebarPosition:3.1,frontMatter:{id:"example-app",title:"1-Click Signup Example App",sidebar_position:3.1,sidebar_label:"Example App",description:"1-Click Signup Example App",slug:"/example-app",toc_max_heading_level:2},sidebar:"sidebar",previous:{title:"Migration Guide (v1 to v2)",permalink:"/migration-guide"},next:{title:"API Reference",permalink:"/api-reference"}},a={},d=[{value:"About",id:"about",level:2},{value:"Purpose",id:"purpose",level:3},{value:"Structure",id:"structure",level:3},{value:"Setup",id:"setup",level:2},{value:"Usage",id:"usage",level:2},{value:"Manual Signup (/signup/manual)",id:"manual-signup-signupmanual",level:3},{value:"1-Click Signup",id:"1-click-signup",level:3},{value:"Non-Hosted (/signup/1-click/non-hosted)",id:"non-hosted-signup1-clicknon-hosted",level:4},{value:"Semi-Hosted (/signup/1-click/semi-hosted)",id:"semi-hosted-signup1-clicksemi-hosted",level:4},{value:"Hosted (/signup/1-click/hosted)",id:"hosted-signup1-clickhosted",level:4}];function h(e){const i={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"GitHub Repository:"})," ",(0,t.jsx)(i.a,{href:"https://github.com/VerifiedInc/one-click-signup-example-app",children:"https://github.com/VerifiedInc/one-click-signup-example-app"})]}),"\n",(0,t.jsx)(i.h2,{id:"about",children:"About"}),"\n",(0,t.jsxs)(i.p,{children:["This app shows Verified ",(0,t.jsx)(i.a,{href:"https://docs.verified.inc/",children:"1-Click Signup"})," for a fictional brand called Slooow, whose logo is a sloth! \ud83e\udda5"]}),"\n",(0,t.jsxs)(i.p,{children:["It shows four different flows (listed under ",(0,t.jsx)(i.a,{href:"#usage",children:"Usage"}),"). The first is a manual signup flow, and the next three are 1-Click Signup flows, each using a different ",(0,t.jsx)(i.a,{href:"https://docs.verified.inc/integration-guide#2-determine-integration-type",children:"integration type"}),"."]}),"\n",(0,t.jsxs)(i.p,{children:["For more information about 1-Click Signup, see the ",(0,t.jsx)(i.a,{href:"https://docs.verified.inc/",children:"Verified Docs"})," and in particular the ",(0,t.jsx)(i.a,{href:"https://docs.verified.inc/integration-guide",children:"Integration Guide"}),"."]}),"\n",(0,t.jsx)(i.h3,{id:"purpose",children:"Purpose"}),"\n",(0,t.jsx)(i.p,{children:"By running this app and reviewing the code for each flow, you'll better understand how to integrate 1-Click Signup into your own application."}),"\n",(0,t.jsx)(i.h3,{id:"structure",children:"Structure"}),"\n",(0,t.jsxs)(i.p,{children:["This app uses ",(0,t.jsx)(i.a,{href:"https://nextjs.org/",children:"Next.js"}),". If you\u2019re new to Next.js, start by exploring the ",(0,t.jsx)(i.code,{children:"src/pages/signup"})," directory. Here, you\u2019ll find pages for the different flows, each designed to guide you through the process."]}),"\n",(0,t.jsxs)(i.p,{children:["See the Next.js ",(0,t.jsx)(i.a,{href:"https://nextjs.org/docs/pages/building-your-application/routing/pages-and-layouts",children:"Pages and Layouts"})," docs for more details on the routing system."]}),"\n",(0,t.jsx)(i.h2,{id:"setup",children:"Setup"}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsx)(i.p,{children:(0,t.jsxs)(i.strong,{children:["Access the ",(0,t.jsx)(i.a,{href:"https://dashboard.verified.inc",children:"Verified Dashboard"}),"."]})}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"Enter your email and click the 1-Click Login button."})," We'll send you a verification code by email."]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"Complete the verification step."})," Click the verification button in the email, or enter the verification code. We'll automatically log you in."]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:'Set "Slooow" as the company name.'})," The fictional company for this example app is called Slooow. We'll automatically create a brand called Slooow for you and take you to its Brand Details page."]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"Copy your Sandbox API key."})," You'll use this in the next step."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.strong,{children:"Set up the app:"})}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.strong,{children:"Clone this repo."})}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.strong,{children:"Set up environment variables:"})}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsx)(i.li,{children:(0,t.jsxs)(i.strong,{children:["Rename the ",(0,t.jsx)(i.code,{children:".env.example"})," file to ",(0,t.jsx)(i.code,{children:".env"}),"."]})}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsxs)(i.strong,{children:["Set your Sandbox API key as the value for ",(0,t.jsx)(i.code,{children:"ONE_CLICK_API_KEY"}),"."]})," You copied this in step (1)(iv)."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:[(0,t.jsxs)(i.strong,{children:["Run ",(0,t.jsx)(i.code,{children:"npm install"})]})," to install dependencies."]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:[(0,t.jsxs)(i.strong,{children:["Run ",(0,t.jsx)(i.code,{children:"npm run dev"})]})," to run the development server. The app will be running at ",(0,t.jsx)(i.a,{href:"http://localhost:3061",children:"http://localhost:3061"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsx)(i.p,{children:"You can switch between the different flows using the menu in the upper right corner."}),"\n",(0,t.jsxs)(i.h3,{id:"manual-signup-signupmanual",children:["Manual Signup (",(0,t.jsx)(i.a,{href:"http://localhost:3061/signup/manual",children:"/signup/manual"}),")"]}),"\n",(0,t.jsxs)(i.p,{children:["This is a manual signup flow, without a 1-Click Signup integration. The user must manually enter all information. ",(0,t.jsx)(i.em,{children:"That's why it's slooow!"})," \u2639\ufe0f"]}),"\n",(0,t.jsx)(i.p,{children:"This flow mimics what a company typically has before they integrate 1-Click Signup."}),"\n",(0,t.jsx)(i.h3,{id:"1-click-signup",children:"1-Click Signup"}),"\n",(0,t.jsxs)(i.p,{children:["These are 1-Click Signup flows, using different ",(0,t.jsx)(i.a,{href:"https://docs.verified.inc/integration-guide#2-determine-integration-type",children:"integration types"}),". The user can sign up in less than 10 seconds, with a single click! ",(0,t.jsx)(i.em,{children:"That's why it's Slooow, but not slooow!"})," \ud83d\ude01"]}),"\n",(0,t.jsx)(i.admonition,{type:"important",children:(0,t.jsxs)(i.p,{children:["For a 1-Click Signup flow that uses a particular integration type to work, your brand's ",(0,t.jsx)(i.strong,{children:"integration type"})," setting must be set to the correct integration type in the ",(0,t.jsx)(i.a,{href:"https://dashboard.verified.inc",children:"Dashboard"}),"."]})}),"\n",(0,t.jsx)(i.p,{children:"The basic steps of a 1-Click Signup flow are:"}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsx)(i.li,{children:"User enters phone number"}),"\n",(0,t.jsx)(i.li,{children:"User enters verification code (which they receive by SMS)"}),"\n",(0,t.jsx)(i.li,{children:"User confirms data autofilled by 1-Click Signup"}),"\n"]}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"For simplicity, this example app does not send SMS"}),". Instead, it displays the verification code in the lower right corner (and logs it in the browser console), so you can easily enter it."]}),"\n",(0,t.jsxs)(i.p,{children:["In a real integration of 1-Click Signup that uses the Verified ",(0,t.jsx)(i.a,{href:"https://docs.verified.inc/environments#production",children:"Production"})," environment, the app must actually send SMS, to ensure the user verifies their phone number before Verified returns any of their data. This example app only uses the Verified ",(0,t.jsx)(i.a,{href:"https://docs.verified.inc/environments#sandbox",children:"Sandbox"})," environment, which returns only ",(0,t.jsx)(i.a,{href:"https://docs.verified.inc/environments#mock-data",children:"mock data"}),", so it doesn't need to send SMS."]}),"\n",(0,t.jsx)(i.admonition,{type:"caution",children:(0,t.jsx)(i.p,{children:"This example app only displays verification codes on the page (and logs it in the browser console) for ease of development use. In a real integration, you should never handle verification codes (or any sensitive data) in this way."})}),"\n",(0,t.jsxs)(i.h4,{id:"non-hosted-signup1-clicknon-hosted",children:["Non-Hosted (",(0,t.jsx)(i.a,{href:"http://localhost:3061/signup/1-click/non-hosted",children:"/signup/1-click/non-hosted"}),")"]}),"\n",(0,t.jsx)(i.admonition,{type:"important",children:(0,t.jsxs)(i.p,{children:["For this flow to work, your brand's ",(0,t.jsx)(i.strong,{children:"integration type"})," setting must be set to ",(0,t.jsx)(i.strong,{children:"Non-Hosted"})," in the ",(0,t.jsx)(i.a,{href:"https://dashboard.verified.inc",children:"Dashboard"}),"."]})}),"\n",(0,t.jsx)(i.p,{children:"With the Non-Hosted integration type, you use your own UI, and you use your own verification code to verify users' phone numbers. The app (rather than Verified) handles all of this functionality."}),"\n",(0,t.jsxs)(i.p,{children:["After the app has collected and verified a user's phone number, it calls the Verified API for 1-Click Signup. See the ",(0,t.jsx)(i.a,{href:"https://docs.verified.inc/integration-guide?integrationType=non-hosted#integration",children:"Non-Hosted Integration Guide"})," for details."]}),"\n",(0,t.jsxs)(i.h4,{id:"semi-hosted-signup1-clicksemi-hosted",children:["Semi-Hosted (",(0,t.jsx)(i.a,{href:"http://localhost:3061/signup/1-click/semi-hosted",children:"/signup/1-click/semi-hosted"}),")"]}),"\n",(0,t.jsx)(i.admonition,{type:"important",children:(0,t.jsxs)(i.p,{children:["For this flow to work, your brand's ",(0,t.jsx)(i.strong,{children:"integration type"})," setting must be set to ",(0,t.jsx)(i.strong,{children:"Semi-Hosted"})," in the ",(0,t.jsx)(i.a,{href:"https://dashboard.verified.inc",children:"Dashboard"}),"."]})}),"\n",(0,t.jsx)(i.p,{children:"With the Semi-Hosted integration type, you use your own UI, but you use Verified's verification code to verify users' phone numbers. The app (rather than Verified) handles the UI, but Verified creates a verification code and checks user input against it."}),"\n",(0,t.jsxs)(i.p,{children:["After the app has collected a user's phone number, it calls the Verified API to start a 1-Click Signup flow. See the ",(0,t.jsx)(i.a,{href:"https://docs.verified.inc/integration-guide?integrationType=semi-hosted#integration",children:"Semi-Hosted Integration Guide"})," for details."]}),"\n",(0,t.jsxs)(i.h4,{id:"hosted-signup1-clickhosted",children:["Hosted (",(0,t.jsx)(i.a,{href:"http://localhost:3061/signup/1-click/hosted",children:"/signup/1-click/hosted"}),")"]}),"\n",(0,t.jsx)(i.admonition,{type:"important",children:(0,t.jsxs)(i.p,{children:["For this flow to work, your brand's ",(0,t.jsx)(i.strong,{children:"integration type"})," setting must be set to ",(0,t.jsx)(i.strong,{children:"Hosted"})," in the ",(0,t.jsx)(i.a,{href:"https://dashboard.verified.inc",children:"Dashboard"}),"."]})}),"\n",(0,t.jsx)(i.admonition,{type:"tip",children:(0,t.jsxs)(i.p,{children:["You should also set the Slooow brand's ",(0,t.jsx)(i.strong,{children:"logo"})," setting as the image below and ",(0,t.jsx)(i.strong,{children:"color"})," setting as ",(0,t.jsx)(i.code,{children:"#D32D2D"}),". This will configure the branding on the Verified hosted page."]})}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"Slooow logo",src:n(2229).Z+"",width:"320",height:"320"})}),"\n",(0,t.jsx)(i.p,{children:"With the Hosted integration type, you use Verified's UI, and you use Verified's verification code to verify user phone numbers. Verified (rather than the app) handles this functionality."}),"\n",(0,t.jsxs)(i.p,{children:["After the app has collected a user's phone number, it calls the Verified API to start a 1-Click Signup flow and redirects the user to a Verified hosted page. See the ",(0,t.jsx)(i.a,{href:"https://docs.verified.inc/integration-guide?integrationType=hosted#integration",children:"Hosted Integration Guide"})," for details."]}),"\n",(0,t.jsxs)(i.p,{children:["Once the user completes 1-Click Signup on the Verified hosted page, that page redirects them to a URL defined by your brand's ",(0,t.jsx)(i.strong,{children:"default redirect URL"})," setting in the ",(0,t.jsx)(i.a,{href:"https://dashboard.verified.inc",children:"Dashboard"}),". Using ",(0,t.jsx)(i.code,{children:"http://localhost:3061"})," won\u2019t work due to security restrictions, so you should use a tunneling service like ",(0,t.jsx)(i.a,{href:"https://ngrok.com/",children:"ngrok"})," or ",(0,t.jsx)(i.a,{href:"https://theboroer.github.io/localtunnel-www/",children:"Localtunnel"})," to create a secure, publicly accessible URL."]}),"\n",(0,t.jsxs)(i.p,{children:["For example, with Localtunnel, you can install it globally (",(0,t.jsx)(i.code,{children:"npm install -g localtunnel"}),") and run it (",(0,t.jsx)(i.code,{children:"lt --port 3061"}),"), and it will generate a URL. Set this URL as the default redirect URL for your brand in the Dashboard, and save your brand's settings."]})]})}function c(e={}){const{wrapper:i}={...(0,s.a)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},2229:(e,i,n)=>{n.d(i,{Z:()=>t});const t=n.p+"assets/images/slooow-672cbc66d2b772e45afab5ff0ddbfcf3.png"},1151:(e,i,n)=>{n.d(i,{Z:()=>l,a:()=>o});var t=n(7294);const s={},r=t.createContext(s);function o(e){const i=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(r.Provider,{value:i},e.children)}}}]);