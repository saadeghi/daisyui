---
title: Dropdown
desc: Dropdown can open a menu or any other element when the button is clicked.
layout: components
classnames:
  component:
  - class: dropdown
    desc: Dropdown container
  part:
  - class: dropdown-content
    desc: Content part
  placement:
  - class: dropdown-start
    desc: Align horizontally to start of button
    default: true
  - class: dropdown-center
    desc: Align horizontally to center of button
  - class: dropdown-end
    desc: Align horizontally to end of button
  - class: dropdown-top
    desc: Open from top
  - class: dropdown-bottom
    desc: Open from bottom
    default: true
  - class: dropdown-left
    desc: Open from left
  - class: dropdown-right
    desc: Open from right
  modifier:
  - class: dropdown-hover
    desc: Opens on hover too
  - class: dropdown-open
    desc: Force open
---

<script>
  import Component from "$components/Component.svelte"
  import Translate from "$components/Translate.svelte"
</script>


## There are 3 methods to use a dropdowns
1. [details and summary elements](#method-1-details-and-summary)  
2. [popover API and anchor positioning `new`](#method-2-popover-api-and-anchor-positioning)  
3. [CSS focus](#method-3-css-focus)  


## Method 1. details and summary
details and summary are native HTML elements that can be used to create dropdowns.  
Dropdown using details and summary opens and closes the content when the summary is clicked. You can also open/close it using JS by adding/removing the `open` attribute

```:Structure
  Container for the button + content
              │
              │    button to toggle the visibility of the content
              │                        │
<details>   ──╯                        │
  <summary>open or close</summary>   ──╯
  Content
</details>
```

### ~Dropdown using details and summary
<details class="dropdown mb-32">
  <summary class="m-1 btn">open or close</summary>
  <ul class="p-2 shadow-sm menu dropdown-content z-1 bg-base-100 rounded-box w-52">
    <li><button>Item 1</button></li>
    <li><button>Item 2</button></li>
  </ul>
</details>

```html
<details class="$$dropdown">
  <summary class="$$btn m-1">open or close</summary>
  <ul class="$$menu $$dropdown-content bg-base-100 $$rounded-box z-1 w-52 p-2 shadow-sm">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</details>
```

## Method 2. popover API and anchor positioning `new`

Popover API is the new HTML standard for creating dropdowns. It opens the dropdown on a top layer, which means there's no need to z-index management and there's no overflow issue.  
Anchor positioning is a new CSS standard for positioning elements relative to an anchor.  

```:Structure
<button
  style="anchor-name:--anchor-1"  ────────────────╮
  popovertarget="popover-1"   ───────╮            │
>Button</button>                Unique ID         │
                                     │            │
<div popover                         │      Positions this dropdown relative to this button
  id="popover-1"   ──────────────────╯            │
  style="position-anchor:--anchor-1"  ────────────╯
>Content</div>
```

> :INFO:
>
> `popovertarget` is the unique ID of the popover content.  
> `anchor-name`/`position-anchor` is the unique name of the anchor.

> :INFO:
>
> CSS Anchor Positioning is a new standard but isn't yet supported in Firefox and Safari ([caniuse.com](https://caniuse.com/css-anchor-positioning)).  
> In those browsers, the dropdown will appear centered like a modal.  
> There's also [this polyfill](https://github.com/oddbird/css-anchor-positioning) that can be helpful.

### ~Dropdown using popover API and anchor positioning
<button class="btn" popovertarget="popover-1" style="anchor-name:--anchor-1">
  Button
</button>
<ul class="dropdown menu w-52 rounded-box bg-base-100 shadow-sm"
  popover id="popover-1" style="position-anchor:--anchor-1">
  <li><a>Item 1</a></li>
  <li><a>Item 2</a></li>
</ul>

```html
<!-- change popover-1 and --anchor-1 names. Use unique names for each dropdown -->
<button class="$$btn" popovertarget="popover-1" style="anchor-name:--anchor-1">
  Button
</button>
<ul class="$$dropdown $$menu w-52 rounded-box bg-base-100 shadow-sm"
  popover id="popover-1" style="position-anchor:--anchor-1">
  <li><a>Item 1</a></li>
  <li><a>Item 2</a></li>
</ul>
```

```jsx
{/* change popover-1 and --anchor-1 names. Use unique names for each dropdown */}
{/* For TSX uncomment the commented types below */}
<button className="$$btn" popoverTarget="popover-1" style={{ anchorName: "--anchor-1" } /* as React.CSSProperties */}>
  Button
</button>

<ul className="$$dropdown $$menu w-52 rounded-box bg-base-100 shadow-sm"
  popover="auto" id="popover-1" style={{ positionAnchor: "--anchor-1" } /* as React.CSSProperties */ }>
  <li><a>Item 1</a></li>
  <li><a>Item 2</a></li>
</ul>
```

## Method 3. CSS focus

The content gets displayed when the button is focused.

```:Structure
                                                    Focusable button
                                                            │
<div>                                                       │
  <div tabindex="0" role="button">Click to open</div>  ─────╯
  <div tabindex="0">Content</div>   ───────╮ 
</div>                                     │
                           Content shown when button is focused
```

> :INFO:
>
> Why div?  
> Safari has a [CSS bug](https://bugs.webkit.org/show_bug.cgi?id=22261) since 2008 that prevents button elements from being focused, so we use div `tabindex="0"` as a workaround.
> This approach is accessible with the addition of `role="button"` and functions consistently across all browsers.

> :INFO:
>
> This dropdown closes when focus is lost. Avoid placing elements in it that remove focus from dropdown content. For example a `<dialog>` element inside the dropdown.

> :SUCCESS:
>
> To close the dropdown after click, you can use something like `onclick="document.activeElement.blur()"`. [Example](https://play.tailwindcss.com/pc8zXb89lM)

### ~Dropdown menu
<div>
  <div class="text-sm mb-4 text-center">Click outside to close</div>
  <div class="dropdown mb-32">
    <div tabindex="0" role="button" class="m-1 btn">Click to open</div>
    <ul tabindex="0" class="p-2 shadow-sm menu dropdown-content z-1 bg-base-100 rounded-box w-52">
      <li><button>Item 1</button></li>
      <li><button>Item 2</button></li>
    </ul>
  </div>
</div>

```html
<div class="$$dropdown">
  <div tabindex="0" role="button" class="$$btn m-1">Click</div>
  <ul tabindex="0" class="$$dropdown-content $$menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</div>
```


## Positions


### ~Dropdown / aligns to start of button horizontally
<div class="dropdown dropdown-start mb-32">
  <div tabindex="0" role="button" class="m-1 btn">Click ⬇️</div>
  <ul tabindex="0" class="p-2 shadow-sm menu dropdown-content z-1 bg-base-100 rounded-box w-52">
    <li><button>Item 1</button></li>
    <li><button>Item 2</button></li>
  </ul>
</div>

```html
<div class="$$dropdown $$dropdown-start">
  <div tabindex="0" role="button" class="$$btn m-1">Click ⬇️</div>
  <ul tabindex="0" class="$$dropdown-content $$menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</div>
```

### ~Dropdown / aligns to end of button horizontally
<div class="dropdown dropdown-end mb-32">
  <div tabindex="0" role="button" class="m-1 btn">Click  ⬇️</div>
  <ul tabindex="0" class="p-2 shadow-sm menu dropdown-content z-1 bg-base-100 rounded-box w-52">
    <li><button>Item 1</button></li>
    <li><button>Item 2</button></li>
  </ul>
</div>

```html
<div class="$$dropdown $$dropdown-end">
  <div tabindex="0" role="button" class="$$btn m-1">Click  ⬇️</div>
  <ul tabindex="0" class="$$dropdown-content $$menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</div>
```

### ~Dropdown / aligns to center of button horizontally
<div class="dropdown dropdown-center mb-32">
  <div tabindex="0" role="button" class="m-1 btn">Click  ⬇️</div>
  <ul tabindex="0" class="p-2 shadow-sm menu dropdown-content z-1 bg-base-100 rounded-box w-52">
    <li><button>Item 1</button></li>
    <li><button>Item 2</button></li>
  </ul>
</div>

```html
<div class="$$dropdown $$dropdown-center">
  <div tabindex="0" role="button" class="$$btn m-1">Click  ⬇️</div>
  <ul tabindex="0" class="$$dropdown-content $$menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</div>
```


### ~Dropdown top
<div class="dropdown dropdown-top mt-32">
  <div tabindex="0" role="button" class="m-1 btn">Click ⬆️</div>
  <ul tabindex="0" class="p-2 shadow-sm menu dropdown-content z-1 bg-base-100 rounded-box w-52">
    <li><button>Item 1</button></li>
    <li><button>Item 2</button></li>
  </ul>
</div>

```html
<div class="$$dropdown $$dropdown-top">
  <div tabindex="0" role="button" class="$$btn m-1">Click ⬆️</div>
  <ul tabindex="0" class="$$dropdown-content $$menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</div>
```

### ~Dropdown top / aligns to center of button horizontally
<div class="dropdown dropdown-top dropdown-center mt-32">
  <div tabindex="0" role="button" class="m-1 btn">Click ⬆️</div>
  <ul tabindex="0" class="p-2 shadow-sm menu dropdown-content z-1 bg-base-100 rounded-box w-52">
    <li><button>Item 1</button></li>
    <li><button>Item 2</button></li>
  </ul>
</div>

```html
<div class="$$dropdown $$dropdown-top $$dropdown-center">
  <div tabindex="0" role="button" class="$$btn m-1">Click ⬆️</div>
  <ul tabindex="0" class="$$dropdown-content $$menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</div>
```

### ~Dropdown top / aligns to end of button horizontally
<div class="dropdown dropdown-top dropdown-end mt-32">
  <div tabindex="0" role="button" class="m-1 btn">Click ⬆️</div>
  <ul tabindex="0" class="p-2 shadow-sm menu dropdown-content z-1 bg-base-100 rounded-box w-52">
    <li><button>Item 1</button></li>
    <li><button>Item 2</button></li>
  </ul>
</div>

```html
<div class="$$dropdown $$dropdown-top $$dropdown-end">
  <div tabindex="0" role="button" class="$$btn m-1">Click ⬆️</div>
  <ul tabindex="0" class="$$dropdown-content $$menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</div>
```

### ~Dropdown bottom (default)
<div class="dropdown dropdown-bottom mb-32">
  <div tabindex="0" class="m-1 btn">Click ⬇️</div>
  <ul tabindex="0" class="p-2 shadow-sm menu dropdown-content z-1 bg-base-100 rounded-box w-52">
    <li><button>Item 1</button></li>
    <li><button>Item 2</button></li>
  </ul>
</div>

```html
<div class="$$dropdown $$dropdown-bottom">
  <div tabindex="0" role="button" class="$$btn m-1">Click ⬇️</div>
  <ul tabindex="0" class="$$dropdown-content $$menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</div>
```

### ~Dropdown bottom (default) / aligns to center of button horizontally
<div class="dropdown dropdown-bottom dropdown-center mb-32">
  <div tabindex="0" role="button" class="m-1 btn">Click ⬇️</div>
  <ul tabindex="0" class="p-2 shadow-sm menu dropdown-content z-1 bg-base-100 rounded-box w-52">
    <li><button>Item 1</button></li>
    <li><button>Item 2</button></li>
  </ul>
</div>

```html
<div class="$$dropdown $$dropdown-bottom $$dropdown-center">
  <div tabindex="0" role="button" class="$$btn m-1">Click ⬇️</div>
  <ul tabindex="0" class="$$dropdown-content $$menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</div>
```

### ~Dropdown bottom (default) / aligns to end of button horizontally
<div class="dropdown dropdown-bottom dropdown-end mb-32">
  <div tabindex="0" role="button" class="m-1 btn">Click ⬇️</div>
  <ul tabindex="0" class="p-2 shadow-sm menu dropdown-content z-1 bg-base-100 rounded-box w-52">
    <li><button>Item 1</button></li>
    <li><button>Item 2</button></li>
  </ul>
</div>

```html
<div class="$$dropdown $$dropdown-bottom $$dropdown-end">
  <div tabindex="0" role="button" class="$$btn m-1">Click ⬇️</div>
  <ul tabindex="0" class="$$dropdown-content $$menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</div>
```


### ~Dropdown left
<div class="dropdown dropdown-left mb-16">
  <div tabindex="0" role="button" class="m-1 btn">Click ⬅️</div>
  <ul tabindex="0" class="p-2 shadow-sm menu dropdown-content z-1 bg-base-100 rounded-box w-52">
    <li><button>Item 1</button></li>
    <li><button>Item 2</button></li>
  </ul>
</div>

```html
<div class="$$dropdown $$dropdown-left">
  <div tabindex="0" role="button" class="$$btn m-1">Click ⬅️</div>
  <ul tabindex="0" class="$$dropdown-content $$menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</div>
```


### ~Dropdown left / aligns to center of button vertically
<div class="dropdown dropdown-left dropdown-center my-16">
  <div tabindex="0" role="button" class="m-1 btn">Click ⬅️</div>
  <ul tabindex="0" class="p-2 shadow-sm menu dropdown-content z-1 bg-base-100 rounded-box w-52">
    <li><button>Item 1</button></li>
    <li><button>Item 2</button></li>
  </ul>
</div>

```html
<div class="$$dropdown $$dropdown-left $$dropdown-center">
  <div tabindex="0" role="button" class="$$btn m-1">Click ⬅️</div>
  <ul tabindex="0" class="$$dropdown-content $$menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</div>
```

### ~Dropdown left / aligns to end of button vertically
<div class="dropdown dropdown-left dropdown-end mt-16">
  <div tabindex="0" role="button" class="m-1 btn">Click ⬅️</div>
  <ul tabindex="0" class="p-2 shadow-sm menu dropdown-content z-1 bg-base-100 rounded-box w-52">
    <li><button>Item 1</button></li>
    <li><button>Item 2</button></li>
  </ul>
</div>

```html
<div class="$$dropdown $$dropdown-left $$dropdown-end">
  <div tabindex="0" role="button" class="$$btn m-1">Click ⬅️</div>
  <ul tabindex="0" class="$$dropdown-content $$menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</div>
```


### ~Dropdown right
<div class="dropdown dropdown-right mb-16">
  <div tabindex="0" role="button" class="m-1 btn">Click ➡️</div>
  <ul tabindex="0" class="p-2 shadow-sm menu dropdown-content z-1 bg-base-100 rounded-box w-52">
    <li><button>Item 1</button></li>
    <li><button>Item 2</button></li>
  </ul>
</div>

```html
<div class="$$dropdown $$dropdown-right">
  <div tabindex="0" role="button" class="$$btn m-1">Click ➡️</div>
  <ul tabindex="0" class="$$dropdown-content $$menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</div>
```


### ~Dropdown right / aligns to end of button vertically
<div class="dropdown dropdown-right dropdown-end mt-16">
  <div tabindex="0" role="button" class="m-1 btn">Click ➡️</div>
  <ul tabindex="0" class="p-2 shadow-sm menu dropdown-content z-1 bg-base-100 rounded-box w-52">
    <li><button>Item 1</button></li>
    <li><button>Item 2</button></li>
  </ul>
</div>

```html
<div class="$$dropdown $$dropdown-right $$dropdown-end">
  <div tabindex="0" role="button" class="$$btn m-1">Click ➡️</div>
  <ul tabindex="0" class="$$dropdown-content $$menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</div>
```

### ~Dropdown right / aligns to center of button vertically
<div class="dropdown dropdown-right dropdown-center my-16">
  <div tabindex="0" role="button" class="m-1 btn">Click ➡️</div>
  <ul tabindex="0" class="p-2 shadow-sm menu dropdown-content z-1 bg-base-100 rounded-box w-52">
    <li><button>Item 1</button></li>
    <li><button>Item 2</button></li>
  </ul>
</div>

```html
<div class="$$dropdown $$dropdown-right $$dropdown-center">
  <div tabindex="0" role="button" class="$$btn m-1">Click ➡️</div>
  <ul tabindex="0" class="$$dropdown-content $$menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</div>
```

## Modifiers

### ~Dropdown on hover
<div class="dropdown dropdown-hover mb-32">
  <div tabindex="0" role="button" class="m-1 btn">Hover</div>
  <ul tabindex="0" class="p-2 shadow-sm menu dropdown-content z-1 bg-base-100 rounded-box w-52">
    <li><button>Item 1</button></li>
    <li><button>Item 2</button></li>
  </ul>
</div>

```html
<div class="$$dropdown $$dropdown-hover">
  <div tabindex="0" role="button" class="$$btn m-1">Hover</div>
  <ul tabindex="0" class="$$dropdown-content $$menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</div>
```

### ~Force open
<div class="dropdown dropdown-open mb-32">
  <div tabindex="0" role="button" class="m-1 btn">Button</div>
  <ul tabindex="0" class="p-2 shadow-sm menu dropdown-content z-1 bg-base-100 rounded-box w-52">
    <li><button>Item 1</button></li>
    <li><button>Item 2</button></li>
  </ul>
</div>

```html
<div class="$$dropdown $$dropdown-open">
  <div tabindex="0" role="button" class="$$btn m-1">Button</div>
  <ul tabindex="0" class="$$dropdown-content $$menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</div>
```
## More examples

### ~Card as dropdown
<div class="dropdown mb-32">
  <div tabindex="0" role="button" class="m-1 btn">Click</div>
  <div tabindex="0" class="w-64 shadow-md card card-sm dropdown-content z-1 bg-base-100">
    <div class="card-body">
      <p>This is a card. You can use any element as a dropdown.</p>
    </div>
  </div>
</div>

```html
<div class="$$dropdown">
  <div tabindex="0" role="button" class="$$btn m-1">Click</div>
  <div
    tabindex="0"
    class="$$dropdown-content $$card $$card-sm bg-base-100 z-1 w-64 shadow-md">
    <div class="$$card-body">
      <p>This is a card. You can use any element as a dropdown.</p>
    </div>
  </div>
</div>
```


### ~Dropdown in navbar
<div class="navbar mb-40 bg-base-200 w-full">
  <div class="ps-4">
    <button class="text-lg font-bold">daisyUI</button>
  </div>
  <div class="flex justify-end grow px-2">
    <div class="flex items-stretch">
      <button class="btn btn-ghost rounded-field">Button</button>
      <div class="dropdown dropdown-end">
        <div tabindex="0" role="button" class="btn btn-ghost rounded-field">Dropdown</div>
        <ul tabindex="0" class="p-2 shadow-sm menu dropdown-content z-1 bg-base-200 rounded-box w-52 mt-4">
          <li><button>Item 1</button></li>
          <li><button>Item 2</button></li>
        </ul>
      </div>
    </div>
  </div>
</div>

```html
<div class="$$navbar bg-base-200">
  <div class="ps-4">
    <a class="text-lg font-bold">daisyUI</a>
  </div>
  <div class="flex grow justify-end px-2">
    <div class="flex items-stretch">
      <a class="$$btn $$btn-ghost rounded-field">Button</a>
      <div class="$$dropdown $$dropdown-end">
        <div tabindex="0" role="button" class="$$btn $$btn-ghost rounded-field">Dropdown</div>
        <ul
          tabindex="0"
          class="$$menu $$dropdown-content bg-base-200 rounded-box z-1 mt-4 w-52 p-2 shadow-sm">
          <li><a>Item 1</a></li>
          <li><a>Item 2</a></li>
        </ul>
      </div>
    </div>
  </div>
</div>
```


### ~Helper dropdown
<div class="mb-28 mt-6 flex gap-1 items-center">
  A normal text and a helper dropdown
  <div class="dropdown dropdown-end">
    <div tabindex="0" role="button" class="btn btn-circle btn-ghost btn-xs text-info">
      <svg tabindex="0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="w-4 h-4 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
    </div>
    <div tabindex="0" class="shadow-sm card card-sm dropdown-content z-1 bg-base-100 rounded-box w-64">
      <div tabindex="0" class="card-body">
        <h2 class="card-title">You needed more info?</h2>
        <p>Here is a description!</p>
      </div>
    </div>
  </div>
</div>

```html
A normal text and a helper dropdown
<div class="$$dropdown $$dropdown-end">
  <div tabindex="0" role="button" class="$$btn $$btn-circle $$btn-ghost $$btn-xs text-info">
    <svg
      tabindex="0"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      class="h-4 w-4 stroke-current">
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
    </svg>
  </div>
  <div
    tabindex="0"
    class="$$card $$card-sm $$dropdown-content bg-base-100 rounded-box z-1 w-64 shadow-sm">
    <div tabindex="0" class="$$card-body">
      <h2 class="$$card-title">You needed more info?</h2>
      <p>Here is a description!</p>
    </div>
  </div>
</div>
```
