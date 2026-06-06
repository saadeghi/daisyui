### list
List is a vertical layout to display information in rows

[list docs](https://daisyui.com/components/list/)

#### Class Names:
- Component: `list`, `list-row`
- Modifier: `list-col-wrap`, `list-col-grow`

#### Syntax
```html
<ul class="list">
  <li class="list-row">{CONTENT}</li>
</ul>
```

#### Rules
- Use `list-row` for each item inside the list
- By default, the second child of the `list-row` will fill the remaining space. You can use `list-col-grow` on another child to make it fill the remaining space instead
- Use `list-col-wrap` to force an item to wrap to the next line
