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
<ul class="steps {MODIFIER}">
  <li class="step">{step content}</li>
</ul>
```

#### Rules
- {MODIFIER} is optional and can have one of each direction/color class names
- To make a step active, add the `step-primary` class
- You can add an icon in each step using `step-icon` class
- To display data in `data-content` ,use `data-content="{value}"` at the `<li>`
