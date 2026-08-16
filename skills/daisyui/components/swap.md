### Swap
Use the swap component to change the visibility of two elements. Control the swap with a checkbox or a class name.

[Swap documentation](https://daisyui.com/components/swap/)

#### Class names
- component: `swap`
- part: `swap-on`, `swap-off`, `swap-indeterminate`
- modifier: `swap-active`
- style: `swap-rotate`, `swap-flip`

#### Syntax
Checkbox:
```html
<label class="swap {MODIFIER}">
  <input type="checkbox" />
  <div class="swap-on">{content when active}</div>
  <div class="swap-off">{content when inactive}</div>
</label>
```

Class name:
```html
<div class="swap {MODIFIER}">
  <div class="swap-on">{content when active}</div>
  <div class="swap-off">{content when inactive}</div>
</div>
```

#### Rules
- `{MODIFIER}` is optional. It can include one modifier class name and one style class name.
- Use only a hidden checkbox to control the swap state. As an alternative, use JavaScript to add or remove the `swap-active` class.
- To show content when the checkbox is indeterminate, use the `swap-indeterminate` class.
