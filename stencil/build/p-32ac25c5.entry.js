import{r as t,c as i,h as s,g as e}from"./p-30ca909f.js";const n=class{constructor(s){t(this,s),this.toggleModal=i(this,"toggleModal",7)}render(){return[s("section",{class:"content"},s("div",{class:"container"},s("img",{src:"/assets/img/ds-guide-cover.png",alt:"Design Systems guide cover"}),s("hgroup",null,s("h3",null,"Interested in building Design Systems with Web Components?"),s("p",null,"Our new guide breaks down everything you need to know."),s("a",{href:"#",class:"btn btn--secondary btn--small",onClick:t=>{t.preventDefault(),this.toggleModal.emit(!0)}},"Get the guide"))))]}};n.style="guide-callout section{background:#232169}guide-callout .content{padding:0}guide-callout .container{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;overflow:visible}guide-callout .content img{width:332px;height:359px;margin-top:-24px;-ms-flex:0 0 auto;flex:0 0 auto;margin-right:48px;display:block}guide-callout .content hgroup{max-width:368px;height:100%;margin-bottom:8px}guide-callout .content hgroup h3{color:#fff}guide-callout .content hgroup p{font-size:16px;color:#BCBAFF;opacity:0.9;max-width:300px;margin-top:10px;margin-bottom:16px}@media screen and (max-width: 768px){guide-callout .content img{margin-right:16px}}@media screen and (max-width: 640px){guide-callout .content img{display:none}guide-callout .content hgroup{text-align:center;margin-top:80px;margin-bottom:80px;max-width:460px;z-index:2;position:relative}guide-callout .content hgroup p{max-width:460px;margin-left:auto;margin-right:auto}}";const o=class{constructor(i){t(this,i),this.glPosBuffer=null,this.glProgram=null,this.gl=null,this.enabled=!0,this.ready=!0,this.vert="attribute vec2 a_position;\nvoid main() {gl_Position = vec4(a_position, 0, 1);}",this.retina=!1,this.frag="void main() {gl_FragColor = vec4(0, 0, 0, 1);}",this.uniforms={}}shaderChanged(){this.compileShader(),this.resolveUniforms(),this.renderGL()}uniformsChanged(){this.resolveUniforms(),this.renderGL()}componentDidLoad(){if(this.canvas){this.resize();const t=this.gl=this.canvas.getContext("webgl");if(t.getExtension("OES_standard_derivatives"),t.getExtension("EXT_shader_texture_lod"),!t)return console.warn("webgl is not available"),this.canvas=void 0,void(this.enabled=!1);this.initGL(),this.compileShader(),this.resolveUniforms(),this.renderGL()}}resize(){const t=this.canvas;if(!t)return;const i=this.retina?window.devicePixelRatio:1,s=t.clientWidth*i,e=t.clientHeight*i;t.width===s&&t.height===e||(t.width=s,t.height=e,this.gl&&this.gl.viewport(0,0,this.gl.drawingBufferWidth,this.gl.drawingBufferHeight))}resolveUniforms(){const t=this.gl;if(!t)return;const i=this.uniforms,s=Object.keys(i);t.useProgram(this.glProgram);for(let e of s){const[s,n]=e.split(":",2),o=t.getUniformLocation(this.glProgram,n);t["uniform"+s](o,i[e])}}initGL(){const t=this.gl;if(!t)return;t.viewport(0,0,t.drawingBufferWidth,t.drawingBufferHeight);const i=this.glPosBuffer=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,i);const s=new Float32Array([1,1,-1,1,1,-1,-1,-1]);t.bufferData(t.ARRAY_BUFFER,s,t.STATIC_DRAW)}compileShader(){const t=this.gl;if(!t)return;const i=t.createShader(t.VERTEX_SHADER);t.shaderSource(i,this.vert),t.compileShader(i);const s=t.getShaderInfoLog(i);s&&console.debug(s);const e=t.createShader(t.FRAGMENT_SHADER);t.shaderSource(e,this.frag),t.compileShader(e);const n=t.getShaderInfoLog(e);n&&console.debug(n);const o=this.glProgram=t.createProgram();t.attachShader(o,i),t.attachShader(o,e),t.linkProgram(o)}renderGL(){const t=this.gl;if(!t)return;if(!this.ready)return t.clearColor(.03,.05,.07,1),t.clear(t.COLOR_BUFFER_BIT),void t.flush();t.bindBuffer(t.ARRAY_BUFFER,this.glPosBuffer);const i=t.getAttribLocation(this.glProgram,"a_position");t.enableVertexAttribArray(i),t.vertexAttribPointer(i,2,t.FLOAT,!1,0,0),t.useProgram(this.glProgram),t.drawArrays(t.TRIANGLE_STRIP,0,4)}render(){return this.enabled?(this.resize(),s("canvas",{ref:t=>this.canvas=t})):null}get el(){return e(this)}static get watchers(){return{vert:["shaderChanged"],frag:["shaderChanged"],uniforms:["uniformsChanged"]}}};o.style=":host{display:block;width:100%;height:100%}canvas{width:100%;height:100%}";export{n as guide_callout,o as pro_glshader}