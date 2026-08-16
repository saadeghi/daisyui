### Menu
Use a menu to show a list of links vertically or horizontally.

[Menu documentation](https://daisyui.com/components/menu/)

#### Class names
- component: `menu`
- part: `menu-title`, `menu-dropdown`, `menu-dropdown-toggle`
- modifier: `menu-disabled`, `menu-active`, `menu-focus`, `menu-dropdown-show`, `menu-paged`
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
- `{MODIFIER}` is optional. It can include one modifier class name, one size class name, and one direction class name.
- For responsive layouts, use `lg:menu-horizontal`.
- Use `menu-title` for the list-item title.
- Use the `<details>` tag to make submenus collapsible.
- Use `menu-paged` to show one submenu level at a time. The open `<summary>` becomes the back button.
- Use `menu-dropdown` and `menu-dropdown-toggle` to control the dropdown with JavaScript.
