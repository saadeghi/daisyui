### Table
Use a table to show data in rows and columns.

[Table documentation](https://daisyui.com/components/table/)

#### Class names
- component: `table`
- modifier: `table-zebra`, `table-pin-rows`, `table-pin-cols`
- size: `table-xs`, `table-sm`, `table-md`, `table-lg`, `table-xl`

#### Syntax
```html
<div class="overflow-x-auto">
  <table class="table {MODIFIER}">
    <thead>
      <tr>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th></th>
      </tr>
    </tbody>
  </table>
</div>
```

#### Rules
- `{MODIFIER}` is optional. It can include one modifier class name and one size class name.
- To make the table scroll horizontally on small screens, add `overflow-x-auto` to the wrapper `<div>`.
