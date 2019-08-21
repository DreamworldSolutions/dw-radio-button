/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

import { css, html } from 'lit-element';

// These are the mwc element needed by this element.
import { Radio } from  "@material/mwc-radio";

// These are the dw styles element needed by this element.
import { flexLayout } from '@dw/flex-layout/flex-layout.js';
import { alignment } from '@dw/flex-layout/flex-layout-alignment.js';

export class DWRadioButton extends Radio {
  static get styles() {
    return [
      super.styles,
      flexLayout,
      alignment,
      css`
        :host {
          display: block;
          --mdc-theme-secondary: var(--accent-color);
        }
        .mdc-radio {
          height: 40px;
          margin-right: 4px;
        }
      `
    ];
  }

  static get properties() {
    return {
      /**
       * label of radio button
       */
      label: {
        type: String
      },

      /**
       * name of this element
       */
      name: {
        type: String
      }
    }
  }

  render() {
    let superElementRender = super.render();
    return html `
      <div class="layout horizontal center" @click="${this._onClick}">
        ${superElementRender}
        <slot></slot>
      </div>
  `;
 }

 constructor(){
  super();
  this.label = ''; 
 }

 /**
  * call blur method to fix ripple effect after radiobutton click.
  */
 _onClick(){
   this.blur();
 }
}

window.customElements.define('dw-radio-button', DWRadioButton);
