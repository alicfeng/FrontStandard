import { r as registerInstance, h, f as Host, g as getElement } from './index-fda278ee.js';

const jsjEllipsisCss = ":host{overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;word-break:break-all}";

const JsjEllipsis = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /**
      * 显示行数
    */
    this.line = '2';
  }
  componentDidLoad() {
    this.element.style.setProperty('-webkit-line-clamp', this.line + '');
  }
  render() {
    return (h(Host, null, h("span", { title: this.value }, this.value)));
  }
  get element() { return getElement(this); }
};
JsjEllipsis.style = jsjEllipsisCss;

export { JsjEllipsis as jsj_ellipsis };
