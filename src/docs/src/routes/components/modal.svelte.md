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
  { type:'component', class: 'modal-action', desc: 'Container for modal buttons' },
  { type:'component', class: 'modal-toggle', desc: 'For checkbox that controls modal' },
  { type:'component', class: 'modal-button', desc: 'For <label> that checks the checkbox to opens/closes modal' },
  { type:'modifier', class: 'modal-open', desc: 'Add/remove this class to open/close the modal using JS' },
]}"
/>

<Component title="Modal using label + hidden checkbox" desc='Make sure each modal you use, has a unique ID. In this example, ID is "my-modal".'>
<label for="my-modal" class="btn modal-button">open modal</label>

<pre slot="html" use:replace={{ to: $prefix }}>{
`<!-- The button to open modal -->
<label for="my-modal" class="$$btn $$modal-button">open modal</label>

<!-- Put this part before </body> tag -->
<input type="checkbox" id="my-modal" class="$$modal-toggle">
<div class="$$modal">
  <div class="$$modal-box">
    <h3 class="font-bold text-lg">Congratulations random Interner user!</h3>
    <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
    <div class="$$modal-action">
      <label for="my-modal" class="$$btn">Yay!</label>
    </div>
  </div>
</div>`
}</pre>
</Component>

<Component title="Modal using anchor link" desc="Anchor links might not work well on some SPA frameworks so if there are problems, use the first example">
<a href="#my-modal-2" class="btn" rel="external">open modal</a>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<!-- The button to open modal -->
<a href="#my-modal-2" class="$$btn">open modal</a>

<!-- Put this part before </body> tag -->
<div class="$$modal" id="my-modal-2">
  <div class="$$modal-box">
    <h3 class="font-bold text-lg">Congratulations random Interner user!</h3>
    <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
    <div class="$$modal-action">
     <a href="#" class="$$btn">Yay!</a>
    </div>
  </div>
</div>`
}</pre>
</Component>

<Component title="Modal using with a close button at corner">
<label for="my-modal-3" class="btn modal-button">open modal</label>

<pre slot="html" use:replace={{ to: $prefix }}>{
`<!-- The button to open modal -->
<label for="my-modal-3" class="$$btn $$modal-button">open modal</label>

<!-- Put this part before </body> tag -->
<input type="checkbox" id="my-modal-3" class="$$modal-toggle">
<div class="$$modal">
  <div class="$$modal-box relative">
    <label for="my-modal-3" class="$$btn $$btn-sm $$btn-circle absolute right-2 top-2">✕</label>
    <h3 class="text-lg font-bold">Congratulations random Interner user!</h3>
    <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
  </div>
</div>`
}</pre>
</Component>

<Component title="Modal that closes when clicked outside" desc="Modal works with a hidden checkbox and labels can toggle the checkbox so we can use a label tag for the whole modal and use another label for modal-box to prevent closing when modal-box is clicked">
<label for="my-modal-4" class="btn modal-button">open modal</label>

<pre slot="html" use:replace={{ to: $prefix }}>{
`<!-- The button to open modal -->
<label for="my-modal-4" class="$$btn $$modal-button">open modal</label>

<!-- Put this part before </body> tag -->
<input type="checkbox" id="my-modal-4" class="$$modal-toggle">
<label for="my-modal-4" class="$$modal cursor-pointer">
  <label class="$$modal-box relative" for="">
    <h3 class="text-lg font-bold">Congratulations random Interner user!</h3>
    <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
  </label>
</label>`
}</pre>
</Component>
