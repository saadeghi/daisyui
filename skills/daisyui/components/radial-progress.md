### Radial progress
Use the radial progress component to show task progress or the passage of time.

[Radial progress documentation](https://daisyui.com/components/radial-progress/)

#### Class names
- component: `radial-progress`

#### Syntax
```html
<div class="radial-progress" style="--value:70;" aria-valuenow="70" role="progressbar">70%</div>
```

#### Rules
- The `--value` CSS variable and the text must contain a number from 0 through 100.
- Add `aria-valuenow={value}` and `role="progressbar"`. These attributes let screen readers identify the progress element and read its value.
- Use a `div` instead of a progress tag. Browsers cannot show text in a progress tag.
- Use `--size` to set the size. The default is 5rem. Use `--thickness` to set the indicator thickness.
