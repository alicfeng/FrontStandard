import{c as n,a as t,g as r}from"./p-7183ba4d.js";const e=r(n((function(n){"undefined"!=typeof self&&self,n.exports=function(n){var t={};function r(e){if(t[e])return t[e].exports;var u=t[e]={i:e,l:!1,exports:{}};return n[e].call(u.exports,u,u.exports,r),u.l=!0,u.exports}return r.m=n,r.c=t,r.d=function(n,t,e){r.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:e})},r.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},r.t=function(n,t){if(1&t&&(n=r(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var u in n)r.d(e,u,function(t){return n[t]}.bind(null,u));return e},r.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return r.d(t,"a",t),t},r.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},r.p="",r(r.s=1)}([function(n){n.exports=function(n){var t={};function r(e){if(t[e])return t[e].exports;var u=t[e]={i:e,l:!1,exports:{}};return n[e].call(u.exports,u,u.exports,r),u.l=!0,u.exports}return r.m=n,r.c=t,r.d=function(n,t,e){r.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:e})},r.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},r.t=function(n,t){if(1&t&&(n=r(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var u in n)r.d(e,u,function(t){return n[t]}.bind(null,u));return e},r.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return r.d(t,"a",t),t},r.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},r.p="",r(r.s=0)}([function(n,t,r){n.exports=r(1)},function(n,t,r){var e=r(2),u=r(3);n.exports={Link:e,Date:u}},function(n){n.exports={url:function(n,t){if(n&&[n.link_type,n._linkType,n.linkType].some((function(n){return n&&["Document","Link.Document","Link.document"].includes(n)}))&&t&&"function"==typeof t){var r=t(n);if(r)return r}return n&&n.url?n.url:""}}},function(n){n.exports=function(n){if(!n)return null;var t=24==n.length?"".concat(n.substring(0,22),":").concat(n.substring(22,24)):n;return new Date(t)}}])},function(n,t,r){n.exports=r(2)},function(n,t,r){var e=r(0),u=r(3);n.exports={Date:e.Date,Link:e.Link,RichText:u}},function(n,t,r){var e=r(4),u=r(0).Link,i=r(5),o=e.Elements;function c(n,t,r,e,c){switch(t){case o.heading1:return a("h1",r,c);case o.heading2:return a("h2",r,c);case o.heading3:return a("h3",r,c);case o.heading4:return a("h4",r,c);case o.heading5:return a("h5",r,c);case o.heading6:return a("h6",r,c);case o.paragraph:return a("p",r,c);case o.preformatted:return function(n){return"<pre".concat(f(n),">").concat(i(n.text),"</pre>")}(r);case o.strong:return a("strong",r,c);case o.em:return a("em",r,c);case o.listItem:case o.oListItem:return a("li",r,c);case o.list:return a("ul",r,c);case o.oList:return a("ol",r,c);case o.image:return function(n,t){var r=t.linkTo?u.url(t.linkTo,n):null,e=t.linkTo&&t.linkTo.target?'target="'.concat(t.linkTo.target,'" rel="noopener"'):"",i=[t.label||"","block-img"],o='<img src="'.concat(t.url,'" alt="').concat(t.alt||"",'" copyright="').concat(t.copyright||"",'">');return'\n    <p class="'.concat(i.join(" "),'">\n      ').concat(r?"<a ".concat(e,' href="').concat(r,'">').concat(o,"</a>"):o,"\n    </p>\n  ")}(n,r);case o.embed:return function(n){return'\n    <div data-oembed="'.concat(n.oembed.embed_url,'"\n      data-oembed-type="').concat(n.oembed.type,'"\n      data-oembed-provider="').concat(n.oembed.provider_name,'"\n      ').concat(f(n),">\n          \n      ").concat(n.oembed.html,"\n    </div>\n  ")}(r);case o.hyperlink:return function(n,t,r){var e=t.data.target?'target="'.concat(t.data.target,'" rel="noopener"'):"";return"<a ".concat(e,' href="').concat(u.url(t.data,n),'">').concat(r.join(""),"</a>")}(n,r,c);case o.label:return function(n,t){return"<span ".concat(f(n.data),">").concat(t.join(""),"</span>")}(r,c);case o.span:return function(n){return n?i(n).replace(/\n/g,"<br />"):""}(e);default:return""}}function f(n){return n.label?' class="'.concat(n.label,'"'):""}function a(n,t,r){return"<".concat(n).concat(f(t),">").concat(r.join(""),"</").concat(n,">")}n.exports={asText:function(n,t){return e.asText(n,t)},asHtml:function(n,t,r){return e.serialize(n,c.bind(null,t),r).join("")},Elements:o}},function(n){n.exports=function(n){var t={};function r(e){if(t[e])return t[e].exports;var u=t[e]={i:e,l:!1,exports:{}};return n[e].call(u.exports,u,u.exports,r),u.l=!0,u.exports}return r.m=n,r.c=t,r.d=function(n,t,e){r.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:e})},r.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},r.t=function(n,t){if(1&t&&(n=r(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var u in n)r.d(e,u,function(t){return n[t]}.bind(null,u));return e},r.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return r.d(t,"a",t),t},r.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},r.p="",r(r.s=9)}([function(n,t,r){var e=r(3);n.exports=function(n){return function t(r){return 0===arguments.length||e(r)?t:n.apply(this,arguments)}}},function(n,t,r){var e=r(0),u=r(3);n.exports=function(n){return function t(r,i){switch(arguments.length){case 0:return t;case 1:return u(r)?t:e((function(t){return n(r,t)}));default:return u(r)&&u(i)?t:u(r)?e((function(t){return n(t,i)})):u(i)?e((function(t){return n(r,t)})):n(r,i)}}}},function(n,t){var r;function e(n,t,r){return t in n?Object.defineProperty(n,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[t]=r,n}Object.defineProperty(t,"__esModule",{value:!0}),t.PRIORITIES=t.NODE_TYPES=void 0;var u={heading1:"heading1",heading2:"heading2",heading3:"heading3",heading4:"heading4",heading5:"heading5",heading6:"heading6",paragraph:"paragraph",preformatted:"preformatted",strong:"strong",em:"em",listItem:"list-item",oListItem:"o-list-item",list:"group-list-item",oList:"group-o-list-item",image:"image",embed:"embed",hyperlink:"hyperlink",label:"label",span:"span"};t.NODE_TYPES=u;var i=(e(r={},u.heading1,4),e(r,u.heading2,4),e(r,u.heading3,4),e(r,u.heading4,4),e(r,u.heading5,4),e(r,u.heading6,4),e(r,u.paragraph,3),e(r,u.preformatted,5),e(r,u.strong,6),e(r,u.em,6),e(r,u.oList,1),e(r,u.list,1),e(r,u.listItem,1),e(r,u.oListItem,1),e(r,u.image,1),e(r,u.embed,1),e(r,u.hyperlink,3),e(r,u.label,4),e(r,u.span,7),r);t.PRIORITIES=i},function(n){n.exports=function(n){return null!=n&&"object"==typeof n&&!0===n["@@functional/placeholder"]}},function(n,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e=v(r(12)),u=v(r(15)),i=v(r(16)),o=v(r(17)),c=v(r(21)),f=v(r(7)),a=r(23),s=r(2),l=r(8);function v(n){return n&&n.__esModule?n:{default:n}}function b(n){return function(n,t){return t.reduce((function(n,t){var r=(0,c.default)(n);if(r){if(r.some((function(n){return n.isParentOf(t)})))return(0,o.default)(n).concat([r.concat(t)]);var e=(0,c.default)(r);return e&&function(n,t){return n.end>=t.start}(e,t)?(0,o.default)(n).concat([r.concat(t)]):n.concat([[t]])}return[[t]]}),[])}(0,(0,i.default)([function(n,t){return n.start-t.start},function(n,t){return n.end-t.end}],n))}function h(n){if(0===n.length)throw new Error("Unable to elect node on empty list");var t=function(n){return function(n){if(Array.isArray(n))return n}(n)||function(n){if(Symbol.iterator in Object(n)||"[object Arguments]"===Object.prototype.toString.call(n))return Array.from(n)}(n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}(n.sort((function(n,t){if(n.isParentOf(t))return-1;if(t.isParentOf(n))return 1;var r=s.PRIORITIES[n.type]-s.PRIORITIES[t.type];return 0===r?n.text.length-t.text.length:r})));return{elected:t[0],others:t.slice(1)}}function d(n,t,r){if(t.length>0)return function(n,t,r){return t.reduce((function(e,u,i){var o=[],c=i===t.length-1&&r.upper>u.end;if(0===i&&u.start>r.lower){var f=new l.TextNode(r.lower,u.start,n.slice(r.lower,u.start));o=o.concat(f)}else{var a=t[i-1];if(a&&u.start>a.end){var s=n.slice(a.end,u.start),v=new l.TextNode(a.end,u.start,s);o=o.concat(v)}}if(o=o.concat(u),c){var b=new l.TextNode(u.end,r.upper,n.slice(u.end,r.upper));o=o.concat(b)}return e.concat(o)}),[])}(n,y(n,t),r);var e=n.slice(r.lower,r.upper);return[new l.TextNode(r.lower,r.upper,e)]}function y(n,t){var r=b((0,u.default)((function(n){return n.start}),t)).map(h),i=(0,e.default)(r.map((function(t){return function(n,t){var r=t.others.reduce((function(r,e){var u=r.inner,i=r.outer,o=function(n,t,r){return r.start<t.start?{inner:l.SpanNode.slice(r,t.start,r.end,n),outer:l.SpanNode.slice(r,r.start,t.start,n)}:r.end>t.end?{inner:l.SpanNode.slice(r,r.start,t.end,n),outer:l.SpanNode.slice(r,t.end,r.end,n)}:{inner:r}}(n,t.elected,e);return{inner:u.concat(o.inner),outer:o.outer?i.concat(o.outer):i}}),{inner:[],outer:[]}),e=r.outer;return[t.elected.setChildren(d(n,r.inner,t.elected.boundaries()))].concat(y(n,e))}(n,t)})));return(0,u.default)((function(n){return n.start}),i)}var p=function(){function n(){!function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n)}var t;return(t=[{key:"fromRichText",value:function(n){return{key:(0,f.default)(),children:n.reduce((function(n,t){if(a.RichTextBlock.isEmbedBlock(t.type)||a.RichTextBlock.isImageBlock(t.type))return n.concat(new l.BlockNode(t.type,t));var r=function(n){var t=n.spans.map((function(t){var r=n.text.slice(t.start,t.end);return new l.SpanNode(t.start,t.end,t.type,r,[],t)}));return d(n.text,t,{lower:0,upper:n.text.length})}(t),e=n[n.length-1];if(a.RichTextBlock.isListItem(t.type)&&e&&e instanceof l.ListBlockNode){var u=new l.ListItemBlockNode(t,r),i=e.addChild(u);return(0,o.default)(n).concat(i)}if(a.RichTextBlock.isOrderedListItem(t.type)&&e&&e instanceof l.OrderedListBlockNode){var c=new l.OrderedListItemBlockNode(t,r),f=e.addChild(c);return(0,o.default)(n).concat(f)}if(a.RichTextBlock.isListItem(t.type)){var s=new l.ListItemBlockNode(t,r),v=new l.ListBlockNode(a.RichTextBlock.emptyList(),[s]);return n.concat(v)}if(a.RichTextBlock.isOrderedListItem(t.type)){var b=new l.OrderedListItemBlockNode(t,r),h=new l.OrderedListBlockNode(a.RichTextBlock.emptyOrderedList(),[b]);return n.concat(h)}return n.concat(new l.BlockNode(t.type,t,r))}),[])}}}])&&function(n,t){for(var r=0;r<t.length;r++){var e=t[r];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,e.key,e)}}(n,t),n}();t.default=p},function(n){n.exports=Array.isArray||function(n){return null!=n&&n.length>=0&&"[object Array]"===Object.prototype.toString.call(n)}},function(n){n.exports=function(n){return"[object String]"===Object.prototype.toString.call(n)}},function(n,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var n=(new Date).getTime();return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(t){var r=(n+16*Math.random())%16|0;return n=Math.floor(n/16),("x"==t?r:3&r|8).toString(16)}))}},function(n,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.ListBlockNode=t.OrderedListBlockNode=t.OrderedListItemBlockNode=t.ListItemBlockNode=t.BlockNode=t.TextNode=t.SpanNode=t.Node=void 0;var e,u=(e=r(7))&&e.__esModule?e:{default:e},i=r(2);function o(n){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function c(n,t){for(var r=0;r<t.length;r++){var e=t[r];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,e.key,e)}}function f(n,t,r){return t&&c(n.prototype,t),r&&c(n,r),n}function a(n,t){return!t||"object"!==o(t)&&"function"!=typeof t?function(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}(n):t}function s(n){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}function l(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),t&&function(n,t){(Object.setPrototypeOf||function(n,t){return n.__proto__=t,n})(n,t)}(n,t)}function v(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}var b=function n(t,r,e){v(this,n),this.key=(0,u.default)(),this.type=t,this.element=r,this.children=e};t.Node=b;var h=function(){function n(t,r,e,u,i,o){var c;return v(this,n),(c=a(this,s(n).call(this,e,o,i))).start=t,c.end=r,c.text=u,c.children=i,c}return l(n,b),f(n,[{key:"boundaries",value:function(){return{lower:this.start,upper:this.end}}},{key:"isParentOf",value:function(n){return this.start<=n.start&&this.end>=n.end}},{key:"setChildren",value:function(t){return new n(this.start,this.end,this.type,this.text,t,this.element)}}],[{key:"slice",value:function(t,r,e,u){return new n(r,e,t.type,u.slice(r,e),t.children,t.element)}}]),n}();t.SpanNode=h;var d=function(){function n(t,r,e){v(this,n);var u={type:i.NODE_TYPES.span,start:t,end:r,text:e};return a(this,s(n).call(this,t,r,i.NODE_TYPES.span,e,[],u))}return l(n,h),n}();t.TextNode=d;var y=function(){function n(t,r){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return v(this,n),a(this,s(n).call(this,t,r,e))}return l(n,b),n}();t.BlockNode=y;var p=function(){function n(t,r){return v(this,n),a(this,s(n).call(this,i.NODE_TYPES.listItem,t,r))}return l(n,y),n}();t.ListItemBlockNode=p;var m=function(){function n(t,r){return v(this,n),a(this,s(n).call(this,i.NODE_TYPES.oListItem,t,r))}return l(n,y),n}();t.OrderedListItemBlockNode=m;var j=function(){function n(t,r){return v(this,n),a(this,s(n).call(this,i.NODE_TYPES.oList,t,r))}return l(n,y),f(n,[{key:"addChild",value:function(t){var r=this.children.concat(t);return new n(this.element,r)}}]),n}();t.OrderedListBlockNode=j;var x=function(){function n(t,r){return v(this,n),a(this,s(n).call(this,i.NODE_TYPES.list,t,r))}return l(n,y),f(n,[{key:"addChild",value:function(t){var r=this.children.concat(t);return new n(this.element,r)}}]),n}();t.ListBlockNode=x},function(n,t,r){n.exports=r(10)},function(n,t,r){var e=c(r(11)),u=c(r(4)),i=c(r(24)),o=r(2);function c(n){return n&&n.__esModule?n:{default:n}}n.exports={asText:e.default,asTree:u.default.fromRichText,serialize:i.default,Elements:o.NODE_TYPES}},function(n,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,t.default=function(n,t){var r="string"==typeof t?t:" ";return n.map((function(n){return n.text})).join(r)}},function(n,t,r){var e=r(0)(r(13)(!0));n.exports=e},function(n,t,r){var e=r(14);n.exports=function(n){return function t(r){for(var u,i,o,c=[],f=0,a=r.length;f<a;){if(e(r[f]))for(o=0,i=(u=n?t(r[f]):r[f]).length;o<i;)c[c.length]=u[o],o+=1;else c[c.length]=r[f];f+=1}return c}}},function(n,t,r){var e=r(0),u=r(5),i=r(6),o=e((function(n){return!!u(n)||!!n&&"object"==typeof n&&!i(n)&&(1===n.nodeType?!!n.length:0===n.length||n.length>0&&n.hasOwnProperty(0)&&n.hasOwnProperty(n.length-1))}));n.exports=o},function(n,t,r){var e=r(1)((function(n,t){return Array.prototype.slice.call(t,0).sort((function(t,r){var e=n(t),u=n(r);return e<u?-1:e>u?1:0}))}));n.exports=e},function(n,t,r){var e=r(1)((function(n,t){return Array.prototype.slice.call(t,0).sort((function(t,r){for(var e=0,u=0;0===e&&u<n.length;)e=n[u](t,r),u+=1;return e}))}));n.exports=e},function(n,t,r){var e=r(18)(0,-1);n.exports=e},function(n,t,r){var e=r(19),u=r(20)(e("slice",(function(n,t,r){return Array.prototype.slice.call(r,n,t)})));n.exports=u},function(n,t,r){var e=r(5);n.exports=function(n,t){return function(){var r=arguments.length;if(0===r)return t();var u=arguments[r-1];return e(u)||"function"!=typeof u[n]?t.apply(this,arguments):u[n].apply(u,Array.prototype.slice.call(arguments,0,r-1))}}},function(n,t,r){var e=r(0),u=r(1),i=r(3);n.exports=function(n){return function t(r,o,c){switch(arguments.length){case 0:return t;case 1:return i(r)?t:u((function(t,e){return n(r,t,e)}));case 2:return i(r)&&i(o)?t:i(r)?u((function(t,r){return n(t,o,r)})):i(o)?u((function(t,e){return n(r,t,e)})):e((function(t){return n(r,o,t)}));default:return i(r)&&i(o)&&i(c)?t:i(r)&&i(o)?u((function(t,r){return n(t,r,c)})):i(r)&&i(c)?u((function(t,r){return n(t,o,r)})):i(o)&&i(c)?u((function(t,e){return n(r,t,e)})):i(r)?e((function(t){return n(t,o,c)})):i(o)?e((function(t){return n(r,t,c)})):i(c)?e((function(t){return n(r,o,t)})):n(r,o,c)}}}},function(n,t,r){var e=r(22)(-1);n.exports=e},function(n,t,r){var e=r(1),u=r(6),i=e((function(n,t){var r=n<0?t.length+n:n;return u(t)?t.charAt(r):t[r]}));n.exports=i},function(n,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.RichTextBlock=void 0;var e=r(2);var u=function(){function n(t,r,e){!function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),this.type=t,this.text=r,this.spans=e}var t;return(t=[{key:"isEmbedBlock",value:function(n){return n===e.NODE_TYPES.embed}},{key:"isImageBlock",value:function(n){return n===e.NODE_TYPES.image}},{key:"isList",value:function(n){return n===e.NODE_TYPES.list}},{key:"isOrderedList",value:function(n){return n===e.NODE_TYPES.oList}},{key:"isListItem",value:function(n){return n===e.NODE_TYPES.listItem}},{key:"isOrderedListItem",value:function(n){return n===e.NODE_TYPES.oListItem}},{key:"emptyList",value:function(){return{type:e.NODE_TYPES.list,spans:[],text:""}}},{key:"emptyOrderedList",value:function(){return{type:e.NODE_TYPES.oList,spans:[],text:""}}}])&&function(n,t){for(var r=0;r<t.length;r++){var e=t[r];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,e.key,e)}}(n,t),n}();t.RichTextBlock=u},function(n,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e,u=(e=r(4))&&e.__esModule?e:{default:e},i=r(8);t.default=function(n,t,r){return u.default.fromRichText(n).children.map((function(n,e){return function(n,t,r,e){return function n(r,u){var o=r instanceof i.SpanNode?r.text:null,c=r.children.reduce((function(t,r,e){return t.concat([n(r,e)])}),[]);return e&&e(r.type,r.element,o,c,u)||t(r.type,r.element,o,c,u)}(n,r)}(n,t,e,r)}))}}])},function(n){
/*!
 * escape-html
 * Copyright(c) 2012-2013 TJ Holowaychuk
 * Copyright(c) 2015 Andreas Lubbe
 * Copyright(c) 2015 Tiancheng "Timothy" Gu
 * MIT Licensed
 */
var t=/["'&<>]/;n.exports=function(n){var r,e=""+n,u=t.exec(e);if(!u)return e;var i="",o=0,c=0;for(o=u.index;o<e.length;o++){switch(e.charCodeAt(o)){case 34:r="&quot;";break;case 38:r="&amp;";break;case 39:r="&#39;";break;case 60:r="&lt;";break;case 62:r="&gt;";break;default:continue}c!==o&&(i+=e.substring(c,o)),c=o+1,i+=r}return c!==o?i+e.substring(c,o):i}}])})));export{e as P}