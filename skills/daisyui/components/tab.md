### tab
Tabs can be used to show a list of links in a tabbed format

[tab docs](https://daisyui.com/components/tab/)

#### Class Names:
- Component: `tabs`
- Part: `tab`, `tab-content`
- Style: `tabs-box`, `tabs-border`, `tabs-lift`
- Modifier: `tab-active`, `tab-disabled`
- Placement: `tabs-top`, `tabs-bottom`

#### Syntax
Using buttons:
```html
<div role="tablist" class="tabs {MODIFIER}">
  <button role="tab" class="tab">Tab</button>
</div>
```

Using radio inputs:
```html
<div role="tablist" class="tabs tabs-box">
  <input type="radio" name="my_tabs" class="tab" aria-label="Tab" />
</div>
```

#### Rules
- {MODIFIER} is optional and can have one of the style/size class names
- Radio inputs are needed for tab content to work with tab click
- If tabs gets a background then every tab inside it becomes rounded from both top corners
