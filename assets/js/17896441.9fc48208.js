(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[752],{4556:(e,t,n)=>{"use strict";n.d(t,{c:()=>b});n(1504);var s=n(5456),a=n(5864),o=n(5492),c=n(3376),i=n(867),l=n(4357),r=n(964),d=n(7624);function u(e){return(0,d.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,d.jsx)("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"})})}const m={breadcrumbHomeIcon:"breadcrumbHomeIcon_YNFT"};function h(){const e=(0,r.c)("/");return(0,d.jsx)("li",{className:"breadcrumbs__item",children:(0,d.jsx)(i.c,{"aria-label":(0,l.G)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e,children:(0,d.jsx)(u,{className:m.breadcrumbHomeIcon})})})}const p={breadcrumbsContainer:"breadcrumbsContainer_Z_bl"};function f(e){let{children:t,href:n,isLast:s}=e;const a="breadcrumbs__link";return s?(0,d.jsx)("span",{className:a,itemProp:"name",children:t}):n?(0,d.jsx)(i.c,{className:a,href:n,itemProp:"item",children:(0,d.jsx)("span",{itemProp:"name",children:t})}):(0,d.jsx)("span",{className:a,children:t})}function x(e){let{children:t,active:n,index:a,addMicrodata:o}=e;return(0,d.jsxs)("li",{...o&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},className:(0,s.c)("breadcrumbs__item",{"breadcrumbs__item--active":n}),children:[t,(0,d.jsx)("meta",{itemProp:"position",content:String(a+1)})]})}function b(){const e=(0,o.js)(),t=(0,c.Y5)();return e?(0,d.jsx)("nav",{className:(0,s.c)(a.W.docs.docBreadcrumbs,p.breadcrumbsContainer),"aria-label":(0,l.G)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"}),children:(0,d.jsxs)("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList",children:[t&&(0,d.jsx)(h,{}),e.map(((t,n)=>{const s=n===e.length-1,a="category"===t.type&&t.linkUnlisted?void 0:t.href;return(0,d.jsx)(x,{active:s,index:n,addMicrodata:!!a,children:(0,d.jsx)(f,{href:a,isLast:s,children:t.label})},n)}))]})}):null}},5600:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>Tt});var s=n(1504),a=n(5756),o=n(1100),c=n(7624);const i=s.createContext(null);function l(e){let{children:t,content:n}=e;const a=function(e){return(0,s.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(n);return(0,c.jsx)(i.Provider,{value:a,children:t})}function r(){const e=(0,s.useContext)(i);if(null===e)throw new o.AH("DocProvider");return e}function d(){const{metadata:e,frontMatter:t,assets:n}=r();return(0,c.jsx)(a.U7,{title:e.title,description:e.description,keywords:t.keywords,image:n.image??t.image})}var u=n(5456),m=n(1432),h=n(9236);function p(){const{metadata:e}=r();return(0,c.jsx)(h.c,{previous:e.previous,next:e.next})}var f=n(2136),x=n(8092),b=n(5864),g=n(4357);function v(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:n}=e;return(0,c.jsx)(g.c,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:(0,c.jsx)("b",{children:(0,c.jsx)("time",{dateTime:new Date(1e3*t).toISOString(),children:n})})},children:" on {date}"})}function j(e){let{lastUpdatedBy:t}=e;return(0,c.jsx)(g.c,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:(0,c.jsx)("b",{children:t})},children:" by {user}"})}function N(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:n,lastUpdatedBy:s}=e;return(0,c.jsxs)("span",{className:b.W.common.lastUpdated,children:[(0,c.jsx)(g.c,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&n?(0,c.jsx)(v,{lastUpdatedAt:t,formattedLastUpdatedAt:n}):"",byUser:s?(0,c.jsx)(j,{lastUpdatedBy:s}):""},children:"Last updated{atDate}{byUser}"}),!1]})}var C=n(867);const y={iconEdit:"iconEdit_Z9Sw"};function k(e){let{className:t,...n}=e;return(0,c.jsx)("svg",{fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,u.c)(y.iconEdit,t),"aria-hidden":"true",...n,children:(0,c.jsx)("g",{children:(0,c.jsx)("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})})})}function L(e){let{editUrl:t}=e;return(0,c.jsxs)(C.c,{to:t,className:b.W.common.editThisPage,children:[(0,c.jsx)(k,{}),(0,c.jsx)(g.c,{id:"theme.common.editThisPage",description:"The link label to edit the current page",children:"Edit this page"})]})}const _={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};function B(e){let{permalink:t,label:n,count:s}=e;return(0,c.jsxs)(C.c,{href:t,className:(0,u.c)(_.tag,s?_.tagWithCount:_.tagRegular),children:[n,s&&(0,c.jsx)("span",{children:s})]})}const w={tags:"tags_jXut",tag:"tag_QGVx"};function T(e){let{tags:t}=e;return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("b",{children:(0,c.jsx)(g.c,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,c.jsx)("ul",{className:(0,u.c)(w.tags,"padding--none","margin-left--sm"),children:t.map((e=>{let{label:t,permalink:n}=e;return(0,c.jsx)("li",{className:w.tag,children:(0,c.jsx)(B,{label:t,permalink:n})},n)}))})]})}const E={lastUpdated:"lastUpdated_vwxv"};function H(e){return(0,c.jsx)("div",{className:(0,u.c)(b.W.docs.docFooterTagsRow,"row margin-bottom--sm"),children:(0,c.jsx)("div",{className:"col",children:(0,c.jsx)(T,{...e})})})}function A(e){let{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:s,formattedLastUpdatedAt:a}=e;return(0,c.jsxs)("div",{className:(0,u.c)(b.W.docs.docFooterEditMetaRow,"row"),children:[(0,c.jsx)("div",{className:"col",children:t&&(0,c.jsx)(L,{editUrl:t})}),(0,c.jsx)("div",{className:(0,u.c)("col",E.lastUpdated),children:(n||s)&&(0,c.jsx)(N,{lastUpdatedAt:n,formattedLastUpdatedAt:a,lastUpdatedBy:s})})]})}function M(){const{metadata:e}=r(),{editUrl:t,lastUpdatedAt:n,formattedLastUpdatedAt:s,lastUpdatedBy:a,tags:o}=e,i=o.length>0,l=!!(t||n||a);return i||l?(0,c.jsxs)("footer",{className:(0,u.c)(b.W.docs.docFooter,"docusaurus-mt-lg"),children:[i&&(0,c.jsx)(H,{tags:o}),l&&(0,c.jsx)(A,{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:a,formattedLastUpdatedAt:s})]}):null}var I=n(8448),U=n(1824);function S(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const s=n.slice(2,e.level);e.parentIndex=Math.max(...s),n[e.level]=t}));const s=[];return t.forEach((e=>{const{parentIndex:n,...a}=e;n>=0?t[n].children.push(a):s.push(a)})),s}function W(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:s}=e;return t.flatMap((e=>{const t=W({toc:e.children,minHeadingLevel:n,maxHeadingLevel:s});return function(e){return e.level>=n&&e.level<=s}(e)?[{...e,children:t}]:t}))}function V(e){const t=e.getBoundingClientRect();return t.top===t.bottom?V(e.parentNode):t}function R(e,t){let{anchorTopOffset:n}=t;const s=e.find((e=>V(e).top>=n));if(s){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(V(s))?s:e[e.indexOf(s)-1]??null}return e[e.length-1]??null}function z(){const e=(0,s.useRef)(0),{navbar:{hideOnScroll:t}}=(0,U.y)();return(0,s.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function O(e){const t=(0,s.useRef)(void 0),n=z();(0,s.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:s,linkActiveClassName:a,minHeadingLevel:o,maxHeadingLevel:c}=e;function i(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(s),i=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const s=[];for(let a=t;a<=n;a+=1)s.push(`h${a}.anchor`);return Array.from(document.querySelectorAll(s.join()))}({minHeadingLevel:o,maxHeadingLevel:c}),l=R(i,{anchorTopOffset:n.current}),r=e.find((e=>l&&l.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(a),e.classList.add(a),t.current=e):e.classList.remove(a)}(e,e===r)}))}return document.addEventListener("scroll",i),document.addEventListener("resize",i),i(),()=>{document.removeEventListener("scroll",i),document.removeEventListener("resize",i)}}),[e,n])}function P(e){let{toc:t,className:n,linkClassName:s,isChild:a}=e;return t.length?(0,c.jsx)("ul",{className:a?void 0:n,children:t.map((e=>(0,c.jsxs)("li",{children:[(0,c.jsx)(C.c,{to:`#${e.id}`,className:s??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,c.jsx)(P,{isChild:!0,toc:e.children,className:n,linkClassName:s})]},e.id)))}):null}const D=s.memo(P);function $(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:a="table-of-contents__link",linkActiveClassName:o,minHeadingLevel:i,maxHeadingLevel:l,...r}=e;const d=(0,U.y)(),u=i??d.tableOfContents.minHeadingLevel,m=l??d.tableOfContents.maxHeadingLevel,h=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return(0,s.useMemo)((()=>W({toc:S(t),minHeadingLevel:n,maxHeadingLevel:a})),[t,n,a])}({toc:t,minHeadingLevel:u,maxHeadingLevel:m});return O((0,s.useMemo)((()=>{if(a&&o)return{linkClassName:a,linkActiveClassName:o,minHeadingLevel:u,maxHeadingLevel:m}}),[a,o,u,m])),(0,c.jsx)(D,{toc:h,className:n,linkClassName:a,...r})}const F={tocCollapsibleButton:"tocCollapsibleButton_TO0P",tocCollapsibleButtonExpanded:"tocCollapsibleButtonExpanded_MG3E"};function G(e){let{collapsed:t,...n}=e;return(0,c.jsx)("button",{type:"button",...n,className:(0,u.c)("clean-btn",F.tocCollapsibleButton,!t&&F.tocCollapsibleButtonExpanded,n.className),children:(0,c.jsx)(g.c,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component",children:"On this page"})})}const q={tocCollapsible:"tocCollapsible_ETCw",tocCollapsibleContent:"tocCollapsibleContent_vkbj",tocCollapsibleExpanded:"tocCollapsibleExpanded_sAul"};function Y(e){let{toc:t,className:n,minHeadingLevel:s,maxHeadingLevel:a}=e;const{collapsed:o,toggleCollapsed:i}=(0,I.a)({initialState:!0});return(0,c.jsxs)("div",{className:(0,u.c)(q.tocCollapsible,!o&&q.tocCollapsibleExpanded,n),children:[(0,c.jsx)(G,{collapsed:o,onClick:i}),(0,c.jsx)(I.U,{lazy:!0,className:q.tocCollapsibleContent,collapsed:o,children:(0,c.jsx)($,{toc:t,minHeadingLevel:s,maxHeadingLevel:a})})]})}const Z={tocMobile:"tocMobile_ITEo"};function J(){const{toc:e,frontMatter:t}=r();return(0,c.jsx)(Y,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:(0,u.c)(b.W.docs.docTocMobile,Z.tocMobile)})}const K={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"},Q="table-of-contents__link toc-highlight",X="table-of-contents__link--active";function ee(e){let{className:t,...n}=e;return(0,c.jsx)("div",{className:(0,u.c)(K.tableOfContents,"thin-scrollbar",t),children:(0,c.jsx)($,{...n,linkClassName:Q,linkActiveClassName:X})})}function te(){const{toc:e,frontMatter:t}=r();return(0,c.jsx)(ee,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:b.W.docs.docTocDesktop})}var ne=n(6448),se=n(2172),ae=n(6952),oe=n(3664),ce=n(6528);function ie(){const{prism:e}=(0,U.y)(),{colorMode:t}=(0,ce.U)(),n=e.theme,s=e.darkTheme||n;return"dark"===t?s:n}var le=n(6504),re=n.n(le);const de=/title=(?<quote>["'])(?<title>.*?)\1/,ue=/\{(?<range>[\d,-]+)\}/,me={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},he={...me,lua:{start:"--",end:""},wasm:{start:"\\;\\;",end:""},tex:{start:"%",end:""},vb:{start:"['\u2018\u2019]",end:""},vbnet:{start:"(?:_\\s*)?['\u2018\u2019]",end:""},rem:{start:"[Rr][Ee][Mm]\\b",end:""},f90:{start:"!",end:""},ml:{start:"\\(\\*",end:"\\*\\)"},cobol:{start:"\\*>",end:""}},pe=Object.keys(me);function fe(e,t){const n=e.map((e=>{const{start:n,end:s}=he[e];return`(?:${n}\\s*(${t.flatMap((e=>[e.line,e.block?.start,e.block?.end].filter(Boolean))).join("|")})\\s*${s})`})).join("|");return new RegExp(`^\\s*(?:${n})\\s*$`)}function xe(e,t){let n=e.replace(/\n$/,"");const{language:s,magicComments:a,metastring:o}=t;if(o&&ue.test(o)){const e=o.match(ue).groups.range;if(0===a.length)throw new Error(`A highlight range has been given in code block's metastring (\`\`\` ${o}), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.`);const t=a[0].className,s=re()(e).filter((e=>e>0)).map((e=>[e-1,[t]]));return{lineClassNames:Object.fromEntries(s),code:n}}if(void 0===s)return{lineClassNames:{},code:n};const c=function(e,t){switch(e){case"js":case"javascript":case"ts":case"typescript":return fe(["js","jsBlock"],t);case"jsx":case"tsx":return fe(["js","jsBlock","jsx"],t);case"html":return fe(["js","jsBlock","html"],t);case"python":case"py":case"bash":return fe(["bash"],t);case"markdown":case"md":return fe(["html","jsx","bash"],t);case"tex":case"latex":case"matlab":return fe(["tex"],t);case"lua":case"haskell":case"sql":return fe(["lua"],t);case"wasm":return fe(["wasm"],t);case"vb":case"vba":case"visual-basic":return fe(["vb","rem"],t);case"vbnet":return fe(["vbnet","rem"],t);case"batch":return fe(["rem"],t);case"basic":return fe(["rem","f90"],t);case"fsharp":return fe(["js","ml"],t);case"ocaml":case"sml":return fe(["ml"],t);case"fortran":return fe(["f90"],t);case"cobol":return fe(["cobol"],t);default:return fe(pe,t)}}(s,a),i=n.split("\n"),l=Object.fromEntries(a.map((e=>[e.className,{start:0,range:""}]))),r=Object.fromEntries(a.filter((e=>e.line)).map((e=>{let{className:t,line:n}=e;return[n,t]}))),d=Object.fromEntries(a.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.start,t]}))),u=Object.fromEntries(a.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.end,t]})));for(let h=0;h<i.length;){const e=i[h].match(c);if(!e){h+=1;continue}const t=e.slice(1).find((e=>void 0!==e));r[t]?l[r[t]].range+=`${h},`:d[t]?l[d[t]].start=h:u[t]&&(l[u[t]].range+=`${l[u[t]].start}-${h-1},`),i.splice(h,1)}n=i.join("\n");const m={};return Object.entries(l).forEach((e=>{let[t,{range:n}]=e;re()(n).forEach((e=>{m[e]??=[],m[e].push(t)}))})),{lineClassNames:m,code:n}}const be={codeBlockContainer:"codeBlockContainer_Ckt0"};function ge(e){let{as:t,...n}=e;const s=function(e){const t={color:"--prism-color",backgroundColor:"--prism-background-color"},n={};return Object.entries(e.plain).forEach((e=>{let[s,a]=e;const o=t[s];o&&"string"==typeof a&&(n[o]=a)})),n}(ie());return(0,c.jsx)(t,{...n,style:s,className:(0,u.c)(n.className,be.codeBlockContainer,b.W.common.codeBlock)})}const ve={codeBlockContent:"codeBlockContent_biex",codeBlockTitle:"codeBlockTitle_Ktv7",codeBlock:"codeBlock_bY9V",codeBlockStandalone:"codeBlockStandalone_MEMb",codeBlockLines:"codeBlockLines_e6Vv",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_o6Pm",buttonGroup:"buttonGroup__atx"};function je(e){let{children:t,className:n}=e;return(0,c.jsx)(ge,{as:"pre",tabIndex:0,className:(0,u.c)(ve.codeBlockStandalone,"thin-scrollbar",n),children:(0,c.jsx)("code",{className:ve.codeBlockLines,children:t})})}const Ne={attributes:!0,characterData:!0,childList:!0,subtree:!0};function Ce(e,t){const[n,a]=(0,s.useState)(),c=(0,s.useCallback)((()=>{a(e.current?.closest("[role=tabpanel][hidden]"))}),[e,a]);(0,s.useEffect)((()=>{c()}),[c]),function(e,t,n){void 0===n&&(n=Ne);const a=(0,o.yA)(t),c=(0,o.Mh)(n);(0,s.useEffect)((()=>{const t=new MutationObserver(a);return e&&t.observe(e,c),()=>t.disconnect()}),[e,a,c])}(n,(e=>{e.forEach((e=>{"attributes"===e.type&&"hidden"===e.attributeName&&(t(),c())}))}),{attributes:!0,characterData:!1,childList:!1,subtree:!1})}var ye=n(5720);const ke={codeLine:"codeLine_lJS_",codeLineNumber:"codeLineNumber_Tfdd",codeLineContent:"codeLineContent_feaV"};function Le(e){let{line:t,classNames:n,showLineNumbers:s,getLineProps:a,getTokenProps:o}=e;1===t.length&&"\n"===t[0].content&&(t[0].content="");const i=a({line:t,className:(0,u.c)(n,s&&ke.codeLine)}),l=t.map(((e,t)=>(0,c.jsx)("span",{...o({token:e,key:t})},t)));return(0,c.jsxs)("span",{...i,children:[s?(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("span",{className:ke.codeLineNumber}),(0,c.jsx)("span",{className:ke.codeLineContent,children:l})]}):l,(0,c.jsx)("br",{})]})}function _e(e){return(0,c.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,c.jsx)("path",{fill:"currentColor",d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})})}function Be(e){return(0,c.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,c.jsx)("path",{fill:"currentColor",d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"})})}const we={copyButtonCopied:"copyButtonCopied_obH4",copyButtonIcons:"copyButtonIcons_eSgA",copyButtonIcon:"copyButtonIcon_y97N",copyButtonSuccessIcon:"copyButtonSuccessIcon_LjdS"};function Te(e){let{code:t,className:n}=e;const[a,o]=(0,s.useState)(!1),i=(0,s.useRef)(void 0),l=(0,s.useCallback)((()=>{!function(e,t){let{target:n=document.body}=void 0===t?{}:t;if("string"!=typeof e)throw new TypeError(`Expected parameter \`text\` to be a \`string\`, got \`${typeof e}\`.`);const s=document.createElement("textarea"),a=document.activeElement;s.value=e,s.setAttribute("readonly",""),s.style.contain="strict",s.style.position="absolute",s.style.left="-9999px",s.style.fontSize="12pt";const o=document.getSelection(),c=o.rangeCount>0&&o.getRangeAt(0);n.append(s),s.select(),s.selectionStart=0,s.selectionEnd=e.length;let i=!1;try{i=document.execCommand("copy")}catch{}s.remove(),c&&(o.removeAllRanges(),o.addRange(c)),a&&a.focus()}(t),o(!0),i.current=window.setTimeout((()=>{o(!1)}),1e3)}),[t]);return(0,s.useEffect)((()=>()=>window.clearTimeout(i.current)),[]),(0,c.jsx)("button",{type:"button","aria-label":a?(0,g.G)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,g.G)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,g.G)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,u.c)("clean-btn",n,we.copyButton,a&&we.copyButtonCopied),onClick:l,children:(0,c.jsxs)("span",{className:we.copyButtonIcons,"aria-hidden":"true",children:[(0,c.jsx)(_e,{className:we.copyButtonIcon}),(0,c.jsx)(Be,{className:we.copyButtonSuccessIcon})]})})}function Ee(e){return(0,c.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,c.jsx)("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})})}const He={wordWrapButtonIcon:"wordWrapButtonIcon_Bwma",wordWrapButtonEnabled:"wordWrapButtonEnabled_EoeP"};function Ae(e){let{className:t,onClick:n,isEnabled:s}=e;const a=(0,g.G)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return(0,c.jsx)("button",{type:"button",onClick:n,className:(0,u.c)("clean-btn",t,s&&He.wordWrapButtonEnabled),"aria-label":a,title:a,children:(0,c.jsx)(Ee,{className:He.wordWrapButtonIcon,"aria-hidden":"true"})})}function Me(e){let{children:t,className:n="",metastring:a,title:o,showLineNumbers:i,language:l}=e;const{prism:{defaultLanguage:r,magicComments:d}}=(0,U.y)(),m=function(e){return e?.toLowerCase()}(l??function(e){const t=e.split(" ").find((e=>e.startsWith("language-")));return t?.replace(/language-/,"")}(n)??r),h=ie(),p=function(){const[e,t]=(0,s.useState)(!1),[n,a]=(0,s.useState)(!1),o=(0,s.useRef)(null),c=(0,s.useCallback)((()=>{const n=o.current.querySelector("code");e?n.removeAttribute("style"):(n.style.whiteSpace="pre-wrap",n.style.overflowWrap="anywhere"),t((e=>!e))}),[o,e]),i=(0,s.useCallback)((()=>{const{scrollWidth:e,clientWidth:t}=o.current,n=e>t||o.current.querySelector("code").hasAttribute("style");a(n)}),[o]);return Ce(o,i),(0,s.useEffect)((()=>{i()}),[e,i]),(0,s.useEffect)((()=>(window.addEventListener("resize",i,{passive:!0}),()=>{window.removeEventListener("resize",i)})),[i]),{codeBlockRef:o,isEnabled:e,isCodeScrollable:n,toggle:c}}(),f=function(e){return e?.match(de)?.groups.title??""}(a)||o,{lineClassNames:x,code:b}=xe(t,{metastring:a,language:m,magicComments:d}),g=i??function(e){return Boolean(e?.includes("showLineNumbers"))}(a);return(0,c.jsxs)(ge,{as:"div",className:(0,u.c)(n,m&&!n.includes(`language-${m}`)&&`language-${m}`),children:[f&&(0,c.jsx)("div",{className:ve.codeBlockTitle,children:f}),(0,c.jsxs)("div",{className:ve.codeBlockContent,children:[(0,c.jsx)(ye.gl,{theme:h,code:b,language:m??"text",children:e=>{let{className:t,style:n,tokens:s,getLineProps:a,getTokenProps:o}=e;return(0,c.jsx)("pre",{tabIndex:0,ref:p.codeBlockRef,className:(0,u.c)(t,ve.codeBlock,"thin-scrollbar"),style:n,children:(0,c.jsx)("code",{className:(0,u.c)(ve.codeBlockLines,g&&ve.codeBlockLinesWithNumbering),children:s.map(((e,t)=>(0,c.jsx)(Le,{line:e,getLineProps:a,getTokenProps:o,classNames:x[t],showLineNumbers:g},t)))})})}}),(0,c.jsxs)("div",{className:ve.buttonGroup,children:[(p.isEnabled||p.isCodeScrollable)&&(0,c.jsx)(Ae,{className:ve.codeButton,onClick:()=>p.toggle(),isEnabled:p.isEnabled}),(0,c.jsx)(Te,{className:ve.codeButton,code:b})]})]})]})}function Ie(e){let{children:t,...n}=e;const a=(0,oe.c)(),o=function(e){return s.Children.toArray(e).some((e=>(0,s.isValidElement)(e)))?e:Array.isArray(e)?e.join(""):e}(t),i="string"==typeof o?Me:je;return(0,c.jsx)(i,{...n,children:o},String(a))}function Ue(e){return(0,c.jsx)("code",{...e})}var Se=n(5976);const We={details:"details_lb9f",isBrowser:"isBrowser_bmU9",collapsibleContent:"collapsibleContent_i85q"};function Ve(e){return!!e&&("SUMMARY"===e.tagName||Ve(e.parentElement))}function Re(e,t){return!!e&&(e===t||Re(e.parentElement,t))}function ze(e){let{summary:t,children:n,...a}=e;(0,Se.c)().collectAnchor(a.id);const o=(0,oe.c)(),i=(0,s.useRef)(null),{collapsed:l,setCollapsed:r}=(0,I.a)({initialState:!a.open}),[d,m]=(0,s.useState)(a.open),h=s.isValidElement(t)?t:(0,c.jsx)("summary",{children:t??"Details"});return(0,c.jsxs)("details",{...a,ref:i,open:d,"data-collapsed":l,className:(0,u.c)(We.details,o&&We.isBrowser,a.className),onMouseDown:e=>{Ve(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const t=e.target;Ve(t)&&Re(t,i.current)&&(e.preventDefault(),l?(r(!1),m(!0)):r(!0))},children:[h,(0,c.jsx)(I.U,{lazy:!1,collapsed:l,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{r(e),m(!e)},children:(0,c.jsx)("div",{className:We.collapsibleContent,children:n})})]})}const Oe={details:"details_b_Ee"},Pe="alert alert--info";function De(e){let{...t}=e;return(0,c.jsx)(ze,{...t,className:(0,u.c)(Pe,Oe.details,t.className)})}function $e(e){const t=s.Children.toArray(e.children),n=t.find((e=>s.isValidElement(e)&&"summary"===e.type)),a=(0,c.jsx)(c.Fragment,{children:t.filter((e=>e!==n))});return(0,c.jsx)(De,{...e,summary:n,children:a})}function Fe(e){return(0,c.jsx)(ne.c,{...e})}const Ge={containsTaskList:"containsTaskList_mC6p"};function qe(e){if(void 0!==e)return(0,u.c)(e,e?.includes("contains-task-list")&&Ge.containsTaskList)}const Ye={img:"img_ev3q"};function Ze(e){const{mdxAdmonitionTitle:t,rest:n}=function(e){const t=s.Children.toArray(e),n=t.find((e=>s.isValidElement(e)&&"mdxAdmonitionTitle"===e.type)),a=t.filter((e=>e!==n)),o=n?.props.children;return{mdxAdmonitionTitle:o,rest:a.length>0?(0,c.jsx)(c.Fragment,{children:a}):null}}(e.children),a=e.title??t;return{...e,...a&&{title:a},children:n}}const Je={admonition:"admonition_xJq3",admonitionHeading:"admonitionHeading_Gvgb",admonitionIcon:"admonitionIcon_Rf37",admonitionContent:"admonitionContent_BuS1"};function Ke(e){let{type:t,className:n,children:s}=e;return(0,c.jsx)("div",{className:(0,u.c)(b.W.common.admonition,b.W.common.admonitionType(t),Je.admonition,n),children:s})}function Qe(e){let{icon:t,title:n}=e;return(0,c.jsxs)("div",{className:Je.admonitionHeading,children:[(0,c.jsx)("span",{className:Je.admonitionIcon,children:t}),n]})}function Xe(e){let{children:t}=e;return t?(0,c.jsx)("div",{className:Je.admonitionContent,children:t}):null}function et(e){const{type:t,icon:n,title:s,children:a,className:o}=e;return(0,c.jsxs)(Ke,{type:t,className:o,children:[(0,c.jsx)(Qe,{title:s,icon:n}),(0,c.jsx)(Xe,{children:a})]})}function tt(e){return(0,c.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,c.jsx)("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})})}const nt={icon:(0,c.jsx)(tt,{}),title:(0,c.jsx)(g.c,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)",children:"note"})};function st(e){return(0,c.jsx)(et,{...nt,...e,className:(0,u.c)("alert alert--secondary",e.className),children:e.children})}function at(e){return(0,c.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,c.jsx)("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})})}const ot={icon:(0,c.jsx)(at,{}),title:(0,c.jsx)(g.c,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)",children:"tip"})};function ct(e){return(0,c.jsx)(et,{...ot,...e,className:(0,u.c)("alert alert--success",e.className),children:e.children})}function it(e){return(0,c.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,c.jsx)("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})})}const lt={icon:(0,c.jsx)(it,{}),title:(0,c.jsx)(g.c,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)",children:"info"})};function rt(e){return(0,c.jsx)(et,{...lt,...e,className:(0,u.c)("alert alert--info",e.className),children:e.children})}function dt(e){return(0,c.jsx)("svg",{viewBox:"0 0 16 16",...e,children:(0,c.jsx)("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})})}const ut={icon:(0,c.jsx)(dt,{}),title:(0,c.jsx)(g.c,{id:"theme.admonition.warning",description:"The default label used for the Warning admonition (:::warning)",children:"warning"})};function mt(e){return(0,c.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,c.jsx)("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})})}const ht={icon:(0,c.jsx)(mt,{}),title:(0,c.jsx)(g.c,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)",children:"danger"})};const pt={icon:(0,c.jsx)(dt,{}),title:(0,c.jsx)(g.c,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)",children:"caution"})};const ft={...{note:st,tip:ct,info:rt,warning:function(e){return(0,c.jsx)(et,{...ut,...e,className:(0,u.c)("alert alert--warning",e.className),children:e.children})},danger:function(e){return(0,c.jsx)(et,{...ht,...e,className:(0,u.c)("alert alert--danger",e.className),children:e.children})}},...{secondary:e=>(0,c.jsx)(st,{title:"secondary",...e}),important:e=>(0,c.jsx)(rt,{title:"important",...e}),success:e=>(0,c.jsx)(ct,{title:"success",...e}),caution:function(e){return(0,c.jsx)(et,{...pt,...e,className:(0,u.c)("alert alert--warning",e.className),children:e.children})}}};function xt(e){const t=Ze(e),n=(s=t.type,ft[s]||(console.warn(`No admonition component found for admonition type "${s}". Using Info as fallback.`),ft.info));var s;return(0,c.jsx)(n,{...t})}var bt=n(2944);const gt={Head:ae.c,details:$e,Details:$e,code:function(e){return function(e){return void 0!==e.children&&s.Children.toArray(e.children).every((e=>"string"==typeof e&&!e.includes("\n")))}(e)?(0,c.jsx)(Ue,{...e}):(0,c.jsx)(Ie,{...e})},a:function(e){return(0,c.jsx)(C.c,{...e})},pre:function(e){return(0,c.jsx)(c.Fragment,{children:e.children})},ul:function(e){return(0,c.jsx)("ul",{...e,className:qe(e.className)})},li:function(e){return(0,Se.c)().collectAnchor(e.id),(0,c.jsx)("li",{...e})},img:function(e){return(0,c.jsx)("img",{decoding:"async",loading:"lazy",...e,className:(t=e.className,(0,u.c)(t,Ye.img))});var t},h1:e=>(0,c.jsx)(Fe,{as:"h1",...e}),h2:e=>(0,c.jsx)(Fe,{as:"h2",...e}),h3:e=>(0,c.jsx)(Fe,{as:"h3",...e}),h4:e=>(0,c.jsx)(Fe,{as:"h4",...e}),h5:e=>(0,c.jsx)(Fe,{as:"h5",...e}),h6:e=>(0,c.jsx)(Fe,{as:"h6",...e}),admonition:xt,mermaid:bt.c};function vt(e){let{children:t}=e;return(0,c.jsx)(se.I,{components:gt,children:t})}function jt(e){let{children:t}=e;const n=function(){const{metadata:e,frontMatter:t,contentTitle:n}=r();return t.hide_title||void 0!==n?null:e.title}();return(0,c.jsxs)("div",{className:(0,u.c)(b.W.docs.docMarkdown,"markdown"),children:[n&&(0,c.jsx)("header",{children:(0,c.jsx)(ne.c,{as:"h1",children:n})}),(0,c.jsx)(vt,{children:t})]})}var Nt=n(4556);function Ct(){return(0,c.jsx)(g.c,{id:"theme.unlistedContent.title",description:"The unlisted content banner title",children:"Unlisted page"})}function yt(){return(0,c.jsx)(g.c,{id:"theme.unlistedContent.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function kt(){return(0,c.jsx)(ae.c,{children:(0,c.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}function Lt(e){let{className:t}=e;return(0,c.jsx)(xt,{type:"caution",title:(0,c.jsx)(Ct,{}),className:(0,u.c)(t,b.W.common.unlistedBanner),children:(0,c.jsx)(yt,{})})}function _t(e){return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(kt,{}),(0,c.jsx)(Lt,{...e})]})}const Bt={docItemContainer:"docItemContainer_Djhp",docItemCol:"docItemCol_VOVn"};function wt(e){let{children:t}=e;const n=function(){const{frontMatter:e,toc:t}=r(),n=(0,m.U)(),s=e.hide_table_of_contents,a=!s&&t.length>0;return{hidden:s,mobile:a?(0,c.jsx)(J,{}):void 0,desktop:!a||"desktop"!==n&&"ssr"!==n?void 0:(0,c.jsx)(te,{})}}(),{metadata:{unlisted:s}}=r();return(0,c.jsxs)("div",{className:"row",children:[(0,c.jsxs)("div",{className:(0,u.c)("col",!n.hidden&&Bt.docItemCol),children:[s&&(0,c.jsx)(_t,{}),(0,c.jsx)(f.c,{}),(0,c.jsxs)("div",{className:Bt.docItemContainer,children:[(0,c.jsxs)("article",{children:[(0,c.jsx)(Nt.c,{}),(0,c.jsx)(x.c,{}),n.mobile,(0,c.jsx)(jt,{children:t}),(0,c.jsx)(M,{})]}),(0,c.jsx)(p,{})]})]}),n.desktop&&(0,c.jsx)("div",{className:"col col--3",children:n.desktop})]})}function Tt(e){const t=`docs-doc-id-${e.content.metadata.id}`,n=e.content;return(0,c.jsx)(l,{content:e.content,children:(0,c.jsxs)(a.cr,{className:t,children:[(0,c.jsx)(d,{}),(0,c.jsx)(wt,{children:(0,c.jsx)(n,{})})]})})}},9236:(e,t,n)=>{"use strict";n.d(t,{c:()=>l});n(1504);var s=n(4357),a=n(5456),o=n(867),c=n(7624);function i(e){const{permalink:t,title:n,subLabel:s,isNext:i}=e;return(0,c.jsxs)(o.c,{className:(0,a.c)("pagination-nav__link",i?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t,children:[s&&(0,c.jsx)("div",{className:"pagination-nav__sublabel",children:s}),(0,c.jsx)("div",{className:"pagination-nav__label",children:n})]})}function l(e){const{previous:t,next:n}=e;return(0,c.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,s.G)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"}),children:[t&&(0,c.jsx)(i,{...t,subLabel:(0,c.jsx)(s.c,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc",children:"Previous"})}),n&&(0,c.jsx)(i,{...n,subLabel:(0,c.jsx)(s.c,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc",children:"Next"}),isNext:!0})]})}},8092:(e,t,n)=>{"use strict";n.d(t,{c:()=>l});n(1504);var s=n(5456),a=n(4357),o=n(5864),c=n(9920),i=n(7624);function l(e){let{className:t}=e;const n=(0,c.E)();return n.badge?(0,i.jsx)("span",{className:(0,s.c)(t,o.W.docs.docVersionBadge,"badge badge--secondary"),children:(0,i.jsx)(a.c,{id:"theme.docs.versionBadge.label",values:{versionLabel:n.label},children:"Version: {versionLabel}"})}):null}},2136:(e,t,n)=>{"use strict";n.d(t,{c:()=>x});n(1504);var s=n(5456),a=n(8264),o=n(867),c=n(4357),i=n(2840),l=n(5864),r=n(4592),d=n(9920),u=n(7624);const m={unreleased:function(e){let{siteTitle:t,versionMetadata:n}=e;return(0,u.jsx)(c.c,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:(0,u.jsx)("b",{children:n.label})},children:"This is unreleased documentation for {siteTitle} {versionLabel} version."})},unmaintained:function(e){let{siteTitle:t,versionMetadata:n}=e;return(0,u.jsx)(c.c,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:(0,u.jsx)("b",{children:n.label})},children:"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained."})}};function h(e){const t=m[e.versionMetadata.banner];return(0,u.jsx)(t,{...e})}function p(e){let{versionLabel:t,to:n,onClick:s}=e;return(0,u.jsx)(c.c,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:(0,u.jsx)("b",{children:(0,u.jsx)(o.c,{to:n,onClick:s,children:(0,u.jsx)(c.c,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label",children:"latest version"})})})},children:"For up-to-date documentation, see the {latestVersionLink} ({versionLabel})."})}function f(e){let{className:t,versionMetadata:n}=e;const{siteConfig:{title:o}}=(0,a.c)(),{pluginId:c}=(0,i.UF)({failfast:!0}),{savePreferredVersionName:d}=(0,r.iy)(c),{latestDocSuggestion:m,latestVersionSuggestion:f}=(0,i.i8)(c),x=m??(b=f).docs.find((e=>e.id===b.mainDocId));var b;return(0,u.jsxs)("div",{className:(0,s.c)(t,l.W.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert",children:[(0,u.jsx)("div",{children:(0,u.jsx)(h,{siteTitle:o,versionMetadata:n})}),(0,u.jsx)("div",{className:"margin-top--md",children:(0,u.jsx)(p,{versionLabel:f.label,to:x.path,onClick:()=>d(f.name)})})]})}function x(e){let{className:t}=e;const n=(0,d.E)();return n.banner?(0,u.jsx)(f,{className:t,versionMetadata:n}):null}},6504:(e,t)=>{function n(e){let t,n=[];for(let s of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(s))n.push(parseInt(s,10));else if(t=s.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,s,a,o]=t;if(s&&o){s=parseInt(s),o=parseInt(o);const e=s<o?1:-1;"-"!==a&&".."!==a&&"\u2025"!==a||(o+=e);for(let t=s;t!==o;t+=e)n.push(t)}}return n}t.default=n,e.exports=n},2172:(e,t,n)=>{"use strict";n.d(t,{I:()=>i,M:()=>c});var s=n(1504);const a={},o=s.createContext(a);function c(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:c(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);