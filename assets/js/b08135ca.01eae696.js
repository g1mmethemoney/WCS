"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[188],{8532:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>c,metadata:()=>i,toc:()=>d});var a=r(7624),n=r(2172),s=r(1268),l=r(5388);const c={sidebar_position:2},o="Character Setup",i={id:"basics/character",title:"Character Setup",description:"WCS provides a special Character class that wraps around player's character model.",source:"@site/docs/basics/character.md",sourceDirName:"basics",slug:"/basics/character",permalink:"/docs/basics/character",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Client / Server Setup",permalink:"/docs/basics/client-server"},next:{title:"Tutorial - Abilities",permalink:"/docs/category/tutorial---abilities"}},u={},d=[];function h(e){const t={code:"code",em:"em",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,n.M)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"character-setup",children:"Character Setup"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"WCS"})," provides a special ",(0,a.jsx)(t.code,{children:"Character"})," class that ",(0,a.jsx)(t.em,{children:"wraps"})," around player's character model.\nWhenever a ",(0,a.jsx)(t.strong,{children:"character"})," that will take action in the combat spawns, you should instantiate the class."]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["To not create ",(0,a.jsx)(t.strong,{children:"a memory leak"})," always destroy the wrap when the humanoid dies."]}),"\n"]}),"\n",(0,a.jsxs)(s.c,{groupId:"languages",children:[(0,a.jsx)(l.c,{value:"TypeScript",default:!0,children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-ts",metastring:'title="character.ts" showLineNumbers',children:'import { Players } from "@rbxts/services";\nimport { Character } from "@rbxts/wcs";\n\nPlayers.PlayerAdded.Connect((Player) => {\n\tPlayer.CharacterAdded.Connect((CharacterModel) => {\n\t\t// apply the wrap when character model gets created\n\t\tconst WCS_Character = new Character(CharacterModel);\n\n\t\t// destroy it when humanoid dies\n\t\tconst humanoid = CharacterModel.WaitForChild("Humanoid") as Humanoid;\n\t\thumanoid.Died.Once(() => WCS_Character.Destroy());\n\t});\n});\n'})})}),(0,a.jsx)(l.c,{value:"Luau",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-lua",metastring:'title="character.lua" showLineNumbers',children:'local Players = game:GetService("Players")\nlocal ReplicatedStorage = game:GetService("ReplicatedStorage")\n\nlocal WCS = require(ReplicatedStorage.WCS)\nlocal Character = WCS.Character\n\nPlayers.PlayerAdded:Connect(function(Player)\n    Player.CharacterAdded:Connect(function(CharacterModel)\n    \t-- apply the wrap when character model gets created\n        local WCS_Character = Character.new(CharacterModel)\n\n        -- destroy it when humanoid dies\n        local Humanoid = CharacterModel:WaitForChild("Humanoid")\n        Humanoid.Died:Once(function()\n            WCS_Character:Destroy()\n        end)\n    end)\nend)\n'})})})]})]})}function p(e={}){const{wrapper:t}={...(0,n.M)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},5388:(e,t,r)=>{r.d(t,{c:()=>l});r(1504);var a=r(5456);const n={tabItem:"tabItem_Ymn6"};var s=r(7624);function l(e){let{children:t,hidden:r,className:l}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.c)(n.tabItem,l),hidden:r,children:t})}},1268:(e,t,r)=>{r.d(t,{c:()=>x});var a=r(1504),n=r(5456),s=r(3943),l=r(5592),c=r(5288),o=r(632),i=r(7128),u=r(1148);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:r,attributes:a,default:n}}=e;return{value:t,label:r,attributes:a,default:n}}))}(r);return function(e){const t=(0,i.w)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function p(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:r}=e;const n=(0,l.Uz)(),s=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,o._M)(s),(0,a.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(n.location.search);t.set(s,e),n.replace({...n.location,search:t.toString()})}),[s,n])]}function b(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,s=h(e),[l,o]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:s}))),[i,d]=m({queryString:r,groupId:n}),[b,f]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,s]=(0,u.IN)(r);return[n,(0,a.useCallback)((e=>{r&&s.set(e)}),[r,s])]}({groupId:n}),v=(()=>{const e=i??b;return p({value:e,tabValues:s})?e:null})();(0,c.c)((()=>{v&&o(v)}),[v]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),f(e)}),[d,f,s]),tabValues:s}}var f=r(3664);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=r(7624);function y(e){let{className:t,block:r,selectedValue:a,selectValue:l,tabValues:c}=e;const o=[],{blockElementScrollPositionUntilNextRender:i}=(0,s.MV)(),u=e=>{const t=e.currentTarget,r=o.indexOf(t),n=c[r].value;n!==a&&(i(t),l(n))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const r=o.indexOf(e.currentTarget)+1;t=o[r]??o[0];break}case"ArrowLeft":{const r=o.indexOf(e.currentTarget)-1;t=o[r]??o[o.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.c)("tabs",{"tabs--block":r},t),children:c.map((e=>{let{value:t,label:r,attributes:s}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>o.push(e),onKeyDown:d,onClick:u,...s,className:(0,n.c)("tabs__item",v.tabItem,s?.className,{"tabs__item--active":a===t}),children:r??t},t)}))})}function C(e){let{lazy:t,children:r,selectedValue:n}=e;const s=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n})))})}function w(e){const t=b(e);return(0,g.jsxs)("div",{className:(0,n.c)("tabs-container",v.tabList),children:[(0,g.jsx)(y,{...e,...t}),(0,g.jsx)(C,{...e,...t})]})}function x(e){const t=(0,f.c)();return(0,g.jsx)(w,{...e,children:d(e.children)},String(t))}},2172:(e,t,r)=>{r.d(t,{I:()=>c,M:()=>l});var a=r(1504);const n={},s=a.createContext(n);function l(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);