(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{104:function(e,t,a){"use strict";var n=a(0),i=a(105);t.a=function(){var e=Object(n.useContext)(i.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},105:function(e,t,a){"use strict";var n=a(0),i=Object(n.createContext)(void 0);t.a=i},113:function(e,t,a){"use strict";var n=a(0),i=a.n(n),l=a(104),r=a(98),o=a(56),b=a.n(o);var c=37,s=39;t.a=function(e){var t=e.lazy,a=e.block,o=e.defaultValue,d=e.values,p=e.groupId,m=e.className,u=Object(l.a)(),g=u.tabGroupChoices,h=u.setTabGroupChoices,j=Object(n.useState)(o),O=j[0],v=j[1],N=n.Children.toArray(e.children),f=[];if(null!=p){var y=g[p];null!=y&&y!==O&&d.some((function(e){return e.value===y}))&&v(y)}var w=function(e){var t=e.target,a=f.indexOf(t),n=N[a].props.value;v(n),null!=p&&(h(p,n),setTimeout((function(){var e,a,n,i,l,r,o,c;(e=t.getBoundingClientRect(),a=e.top,n=e.left,i=e.bottom,l=e.right,r=window,o=r.innerHeight,c=r.innerWidth,a>=0&&l<=c&&i<=o&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(b.a.tabItemActive),setTimeout((function(){return t.classList.remove(b.a.tabItemActive)}),2e3))}),150))},x=function(e){var t,a;switch(e.keyCode){case s:var n=f.indexOf(e.target)+1;a=f[n]||f[0];break;case c:var i=f.indexOf(e.target)-1;a=f[i]||f[f.length-1]}null===(t=a)||void 0===t||t.focus()};return i.a.createElement("div",{className:"tabs-container"},i.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(r.a)("tabs",{"tabs--block":a},m)},d.map((function(e){var t=e.value,a=e.label;return i.a.createElement("li",{role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,className:Object(r.a)("tabs__item",b.a.tabItem,{"tabs__item--active":O===t}),key:t,ref:function(e){return f.push(e)},onKeyDown:x,onFocus:w,onClick:w},a)}))),t?Object(n.cloneElement)(N.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):i.a.createElement("div",{className:"margin-vert--md"},N.map((function(e,t){return Object(n.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}},114:function(e,t,a){"use strict";var n=a(0),i=a.n(n);t.a=function(e){var t=e.children,a=e.hidden,n=e.className;return i.a.createElement("div",{role:"tabpanel",hidden:a,className:n},t)}},199:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/logo-cd5e86269e021230bb5a4fe5a998cc37.svg"},87:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return d})),a.d(t,"default",(function(){return m}));var n=a(3),i=a(7),l=(a(0),a(100)),r=(a(102),a(103)),o=a(113),b=a(114),c={id:"usage-guide",title:"Usage Guide",sidebar_label:"Usage Guide",slug:"/usage-guide"},s={unversionedId:"usage-guide",id:"usage-guide",isDocsHomePage:!1,title:"Usage Guide",description:"Write content using GitHub-flavored Markdown syntax.",source:"@site/docs/usage-guide.mdx",slug:"/usage-guide",permalink:"/usage-guide",version:"current",sidebar_label:"Usage Guide"},d=[{value:"Code",id:"code",children:[{value:"Syntax Highlighting",id:"syntax-highlighting",children:[]},{value:"Line Highlighting",id:"line-highlighting",children:[]},{value:"Tabs",id:"tabs",children:[]},{value:"Live Editor",id:"live-editor",children:[]}]},{value:"Admonitions",id:"admonitions",children:[]},{value:"Images",id:"images",children:[]},{value:"Tables",id:"tables",children:[]},{value:"Tooltips",id:"tooltips",children:[{value:"Local",id:"local",children:[]},{value:"Global",id:"global",children:[]}]}],p={toc:d};function m(e){var t=e.components,c=Object(i.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},p,c,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"Write content using ",Object(l.b)("a",{parentName:"p",href:"https://github.github.com/gfm/"},"GitHub-flavored Markdown syntax"),"."),Object(l.b)("hr",null),Object(l.b)("h2",{id:"code"},"Code"),Object(l.b)("h3",{id:"syntax-highlighting"},"Syntax Highlighting"),Object(l.b)("p",null,"For example, this..."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"```javascript\nvar s = 'JavaScript syntax highlighting';\nalert(s);\n```\n")),Object(l.b)("p",null,"...renders to:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-javascript"},"var s = 'JavaScript syntax highlighting';\nalert(s);\n")),Object(l.b)("h3",{id:"line-highlighting"},"Line Highlighting"),Object(l.b)("p",null,"Use e.g. ",Object(l.b)("inlineCode",{parentName:"p"},"{2}")," after the langauge name (and a space):"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js",metastring:"{2}","{2}":!0},"function highlightMe() {\n  console.log('This line can be highlighted!');\n}\n")),Object(l.b)("h3",{id:"tabs"},"Tabs"),Object(l.b)("p",null,"Tabs can be used generally, but they're useful for language selection:"),Object(l.b)(o.a,{groupId:"languages",defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"Python",value:"py"}],mdxType:"Tabs"},Object(l.b)(b.a,{value:"js",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},"function helloWorld() {\n  console.log('Hello, world!');\n}\n"))),Object(l.b)(b.a,{value:"py",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-py"},"def hello_world():\n  print 'Hello, world!'\n")))),Object(l.b)("p",null,"To make multiple tab blocks update in sync, give all related tabs\nthe same ",Object(l.b)("inlineCode",{parentName:"p"},"groupId")," prop. Note that doing this will persist the\nchoice in ",Object(l.b)("inlineCode",{parentName:"p"},"localStorage")," and all ",Object(l.b)("inlineCode",{parentName:"p"},"<Tab>")," instances with the\nsame ",Object(l.b)("inlineCode",{parentName:"p"},"groupId")," will update automatically when the value of\none of them is changed. Note that ",Object(l.b)("inlineCode",{parentName:"p"},"groupId")," are globally-namespaced."),Object(l.b)(o.a,{groupId:"languages",defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"Python",value:"py"}],mdxType:"Tabs"},Object(l.b)(b.a,{value:"js",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},"function goodbyeWorld() {\n  console.log('Goodbye, world :(');\n}\n"))),Object(l.b)(b.a,{value:"py",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-py"},"def goodbye_world():\n  print 'Goodbye, world :('\n")))),Object(l.b)("h3",{id:"live-editor"},"Live Editor"),Object(l.b)("p",null,"You can make a live editor! Just add ",Object(l.b)("inlineCode",{parentName:"p"},"live")," after the language name:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Clock(props) {\n  const [date, setDate] = useState(new Date());\n  useEffect(() => {\n    var timerID = setInterval(() => tick(), 1000);\n\n    return function cleanup() {\n      clearInterval(timerID);\n    };\n  });\n\n  function tick() {\n    setDate(new Date());\n  }\n\n  return (\n    <div>\n      <h2>It is {date.toLocaleTimeString()}.</h2>\n    </div>\n  );\n}\n")),Object(l.b)("hr",null),Object(l.b)("h2",{id:"admonitions"},"Admonitions"),Object(l.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(l.b)("div",{parentName:"div",className:"admonition-heading"},Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",{parentName:"h5",className:"admonition-icon"},Object(l.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(l.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(l.b)("div",{parentName:"div",className:"admonition-content"},Object(l.b)("p",{parentName:"div"},"This is a note"))),Object(l.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(l.b)("div",{parentName:"div",className:"admonition-heading"},Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",{parentName:"h5",className:"admonition-icon"},Object(l.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(l.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),Object(l.b)("div",{parentName:"div",className:"admonition-content"},Object(l.b)("p",{parentName:"div"},"This is a tip"))),Object(l.b)("div",{className:"admonition admonition-important alert alert--info"},Object(l.b)("div",{parentName:"div",className:"admonition-heading"},Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",{parentName:"h5",className:"admonition-icon"},Object(l.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(l.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),Object(l.b)("div",{parentName:"div",className:"admonition-content"},Object(l.b)("p",{parentName:"div"},"This is important"))),Object(l.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(l.b)("div",{parentName:"div",className:"admonition-heading"},Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",{parentName:"h5",className:"admonition-icon"},Object(l.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(l.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),Object(l.b)("div",{parentName:"div",className:"admonition-content"},Object(l.b)("p",{parentName:"div"},"This is a caution"))),Object(l.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(l.b)("div",{parentName:"div",className:"admonition-heading"},Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",{parentName:"h5",className:"admonition-icon"},Object(l.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(l.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),Object(l.b)("div",{parentName:"div",className:"admonition-content"},Object(l.b)("p",{parentName:"div"},"This is a warning"))),Object(l.b)("hr",null),Object(l.b)("h2",{id:"images"},"Images"),Object(l.b)("p",null,"Here's our logo (hover to see the title text):"),Object(l.b)("p",null,"Inline-style: ",Object(l.b)("img",{parentName:"p",src:"https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png",alt:"alt text",title:"Logo Title Text 1"})),Object(l.b)("p",null,"Reference-style: ",Object(l.b)("img",{parentName:"p",src:"https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png",alt:"alt text",title:"Logo Title Text 2"})),Object(l.b)("p",null,"Images from any folder can be used by providing path to file. Path should be relative to the original markdown file or absolute to the ",Object(l.b)("inlineCode",{parentName:"p"},"/static")," folder."),Object(l.b)("p",null,Object(l.b)("img",{alt:"img",src:a(199).default})),Object(l.b)("hr",null),Object(l.b)("h2",{id:"tables"},"Tables"),Object(l.b)("p",null,"Colons can be used to align columns."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Tables"),Object(l.b)("th",{parentName:"tr",align:"center"},"Are"),Object(l.b)("th",{parentName:"tr",align:"right"},"Cool"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"col 3 is"),Object(l.b)("td",{parentName:"tr",align:"center"},"right-aligned"),Object(l.b)("td",{parentName:"tr",align:"right"},"\\$1600")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"col 2 is"),Object(l.b)("td",{parentName:"tr",align:"center"},"centered"),Object(l.b)("td",{parentName:"tr",align:"right"},"\\$12")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"zebra stripes"),Object(l.b)("td",{parentName:"tr",align:"center"},"are neat"),Object(l.b)("td",{parentName:"tr",align:"right"},"\\$1")))),Object(l.b)("p",null,"There must be at least 3 dashes separating each header cell. The outer pipes (|) are optional, and you don't need to make the raw Markdown line up prettily. You can also use inline Markdown."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Markdown"),Object(l.b)("th",{parentName:"tr",align:null},"Less"),Object(l.b)("th",{parentName:"tr",align:null},"Pretty"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("em",{parentName:"td"},"Still")),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"renders")),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("strong",{parentName:"td"},"nicely"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"1"),Object(l.b)("td",{parentName:"tr",align:null},"2"),Object(l.b)("td",{parentName:"tr",align:null},"3")))),Object(l.b)("hr",null),Object(l.b)("h2",{id:"tooltips"},"Tooltips"),Object(l.b)("p",null,"We can use tooltips like ",Object(l.b)(r.a,{text:"Wow, a tooltip!",mdxType:"Tip"},"this")," to provide quick, inline definitions and explanations. "),Object(l.b)("p",null,"Using these is super simple. Add these lines at the top of a ",Object(l.b)("inlineCode",{parentName:"p"},".mdx")," file (below the file metadata):"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx",metastring:'title="example.mdx"',title:'"example.mdx"'},"import TooltipWithDefaults from '../src/components/TooltipWithDefaults';\nimport Tip from '../src/components/Tip';\n")),Object(l.b)("p",null,"And then you're ready to go. There are two kinds of tooltip:"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"local (for one-time use), and"),Object(l.b)("li",{parentName:"ol"},"global (for multiple uses).")),Object(l.b)("h3",{id:"local"},"Local"),Object(l.b)("p",null,"Local tooltips are defined on the spot, so they're best for one-time use. Just use a ",Object(l.b)("inlineCode",{parentName:"p"},"<Tip>")," element and set the ",Object(l.b)("inlineCode",{parentName:"p"},"text")," attribute. For example, this..."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},'<Tip text="Super helpful tooltip!">display text</Tip>\n')),Object(l.b)("p",null,"... renders to: ",Object(l.b)(r.a,{text:"Super helpful tooltip!",mdxType:"Tip"},"display text"),"."),Object(l.b)("h3",{id:"global"},"Global"),Object(l.b)("p",null,"Global tooltips are defined globally so they can be used multiple times. This is especially useful for definitions. Just use an empty ",Object(l.b)("inlineCode",{parentName:"p"},"<Tip>")," element and set the ",Object(l.b)("inlineCode",{parentName:"p"},"type")," attribute (the display text is part of the definition). For example, this..."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},'<Tip type="credential"/>\n')),Object(l.b)("p",null,"... renders to: ",Object(l.b)(r.a,{type:"credential",mdxType:"Tip"}),". (Setting the ",Object(l.b)("inlineCode",{parentName:"p"},"text")," attribute or putting text in between ",Object(l.b)("inlineCode",{parentName:"p"},"<Tip></Tip>")," tags does nothing.)"),Object(l.b)("p",null,"To define a global tooltip, add an entry to the ",Object(l.b)("inlineCode",{parentName:"p"},"tooltips")," object in ",Object(l.b)("inlineCode",{parentName:"p"},"/src/components/Tip.jsx")," like so:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},'const tooltips =  {\n  "display text": "tooltip text",\n}\n')),Object(l.b)("p",null,"You can use a simple string like above, but you can also use any HTML to make much richer tooltips with multiple lines, formatting, links, etc."))}m.isMDXComponent=!0},98:function(e,t,a){"use strict";function n(e){var t,a,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(i&&(i+=" "),i+=a);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}t.a=function(){for(var e,t,a=0,i="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(i&&(i+=" "),i+=t);return i}}}]);