### table
Table can be used to show a list of data in a table format

[table docs](https://daisyui.com/components/table/)

#### Class Names:
- Component: `table`
- Modifier: `table-zebra`, `table-pin-rows`, `table-pin-cols`
- Size: `table-xs`, `table-sm`, `table-md`, `table-lg`, `table-xl`

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
- {MODIFIER} is optional and can have one of each modifier/size class names
- The `overflow-x-auto` class is added to the wrapper div to make the table horizontally scrollable on smaller screens
