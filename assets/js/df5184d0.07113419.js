"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8],{6244:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var i=n(7624),s=n(2172);const o={sidebar_position:9},r="Ability State",c={id:"skills/state",title:"Ability State",description:"Ability State is an object represents current state of an ability and can be obtained with a GetState() method or inside StateChanged event.",source:"@site/docs/skills/state.md",sourceDirName:"skills",slug:"/skills/state",permalink:"/WCS/docs/skills/state",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"Messages",permalink:"/WCS/docs/skills/messages"},next:{title:"Status Effects",permalink:"/WCS/docs/category/status-effects"}},a={},l=[{value:"What abilities <strong>WCS</strong> considers &quot;Active&quot;?",id:"what-abilities-wcs-considers-active",level:3}];function d(e){const t={admonition:"admonition",code:"code",em:"em",h1:"h1",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"ability-state",children:"Ability State"}),"\n",(0,i.jsxs)(t.p,{children:["Ability State is an object represents current state of an ability and can be obtained with a ",(0,i.jsx)(t.code,{children:"GetState()"})," method or inside ",(0,i.jsx)(t.code,{children:"StateChanged"})," event.\nIt can be useful to ",(0,i.jsx)(t.em,{children:"display some information"})," about your ability, e.g, whenever its currently ",(0,i.jsx)(t.em,{children:"active or on debounce"}),"."]}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"StateChanged"})," is deffered and safe to use in react components."]})}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"State Object"})," itself looks like this:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["IsActive: ",(0,i.jsx)(t.code,{children:"boolean"})," - Determines if an ability is currently ",(0,i.jsx)(t.em,{children:"active"})," or not"]}),"\n",(0,i.jsxs)(t.li,{children:["Debounce: ",(0,i.jsx)(t.code,{children:"boolean"})," - Determines if an ability is currently ",(0,i.jsx)(t.em,{children:"on cooldown"})," or not"]}),"\n"]}),"\n",(0,i.jsxs)(t.h3,{id:"what-abilities-wcs-considers-active",children:["What abilities ",(0,i.jsx)(t.strong,{children:"WCS"}),' considers "Active"?']}),"\n",(0,i.jsxs)(t.p,{children:["All abilities that have ",(0,i.jsx)(t.code,{children:"OnStartServer()"})," method ",(0,i.jsx)(t.em,{children:"currently executing"})," are considered ",(0,i.jsx)(t.strong,{children:"active"}),"."]}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsxs)(t.p,{children:["It is a ",(0,i.jsx)(t.strong,{children:"good practice"})," to yield your code inside ",(0,i.jsx)(t.code,{children:"OnStartServer()"})]})}),"\n",(0,i.jsxs)(t.p,{children:["Here is an ",(0,i.jsx)(t.em,{children:"execution schema"})," of how it works internally:"]})]})}function h(e={}){const{wrapper:t}={...(0,s.M)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},2172:(e,t,n)=>{n.d(t,{I:()=>c,M:()=>r});var i=n(1504);const s={},o=i.createContext(s);function r(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);