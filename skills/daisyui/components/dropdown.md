### dropdown
Dropdown can open a menu or any other element when the button is clicked

[dropdown docs](https://daisyui.com/components/dropdown/)

#### Class names
- component: `dropdown`
- part: `dropdown-content`
- placement: `dropdown-start`, `dropdown-center`, `dropdown-end`, `dropdown-top`, `dropdown-bottom`, `dropdown-left`, `dropdown-right`
- modifier: `dropdown-hover`, `dropdown-open`, `dropdown-close`

#### Syntax

Using popover API (recommended)
```html
<button popovertarget="{id}" style="anchor-name:--{anchor}">{button}</button>
<ul class="dropdown" popover id="{id}" style="position-anchor:--{anchor}">{CONTENT}</ul>
```

Using details and summary (only opens/closes on click)
```html
<details class="dropdown">
  <summary>Button</summary>
  <ul class="dropdown-content">{CONTENT}</ul>
</details>
```

Using CSS focus (not recommended)
```html
<div class="dropdown">
  <div tabindex="0" role="button">Button</div>
  <ul tabindex="-1" class="dropdown-content">{CONTENT}</ul>
</div>
```

#### Rules
- {MODIFIER} is optional and can have one of the modifier/placement class names
- replace `{id}` and `{anchor}` with a unique name
- For CSS focus dropdowns, use `tabindex="0"` and `role="button"` on the button
- The content can be any HTML element (not just `<ul>`)
- For popover API method, we don't use `dropdown-content`. Only button and a `dropdown`
