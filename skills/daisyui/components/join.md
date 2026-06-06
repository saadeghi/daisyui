### join
Join is a container for grouping multiple items, it can be used to group buttons, inputs, etc. Join applies border radius to the first and last item. Join can be used to create a horizontal or vertical list of items

[join docs](https://daisyui.com/components/join/)

#### Class names
- component: `join`, `join-item`
- direction: `join-vertical`, `join-horizontal`

#### Syntax
```html
<div class="join {MODIFIER}">{CONTENT}</div>
```

#### Rules
- {MODIFIER} is optional and can have one of the direction class names
- Any direct child of the join element will get joined together
- Any element with `join-item` will be affected
- Use `lg:join-horizontal` for responsive layouts
