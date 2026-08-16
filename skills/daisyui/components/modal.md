### Modal
A modal shows a dialog or box when the user clicks a button.

[Modal documentation](https://daisyui.com/components/modal/)

#### Class names
- component: `modal`
- part: `modal-box`, `modal-action`, `modal-backdrop`, `modal-toggle`
- modifier: `modal-open`
- placement: `modal-top`, `modal-middle`, `modal-bottom`, `modal-start`, `modal-end`

#### Syntax
If possible, use the HTML `dialog` element:
```html
<button onclick="my_modal.showModal()">Open modal</button>
<dialog id="my_modal" class="modal">
  <div class="modal-box">{CONTENT}</div>
  <form method="dialog" class="modal-backdrop"><button>close</button></form>
</dialog>
```
To close the modal when the user clicks outside it:
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


If the modal must not keep keyboard navigation inside it, use the popover API:
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
To close the modal when the user clicks outside it:
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

Checkbox. This method is legacy:
```html
<label for="my-modal" class="btn">Open modal</label>
<input type="checkbox" id="my-modal" class="modal-toggle" />
<div class="modal">
  <div class="modal-box">{CONTENT}</div>
  <label class="modal-backdrop" for="my-modal">Close</label>
</div>
```

Anchor links. This method is legacy:
```html
<a href="#my-modal" class="btn">Open modal</a>
<div class="modal" id="my-modal">
  <div class="modal-box">{CONTENT}</div>
</div>
```

#### Rules
- `{MODIFIER}` is optional. It can include one modifier class name and one placement class name.
- Use a unique HTML ID for each modal.
- For an HTML `dialog` element, add `<form method="dialog">`. This lets the submit action close the modal.
