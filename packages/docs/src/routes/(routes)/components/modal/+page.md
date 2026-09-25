---
title: Modal
desc: Modal is used to show a dialog or a box when you click a button.
source: https://raw.githubusercontent.com/saadeghi/daisyui/refs/heads/master/packages/daisyui/src/components/modal.css
layout: components
classnames:
  component:
  - class: modal
    desc: Modal
  part:
  - class: modal-box
    desc: The content part
  - class: modal-action
    desc: Actions part (buttons, etc.)
  - class: modal-backdrop
    desc: Label that covers the page when modal is open so we can close the modal by clicking outside
  - class: modal-toggle
    desc: Hidden checkbox that controls the state of modal
  modifier:
  - class: modal-open
    desc: Keeps the modal open (you can add this class using JS)
  placement:
  - class: modal-top
    desc: Moves the modal to top
  - class: modal-middle
    desc: Moves the modal to middle
    default: true
  - class: modal-bottom
    desc: Moves the modal to bottom
  - class: modal-start
    desc: Moves the modal to start horizontally
  - class: modal-end
    desc: Moves the modal to end horizontally
# browserSupport:
  chrome: 37
  firefox: 98
  safari: 15.4
  iossafari: 15.4
---

<script>
  import Component from "$components/Component.svelte"
  import Translate from "$components/Translate.svelte"
</script>


## There are 4 methods to use modals

| | Method | Opens/closes by | `Esc` key can close it | Locks background interactions |
|---|---|---|---|---|
| 1 | [Dialog&nbsp;(Recommended)](#method-1-html-dialog-element-recommended) | JavaScript | ✅ Yes | ✅ Yes |
| 2 | [Popover](#method-2-html-popover) | HTML attributes | ✅ Yes | ❌ No |
| 3 | [Checkbox&nbsp;(Legacy)](#method-3-checkbox-legacy) | Hidden checkbox | ❌ No | ❌ No |
| 4 | [Anchor Link&nbsp;(Legacy)](#method-4-using-anchor-links-legacy) | URL parameters | ❌ No | ❌ No |

> :INFO:
>
> Opening a modal adds a [scrollbar-gutter](https://developer.mozilla.org/en-US/docs/Web/CSS/scrollbar-gutter) to the page to avoid layout shift on operating systems that have a fixed scrollbar.
> On recent Chromium based browsers vertical scrollbar presence is detected automatically. On Safari and on mobile devices the scrollbar is displayed as overlay so there will not be gutter. On Firefox you need to detect the presence of vertical scrollbar and set the `scrollbar-gutter: stable` or `scrollbar-gutter: unset` on `:root` element yourself.
> If you don't want to use this feature, [you can exclude `rootscrollgutter`](/docs/config/#exclude).

## Method 1. HTML dialog element `recommended`
HTML dialog element is a native way to create modals. It is accessible and we can close the modal using `Esc` key.  
We can open the modal using JS `ID.showModal()` method and close it using `ID.close()` method.  
The ID must be unique for each modal.

### ~Dialog modal
#### opens and closes on click using the native HTML <dialog> element, which has been supported by all major browsers for quite some time (Safari and Safari iOS added it in version 15.4, released over three years ago).

<button class="btn" commandfor="my_modal_1" command="show-modal">open modal</button>
<dialog id="my_modal_1" class="modal">
  <div class="modal-box">
    <h3 class="font-bold text-lg">Hello!</h3>
    <p class="py-4">Press ESC key or click the button below to close</p>
    <div class="modal-action">
      <button class="btn" commandfor="my_modal_1" command="close">Close</button>
    </div>
  </div>
</dialog>

```html
<!-- Open the modal using the native HTML <dialog> element -->
<button class="$$btn" commandfor="my_modal_1" command="show-modal">open modal</button>
<dialog id="my_modal_1" class="$$modal">
  <div class="$$modal-box">
    <h3 class="text-lg font-bold">Hello!</h3>
    <p class="py-4">Press ESC key or click the button below to close</p>
    <div class="$$modal-action">
      <button class="$$btn" commandfor="my_modal_1" command="close">Close</button>
    </div>
  </div>
</dialog>
```
```jsx
{/* Open the modal using the native HTML <dialog> element */}
<button className="$$btn" commandfor="my_modal_1" command="show-modal">open modal</button>
<dialog id="my_modal_1" className="$$modal">
  <div className="$$modal-box">
    <h3 className="font-bold text-lg">Hello!</h3>
    <p className="py-4">Press ESC key or click the button below to close</p>
    <div className="$$modal-action">
      <button className="$$btn" commandfor="my_modal_1" command="close">Close</button>
    </div>
  </div>
</dialog>
```


### ~Dialog modal, closes when clicked outside
#### there is a second form with 'modal-backdrop' class and it covers the screen so we can close the modal when clicked outside

<button class="btn" commandfor="my_modal_2" command="show-modal">open modal</button>
<dialog id="my_modal_2" class="modal">
  <div class="modal-box">
    <h3 class="font-bold text-lg">Hello!</h3>
    <p class="py-4">Press ESC key or click outside to close</p>
  </div>
  <form method="dialog" class="modal-backdrop">
    <button>close</button>
  </form>
</dialog>

```html
{/* Open the modal using the native HTML <dialog> element */}
<button class="$$btn" commandfor="my_modal_2" command="show-modal">open modal</button>
<dialog id="my_modal_2" class="$$modal">
  <div class="$$modal-box">
    <h3 class="text-lg font-bold">Hello!</h3>
    <p class="py-4">Press ESC key or click outside to close</p>
  </div>
  <form method="dialog" class="$$modal-backdrop">
    <button>close</button>
  </form>
</dialog>
```
```jsx
{/* Open the modal using the native HTML <dialog> element */}
<button className="$$btn" commandfor="my_modal_2" command="show-modal">open modal</button>
<dialog id="my_modal_2" className="$$modal">
  <div className="$$modal-box">
    <h3 className="font-bold text-lg">Hello!</h3>
    <p className="py-4">Press ESC key or click outside to close</p>
  </div>
  <form method="dialog" className="$$modal-backdrop">
    <button>close</button>
  </form>
</dialog>
```


### ~Dialog modal with a close button at corner
<button class="btn" commandfor="my_modal_3" command="show-modal">open modal</button>
<dialog id="my_modal_3" class="modal">
  <div class="modal-box">
    <form method="dialog">
      <!-- if there is a button in form, it will close the modal -->
      <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <h3 class="font-bold text-lg">Hello!</h3>
    <p class="py-4">Press ESC key or click on ✕ button to close</p>
  </div>
</dialog>

```html
<!-- Open the modal using the native HTML <dialog> element -->
<button class="$$btn" commandfor="my_modal_3" command="show-modal">open modal</button>
<dialog id="my_modal_3" class="$$modal">
  <div class="$$modal-box">
    <form method="dialog">
      <button class="$$btn $$btn-sm $$btn-circle $$btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <h3 class="text-lg font-bold">Hello!</h3>
    <p class="py-4">Press ESC key or click on ✕ button to close</p>
  </div>
</dialog>
```
```jsx
{/* Open the modal using the native HTML <dialog> element */}
<button className="$$btn" commandfor="my_modal_3" command="show-modal">open modal</button>
<dialog id="my_modal_3" className="$$modal">
  <div className="$$modal-box">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="$$btn $$btn-sm $$btn-circle $$btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <h3 className="font-bold text-lg">Hello!</h3>
    <p className="py-4">Press ESC key or click on ✕ button to close</p>
  </div>
</dialog>
```


### ~Dialog modal with custom width
#### You can use any w-* and max-w-* utility class to customize the width

<button class="btn" commandfor="my_modal_4" command="show-modal">open modal</button>
<dialog id="my_modal_4" class="modal">
  <div class="modal-box w-11/12 max-w-5xl">
    <h3 class="font-bold text-lg">Hello!</h3>
    <p class="py-4">Click the button below to close</p>
    <div class="modal-action">
      <form method="dialog">
        <!-- if there is a button, it will close the modal -->
        <button class="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>

```html
<!-- Open the modal using the native HTML <dialog> element -->
<button class="$$btn" commandfor="my_modal_4" command="show-modal">open modal</button>
<dialog id="my_modal_4" class="$$modal">
  <div class="$$modal-box w-11/12 max-w-5xl">
    <h3 class="text-lg font-bold">Hello!</h3>
    <p class="py-4">Click the button below to close</p>
    <div class="$$modal-action">
      <form method="dialog">
        <!-- if there is a button, it will close the modal -->
        <button class="$$btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
```
```jsx
{/* Open the modal using the native HTML <dialog> element */}
<button className="$$btn" commandfor="my_modal_4" command="show-modal">open modal</button>
<dialog id="my_modal_4" className="$$modal">
  <div className="$$modal-box w-11/12 max-w-5xl">
    <h3 className="font-bold text-lg">Hello!</h3>
    <p className="py-4">Click the button below to close</p>
    <div className="$$modal-action">
      <form method="dialog">
        {/* if there is a button, it will close the modal */}
        <button className="$$btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
```


### ~Responsive
#### Modal goes bottom on SM screen size, goes middle on MD screen size

<button class="btn" commandfor="my_modal_5" command="show-modal">open modal</button>
<dialog id="my_modal_5" class="modal modal-bottom sm:modal-middle">
  <div class="modal-box">
    <h3 class="font-bold text-lg">Hello!</h3>
    <p class="py-4">Press ESC key or click the button below to close</p>
    <div class="modal-action">
      <form method="dialog">
        <!-- if there is a button in form, it will close the modal -->
        <button class="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>

```html
<!-- Open the modal using the native HTML <dialog> element -->
<button class="$$btn" commandfor="my_modal_5" command="show-modal">open modal</button>
<dialog id="my_modal_5" class="$$modal $$modal-bottom sm:$$modal-middle">
  <div class="$$modal-box">
    <h3 class="text-lg font-bold">Hello!</h3>
    <p class="py-4">Press ESC key or click the button below to close</p>
    <div class="$$modal-action">
      <form method="dialog">
        <!-- if there is a button in form, it will close the modal -->
        <button class="$$btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
```
```jsx
{/* Open the modal using the native HTML <dialog> element */}
<button className="$$btn" commandfor="my_modal_5" command="show-modal">open modal</button>
<dialog id="my_modal_5" className="$$modal $$modal-bottom sm:$$modal-middle">
  <div className="$$modal-box">
    <h3 className="font-bold text-lg">Hello!</h3>
    <p className="py-4">Press ESC key or click the button below to close</p>
    <div className="$$modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="$$btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
```

## Method 2. HTML popover
Popover is similar to dialog but it still allows focusing on the background elements. It is accessible and we can close the modal using `Esc` key.  

### ~Popover modal

<button class="btn" popovertarget="my-modal-1">Open</button>

<div class="modal" id="my-modal-1" popover>
  <div class="modal-box">
    <h3 class="font-bold text-lg">Hello!</h3>
    <p class="py-4">Press ESC key or click the button below to close</p>
    <div class="modal-action">
      <button class="btn" popovertarget="my-modal-1" popovertargetaction="hide">close</button>
    </div>
  </div>
</div>

```html
<!-- The button's popovertarget attribute points to the modal's ID. ID must be unique for each modal -->
<button class="$$btn" popovertarget="my-modal-1">Open</button>

<div class="$$modal" id="my-modal-1" popover>
  <div class="$$modal-box">
    <h3 class="font-bold text-lg">Hello!</h3>
    <p class="py-4">Press ESC key or click the button below to close</p>
    <div class="$$modal-action">
      <button popovertarget="my-modal-1" popovertargetaction="hide">close</button>
    </div>
  </div>
</div>
```

### ~Popover modal closes when clicked outside

<button class="btn" popovertarget="my-modal-2">Open</button>

<div class="modal" id="my-modal-2" popover>
  <div class="modal-box">
    <h3 class="font-bold text-lg">Hello!</h3>
    <p class="py-4">Press ESC key or click the button below to close</p>
  </div>
  <div class="modal-backdrop">
    <button popovertarget="my-modal-2" popovertargetaction="hide">close</button>
  </div>
</div>

```html
<!-- The button's popovertarget attribute points to the modal's ID. ID must be unique for each modal -->
<button class="$$btn" popovertarget="my-modal-2">Open</button>

<div class="$$modal" id="my-modal-2" popover>
  <div class="$$modal-box">
    <h3 class="font-bold text-lg">Hello!</h3>
    <p class="py-4">Press ESC key or click the button below to close</p>
  </div>
  <div class="$$modal-backdrop">
    <button popovertarget="my-modal-2" popovertargetaction="hide">close</button>
  </div>
</div>
```

## Method 3. checkbox `legacy`
A hidden checkbox can control the state of modal and labels can toggle the checkbox so we can open/close the modal.


### ~Modal using checkbox
<label for="my_modal_6" class="btn">open modal</label>

```html
<!-- The button to open modal -->
<label for="my_modal_6" class="$$btn">open modal</label>

<!-- Put this part before </body> tag -->
<input type="checkbox" id="my_modal_6" class="$$modal-toggle" />
<div class="$$modal" role="dialog">
  <div class="$$modal-box">
    <h3 class="text-lg font-bold">Hello!</h3>
    <p class="py-4">This modal works with a hidden checkbox!</p>
    <div class="$$modal-action">
      <label for="my_modal_6" class="$$btn">Close!</label>
    </div>
  </div>
</div>
```


### ~Modal that closes when clicked outside
#### Modal works with a hidden checkbox and labels can toggle the checkbox so we can use another label tag with 'modal-backdrop' class that covers the screen so we can close the modal when clicked outside

<label for="my_modal_7" class="btn">open modal</label>

```html
<!-- The button to open modal -->
<label for="my_modal_7" class="$$btn">open modal</label>

<!-- Put this part before </body> tag -->
<input type="checkbox" id="my_modal_7" class="$$modal-toggle" />
<div class="$$modal" role="dialog">
  <div class="$$modal-box">
    <h3 class="text-lg font-bold">Hello!</h3>
    <p class="py-4">This modal works with a hidden checkbox!</p>
  </div>
  <label class="$$modal-backdrop" for="my_modal_7">Close</label>
</div>
```


### Method 4. using anchor links `legacy`
A link adds a parameter to the URL and you only see the modal when the URL has that parameter  
When modal is closed, the page will scroll to the top because of the anchor link.
Anchor links might not work well on some SPA frameworks. If there are problems, use the other methods

### ~Modal using anchor link

<a href="#my_modal_8" class="btn" rel="external">open modal</a>

```html
<!-- The button to open modal -->
<a href="#my_modal_8" class="$$btn">open modal</a>

<!-- Put this part before </body> tag -->
<div class="$$modal" role="dialog" id="my_modal_8">
  <div class="$$modal-box">
    <h3 class="text-lg font-bold">Hello!</h3>
    <p class="py-4">This modal works with anchor links</p>
    <div class="$$modal-action">
      <a href="#" class="$$btn">Yay!</a>
    </div>
  </div>
</div>
```
