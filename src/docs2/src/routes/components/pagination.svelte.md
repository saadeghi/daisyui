---
title: Pagination
desc: Pagination Description
published: true
---

<script>
  import Component from "@components/Component.svelte"
</script>

<Component title="Pagination with an active button">
<div class="btn-group">
  <button class="btn">1</button>
  <button class="btn btn-active">2</button>
  <button class="btn">3</button>
  <button class="btn">4</button>
</div>
<pre slot="html">{
`<div class="btn-group">
  <button class="btn">1</button>
  <button class="btn btn-active">2</button>
  <button class="btn">3</button>
  <button class="btn">4</button>
</div>`
}</pre>
</Component>

<Component title="Sizes">
<div class="flex flex-col gap-2 items-center">
  <div class="btn-group">
    <button class="btn btn-xs">1</button>
    <button class="btn btn-xs btn-active">2</button>
    <button class="btn btn-xs">3</button>
    <button class="btn btn-xs">4</button>
  </div>
  <div class="btn-group">
    <button class="btn btn-sm">1</button>
    <button class="btn btn-sm btn-active">2</button>
    <button class="btn btn-sm">3</button>
    <button class="btn btn-sm">4</button>
  </div>
  <div class="btn-group">
    <button class="btn btn-md">1</button>
    <button class="btn btn-md btn-active">2</button>
    <button class="btn btn-md">3</button>
    <button class="btn btn-md">4</button>
  </div>
  <div class="btn-group">
    <button class="btn btn-lg">1</button>
    <button class="btn btn-lg btn-active">2</button>
    <button class="btn btn-lg">3</button>
    <button class="btn btn-lg">4</button>
  </div>
</div>
<pre slot="html">{
`<div class="btn-group">
  <button class="btn btn-xs">1</button>
  <button class="btn btn-xs btn-active">2</button>
  <button class="btn btn-xs">3</button>
  <button class="btn btn-xs">4</button>
</div>
<div class="btn-group">
  <button class="btn btn-sm">1</button>
  <button class="btn btn-sm btn-active">2</button>
  <button class="btn btn-sm">3</button>
  <button class="btn btn-sm">4</button>
</div>
<div class="btn-group">
  <button class="btn btn-md">1</button>
  <button class="btn btn-md btn-active">2</button>
  <button class="btn btn-md">3</button>
  <button class="btn btn-md">4</button>
</div>
<div class="btn-group">
  <button class="btn btn-lg">1</button>
  <button class="btn btn-lg btn-active">2</button>
  <button class="btn btn-lg">3</button>
  <button class="btn btn-lg">4</button>
</div>`
}</pre>
</Component>

<Component title="With a disabled button">
<div class="btn-group">
  <button class="btn">1</button>
  <button class="btn">2</button>
  <button class="btn btn-disabled">...</button>
  <button class="btn">99</button>
  <button class="btn">100</button>
</div>
<pre slot="html">{
`<div class="btn-group">
  <button class="btn">1</button>
  <button class="btn">2</button>
  <button class="btn btn-disabled">...</button>
  <button class="btn">99</button>
  <button class="btn">100</button>
</div>`
}</pre>
</Component>

<Component title="Extra small buttons">
<div class="btn-group">
  <button class="btn">«</button>
  <button class="btn">Page 22</button>
  <button class="btn">»</button>
</div>
<pre slot="html">{
`<div class="btn-group">
  <button class="btn">«</button>
  <button class="btn">Page 22</button>
  <button class="btn">»</button>
</div>`
}</pre>
</Component>

<Component title="Nex/Prev outline buttons with equal width">
<div class="btn-group grid grid-cols-2">
  <button class="btn btn-outline">Previous page</button>
  <button class="btn btn-outline">Next</button>
</div>
<pre slot="html">{
`<div class="btn-group grid grid-cols-2">
  <button class="btn btn-outline">Previous page</button>
  <button class="btn btn-outline">Next</button>
</div>`
}</pre>
</Component>
