### accordion
Accordion is used for showing and hiding content but only one item can stay open at a time

[accordion docs](https://daisyui.com/components/accordion/)

#### Class names
- component: `collapse`
- part: `collapse-title`, `collapse-content`
- modifier: `collapse-arrow`, `collapse-plus`, `collapse-open`, `collapse-close`

#### Syntax
```html
<div class="collapse {MODIFIER}">{CONTENT}</div>
```
where content is:
```html
<input type="radio" name="{name}" checked="{checked}" />
<div class="collapse-title">{title}</div>
<div class="collapse-content">{CONTENT}</div>
```

#### Rules
- {MODIFIER} is optional and can have one of the modifier class names
- Accordion uses radio inputs. All radio inputs with the same name work together and only one of them can be open at a time
- If you have more than one set of accordion items on a page, use different names for the radio inputs on each set
- Replace {name} with a unique name for the accordion group
- replace `{checked}` with `checked="checked"` if you want the accordion to be open by default
