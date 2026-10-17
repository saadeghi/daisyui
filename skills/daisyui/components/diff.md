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
  <input type="range" min="0" max="100" value="50" class="diff-resizer" tabindex="-1" aria-label="Adjust the diff divider position" />
</figure>
```

#### Rules
- To keep the aspect ratio, add `aspect-16/9` or another aspect-ratio class to the `<figure class="diff">` element.
- Browsers with scroll-driven animations move the divider with the `diff-resizer` range input. In other browsers, drag the knob on the divider (the native resize handle of `diff-item-1` sits there).
- Keystrokes move the divider: focusing the `diff` container shows the first item, focusing `diff-item-1` shows the second one. The range input is hidden from the keyboard, so keep both focusable elements (the container and `diff-item-1`) in the markup.
- Markup that uses an empty `diff-resizer` div (without the range input) keeps working.
