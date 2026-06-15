### fieldset
Fieldset is a container for grouping related form elements. It includes fieldset-legend as a title and label as a description

[fieldset docs](https://daisyui.com/components/fieldset/)

#### Class names
- Component: `fieldset`, `label`
- Parts: `fieldset-legend`

#### Syntax
```html
<fieldset class="fieldset">
  <legend class="fieldset-legend">{title}</legend>
  {CONTENT}
  <p class="label">{description}</p>
</fieldset>
```

#### Rules
- You can use any element as a direct child of fieldset to add form elements
