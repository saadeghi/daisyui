---
title: Join
desc: Join is a container for grouping multiple items, it can be used to group buttons, inputs, or any other element. Join applies border radius to the first and last item. Join can be used to create a horizontal or vertical list of items.
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
  { type:'component', class: 'join', desc: 'Container for grouping multiple items' },
  { type:'component', class: 'join-item', desc: 'Item inside join. Can be a button, input, etc.' },
  { type:'responsive', class: 'join-vertical', desc: 'Show items vertically' },
  { type:'responsive', class: 'join-horizontal', desc: 'Show items horizontally' },
]}"
/>

<Component title="Join">
<div class="join">
  <button class="btn join-item">Button</button>
  <button class="btn join-item">Button</button>
  <button class="btn join-item">Button</button>
</div>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<div class="$$join">
  <button class="$$btn $$join-item">Button</button>
  <button class="$$btn $$join-item">Button</button>
  <button class="$$btn $$join-item">Button</button>
</div>`
}</pre>
</Component>

<Component title="Group items vertically">
<div class="join join-vertical">
  <button class="btn join-item">Button</button>
  <button class="btn join-item">Button</button>
  <button class="btn join-item">Button</button>
</div>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<div class="$$join $$join-vertical">
  <button class="$btn $$join-item">Button</button>
  <button class="$btn $$join-item">Button</button>
  <button class="$btn $$join-item">Button</button>
</div>`
}</pre>
</Component>

<Component title="Responsive: it's vertical on small screen and horizontal on large screen">
<div class="join join-vertical lg:join-horizontal">
  <button class="btn join-item">Button</button>
  <button class="btn join-item">Button</button>
  <button class="btn join-item">Button</button>
</div>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<div class="$$join $$join-vertical lg:$$join-horizontal">
  <button class="$$btn $$join-item">Button</button>
  <button class="$$btn $$join-item">Button</button>
  <button class="$$btn $$join-item">Button</button>
</div>`
}</pre>
</Component>

<Component title="With extra elements in the group" desc="Even if join-item is not a direct child of the group, it still gets the style">
<div class="join">
  <div>
    <div>
      <input class="input input-bordered join-item" placeholder="Search..."/>
    </div>
  </div>
  <select class="select select-bordered join-item">
    <option disabled selected>Category</option>
    <option>Sci-fi</option>
    <option>Drama</option>
    <option>Action</option>
  </select>
  <div class="indicator">
    <span class="indicator-item badge badge-secondary">new</span> 
    <button class="btn join-item">Search</button>
  </div>
</div>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<div class="$$join">
  <div>
    <div>
      <input class="$$input $$input-bordered $$join-item" placeholder="Search..."/>
    </div>
  </div>
  <select class="$$select $$select-bordered $$join-item">
    <option disabled selected>Category</option>
    <option>Sci-fi</option>
    <option>Drama</option>
    <option>Action</option>
  </select>
  <div class="$$indicator">
    <span class="$$indicator-item $$badge $$badge-secondary">new</span> 
    <button class="$$btn $$join-item">Search</button>
  </div>
</div>`
}</pre>
</Component>

<Component title="Custom border radius">
<div class="join">
  <input class="input input-bordered join-item" placeholder="Email"/>
  <button class="btn join-item rounded-r-full">Subscribe</button>
</div>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<div class="$$join">
  <input class="$$input $$input-bordered $$join-item" placeholder="Email"/>
  <button class="$$btn $$join-item rounded-r-full">Subscribe</button>
</div>`
}</pre>
</Component>

<Component title="Join radio inputs with btn style">
<div class="join">
  <input class="join-item btn" type="radio" name="options" aria-label="Radio 1" />
  <input class="join-item btn" type="radio" name="options" aria-label="Radio 2" />
  <input class="join-item btn" type="radio" name="options" aria-label="Radio 3" />
</div>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<div class="$$join">
  <input class="$$join-item $$btn" type="radio" name="options" aria-label="Radio 1" />
  <input class="$$join-item $$btn" type="radio" name="options" aria-label="Radio 2" />
  <input class="$$join-item $$btn" type="radio" name="options" aria-label="Radio 3" />
</div>`
}</pre>
</Component>
