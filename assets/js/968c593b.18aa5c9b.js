"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[970],{6080:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>u,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var a=r(7624),n=r(2172);r(1268),r(5388);const s={sidebar_position:1},u="Create a status effect",o={id:"statuses/create-a-status",title:"Create a status effect",description:"",source:"@site/docs/statuses/create-a-status.md",sourceDirName:"statuses",slug:"/statuses/create-a-status",permalink:"/WCS/docs/statuses/create-a-status",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Status Effects",permalink:"/WCS/docs/category/status-effects"},next:{title:"Extras",permalink:"/WCS/docs/category/extras"}},l={},c=[];function i(e){const t={h1:"h1",...(0,n.M)(),...e.components};return(0,a.jsx)(t.h1,{id:"create-a-status-effect",children:"Create a status effect"})}function d(e={}){const{wrapper:t}={...(0,n.M)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(i,{...e})}):i(e)}},5388:(e,t,r)=>{r.d(t,{c:()=>u});r(1504);var a=r(5456);const n={tabItem:"tabItem_Ymn6"};var s=r(7624);function u(e){let{children:t,hidden:r,className:u}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.c)(n.tabItem,u),hidden:r,children:t})}},1268:(e,t,r)=>{r.d(t,{c:()=>I});var a=r(1504),n=r(5456),s=r(3943),u=r(5592),o=r(5288),l=r(632),c=r(7128),i=r(1148);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function f(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:r,attributes:a,default:n}}=e;return{value:t,label:r,attributes:a,default:n}}))}(r);return function(e){const t=(0,c.w)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function b(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:r}=e;const n=(0,u.Uz)(),s=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,l._M)(s),(0,a.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(n.location.search);t.set(s,e),n.replace({...n.location,search:t.toString()})}),[s,n])]}function m(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,s=f(e),[u,l]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!b({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:s}))),[c,d]=p({queryString:r,groupId:n}),[m,h]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,s]=(0,i.IN)(r);return[n,(0,a.useCallback)((e=>{r&&s.set(e)}),[r,s])]}({groupId:n}),v=(()=>{const e=c??m;return b({value:e,tabValues:s})?e:null})();(0,o.c)((()=>{v&&l(v)}),[v]);return{selectedValue:u,selectValue:(0,a.useCallback)((e=>{if(!b({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),h(e)}),[d,h,s]),tabValues:s}}var h=r(3664);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=r(7624);function y(e){let{className:t,block:r,selectedValue:a,selectValue:u,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.MV)(),i=e=>{const t=e.currentTarget,r=l.indexOf(t),n=o[r].value;n!==a&&(c(t),u(n))},d=e=>{let t=null;switch(e.key){case"Enter":i(e);break;case"ArrowRight":{const r=l.indexOf(e.currentTarget)+1;t=l[r]??l[0];break}case"ArrowLeft":{const r=l.indexOf(e.currentTarget)-1;t=l[r]??l[l.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.c)("tabs",{"tabs--block":r},t),children:o.map((e=>{let{value:t,label:r,attributes:s}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>l.push(e),onKeyDown:d,onClick:i,...s,className:(0,n.c)("tabs__item",v.tabItem,s?.className,{"tabs__item--active":a===t}),children:r??t},t)}))})}function w(e){let{lazy:t,children:r,selectedValue:n}=e;const s=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n})))})}function x(e){const t=m(e);return(0,g.jsxs)("div",{className:(0,n.c)("tabs-container",v.tabList),children:[(0,g.jsx)(y,{...e,...t}),(0,g.jsx)(w,{...e,...t})]})}function I(e){const t=(0,h.c)();return(0,g.jsx)(x,{...e,children:d(e.children)},String(t))}},2172:(e,t,r)=>{r.d(t,{I:()=>o,M:()=>u});var a=r(1504);const n={},s=a.createContext(n);function u(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:u(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);