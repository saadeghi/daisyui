### Accordion
Use the accordion to show and hide content. Only one item can be open at a time.

[Accordion documentation](https://daisyui.com/components/accordion/)

#### Class names
- component: `collapse`
- part: `collapse-title`, `collapse-content`
- modifier: `collapse-arrow`, `collapse-plus`, `collapse-open`, `collapse-close`

#### Syntax
```html
<div class="collapse {MODIFIER}">{CONTENT}</div>
```
The content has this structure:
```html
<input type="radio" name="{name}" checked="{checked}" />
<div class="collapse-title">{title}</div>
<div class="collapse-content">{CONTENT}</div>
```

#### Rules
- `{MODIFIER}` is optional. It can be one of the modifier class names.
- The accordion uses radio inputs. Radio inputs that have the same name operate as one group. Only one input in the group can be open at a time.
- If a page has more than one accordion group, use a different radio-input name for each group.
- Replace `{name}` with a unique name for the accordion group.
- To open an accordion item by default, replace `{checked}` with `checked="checked"`.
