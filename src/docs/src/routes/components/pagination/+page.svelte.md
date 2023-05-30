---
title: Pagination
desc: Pagination is a group of buttons that allow the user to navigate between a set of related content.
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
  { type:'component', class: 'join', desc: 'Groups buttons together' },
]}"
/>

<Component title="Pagination with an active button">
<div class="join">
  <button class="join-item btn">1</button>
  <button class="join-item btn btn-active">2</button>
  <button class="join-item btn">3</button>
  <button class="join-item btn">4</button>
</div>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<div class="$$join">
  <button class="$$join-item $$btn">1</button>
  <button class="$$join-item $$btn $$btn-active">2</button>
  <button class="$$join-item $$btn">3</button>
  <button class="$$join-item $$btn">4</button>
</div>`
}</pre>
</Component>

<Component title="Sizes">
<div class="flex flex-col gap-2 items-center">
  <div class="join">
    <button class="join-item btn btn-xs">1</button>
    <button class="join-item btn btn-xs btn-active">2</button>
    <button class="join-item btn btn-xs">3</button>
    <button class="join-item btn btn-xs">4</button>
  </div>
  <div class="join">
    <button class="join-item btn btn-sm">1</button>
    <button class="join-item btn btn-sm btn-active">2</button>
    <button class="join-item btn btn-sm">3</button>
    <button class="join-item btn btn-sm">4</button>
  </div>
  <div class="join">
    <button class="join-item btn btn-md">1</button>
    <button class="join-item btn btn-md btn-active">2</button>
    <button class="join-item btn btn-md">3</button>
    <button class="join-item btn btn-md">4</button>
  </div>
  <div class="join">
    <button class="join-item btn btn-lg">1</button>
    <button class="join-item btn btn-lg btn-active">2</button>
    <button class="join-item btn btn-lg">3</button>
    <button class="join-item btn btn-lg">4</button>
  </div>
</div>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<div class="$$join">
  <button class="$$join-item $$btn $$btn-xs">1</button>
  <button class="$$join-item $$btn $$btn-xs $$btn-active">2</button>
  <button class="$$join-item $$btn $$btn-xs">3</button>
  <button class="$$join-item $$btn $$btn-xs">4</button>
</div>
<div class="$$join">
  <button class="$$join-item $$btn $$btn-sm">1</button>
  <button class="$$join-item $$btn $$btn-sm $$btn-active">2</button>
  <button class="$$join-item $$btn $$btn-sm">3</button>
  <button class="$$join-item $$btn $$btn-sm">4</button>
</div>
<div class="$$join">
  <button class="$$join-item $$btn $$btn-md">1</button>
  <button class="$$join-item $$btn $$btn-md $$btn-active">2</button>
  <button class="$$join-item $$btn $$btn-md">3</button>
  <button class="$$join-item $$btn $$btn-md">4</button>
</div>
<div class="$$join">
  <button class="$$join-item $$btn $$btn-lg">1</button>
  <button class="$$join-item $$btn $$btn-lg $$btn-active">2</button>
  <button class="$$join-item $$btn $$btn-lg">3</button>
  <button class="$$join-item $$btn $$btn-lg">4</button>
</div>`
}</pre>
</Component>

<Component title="With a disabled button">
<div class="join">
  <button class="join-item btn">1</button>
  <button class="join-item btn">2</button>
  <button class="join-item btn btn-disabled">...</button>
  <button class="join-item btn">99</button>
  <button class="join-item btn">100</button>
</div>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<div class="$$join">
  <button class="$$join-item $$btn">1</button>
  <button class="$$join-item $$btn">2</button>
  <button class="$$join-item $$btn $$btn-disabled">...</button>
  <button class="$$join-item $$btn">99</button>
  <button class="$$join-item $$btn">100</button>
</div>`
}</pre>
</Component>

<Component title="Extra small buttons">
<div class="join">
  <button class="join-item btn">«</button>
  <button class="join-item btn">Page 22</button>
  <button class="join-item btn">»</button>
</div>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<div class="$$join">
  <button class="$$join-item $$btn">«</button>
  <button class="$$join-item $$btn">Page 22</button>
  <button class="$$join-item $$btn">»</button>
</div>`
}</pre>
</Component>

<Component title="Nex/Prev outline buttons with equal width">
<div class="join grid grid-cols-2">
  <button class="join-item btn btn-outline">Previous page</button>
  <button class="join-item btn btn-outline">Next</button>
</div>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<div class="$$join grid grid-cols-2">
  <button class="$$join-item $$btn $$btn-outline">Previous page</button>
  <button class="$$join-item $$btn $$btn-outline">Next</button>
</div>`
}</pre>
</Component>

<Component title="Using radio inputs">
<div class="join">
  <input class="join-item btn btn-square" type="radio" name="options" aria-label="1" checked />
  <input class="join-item btn btn-square" type="radio" name="options" aria-label="2" />
  <input class="join-item btn btn-square" type="radio" name="options" aria-label="3" />
  <input class="join-item btn btn-square" type="radio" name="options" aria-label="4" />
</div>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<div class="$$join">
  <input class="$$join-item $$btn $$btn-square" type="radio" name="options" aria-label="1" checked />
  <input class="$$join-item $$btn $$btn-square" type="radio" name="options" aria-label="2" />
  <input class="$$join-item $$btn $$btn-square" type="radio" name="options" aria-label="3" />
  <input class="$$join-item $$btn $$btn-square" type="radio" name="options" aria-label="4" />
</div>`
}</pre>
</Component>
