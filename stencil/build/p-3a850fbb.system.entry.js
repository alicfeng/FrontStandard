System.register(["./p-d6caec50.system.js","./p-5f3cfda1.system.js","./p-dce2a7fe.system.js","./p-c027f5e2.system.js","./p-c22eece8.system.js","./p-2d66b5ed.system.js"],(function(e){"use strict";var t,i,n;return{setters:[function(e){t=e.r;i=e.h},function(){},function(e){n=e.R},function(){},function(){},function(){}],execute:function(){var s="pwas-page h3+.demo-card-list{margin-top:32px}@media screen and (max-width: 768px){pwas-page .measure-xl{text-align:center}}";var o=e("pwas_page",function(){function e(e){t(this,e);this.demos=[{title:"Stenciljs.com",description:"Yep, this site is built as a PWA!",imgPath:"/assets/img/demos/demo-stenciljs",demoUrl:"/",sourceUrl:"https://github.com/ionic-team/stencil-site"},{title:"IonicHN",description:"Hacker News PWA built with @stencil/core and @ionic/core",imgPath:"/assets/img/demos/demo-ionichn",demoUrl:"https://corehacker-10883.firebaseapp.com/",sourceUrl:"https://github.com/ionic-team/ionic-stencil-hn-app"},{title:"Stencil Fiber demo",description:"This showcases the runtime performance of stencil using our async rendering",imgPath:"/assets/img/demos/demo-fiber",demoUrl:"https://stencil-fiber-demo.firebaseapp.com/",sourceUrl:"https://github.com/ionic-team/stencil-fiber-demo"}];document.title="PWAs"}e.prototype.render=function(){return i(n,null,i("div",{class:"measure-xl"},i("img",{src:"/assets/img/pwa-toolkit-logo.png",srcSet:"/assets/img/pwa-toolkit-logo.png 1x, /assets/img/pwa-toolkit-logo@2x.png 2x"}),i("h1",null,"Everything you need to easily build fast, production ready Progressive Web Apps")),i("ul",{class:"list--unstyled list--icon list--columns"},i("li",null,i("app-icon",{name:"checkmark"})," Push notifications"),i("li",null,i("app-icon",{name:"checkmark"})," Routing"),i("li",null,i("app-icon",{name:"checkmark"})," prerendering"),i("li",null,i("app-icon",{name:"checkmark"})," Update toasts"),i("li",null,i("app-icon",{name:"checkmark"})," Unit Tests"),i("li",null,i("app-icon",{name:"checkmark"})," Zero config lazy loading"),i("li",null,i("app-icon",{name:"checkmark"})," Zero config code splitting"),i("li",null,i("app-icon",{name:"checkmark"})," ES6 by default"),i("li",null,i("app-icon",{name:"checkmark"})," Selective polyfills"),i("li",null,i("app-icon",{name:"checkmark"})," Lazy image loading"),i("li",null,i("app-icon",{name:"checkmark"})," Everything needed for an add to homescreen PWA")),i("div",{class:"measure-lg"},i("h3",null,"Getting started with the Ionic PWA Toolkit"),i("ol",{class:"list--numbered-badge"},i("li",null,i("span",null,"In your terminal, run: ",i("br",null),i("code",null,"git clone https://github.com/ionic-team/ionic-pwa-toolkit my-pwa"))),i("li",null,i("span",null,"Run ",i("code",null,"npm install"))),i("li",null,i("span",null,"Run ",i("code",null,"npm run build")))),i("p",null,"And with just those three commands you now have a great looking PWA that scores 100 on lighthouse right out of the box."),i("img",{class:"screenshot",src:"/assets/img/pwa-lighthouse-score.png",srcSet:"/assets/img/pwa-lighthouse-score.png 1x, /assets/img/pwa-lighthouse-score@2x.png 2x",loading:"lazy"}),i("h3",{class:"push"},"Under the hood"),i("h4",null,"Ionic"),i("p",null,"The Ionic PWA Toolkit uses an early release of Ionic 4. Ionic 4 is built completely out of web components using Stencil. This means that you can use Ionic 4 just like any other Stencil collection and you will be able to use any of the Ionic components with minimal to no overhead."),i("h4",null,"Routing"),i("p",null,"The Ionic PWA Toolkit uses the Stencil Router.",i("stencil-route-link",{url:"/docs/routing",class:"block"},"Read more about the Stencil Router")),i("h4",null,"Service Worker"),i("p",null,"When you run ",i("code",null,"npm run build")," we automatically generate a Service Worker for you using ",i("a",{href:"https://workboxjs.org/"},"Workbox")," that handles pre-caching your assets.",i("stencil-route-link",{url:"/docs/service-workers",class:"block"},"Read more about Service Workers")),i("h4",null,"Web Manifest"),i("p",null,"By default we include a Web Manifest that has all the neccessary entries to get the Add to Homescreen prompt. You can see that web manifest"," ",i("a",{href:"https://github.com/ionic-team/ionic-pwa-toolkit/blob/master/src/manifest.json"},"here"),".")),i("h3",{class:"push"},"PWAs built with Stencil"),i("div",{class:"demo-card-list"},this.demos.map((function(e){return i("demo-card",{name:e.title,description:e.description,imgPath:e.imgPath,demoUrl:e.demoUrl,sourceUrl:e.sourceUrl})}))))};return e}());o.style=s}}}));