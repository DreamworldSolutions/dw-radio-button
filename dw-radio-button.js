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
import { Radio } from  "@material/mwc-radio/mwc-radio.js";

// These are the dw styles element needed by this element.
import { flexLayout } from '@dreamworld/flex-layout/flex-layout.js';
import { alignment } from '@dreamworld/flex-layout/flex-layout-alignment.js';
import { Typography } from '@dreamworld/material-styles/typography.js';

//These are the dw element needed by this element.
import { DwFormElement } from '@dreamworld/dw-form/dw-form-element';

export class DWRadioButton extends DwFormElement(Radio) {
  static get styles() {
    return [
      super.styles,
      flexLayout,
      alignment,
      Typography,
      css`
        :host {
          display: block;
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
        <span class="body2"><slot></slot></span>
      </div>
  `;
 }

  /**
  * on label click select radio button
  */
 _selectRadioButton(){
  this.click();
 }

 /**
  * call blur method to fix ripple effect after radiobutton click.
  */
 _onClick(){
   this._selectRadioButton();
   this.blur();
 }
}

window.customElements.define('dw-radio-button', DWRadioButton);
