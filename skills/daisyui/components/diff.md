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
  <input type="range" min="0" max="100" value="50" class="diff-resizer" aria-label="Adjust the diff divider position" />
</figure>
```

#### Rules
- To keep the aspect ratio, add `aspect-16/9` or another aspect-ratio class to the `<figure class="diff">` element.
- Browsers with scroll-driven animations move the divider with the `diff-resizer` range input. Other browsers use the draggable empty `diff-resizer` div, so keep both elements in the markup.
