"use strict";(self.webpackChunkying_winwin=self.webpackChunkying_winwin||[]).push([[743],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return c}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),m=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=m(e.components);return a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=m(n),c=r,k=d["".concat(u,".").concat(c)]||d[c]||s[c]||l;return n?a.createElement(k,i(i({ref:t},p),{},{components:n})):a.createElement(k,i({ref:t},p))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var m=2;m<l;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8137:function(e,t,n){n.r(t),n.d(t,{assets:function(){return w},contentTitle:function(){return f},default:function(){return C},frontMatter:function(){return b},metadata:function(){return y},toc:function(){return T}});var a=n(7462),r=n(3366),l=n(7294),i=n(3905),o=n(6010),u=n(2389),m=n(7392),p=n(7094),s=n(2466),d="tabList__CuJ",c="tabItem_LNqP";function k(e){var t,n,r=e.lazy,i=e.block,u=e.defaultValue,k=e.values,h=e.groupId,v=e.className,g=l.Children.map(e.children,(function(e){if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),N=null!=k?k:g.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,m.l)(N,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var f=null===u?u:null!=(t=null!=u?u:null==(n=g.find((function(e){return e.props.default})))?void 0:n.props.value)?t:g[0].props.value;if(null!==f&&!N.some((function(e){return e.value===f})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+f+'" but none of its children has the corresponding value. Available values are: '+N.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,p.U)(),w=y.tabGroupChoices,T=y.setTabGroupChoices,x=(0,l.useState)(f),C=x[0],O=x[1],E=[],I=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var j=w[h];null!=j&&j!==C&&N.some((function(e){return e.value===j}))&&O(j)}var M=function(e){var t=e.currentTarget,n=E.indexOf(t),a=N[n].value;a!==C&&(I(t),O(a),null!=h&&T(h,String(a)))},D=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a,r=E.indexOf(e.currentTarget)+1;n=null!=(a=E[r])?a:E[0];break;case"ArrowLeft":var l,i=E.indexOf(e.currentTarget)-1;n=null!=(l=E[i])?l:E[E.length-1]}null==(t=n)||t.focus()};return l.createElement("div",{className:(0,o.Z)("tabs-container",d)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":i},v)},N.map((function(e){var t=e.value,n=e.label,r=e.attributes;return l.createElement("li",(0,a.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:function(e){return E.push(e)},onKeyDown:D,onFocus:M,onClick:M},r,{className:(0,o.Z)("tabs__item",c,null==r?void 0:r.className,{"tabs__item--active":C===t})}),null!=n?n:t)}))),r?(0,l.cloneElement)(g.filter((function(e){return e.props.value===C}))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},g.map((function(e,t){return(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==C})}))))}function h(e){var t=(0,u.Z)();return l.createElement(k,(0,a.Z)({key:String(t)},e))}var v="tabItem_Ymn6";function g(e){var t=e.children,n=e.hidden,a=e.className;return l.createElement("div",{role:"tabpanel",className:(0,o.Z)(v,a),hidden:n},t)}var N=["components"],b={hide_title:!0,sidebar_position:998,title:"Docusaurus"},f=void 0,y={unversionedId:"\u7410\u788e/Docusaurus",id:"\u7410\u788e/Docusaurus",title:"Docusaurus",description:"",source:"@site/docs/10-\u7410\u788e/Docusaurus.md",sourceDirName:"10-\u7410\u788e",slug:"/\u7410\u788e/Docusaurus",permalink:"/docs/\u7410\u788e/Docusaurus",draft:!1,tags:[],version:"current",sidebarPosition:998,frontMatter:{hide_title:!0,sidebar_position:998,title:"Docusaurus"},sidebar:"tutorialSidebar",previous:{title:"Resources",permalink:"/docs/\u7410\u788e/\u8d44\u6e90"},next:{title:"KeepassXC",permalink:"/docs/\u7410\u788e/KeepassXC"}},w={},T=[{value:"Docusaurus",id:"docusaurus",level:2},{value:"\u914d\u7f6e\u8fd0\u884c",id:"\u914d\u7f6e\u8fd0\u884c",level:3},{value:"\u535a\u5ba2\u6458\u8981",id:"\u535a\u5ba2\u6458\u8981",level:3},{value:"Mdx\u793a\u4f8b",id:"mdx\u793a\u4f8b",level:3},{value:"Markdown",id:"markdown",level:2},{value:"\u6807\u9898",id:"\u6807\u9898",level:3},{value:"\u6bb5\u843d",id:"\u6bb5\u843d",level:3},{value:"\u8d85\u94fe\u63a5",id:"\u8d85\u94fe\u63a5",level:3},{value:"\u5f15\u7528",id:"\u5f15\u7528",level:3},{value:"\u7a7a\u683c",id:"\u7a7a\u683c",level:3},{value:"\u5b57\u4f53\u6837\u5f0f",id:"\u5b57\u4f53\u6837\u5f0f",level:3},{value:"\u5217\u8868",id:"\u5217\u8868",level:3},{value:"\u5206\u5272\u7ebf",id:"\u5206\u5272\u7ebf",level:3},{value:"\u56fe\u7247",id:"\u56fe\u7247",level:3},{value:"\u4ee3\u7801\u884c",id:"\u4ee3\u7801\u884c",level:3},{value:"\u4ee3\u7801\u5757",id:"\u4ee3\u7801\u5757",level:3},{value:"\u8868\u683c",id:"\u8868\u683c",level:3},{value:"html",id:"html",level:3},{value:"iframe",id:"iframe",level:3}],x={toc:T};function C(e){var t=e.components,l=(0,r.Z)(e,N);return(0,i.kt)("wrapper",(0,a.Z)({},x,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"docusaurus"},"Docusaurus"),(0,i.kt)("h3",{id:"\u914d\u7f6e\u8fd0\u884c"},"\u914d\u7f6e\u8fd0\u884c"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"npx create-docusaurus@latest my-website classic\n\ncd my-website\n\nnpm (run) start\n")),(0,i.kt)("h3",{id:"\u535a\u5ba2\u6458\u8981"},"\u535a\u5ba2\u6458\u8981"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"\x3c!--truncate--\x3e\n")),(0,i.kt)("h3",{id:"mdx\u793a\u4f8b"},"Mdx\u793a\u4f8b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"import Tabs from '@theme/Tabs';\nimport TabItem from '@theme/TabItem';\n")),(0,i.kt)("hr",null),(0,i.kt)(h,{defaultValue:"apple",values:[{label:"Apple",value:"apple"},{label:"Orange",value:"orange"},{label:"Banana",value:"banana"}],mdxType:"Tabs"},(0,i.kt)(g,{value:"apple",mdxType:"TabItem"},"This is an apple \ud83c\udf4e"),(0,i.kt)(g,{value:"orange",mdxType:"TabItem"},"This is an orange \ud83c\udf4a"),(0,i.kt)(g,{value:"banana",mdxType:"TabItem"},"This is a banana \ud83c\udf4c")),(0,i.kt)("hr",null),(0,i.kt)(h,{groupId:"operating-systems",mdxType:"Tabs"},(0,i.kt)(g,{value:"win",label:"Windows",mdxType:"TabItem"},"Use Ctrl + C to copy."),(0,i.kt)(g,{value:"mac",label:"macOS",mdxType:"TabItem"},"Use Command + C to copy.")),(0,i.kt)(h,{groupId:"operating-systems",mdxType:"Tabs"},(0,i.kt)(g,{value:"win",label:"Windows",mdxType:"TabItem"},"Use Ctrl + V to paste."),(0,i.kt)(g,{value:"mac",label:"macOS",mdxType:"TabItem"},"Use Command + V to paste.")),(0,i.kt)("hr",null),(0,i.kt)("br",null),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"function HighlightSomeText(highlight) {\n  if (highlight) {\n    // highlight-next-line\n    return 'This text is highlighted!';\n  }\n\n  return 'Nothing highlighted';\n}\n\nfunction HighlightMoreText(highlight) {\n  // highlight-start\n  if (highlight) {\n    return 'This range is highlighted!';\n  }\n  // highlight-end\n\n  return 'Nothing highlighted';\n}\n")),(0,i.kt)("hr",null),(0,i.kt)("br",null),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u6ce8\u610f")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u6ce8\u610f"))),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u63d0\u793a"))),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u4fe1\u606f"))),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u8c28\u614e"))),(0,i.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"\u5371\u9669")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u5371\u9669"))),(0,i.kt)("hr",null),(0,i.kt)("br",null),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Use tabs in admonitions")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)(h,{mdxType:"Tabs"},(0,i.kt)(g,{value:"apple",label:"Apple",mdxType:"TabItem"},"This is an apple \ud83c\udf4e"),(0,i.kt)(g,{value:"orange",label:"Orange",mdxType:"TabItem"},"This is an orange \ud83c\udf4a"),(0,i.kt)(g,{value:"banana",label:"Banana",mdxType:"TabItem"},"This is a banana \ud83c\udf4c")))),(0,i.kt)("hr",null),(0,i.kt)("br",null),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Emoji"),(0,i.kt)("div",null,(0,i.kt)("div",null,"Code\uff1ahttps://github.com/ikatyang/emoji-cheat-sheet/",(0,i.kt)("br",null),"Copy\uff1ahttps://emojipedia.org/",(0,i.kt)("br",null),"\ud83d\udcd5\ud83d\udcd9\ud83d\udcd7\ud83d\udcd8 \ud83d\udd34\ud83d\udfe0\ud83d\udfe1\ud83d\udfe2\ud83d\udfe4\ud83d\udd35\ud83d\udfe3\u26ab\u26aa\ud83c\udf19\u2600\ufe0f\ud83c\udf15\ud83d\udcd6\ud83d\udcda\ud83c\udfe0\ud83c\udfd8\ufe0f\u2708\ufe0f\ud83d\ude80\ud83d\udef0\ufe0f\u2728\u23f3\ud83c\udf89\ud83d\udd0d\u2709\ufe0f\ud83d\udce7\ud83d\udc8a",(0,i.kt)("br",null)),(0,i.kt)("br",null))),(0,i.kt)("details",null,(0,i.kt)("summary",null,"01"),(0,i.kt)("div",null,(0,i.kt)("div",null,"\u4e00"),(0,i.kt)("br",null),(0,i.kt)("details",null,(0,i.kt)("summary",null,"02"),(0,i.kt)("div",null,"\u4e8c"),(0,i.kt)("br",null),(0,i.kt)("details",null,(0,i.kt)("summary",null,"03"),(0,i.kt)("div",null,"......"))))),(0,i.kt)("hr",null),(0,i.kt)("br",null),(0,i.kt)("h2",{id:"markdown"},"Markdown"),(0,i.kt)("h3",{id:"\u6807\u9898"},"\u6807\u9898"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"# \u8fd9\u91cc\u662f h1\n## \u8fd9\u91cc\u662f h2\n### \u8fd9\u91cc\u662f h3\n#### \u8fd9\u91cc\u662f h4\n##### \u8fd9\u91cc\u662f h5\n###### \u8fd9\u91cc\u662f h6\n")),(0,i.kt)("h3",{id:"\u6bb5\u843d"},"\u6bb5\u843d"),(0,i.kt)("p",null,"\u6bb5\u843d1111"),(0,i.kt)("p",null,"\u6bb5\u843d2222"),(0,i.kt)("h3",{id:"\u8d85\u94fe\u63a5"},"\u8d85\u94fe\u63a5"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://b23.tv/sUHITCZ"},"2333")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"[2333](https://b23.tv/sUHITCZ)\n")),(0,i.kt)("h3",{id:"\u5f15\u7528"},"\u5f15\u7528"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u8fd9\u91cc\u662f\u5f15\u7528")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"> \u8fd9\u91cc\u662f\u5f15\u7528\n")),(0,i.kt)("h3",{id:"\u7a7a\u683c"},"\u7a7a\u683c"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"\u63d2\u5165\u4e00\u4e2a\u7a7a\u683c (non-breaking space)    &nbsp;    \u6216    &#160;     \u6216      &#xA0;\n\u63d2\u5165\u4e24\u4e2a\u7a7a\u683c (en space)    &ensp;     \u6216    &#8194;   \u6216      &#x2002;\n\u63d2\u5165\u56db\u4e2a\u7a7a\u683c (em space)    &emsp;    \u6216    &#8195;   \u6216      &#x2003;\n\u63d2\u5165\u7ec6\u7a7a\u683c (thin space)    &thinsp;   \u6216     &#8201;  \u6216      &#x2009;\n")),(0,i.kt)("h3",{id:"\u5b57\u4f53\u6837\u5f0f"},"\u5b57\u4f53\u6837\u5f0f"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"\u659c\u4f53")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u7c97\u4f53")),(0,i.kt)("p",null,(0,i.kt)("del",{parentName:"p"},"\u5220\u9664\u7ebf")),(0,i.kt)("u",null,"\u4e0b\u5212\u7ebf"),(0,i.kt)("center",null,"\u5c45\u4e2d"),(0,i.kt)("p",{align:"center"},"align\u5c45\u4e2d"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'_\u659c\u4f53_\n**\u7c97\u4f53**\n~~\u5220\u9664\u7ebf~~\n<u>\u4e0b\u5212\u7ebf\u6587\u672c</u>\n<center>\u5c45\u4e2d</center>\n<p align="center">align\u5c45\u4e2d</p>\n')),(0,i.kt)("h3",{id:"\u5217\u8868"},"\u5217\u8868"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u65e0\u5e8f\u5217\u8868 1-1"),(0,i.kt)("p",{parentName:"li"},"\u7f29\u8fdb 2 \u7a7a\u683c"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u7f29\u8fdb 2 \u7a7a\u683c"),(0,i.kt)("li",{parentName:"ul"},"\u7f29\u8fdb 2 \u7a7a\u683c"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u65e0\u5e8f\u5217\u8868 1-2")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u65e0\u5e8f\u5217\u8868 1-3"))),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u6709\u5e8f\u5217\u8868 1-1"),(0,i.kt)("p",{parentName:"li"},"\u7f29\u8fdb 3 \u7a7a\u683c"),(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"\u7f29\u8fdb 3 \u7a7a\u683c"),(0,i.kt)("li",{parentName:"ol"},"\u7f29\u8fdb 3 \u7a7a\u683c"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u6709\u5e8f\u5217\u8868 1-2")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u6709\u5e8f\u5217\u8868 1-3"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"- \u65e0\u5e8f\u5217\u8868 1-1\n\n  \u7f29\u8fdb 2 \u7a7a\u683c\n\n  - \u7f29\u8fdb 2 \u7a7a\u683c\n  - \u7f29\u8fdb 2 \u7a7a\u683c\n\n- \u65e0\u5e8f\u5217\u8868 1-2\n- \u65e0\u5e8f\u5217\u8868 1-3\n\n1. \u6709\u5e8f\u5217\u8868 1-1\n\n   \u7f29\u8fdb 3 \u7a7a\u683c\n\n   1. \u7f29\u8fdb 3 \u7a7a\u683c\n   2. \u7f29\u8fdb 3 \u7a7a\u683c\n\n2. \u6709\u5e8f\u5217\u8868 1-2\n3. \u6709\u5e8f\u5217\u8868 1-3\n")),(0,i.kt)("h3",{id:"\u5206\u5272\u7ebf"},"\u5206\u5272\u7ebf"),(0,i.kt)("hr",null),(0,i.kt)("br",null),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"---\n")),(0,i.kt)("h3",{id:"\u56fe\u7247"},"\u56fe\u7247"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"line",src:n(8112).Z,width:"1024",height:"576"})),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-md"},"![line](url)\n")),(0,i.kt)("h3",{id:"\u4ee3\u7801\u884c"},"\u4ee3\u7801\u884c"),(0,i.kt)("p",null,"\u8fd9\u662f\u4e00\u6bb5\u6587\u5b57",(0,i.kt)("inlineCode",{parentName:"p"},"rm -rf /*"),"\u8fd9\u662f\u4e00\u6bb5\u6587\u5b57"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"\u8fd9\u662f\u4e00\u6bb5\u6587\u5b57`rm -rf /*`\u8fd9\u662f\u4e00\u6bb5\u6587\u5b57\n")),(0,i.kt)("h3",{id:"\u4ee3\u7801\u5757"},"\u4ee3\u7801\u5757"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"blog.encodeHtml = function(html) {\n  var o = document.createElement('div')\n  o.innerText = html\n  var temp = o.innerHTML\n  o = null\n  return temp\n}\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"```javascript\nblog.encodeHtml = function(html) {\nvar o = document.createElement('div')\no.innerText = html\nvar temp = o.innerHTML\no = null\nreturn temp\n}\n```\n")),(0,i.kt)("h3",{id:"\u8868\u683c"},"\u8868\u683c"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Tables"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Are"),(0,i.kt)("th",{parentName:"tr",align:"right"},"Cool"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"col 3 is"),(0,i.kt)("td",{parentName:"tr",align:"center"},"right-aligned"),(0,i.kt)("td",{parentName:"tr",align:"right"},"\\$1600")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"col 2 is"),(0,i.kt)("td",{parentName:"tr",align:"center"},"centered"),(0,i.kt)("td",{parentName:"tr",align:"right"},"\\$12")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"zebra stripes"),(0,i.kt)("td",{parentName:"tr",align:"center"},"are neat"),(0,i.kt)("td",{parentName:"tr",align:"right"},"\\$1")))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-md"},"| Tables        |      Are      |   Cool |\n| ------------- | :-----------: | -----: |\n| col 3 is      | right-aligned | \\$1600 |\n| col 2 is      |   centered    |   \\$12 |\n| zebra stripes |   are neat    |    \\$1 |\n")),(0,i.kt)("h3",{id:"html"},"html"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<div id="htmldemo"></div>\n<style>\n  #htmldemo {\n    height: 30px;\n    width: 30px;\n    background-color: #00aa9a;\n    animation-name: moveX;\n    animation-duration: 1s;\n    animation-timing-function: linear;\n    animation-iteration-count: infinite;\n    animation-direction: alternate;\n    animation-fill-mode: both;\n  }\n  @keyframes moveX {\n    0% {\n      transform: translateX(0px);\n    }\n    100% {\n      transform: translateX(100px);\n    }\n  }\n</style>\n')),(0,i.kt)("h3",{id:"iframe"},"iframe"),(0,i.kt)("iframe",{src:"//music.163.com/outchain/player?type=2&id=4988618&auto=0&height=66",frameborder:"0",width:"100%",height:"86px"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<iframe src="//music.163.com/outchain/player?type=2&id=28445796&auto=0&height=66"\n        frameborder="0"\n        width="100%"\n        height="86px"></iframe>\n')))}C.isMDXComponent=!0},8112:function(e,t,n){t.Z=n.p+"assets/images/000-b2bcb397d81de7bcac66920cfe136014.png"}}]);