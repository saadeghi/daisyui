### dock
Dock (also know as Bottom navigation or Bottom bar) is a UI element that provides navigation options to the user. Dock sticks to the bottom of the screen

[dock docs](https://daisyui.com/components/dock/)

#### Class names
- component: `dock`
- part: `dock-label`
- modifier: `dock-active`
- size: `dock-xs`, `dock-sm`, `dock-md`, `dock-lg`, `dock-xl`

#### Syntax
```html
<div class="dock {MODIFIER}">{CONTENT}</div>
```
where content is a list of buttons:
```html
<button>
    <svg>{icon}</svg>
    <span class="dock-label">Text</span>
</button>
```

#### Rules
- {MODIFIER} is optional and can have one of the size class names
- To make a button active, add `dock-active` class to the button
- add `<meta name="viewport" content="viewport-fit=cover">` is required for responsivness of the dock in iOS
