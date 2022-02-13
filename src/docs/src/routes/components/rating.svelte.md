---
title: Rating
desc: Rating is a set of radio buttons that allow the user to rate something.
published: true
---

<script>
  import Component from "@components/Component.svelte"
  import ClassTable from "@components/ClassTable.svelte"
</script>

<ClassTable
data="{[
  { type:'component', class: 'rating', desc: 'Wrapper component for radio buttons' },
  { type:'responsive', class: 'rating-hidden', desc: 'hides the input. Useful to clear the the rating' },
  { type:'responsive', class: 'rating-lg', desc: 'Large rating' },
  { type:'responsive', class: 'rating-md', desc: 'Medium rating (default)' },
  { type:'responsive', class: 'rating-sm', desc: 'Small rating' },
  { type:'responsive', class: 'rating-xs', desc: 'Extra small rating' },
]}"
/>

<Component title="Rating">
<div class="rating">
  <input type="radio" name="rating-1" class="mask mask-star">
  <input type="radio" name="rating-1" checked="checked" class="mask mask-star">
  <input type="radio" name="rating-1" class="mask mask-star">
  <input type="radio" name="rating-1" class="mask mask-star">
  <input type="radio" name="rating-1" class="mask mask-star">
</div>
<pre slot="html">{
`<div class="rating">
  <input type="radio" name="rating-1" class="mask mask-star">
  <input type="radio" name="rating-1" checked="checked" class="mask mask-star">
  <input type="radio" name="rating-1" class="mask mask-star">
  <input type="radio" name="rating-1" class="mask mask-star">
  <input type="radio" name="rating-1" class="mask mask-star">
</div>`
}</pre>
</Component>

<Component title="mask-star-2 with warning color">
<div class="rating">
  <input type="radio" name="rating-2" class="mask mask-star-2 bg-warning">
  <input type="radio" name="rating-2" checked="checked" class="mask mask-star-2 bg-warning">
  <input type="radio" name="rating-2" class="mask mask-star-2 bg-warning">
  <input type="radio" name="rating-2" class="mask mask-star-2 bg-warning">
  <input type="radio" name="rating-2" class="mask mask-star-2 bg-warning">
</div>
<pre slot="html">{
`<div class="rating">
  <input type="radio" name="rating-2" class="mask mask-star-2 bg-warning">
  <input type="radio" name="rating-2" checked="checked" class="mask mask-star-2 bg-warning">
  <input type="radio" name="rating-2" class="mask mask-star-2 bg-warning">
  <input type="radio" name="rating-2" class="mask mask-star-2 bg-warning">
  <input type="radio" name="rating-2" class="mask mask-star-2 bg-warning">
</div>`
}</pre>
</Component>

<Component title="mask-heart with multiple colors">
<div class="gap-1 rating">
  <input type="radio" name="rating-3" class="mask mask-heart bg-red-400">
  <input type="radio" name="rating-3" checked="checked" class="mask mask-heart bg-orange-400">
  <input type="radio" name="rating-3" class="mask mask-heart bg-yellow-400">
  <input type="radio" name="rating-3" class="mask mask-heart bg-lime-400">
  <input type="radio" name="rating-3" class="mask mask-heart bg-green-400">
</div>
<pre slot="html">{
`<div class="gap-1 rating">
  <input type="radio" name="rating-3" class="mask mask-heart bg-red-400">
  <input type="radio" name="rating-3" checked="checked" class="mask mask-heart bg-orange-400">
  <input type="radio" name="rating-3" class="mask mask-heart bg-yellow-400">
  <input type="radio" name="rating-3" class="mask mask-heart bg-lime-400">
  <input type="radio" name="rating-3" class="mask mask-heart bg-green-400">
</div>`
}</pre>
</Component>

<Component title="mask-star-2 with green-500 color">
<div class="rating">
  <input type="radio" name="rating-4" class="bg-green-500 mask mask-star-2">
  <input type="radio" name="rating-4" checked="checked" class="bg-green-500 mask mask-star-2">
  <input type="radio" name="rating-4" class="bg-green-500 mask mask-star-2">
  <input type="radio" name="rating-4" class="bg-green-500 mask mask-star-2">
  <input type="radio" name="rating-4" class="bg-green-500 mask mask-star-2">
</div>
<pre slot="html">{
`<div class="rating">
  <input type="radio" name="rating-4" class="bg-green-500 mask mask-star-2">
  <input type="radio" name="rating-4" checked="checked" class="bg-green-500 mask mask-star-2">
  <input type="radio" name="rating-4" class="bg-green-500 mask mask-star-2">
  <input type="radio" name="rating-4" class="bg-green-500 mask mask-star-2">
  <input type="radio" name="rating-4" class="bg-green-500 mask mask-star-2">
</div>`
}</pre>
</Component>

<Component title="Sizes">
<div class="flex flex-col gap-2 items-center">
  <div class="rating rating-xs">
    <input type="radio" name="rating-5" class="mask mask-star-2 bg-warning">
    <input type="radio" name="rating-5" checked="checked" class="mask mask-star-2 bg-warning">
    <input type="radio" name="rating-5" class="mask mask-star-2 bg-warning">
    <input type="radio" name="rating-5" class="mask mask-star-2 bg-warning">
    <input type="radio" name="rating-5" class="mask mask-star-2 bg-warning">
  </div>
  <div class="rating rating-sm">
    <input type="radio" name="rating-6" class="mask mask-star-2 bg-warning">
    <input type="radio" name="rating-6" checked="checked" class="mask mask-star-2 bg-warning">
    <input type="radio" name="rating-6" class="mask mask-star-2 bg-warning">
    <input type="radio" name="rating-6" class="mask mask-star-2 bg-warning">
    <input type="radio" name="rating-6" class="mask mask-star-2 bg-warning">
  </div>
  <div class="rating rating-md">
    <input type="radio" name="rating-7" class="mask mask-star-2 bg-warning">
    <input type="radio" name="rating-7" checked="checked" class="mask mask-star-2 bg-warning">
    <input type="radio" name="rating-7" class="mask mask-star-2 bg-warning">
    <input type="radio" name="rating-7" class="mask mask-star-2 bg-warning">
    <input type="radio" name="rating-7" class="mask mask-star-2 bg-warning">
  </div>
  <div class="rating rating-lg">
    <input type="radio" name="rating-8" class="mask mask-star-2 bg-warning">
    <input type="radio" name="rating-8" checked="checked" class="mask mask-star-2 bg-warning">
    <input type="radio" name="rating-8" class="mask mask-star-2 bg-warning">
    <input type="radio" name="rating-8" class="mask mask-star-2 bg-warning">
    <input type="radio" name="rating-8" class="mask mask-star-2 bg-warning">
  </div>
</div>
<pre slot="html">{
`<!-- xs -->
<div class="rating rating-xs">
  <input type="radio" name="rating-5" class="mask mask-star-2 bg-warning">
  <input type="radio" name="rating-5" checked="checked" class="mask mask-star-2 bg-warning">
  <input type="radio" name="rating-5" class="mask mask-star-2 bg-warning">
  <input type="radio" name="rating-5" class="mask mask-star-2 bg-warning">
  <input type="radio" name="rating-5" class="mask mask-star-2 bg-warning">
</div>
<!-- sm -->
<div class="rating rating-sm">
  <input type="radio" name="rating-6" class="mask mask-star-2 bg-warning">
  <input type="radio" name="rating-6" checked="checked" class="mask mask-star-2 bg-warning">
  <input type="radio" name="rating-6" class="mask mask-star-2 bg-warning">
  <input type="radio" name="rating-6" class="mask mask-star-2 bg-warning">
  <input type="radio" name="rating-6" class="mask mask-star-2 bg-warning">
</div>
<!-- md -->
<div class="rating rating-md">
  <input type="radio" name="rating-7" class="mask mask-star-2 bg-warning">
  <input type="radio" name="rating-7" checked="checked" class="mask mask-star-2 bg-warning">
  <input type="radio" name="rating-7" class="mask mask-star-2 bg-warning">
  <input type="radio" name="rating-7" class="mask mask-star-2 bg-warning">
  <input type="radio" name="rating-7" class="mask mask-star-2 bg-warning">
</div>
<!-- lg -->
<div class="rating rating-lg">
  <input type="radio" name="rating-8" class="mask mask-star-2 bg-warning">
  <input type="radio" name="rating-8" checked="checked" class="mask mask-star-2 bg-warning">
  <input type="radio" name="rating-8" class="mask mask-star-2 bg-warning">
  <input type="radio" name="rating-8" class="mask mask-star-2 bg-warning">
  <input type="radio" name="rating-8" class="mask mask-star-2 bg-warning">
</div>`
}</pre>
</Component>

<Component title="with `rating-hidden`" desc="`rating-hidden` is a hidden radio at the start to allow uses remove their rating.">
<div class="rating rating-lg">
  <input type="radio" name="rating-9" class="rating-hidden">
  <input type="radio" name="rating-9" class="mask mask-star-2">
  <input type="radio" name="rating-9" checked="checked" class="mask mask-star-2">
  <input type="radio" name="rating-9" class="mask mask-star-2">
  <input type="radio" name="rating-9" class="mask mask-star-2">
  <input type="radio" name="rating-9" class="mask mask-star-2">
</div>
<pre slot="html">{
`<div class="rating rating-lg">
  <input type="radio" name="rating-9" class="rating-hidden">
  <input type="radio" name="rating-9" class="mask mask-star-2">
  <input type="radio" name="rating-9" checked="checked" class="mask mask-star-2">
  <input type="radio" name="rating-9" class="mask mask-star-2">
  <input type="radio" name="rating-9" class="mask mask-star-2">
  <input type="radio" name="rating-9" class="mask mask-star-2">
</div>`
}</pre>
</Component>

<Component title="half stars">
<div class="rating rating-lg rating-half">
  <input type="radio" name="rating-10" class="rating-hidden">
  <input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-1">
  <input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-2">
  <input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-1" checked="checked">
  <input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-2">
  <input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-1">
  <input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-2">
  <input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-1">
  <input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-2">
  <input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-1">
  <input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-2">
</div>
<pre slot="html">{
`<div class="rating rating-lg rating-half">
  <input type="radio" name="rating-10" class="rating-hidden">
  <input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-1">
  <input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-2">
  <input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-1" checked="checked">
  <input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-2">
  <input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-1">
  <input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-2">
  <input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-1">
  <input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-2">
  <input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-1">
  <input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-2">
</div>`
}</pre>
</Component>
