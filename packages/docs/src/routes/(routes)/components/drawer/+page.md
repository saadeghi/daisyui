---
title: Drawer
desc: Drawer is a grid layout that can show/hide a sidebar on the left or right side of the page.
layout: components
classnames:
  component:
    - class: drawer
      desc: The wrapper for sidebar and content
  part:
    - class: drawer-toggle
      desc: The hidden checkbox that controls the state of drawer
    - class: drawer-content
      desc: Content part
    - class: drawer-side
      desc: Sidebar part
    - class: drawer-overlay
      desc: Label that covers the page when drawer is open
  placement:
    - class: drawer-end
      desc: puts drawer to the other side
  modifier:
    - class: drawer-open
      desc: Forces the drawer to be open
---

<script>
  import Component from "$components/Component.svelte"
  import Translate from "$components/Translate.svelte"
</script>

### Structure

Drawer is a grid layout that can show/hide a sidebar on the left or right side of the page, based on the screen size or based on the value of a `drawer-toggle` checkbox.  
Drawer must be the parent element of the content and sidebar.

```json:Structure
.drawer // The root container
  ├── .drawer-toggle // A hidden checkbox to toggle the visibility of the sidebar
  ├── .drawer-content // All your page content goes here
  │    ╰── // navbar, content, footer
  │
  ╰── .drawer-side // Sidebar wrapper
       ├── .drawer-overlay // A dark overlay that covers the whole page when the drawer is open
       ╰── // Sidebar content (menu or anything)
```

### Functionality

Drawer sidebar is hidden by default.
You can make it visible on larger screens using `lg:drawer-open` class (or using other responsive prefixes: sm, md, lg, xl)

You can check/uncheck the checkbox using JavaScript or by clicking the `label` tag which is assigned to the hidden checkbox

> :INFO:
>
> Opening a drawer adds a [scrollbar-gutter](https://developer.mozilla.org/en-US/docs/Web/CSS/scrollbar-gutter) to the page to avoid layout shift on operating systems that have a fixed scrollbar.  
> If you don't want to use this feature, [you can exclude `rootscrollgutter`](/docs/config/#exclude).

### ~Drawer

<div class="drawer h-56 rounded overflow-hidden">
  <input id="my-drawer" type="checkbox" class="drawer-toggle" />
  <div class="flex flex-col items-center justify-center drawer-content">
    <label for="my-drawer" class="btn btn-primary drawer-button">Open drawer</label>
  </div>
  <div class="drawer-side z-99">
    <label for="my-drawer" aria-label="close sidebar" class="drawer-overlay"></label>
    <ul class="menu p-4 w-60 md:w-80 min-h-full bg-base-200 text-base-content">
      <li><button>Sidebar Item 1</button></li>
      <li><button>Sidebar Item 2</button></li>
    </ul>
  </div>
</div>

```html
<div class="$$drawer">
  <input id="my-drawer" type="checkbox" class="$$drawer-toggle" />
  <div class="$$drawer-content">
    <!-- Page content here -->
    <label for="my-drawer" class="$$btn $$btn-primary $$drawer-button">Open drawer</label>
  </div>
  <div class="$$drawer-side">
    <label for="my-drawer" aria-label="close sidebar" class="$$drawer-overlay"></label>
    <ul class="$$menu bg-base-200 text-base-content min-h-full w-80 p-4">
      <!-- Sidebar content here -->
      <li><a>Sidebar Item 1</a></li>
      <li><a>Sidebar Item 2</a></li>
    </ul>
  </div>
</div>
```

### ~Navbar menu for desktop + sidebar drawer for mobile

#### Change screen size to show/hide menu

<div class="drawer h-56 rounded overflow-hidden">
  <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
  <div class="flex flex-col drawer-content">
    <div class="w-full navbar bg-base-300">
      <div class="flex-none lg:hidden">
        <label for="my-drawer-3" aria-label="open sidebar" class="btn btn-square btn-ghost">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </label>
      </div>
      <div class="flex-1 px-2 mx-2">Navbar Title</div>
      <div class="flex-none hidden lg:block">
        <ul class="menu menu-horizontal">
          <li><button>Navbar Item 1</button></li>
          <li><button>Navbar Item 2</button></li>
        </ul>
      </div>
    </div>
    <div class="flex justify-center items-center grow">Content</div>
  </div>
  <div class="drawer-side z-99">
    <label for="my-drawer-3" aria-label="close sidebar" class="drawer-overlay"></label>
    <ul class="p-4 menu w-60 md:w-80 min-h-full bg-base-200">
      <li><button>Sidebar Item 1</button></li>
      <li><button>Sidebar Item 2</button></li>
    </ul>
  </div>
</div>

```html
<div class="$$drawer">
  <input id="my-drawer-3" type="checkbox" class="$$drawer-toggle" />
  <div class="$$drawer-content flex flex-col">
    <!-- Navbar -->
    <div class="$$navbar bg-base-300 w-full">
      <div class="flex-none lg:hidden">
        <label for="my-drawer-3" aria-label="open sidebar" class="$$btn $$btn-square $$btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            class="inline-block h-6 w-6 stroke-current"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </label>
      </div>
      <div class="mx-2 flex-1 px-2">Navbar Title</div>
      <div class="hidden flex-none lg:block">
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
    <label for="my-drawer-3" aria-label="close sidebar" class="$$drawer-overlay"></label>
    <ul class="$$menu bg-base-200 min-h-full w-80 p-4">
      <!-- Sidebar content here -->
      <li><a>Sidebar Item 1</a></li>
      <li><a>Sidebar Item 2</a></li>
    </ul>
  </div>
</div>
```

### ~Responsive

#### Sidebar is always visible on large screen, can be toggled on small screen because of lg:drawer-open class

<div class="drawer lg:drawer-open h-56 rounded overflow-hidden">
  <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
  <div class="flex flex-col items-center justify-center drawer-content">
    <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>
  </div>
  <div class="drawer-side max-lg:z-99">
    <label for="my-drawer-2" aria-label="close sidebar" class="drawer-overlay"></label>
    <ul class="menu p-4 w-60 md:w-80 min-h-full bg-base-200 text-base-content">
      <li><button>Sidebar Item 1</button></li>
      <li><button>Sidebar Item 2</button></li>
    </ul>
  </div>
</div>

```html
<div class="$$drawer lg:$$drawer-open">
  <input id="my-drawer-2" type="checkbox" class="$$drawer-toggle" />
  <div class="$$drawer-content flex flex-col items-center justify-center">
    <!-- Page content here -->
    <label for="my-drawer-2" class="$$btn $$btn-primary $$drawer-button lg:hidden">
      Open drawer
    </label>
  </div>
  <div class="$$drawer-side">
    <label for="my-drawer-2" aria-label="close sidebar" class="$$drawer-overlay"></label>
    <ul class="$$menu bg-base-200 text-base-content min-h-full w-80 p-4">
      <!-- Sidebar content here -->
      <li><a>Sidebar Item 1</a></li>
      <li><a>Sidebar Item 2</a></li>
    </ul>
  </div>
</div>
```

### ~Drawer that opens from right side of page

<div class="drawer drawer-end h-56 rounded overflow-hidden">
  <input id="my-drawer-4" type="checkbox" class="drawer-toggle" />
  <div class="flex flex-col items-center justify-center drawer-content">
    <label for="my-drawer-4" class="btn btn-primary drawer-button">Open drawer</label>
  </div>
  <div class="drawer-side z-99">
    <label for="my-drawer-4" aria-label="close sidebar" class="drawer-overlay"></label>
    <ul class="menu p-4 w-60 md:w-80 min-h-full bg-base-200 text-base-content">
      <li><button>Sidebar Item 1</button></li>
      <li><button>Sidebar Item 2</button></li>
    </ul>
  </div>
</div>

```html
<div class="$$drawer $$drawer-end">
  <input id="my-drawer-4" type="checkbox" class="$$drawer-toggle" />
  <div class="$$drawer-content">
    <!-- Page content here -->
    <label for="my-drawer-4" class="$$drawer-button $$btn $$btn-primary">Open drawer</label>
  </div>
  <div class="$$drawer-side">
    <label for="my-drawer-4" aria-label="close sidebar" class="$$drawer-overlay"></label>
    <ul class="$$menu bg-base-200 text-base-content min-h-full w-80 p-4">
      <!-- Sidebar content here -->
      <li><a>Sidebar Item 1</a></li>
      <li><a>Sidebar Item 2</a></li>
    </ul>
  </div>
</div>
```
