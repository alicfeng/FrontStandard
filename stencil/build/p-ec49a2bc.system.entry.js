var __awaiter=this&&this.__awaiter||function(e,r,t,c){function s(e){return e instanceof t?e:new t((function(r){r(e)}))}return new(t||(t=Promise))((function(t,a){function i(e){try{n(c.next(e))}catch(r){a(r)}}function o(e){try{n(c["throw"](e))}catch(r){a(r)}}function n(e){e.done?t(e.value):s(e.value).then(i,o)}n((c=c.apply(e,r||[])).next())}))};var __generator=this&&this.__generator||function(e,r){var t={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},c,s,a,i;return i={next:o(0),throw:o(1),return:o(2)},typeof Symbol==="function"&&(i[Symbol.iterator]=function(){return this}),i;function o(e){return function(r){return n([e,r])}}function n(i){if(c)throw new TypeError("Generator is already executing.");while(t)try{if(c=1,s&&(a=i[0]&2?s["return"]:i[0]?s["throw"]||((a=s["return"])&&a.call(s),0):s.next)&&!(a=a.call(s,i[1])).done)return a;if(s=0,a)i=[i[0]&2,a.value];switch(i[0]){case 0:case 1:a=i;break;case 4:t.label++;return{value:i[1],done:false};case 5:t.label++;s=i[1];i=[0];continue;case 7:i=t.ops.pop();t.trys.pop();continue;default:if(!(a=t.trys,a=a.length>0&&a[a.length-1])&&(i[0]===6||i[0]===2)){t=0;continue}if(i[0]===3&&(!a||i[1]>a[0]&&i[1]<a[3])){t.label=i[1];break}if(i[0]===6&&t.label<a[1]){t.label=a[1];a=i;break}if(a&&t.label<a[2]){t.label=a[2];t.ops.push(i);break}if(a[2])t.ops.pop();t.trys.pop();continue}i=r.call(e,t)}catch(o){i=[6,o];s=0}finally{c=a=0}if(i[0]&5)throw i[1];return{value:i[0]?i[1]:void 0,done:true}}};System.register(["./p-d6caec50.system.js","./p-7a7ce7cd.system.js","./p-b04ba3b0.system.js","./p-5f3cfda1.system.js","./p-89a8f8e1.system.js","./p-e8a06ba6.system.js","./p-8f71c5ab.system.js","./p-c5500b54.system.js","./p-c42c26b3.system.js","./p-fecd2e94.system.js","./p-c22eece8.system.js","./p-2d66b5ed.system.js"],(function(e){"use strict";var r,t,c,s,a,i,o,n,u,l,d,m,p;return{setters:[function(e){r=e.r;t=e.h;c=e.H},function(e){s=e.C},function(e){a=e.G},function(){},function(e){i=e.a;o=e.R;n=e.g},function(e){u=e.P},function(e){l=e.H},function(e){d=e.P},function(e){m=e.P},function(e){p=e.h},function(){},function(){}],execute:function(){var f="https://ionicframeworkcom.prismic.io/api/v2";var h=function(e){if(e===void 0){e=null}return u.client(f,g(e,null))};var g=function(e,r){if(e===void 0){e=null}if(r===void 0){r=null}var t=e?{req:e}:{};var c=r?{accessToken:r}:{};return Object.assign(Object.assign({},t),c)};var b=".sc-more-resources-h{display:block;--column-gap:var(--space-6);--row-gap:var(--space-9)}.ui-grid.sc-more-resources{-webkit-column-gap:var(--column-gap);-moz-column-gap:var(--column-gap);column-gap:var(--column-gap);row-gap:var(--row-gap)}@media screen and (max-width: 640px){.ui-grid.sc-more-resources{-webkit-column-gap:0;-moz-column-gap:0;column-gap:0}}.ui-grid.size-2.sc-more-resources resource-card.sc-more-resources{--image-height:128px}";var v=e("more_resources",function(){function e(e){r(this,e)}e.prototype.componentWillLoad=function(){return __awaiter(this,void 0,void 0,(function(){var e,r,t,c;return __generator(this,(function(s){switch(s.label){case 0:if(this.resources)return[2];e=h();r=this.resourceData.map((function(r){return e.getByUID(r.type,r.uid,null)}));s.label=1;case 1:s.trys.push([1,3,,4]);t=this;return[4,Promise.all(r)];case 2:t.resources=s.sent().map((function(e){return i(e)}));return[3,4];case 3:c=s.sent();console.error("Unable to load more resources",c);return[3,4];case 4:return[2]}}))}))};e.prototype.render=function(){var e=this;var r=this,c=r.headingLevel,i=r.type,o=r.tags,n=r.description,u=r.author;var l={headingLevel:c,type:i,tags:o,description:n,author:u};var d;switch(this.resources.length||this.resourceData.length){case 2:d={md:6,sm:6};break;default:d={md:4,xs:6};break}return t(a,{class:"size-"+this.resources.length},this.resources.map((function(r,c){return t(s,Object.assign({},d,{cols:12,xs:6,key:r.id}),t("resource-card",Object.assign({prismicData:r,routing:Array.isArray(e.routing)?e.routing[c]:e.routing},l)))})))};return e}());v.style=b;var w=function(e){var r;return(r={},r[o.Article]="articles",r[o.Blog]="blog",r[o.Book]="books",r[o.CaseStudy]="case-studies",r[o.Course]="courses",r[o.CustomerInterview]="customer-interviews",r[o.Doc]="docs",r[o.Guide]="guides",r[o.Learning]="learning",r[o.Podcast]="podcasts",r[o.Tutorial]="tutorials",r[o.Video]="videos",r[o.Webinar]="webinars",r[o.Whitepaper]="whitepapers",r)[e]};var y=".column.sc-resource-card-h{--image-height:176px;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;height:100%}.column.sc-resource-card-h:hover img.sc-resource-card,.column.sc-resource-card-h:active img.sc-resource-card,.column.sc-resource-card-h:focus img.sc-resource-card{-webkit-transform:scale(1.05);transform:scale(1.05)}.column.sc-resource-card-h img.sc-resource-card{display:block}.column.sc-resource-card-h .contents-wrapper.sc-resource-card{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;height:100%}.column.sc-resource-card-h .image-wrapper.sc-resource-card{display:block;-webkit-margin-after:var(--space-5);margin-block-end:var(--space-5);height:var(--image-height);overflow:hidden}.column.sc-resource-card-h .image-wrapper.sc-resource-card img.sc-resource-card{display:block;height:var(--image-height);-o-object-fit:cover;object-fit:cover;-webkit-transition:-webkit-transform 200ms cubic-bezier(0.32, 0.72, 0, 1);transition:-webkit-transform 200ms cubic-bezier(0.32, 0.72, 0, 1);transition:transform 200ms cubic-bezier(0.32, 0.72, 0, 1);transition:transform 200ms cubic-bezier(0.32, 0.72, 0, 1), -webkit-transform 200ms cubic-bezier(0.32, 0.72, 0, 1)}.column.sc-resource-card-h .content.sc-resource-card{display:-ms-flexbox;display:flex;-ms-flex-positive:1;flex-grow:1;-ms-flex-direction:column;flex-direction:column}.column.sc-resource-card-h .content.sc-resource-card .meta.sc-resource-card{display:-ms-flexbox;display:flex;overflow:hidden;-webkit-margin-after:var(--space-3);margin-block-end:var(--space-3)}.column.sc-resource-card-h .content.sc-resource-card .meta.sc-resource-card .type.sc-resource-card{-webkit-margin-end:var(--space-4);margin-inline-end:var(--space-4)}.column.sc-resource-card-h .content.sc-resource-card .title.sc-resource-card{color:#010610}.column.sc-resource-card-h .content.sc-resource-card .description.sc-resource-card{color:var(--c-indigo-80);-webkit-margin-before:var(--space-2);margin-block-start:var(--space-2)}.row.sc-resource-card-h{--image-height:100%}.row.sc-resource-card-h .contents-wrapper.sc-resource-card{display:-ms-flexbox;display:flex}.row.sc-resource-card-h .image-wrapper.sc-resource-card{-ms-flex-preferred-size:60%;flex-basis:60%;min-height:var(--image-height)}.row.sc-resource-card-h .image-wrapper.sc-resource-card img.sc-resource-card{height:100%;-o-object-fit:cover;object-fit:cover}.row.sc-resource-card-h .content.sc-resource-card{-ms-flex-preferred-size:40%;flex-basis:40%;-webkit-margin-start:var(--space-9);margin-inline-start:var(--space-9)}.row.sc-resource-card-h .content.sc-resource-card .meta.sc-resource-card{-webkit-margin-before:0;margin-block-start:0;-webkit-margin-after:40px;margin-block-end:40px}.row.sc-resource-card-h .content.sc-resource-card .description.sc-resource-card{-webkit-margin-before:var(--space-4);margin-block-start:var(--space-4)}@media screen and (max-width: 767px){.row.sc-resource-card-h .contents-wrapper.sc-resource-card{-ms-flex-direction:column;flex-direction:column}.row.sc-resource-card-h .content.sc-resource-card{-webkit-margin-start:0;margin-inline-start:0}.row.sc-resource-card-h .content.sc-resource-card .meta.sc-resource-card{display:-ms-flexbox;display:flex;-webkit-margin-before:var(--space-5);margin-block-start:var(--space-5);-webkit-margin-after:var(--space-3);margin-block-end:var(--space-3);overflow:hidden}.row.sc-resource-card-h .content.sc-resource-card .meta.sc-resource-card .type.sc-resource-card{-webkit-margin-end:var(--space-4);margin-inline-end:var(--space-4)}}.ui-heading-4.sc-resource-card,.ui-heading-6.sc-resource-card{-webkit-margin-after:0;margin-block-end:0}.description.sc-resource-card{-webkit-margin-after:0;margin-block-end:0}.author.sc-resource-card{-ms-flex-positive:1;flex-grow:1;display:-ms-flexbox;display:flex;-ms-flex-align:end;align-items:flex-end}.author.sc-resource-card resource-author-item.sc-resource-card{-webkit-margin-before:46px;margin-block-start:46px;justify-self:flex-end}img.sc-resource-card{display:block;-o-object-fit:cover;object-fit:cover;max-width:100%}";var x=undefined&&undefined.__classPrivateFieldGet||function(e,r){if(!r.has(e)){throw new TypeError("attempted to get private field on non-instance")}return r.get(e)};var k=undefined&&undefined.__classPrivateFieldSet||function(e,r,t){if(!r.has(e)){throw new TypeError("attempted to set private field on non-instance")}r.set(e,t);return t};var j,_,C;var D=e("resource_card",function(){function e(e){var c=this;r(this,e);this.row=false;this.headingLevel=4;this.type=true;this.tags=true;this.author=true;this.description=true;j.set(this,void 0);_.set(this,void 0);C.set(this,{routing:{includeType:true,base:""}});this.SameSiteCard=function(){var e=c.CardContents;return t("a",Object.assign({class:"contents-wrapper"},p(x(c,j),c.routing.router)),t(e,null))};this.ExternalCard=function(){var e=c.CardContents;return t("a",{class:"contents-wrapper",href:x(c,j),target:"_blank",rel:"noopener"},t(e,null))};this.CardContents=function(){var e=c.prismicData,r=e.title,s=e.description,a=e.type,i=e.tags,o=e.doc.data.hero_image;var u=c.type||i&&c.tags;var p=n(c.prismicData.doc);var f=c.author&&p.length>0;return[t("div",{class:"image-wrapper"},t(m,{image:o})),t("div",{class:"content"},u?t("div",{class:"meta"},c.type?t(l,{class:"type | ui-theme--editorial",level:6},a):null,i&&c.tags?t("resource-meta",{class:"ui-theme--editorial",tags:i}):null):null,t(l,{class:"title | ui-theme--editorial",level:c.headingLevel},r),c.description?t(d,{class:"description"},s):null,f?t("div",{class:"author"},t("resource-author-item",{author:p[0]})):null)]}}e.prototype.componentWillLoad=function(){if(!this.prismicData)return;this.routing=Object.assign(x(this,C).routing,this.routing);k(this,j,this.getUrl(this.prismicData.id))};e.prototype.getUrl=function(e){var r;var t=this.routing,c=t.base,s=t.includeType;var a=w(this.prismicData.type);if((r=this.prismicData.doc.data.content_url)===null||r===void 0?void 0:r.url){return this.prismicData.doc.data.content_url.url}if(c.includes("ionicframework.com/resources")&&a==="blog"){return c.replace("resources","blog")+"/"+e}k(this,_,!!this.routing.router);if(s){return c+"/"+a+"/"+e}else{return c+"/"+e}};e.prototype.render=function(){if(!this.prismicData)return;var e=this,r=e.SameSiteCard,s=e.ExternalCard;return t(c,{class:{row:this.row,column:!this.row}},x(this,_)?t(r,null):t(s,null))};return e}());j=new WeakMap,_=new WeakMap,C=new WeakMap;D.style=y}}}));