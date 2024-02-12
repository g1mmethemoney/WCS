"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[970],{6080:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var a=r(7624),n=r(2172),s=r(1268),u=r(5388);const l={sidebar_position:1},o="Create a status effect",i={id:"statuses/create-a-status",title:"Create a status effect",description:"Status Effects in WCS are classes that represent side-effects. The usage is very similar to skills, you also define their behavior by",source:"@site/docs/statuses/create-a-status.md",sourceDirName:"statuses",slug:"/statuses/create-a-status",permalink:"/WCS/docs/statuses/create-a-status",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Status Effects",permalink:"/WCS/docs/category/status-effects"},next:{title:"Movesets",permalink:"/WCS/docs/category/movesets"}},c={},d=[];function f(e){const t={code:"code",em:"em",h1:"h1",p:"p",pre:"pre",strong:"strong",...(0,n.M)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"create-a-status-effect",children:"Create a status effect"}),"\n","\n","\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.em,{children:"Status Effects"})," in ",(0,a.jsx)(t.strong,{children:"WCS"})," are classes that represent ",(0,a.jsx)(t.em,{children:"side-effects"}),". The usage is very similar to skills, you also ",(0,a.jsx)(t.em,{children:"define their behavior by"}),"\noverriding ",(0,a.jsx)(t.em,{children:"default methods"}),". They also provide ",(0,a.jsx)(t.em,{children:"useful tooling"})," for manipulating ",(0,a.jsx)(t.em,{children:"roblox humanoid stats"}),", e.g, setting the walkspeed\nwhen the player should be stunned."]}),"\n",(0,a.jsx)(t.p,{children:"Let's register a simple status effect:"}),"\n",(0,a.jsxs)(s.c,{groupId:"languages",children:[(0,a.jsx)(u.c,{value:"TypeScript",default:!0,children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-ts",metastring:'title="attack.ts" showLineNumbers',children:'import { StatusEffect, StatusEffectDecorator } from "@rbxts/wcs";\n\n@StatusEffectDecorator\nexport class Stun extends StatusEffect {}\n'})})}),(0,a.jsx)(u.c,{value:"Luau",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-lua",metastring:'title="attack.lua" showLineNumbers',children:'local ReplicatedStorage = game:GetService("ReplicatedStorage")\nlocal WCS = require(ReplicatedStorage.WCS)\n\nlocal Stun = WCS.RegisterStatusEffect("Stun")\n\nreturn Stun\n'})})})]})]})}function h(e={}){const{wrapper:t}={...(0,n.M)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(f,{...e})}):f(e)}},5388:(e,t,r)=>{r.d(t,{c:()=>u});r(1504);var a=r(5456);const n={tabItem:"tabItem_Ymn6"};var s=r(7624);function u(e){let{children:t,hidden:r,className:u}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.c)(n.tabItem,u),hidden:r,children:t})}},1268:(e,t,r)=>{r.d(t,{c:()=>j});var a=r(1504),n=r(5456),s=r(3943),u=r(5592),l=r(5288),o=r(632),i=r(7128),c=r(1148);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function f(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:r,attributes:a,default:n}}=e;return{value:t,label:r,attributes:a,default:n}}))}(r);return function(e){const t=(0,i.w)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function h(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:r}=e;const n=(0,u.Uz)(),s=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,o._M)(s),(0,a.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(n.location.search);t.set(s,e),n.replace({...n.location,search:t.toString()})}),[s,n])]}function m(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,s=f(e),[u,o]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:s}))),[i,d]=p({queryString:r,groupId:n}),[m,b]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,s]=(0,c.IN)(r);return[n,(0,a.useCallback)((e=>{r&&s.set(e)}),[r,s])]}({groupId:n}),g=(()=>{const e=i??m;return h({value:e,tabValues:s})?e:null})();(0,l.c)((()=>{g&&o(g)}),[g]);return{selectedValue:u,selectValue:(0,a.useCallback)((e=>{if(!h({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),b(e)}),[d,b,s]),tabValues:s}}var b=r(3664);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=r(7624);function x(e){let{className:t,block:r,selectedValue:a,selectValue:u,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:i}=(0,s.MV)(),c=e=>{const t=e.currentTarget,r=o.indexOf(t),n=l[r].value;n!==a&&(i(t),u(n))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const r=o.indexOf(e.currentTarget)+1;t=o[r]??o[0];break}case"ArrowLeft":{const r=o.indexOf(e.currentTarget)-1;t=o[r]??o[o.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.c)("tabs",{"tabs--block":r},t),children:l.map((e=>{let{value:t,label:r,attributes:s}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>o.push(e),onKeyDown:d,onClick:c,...s,className:(0,n.c)("tabs__item",g.tabItem,s?.className,{"tabs__item--active":a===t}),children:r??t},t)}))})}function y(e){let{lazy:t,children:r,selectedValue:n}=e;const s=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n})))})}function S(e){const t=m(e);return(0,v.jsxs)("div",{className:(0,n.c)("tabs-container",g.tabList),children:[(0,v.jsx)(x,{...e,...t}),(0,v.jsx)(y,{...e,...t})]})}function j(e){const t=(0,b.c)();return(0,v.jsx)(S,{...e,children:d(e.children)},String(t))}},2172:(e,t,r)=>{r.d(t,{I:()=>l,M:()=>u});var a=r(1504);const n={},s=a.createContext(n);function u(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:u(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);