import{r as e,h as r,H as c,g as i}from"./p-30ca909f.js";import{C as t}from"./p-5bc4d052.js";import{G as a}from"./p-7553333f.js";import{H as s}from"./p-6c7cdce7.js";import"./p-82a85041.js";import{P as o}from"./p-1ecbe995.js";import{R as l}from"./p-b9021c29.js";import{T as p}from"./p-ea72c7c3.js";import"./p-395bd3b0.js";import{s as u}from"./p-49288e77.js";import{P as n}from"./p-f8defc33.js";import{P as m}from"./p-0634cddc.js";import{t as d}from"./p-4304aad8.js";import{g as b,p as g}from"./p-08a4f469.js";import"./p-12b41941.js";import"./p-7183ba4d.js";import"./p-8605974e.js";import"./p-d31be4b2.js";import"./p-393f9fab.js";const h=class{constructor(r){e(this,r)}checkForAds(e){var r;((null===(r=null==e?void 0:e.doc.data)||void 0===r?void 0:r.body)||[]).forEach((e=>{"ad"===e.slice_type&&d(`${location.host}${location.pathname}`,"Resource Center")}))}componentWillLoad(){this.checkForAds(this.prismicData)}render(){const e=b(this.prismicData.doc),i=this.prismicData;return r(c,null,r("div",{class:"resource-article"},r(p,{type:"editorial"},r(l,null,r(a,null,r(t,{md:3,sm:3},r("resource-toc",{titleNames:g(this.prismicData)})),r(t,{md:9,sm:9,xs:12,cols:12},r("div",{class:"resource-article-content"},r("div",{class:"heading-group"},r(s,{class:"ui-theme--editorial",level:1,id:u(i.title)},i.title),r(o,{level:2},i.description),e.map((e=>r("resource-author-item",{author:e}))),r(m,{image:i.doc.data.hero_image,width:"800",height:"420"})),r("article",null,r(n,{content:i.doc.data.body})))))))),r(f,{resource:i}))}get el(){return i(this)}},f=({resource:e})=>r("script",{type:"application/ld+json"},JSON.stringify({"@context":"https://schema.org","@type":"NewsArticle",headline:e.title,image:[e.metaImage],datePublished:e.publishDate,dateModified:e.updatedDate,author:{"@type":"Person",name:e.authors[0].name},publisher:{"@type":"Organization",name:"Ionic",logo:{"@type":"ImageObject",url:"https://ionicframework.com/img/meta/logo.png"}}}));h.style='.ui-blockquote.sc-resource-article{clear:both}.prismic-raw-html.sc-resource-article{width:100%;overflow:auto;clear:both}.prismic-raw-html.sc-resource-article table.sc-resource-article{overflow-x:auto;margin-right:-15px;padding-right:15px;-webkit-box-sizing:content-box;box-sizing:content-box;font-size:13px;border-collapse:collapse;border-spacing:0;margin-bottom:48px}.prismic-raw-html.sc-resource-article table.sc-resource-article td.sc-resource-article,.prismic-raw-html.sc-resource-article table.sc-resource-article th.sc-resource-article{text-align:left;min-width:120px;padding-right:12px;padding-top:12px;padding-bottom:12px}.prismic-raw-html.sc-resource-article table.sc-resource-article td.sc-resource-article:last-child,.prismic-raw-html.sc-resource-article table.sc-resource-article th.sc-resource-article:last-child{padding-right:0}.prismic-raw-html.sc-resource-article table.sc-resource-article th.sc-resource-article,.prismic-raw-html.sc-resource-article table.sc-resource-article b.sc-resource-article{font-weight:600}.prismic-raw-html.sc-resource-article table.sc-resource-article tbody.sc-resource-article tr.sc-resource-article td.sc-resource-article{border-top:1px solid #DEE3EA}.prismic-raw-html.sc-resource-article table.sc-resource-article tbody.sc-resource-article tr.sc-resource-article:first-child td.sc-resource-article{border-top:none}.prismic-raw-html.sc-resource-article table.sc-resource-article>thead.sc-resource-article>tr.sc-resource-article>th.sc-resource-article{border-bottom:1px solid #E9EDF3;font-weight:600}.prismic-ad.sc-resource-article{display:block;margin:var(--space-9) 0 var(--space-10);clear:both}.prismic-ad.sc-resource-article a.sc-resource-article{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;padding:var(--space-6) 368px var(--space-6) var(--space-6);border:var(--border-regular);border-color:var(--c-indigo-30);border-radius:var(--radius-2);overflow:hidden;position:relative;min-height:225px;-webkit-transition:0.2s -webkit-box-shadow ease-out;transition:0.2s -webkit-box-shadow ease-out;transition:0.2s box-shadow ease-out;transition:0.2s box-shadow ease-out, 0.2s -webkit-box-shadow ease-out}.prismic-ad.sc-resource-article a.sc-resource-article .ui-paragraph.sc-resource-article{margin-bottom:0}.prismic-ad.sc-resource-article a.sc-resource-article .prismic-ad__image.sc-resource-article{position:absolute;right:0;top:0;bottom:0;width:100%;max-width:337px;-o-object-fit:cover;object-fit:cover;z-index:-1}.prismic-ad.sc-resource-article a.sc-resource-article:hover{-webkit-box-shadow:var(--elevation-3);box-shadow:var(--elevation-3)}.prismic-ad.sc-resource-article .ui-heading.sc-resource-article{color:var(--c-indigo-100);margin-bottom:var(--space-2)}@media (max-width: 1023px){.prismic-ad.sc-resource-article a.sc-resource-article{padding-right:var(--space-6)}.prismic-ad.sc-resource-article a.sc-resource-article .prismic-ad__image.sc-resource-article{opacity:0.25}}.prismic-youtube-container.sc-resource-article{position:relative;padding-bottom:56.25%;height:0;overflow:hidden;max-width:100%;clear:both}.prismic-youtube-container.sc-resource-article iframe.sc-resource-article,.prismic-youtube-container.sc-resource-article object.sc-resource-article,.prismic-youtube-container.sc-resource-article embed.sc-resource-article{position:absolute;top:0;left:0;width:100%;height:100%}.prismic-floating-image.sc-resource-article{width:295px;float:right;margin:8px -20px 32px 74px}.prismic-floating-image.left.sc-resource-article{float:left;margin-right:74px;margin-left:-20px}.prismic-floating-image.sc-resource-article img.sc-resource-article{-webkit-box-shadow:var(--elevation-8);box-shadow:var(--elevation-8)}.prismic-floating-image.sc-resource-article figcaption.sc-resource-article{color:var(--c-carbon-20);font-size:11px;margin-top:13px}@media (max-width: 1023px){.prismic-floating-image.sc-resource-article{margin-right:0;margin-left:32px;width:100%}.prismic-floating-image.left.sc-resource-article{margin-left:0;margin-right:32px}}.sc-resource-article-h{padding-bottom:76px}.heading-group.sc-resource-article img.sc-resource-article{max-width:100%;-webkit-margin-after:var(--space-11);margin-block-end:var(--space-11)}.heading-group.sc-resource-article .ui-heading-1.sc-resource-article{-webkit-margin-before:var(--space-10);margin-block-start:var(--space-10);-webkit-margin-after:var(--space-5);margin-block-end:var(--space-5)}.heading-group.sc-resource-article .ui-paragraph.sc-resource-article{color:#73849A;-webkit-margin-after:var(--space-6);margin-block-end:var(--space-6)}resource-toc.sc-resource-article{-webkit-margin-before:var(--space-10);margin-block-start:var(--space-10)}resource-author-item.sc-resource-article{-webkit-margin-before:var(--space-3);margin-block-start:var(--space-3);-webkit-margin-after:var(--space-3);margin-block-end:var(--space-3)}resource-author-item.sc-resource-article:last-of-type{-webkit-margin-after:73px;margin-block-end:73px}article.sc-resource-article .ui-heading-2.sc-resource-article{-webkit-margin-before:var(--space-9);margin-block-start:var(--space-9);-webkit-margin-after:var(--space-3);margin-block-end:var(--space-3)}article.sc-resource-article .ui-heading-3.sc-resource-article{-webkit-margin-before:var(--space-8);margin-block-start:var(--space-8);-webkit-margin-after:var(--space-3);margin-block-end:var(--space-3)}article.sc-resource-article .ui-heading-4.sc-resource-article{-webkit-margin-before:var(--space-3);margin-block-start:var(--space-3);-webkit-margin-after:var(--space-2);margin-block-end:var(--space-2)}article.sc-resource-article .ui-heading.sc-resource-article:first-child{-webkit-margin-before:0;margin-block-start:0}article.sc-resource-article p.sc-resource-article{font-size:16px;letter-spacing:-0.011em;line-height:1.75em;margin-bottom:1.8em;color:var(--c-indigo-80)}article.sc-resource-article ul.sc-resource-article li.sc-resource-article{list-style-type:none}article.sc-resource-article ul.sc-resource-article li.sc-resource-article::before{content:"";display:inline-block;width:6px;height:6px;background:#b2becd;position:absolute;top:12px;left:0;border-radius:8px}article.sc-resource-article ol.sc-resource-article li.sc-resource-article{list-style-type:counter-style}article.sc-resource-article ul.sc-resource-article,article.sc-resource-article ol.sc-resource-article{font-size:16px;letter-spacing:-0.011em;line-height:1.75em;margin-bottom:1.8em;color:var(--c-indigo-80)}article.sc-resource-article li.sc-resource-article{position:relative;padding-left:18px}article.sc-resource-article table.sc-resource-article{overflow-x:auto;margin-right:-15px;padding-right:15px;-webkit-box-sizing:content-box;box-sizing:content-box;font-size:13px}article.sc-resource-article table.sc-resource-article td.sc-resource-article,article.sc-resource-article table.sc-resource-article th.sc-resource-article{min-width:120px;padding-right:12px}article.sc-resource-article table.sc-resource-article tbody.sc-resource-article tr.sc-resource-article td.sc-resource-article{border-top-color:#DEE3EA}article.sc-resource-article table.sc-resource-article>thead.sc-resource-article>tr.sc-resource-article>th.sc-resource-article{border-bottom-color:#E9EDF3;font-weight:600}article.sc-resource-article img.sc-resource-article{max-width:100%}';export{h as resource_article}