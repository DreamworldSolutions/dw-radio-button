A radio button Webcomponent created through LitElement and mwc-radio(https://www.webcomponents.org/element/@material/mwc-radio)

## Install
```html
npm install @dreamworld/dw-radio-button
```

## Usage guide
### Import
```html
import '@dreamworld/dw-radio-button/dw-radio-group.js';
import '@dreamworld/dw-radio-button/dw-radio-button.js';
```

### Use
```
<dw-radio-group name="fruit">
	<dw-radio-button label="apple" name="fruit" value="1"></dw-radio-button>
	<dw-radio-button label="banana" name="fruit" value="2"></dw-radio-button>
	<dw-radio-button label="orange" name="fruit" value="3"></dw-radio-button>
</dw-radio-group>

```

## CSS variables
- `--dw-radio-padding`: Padding around radio. Default is `10px`.
- `--dw-radio-margin`: Margin around radio. Default is `0px`.
- `--dw-radio-top-align-margin`: Margin around radio when it is top aligned. Default is `-10px 0 0 0`.
- `--dw-radio-width`: Width of radio button. Default is `40px`.
- `--dw-radio-height`: Height of radio button. Default is `40px`.
- `--dw-radio-inset`: Inset value of radio. Default is `0px`.

## Properties
- It supports all the properties of [mwc-radio](https://github.com/material-components/material-web/tree/master/packages/radio) & [mwc-formfield](https://github.com/material-components/material-web/tree/master/packages/formfield).

## [Demo](https://dreamworldsolutions.github.io/dw-radio-button/demo/index.html) 
