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

class MyView3 extends LitElement {

  static get styles() {
    return [
      sharedStyles,
      css`
      :host {
          display: block;

          padding: 10px;
        }
      `,
    ]
  }

  static get properties() {
    return {
      todos: {
        type: Array,
        attribute: false,
      }, 
      testDictionary: {
        type: Object,
        attribute: false,
      }
    }
  }

  constructor() {
    super();
    this.todos = [];
    this.testDictionary = {
      '34': 'thirty-four', 
      '90': 'ninety',
      '91': 'ninety-one',
      '21': 'twenty-one',
      '61': 'sixty-one', 
      '9': 'nine',
      '2': 'two', 
      '6': 'six', 
      '3': 'three',
      '8': 'eight',
      '80': 'eighty', 
      '81': 'eighty-one',
      'Ninety-Nine': '99', 
      'nine-hundred': '900'
    }
  }

  async fetchTodos() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5');
    const todos = await response.json();
    this.todos = todos;
  }


  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
    this.fetchTodos();
    console.log("test dictionary", this.testDictionary);
  }

  render() {
    return html`
    <div class="card">
      ${JSON.stringify(this.testDictionary)}
    </div>
      ${
        this.todos.length === 0 ? html`
        <div class="card">
        <div class="circle">3</div>
        <h1>View Three</h1>
        <p>Loading todos, please wait ...</p>
        </div>` : 
        this.todos.map(todo => html`
        <div class="card">
          <h1>${todo.title}</h1>
          <p>${todo.completed ? 'completed' : 'not completed'}</p>
        </div>
        `)
  }
      
    `;
  }
}

window.customElements.define('my-view3', MyView3);
