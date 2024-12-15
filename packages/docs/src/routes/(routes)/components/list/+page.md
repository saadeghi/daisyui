---
alert: This page is not up to date. Some of the examples might not work as expected.
title: List
desc: List is a vertical layout to display information in rows.
layout: components
classnames:
  component:
  - class: list
    desc: A vertical flex layout to include list rows
  - class: list-row
    desc: The itme inside list. A horzontal grid layout to include data
    
---

<script>
  import Component from "$components/Component.svelte"
</script>

### ~List
<div class="w-full max-w-lg">
  <div class="list bg-base-100 rounded-box shadow-md">
    <div class="list-row">
      <div><input type="checkbox" class="checkbox" checked/></div>
      <div class="flex gap-2">
        <img class="size-10 rounded-box" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"/>
        <div class="flex flex-col justify-center">
          <div class="text-sm">Dipa Lupa</div>
          <div class="text-xs uppercase font-semibold opacity-60">Remaining Season</div>
        </div>
      </div>
      <button class="btn btn-square btn-sm">
        <svg class="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g stroke-linejoin="round" stroke-linecap="round" stroke-width="2" fill="none" stroke="currentColor"><path d="M6 3L20 12 6 21 6 3z"></path></g></svg>
      </button>
      <button class="btn btn-square btn-sm">
        <svg class="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g stroke-linejoin="round" stroke-linecap="round" stroke-width="2" fill="none" stroke="currentColor"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></g></svg>
      </button>
    </div>
    <div class="list-row">
      <div><input type="checkbox" class="checkbox" checked/></div>
      <div class="flex gap-2">
        <img class="size-10 rounded-box" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"/>
        <div class="flex flex-col justify-center">
          <div class="text-sm">Ellie Beilish</div>
          <div class="text-xs uppercase font-semibold opacity-60">Birds of a fever</div>
        </div>
      </div>
      <button class="btn btn-square btn-sm">
        <svg class="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g stroke-linejoin="round" stroke-linecap="round" stroke-width="2" fill="none" stroke="currentColor"><path d="M6 3L20 12 6 21 6 3z"></path></g></svg>
      </button>
      <button class="btn btn-square btn-sm">
        <svg class="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g stroke-linejoin="round" stroke-linecap="round" stroke-width="2" fill="none" stroke="currentColor"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></g></svg>
      </button>
    </div>
    <div class="list-row">
      <div><input type="checkbox" class="checkbox" checked/></div>
      <div class="flex gap-2">
        <img class="size-10 rounded-box" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"/>
        <div class="flex flex-col justify-center">
          <div class="text-sm">Sabrina Gardener</div>
          <div class="text-xs uppercase font-semibold opacity-60">Cappuccino</div>
        </div>
      </div>
      <button class="btn btn-square btn-sm">
        <svg class="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g stroke-linejoin="round" stroke-linecap="round" stroke-width="2" fill="none" stroke="currentColor"><path d="M6 3L20 12 6 21 6 3z"></path></g></svg>
      </button>
      <button class="btn btn-square btn-sm">
        <svg class="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g stroke-linejoin="round" stroke-linecap="round" stroke-width="2" fill="none" stroke="currentColor"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></g></svg>
      </button>
    </div>
  </div>
</div>

```html
```
