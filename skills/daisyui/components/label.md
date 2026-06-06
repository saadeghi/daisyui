### label
Label is used to provide a name or title for an input field. Label can be placed before or after the field

[label docs](https://daisyui.com/components/label/)

#### Class names
- component: `label`, `floating-label`

#### Syntax
For regular label:
```html
<label class="input">
  <span class="label">{label text}</span>
  <input type="text" placeholder="Type here" />
</label>
```
For floating label:
```html
<label class="floating-label">
  <input type="text" placeholder="Type here" class="input" />
  <span>{label text}</span>
</label>
```

#### Rules
- The `input` class is for styling the parent element which contains the input field and label, so the label does not have the 'input' class
- Use `floating-label` for the parent of an input field and a span that floats above the input field when the field is focused
