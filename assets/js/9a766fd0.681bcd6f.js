"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[532],{7652:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var r=a(7624),n=a(2172),l=a(1268),o=a(5388);const s={sidebar_position:2},i="Applying abilities",c={id:"skills/applying",title:"Applying abilities",description:"To apply your ability to a character in WCS you need to instantiate an ability class providing a Character Class Instance.",source:"@site/docs/skills/applying.md",sourceDirName:"skills",slug:"/skills/applying",permalink:"/WCS/docs/skills/applying",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Create an ability",permalink:"/WCS/docs/skills/create-a-skill"},next:{title:"Define The Behavior",permalink:"/WCS/docs/skills/define-the-behaviour"}},u={},d=[];function h(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",p:"p",pre:"pre",strong:"strong",...(0,n.M)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"applying-abilities",children:"Applying abilities"}),"\n","\n","\n",(0,r.jsxs)(t.p,{children:["To apply your ",(0,r.jsx)(t.em,{children:"ability"})," to a character in ",(0,r.jsx)(t.strong,{children:"WCS"})," you need to instantiate ",(0,r.jsx)(t.em,{children:"an ability class"})," providing a ",(0,r.jsx)(t.code,{children:"Character Class Instance"}),"."]}),"\n",(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsxs)(t.p,{children:["If you want to get the ",(0,r.jsx)(t.code,{children:"Character Class Instance"})," from ",(0,r.jsx)(t.em,{children:"a model its applied to"})," you can use a ",(0,r.jsx)(t.em,{children:"special static method"})," provided by ",(0,r.jsx)(t.strong,{children:"WCS"}),":\n",(0,r.jsx)(t.code,{children:"Character.GetCharacterFromInstance()"}),"."]})}),"\n",(0,r.jsx)(t.admonition,{type:"info",children:(0,r.jsxs)(t.p,{children:["If you want to apply/remove multiple abilities at the same time, consider looking into ",(0,r.jsx)(t.a,{href:"../movesets/create-a-moveset",children:"movesets"}),"."]})}),"\n",(0,r.jsxs)(t.p,{children:["Let's modify our ",(0,r.jsx)(t.em,{children:"character file/script"})," to apply our ability:"]}),"\n",(0,r.jsxs)(l.c,{groupId:"languages",children:[(0,r.jsx)(o.c,{value:"TypeScript",default:!0,children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",metastring:'title="character.ts" showLineNumbers {10-11}',children:'import { Players } from "@rbxts/services";\nimport { Character } from "@rbxts/wcs";\nimport { Attack } from "shared/attack";\n\nPlayers.PlayerAdded.Connect((Player) => {\n\tPlayer.CharacterAdded.Connect((CharacterModel) => {\n\t\t// apply the wrap when character model gets created\n\t\tconst WCS_Character = new Character(CharacterModel);\n\n\t\t// apply our freshly made skill\n\t\tnew Attack(WCS_Character);\n\n\t\t// destroy it when humanoid dies\n\t\tconst humanoid = CharacterModel.WaitForChild("Humanoid") as Humanoid;\n\t\thumanoid.Died.Once(() => WCS_Character.Destroy());\n\t});\n});\n'})})}),(0,r.jsx)(o.c,{value:"Luau",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-lua",metastring:'title="character.lua" showLineNumbers {13-14}',children:'local Players = game:GetService("Players")\nlocal ReplicatedStorage = game:GetService("ReplicatedStorage")\n\nlocal WCS = require(ReplicatedStorage.WCS)\nlocal Attack = require(ReplicatedStorage.Attack)\nlocal Character = WCS.Character\n\nPlayers.PlayerAdded:Connect(function(Player)\n    Player.CharacterAdded:Connect(function(CharacterModel)\n    \t-- apply the wrap when character model gets created\n        local WCS_Character = Character.new(CharacterModel)\n\t\t\n\t-- apply our freshly made skill\n\tAttack.new(WCS_Character)\n\n        -- destroy it when humanoid dies\n        local Humanoid = CharacterModel:WaitForChild("Humanoid")\n        Humanoid.Died:Once(function()\n            WCS_Character:Destroy()\n        end)\n    end)\nend)\n'})})})]}),"\n",(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsxs)(t.p,{children:["In order to remove an ability from a character you got to call ",(0,r.jsx)(t.code,{children:"Destroy()"})," on its instance.\nTo get the instance from the name/constructor you can use the following ",(0,r.jsx)(t.strong,{children:"WCS"})," APIs:\n",(0,r.jsx)(t.code,{children:"Character:GetSkillFromConstructor()"}),", ",(0,r.jsx)(t.code,{children:"Character:GetSkillFromString()"})]})})]})}function p(e={}){const{wrapper:t}={...(0,n.M)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},5388:(e,t,a)=>{a.d(t,{c:()=>o});a(1504);var r=a(5456);const n={tabItem:"tabItem_Ymn6"};var l=a(7624);function o(e){let{children:t,hidden:a,className:o}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,r.c)(n.tabItem,o),hidden:a,children:t})}},1268:(e,t,a)=>{a.d(t,{c:()=>j});var r=a(1504),n=a(5456),l=a(3943),o=a(5592),s=a(5288),i=a(632),c=a(7128),u=a(1148);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:n}}=e;return{value:t,label:a,attributes:r,default:n}}))}(a);return function(e){const t=(0,c.w)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function p(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:a}=e;const n=(0,o.Uz)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,i._M)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function f(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,l=h(e),[o,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:l}))),[c,d]=m({queryString:a,groupId:n}),[f,b]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,l]=(0,u.IN)(a);return[n,(0,r.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:n}),y=(()=>{const e=c??f;return p({value:e,tabValues:l})?e:null})();(0,s.c)((()=>{y&&i(y)}),[y]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),b(e)}),[d,b,l]),tabValues:l}}var b=a(3664);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=a(7624);function C(e){let{className:t,block:a,selectedValue:r,selectValue:o,tabValues:s}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.MV)(),u=e=>{const t=e.currentTarget,a=i.indexOf(t),n=s[a].value;n!==r&&(c(t),o(n))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const a=i.indexOf(e.currentTarget)+1;t=i[a]??i[0];break}case"ArrowLeft":{const a=i.indexOf(e.currentTarget)-1;t=i[a]??i[i.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.c)("tabs",{"tabs--block":a},t),children:s.map((e=>{let{value:t,label:a,attributes:l}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>i.push(e),onKeyDown:d,onClick:u,...l,className:(0,n.c)("tabs__item",y.tabItem,l?.className,{"tabs__item--active":r===t}),children:a??t},t)}))})}function v(e){let{lazy:t,children:a,selectedValue:n}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n})))})}function x(e){const t=f(e);return(0,g.jsxs)("div",{className:(0,n.c)("tabs-container",y.tabList),children:[(0,g.jsx)(C,{...e,...t}),(0,g.jsx)(v,{...e,...t})]})}function j(e){const t=(0,b.c)();return(0,g.jsx)(x,{...e,children:d(e.children)},String(t))}},2172:(e,t,a)=>{a.d(t,{I:()=>s,M:()=>o});var r=a(1504);const n={},l=r.createContext(n);function o(e){const t=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),r.createElement(l.Provider,{value:t},e.children)}}}]);