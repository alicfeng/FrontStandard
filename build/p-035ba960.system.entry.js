System.register(["./p-d6caec50.system.js","./p-5dc01a19.system.js","./p-e847e88b.system.js"],(function(e){"use strict";var t,r,i,n;return{setters:[function(e){t=e.r;r=e.h;i=e.g},function(e){n=e.S},function(){}],execute:function(){var p="app-burger{display:none}app-burger>div{display:-ms-flexbox;display:flex;-ms-flex-align:start;align-items:flex-start;-ms-flex-pack:center;justify-content:center}app-burger>div:hover app-icon{opacity:1}app-burger .icon-menu{display:block}app-burger .icon-close{display:none}app-burger app-icon{-webkit-transition:opacity 0.3s;transition:opacity 0.3s;opacity:0.7;cursor:pointer}app-burger.left-sidebar-in>div{padding-right:50px}app-burger.left-sidebar-in .icon-menu{display:none}app-burger.left-sidebar-in .icon-close{display:block}@media screen and (max-width: 768px){app-burger{display:block}}";var a=e("app_burger",function(){function e(e){t(this,e);this.toggleLeftSidebar=function(){}}e.prototype.render=function(){return r("div",{class:"burger",onClick:this.toggleLeftSidebar},r("app-icon",{name:"menu"}),r("app-icon",{name:"close"}))};Object.defineProperty(e.prototype,"el",{get:function(){return i(this)},enumerable:false,configurable:true});return e}());n.injectProps(a,["toggleLeftSidebar"]);a.style=p}}}));