import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import style from 'daisyui/dist/full.css';

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('my-element')
export class MyElement extends LitElement {
  /*
   * Convert string to TemplateStringsArray.
   * Reference: https://stackoverflow.com/a/50792840
   */
  static readonly styles = css({raw: [`${style}`], ...[`${style}`]} as TemplateStringsArray);

  /**
   * The name to say "Hello" to.
   */
  @property()
  name = 'World';

  /**
   * The number of times the button has been clicked.
   */
  @property({ type: Number })
  count = 0;

  /**
   * The data-theme of the div.
   */
  @property({ type: String })
  theme = 'light';

  render() {
    return html`
      <h2 class="card-title">Hello, ${this.name}!</h2>
      <div data-theme="${this.theme}">
        <button @click=${this._onClick} part="button" class="btn btn-primary">
          Click Count: ${this.count}
        </button>
        <slot></slot>
        <select class="select select-bordered" @change="${this.onChange}">
          <option disabled selected>Pick your favorite Theme</option>
          <option>light</option>
          <option>garden</option>
          <option>dark</option>
          <option>lofi</option>
          <option>cupcake</option>
        </select>
      </div>
    `;
  }

  private _onClick() {
    this.count++;
  }

  private onChange(e: any) {
    const { selectedIndex, length, ...ops } = e.path[0].options;
    this.theme = ops[selectedIndex].text;
  }

  foo(): string {
    return 'foo';
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'my-element': MyElement;
  }
}
