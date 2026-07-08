### modal
Modal is used to show a dialog or a box when you click a button

[modal docs](https://daisyui.com/components/modal/)

#### Class names
- component: `modal`
- part: `modal-box`, `modal-action`, `modal-backdrop`, `modal-toggle`
- modifier: `modal-open`
- placement: `modal-top`, `modal-middle`, `modal-bottom`, `modal-start`, `modal-end`

#### Syntax
Using HTML dialog element (recommended)
```html
<button onclick="my_modal.showModal()">Open modal</button>
<dialog id="my_modal" class="modal">
  <div class="modal-box">{CONTENT}</div>
  <form method="dialog" class="modal-backdrop"><button>close</button></form>
</dialog>
```
If we want it to close when clicking outside:
```html
<button class="btn" onclick="my_modal.showModal()">open modal</button>
<dialog id="my_modal" class="modal">
  <div class="modal-box">
    <h3 class="text-lg font-bold">Hello!</h3>
    <p class="py-4">Press ESC key or click outside to close</p>
  </div>
  <form method="dialog" class="modal-backdrop">
    <button>close</button>
  </form>
</dialog>
```


Using popover API (recommended only if we DON'T want to trap the keyboard navigation in the modal)
```html
<button popovertarget="my_modal" class="btn">Open modal</button>
<div class="modal" popover id="my_modal">
  <div class="modal-box">
    {CONTENT}
    <div class="modal-action">
      <button popovertarget="my_modal" popovertargetaction="hide">close</button>
    </div>
  </div>
</div>
```
If we want it to close when clicking outside:
```html
<button class="btn" popovertarget="my_modal">Open</button>

<div class="modal" id="my_modal" popover>
  <div class="modal-box">
    <h3 class="font-bold text-lg">Hello!</h3>
    <p class="py-4">Press ESC key or click the button below to close</p>
  </div>
  <div class="modal-backdrop">
    <button popovertarget="my_modal" popovertargetaction="hide">close</button>
  </div>
</div>
```

Using checkbox (legacy)
```html
<label for="my-modal" class="btn">Open modal</label>
<input type="checkbox" id="my-modal" class="modal-toggle" />
<div class="modal">
  <div class="modal-box">{CONTENT}</div>
  <label class="modal-backdrop" for="my-modal">Close</label>
</div>
```

Using anchor links (legacy)
```html
<a href="#my-modal" class="btn">Open modal</a>
<div class="modal" id="my-modal">
  <div class="modal-box">{CONTENT}</div>
</div>
```

#### Rules
- {MODIFIER} is optional and can have one of the modifier/placement class names
- Use unique IDs for each modal
- For HTML dialog element modals, add `<form method="dialog">` for closing the modal with submit
