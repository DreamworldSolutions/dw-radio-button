A radio button Webcomponent created through LitElement and mwc-radio(https://www.webcomponents.org/element/@material/mwc-radio)

## Install
```html
npm install @dreamworld/dw-radio-button
```

## Usage of dw-radio
```html
import '@dreamworld/dw-radio-button/dw-radio-button.js';

<dw-radio-button label="radio"></dw-radio-button>
```

## Configs/Options of dw-radio button
- It supports all the properties of [mwc-radio](https://github.com/material-components/material-web/tree/master/packages/radio) & [mwc-formfield](https://github.com/material-components/material-web/tree/master/packages/formfield).

## Usage of dw-radio-group button
```html
import '@dreamworld/dw-radio-button/dw-radio-group.js';
    
<dw-radio-group name="fruit">
	<dw-radio-button label="apple" name="fruit" id="1"></dw-radio-button>
	<dw-radio-button label="banana" name="fruit" id="2"></dw-radio-button>
	<dw-radio-button label="orange" name="fruit" id="3"></dw-radio-button>
</dw-radio-group>

```

## [Demo](https://dreamworldsolutions.github.io/dw-radio-button/demo/index.html)

## Configs/Options of dw-radio-group
It support property
- value


### Theme
To Override DWRadio class to create a custom radio

```
class CustomRadio extends DWRadio {

static get styles() {
	return [
		DWRadio.styles,
		css`
		.mdc-radio {
		  border-radius: 5px;
		}`
	];
 }
}
customElements.define('custom-radio', CustomRadio);

<custom-radio></custom-radio>
```