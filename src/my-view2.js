/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import { LitElement, html, css } from 'lit-element';
import sharedStyles from './shared-styles.js';
import typingStyles from './typing-styles.js';

class MyElement extends LitElement {

  static get styles() {
    return [
      sharedStyles,
      typingStyles,
      css`
      :host {
          display: block;

          padding: 10px;
        }
       `,
    ]
  }

  render() {
    return html`

      <div class="card">
        <div class="circle">2</div>
        <h1>View Two</h1>
        <div class="typing-pad">
        <p>
          Hi! Hope you like my custom element!
        </p>
        <p>
          I really enjoyed working on this test
        </p>
        <p>
          I hope to enjoy working with InterIntel just as much
        </p>
        <p>
          I'm beginning to really like polymer, and LitElements
        </p>
        <p>
          Bulma reminds me of the good old bootstrap...
        </p>
        <p>
          Ok, got to go now, hope to see you soon!!
        </p>
      </div>
      </div>
    `;
  }
}

window.customElements.define('my-element', MyElement);
