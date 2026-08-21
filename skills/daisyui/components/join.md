### Join
A join is a container that groups more than one item. Use it to group buttons, inputs, or other elements. The join applies a border radius to the first and last items. It can make a horizontal or vertical list of items.

[Join documentation](https://daisyui.com/components/join/)

#### Class names
- component: `join`, `join-item`
- direction: `join-vertical`, `join-horizontal`

#### Syntax
```html
<div class="join {MODIFIER}">{CONTENT}</div>
```

#### Rules
- `{MODIFIER}` is optional. It can be one of the direction class names.
- The join element joins all its direct children.
- The join element affects all elements that have `join-item`.
- For responsive layouts, use `lg:join-horizontal`.
