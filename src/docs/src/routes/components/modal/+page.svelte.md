---
title: Modal
desc: Modal is used to show a dialog or a box when you click a button.
published: true
---

<script>
  import Component from "@components/Component.svelte"
  import ClassTable from "@components/ClassTable.svelte"
  import { prefix } from '$lib/stores';
  import { replace } from '$lib/actions';
</script>

<ClassTable
data="{[
  { type:'component', class: 'modal', desc: 'Container element' },
  { type:'component', class: 'modal-box', desc: 'The content of modal' },
  { type:'component', class: 'modal-action', desc: 'Container for modal action buttons' },
  { type:'component', class: 'modal-backdrop', desc: 'The backdrop that covers the back of modal so we can close the modal by clicking outside' },
  { type:'component', class: 'modal-toggle', desc: 'For hidden checkbox that controls modal' },
  { type:'modifier', class: 'modal-open', desc: 'Add/remove this class to open/close the modal using JS' },
  { type:'responsive', class: 'modal-top', desc: 'Moves the modal to top' },
  { type:'responsive', class: 'modal-bottom', desc: 'Moves the modal to bottom' },
  { type:'responsive', class: 'modal-middle', desc: 'Moves the modal to middle (default)' },
]}"
/>

<div class="alert text-sm">
  <div>
    <span class="font-bold">There are 3 ways to use a modal:</span>
    <ol>
      <li>Using <code>&lt;dialog&gt;</code> element: It needs JS to open but it has better accessibility and we can close it using <span class="kbd kbd-xs">Esc</span> key</li>
      <li>Using a hidden <code>&lt;input type="checkbox"&gt;</code> and <code>&lt;label&gt;</code> to check/uncheck the checkbox and open/close the modal</li>
      <li>Using <code>&lt;a&gt;</code> anchor links: A link adds a parameter to the URL and you only see the modal when the URL has that parameter</li>
    </ol>
  </div>
</div>

<div class="alert text-sm mt-4">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-current flex-shrink-0 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
  <div>Make sure you're using unique IDs for each modal</div>
</div>

### Method 1: using dialog element <span class="badge badge-success">recommended</span>

<Component title="Dialog modal" desc="opens on click using ID.showModal() method. can be closed using ID.close() method">
<button class="btn" onclick="my_modal_1.showModal()">open modal</button>
<dialog id="my_modal_1" class="modal">
  <form method="dialog" class="modal-box">
    <h3 class="font-bold text-lg">Hello!</h3>
    <p class="py-4">Press ESC key or click the button below to close</p>
    <div class="modal-action">
      <!-- if there is a button in form, it will close the modal -->
      <button class="btn">Close</button>
    </div>
  </form>
</dialog>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<!-- Open the modal using ID.showModal() method -->
<button class="$$btn" onclick="my_modal_1.showModal()">open modal</button>
<dialog id="my_modal_1" class="$$modal">
  <form method="dialog" class="$$modal-box">
    <h3 class="font-bold text-lg">Hello!</h3>
    <p class="py-4">Press ESC key or click the button below to close</p>
    <div class="$$modal-action">
      <!-- if there is a button in form, it will close the modal -->
      <button class="$$btn">Close</button>
    </div>
  </form>
</dialog>`
}</pre>
<pre slot="jsx" use:replace={{ to: $prefix }}>{
`{/* Open the modal using ID.showModal() method */}
<button className="$$btn" onClick={()=>window.my_modal_1.showModal()}>open modal</button>
<dialog id="my_modal_1" className="$$modal">
  <form method="dialog" className="$$modal-box">
    <h3 className="font-bold text-lg">Hello!</h3>
    <p className="py-4">Press ESC key or click the button below to close</p>
    <div className="$$modal-action">
      {/* if there is a button in form, it will close the modal */}
      <button className="$$btn">Close</button>
    </div>
  </form>
</dialog>`
}</pre>
</Component>

<Component title="Dialog modal, closes when clicked outside" desc="there a second form with 'modal-backdrop' class and it covers the screen so we can close the modal when clicked outside">
<button class="btn" onclick="my_modal_2.showModal()">open modal</button>
<dialog id="my_modal_2" class="modal">
  <form method="dialog" class="modal-box">
    <h3 class="font-bold text-lg">Hello!</h3>
    <p class="py-4">Press ESC key or click outside to close</p>
  </form>
  <form method="dialog" class="modal-backdrop">
    <button>close</button>
  </form>
</dialog>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<!-- Open the modal using ID.showModal() method -->
<button class="$$btn" onclick="my_modal_2.showModal()">open modal</button>
<dialog id="my_modal_2" class="$$modal">
  <form method="dialog" class="$$modal-box">
    <h3 class="font-bold text-lg">Hello!</h3>
    <p class="py-4">Press ESC key or click outside to close</p>
  </form>
  <form method="dialog" class="$$modal-backdrop">
    <button>close</button>
  </form>
</dialog>`
}</pre>
<pre slot="jsx" use:replace={{ to: $prefix }}>{
`{/* Open the modal using ID.showModal() method */}
<button className="$$btn" onClick={()=>window.my_modal_2.showModal()}>open modal</button>
<dialog id="my_modal_2" className="$$modal">
  <form method="dialog" className="$$modal-box">
    <h3 className="font-bold text-lg">Hello!</h3>
    <p className="py-4">Press ESC key or click outside to close</p>
  </form>
  <form method="dialog" className="$$modal-backdrop">
    <button>close</button>
  </form>
</dialog>`
}</pre>
</Component>

<Component title="Dialog modal with a close button at corner">
<button class="btn" onclick="my_modal_3.showModal()">open modal</button>
<dialog id="my_modal_3" class="modal">
  <form method="dialog" class="modal-box">
    <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    <h3 class="font-bold text-lg">Hello!</h3>
    <p class="py-4">Press ESC key or click on ✕ button to close</p>
  </form>
</dialog>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<!-- You can open the modal using ID.showModal() method -->
<button class="$$btn" onclick="my_modal_3.showModal()">open modal</button>
<dialog id="my_modal_3" class="$$modal">
  <form method="dialog" class="$$modal-box">
    <button class="$$btn $$btn-sm $$btn-circle $$btn-ghost absolute right-2 top-2">✕</button>
    <h3 class="font-bold text-lg">Hello!</h3>
    <p class="py-4">Press ESC key or click on ✕ button to close</p>
  </form>
</dialog>`
}</pre>
<pre slot="jsx" use:replace={{ to: $prefix }}>{
`{/* You can open the modal using ID.showModal() method */}
<button className="$$btn" onClick={()=>window.my_modal_3.showModal()}>open modal</button>
<dialog id="my_modal_3" className="$$modal">
  <form method="dialog" className="$$modal-box">
    <button className="$$btn $$btn-sm $$btn-circle $$btn-ghost absolute right-2 top-2">✕</button>
    <h3 className="font-bold text-lg">Hello!</h3>
    <p className="py-4">Press ESC key or click on ✕ button to close</p>
  </form>
</dialog>`
}</pre>
</Component>

<Component title="Dialog modal with custom width" desc="You can use any w-* and max-w-* utility class to customize the width">
<button class="btn" onclick="my_modal_4.showModal()">open modal</button>
<dialog id="my_modal_4" class="modal">
  <form method="dialog" class="modal-box w-11/12 max-w-5xl">
    <h3 class="font-bold text-lg">Hello!</h3>
    <p class="py-4">Click the button below to close</p>
    <div class="modal-action">
      <!-- if there is a button, it will close the modal -->
      <button class="btn">Close</button>
    </div>
  </form>
</dialog>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<!-- You can open the modal using ID.showModal() method -->
<button class="$$btn" onclick="my_modal_4.showModal()">open modal</button>
<dialog id="my_modal_4" class="$$modal">
  <form method="dialog" class="$$modal-box w-11/12 max-w-5xl">
    <h3 class="font-bold text-lg">Hello!</h3>
    <p class="py-4">Click the button below to close</p>
    <div class="$$modal-action">
      <!-- if there is a button, it will close the modal -->
      <button class="$$btn">Close</button>
    </div>
  </form>
</dialog>`
}</pre>
<pre slot="jsx" use:replace={{ to: $prefix }}>{
`{/* You can open the modal using ID.showModal() method */}
<button className="$$btn" onClick={()=>window.my_modal_4.showModal()}>open modal</button>
<dialog id="my_modal_4" className="$$modal">
  <form method="dialog" className="$$modal-box w-11/12 max-w-5xl">
    <h3 className="font-bold text-lg">Hello!</h3>
    <p className="py-4">Click the button below to close</p>
    <div className="$$modal-action">
      {/* if there is a button, it will close the modal */}
      <button className="$$btn">Close</button>
    </div>
  </form>
</dialog>`
}</pre>
</Component>

<Component title="Responsive" desc="Modal goes bottom on mobile screen and goes middle on desktop">
<button class="btn" onclick="my_modal_5.showModal()">open modal</button>
<dialog id="my_modal_5" class="modal modal-bottom sm:modal-middle">
  <form method="dialog" class="modal-box">
    <h3 class="font-bold text-lg">Hello!</h3>
    <p class="py-4">Press ESC key or click the button below to close</p>
    <div class="modal-action">
      <!-- if there is a button in form, it will close the modal -->
      <button class="btn">Close</button>
    </div>
  </form>
</dialog>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<!-- Open the modal using ID.showModal() method -->
<button class="$$btn" onclick="my_modal_5.showModal()">open modal</button>
<dialog id="my_modal_5" class="$$modal $$modal-bottom sm:$$modal-middle">
  <form method="dialog" class="$$modal-box">
    <h3 class="font-bold text-lg">Hello!</h3>
    <p class="py-4">Press ESC key or click the button below to close</p>
    <div class="$$modal-action">
      <!-- if there is a button in form, it will close the modal -->
      <button class="$$btn">Close</button>
    </div>
  </form>
</dialog>`
}</pre>
<pre slot="jsx" use:replace={{ to: $prefix }}>{
`{/* Open the modal using ID.showModal() method */}
<button className="$$btn" onClick={()=>window.my_modal_5.showModal()}>open modal</button>
<dialog id="my_modal_5" className="$$modal modal-bottom sm:$$modal-middle">
  <form method="dialog" className="$$modal-box">
    <h3 className="font-bold text-lg">Hello!</h3>
    <p className="py-4">Press ESC key or click the button below to close</p>
    <div className="$$modal-action">
      {/* if there is a button in form, it will close the modal */}
      <button className="$$btn">Close</button>
    </div>
  </form>
</dialog>`
}</pre>
</Component>

### Method 2: using a hidden checkbox <span class="badge badge-warning">legacy</span>

<Component title="Modal using label + hidden checkbox">
<label for="my_modal_6" class="btn">open modal</label>

<pre slot="html" use:replace={{ to: $prefix }}>{
`<!-- The button to open modal -->
<label for="my_modal_6" class="$$btn">open modal</label>

<!-- Put this part before </body> tag -->
<input type="checkbox" id="my_modal_6" class="$$modal-toggle" />
<div class="$$modal">
  <div class="$$modal-box">
    <h3 class="font-bold text-lg">Hello!</h3>
    <p class="py-4">This modal works with a hidden checkbox!</p>
    <div class="$$modal-action">
      <label for="my_modal_6" class="$$btn">Close!</label>
    </div>
  </div>
</div>`
}</pre>
</Component>

<Component title="Modal that closes when clicked outside" desc="Modal works with a hidden checkbox and labels can toggle the checkbox so we can use another label tag with 'modal-backdrop' class that covers the screen so we can close the modal when clicked outside">
<label for="my_modal_7" class="btn">open modal</label>

<pre slot="html" use:replace={{ to: $prefix }}>{
`<!-- The button to open modal -->
<label for="my_modal_7" class="$$btn">open modal</label>

<!-- Put this part before </body> tag -->
<input type="checkbox" id="my_modal_7" class="$$modal-toggle" />
<div class="$$modal">
  <div class="$$modal-box">
    <h3 class="text-lg font-bold">Hello!</h3>
    <p class="py-4">This modal works with a hidden checkbox!</p>
  </div>
  <label class="$$modal-backdrop" for="my_modal_7">Close</label>
</div>`
}</pre>
</Component>

### Method 3: using anchor links <span class="badge badge-warning">legacy</span>

<Component title="Modal using anchor link" desc="Anchor links might not work well on some SPA frameworks so if there are problems, use the first example">
<a href="#my_modal_8" class="btn" rel="external">open modal</a>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<!-- The button to open modal -->
<a href="#my_modal_8" class="$$btn">open modal</a>

<!-- Put this part before </body> tag -->
<div class="$$modal" id="my_modal_8">
  <div class="$$modal-box">
    <h3 class="font-bold text-lg">Hello!</h3>
    <p class="py-4">This modal works with anchor links</p>
    <div class="$$modal-action">
     <a href="#" class="$$btn">Yay!</a>
    </div>
  </div>
</div>`
}</pre>
</Component>
