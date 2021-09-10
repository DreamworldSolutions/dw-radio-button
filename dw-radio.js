import { Radio } from '@material/mwc-radio';
import { css } from 'lit-element';

/**
 * Extended version of [mwc-radio]
 */
export class DwRadio extends Radio {
  static get styles() {
    return [
      super.styles,
      css`
        :host {
          display: block;
          cursor: pointer
        }
        
        :host([disabled]) {
          pointer-events: none;
        }

        .mdc-radio {
          padding: var(--dw-radio-padding, 10px);
          margin: var(--dw-radio-margin, 0px);
        }

        :host([align-top]) .mdc-radio {
          margin: var(--dw-radio-top-align-margin, -10px 0 0 0);
        }

        .mdc-radio .mdc-radio__native-control {
          width: var(--dw-radio-width, 40px);
          height: var(--dw-radio-height, 40px);
          inset: var(--dw-radio-inset, 0);
        }

        .main:hover .mdc-radio::before {
          background-color: var(--mdc-theme-secondary, #018786);
          opacity: 0.04;
        }
    `];
  }
}

customElements.define('dw-radio', DwRadio);
