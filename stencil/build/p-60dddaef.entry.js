import{r as t,h as o}from"./p-30ca909f.js";import{b as i}from"./p-8011cebb.js";import"./p-82a85041.js";import{R as l}from"./p-b9021c29.js";import"./p-395bd3b0.js";import"./p-12b41941.js";import"./p-7183ba4d.js";const s=class{constructor(o){t(this,o)}render(){return o(l,null,o("div",{class:"blog-index"},i.map((t=>o("div",{class:"blog-item"},o("stencil-route-link",{url:t.url,class:"post-title"},o("h1",null,t.title)),o("span",{class:"post-meta"},o("a",{href:`http://twitter.com/${t.twitter}`},o("img",{alt:`Author: ${t.author}`,class:"post-author-image",src:`/assets/img/blog/authors/${t.twitter}.jpg`})),o("a",{class:"post-author-name",href:`http://twitter.com/${t.twitter}`},t.author),o("span",{class:"post-date"},t.date)),o("p",null,t.description),o("stencil-route-link",{url:t.url,class:"read-more"},"Read more"))))))}};s.style='blog-list app-icon{margin-left:4px}blog-list .ui-container{margin-bottom:160px;position:relative}blog-list .post-meta{text-transform:uppercase;color:#92A1B3;font-size:11px;font-weight:500;letter-spacing:0.04em;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}blog-list .post-title a{text-decoration:none}blog-list .post-title a:hover h1{color:var(--color-gunpowder)}blog-list h1{font-size:32px;line-height:38px;font-weight:600;margin:0 0 12px}blog-list .blog-item{margin-bottom:40px}blog-list .blog-item p{font-size:16px;line-height:1.8;color:#27323F;margin:22px 0}blog-list .read-more a{color:var(--color-dodger-blue);text-decoration:none;font-weight:500;font-size:16px}blog-list .blog-index,blog-list .blog-content{max-width:640px;margin-left:auto;margin-right:auto;margin-bottom:160px}blog-list .blog-content .post-meta{margin-bottom:80px}blog-list h2,blog-list h3{margin-bottom:0;margin-top:27px;padding-top:25px}blog-list .blog-content img:not(.post-author-image),blog-list .blog-content svg{width:100%}blog-list .post-author-image{width:24px;height:24px;margin-right:8px;-ms-flex:0 0 24px;flex:0 0 24px;border-radius:12px}blog-list .post-author-name{padding-right:15px;color:inherit;text-decoration:none}blog-list .post-author-name:hover{text-decoration:underline}blog-list .post-date::before{content:"|";padding-right:12px}blog-list .share-links{position:absolute;top:0;right:64px;height:100%}blog-list .share-links .sticky{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;position:-webkit-sticky;position:sticky;top:24px}blog-list .share-links a svg{-webkit-transition:fill 0.2s;transition:fill 0.2s;fill:#CED6E0;width:24px;height:24px}blog-list .share-links a:hover svg{fill:#B2BECD}blog-list .share-links a+a{margin-top:12px}@media screen and (max-width: 840px){blog-list .ui-container{display:-ms-flexbox;display:flex;-ms-flex-direction:column-reverse;flex-direction:column-reverse}blog-list .blog-content{margin-bottom:42px}blog-list .blog-content .post-meta{margin-bottom:42px}blog-list .share-links{position:static}blog-list .share-links .sticky{-ms-flex-direction:row;flex-direction:row}blog-list .share-links a+a{margin-top:0;margin-lefT:12px}}';export{s as blog_list}