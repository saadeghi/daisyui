### menu
Menu is used to display a list of links vertically or horizontally

[menu docs](https://daisyui.com/components/menu/)

#### Class names
- component: `menu`
- part: `menu-title`, `menu-dropdown`, `menu-dropdown-toggle`
- modifier: `menu-disabled`, `menu-active`, `menu-focus`, `menu-dropdown-show`
- size: `menu-xs`, `menu-sm`, `menu-md`, `menu-lg`, `menu-xl`
- direction: `menu-vertical`, `menu-horizontal`

#### Syntax
Vertical menu:
```html
<ul class="menu">
  <li><button>Item</button></li>
</ul>
```
Horizontal menu:
```html
<ul class="menu menu-horizontal">
  <li><button>Item</button></li>
</ul>
```

#### Rules
- {MODIFIER} is optional and can have one of the modifier/size/direction class names
- Use `lg:menu-horizontal` for responsive layouts
- Use `menu-title` for list item title
- Use `<details>` tag to make submenus collapsible
- Use `menu-dropdown` and `menu-dropdown-toggle` to toggle the dropdown using JS
