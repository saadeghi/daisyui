### Steps
Use the steps component to show a sequence in a process.

[Steps documentation](https://daisyui.com/components/steps/)

#### Class names
- component: `steps`
- part: `step`, `step-icon`
- color: `step-neutral`, `step-primary`, `step-secondary`, `step-accent`, `step-info`, `step-success`, `step-warning`, `step-error`
- direction: `steps-vertical`, `steps-horizontal`

#### Syntax
```html
<ul class="steps {DIRECTION}">
  <li class="step step-primary">{completed step}</li>
  <li class="step">{upcoming step}</li>
</ul>
```

#### Rules
- The default steps layout is horizontal. For a vertical layout, add `steps-vertical` to the `ul`.
- Add direction classes to `steps`. Add `step-*` color classes to each applicable `step` item.
- To mark a step with the primary color, add `step-primary` to its `li`.
- To add an icon to a step, use the `step-icon` class.
- To show custom data, add `data-content="{value}"` to the `<li>`.
