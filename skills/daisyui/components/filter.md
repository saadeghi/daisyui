### Filter
A filter is a group of radio buttons. When the user selects an option, the filter hides the other options. It also shows a reset button next to the selected option.

[Filter documentation](https://daisyui.com/components/filter/)

#### Class names
- component: `filter`
- part: `filter-reset`

#### Syntax
HTML form:
```html
<form class="filter">
  <input class="btn btn-square" type="reset" value="×"/>
  <input class="btn" type="radio" name="{NAME}" aria-label="Tab 1 title"/>
  <input class="btn" type="radio" name="{NAME}" aria-label="Tab 2 title"/>
</form>
```
No HTML form:
```html
<div class="filter">
  <input class="btn filter-reset" type="radio" name="{NAME}" aria-label="×"/>
  <input class="btn" type="radio" name="{NAME}" aria-label="Tab 1 title"/>
  <input class="btn" type="radio" name="{NAME}" aria-label="Tab 2 title"/>
</div>
```

#### Rules
- Replace `{NAME}` with a value that identifies the filter.
- Use a different `name` attribute for each set of radio inputs. This prevents conflicts.
- If the context permits, use the `<form>` tag. If you cannot use an HTML form, use `<div>`.
- Use the `filter-reset` class for the reset button.
- Do not select a radio input by default.
