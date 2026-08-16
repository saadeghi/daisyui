### Megamenu
A megamenu is a large horizontal menu. Each item opens a popover that shows a large group of navigation links. Use one megamenu at the top of the page. Each popover can contain a daisyUI menu or custom content. Use a megamenu on large screens. On small screens, hide it and show its content in a dropdown or drawer.

[Megamenu documentation](https://daisyui.com/components/megamenu/)

#### Class names
- component: `megamenu`
- part: `megamenu-active`
- modifier: `megamenu-wide`, `megamenu-full`
- direction: `megamenu-vertical`
- size: `megamenu-xs`, `megamenu-sm`, `megamenu-md`, `megamenu-lg`, `megamenu-xl`

#### Syntax
```html
<button class="btn sm:hidden" popovertarget="my-megamenu-1">Menu</button>
<div class="megamenu max-sm:megamenu-vertical {MODIFIER} p-2 border border-base-300" id="my-megamenu-1" popover>
  <span class="megamenu-active"></span>

  <button popovertarget="item-1">button 1</button>
  <div id="item-1" popover>
    {CONTENT}
  </div>

  <button popovertarget="item-2">button 2</button>
  <div id="item-2" popover>
    {CONTENT}
  </div>

</div>
```
Example of `megamenu-wide` with many menu items:
```html
<button class="btn sm:hidden" popovertarget="my-megamenu-2">Menu</button>
<div class="megamenu max-sm:megamenu-vertical megamenu-wide w-full p-2 border border-base-300" id="my-megamenu-2" popover>
  <span class="megamenu-active"></span>
  <button popovertarget="c1">One</button>
  <div id="c1" popover>
    <div class="flex max-sm:flex-col items-start">
      <ul class="menu w-full md:menu-horizontal">
        <li>
          <a>first column menu item</a>
          <ul><li><a>sub menu item</a></li></ul>
        </li>
        <li>
          <a>second column menu item</a>
          <ul><li><a>sub menu item</a></li></ul>
        </li>
        <li>
          <a>third column menu item</a>
          <ul><li><a>sub menu item</a></li></ul>
        </li>
      </ul>
      <img src="{image-url}" class="md:max-w-sm max-md:w-auto" alt="sample image at the end of the megamenu">
    </div>
  </div>
</div>
```


#### Rules
- `{MODIFIER}` is optional. It can include one modifier class name and one size class name.
- You must include the `megamenu-active` span. It is the indicator that moves below the active item.
- Each button must have a related popover. Its ID must be the same as the `popovertarget` value. Do not use an HTML ID more than once.
- `{CONTENT}` can include a daisyUI menu, such as `<ul class="menu"><li><a>List item 1</a></li></ul>`. It can also include custom content.
- You can put a horizontal menu in the popover. For example, use `<ul class="menu menu-horizontal"><li><a>List item 1</a></li></ul>`. You can also use a different daisyUI `menu` variation.
- On small screens, use `max-sm:megamenu-vertical` to hide the megamenu. When it is visible, it has a vertical layout. The button with `popovertarget="my-megamenu-1"` opens the megamenu with `id="my-megamenu-1" popover`.
- On large screens, use `sm:hidden` to hide the button. The megamenu has a horizontal layout. Each button in the megamenu opens its related popover.
- A megamenu can contain a maximum of 10 popovers.
- To hide the arrow on each button, add `after:content-none` to the buttons.
