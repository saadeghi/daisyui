### footer
Footer can contain logo, copyright notice, and links to other pages

[footer docs](https://daisyui.com/components/footer/)

#### Class names
- component: `footer`
- part: `footer-title`
- placement: `footer-center`
- direction: `footer-horizontal`, `footer-vertical`

#### Syntax
```html
<footer class="footer {MODIFIER}">{CONTENT}</footer>
```
where content can contain several `<nav>` tags with `footer-title` and links inside

#### Rules
- {MODIFIER} is optional and can have one of each placement/direction class names
- try to use `sm:footer-horizontal` to make footer responsive
- suggestion - use `base-200` for background color
