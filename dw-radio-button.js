import { css, html } from 'lit-element';
import { LitElement } from '@dreamworld/pwa-helpers/lit-element.js';
import './dw-radio';
import '@dreamworld/dw-form/dw-form-field';

//These are the dw element needed by this element.
import { DwFormElement } from '@dreamworld/dw-form/dw-form-element';

/**
 * Provides a radio button with it's label.
 * 
 * Usage guides:
 *  - Events
 *    - `change`: Fired when the user modifies the radio checked state from an input device interaction on this radio. 
 *       Note that, like native <input>, the change event is not fired when the checked property is set from JavaScript, 
*        nor is it fired when another radio in the same group becomes checked.
 * 
 * Usage 
 * <dw-radio-button checked label="Test Label"></dw-radio-button>
 */

export class DWRadioButton extends DwFormElement(LitElement) {
  static get styles() {
    return [
      css`
        :host {
          display: block;
          cursor: pointer;

          --mdc-radio-unchecked-color: var(--mdc-theme-text-secondary-on-background);
          --mdc-theme-text-primary: var(--mdc-theme-text-primary-on-surface);
          --mdc-radio-disabled-color: var(--mdc-theme-text-disabled-on-background);
        }

        .form-field {
          cursor: pointer;
        }
        
        :host([disabled]) {
          pointer-events: none;
        }

        :host([align-top]) .radio {
          align-self: flex-start;
        }
      `
    ];
  }

  static get properties() {
    return {
      /**
       * Whether this radio button is the currently-selected one in its group. Maps to the native `checked` attribute.
       */
      checked: { type: Boolean },

      /**
       * If `true`, this radio button cannot be selected or de-selected. Maps to the native `disabled` attribute.
       */
      disabled: { type: Boolean },

      /**
       * Name of the input for form submission, and identifier for the selection group. 
       * Only one radio button can be checked for a given selection group. Maps to the native `name` attribute.
       */
      name: {
        type: String
      },

      /**
       * Value of the input for form submission. Maps to the native value attribute.
       */
      value: {
        type: String
      },

      /**
       * If `true`, this radio button will use a global, document-level scope for its selection group rather than its local shadow root.
       */
      global: { type: Boolean },

      /**
       * When `true`, the radio removes touch target that extends beyond visual boundary of the component. Set to false by default to meet Material accessibility guidelines.
       */
      reducedTouchTarget: { type: Boolean },

      /**
       * Input property. Text to be shown for checkbox label. 
       * 
       * It's optional, you may render checkbox without lable as well. 
       * Checkbox can be checked/unchecked by clicking in the label area as well.
       */
      label: { type: String },

      /**
       * Set to `true` to show label before checkbox
       */
      alignEnd: { type: Boolean },

      /**
       * Align radio-button at top with label.
       */
      alignTop: { type: Boolean, reflect: true, attribute: 'align-top' },
      
      /**
       * Prevents the label from wrapping and overflow text is ellipsed.
       */
      nowrap: { type: Boolean, reflect: true },

      /**
       * Add space between the component and the label as the formfield grows.
       */
      spaceBetween: { type: Boolean }
    }
  }

  constructor() {
    super();
    this.checked = false;
    this.disabled = false;
    this.name = '';
    this.value = '';
    this.global = false;
    this.reducedTouchTarget = false;
    this.label = '';
    this.alignEnd = false;
    this.nowrap = false;
    this.spaceBetween = false;
  }

  render() {
    return html`
      <dw-form-field class="form-field" label="${this.label}" ?alignEnd="${this.alignEnd}" .nowrap="${this.nowrap}" .spaceBetween="${this.spaceBetween}" .alignTop="${this.alignTop}" ?disabled="${this.disabled}">
        <dw-radio class="radio" ?align-top="${this.alignTop}" ?checked="${this.checked}" ?disabled="${this.disabled}" name="${this.name}" value="${this.value}"
          ?global="${this.global}" ?reducedTouchTarget="${this.reducedTouchTarget}" @change="${this._onChange}">
        </dw-radio>

        <div slot="label">
          <slot name="label"></slot>
        </div>
      </dw-form-field>
  `;
  }

  /**
   * Triggers `change` event
   * Sets value of `checked` property & blur it to remove ripple effect.
   */
  _onChange(e) {
    const target = e.target;
    if (target) {
      this.checked = target.checked;
      this.dispatchEvent(new Event('change', e));
      const input = target.renderRoot.querySelector('input');
      input && input.blur();
    }
  }
}

window.customElements.define('dw-radio-button', DWRadioButton);