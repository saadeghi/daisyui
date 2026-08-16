### Range
Move a range-slider handle to select a value.

[Range documentation](https://daisyui.com/components/range/)

#### Class names
- component: `range`
- color: `range-neutral`, `range-primary`, `range-secondary`, `range-accent`, `range-success`, `range-warning`, `range-info`, `range-error`
- size: `range-xs`, `range-sm`, `range-md`, `range-lg`, `range-xl`
- direction: `range-vertical` (vertical slider)

#### Syntax
```html
<input type="range" min="0" max="100" value="40" class="range {MODIFIER}" />
```

#### Rules
- `{MODIFIER}` is optional. It can include one color class name and one size class name.
- For a vertical slider, use `range-vertical`.
- You must specify the `min` and `max` attributes.
