(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{5855:function(e,n,t){Promise.resolve().then(t.bind(t,8364)),Promise.resolve().then(t.t.bind(t,1273,23)),Promise.resolve().then(t.t.bind(t,6356,23)),Promise.resolve().then(t.t.bind(t,2373,23))},1986:function(e,n,t){"use strict";t.d(n,{v:function(){return a}});var s=t(2040);let a={prefix:"https://heum2.github.io/heum2.github.io",profile:{name:"heum2",image:"/avatar.svg",role:"frontend developer",bio:"I develop everything using node.",email:"jwh6295@gmail.com",linkedin:"eunheum-jo-b9459a1b4",github:"heum2",instagram:"heumheum_e",twitter:""},blog:{title:"heum.dev",description:"개발 및 일기를 끄적이는 블로그"},link:"https://heum2.github.io",since:2022,lang:"en-US",ogImageGenerateURL:"https://og-image-korean.vercel.app",seo:{keywords:["Blog","Website","Notion"]},notionConfig:{pageId:s.env.NOTION_PAGE_ID},googleAnalytics:{enable:!0,config:{measurementId:s.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID||""}},googleSearchConsole:{enable:!1,config:{siteVerification:s.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION||""}},utterances:{enable:!0,config:{repo:"heum2/heum2.github.io","issue-term":"title",label:"\uD83D\uDCAC Utterances"}}}},8364:function(e,n,t){"use strict";t.r(n),t.d(n,{Providers:function(){return p}});var s=t(9268),a=t(6006),r=t(8709),i=t(8367),l=t(6008),o=t(1986);let c=a.createContext(""),h=c.Provider;c.Consumer;var d=t(5846),g=t.n(d);function m(){let e=(0,l.usePathname)();return(0,s.jsx)("header",{className:"shadow-sm transition sticky bg-white dark:bg-zinc-700 mb-2 md:mb-6 border-b-[1px] z-[40] border-gray-100 dark:border-gray-800 top-0",children:(0,s.jsxs)("nav",{className:"flex justify-between items-center h-14 px-5 mx-auto my-0 max-w-6xl",children:[(0,s.jsx)("h1",{className:"text-lg font-black",children:(0,s.jsx)(g(),{href:"/",children:"heum.dev"})}),(0,s.jsx)("button",{className:"border p-2 rounded md:hidden",children:(0,s.jsxs)("div",{className:"space-y-1",children:[(0,s.jsx)("span",{className:"block w-5 h-1 bg-gray-500 dark:bg-gray-400"}),(0,s.jsx)("span",{className:"block w-5 h-1 bg-gray-500 dark:bg-gray-400"}),(0,s.jsx)("span",{className:"block w-5 h-1 bg-gray-500 dark:bg-gray-400"})]})}),(0,s.jsxs)("ul",{className:"hidden md:flex gap-4",children:[(0,s.jsx)("li",{className:"rounded-lg bg-transparent hover:bg-gray-300 px-3 py-1 ".concat(e.includes("about")&&"font-bold"),children:(0,s.jsx)(g(),{href:"/about",children:"About"})}),(0,s.jsx)("li",{className:"rounded-lg bg-transparent hover:bg-gray-300 px-3 py-1 ".concat(e.includes("posts")&&"font-bold"),children:(0,s.jsx)(g(),{href:"/posts",children:"Posts"})}),(0,s.jsx)("li",{className:"rounded-lg bg-transparent hover:bg-gray-300 px-3 py-1 ".concat(e.includes("log")&&"font-bold"),children:(0,s.jsx)(g(),{href:"/log",children:"Log"})})]})]})})}function u(){let{theme:e,setTheme:n}=(0,r.F)();return(0,s.jsx)("div",{className:"fixed bottom-4 right-4",children:(0,s.jsx)(i.E.button,{type:"button",whileHover:{scale:1.1},whileTap:{scale:.9},onClick:()=>{n("dark"===e?"light":"dark")},className:"bg-current p-2 rounded-full text-gray-500 dark:text-gray-400",children:"light"===e?(0,s.jsx)("svg",{className:"w-5 h-5",fill:"rgb(254, 240, 138)",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:(0,s.jsx)("path",{d:"M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"})}):(0,s.jsx)("svg",{className:"w-5 h-5",fill:"rgb(253, 224, 71)",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,s.jsx)("path",{d:"M4.069 13h-4.069v-2h4.069c-.041.328-.069.661-.069 1s.028.672.069 1zm3.034-7.312l-2.881-2.881-1.414 1.414 2.881 2.881c.411-.529.885-1.003 1.414-1.414zm11.209 1.414l2.881-2.881-1.414-1.414-2.881 2.881c.528.411 1.002.886 1.414 1.414zm-6.312-3.102c.339 0 .672.028 1 .069v-4.069h-2v4.069c.328-.041.661-.069 1-.069zm0 16c-.339 0-.672-.028-1-.069v4.069h2v-4.069c-.328.041-.661.069-1 .069zm7.931-9c.041.328.069.661.069 1s-.028.672-.069 1h4.069v-2h-4.069zm-3.033 7.312l2.88 2.88 1.415-1.414-2.88-2.88c-.412.528-.886 1.002-1.415 1.414zm-11.21-1.415l-2.88 2.88 1.414 1.414 2.88-2.88c-.528-.411-1.003-.885-1.414-1.414zm6.312-10.897c-3.314 0-6 2.686-6 6s2.686 6 6 6 6-2.686 6-6-2.686-6-6-6z"})})})})}o.v.googleAnalytics.config.measurementId;let b=e=>{console.log(window,e)},x=()=>{let e=(0,l.usePathname)(),n=(0,l.useSearchParams)();(0,a.useEffect)(()=>{let t=e+n.toString();o.v.googleAnalytics.enable&&b(t)},[e,n])};function p(e){let{children:n}=e;x();let t=(0,l.usePathname)();return(0,s.jsx)(r.f,{attribute:"class",children:(0,s.jsxs)(h,{value:o.v.prefix,children:[(0,s.jsx)(m,{}),(0,s.jsx)(i.E.main,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:20},className:"mx-auto max-w-6xl px-4",children:n},t),(0,s.jsx)(u,{})]})})}},6356:function(){}},function(e){e.O(0,[920,448,253,488,744],function(){return e(e.s=5855)}),_N_E=e.O()}]);