---
title: Rating
desc: Rating is a set of radio buttons that allow the user to rate something.
layout: components
classnames:
  component:
  - class: rating
    desc: For a div containing radio inputs
  modifier:
  - class: rating-half
    desc: To shows half of the shapes. Useful for half star ratings
  - class: rating-hidden
    desc: For the first radio to make it hidden so user can clear the rating
  size:
  - class: rating-xs
    desc: Extra small size
  - class: rating-sm
    desc: Small size
  - class: rating-md
    desc: Medium size (default)
  - class: rating-lg
    desc: Large size
  - class: rating-xl
    desc: Extra large size
---

<script>
  import Component from "$components/Component.svelte"
</script>

> :INFO:
>
> Items in each rating should have unique `name` attributes to avoid conflicts with other ratings on the same page.

### ~Rating
<div class="rating">
  <input type="radio" name="rating-1" class="mask mask-star" />
  <input type="radio" name="rating-1" class="mask mask-star" />
  <input type="radio" name="rating-1" class="mask mask-star" />
  <input type="radio" name="rating-1" class="mask mask-star" />
  <input type="radio" name="rating-1" class="mask mask-star" />
</div>

```html
<div class="$$rating">
  <input type="radio" name="rating-1" class="$$mask $$mask-star" />
  <input type="radio" name="rating-1" class="$$mask $$mask-star" checked="checked" />
  <input type="radio" name="rating-1" class="$$mask $$mask-star" />
  <input type="radio" name="rating-1" class="$$mask $$mask-star" />
  <input type="radio" name="rating-1" class="$$mask $$mask-star" />
</div>
```


### ~Read-only Rating
<div class="rating">
  <div class="mask mask-star"></div>
  <div class="mask mask-star"></div>
  <div class="mask mask-star" aria-checked="true"></div>
  <div class="mask mask-star"></div>
  <div class="mask mask-star"></div>
</div>

```html
<div class="$$rating">
  <input type="radio" class="$$mask $$mask-star" />
  <input type="radio" class="$$mask $$mask-star" aria-checked="true" />
  <input type="radio" class="$$mask $$mask-star" />
  <input type="radio" class="$$mask $$mask-star" />
  <input type="radio" class="$$mask $$mask-star" />
</div>
```



### ~mask-star-2 with warning color
<div class="rating">
  <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked="checked" />
  <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
</div>

```html
<div class="$$rating">
  <input type="radio" name="rating-2" class="$$mask $$mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" class="$$mask $$mask-star-2 bg-orange-400" checked="checked" />
  <input type="radio" name="rating-2" class="$$mask $$mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" class="$$mask $$mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" class="$$mask $$mask-star-2 bg-orange-400" />
</div>
```


### ~mask-heart with multiple colors
<div class="gap-1 rating">
  <input type="radio" name="rating-3" class="mask mask-heart bg-red-400" />
  <input type="radio" name="rating-3" class="mask mask-heart bg-orange-400" checked="checked" />
  <input type="radio" name="rating-3" class="mask mask-heart bg-yellow-400" />
  <input type="radio" name="rating-3" class="mask mask-heart bg-lime-400" />
  <input type="radio" name="rating-3" class="mask mask-heart bg-green-400" />
</div>

```html
<div class="$$rating gap-1">
  <input type="radio" name="rating-3" class="$$mask $$mask-heart bg-red-400" />
  <input type="radio" name="rating-3" class="$$mask $$mask-heart bg-orange-400" checked="checked" />
  <input type="radio" name="rating-3" class="$$mask $$mask-heart bg-yellow-400" />
  <input type="radio" name="rating-3" class="$$mask $$mask-heart bg-lime-400" />
  <input type="radio" name="rating-3" class="$$mask $$mask-heart bg-green-400" />
</div>
```


### ~mask-star-2 with green-500 color
<div class="rating">
  <input type="radio" name="rating-4" class="bg-green-500 mask mask-star-2" />
  <input type="radio" name="rating-4" class="bg-green-500 mask mask-star-2" checked="checked" />
  <input type="radio" name="rating-4" class="bg-green-500 mask mask-star-2" />
  <input type="radio" name="rating-4" class="bg-green-500 mask mask-star-2" />
  <input type="radio" name="rating-4" class="bg-green-500 mask mask-star-2" />
</div>

```html
<div class="$$rating">
  <input type="radio" name="rating-4" class="$$mask $$mask-star-2 bg-green-500" />
  <input type="radio" name="rating-4" class="$$mask $$mask-star-2 bg-green-500" checked="checked" />
  <input type="radio" name="rating-4" class="$$mask $$mask-star-2 bg-green-500" />
  <input type="radio" name="rating-4" class="$$mask $$mask-star-2 bg-green-500" />
  <input type="radio" name="rating-4" class="$$mask $$mask-star-2 bg-green-500" />
</div>
```


### ~Sizes
<div class="flex flex-col gap-2 items-center">
  <div class="rating rating-xs">
    <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400" />
    <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400" checked="checked" />
    <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400" />
    <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400" />
    <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400" />
  </div>
  <div class="rating rating-sm">
    <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" />
    <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" checked="checked" />
    <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" />
    <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" />
    <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" />
  </div>
  <div class="rating rating-md">
    <input type="radio" name="rating-7" class="mask mask-star-2 bg-orange-400" />
    <input type="radio" name="rating-7" class="mask mask-star-2 bg-orange-400" checked="checked" />
    <input type="radio" name="rating-7" class="mask mask-star-2 bg-orange-400" />
    <input type="radio" name="rating-7" class="mask mask-star-2 bg-orange-400" />
    <input type="radio" name="rating-7" class="mask mask-star-2 bg-orange-400" />
  </div>
  <div class="rating rating-lg">
    <input type="radio" name="rating-8" class="mask mask-star-2 bg-orange-400" />
    <input type="radio" name="rating-8" class="mask mask-star-2 bg-orange-400" checked="checked" />
    <input type="radio" name="rating-8" class="mask mask-star-2 bg-orange-400" />
    <input type="radio" name="rating-8" class="mask mask-star-2 bg-orange-400" />
    <input type="radio" name="rating-8" class="mask mask-star-2 bg-orange-400" />
  </div>
  <div class="rating rating-xl">
    <input type="radio" name="rating-9" class="mask mask-star-2 bg-orange-400" />
    <input type="radio" name="rating-9" class="mask mask-star-2 bg-orange-400" checked="checked" />
    <input type="radio" name="rating-9" class="mask mask-star-2 bg-orange-400" />
    <input type="radio" name="rating-9" class="mask mask-star-2 bg-orange-400" />
    <input type="radio" name="rating-9" class="mask mask-star-2 bg-orange-400" />
  </div>
</div>

```html
<!-- xs -->
<div class="$$rating $$rating-xs">
  <input type="radio" name="rating-5" class="$$mask $$mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-5" class="$$mask $$mask-star-2 bg-orange-400" checked="checked" />
  <input type="radio" name="rating-5" class="$$mask $$mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-5" class="$$mask $$mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-5" class="$$mask $$mask-star-2 bg-orange-400" />
</div>
<!-- sm -->
<div class="$$rating $$rating-sm">
  <input type="radio" name="rating-6" class="$$mask $$mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-6" class="$$mask $$mask-star-2 bg-orange-400" checked="checked" />
  <input type="radio" name="rating-6" class="$$mask $$mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-6" class="$$mask $$mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-6" class="$$mask $$mask-star-2 bg-orange-400" />
</div>
<!-- md -->
<div class="$$rating $$rating-md">
  <input type="radio" name="rating-7" class="$$mask $$mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-7" class="$$mask $$mask-star-2 bg-orange-400" checked="checked" />
  <input type="radio" name="rating-7" class="$$mask $$mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-7" class="$$mask $$mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-7" class="$$mask $$mask-star-2 bg-orange-400" />
</div>
<!-- lg -->
<div class="$$rating $$rating-lg">
  <input type="radio" name="rating-8" class="$$mask $$mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-8" class="$$mask $$mask-star-2 bg-orange-400" checked="checked" />
  <input type="radio" name="rating-8" class="$$mask $$mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-8" class="$$mask $$mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-8" class="$$mask $$mask-star-2 bg-orange-400" />
</div>
<!-- xl -->
<div class="$$rating $$rating-xl">
  <input type="radio" name="rating-9" class="$$mask $$mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-9" class="$$mask $$mask-star-2 bg-orange-400" checked="checked" />
  <input type="radio" name="rating-9" class="$$mask $$mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-9" class="$$mask $$mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-9" class="$$mask $$mask-star-2 bg-orange-400" />
</div>
```


### ~with `rating-hidden`
#### `rating-hidden` is a hidden radio at the start to allow uses remove their rating.

<div class="rating rating-lg">
  <input type="radio" name="rating-10" class="rating-hidden" />
  <input type="radio" name="rating-10" class="mask mask-star-2" />
  <input type="radio" name="rating-10" class="mask mask-star-2" checked="checked" />
  <input type="radio" name="rating-10" class="mask mask-star-2" />
  <input type="radio" name="rating-10" class="mask mask-star-2" />
  <input type="radio" name="rating-10" class="mask mask-star-2" />
</div>

```html
<div class="$$rating $$rating-lg">
  <input type="radio" name="rating-10" class="$$rating-hidden" />
  <input type="radio" name="rating-10" class="$$mask $$mask-star-2" />
  <input type="radio" name="rating-10" class="$$mask $$mask-star-2" checked="checked" />
  <input type="radio" name="rating-10" class="$$mask $$mask-star-2" />
  <input type="radio" name="rating-10" class="$$mask $$mask-star-2" />
  <input type="radio" name="rating-10" class="$$mask $$mask-star-2" />
</div>
```


### ~half stars
<div class="rating rating-lg rating-half">
  <input type="radio" name="rating-11" class="rating-hidden" />
  <input type="radio" name="rating-11" class="bg-green-500 mask mask-star-2 mask-half-1" />
  <input type="radio" name="rating-11" class="bg-green-500 mask mask-star-2 mask-half-2" />
  <input type="radio" name="rating-11" class="bg-green-500 mask mask-star-2 mask-half-1" checked="checked" />
  <input type="radio" name="rating-11" class="bg-green-500 mask mask-star-2 mask-half-2" />
  <input type="radio" name="rating-11" class="bg-green-500 mask mask-star-2 mask-half-1" />
  <input type="radio" name="rating-11" class="bg-green-500 mask mask-star-2 mask-half-2" />
  <input type="radio" name="rating-11" class="bg-green-500 mask mask-star-2 mask-half-1" />
  <input type="radio" name="rating-11" class="bg-green-500 mask mask-star-2 mask-half-2" />
  <input type="radio" name="rating-11" class="bg-green-500 mask mask-star-2 mask-half-1" />
  <input type="radio" name="rating-11" class="bg-green-500 mask mask-star-2 mask-half-2" />
</div>

```html
<div class="$$rating $$rating-lg $$rating-half">
  <input type="radio" name="rating-11" class="$$rating-hidden" />
  <input type="radio" name="rating-11" class="$$mask $$mask-star-2 $$mask-half-1 bg-green-500" />
  <input type="radio" name="rating-11" class="$$mask $$mask-star-2 $$mask-half-2 bg-green-500" />
  <input type="radio" name="rating-11" class="$$mask $$mask-star-2 $$mask-half-1 bg-green-500" checked="checked" />
  <input type="radio" name="rating-11" class="$$mask $$mask-star-2 $$mask-half-2 bg-green-500" />
  <input type="radio" name="rating-11" class="$$mask $$mask-star-2 $$mask-half-1 bg-green-500" />
  <input type="radio" name="rating-11" class="$$mask $$mask-star-2 $$mask-half-2 bg-green-500" />
  <input type="radio" name="rating-11" class="$$mask $$mask-star-2 $$mask-half-1 bg-green-500" />
  <input type="radio" name="rating-11" class="$$mask $$mask-star-2 $$mask-half-2 bg-green-500" />
  <input type="radio" name="rating-11" class="$$mask $$mask-star-2 $$mask-half-1 bg-green-500" />
  <input type="radio" name="rating-11" class="$$mask $$mask-star-2 $$mask-half-2 bg-green-500" />
</div>
```
