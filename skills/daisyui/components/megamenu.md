### megamenu
A megamenu is a large, horizontal menu where each item opens a popover to show a large block of navigation links. Megamenu must be used once, on top of the page. Inside each popover, you can use a daisyUI menu, or any custom content. Megamenu fits better on large screens only, and for small screens, you can hide the megamenu and show the content in a dropdown or a drawer.

[megamenu docs](https://daisyui.com/components/megamenu/)

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
Example of megamenu-wide with lots of menu items
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
- {MODIFIER} is optional and can have one of the modifier class names and one of the size class names
- `megamenu-active` span is mandatory. it's the indicator that moves under the active item
- Each button must have a corresponding popover with the same id as the popovertarget value. HTML IDs must be unique.
- {CONTENT} can include a daisyUI menu (`<ul class="menu"><li><a>List item 1</a></li></ul>`), or any custom content
- you can put horizontal menu inside the popover like `<ul class="menu menu-horizontal"><li><a>List item 1</a></li></ul>`, or any other variation of daisyUI `menu` component
- On small screens the whole megamenu is hidden using `max-sm:megamenu-vertical` class and it will be vertical when visible. The button with `popovertarget="my-megamenu-1"` opens the megamenu with `id="my-megamenu-1" popover`
- On large screens, we hide the button using `sm:hidden` and the megamenu will be a horizontal menu, and each button inside the megamenu will open its corresponding popover.
- megamenu can have max 10 popovers inside it
- to hide the arrow from the buttons, use `after:content-none` class on the buttons
