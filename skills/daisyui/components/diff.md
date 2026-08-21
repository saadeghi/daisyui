### Diff
Use the diff component to show a side-by-side comparison of two items.

[Diff documentation](https://daisyui.com/components/diff/)

#### Class names
- component: `diff`
- part: `diff-item-1`, `diff-item-2`, `diff-resizer`

#### Syntax
```html
<figure class="diff">
  <div class="diff-item-1">{item1}</div>
  <div class="diff-item-2">{item2}</div>
  <div class="diff-resizer"></div>
</figure>
```

#### Rules
- To keep the aspect ratio, add `aspect-16/9` or another aspect-ratio class to the `<figure class="diff">` element.
