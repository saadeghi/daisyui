---
alert: This page is not up to date. Some of the examples might not work as expected.
title: Calendar
desc: WIP
layout: components
---

<script>
  import Component from "$components/Component.svelte"
</script>

<svelte:head>
  <script type="module" src="https://unpkg.com/cally"></script>
</svelte:head>

## daisyUI supports 3 calendar libraries

1. [Cally web component](https://github.com/WickyNilliams/cally) - Works everywhere
2. [Pikaday datepicker](https://github.com/Pikaday/Pikaday) - Works everywhere
3. [React Day picker](https://github.com/gpbl/react-day-picker) - React only

### ~Cally Calendar

<button popovertarget="cally-popover1" class="input input-border" id="cally1" style="anchor-name:--cally1">
  Cally 
</button>
<div popover id="cally-popover1" class="dropdown" style="position-anchor:--cally1">
  <calendar-date class="cally" on:change={(e) => document.getElementById('cally1').innerText = e.target.value}>
    <calendar-month></calendar-month>
  </calendar-date>
</div>


```html
<button popovertarget="cally-popover1" class="$$input $$input-border" id="cally1" style="anchor-name:--cally1">
  Cally
</button>
<div popover id="cally-popover1" class="$$dropdown" style="position-anchor:--cally1">
  <calendar-date class="$$cally" onchange={document.getElementById('cally1').innerText = this.value}>
    <calendar-month></calendar-month>
  </calendar-date>
</div>
```
