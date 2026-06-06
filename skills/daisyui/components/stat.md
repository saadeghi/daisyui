### stat
Stat is used to show numbers and data in a block

[stat docs](https://daisyui.com/components/stat/)

#### Class names
- Component: `stats`
- Part: `stat`, `stat-title`, `stat-value`, `stat-desc`, `stat-figure`, `stat-actions`
- Direction: `stats-horizontal`, `stats-vertical`

#### Syntax
```html
<div class="stats {MODIFIER}">
  <div class="stat">{CONTENT}</div>
</div>
```

#### Rules
- {MODIFIER} is optional and can have one of the direction class names
- It's horizontal by default but you can make it vertical with the `stats-vertical` class
- Content includes `stat-title`, `stat-value`, `stat-desc` inside a `stat`
