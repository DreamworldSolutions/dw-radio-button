# @dreamworld/dw-radio-button

A LitElement-based Web Component library providing an accessible radio button (`<dw-radio-button>`) and radio group (`<dw-radio-group>`), built on top of Material Design's `mwc-radio` and integrated with the `@dreamworld/dw-form` system.

---

## 1. User Guide

### Installation & Setup

```bash
yarn add @dreamworld/dw-radio-button
```

Import the components before use:

```javascript
import '@dreamworld/dw-radio-button/dw-radio-group.js';
import '@dreamworld/dw-radio-button/dw-radio-button.js';
```

> **Note:** A WebComponents polyfill is required for browsers without native support. Include `@webcomponents/webcomponentsjs` in your project.

---

### Basic Usage

**Standalone radio button:**

```html
<dw-radio-button name="choice" value="yes" label="Yes"></dw-radio-button>
```

**Radio group (mutually exclusive selection):**

```html
<dw-radio-group name="fruit">
  <dw-radio-button name="fruit" value="1" label="Apple"></dw-radio-button>
  <dw-radio-button name="fruit" value="2" label="Banana"></dw-radio-button>
  <dw-radio-button name="fruit" value="3" label="Orange"></dw-radio-button>
</dw-radio-group>
```

**Pre-selected group (set `value` on the group):**

```html
<dw-radio-group name="fruit" value="2">
  <dw-radio-button name="fruit" value="1" label="Apple"></dw-radio-button>
  <dw-radio-button name="fruit" value="2" label="Banana"></dw-radio-button>
  <dw-radio-button name="fruit" value="3" label="Orange"></dw-radio-button>
</dw-radio-group>
```

**Top-aligned radio with multiline label:**

```html
<dw-radio-button align-top name="option" value="a" label="Line one of a very long label that wraps to multiple lines"></dw-radio-button>
```

**No-wrap label (overflow ellipsed):**

```html
<dw-radio-button nowrap name="option" value="b" label="This label is very long and will be truncated with ellipsis"></dw-radio-button>
```

**Custom label slot (rich markup):**

```html
<dw-radio-button name="custom" value="c">
  <span slot="label"><strong>Bold</strong> label with <em>markup</em></span>
</dw-radio-button>
```

---

### API Reference

#### `<dw-radio-button>` — Props / Attributes

| Property | Attribute | Type | Default | Reflected | Description |
|---|---|---|---|---|---|
| `checked` | `checked` | `Boolean` | `false` | No | Whether this radio is currently selected. |
| `disabled` | `disabled` | `Boolean` | `false` | No | If `true`, the radio cannot be selected or interacted with. |
| `name` | `name` | `String` | `""` | No | Form submission name and selection group identifier. Only one radio per group can be checked. |
| `value` | `value` | `String` | `""` | No | Value submitted with the form. |
| `global` | `global` | `Boolean` | `false` | No | If `true`, uses document-level scope for the selection group instead of shadow root scope. |
| `reducedTouchTarget` | `reducedTouchTarget` | `Boolean` | `false` | No | When `true`, removes the extended touch target. Default `false` meets Material accessibility guidelines. |
| `label` | `label` | `String` | `""` | No | Text label displayed beside the radio. Optional — radio can be rendered without a label. |
| `alignEnd` | `alignEnd` | `Boolean` | `false` | No | When `true`, renders the label before the radio control. |
| `alignTop` | `align-top` | `Boolean` | `false` | Yes | Aligns the radio control to the top of the label (useful with multiline labels). |
| `nowrap` | `nowrap` | `Boolean` | `false` | Yes | Prevents label from wrapping; overflowing text is ellipsed. |
| `spaceBetween` | `spaceBetween` | `Boolean` | `false` | No | Adds space between the radio control and label as the form field grows. |

#### `<dw-radio-button>` — Events

| Event | Trigger | Notes |
|---|---|---|
| `change` | User interaction (click or keyboard) | Fired when the user modifies checked state. **Not** fired when `checked` is set via JavaScript, and **not** fired when another radio in the group becomes checked. |

#### `<dw-radio-button>` — Slots

| Slot | Description |
|---|---|
| `label` (named) | Custom label content rendered inside the form field label area. Supports arbitrary HTML markup. |

---

#### `<dw-radio-group>` — Props / Attributes

| Property | Attribute | Type | Default | Description |
|---|---|---|---|---|
| `value` | `value` | `String` | `undefined` | Value of the currently selected radio button. Setting this updates child `checked` states automatically. Setting to a falsy value unchecks all children. |
| `name` | `name` | `String` | `undefined` | Group identifier. |

#### `<dw-radio-group>` — Events

| Event | Source | Description |
|---|---|---|
| `change` | Bubbled from child `<dw-radio-button>` | Handled internally to update `value`. Not re-dispatched by the group. |

#### `<dw-radio-group>` — Slots

| Slot | Description |
|---|---|
| *(default)* | Accepts `<dw-radio-button>` elements as children. |

---

### CSS Custom Properties

These variables are consumed by `<dw-radio>` (the internal base element). Override them on `:host` or any ancestor selector.

| Variable | Default | Description |
|---|---|---|
| `--dw-radio-padding` | `10px` | Padding around the `.mdc-radio` element. |
| `--dw-radio-margin` | `0px` | Margin around the `.mdc-radio` element. |
| `--dw-radio-top-align-margin` | `-10px 0 0 0` | Margin applied to `.mdc-radio` when the `align-top` attribute is set. |
| `--dw-radio-width` | `40px` | Width of the native radio input control. |
| `--dw-radio-height` | `40px` | Height of the native radio input control. |
| `--dw-radio-inset` | `0px` | `inset` CSS value applied to the native radio input. |

The following Material Design tokens are forwarded to the underlying `mwc-radio`:

| Token | Usage |
|---|---|
| `--mdc-radio-unchecked-color` | Color of the unchecked radio ring (defaults to `--mdc-theme-text-secondary-on-background`). |
| `--mdc-theme-text-primary` | Label text color (defaults to `--mdc-theme-text-primary-on-surface`). |
| `--mdc-radio-disabled-color` | Color when disabled (defaults to `--mdc-theme-text-disabled-on-background`). |
| `--mdc-theme-secondary` | Hover ripple color on the radio control. |

---

### Advanced Usage

**Reading the selected value from a group:**

```javascript
const group = document.querySelector('dw-radio-group');

group.addEventListener('change', () => {
  console.log('Selected value:', group.value);
});
```

**Programmatically setting the selected value:**

```javascript
const group = document.querySelector('dw-radio-group');
group.value = '2'; // Checks the child with value="2", unchecks all others
```

**Clearing the selection:**

```javascript
group.value = null; // or '' — unchecks all children
```

**Using `global` scope for selection groups across shadow roots:**

```html
<dw-radio-button global name="shared-group" value="a" label="Option A"></dw-radio-button>
<!-- In a different shadow root -->
<dw-radio-button global name="shared-group" value="b" label="Option B"></dw-radio-button>
```

---

## 2. Developer Guide / Architecture

### Architecture Overview

The library is composed of three Web Components arranged in a composition hierarchy:

```
<dw-radio-group>          DWRadioGroup extends DwFormElement(LitElement)
  └─ <dw-radio-button>    DWRadioButton extends DwFormElement(LitElement)
       └─ <dw-form-field> (from @dreamworld/dw-form)
            └─ <dw-radio> DwRadio extends Radio (from @material/mwc-radio)
```

#### Design Patterns

| Pattern | Where Used |
|---|---|
| **Mixin (DwFormElement)** | Both `DWRadioButton` and `DWRadioGroup` mix in `DwFormElement(LitElement)` to gain form participation capabilities. |
| **Component Composition** | `dw-radio-button` delegates rendering to `dw-form-field` + `dw-radio` without duplicating their logic. |
| **Event Bubbling** | `change` events bubble from `<dw-radio>` → `<dw-radio-button>` → `<dw-radio-group>`, where the group intercepts them to update its `value`. |
| **Property Synchronization** | `DWRadioGroup.updated()` reacts to `value` changes and imperatively sets `checked` on all `querySelectorAll('*')` children to match. |
| **CSS Variable Theming** | `DwRadio` layers custom properties on top of inherited Material Design tokens via `[super.styles, css\`...\`]`. |
| **Prototype Inheritance** | `DwRadio` extends `Radio` from `@material/mwc-radio`, inheriting all MDC radio behavior and adding only custom styles. |

#### Module Responsibilities

| File | Responsibility |
|---|---|
| `dw-radio-button.js` | Composes `dw-form-field` + `dw-radio` into a labeled radio button. Manages `checked` state update and ripple-blur on user change. |
| `dw-radio-group.js` | Container that coordinates mutual exclusivity among children by syncing `value` ↔ `checked` state. |
| `dw-radio.js` | Thin extension of `mwc-radio` that adds custom CSS properties and a hover effect without altering behavior. |

#### `_onChange` internals (`dw-radio-button.js:165–173`)

After a user interaction, `_onChange`:
1. Updates `this.checked` from the event target's `checked` state.
2. Re-dispatches a `change` event on the host element.
3. Queries the internal `<input>` and calls `.blur()` to dismiss the Material ripple effect.

#### Value synchronization internals (`dw-radio-group.js:46–65`)

`updated(changeProps)` runs after every Lit render cycle. When `value` has changed:
- If the new value is falsy, all children are unchecked.
- Otherwise, each child whose `element.value == this.value` (loose equality) is checked; all others are unchecked.

---
