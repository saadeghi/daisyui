---
title: Drawer
desc: Drawer Description
published: true
---

<script>
  import Component from "@components/Component.svelte"
</script>

<Component title="Drawer">
<div class="bg-base-200 drawer w-full">
  <input id="my-drawer" type="checkbox" class="drawer-toggle">
  <div class="flex flex-col items-center justify-center drawer-content">
    <label for="my-drawer" class="btn btn-primary drawer-button">Open drawer</label>
  </div> 
  <div class="drawer-side">
    <label for="my-drawer" class="drawer-overlay"></label>
    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
      <li><a>Menu Item 1</a></li> 
      <li><a>Menu Item 2</a></li>
    </ul>
  </div>
</div>
<pre slot="html">{
`<div class="bg-base-200 drawer w-full">
  <input id="my-drawer" type="checkbox" class="drawer-toggle">
  <div class="drawer-content">
    <!-- Page content here -->
    <label for="my-drawer" class="btn btn-primary drawer-button">Open drawer</label>

  </div> 
  <div class="drawer-side">
    <label for="my-drawer" class="drawer-overlay"></label>
    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
      <!-- Sidebar content here -->
      <li><a>Menu Item 1</a></li> 
      <li><a>Menu Item 2</a></li>
      
    </ul>
  </div>
</div>`
}</pre>
</Component>

<Component title="Drawer mobile" desc="Drawer is always open on desktop size. Drawer can be toggled on mobile size. Resize the browser to see toggle button on mobile size">
<div class="bg-base-200 drawer drawer-mobile w-full">
  <input id="my-drawer-2" type="checkbox" class="drawer-toggle">
  <div class="flex flex-col items-center justify-center drawer-content">
    <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>
  </div> 
  <div class="drawer-side">
    <label for="my-drawer-2" class="drawer-overlay"></label>
    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
      <li><a>Menu Item 1</a></li> 
      <li><a>Menu Item 2</a></li>
    </ul>
  </div>
</div>
<pre slot="html">{
`<div class="bg-base-200 drawer drawer-mobile w-full">
  <input id="my-drawer-2" type="checkbox" class="drawer-toggle">
  <div class="flex flex-col items-center justify-center drawer-content">
    <!-- Page content here -->
    <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>

  </div> 
  <div class="drawer-side">
    <label for="my-drawer-2" class="drawer-overlay"></label> 
    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
      <!-- Sidebar content here -->
      <li><a>Menu Item 1</a></li> 
      <li><a>Menu Item 2</a></li>

    </ul>

  </div>
</div>`
}</pre>
</Component>
