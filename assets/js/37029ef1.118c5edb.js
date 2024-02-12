"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[876],{5356:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var n=r(7624),a=r(2172),l=r(1268),s=r(5388);const i={sidebar_position:5},c="Start an ability",o={id:"skills/start-an-ability",title:"Start an ability",description:"Let's bind our ability start to some user input.",source:"@site/docs/skills/start-an-ability.md",sourceDirName:"skills",slug:"/skills/start-an-ability",permalink:"/WCS/docs/skills/start-an-ability",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Replication Explained",permalink:"/WCS/docs/skills/replication-explained"},next:{title:"Holdable Abilities",permalink:"/WCS/docs/skills/holdable"}},u={},d=[];function h(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",p:"p",pre:"pre",...(0,a.M)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"start-an-ability",children:"Start an ability"}),"\n","\n","\n",(0,n.jsxs)(t.p,{children:["Let's ",(0,n.jsx)(t.em,{children:"bind"})," our ability start to some ",(0,n.jsx)(t.em,{children:"user input"}),".\nTo achieve this, we need to modify our ",(0,n.jsx)(t.code,{children:"client.ts"})," file, so that it could\nlisten to user input and start the skill we need."]}),"\n",(0,n.jsxs)(t.p,{children:["Then, when ",(0,n.jsx)(t.em,{children:"a user makes an input"})," it should get the ",(0,n.jsx)(t.em,{children:(0,n.jsx)(t.a,{href:"/WCS/docs/skills/replication-explained",children:"replicated character wrap"})}),", get the skill and request the launch by calling ",(0,n.jsx)(t.code,{children:"Start"}),"."]}),"\n",(0,n.jsxs)(l.c,{groupId:"languages",children:[(0,n.jsx)(s.c,{value:"TypeScript",default:!0,children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",metastring:'title="client.ts" showLineNumbers',children:'import { Players, UserInputService } from "@rbxts/services";\nimport { Character } from "@rbxts/wcs";\nimport { Attack } from "shared/skills/attack";\n\n// get the replicated character wrap of local player\'s current character\nfunction getCurrentWCS_Character() {\n\tconst characterModel = Players.LocalPlayer.Character;\n\tif (!characterModel) return;\n\n\treturn Character.GetCharacterFromInstance_TS(characterModel);\n}\n\nUserInputService.InputBegan.Connect((Input, GameProcessed) => {\n\tif (GameProcessed) return;\n\tif (Input.UserInputType === Enum.UserInputType.MouseButton1) {\n\t\t// get and start the "attack" when we left click\n\t\tconst character = getCurrentWCS_Character();\n\t\tcharacter?.GetSkillFromConstructor(Attack)?.Start();\n\t}\n});\n'})})}),(0,n.jsx)(s.c,{value:"Luau",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-lua",metastring:'title="attack.lua" showLineNumbers',children:'local ReplicatedStorage = game:GetService("ReplicatedStorage")\nlocal Players = game:GetService("Players")\nlocal UserInputService = game:GetService("UserInputService")\n\nlocal WCS = require(ReplicatedStorage.WCS)\nlocal Attack = require(ReplicatedStorage.Skills.Attack)\nlocal Character = WCS.Character\n\nfunction getCurrentWCS_Character()\n\tlocal characterModel = Players.LocalPlayer.Character;\n\tif not characterModel then return end\n\n\treturn Character.GetCharacterFromInstance(characterModel)\nend\n\nUserInputService.InputBegan:Connect(function(Input, GameProcessed)\n\tif GameProcessed then return end\n\tif Input.UserInputState ~= Enum.UserInputState.Begin then return end\n\n\tif Input.UserInputType == Enum.UserInputType.MouseButton1 then\n\t\tlocal character = getCurrentWCS_Character()\n\t\tif not character then return end\n\n\t\tcharacter:GetSkillFromConstructor(Attack):Start()\n\tend\nend)\n'})})})]}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsxs)(t.p,{children:["Remember that if you ",(0,n.jsx)(t.em,{children:"request an action"})," like ",(0,n.jsx)(t.code,{children:"Start"})," or ",(0,n.jsx)(t.code,{children:"End"})," on client, it will just make ",(0,n.jsx)(t.em,{children:"a remote request"})," to server for it to perform the action."]})})]})}function p(e={}){const{wrapper:t}={...(0,a.M)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},5388:(e,t,r)=>{r.d(t,{c:()=>s});r(1504);var n=r(5456);const a={tabItem:"tabItem_Ymn6"};var l=r(7624);function s(e){let{children:t,hidden:r,className:s}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,n.c)(a.tabItem,s),hidden:r,children:t})}},1268:(e,t,r)=>{r.d(t,{c:()=>k});var n=r(1504),a=r(5456),l=r(3943),s=r(5592),i=r(5288),c=r(632),o=r(7128),u=r(1148);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}(r);return function(e){const t=(0,o.w)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function p(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:r}=e;const a=(0,s.Uz)(),l=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,c._M)(l),(0,n.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(a.location.search);t.set(l,e),a.replace({...a.location,search:t.toString()})}),[l,a])]}function f(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,l=h(e),[s,c]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[o,d]=m({queryString:r,groupId:a}),[f,b]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,l]=(0,u.IN)(r);return[a,(0,n.useCallback)((e=>{r&&l.set(e)}),[r,l])]}({groupId:a}),g=(()=>{const e=o??f;return p({value:e,tabValues:l})?e:null})();(0,i.c)((()=>{g&&c(g)}),[g]);return{selectedValue:s,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);c(e),d(e),b(e)}),[d,b,l]),tabValues:l}}var b=r(3664);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=r(7624);function y(e){let{className:t,block:r,selectedValue:n,selectValue:s,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:o}=(0,l.MV)(),u=e=>{const t=e.currentTarget,r=c.indexOf(t),a=i[r].value;a!==n&&(o(t),s(a))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;t=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;t=c[r]??c[c.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.c)("tabs",{"tabs--block":r},t),children:i.map((e=>{let{value:t,label:r,attributes:l}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>c.push(e),onKeyDown:d,onClick:u,...l,className:(0,a.c)("tabs__item",g.tabItem,l?.className,{"tabs__item--active":n===t}),children:r??t},t)}))})}function x(e){let{lazy:t,children:r,selectedValue:a}=e;const l=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:l.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function S(e){const t=f(e);return(0,v.jsxs)("div",{className:(0,a.c)("tabs-container",g.tabList),children:[(0,v.jsx)(y,{...e,...t}),(0,v.jsx)(x,{...e,...t})]})}function k(e){const t=(0,b.c)();return(0,v.jsx)(S,{...e,children:d(e.children)},String(t))}},2172:(e,t,r)=>{r.d(t,{I:()=>i,M:()=>s});var n=r(1504);const a={},l=n.createContext(a);function s(e){const t=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),n.createElement(l.Provider,{value:t},e.children)}}}]);