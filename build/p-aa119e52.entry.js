import{r as i,h as t,H as s}from"./p-30ca909f.js";const e=class{constructor(t){i(this,t),this.visible=!1,this.mobileOnly=!1}render(){return t(s,{tabindex:"-1",class:{"site-backdrop--visible":this.visible,"site-backdrop--mobile-only":this.mobileOnly}})}};e.style=".sc-site-backdrop-h{position:fixed;top:0;height:100vh;left:0;right:0;background:rgba(0, 26, 58, 0.08);cursor:pointer;opacity:0;pointer-events:none;-webkit-transition:0.4s opacity, 0.4s visibility step-end;transition:0.4s opacity, 0.4s visibility step-end;visibility:hidden;outline:2px solid rgba(0, 0, 0, 0);z-index:0}.site-backdrop--visible.sc-site-backdrop-h:not(.site-backdrop--mobile-only){opacity:1;pointer-events:all;visibility:visible;-webkit-transition:0.4s opacity, 0.4s visibility step-start;transition:0.4s opacity, 0.4s visibility step-start}@media screen and (max-width: 768px){.site-backdrop--visible.site-backdrop--mobile-only.sc-site-backdrop-h{opacity:1;pointer-events:all;visibility:visible;-webkit-transition:0.4s opacity, 0.4s visibility step-start;transition:0.4s opacity, 0.4s visibility step-start}}";export{e as site_backdrop}