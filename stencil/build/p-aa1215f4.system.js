System.register(["./p-d6caec50.system.js","./p-a5683c9b.system.js","./p-5f3cfda1.system.js","./p-8a8689d7.system.js","./p-7ac70065.system.js"],(function(r){"use strict";var e,i,t,a,n;return{setters:[function(r){e=r.h},function(r){i=r.B},function(){},function(r){t=r.h;a=r.P},function(r){n=r.a}],execute:function(){var c=function(r){var i=r.slice;return e(a,{richText:i.primary.content,htmlSerializer:t})};var s=function(r){var i=r.slice;return e("div",{class:"prismic-raw-html",innerHTML:i.primary.html_content.map((function(r){return r.text})).join("")})};var l=function(r){var t=r.slice;return e(i,null,e("div",null,e(a,{richText:t.primary.quote})),t.primary.name?e("cite",null,t.primary.name,e("span",null,t.primary.description)):null)};var u=function(r){var i=r.slice;return e("figure",{class:"prismic-floating-image "+i.primary.side.toLowerCase()},e("img",{loading:"lazy",src:i.primary.illustration.url,alt:i.primary.illustration.alt}),i.primary.caption.length!=0?e("figcaption",null,i.primary.caption[0].text):"")};var m=function(r){var i=r.slice;return e("aside",{class:"prismic-ad"},e("a",{href:i.primary.link.url,target:i.primary.link.target,onClick:function(r){return n(""+location.host+location.pathname,r,"Resource Center")}},e(a,{richText:i.primary.text}),e("img",{class:"prismic-ad__image",loading:"lazy",alt:i.primary.image.alt,height:parseInt(i.primary.image.dimensions.height,10)/2,width:parseInt(i.primary.image.dimensions.width,10)/2,src:i.primary.image.url,srcset:i.primary.image["1x"].url+" 1x, "+i.primary.image.url+" 2x"})))};var o=function(r){var i=r.slice;return e("div",{class:"prismic-youtube-container"},e("iframe",{src:"https://www.youtube.com/embed/"+i.primary.vid,frameborder:"0",allowFullScreen:true}))};var p=function(r){var i=r.slice,t=r.key;console.log(i);switch(i.slice_type){case"normal_text":return e(c,{slice:i,key:t});case"raw_html":return e(s,{slice:i,key:t});case"quote":return e(l,{slice:i,key:t});case"floating_image":return e(u,{slice:i,key:t});case"ad":return e(m,{slice:i,key:t});case"youtube":return e(o,{slice:i,key:t})}return null};var y=r("P",(function(r){var i=r.content;return i.map((function(r,i){return e(p,{slice:r,key:i})}))}))}}}));