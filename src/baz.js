import { PolymerElement, html } from '@polymer/polymer/polymer-element';

export class Baz extends PolymerElement {
  
  static get template() {
    return html`
      <section>Baz!</section>
    `;
  }

}

customElements.define('jb-baz', Baz);
