import{r as s,g as t}from"./p-30ca909f.js";import{A as i}from"./p-fda4bb90.js";import"./p-83f217d4.js";const e=class{constructor(t){s(this,t),this.when=!0,this.message=""}enable(s){this.unblock&&this.unblock(),this.history&&(this.unblock=this.history.block(s))}disable(){this.unblock&&(this.unblock(),this.unblock=void 0)}componentWillLoad(){this.when&&this.enable(this.message)}updateMessage(s,t){this.when?this.when&&t===s||this.enable(this.message):this.disable()}componentDidUnload(){this.disable()}render(){return null}get el(){return t(this)}static get watchers(){return{message:["updateMessage"],when:["updateMessage"]}}};i.injectProps(e,["history"]);export{e as stencil_router_prompt}