import{r,h as a}from"./p-30ca909f.js";const e=class{constructor(a){r(this,a)}render(){return a("div",null,a("div",{class:"demo-card__image"},a("a",{target:"_blank",rel:"noopener",href:this.demoUrl},a("img",{src:`${this.imgPath}.jpg`,srcSet:`${this.imgPath}.jpg 1x, ${this.imgPath}@2x.jpg 2x`,loading:"lazy"}))),a("h3",null,this.name),a("p",null,this.description),a("p",null,a("a",{target:"_blank",rel:"noopener",href:this.demoUrl,class:"text-link text-link--primary"},"Demo"),"  ",a("a",{target:"_blank",rel:"noopener",href:this.sourceUrl,class:"text-link text-link--secondary"},"Source")))}};e.style=".demo-card-list{display:grid;grid-template-columns:repeat(2, 1fr);grid-gap:46px;margin-bottom:100px}@media screen and (max-width: 768px){.demo-card-list{grid-template-columns:repeat(2, 1fr);grid-gap:36px}}@media screen and (max-width: 480px){.demo-card-list{grid-template-columns:repeat(1, 1fr)}}demo-card{padding-bottom:20px}demo-card h3{margin-bottom:0}demo-card p{margin-top:8px;margin-bottom:0;line-height:1.5}.demo-card__image{border-radius:15px;overflow:hidden;background:var(--color-white);-webkit-box-shadow:var(--card-shadow);box-shadow:var(--card-shadow);border-radius:13px;-webkit-box-shadow:0 2px 4px 0 rgba(0, 0, 0, 0.09);box-shadow:0 2px 4px 0 rgba(0, 0, 0, 0.09)}.demo-card__image img{width:100%;vertical-align:bottom}";export{e as demo_card}