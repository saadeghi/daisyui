### radio
Radio buttons allow the user to select one option

[radio docs](https://daisyui.com/components/radio/)

#### Class names
- component: `radio`
- color: `radio-neutral`, `radio-primary`, `radio-secondary`, `radio-accent`, `radio-success`, `radio-warning`, `radio-info`, `radio-error`
- size: `radio-xs`, `radio-sm`, `radio-md`, `radio-lg`, `radio-xl`

#### Syntax
```html
<input type="radio" name="{name}" class="radio {MODIFIER}" />
```

#### Rules
- {MODIFIER} is optional and can have one of the size/color class names
- Replace {name} with a unique name for the radio group
- Each set of radio inputs should have unique `name` attributes to avoid conflicts with other sets of radio inputs on the same page
