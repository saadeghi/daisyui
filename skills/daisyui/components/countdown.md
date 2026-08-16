### Countdown
A countdown gives a transition effect when a number changes from 0 through 999.

[Countdown documentation](https://daisyui.com/components/countdown/)

#### Class names
- component: `countdown`

#### Syntax
```html
<span class="countdown">
  <span style="--value:{number};">number</span>
</span>
```

#### Rules
- The `--value` CSS variable and the text must contain a number from 0 through 999.
- Use JavaScript to change the span text and the `--value` CSS variable.
- Add `aria-live="polite"` and `aria-label="{number}"`. These attributes let screen readers read changes correctly.
