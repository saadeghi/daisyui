### Dock
A dock is also called bottom navigation or a bottom bar. It gives navigation options and stays at the bottom of the screen.

[Dock documentation](https://daisyui.com/components/dock/)

#### Class names
- component: `dock`
- part: `dock-label`
- modifier: `dock-active`
- size: `dock-xs`, `dock-sm`, `dock-md`, `dock-lg`, `dock-xl`

#### Syntax
```html
<div class="dock {MODIFIER}">{CONTENT}</div>
```
The content is a list of buttons:
```html
<button>
    <svg>{icon}</svg>
    <span class="dock-label">Text</span>
</button>
```

#### Rules
- `{MODIFIER}` is optional. It can be one of the size class names.
- To make a button active, add the `dock-active` class to the button.
- For a responsive dock in iOS, add `<meta name="viewport" content="viewport-fit=cover">`.
