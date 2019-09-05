/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

import { html, css, LitElement } from 'lit-element';

// These are the dw element needed by this element.
import { DwFormElement } from '@dreamworld/dw-form/dw-form-element';

export class DWRadioGroup extends DwFormElement(LitElement) {
  static get styles() {
    return [
      css`
        :host {
					display: block;
        }
        `,
    ];
  }

  static get properties() {
    return {
      /**
       * label of this element
       */
      value: {
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

  render(){
    return html`
			<slot></slot>
    `
	}

	connectedCallback(){
		super.connectedCallback();

		this.addEventListener('change', (e) => {
      this.value = e.target.id;
		});
  }
  
  updated(changeProps){
    if(changeProps.has('value')){
      const slotElement = this.querySelectorAll('*');

      if(!this.value){
        return;
      }
  
      slotElement.forEach((element) => {
        if(element.id == this.value){
          element.checked = true;
        }
        else {
          element.checked = false;
        }
      });
    }
  }
}

window.customElements.define('dw-radio-group', DWRadioGroup);
