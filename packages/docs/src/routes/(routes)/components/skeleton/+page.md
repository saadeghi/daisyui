---
title: Skeleton
desc: Skeleton is a component that can be used to show a loading state of a component.
layout: components
classnames:
  component:
  - class: skeleton
    desc: A placeholder div with loading animation
---

<script>
  import Component from "$components/Component.svelte"
  import Translate from "$components/Translate.svelte"
</script>

### ~Skeleton
<div class="skeleton w-32 h-32"></div>

```html
<div class="$$skeleton h-32 w-32"></div>
```


### ~Skeleton - circle with content
<div class="flex flex-col gap-4 w-52">
  <div class="flex gap-4 items-center">
    <div class="skeleton w-16 h-16 rounded-full shrink-0"></div>
    <div class="flex flex-col gap-4">
      <div class="skeleton h-4 w-20"></div>
      <div class="skeleton h-4 w-28"></div>
    </div>
  </div>
  <div class="skeleton h-32 w-full"></div>
</div>

```html
<div class="flex w-52 flex-col gap-4">
  <div class="flex items-center gap-4">
    <div class="$$skeleton h-16 w-16 shrink-0 rounded-full"></div>
    <div class="flex flex-col gap-4">
      <div class="$$skeleton h-4 w-20"></div>
      <div class="$$skeleton h-4 w-28"></div>
    </div>
  </div>
  <div class="$$skeleton h-32 w-full"></div>
</div>
```


### ~Skeleton - rectangle with content
<div class="flex flex-col gap-4 w-52">
  <div class="skeleton h-32 w-full"></div>
  <div class="skeleton h-4 w-28"></div>
  <div class="skeleton h-4 w-full"></div>
  <div class="skeleton h-4 w-full"></div>
</div>

```html
<div class="flex w-52 flex-col gap-4">
  <div class="$$skeleton h-32 w-full"></div>
  <div class="$$skeleton h-4 w-28"></div>
  <div class="$$skeleton h-4 w-full"></div>
  <div class="$$skeleton h-4 w-full"></div>
</div>
```
