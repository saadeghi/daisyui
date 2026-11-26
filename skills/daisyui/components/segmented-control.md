### Segmented Control
Segmented Control is a compact group of mutually exclusive options, where the selected option is raised above the group. Use it instead of a select or a group of buttons when there are only a few options and the selected one should stay visible.

[Segmented Control documentation](https://daisyui.com/components/segmented-control/)

#### Class names
- component: `segmented-control`
- part: `segmented-control-item`, `segmented-control-indicator`
- color: `segmented-control-primary`, `segmented-control-secondary`, `segmented-control-accent`, `segmented-control-neutral`, `segmented-control-success`, `segmented-control-warning`, `segmented-control-info`, `segmented-control-error`
- size: `segmented-control-xs`, `segmented-control-sm`, `segmented-control-md`, `segmented-control-lg`, `segmented-control-xl`

#### Syntax
A label wrapping a radio input for each option:
```html
<fieldset class="segmented-control {MODIFIER}">
  <label class="segmented-control-item">
    <input type="radio" name="{NAME}" value="{VALUE1}" checked>
    {Label1}
  </label>
  <label class="segmented-control-item">
    <input type="radio" name="{NAME}" value="{VALUE2}">
    {Label2}
  </label>
</fieldset>
```
A bare radio input, with its `aria-label` as the visible text:
```html
<fieldset class="segmented-control {MODIFIER}">
  <input type="radio" class="segmented-control-item" name="{NAME}" aria-label="{Label1}" checked>
  <input type="radio" class="segmented-control-item" name="{NAME}" aria-label="{Label2}">
</fieldset>
```

A group with an animated selection. One indicator element slides between the segments:
```html
<fieldset class="segmented-control {MODIFIER}">
  <label class="segmented-control-item">
    <input type="radio" name="{NAME}" value="{VALUE1}" checked>
    {Label1}
  </label>
  <label class="segmented-control-item">
    <input type="radio" name="{NAME}" value="{VALUE2}">
    {Label2}
  </label>
  <span class="segmented-control-indicator"></span>
</fieldset>
```

#### Rules
- All radio inputs of one group share the same `name`, so only one option can be selected and arrow keys move between them.
- Add one `segmented-control-indicator` element inside the group to animate the selected segment. Without it the selected segment paints its own background.
- The indicator uses CSS anchor positioning. Browsers without it ignore the indicator, so do not style it as the only way to show the selection.
- A color class on the group colors the selected segment and its indicator; unselected segments keep the plain text color.
- `{MODIFIER}` is optional. It can include one class name from the size category.
- Use `fieldset` with an `aria-label` or a `legend`, so the group has an accessible name.
- Add `disabled` to the radio input (or to the whole `fieldset`) to disable a segment.
- Do not use `segmented-control` for navigation between pages. Use `tab` or `menu` for that.
