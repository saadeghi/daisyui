### Footer
A footer can contain a logo, a copyright notice, and links to other pages.

[Footer documentation](https://daisyui.com/components/footer/)

#### Class names
- component: `footer`
- part: `footer-title`
- placement: `footer-center`
- direction: `footer-horizontal`, `footer-vertical`

#### Syntax
```html
<footer class="footer {MODIFIER}">{CONTENT}</footer>
```
The content can contain more than one `<nav>` tag. Each tag can contain `footer-title` and links.

#### Rules
- `{MODIFIER}` is optional. It can include one placement class name and one direction class name.
- To make the footer responsive, use `sm:footer-horizontal`.
- You can use `base-200` for the background color.
