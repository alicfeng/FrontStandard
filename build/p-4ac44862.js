import{h as i}from"./p-30ca909f.js";import{a as o}from"./p-12b41941.js";const s=(s,t)=>{var{xs:r,sm:a,md:l,lg:n,xl:e,display:c="block"}=s,d=function(i,o){var s={};for(var t in i)Object.prototype.hasOwnProperty.call(i,t)&&o.indexOf(t)<0&&(s[t]=i[t]);if(null!=i&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(t=Object.getOwnPropertySymbols(i);r<t.length;r++)o.indexOf(t[r])<0&&Object.prototype.propertyIsEnumerable.call(i,t[r])&&(s[t[r]]=i[t[r]])}return s}(s,["xs","sm","md","lg","xl","display"]);const p="inline"===c?"span":"div",m=[["xs",r=void 0!==r&&r],["sm",a=void 0!==a?a:r],["md",l=void 0!==l?l:a],["lg",n=void 0!==n?n:l],["xl",e=void 0!==e?e:n]].reduce(((i,o)=>`${i} ${o[1]?`ui-breakpoint-${o[0]}`:""}`),"ui-breakpoint");return i(p,Object.assign({},o(d,{class:m}),{style:{"--display":c}}),t)};export{s as B}