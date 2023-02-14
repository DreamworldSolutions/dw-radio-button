import { LitElement, html, css } from '@dreamworld/pwa-helpers/lit.js';

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
      this.value = e.target.value;
		});
  }
  
  updated(changeProps){
    if(changeProps.has('value')){
      const slotElement = this.querySelectorAll('*');

      if(!this.value){
        return;
      }
  
      slotElement.forEach((element) => {
        if(element.value == this.value){
          element.checked = true;
        }
        else {
          element.checked = false;
        }
      });
    }
  }
}

customElements.define('dw-radio-group', DWRadioGroup);
