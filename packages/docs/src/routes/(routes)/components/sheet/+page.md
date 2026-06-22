---
title: Sheet
desc: Sheet is used to show a dialog or a box when you click a button.
source: https://raw.githubusercontent.com/saadeghi/daisyui/refs/heads/master/packages/daisyui/src/components/sheet.css
layout: components
classnames:
  component:
  - class: sheet
    desc: Sheet
  part:
  - class: sheet-backdrop
    desc: Label that covers the page when sheet is open so we can close the sheet by clicking outside
  - class: sheet-content
    desc: The content part
  - class: sheet-handle
    desc: Part of the sheet that will peek (show up) when the sheet is hidden - child of `sheet-handle`
  - class: sheet-button
    desc: Label for the checkbox that controls the state of sheet (to show focus)
  placement:
  - class: sheet-anchored
    desc: Anchor sheet to a container (also must set `--sheet-anchor-name`)
  - class: sheet-top
    desc: Show the sheet on top
  - class: sheet-bottom
    desc: Show the sheet on bottom
  - class: sheet-start
    desc: Show the sheet on start horizontally
  - class: sheet-end
    desc: Show the sheet on end horizontally
---

<script>
  import Component from "$components/Component.svelte"
  import Translate from "$components/Translate.svelte"
</script>


## There are 2 methods to use modals
1. [Using HTML Popover API](#method-1-popover-api-recommended)
  Has better accessibility
2. [Using checkbox](#method-2-checkbox-legacy)
  A hidden `<input type="checkbox">` to control the state of sheet and `<label>` to check/uncheck the checkbox and open/close the sheet

> :INFO:
>
> Opening a sheet with backdrop adds a [scrollbar-gutter](https://developer.mozilla.org/en-US/docs/Web/CSS/scrollbar-gutter) to the page to avoid layout shift on operating systems that have a fixed scrollbar.
> On recent Chromium based browsers vertical scrollbar presence is detected automatically. On Safari and on mobile devices the scrollbar is displayed as overlay so there will not be gutter. On Firefox you need to detect the presence of vertical scrollbar and set the `scrollbar-gutter: stable` or `scrollbar-gutter: unset` on `:root` element yourself.
> If you don't want to use this feature, [you can exclude `rootscrollgutter`](/docs/config/#exclude).

## Method 1. Popover API `recommended`
HTML dialog element is a native way to create modals. It is accessible and we can close the modal using `Esc` key.
We can open the modal using JS `ID.showModal()` method and close it using `ID.close()` method.
The ID must be unique for each modal.

### ~Sheet using Popover API
#### opens on click using ID.showModal() method. can be closed using ID.close() method

<div
  class="h-60 preview-full-container"
  style="--sheet-anchor-name: --sheet-1-anchor; anchor-name: var(--sheet-anchor-name)"
>
  <button popovertarget="sheet-1" popovertargetaction="show" class="btn">Open modal sheet</button>

  <div class="sheet sheet-anchored" id="sheet-1" popover="manual">
    <button popovertarget="sheet-1" popovertargetaction="hide" class="sheet-backdrop glass"></button>

    <div class="sheet-content sheet-content-bottom bg-primary/10">
      <button class="sheet-handle" popovertarget="sheet-1" popovertargetaction="toggle"></button>

      <div class="overflow-auto p-4 text-base-content">
        <p class="text-2xl p-8">Content of sheet 1</p>
        <p class="text-2xl p-8">Content of sheet 2</p>
        <p class="text-2xl p-8">Content of sheet 3</p>
        <p class="text-2xl p-8">Content of sheet 4</p>
      </div>
    </div>
  </div>
</div>

```html
<!-- Open the modal using ID.showModal() method -->
<button class="$$btn" onclick="my_modal_1.showModal()">open modal</button>
<dialog id="my_modal_1" class="$$modal">
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
{/* Open the modal using document.getElementById('ID').showModal() method */}
<button className="$$btn" onClick={()=>document.getElementById('my_modal_1').showModal()}>open modal</button>
<dialog id="my_modal_1" className="$$modal">
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


### ~Dialog modal, closes when clicked outside
#### there is a second form with 'modal-backdrop' class and it covers the screen so we can close the modal when clicked outside

<button class="btn" onclick={() => my_modal_2.showModal()}>open modal</button>
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
<!-- Open the modal using ID.showModal() method -->
<button class="$$btn" onclick="my_modal_2.showModal()">open modal</button>
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
{/* Open the modal using document.getElementById('ID').showModal() method */}
<button className="$$btn" onClick={()=>document.getElementById('my_modal_2').showModal()}>open modal</button>
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
<button class="btn" onclick={() => my_modal_3.showModal()}>open modal</button>
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
<!-- You can open the modal using ID.showModal() method -->
<button class="$$btn" onclick="my_modal_3.showModal()">open modal</button>
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
{/* You can open the modal using document.getElementById('ID').showModal() method */}
<button className="$$btn" onClick={()=>document.getElementById('my_modal_3').showModal()}>open modal</button>
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

<button class="btn" onclick={() => my_modal_4.showModal()}>open modal</button>
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
<!-- You can open the modal using ID.showModal() method -->
<button class="$$btn" onclick="my_modal_4.showModal()">open modal</button>
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
{/* You can open the modal using document.getElementById('ID').showModal() method */}
<button className="$$btn" onClick={()=>document.getElementById('my_modal_4').showModal()}>open modal</button>
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

<button class="btn" onclick={() => my_modal_5.showModal()}>open modal</button>
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
<!-- Open the modal using ID.showModal() method -->
<button class="$$btn" onclick="my_modal_5.showModal()">open modal</button>
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
{/* Open the modal using document.getElementById('ID').showModal() method */}
<button className="$$btn" onClick={()=>document.getElementById('my_modal_5').showModal()}>open modal</button>
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


## Method 2. checkbox `legacy`
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


### Method 3. using anchor links `legacy`
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
