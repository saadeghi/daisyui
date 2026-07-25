### steps
Steps can be used to show a list of steps in a process

[steps docs](https://daisyui.com/components/steps/)

#### Class Names:
- Component: `steps`
- Part: `step`, `step-icon`
- Color: `step-neutral`, `step-primary`, `step-secondary`, `step-accent`, `step-info`, `step-success`, `step-warning`, `step-error`
- Direction: `steps-vertical`, `steps-horizontal`

#### Syntax
```html
<ul class="steps {DIRECTION}">
  <li class="step step-primary">{completed step}</li>
  <li class="step">{upcoming step}</li>
</ul>
```

#### Rules
- Steps are horizontal by default; add `steps-vertical` to the `ul` for a vertical layout
- Direction classes go on `steps`; `step-*` color classes go on individual `step` items
- To mark a step with the primary color, add `step-primary` to that `li`
- You can add an icon in each step using `step-icon` class
- To display custom data, add `data-content="{value}"` to the `<li>`
