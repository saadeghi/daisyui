---
title: Drawer
desc: Drawer is a grid layout that can show/hide a sidebar on the left or right side of the page.
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
  { type:'component', class: 'drawer', desc: 'Container element' },
  { type:'component', class: 'drawer-toggle', desc: 'For checkbox element that controls the drawer' },
  { type:'component', class: 'drawer-content', desc: 'The content container' },
  { type:'component', class: 'drawer-side', desc: 'The sidebar container' },
  { type:'component', class: 'drawer-overlay', desc: 'The label covers the content when drawer is open' },
  { type:'modifier', class: 'drawer-mobile', desc: 'Makes drawer to open/close on mobile but will be always visible on desktop' },
  { type:'modifier', class: 'drawer-end', desc: 'puts drawer to the right' },
]}"
/>

Drawer sidebar can be visible by default on large screens or it can be toggleable on both large and small screens.

Drawer tags structure:

```js
.drawer // The root container
  ├── .drawer-toggle // A hidden checkbox to toggle the visibility of the sidebar
  ├── .drawer-content // All your page content goes here
  │    ├── // navbar
  │    ├── // content
  │    └── // footer
  └── .drawer-side // Sidebar wrapper
       ├── .drawer-overlay // A dark overlay that covers the whole page when the drawer is open
       └── // Sidebar content (menu or anything)
```

You can check/uncheck the checkbox using JavaScript or using `<label>` tag.
<Component title="Drawer">

<div class="drawer h-56 rounded">
  <input id="my-drawer" type="checkbox" class="drawer-toggle" />
  <div class="flex flex-col items-center justify-center drawer-content">
    <label for="my-drawer" class="btn btn-primary drawer-button">Open drawer</label>
  </div> 
  <div class="drawer-side">
    <label for="my-drawer" class="drawer-overlay"></label>
    <ul class="menu p-4 overflow-y-auto w-60 md:w-80 bg-base-100 text-base-content">
      <li><a>Sidebar Item 1</a></li>
      <li><a>Sidebar Item 2</a></li>
    </ul>
  </div>
</div>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<div class="$$drawer">
  <input id="my-drawer" type="checkbox" class="$$drawer-toggle" />
  <div class="$$drawer-content">
    <!-- Page content here -->
    <label for="my-drawer" class="$$btn $$btn-primary $$drawer-button">Open drawer</label>

  </div> 
  <div class="$$drawer-side">
    <label for="my-drawer" class="$$drawer-overlay"></label>
    <ul class="$$menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
      <!-- Sidebar content here -->
      <li><a>Sidebar Item 1</a></li>
      <li><a>Sidebar Item 2</a></li>
      
    </ul>
  </div>
</div>`
}</pre>
<pre slot="react" use:replace={{ to: $prefix }}>{
`<div className="$$drawer">
  <input id="my-drawer" type="checkbox" className="$$drawer-toggle" />
  <div className="$$drawer-content">
    <!-- Page content here -->
    <label htmlFor="my-drawer" className="$$btn $$btn-primary $$drawer-button">Open drawer</label>

  </div> 
  <div className="$$drawer-side">
    <label htmlFor="my-drawer" className="$$drawer-overlay"></label>
    <ul className="$$menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
      <!-- Sidebar content here -->
      <li><a>Sidebar Item 1</a></li>
      <li><a>Sidebar Item 2</a></li>
      
    </ul>
  </div>
</div>`
}</pre>
</Component>

<Component title="Drawer for mobile + fixed sidebar for desktop" desc="Drawer is always open on desktop size. Drawer can be toggled on mobile size. Resize the browser to see toggle button on mobile size">
<div class="drawer drawer-mobile h-56 rounded">
  <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
  <div class="flex flex-col items-center justify-center drawer-content">
    <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>
  </div> 
  <div class="drawer-side">
    <label for="my-drawer-2" class="drawer-overlay"></label>
    <ul class="menu p-4 overflow-y-auto w-60 md:w-80 bg-base-100 text-base-content">
      <li><a>Sidebar Item 1</a></li>
      <li><a>Sidebar Item 2</a></li>
    </ul>
  </div>
</div>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<div class="$$drawer $$drawer-mobile">
  <input id="my-drawer-2" type="checkbox" class="$$drawer-toggle" />
  <div class="$$drawer-content flex flex-col items-center justify-center">
    <!-- Page content here -->
    <label for="my-drawer-2" class="$$btn $$btn-primary $$drawer-button lg:hidden">Open drawer</label>
  
  </div> 
  <div class="$$drawer-side">
    <label for="my-drawer-2" class="$$drawer-overlay"></label> 
    <ul class="$$menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
      <!-- Sidebar content here -->
      <li><a>Sidebar Item 1</a></li>
      <li><a>Sidebar Item 2</a></li>
    </ul>
  
  </div>
</div>`
}</pre>
<pre slot="react" use:replace={{ to: $prefix }}>{
`<div className="$$drawer $$drawer-mobile">
  <input id="my-drawer-2" type="checkbox" className="$$drawer-toggle" />
  <div className="$$drawer-content flex flex-col items-center justify-center">
    <!-- Page content here -->
    <label htmlFor="my-drawer-2" className="$$btn $$btn-primary $$drawer-button lg:hidden">Open drawer</label>
  
  </div> 
  <div className="$$drawer-side">
    <label htmlFor="my-drawer-2" className="$$drawer-overlay"></label> 
    <ul className="$$menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
      <!-- Sidebar content here -->
      <li><a>Sidebar Item 1</a></li>
      <li><a>Sidebar Item 2</a></li>
    </ul>
  
  </div>
</div>`
}</pre>
</Component>

<Component title="Navbar menu for desktop + sidebar drawer for mobile" desc="Change screen size to show/hide menu">
<div class="drawer h-56 rounded">
  <input id="my-drawer-3" type="checkbox" class="drawer-toggle" /> 
  <div class="flex flex-col drawer-content">
    <div class="w-full navbar bg-base-300">
      <div class="flex-none lg:hidden">
        <label for="my-drawer-3" class="btn btn-square btn-ghost">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </label>
      </div> 
      <div class="flex-1 px-2 mx-2">Navbar Title</div>
      <div class="flex-none hidden lg:block">
        <ul class="menu menu-horizontal">
          <li><a>Navbar Item 1</a></li>
          <li><a>Navbar Item 2</a></li>
        </ul>
      </div>
    </div>
    <div class="flex justify-center items-center flex-grow">Content</div>
  </div> 
  <div class="drawer-side">
    <label for="my-drawer-3" class="drawer-overlay"></label> 
    <ul class="p-4 overflow-y-auto menu w-60 md:w-80 bg-base-100">
      <li><a>Sidebar Item 1</a></li>
      <li><a>Sidebar Item 2</a></li>
    </ul>
  </div>
</div>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<div class="$$drawer">
  <input id="my-drawer-3" type="checkbox" class="$$drawer-toggle" /> 
  <div class="$$drawer-content flex flex-col">
    <!-- Navbar -->
    <div class="w-full $$navbar bg-base-300">
      <div class="flex-none lg:hidden">
        <label for="my-drawer-3" class="$$btn $$btn-square $$btn-ghost">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </label>
      </div> 
      <div class="flex-1 px-2 mx-2">Navbar Title</div>
      <div class="flex-none hidden lg:block">
        <ul class="$$menu $$menu-horizontal">
          <!-- Navbar menu content here -->
          <li><a>Navbar Item 1</a></li>
          <li><a>Navbar Item 2</a></li>
        </ul>
      </div>
    </div>
    <!-- Page content here -->
    Content
  </div> 
  <div class="$$drawer-side">
    <label for="my-drawer-3" class="$$drawer-overlay"></label> 
    <ul class="$$menu p-4 overflow-y-auto w-80 bg-base-100">
      <!-- Sidebar content here -->
      <li><a>Sidebar Item 1</a></li>
      <li><a>Sidebar Item 2</a></li>
      
    </ul>
    
  </div>
</div>`
}</pre>
<pre slot="react" use:replace={{ to: $prefix }}>{
`<div className="$$drawer">
  <input id="my-drawer-3" type="checkbox" className="$$drawer-toggle" /> 
  <div className="$$drawer-content flex flex-col">
    <!-- Navbar -->
    <div className="w-full $$navbar bg-base-300">
      <div className="flex-none lg:hidden">
        <label htmlFor="my-drawer-3" className="$$btn $$btn-square $$btn-ghost">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </label>
      </div> 
      <div className="flex-1 px-2 mx-2">Navbar Title</div>
      <div className="flex-none hidden lg:block">
        <ul className="$$menu $$menu-horizontal">
          <!-- Navbar menu content here -->
          <li><a>Navbar Item 1</a></li>
          <li><a>Navbar Item 2</a></li>
        </ul>
      </div>
    </div>
    <!-- Page content here -->
    Content
  </div> 
  <div className="$$drawer-side">
    <label htmlFor="my-drawer-3" className="$$drawer-overlay"></label> 
    <ul className="$$menu p-4 overflow-y-auto w-80 bg-base-100">
      <!-- Sidebar content here -->
      <li><a>Sidebar Item 1</a></li>
      <li><a>Sidebar Item 2</a></li>
      
    </ul>
    
  </div>
</div>`
}</pre>
</Component>

<Component title="Drawer that opens from right side of page">
<div class="drawer drawer-end h-56 rounded">
  <input id="my-drawer-4" type="checkbox" class="drawer-toggle" />
  <div class="flex flex-col items-center justify-center drawer-content">
    <label for="my-drawer-4" class="btn btn-primary drawer-button">Open drawer</label>
  </div> 
  <div class="drawer-side">
    <label for="my-drawer-4" class="drawer-overlay"></label>
    <ul class="menu p-4 overflow-y-auto w-60 md:w-80 bg-base-100 text-base-content">
      <li><a>Sidebar Item 1</a></li>
      <li><a>Sidebar Item 2</a></li>
    </ul>
  </div>
</div>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<div class="$$drawer $$drawer-end">
  <input id="my-drawer-4" type="checkbox" class="$$drawer-toggle" />
  <div class="$$drawer-content">
    <!-- Page content here -->
    <label for="my-drawer-4" class="$$drawer-button $$btn $$btn-primary">Open drawer</label>

  </div> 
  <div class="$$drawer-side">
    <label for="my-drawer-4" class="$$drawer-overlay"></label>
    <ul class="$$menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
      <!-- Sidebar content here -->
      <li><a>Sidebar Item 1</a></li>
      <li><a>Sidebar Item 2</a></li>

    </ul>

  </div>
</div>`
}</pre>
<pre slot="react" use:replace={{ to: $prefix }}>{
`<div className="$$drawer $$drawer-end">
  <input id="my-drawer-4" type="checkbox" className="$$drawer-toggle" />
  <div className="$$drawer-content">
    <!-- Page content here -->
    <label htmlFor="my-drawer-4" className="$$drawer-button $$btn $$btn-primary">Open drawer</label>

  </div> 
  <div className="$$drawer-side">
    <label htmlFor="my-drawer-4" className="$$drawer-overlay"></label>
    <ul className="$$menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
      <!-- Sidebar content here -->
      <li><a>Sidebar Item 1</a></li>
      <li><a>Sidebar Item 2</a></li>

    </ul>

  </div>
</div>`
}</pre>
</Component>
