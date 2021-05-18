export default class InputSuffix extends HTMLElement {
  static get observedAttributes() { return ['value', 'maxlength'] }

  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.innerHTML = `
        <style>
        :host{ 
          position: absolute;
          top: -10px;
          right: 6px;
        }
        .primary-text {
          color: #1890ff;
          font-weight: 500;
        }
        </style>

        <span id="input-suffix">
          (<span class="primary-text" id="value-text">${this.value}</span>
          /
          <span id="maxlength-text">${this.maxlength}</span>
         )
        </span>
        `
  }

  get value() {
    return this.getAttribute('value') ? this.getAttribute('value').length : 0;
  }

  get maxlength() {
    return this.getAttribute('maxlength');
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'value' && oldValue !== newValue) {
      const textNode = this.shadowRoot.getElementById('value-text')
      textNode.innerText = newValue.length
    }

    if (name === 'maxlength' && oldValue !== newValue) {
      const maxlengthText = this.shadowRoot.getElementById('maxlength-text')
      maxlengthText.innerText = newValue
    }
  }
}

if (!customElements.get('input-suffix')) {
  customElements.define('input-suffix', InputSuffix);
}