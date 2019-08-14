A radio button Webcomponent created through LitElement and mwc-radio(https://www.webcomponents.org/element/@material/mwc-radio)

## Install
```html
npm install @dreamworld/dw-radio
```

## Usage of dw-radio
```html
import '@dreamworld/dw-radio/dw-radio.js';

<dw-radio label="radio"></dw-radio>
```

## Configs/Options of dw-radio button
It supports all the properties of mwc-radio.

## Usage of dw-radio-group button
```html
import '@dreamworld/dw-radio/dw-radio-group.js';
    
<dw-radio-group name="fruit">
	<dw-radio label="apple" name="fruit" id="1"></dw-radio>
	<dw-radio label="banana" name="fruit" id="2"></dw-radio>
	<dw-radio label="orange" name="fruit" id="3"></dw-radio>
</dw-radio-group>
	
```

## [Demo](https://dreamworldsolutions.github.io/dw-checkbox/demo/index.html)

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