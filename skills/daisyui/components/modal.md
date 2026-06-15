### modal
Modal is used to show a dialog or a box when you click a button

[modal docs](https://daisyui.com/components/modal/)

#### Class names
- component: `modal`
- part: `modal-box`, `modal-action`, `modal-backdrop`, `modal-toggle`
- modifier: `modal-open`
- placement: `modal-top`, `modal-middle`, `modal-bottom`, `modal-start`, `modal-end`

#### Syntax
Using HTML dialog element
```html
<button onclick="my_modal.showModal()">Open modal</button>
<dialog id="my_modal" class="modal">
  <div class="modal-box">{CONTENT}</div>
  <form method="dialog" class="modal-backdrop"><button>close</button></form>
</dialog>
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
- Add `tabindex="0"` to make modal focusable
- Use unique IDs for each modal
- For HTML dialog element modals, add `<form method="dialog">` for closing the modal with submit
