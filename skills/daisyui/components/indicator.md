### Indicator
Use an indicator to put an element at the corner of another element.

[Indicator documentation](https://daisyui.com/components/indicator/)

#### Class names
- component: `indicator`
- part: `indicator-item`
- placement: `indicator-start`, `indicator-center`, `indicator-end`, `indicator-top`, `indicator-middle`, `indicator-bottom`

#### Syntax
```html
<div class="indicator">
  <span class="indicator-item">{indicator content}</span>
  <div>{main content}</div>
</div>
```

#### Rules
- Put all indicator elements with the `indicator-item` class before the main content.
- `{placement}` is optional. It can include one horizontal class name and one vertical class name. The default is `indicator-end indicator-top`.
