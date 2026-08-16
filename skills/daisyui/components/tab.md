### Tab
Use tabs to show a list of links in a tabbed format.

[Tab documentation](https://daisyui.com/components/tab/)

#### Class names
- component: `tabs`
- part: `tab`, `tab-content`
- style: `tabs-box`, `tabs-border`, `tabs-lift`
- size: `tabs-xs`, `tabs-sm`, `tabs-md`, `tabs-lg`, `tabs-xl`
- modifier: `tab-active`, `tab-disabled`
- placement: `tabs-top`, `tabs-bottom`

#### Syntax
Buttons:
```html
<div role="tablist" class="tabs {MODIFIER}">
  <button role="tab" class="tab">Tab</button>
</div>
```

Radio inputs:
```html
<div role="tablist" class="tabs tabs-box">
  <input type="radio" name="my_tabs" class="tab" aria-label="Tab" />
</div>
```

#### Rules
- `{MODIFIER}` is optional. It can include one style class name and one size class name.
- To change the tab content after the user clicks a tab, use radio inputs.
- If you add a background to `tabs`, the two top corners of each tab become rounded.
