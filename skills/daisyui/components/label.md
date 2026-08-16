### Label
Use a label to give a name or title to an input field. Put the label before or after the field.

[Label documentation](https://daisyui.com/components/label/)

#### Class names
- component: `label`, `floating-label`

#### Syntax
Regular label:
```html
<label class="input">
  <span class="label">{label text}</span>
  <input type="text" placeholder="Type here" />
</label>
```
Floating label:
```html
<label class="floating-label">
  <input type="text" placeholder="Type here" class="input" />
  <span>{label text}</span>
</label>
```

#### Rules
- The `input` class styles the parent element that contains the input field and label. Do not add the `input` class to the label.
- Add `floating-label` to the parent element. This parent must contain an input field and a span. When the field has focus, the span moves above it.
