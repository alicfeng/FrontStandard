import{h as o}from"./p-30ca909f.js";import{a as c}from"./p-12b41941.js";const s=(o,c,s,r,t)=>{const l=[];return l.push("ui-col"),l.push(o?`ui-col-${o}`:"ui-col-12"),c&&l.push(`ui-col-xs-${c}`),s&&l.push(`ui-col-sm-${s}`),r&&l.push(`ui-col-md-${r}`),t&&l.push(`ui-col-lg-${t}`),l.join(" ")},r=(r,t)=>{var{cols:l,xs:i,sm:u,md:a,lg:n,as:e="div"}=r,m=function(o,c){var s={};for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&c.indexOf(r)<0&&(s[r]=o[r]);if(null!=o&&"function"==typeof Object.getOwnPropertySymbols){var t=0;for(r=Object.getOwnPropertySymbols(o);t<r.length;t++)c.indexOf(r[t])<0&&Object.prototype.propertyIsEnumerable.call(o,r[t])&&(s[r[t]]=o[r[t]])}return s}(r,["cols","xs","sm","md","lg","as"]);return o(e,Object.assign({},c(m,{class:s(l,i,u,a,n)})),t)};export{r as C}