import { r as registerInstance, h, f as Host } from './index-fda278ee.js';

const jsjInputSuffixCss = ":host{position:absolute;top:0;right:4px}.primary-text{color:#1890ff;font-weight:500}";

const JsjInputSuffix = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, null, h("span", null, "(", h("span", { class: "primary-text" }, this.value ? this.value.length : 0), "/", this.maxLength, ")")));
  }
};
JsjInputSuffix.style = jsjInputSuffixCss;

export { JsjInputSuffix as jsj_input_suffix };
