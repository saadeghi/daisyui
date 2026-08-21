### Stat
Use a stat component to show numbers and data in a block.

[Stat documentation](https://daisyui.com/components/stat/)

#### Class names
- component: `stats`
- part: `stat`, `stat-title`, `stat-value`, `stat-desc`, `stat-figure`, `stat-actions`
- direction: `stats-horizontal`, `stats-vertical`

#### Syntax
```html
<div class="stats {MODIFIER}">
  <div class="stat">{CONTENT}</div>
</div>
```

#### Rules
- `{MODIFIER}` is optional. It can be one of the direction class names.
- The default layout is horizontal. To make it vertical, use the `stats-vertical` class.
- Put `stat-title`, `stat-value`, and `stat-desc` in a `stat` element.
