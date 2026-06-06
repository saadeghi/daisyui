### radial-progress
Radial progress can be used to show the progress of a task or to show the passing of time

[radial-progress docs](https://daisyui.com/components/radial-progress/)

#### Class names
- component: `radial-progress`

#### Syntax
```html
<div class="radial-progress" style="--value:70;" aria-valuenow="70" role="progressbar">70%</div>
```

#### Rules
- The `--value` CSS variable and text must be a number between 0 and 100
- you need to add `aria-valuenow="{value}"`, `aria-valuenow={value}` so screen readers can properly read value and also show that its a progress element to them
- Use `div` instead of progress because browsers can't show text inside progress tag
- Use `--size` for setting size (default 5rem) and `--thickness` to set how thick the indicator is
