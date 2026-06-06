### tooltip
Tooltip can be used to show a message when hovering over an element

[tooltip docs](https://daisyui.com/components/tooltip/)

#### Class names
- component: `tooltip`
- part: `tooltip-content`
- modifier: `tooltip-open`
- placement: `tooltip-top`, `tooltip-bottom`, `tooltip-left`, `tooltip-right`
- color: `tooltip-primary`, `tooltip-secondary`, `tooltip-accent`, `tooltip-info`, `tooltip-success`, `tooltip-warning`, `tooltip-error`

#### Syntax
```html
<div class="tooltip {MODIFIER}" data-tip="Tooltip text">
  <button class="btn">Hover me</button>
</div>
```

#### Rules
- {MODIFIER} is optional and can have one of each modifier/placement/color class names
