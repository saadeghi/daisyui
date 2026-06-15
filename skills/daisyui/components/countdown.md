### countdown
Countdown gives you a transition effect when you change a number between 0 to 999

[countdown docs](https://daisyui.com/components/countdown/)

#### Class names
- component: `countdown`

#### Syntax
```html
<span class="countdown">
  <span style="--value:{number};">number</span>
</span>
```

#### Rules
- The `--value` CSS variable and text must be a number between 0 and 999
- you need to change the span text and the `--value` CSS variable using JS
- you need to add `aria-live="polite"` and `aria-label="{number}"` so screen readers can properly read changes
