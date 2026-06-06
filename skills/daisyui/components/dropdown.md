### dropdown
Dropdown can open a menu or any other element when the button is clicked

[dropdown docs](https://daisyui.com/components/dropdown/)

#### Class names
- component: `dropdown`
- part: `dropdown-content`
- placement: `dropdown-start`, `dropdown-center`, `dropdown-end`, `dropdown-top`, `dropdown-bottom`, `dropdown-left`, `dropdown-right`
- modifier: `dropdown-hover`, `dropdown-open`, `dropdown-close`

#### Syntax
Using details and summary
```html
<details class="dropdown">
  <summary>Button</summary>
  <ul class="dropdown-content">{CONTENT}</ul>
</details>
```

Using popover API
```html
<button popovertarget="{id}" style="anchor-name:--{anchor}">{button}</button>
<ul class="dropdown-content" popover id="{id}" style="position-anchor:--{anchor}">{CONTENT}</ul>
```

Using CSS focus
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
