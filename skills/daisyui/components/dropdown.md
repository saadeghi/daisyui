### Dropdown
A dropdown can open a menu or another element when the user clicks the button.

[Dropdown documentation](https://daisyui.com/components/dropdown/)

#### Class names
- component: `dropdown`
- part: `dropdown-content`
- placement: `dropdown-start`, `dropdown-center`, `dropdown-end`, `dropdown-top`, `dropdown-bottom`, `dropdown-left`, `dropdown-right`
- modifier: `dropdown-hover`, `dropdown-open`, `dropdown-close`

#### Syntax

Popover API:
```html
<button popovertarget="{id}" style="anchor-name:--{anchor}">{button}</button>
<ul class="dropdown" popover id="{id}" style="position-anchor:--{anchor}">{CONTENT}</ul>
```

The `details` and `summary` elements open and close only when the user clicks them:
```html
<details class="dropdown">
  <summary>Button</summary>
  <ul class="dropdown-content">{CONTENT}</ul>
</details>
```

#### Rules
- `{MODIFIER}` is optional. It can include one modifier class name and one placement class name.
- Replace `{id}` and `{anchor}` with the same name. Do not use this name for another element.
- The content is not limited to `<ul>`. It can be a different HTML element.
- For the popover API method, use only a button and `dropdown`. Do not use `dropdown-content`.
