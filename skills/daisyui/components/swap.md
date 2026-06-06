### swap
Swap allows you to toggle the visibility of two elements using a checkbox or a class name

[swap docs](https://daisyui.com/components/swap/)

#### Class Names:
- Component: `swap`
- Part: `swap-on`, `swap-off`, `swap-indeterminate`
- Modifier: `swap-active`
- Style: `swap-rotate`, `swap-flip`

#### Syntax
Using checkbox
```html
<label class="swap {MODIFIER}">
  <input type="checkbox" />
  <div class="swap-on">{content when active}</div>
  <div class="swap-off">{content when inactive}</div>
</label>
```

Using class name
```html
<div class="swap {MODIFIER}">
  <div class="swap-on">{content when active}</div>
  <div class="swap-off">{content when inactive}</div>
</div>
```

#### Rules
- {MODIFIER} is optional and can have one of the modifier/style class names
- Use only a hidden checkbox to control swap state or add/remove the `swap-active` class using JS to control state
- To show something when the checkbox is indeterminate, use `swap-indeterminate` class
