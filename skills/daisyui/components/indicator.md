### indicator
Indicators are used to place an element on the corner of another element

[indicator docs](https://daisyui.com/components/indicator/)

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
- Add all indicator elements (with `indicator-item` class) before the main content
- {placement} is optional and can have one of each horizontal/vertical class names. default is `indicator-end indicator-top`
