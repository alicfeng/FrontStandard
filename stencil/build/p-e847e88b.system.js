var __spreadArray=this&&this.__spreadArray||function(r,n){for(var t=0,e=n.length,a=r.length;t<e;t++,a++)r[a]=n[t];return r};System.register([],(function(r){"use strict";return{execute:function(){var n=r("c",(function(r,n){var t=new Map;var e=r;var a=function(r,n){if(Array.isArray(r)){__spreadArray([],r).forEach((function(r){n[r]=e[r]}))}else{n[r]=Object.assign({},e)}};var c=function(r,n){if(!t.has(r)){t.set(r,n);a(n,r)}return function(){if(t.has(r)){t.delete(r)}}};var i=function(r,n){var c=r.state;e=c;t.forEach(a);return n};var o=function(r,t){return n(c,t[0])};var s=function(r,n){var e=r.prototype;var a=e.connectedCallback;var i=e.disconnectedCallback;e.connectedCallback=function(){c(this,n);if(a){return a.call(this)}};e.disconnectedCallback=function(){t.delete(this);if(i){i.call(this)}}};return{Provider:i,Consumer:o,injectProps:s}}))}}}));