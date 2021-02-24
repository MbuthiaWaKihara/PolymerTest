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

class MyView1 extends LitElement {

  static get styles() {
    return [
      sharedStyles,
      css`
      :host {
            display: block;
            padding: 10px;
          }
      `,
    ];
  }

  static get properties() {
    return {
      formData: {
        type: Object,
        attribute: false,
      }
    }
  }

  constructor() {
    super();
    this.formData = {
      name: '',
      email: '',
      phoneNumber: '',
    }
  }

  _handleChange(event) {
    this.formData[event.target.name] = event.target.value;
  }

  _handleSubmit(event) {
    event.preventDefault();
    console.log("form data", this.formData);
    alert(JSON.stringify(this.formData));
  }

  render() {
    return html`
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.1/css/bulma.min.css">
      <div class="card">
        <div class="circle">1</div>
        <h1>View One</h1>

        <form>
          <div class="field">
          <label class="label">Name</label>
          <div class="control">
            <input class="input" type="text" placeholder="Your Name" name="name" @input="${this._handleChange}">
          </div>
          </div>

          <div class="field">
          <label class="label">Email</label>
          <div class="control">
            <input class="input" type="email" placeholder="Your Email Address" name="email" @input="${this._handleChange}">
          </div>
          </div>

          <div class="field">
          <label class="label">Phone Number</label>
          <div class="control">
            <input class="input" type="number" placeholder="Your Phone Number" name="phoneNumber" @input="${this._handleChange}">
          </div>
          </div>

          <div class="control">
            <button class="button is-primary" @click="${this._handleSubmit}">Submit</button>
          </div>

        </form>
      </div>
    `;
  }
}

window.customElements.define('my-view1', MyView1);
