import{r as t,c as i,h as o,H as s,g as a}from"./p-30ca909f.js";import{B as e}from"./p-bd39c1ed.js";import"./p-12b41941.js";const n=class{constructor(o){t(this,o),this.onModalClose=i(this,"modalClose",7),this.open=!1,this.visible=!1,this.OPEN_DELAY=500,this.CLOSE_DELAY=500,this.close=()=>{this.visible=!1,this.hideBackdrop(),setTimeout((()=>{this.open=!1}),this.CLOSE_DELAY)},this.openBackdrop=()=>{const t=document.createElement("div");t.className="modal__backdrop",document.body.appendChild(t),this.initBackdrop(t),this.backdropEl=t,requestAnimationFrame((()=>{t.classList.add("in")}))},this.hideBackdrop=()=>{this.backdropEl&&(this.backdropEl.classList.add("out"),setTimeout((()=>{var t;document.body.removeChild(this.backdropEl),this.backdropEl=null,this.modalClose&&this.modalClose(),null===(t=this.onModalClose)||void 0===t||t.emit()}),this.CLOSE_DELAY))},this.checkBackdrop=()=>{},this.initBackdrop=t=>{t.addEventListener("click",(()=>{this.close()}))}}componentDidLoad(){this.checkBackdrop()}handleKeyUp(t){this.open&&"Escape"===t.key&&this.close()}openChanged(){this.open&&!this.backdropEl?this.openBackdrop():!this.open&&this.backdropEl&&this.hideBackdrop(),requestAnimationFrame((()=>{this.visible=this.open}))}render(){return o(s,{style:{display:this.open?"block":"none"}},o("div",{class:"modal__wrap"+(this.visible?" in":"")},o("div",{class:"modal__content"},o(e,{class:"modal__close-button",onClick:this.close},o("ion-icon",{name:"close"})),o("div",{class:"modal__body"},o("slot",null)))))}static get watchers(){return{open:["openChanged"]}}};n.style=":root{--modal-z-index:1100;--modal-backdrop-z-index:1090;--modal-width:768px;--modal-padding:48px;--modal-border-radius:24px}site-modal{display:block;pointer-events:none;position:fixed;top:0;left:0;bottom:0;right:0;z-index:var(--modal-z-index)}.modal__backdrop{position:fixed;top:0;right:0;bottom:0;left:0;z-index:var(--modal-backdrop-z-index);-webkit-transition:opacity 300ms ease-in-out;transition:opacity 300ms ease-in-out;background-color:#000;opacity:0}.modal__backdrop.in{opacity:0.5}.modal__backdrop.out{opacity:0}.modal__wrap{-webkit-transition:-webkit-transform 300ms cubic-bezier(0.32, 0.72, 0, 1);transition:-webkit-transform 300ms cubic-bezier(0.32, 0.72, 0, 1);transition:transform 300ms cubic-bezier(0.32, 0.72, 0, 1);transition:transform 300ms cubic-bezier(0.32, 0.72, 0, 1), -webkit-transform 300ms cubic-bezier(0.32, 0.72, 0, 1);-webkit-transform:translateY(-120%);transform:translateY(-120%)}.modal__wrap.in{-webkit-transform:translate(0%);transform:translate(0%)}.modal__content{pointer-events:auto;max-width:var(--modal-width);margin:76px auto;background:white;position:relative;border-radius:var(--modal-border-radius)}.modal__content .modal__close-button{position:absolute;top:-10px;right:-10px;background:#fff;color:var(--c-carbon-90);padding:0;text-align:center;border:0;border-radius:100%;height:30px;width:30px;-webkit-box-shadow:var(--elevation-2);box-shadow:var(--elevation-2);outline:0}.modal__content .modal__close-button ion-icon{vertical-align:middle;margin-top:-3px}.modal__body{padding:var(--modal-padding);max-height:calc(100vh - 76px);overflow:auto}.modal__body h1,.modal__body h2,.modal__body h3,.modal__body h4,.modal__body h5{margin-top:0}";const d=class{constructor(i){t(this,i),this.width=720,this.height=520}handleWindowResize(){window.requestAnimationFrame((()=>this.resizeVideo()))}componentDidLoad(){window.requestAnimationFrame((()=>this.resizeVideo()))}resizeVideo(){if(this.el){const t=this.el.parentElement,i=null==t?void 0:t.offsetWidth;if(!i)return;this.width=i,this.height=.625*i}}render(){const{videoId:t}=this;return t?o(s,null,o("script",{src:"//fast.wistia.com/assets/external/E-v1.js",async:!0}),o("div",{class:`wistia_embed wistia_async_${t}`,style:{width:`${this.width}px`,height:`${this.height}px`}}," ")):null}get el(){return a(this)}};d.style=".sc-wistia-video-h{display:block}.sc-wistia-video-h .wistia_embed.sc-wistia-video{margin:auto}";export{n as site_modal,d as wistia_video}