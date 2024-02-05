"use strict";(self.webpackChunkdf_docs=self.webpackChunkdf_docs||[]).push([[7316],{5788:(e,t,a)=>{a.d(t,{Iu:()=>c,yg:()=>y});var r=a(1504);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),s=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},g="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),g=s(a),d=n,y=g["".concat(p,".").concat(d)]||g[d]||u[d]||o;return a?r.createElement(y,i(i({ref:t},c),{},{components:a})):r.createElement(y,i({ref:t},c))}));function y(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[g]="string"==typeof e?e:n,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},9128:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=a(5072),n=(a(1504),a(5788));const o={sidebar_position:1},i="Generate a database API",l={unversionedId:"tutorial-basics/generate-db-api",id:"tutorial-basics/generate-db-api",isDocsHomePage:!1,title:"Generate a database API",description:"Add Markdown or React files to src/pages to create a standalone page:",source:"@site/docs/tutorial-basics/generate-db-api.md",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/generate-db-api",permalink:"/tutorial-basics/generate-db-api",editUrl:"https://github.com/dreamfactorysoftware/df-docs/docs/tutorial-basics/generate-db-api.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Limits",permalink:"/Security and Authentication/limits"},next:{title:"Test the API",permalink:"/tutorial-basics/test-api"}},p=[{value:"Create your first React Page",id:"create-your-first-react-page",children:[]},{value:"Create your first Markdown Page",id:"create-your-first-markdown-page",children:[]}],s={toc:p},c="wrapper";function g(e){let{components:t,...a}=e;return(0,n.yg)(c,(0,r.c)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"generate-a-database-api"},"Generate a database API"),(0,n.yg)("p",null,"Add ",(0,n.yg)("strong",{parentName:"p"},"Markdown or React")," files to ",(0,n.yg)("inlineCode",{parentName:"p"},"src/pages")," to create a ",(0,n.yg)("strong",{parentName:"p"},"standalone page"),":"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"src/pages/index.js")," -> ",(0,n.yg)("inlineCode",{parentName:"li"},"localhost:3000/")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"src/pages/foo.md")," -> ",(0,n.yg)("inlineCode",{parentName:"li"},"localhost:3000/foo")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"src/pages/foo/bar.js")," -> ",(0,n.yg)("inlineCode",{parentName:"li"},"localhost:3000/foo/bar"))),(0,n.yg)("h2",{id:"create-your-first-react-page"},"Create your first React Page"),(0,n.yg)("p",null,"Create a file at ",(0,n.yg)("inlineCode",{parentName:"p"},"src/pages/my-react-page.js"),":"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src/pages/my-react-page.js"',title:'"src/pages/my-react-page.js"'},"import React from 'react';\nimport Layout from '@theme/Layout';\n\nexport default function MyReactPage() {\n  return (\n    <Layout>\n      <h1>My React page</h1>\n      <p>This is a React page</p>\n    </Layout>\n  );\n}\n")),(0,n.yg)("p",null,"A new page is now available at ",(0,n.yg)("inlineCode",{parentName:"p"},"http://localhost:3000/my-react-page"),"."),(0,n.yg)("h2",{id:"create-your-first-markdown-page"},"Create your first Markdown Page"),(0,n.yg)("p",null,"Create a file at ",(0,n.yg)("inlineCode",{parentName:"p"},"src/pages/my-markdown-page.md"),":"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-mdx",metastring:'title="src/pages/my-markdown-page.md"',title:'"src/pages/my-markdown-page.md"'},"# My Markdown page\n\nThis is a Markdown page\n")),(0,n.yg)("p",null,"A new page is now available at ",(0,n.yg)("inlineCode",{parentName:"p"},"http://localhost:3000/my-markdown-page"),"."))}g.isMDXComponent=!0}}]);