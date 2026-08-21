### Fieldset
Use a fieldset as a container for related form elements. Use `fieldset-legend` as the title. Use `label` as the description.

[Fieldset documentation](https://daisyui.com/components/fieldset/)

#### Class names
- component: `fieldset`, `label`
- part: `fieldset-legend`

#### Syntax
```html
<fieldset class="fieldset">
  <legend class="fieldset-legend">{title}</legend>
  {CONTENT}
  <p class="label">{description}</p>
</fieldset>
```

#### Rules
- The fieldset can have all types of elements as direct children.
