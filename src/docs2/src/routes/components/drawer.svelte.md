---
title: Drawer
desc: Drawer Description
published: true
---

<script>
  import Component from "@components/Component.svelte"
</script>

<Component title="Drawer">
<div class="drawer w-full rounded">
  <input id="my-drawer" type="checkbox" class="drawer-toggle">
  <div class="flex flex-col items-center justify-center drawer-content">
    <label for="my-drawer" class="btn btn-primary drawer-button">Open drawer</label>
  </div> 
  <div class="drawer-side">
    <label for="my-drawer" class="drawer-overlay"></label>
    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
      <li><a>Sidebar Item 1</a></li>
      <li><a>Sidebar Item 2</a></li>
    </ul>
  </div>
</div>
<pre slot="html">{
`<div class="h-screen drawer w-full rounded">
  <input id="my-drawer" type="checkbox" class="drawer-toggle">
  <div class="drawer-content">
    <!-- Page content here -->
    <label for="my-drawer" class="btn btn-primary drawer-button">Open drawer</label>

  </div> 
  <div class="drawer-side">
    <label for="my-drawer" class="drawer-overlay"></label>
    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
      <!-- Sidebar content here -->
      <li><a>Sidebar Item 1</a></li>
      <li><a>Sidebar Item 2</a></li>
      
    </ul>
  </div>
</div>`
}</pre>
</Component>

<Component title="Drawer for mobile + fixed sidebar for desktop" desc="Drawer is always open on desktop size. Drawer can be toggled on mobile size. Resize the browser to see toggle button on mobile size">
<div class="drawer drawer-mobile w-full">
  <input id="my-drawer-2" type="checkbox" class="drawer-toggle">
  <div class="flex flex-col items-center justify-center drawer-content">
    <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>
  </div> 
  <div class="drawer-side">
    <label for="my-drawer-2" class="drawer-overlay"></label>
    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
      <li><a>Sidebar Item 1</a></li>
      <li><a>Sidebar Item 2</a></li>
    </ul>
  </div>
</div>
<pre slot="html">{
`<div class="h-screen drawer drawer-mobile w-full">
  <input id="my-drawer-2" type="checkbox" class="drawer-toggle">
  <div class="flex flex-col items-center justify-center drawer-content">
    <!-- Page content here -->
    <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>

  </div> 
  <div class="drawer-side">
    <label for="my-drawer-2" class="drawer-overlay"></label> 
    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
      <!-- Sidebar content here -->
      <li><a>Sidebar Item 1</a></li>
      <li><a>Sidebar Item 2</a></li>
    </ul>

  </div>
</div>`
}</pre>
</Component>

<Component title="Navbar menu for desktop + sidebar drawer for mobile" desc="Change screen size to show/hide menu">
<div class="drawer w-full rounded">
  <input id="my-drawer-3" type="checkbox" class="drawer-toggle"> 
  <div class="flex flex-col drawer-content">
    <div class="w-full navbar bg-base-300">
      <div class="flex-none lg:hidden">
        <label for="my-drawer-3" class="btn btn-square btn-ghost">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </label>
      </div> 
      <div class="flex-1 px-2 mx-2">Navbar Title</div>
      <div class="flex-none hidden lg:block">
        <ul class="menu horizontal">
          <li><a>Navbar Item 1</a></li>
          <li><a>Navbar Item 2</a></li>
        </ul>
      </div>
    </div>
    <div class="flex justify-center items-center flex-grow">Content</div>
  </div> 
  <div class="drawer-side">
    <label for="my-drawer-3" class="drawer-overlay"></label> 
    <ul class="p-4 overflow-y-auto menu w-80 bg-base-100">
      <li><a>Sidebar Item 1</a></li>
      <li><a>Sidebar Item 2</a></li>
    </ul>
  </div>
</div>
<pre slot="html">{
`<div class="h-screen drawer w-full">
  <input id="my-drawer-3" type="checkbox" class="drawer-toggle"> 
  <div class="flex flex-col drawer-content">
    <!-- Navbar -->
    <div class="w-full navbar bg-base-300">
      <div class="flex-none lg:hidden">
        <label for="my-drawer-3" class="btn btn-square btn-ghost">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </label>
      </div> 
      <div class="flex-1 px-2 mx-2">Navbar Title</div>
      <div class="flex-none hidden lg:block">
        <ul class="menu horizontal">
          <!-- Navbar menu content here -->
          <li><a>Navbar Item 1</a></li>
          <li><a>Navbar Item 2</a></li>
        </ul>
      </div>
    </div>
    <!-- Page content here -->
    Content
  </div> 
  <div class="drawer-side">
    <label for="my-drawer-3" class="drawer-overlay"></label> 
    <ul class="p-4 overflow-y-auto menu w-80 bg-base-100">
      <!-- Sidebar content here -->
      <li><a>Sidebar Item 1</a></li>
      <li><a>Sidebar Item 2</a></li>

    </ul>

  </div>
</div>`
}</pre>
</Component>

<Component title="Drawer that opens from right side of page">
<div class="drawer drawer-end w-full rounded">
  <input id="my-drawer-4" type="checkbox" class="drawer-toggle">
  <div class="flex flex-col items-center justify-center drawer-content">
    <label for="my-drawer-4" class="btn btn-primary drawer-button">Open drawer</label>
  </div> 
  <div class="drawer-side">
    <label for="my-drawer-4" class="drawer-overlay"></label>
    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
      <li><a>Sidebar Item 1</a></li>
      <li><a>Sidebar Item 2</a></li>
    </ul>
  </div>
</div>
<pre slot="html">{
`<div class="h-screen drawer w-full rounded">
  <input id="my-drawer-4" type="checkbox" class="drawer-toggle">
  <div class="drawer-content">
    <!-- Page content here -->
    <label for="my-drawer-4" class="btn btn-primary drawer-button">Open drawer</label>

  </div> 
  <div class="drawer-side">
    <label for="my-drawer-4" class="drawer-overlay"></label>
    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
      <!-- Sidebar content here -->
      <li><a>Sidebar Item 1</a></li>
      <li><a>Sidebar Item 2</a></li>
      
    </ul>
  </div>
</div>`
}</pre>
</Component>
