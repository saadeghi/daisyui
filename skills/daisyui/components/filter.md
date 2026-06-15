### filter
Filter is a group of radio buttons. Choosing one of the options will hide the others and shows a reset button next to the chosen option

[filter docs](https://daisyui.com/components/filter/)

#### Class names
- component: `filter`
- part: `filter-reset`

#### Syntax
Using HTML form
```html
<form class="filter">
  <input class="btn btn-square" type="reset" value="×"/>
  <input class="btn" type="radio" name="{NAME}" aria-label="Tab 1 title"/>
  <input class="btn" type="radio" name="{NAME}" aria-label="Tab 2 title"/>
</form>
```
Without HTML form
```html
<div class="filter">
  <input class="btn filter-reset" type="radio" name="{NAME}" aria-label="×"/>
  <input class="btn" type="radio" name="{NAME}" aria-label="Tab 1 title"/>
  <input class="btn" type="radio" name="{NAME}" aria-label="Tab 2 title"/>
</div>
```

#### Rules
- replace `{NAME}` with proper value, according to the context of the filter
- Each set of radio inputs must have unique `name` attributes to avoid conflicts
- Use `<form>` tag when possible and only use `<div>` if you can't use a HTML form for some reason
- Use `filter-reset` class for the reset button
- Do not check any of the radio inputs by default
