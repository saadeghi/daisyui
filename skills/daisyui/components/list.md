### List
Use a list to show information in rows in a vertical layout.

[List documentation](https://daisyui.com/components/list/)

#### Class names
- component: `list`, `list-row`
- modifier: `list-col-wrap`, `list-col-grow`

#### Syntax
```html
<ul class="list">
  <li class="list-row">{CONTENT}</li>
</ul>
```

#### Rules
- Use `list-row` for each item in the list.
- By default, the second child of `list-row` fills the space that remains. To use a different child, add `list-col-grow` to that child.
- Use `list-col-wrap` to move an item to the next line.
