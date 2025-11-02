---
title: Drawer sidebar
desc: Drawer is a grid layout that can show/hide a sidebar on the left or right side of the page.
source: https://raw.githubusercontent.com/saadeghi/daisyui/refs/heads/master/packages/daisyui/src/components/drawer.css
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
  variant:
    - class: "is-drawer-open:"
      desc: Applies styles when the drawer is open
    - class: "is-drawer-close:"
      desc: Applies styles when the drawer is closed
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
> On recent Chromium based browsers vertical scrollbar presence is detected automatically. On Safari and on mobile devices the scrollbar is displayed as overlay so there will not be gutter. On Firefox you need to detect the presence of vertical scrollbar and set the `scrollbar-gutter: stable` or `scrollbar-gutter: unset` on `:root` element yourself.
> If you don't want to use this feature, [you can exclude `rootscrollgutter`](/docs/config/#exclude).

> :INFO:
>
> When using `drawer-open` the drawer will be rendered in the document flow. If you want to limit it to the screen height add `h-screen` class to the `.drawer-side` element.

### ~Drawer sidebar

<div class="drawer h-56 rounded overflow-hidden">
  <input id="my-drawer-1" type="checkbox" class="drawer-toggle" />
  <div class="flex flex-col items-center justify-center drawer-content">
    <label for="my-drawer-1" class="btn drawer-button">Open drawer</label>
  </div>
  <div class="drawer-side z-1002">
    <label for="my-drawer-1" aria-label="close sidebar" class="drawer-overlay"></label>
    <ul class="menu p-4 w-60 md:w-80 min-h-full bg-base-200">
      <li><button>Sidebar Item 1</button></li>
      <li><button>Sidebar Item 2</button></li>
    </ul>
  </div>
</div>

```html
<div class="$$drawer">
  <input id="my-drawer-1" type="checkbox" class="$$drawer-toggle" />
  <div class="$$drawer-content">
    <!-- Page content here -->
    <label for="my-drawer-1" class="$$btn $$$$drawer-button">Open drawer</label>
  </div>
  <div class="$$drawer-side">
    <label for="my-drawer-1" aria-label="close sidebar" class="$$drawer-overlay"></label>
    <ul class="$$menu bg-base-200 min-h-full w-80 p-4">
      <!-- Sidebar content here -->
      <li><a>Sidebar Item 1</a></li>
      <li><a>Sidebar Item 2</a></li>
    </ul>
  </div>
</div>
```

### ~Navbar menu for desktop + sidebar drawer for mobile

#### Change screen size to show/hide menu

<div class="drawer lg:drawer-open h-56 rounded overflow-hidden">
  <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
  <div class="flex flex-col drawer-content">
    <div class="w-full navbar bg-base-300">
      <div class="flex-none lg:hidden">
        <label for="my-drawer-2" aria-label="open sidebar" class="btn btn-square btn-ghost">
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
  <div class="drawer-side lg:hidden z-1002">
    <label for="my-drawer-2" aria-label="close sidebar" class="drawer-overlay"></label>
    <ul class="p-4 menu w-60 md:w-80 min-h-full bg-base-200">
      <li><button>Sidebar Item 1</button></li>
      <li><button>Sidebar Item 2</button></li>
    </ul>
  </div>
</div>

```html
<div class="$$drawer lg:$$drawer-open">
  <input id="my-drawer-2" type="checkbox" class="$$drawer-toggle" />
  <div class="$$drawer-content flex flex-col">
    <!-- Navbar -->
    <div class="$$navbar bg-base-300 w-full">
      <div class="flex-none lg:hidden">
        <label for="my-drawer-2" aria-label="open sidebar" class="$$btn $$btn-square $$btn-ghost">
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
  <div class="$$drawer-side lg:hidden">
    <label for="my-drawer-2" aria-label="close sidebar" class="$$drawer-overlay"></label>
    <ul class="$$menu bg-base-200 min-h-full w-80 p-4">
      <!-- Sidebar content here -->
      <li><a>Sidebar Item 1</a></li>
      <li><a>Sidebar Item 2</a></li>
    </ul>
  </div>
</div>
```

### ~Responsive: Sidebar is always visible on large screen, can be toggled on small screen

#### Sidebar is always visible on large screen, can be toggled on small screen because of lg:drawer-open class

<div class="drawer lg:drawer-open h-56 rounded overflow-hidden">
  <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
  <div class="flex flex-col items-center justify-center drawer-content">
    <label for="my-drawer-3" class="btn drawer-button lg:hidden">Open drawer</label>
  </div>
  <div class="drawer-side max-lg:z-1002">
    <label for="my-drawer-3" aria-label="close sidebar" class="drawer-overlay"></label>
    <ul class="menu p-4 w-60 md:w-80 min-h-full bg-base-200">
      <li><button>Sidebar Item 1</button></li>
      <li><button>Sidebar Item 2</button></li>
    </ul>
  </div>
</div>

```html
<div class="$$drawer lg:$$drawer-open">
  <input id="my-drawer-3" type="checkbox" class="$$drawer-toggle" />
  <div class="$$drawer-content flex flex-col items-center justify-center">
    <!-- Page content here -->
    <label for="my-drawer-3" class="$$btn $$$$drawer-button lg:hidden">
      Open drawer
    </label>
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


### ~Icon-only drawer sidebar when it's closed. Using is-drawer-close and is-drawer-open variants

#### In this example instead of completely hiding the drawer sidebar, we only show the icons when the drawer is closed. To add styles based on the state of the drawer, we use the `is-drawer-open` and `is-drawer-close` variants. For example `is-drawer-close:hidden` or `is-drawer-open:w-80`. Also we have tooltips when the drawer is closed and a switch button to open/close the drawer and rotates the button icon based on the state of the drawer.

<div class="drawer drawer-open h-56 rounded overflow-hidden">
  <input id="my-drawer-4" type="checkbox" class="drawer-toggle" />
  <div class="h-56 drawer-content">
    <!-- Page content here -->
  </div>
  <div class="drawer-side is-drawer-close:overflow-visible h-full">
    <label for="my-drawer-4" aria-label="close sidebar" class="drawer-overlay"></label>
    <div class="is-drawer-close:w-14 is-drawer-open:w-64 h-full bg-base-200 flex flex-col items-start">
      <ul class="menu w-full grow">
        <li>
          <button class="is-drawer-close:tooltip is-drawer-close:tooltip-right rtl:is-drawer-close:tooltip-left" data-tip="Homepage">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-linejoin="round" stroke-linecap="round" stroke-width="2" fill="none" stroke="currentColor" class="inline-block size-4 my-1.5">
              <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
              <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
            </svg>
            <span class="is-drawer-close:hidden">Homepage</span>
          </button>
        </li>
        <li>
          <button class="is-drawer-close:tooltip is-drawer-close:tooltip-right rtl:is-drawer-close:tooltip-left" data-tip="Settings">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-linejoin="round" stroke-linecap="round" stroke-width="2" fill="none" stroke="currentColor" class="inline-block size-4 my-1.5">>
              <path d="M20 7h-9"></path>
              <path d="M14 17H5"></path>
              <circle cx="17" cy="17" r="3"></circle>
              <circle cx="7" cy="7" r="3"></circle>
            </svg>
            <span class="is-drawer-close:hidden">Settings</span>
          </button>
        </li>
      </ul>
      <div class="m-2 is-drawer-close:tooltip is-drawer-close:tooltip-right rtl:is-drawer-close:tooltip-left" data-tip="Open">
        <label for="my-drawer-4" class="btn btn-ghost btn-circle drawer-button is-drawer-open:rotate-y-180">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-linejoin="round" stroke-linecap="round" stroke-width="2" fill="none" stroke="currentColor" class="inline-block size-4 my-1.5">
            <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
            <path d="M9 4v16"></path>
            <path d="M14 10l2 2l-2 2"></path>
          </svg>
        </label>
      </div>
    </div>
  </div>
</div>

```html
<div class="$$drawer $$drawer-open">
  <input id="my-drawer-4" type="checkbox" class="$$drawer-toggle" />
  <div class="$$drawer-content">
    <!-- Page content here -->
  </div>

  <div class="$$drawer-side is-drawer-close:overflow-visible">
    <label for="my-drawer-4" aria-label="close sidebar" class="$$drawer-overlay"></label>
    <div class="is-drawer-close:w-14 is-drawer-open:w-64 bg-base-200 flex flex-col items-start min-h-full">
      <!-- Sidebar content here -->
      <ul class="$$menu w-full grow">

        <!-- list item -->
        <li>
          <button class="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Homepage">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-linejoin="round" stroke-linecap="round" stroke-width="2" fill="none" stroke="currentColor" class="inline-block size-4 my-1.5"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
            <span class="is-drawer-close:hidden">Homepage</span>
          </button>
        </li>

        <!-- list item -->
        <li>
          <button class="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Settings">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-linejoin="round" stroke-linecap="round" stroke-width="2" fill="none" stroke="currentColor" class="inline-block size-4 my-1.5"><path d="M20 7h-9"></path><path d="M14 17H5"></path><circle cx="17" cy="17" r="3"></circle><circle cx="7" cy="7" r="3"></circle></svg>
            <span class="is-drawer-close:hidden">Settings</span>
          </button>
        </li>
      </ul>

      <!-- button to open/close drawer -->
      <div class="m-2 is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Open">
        <label for="my-drawer-4" class="$$btn $$btn-ghost $$btn-circle $$drawer-button is-drawer-open:rotate-y-180">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-linejoin="round" stroke-linecap="round" stroke-width="2" fill="none" stroke="currentColor" class="inline-block size-4 my-1.5"><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path><path d="M9 4v16"></path><path d="M14 10l2 2l-2 2"></path></svg>
        </label>
      </div>

    </div>
  </div>
</div>
```


### ~Drawer sidebar that opens from right side of page

<div class="drawer drawer-end h-56 rounded overflow-hidden">
  <input id="my-drawer-5" type="checkbox" class="drawer-toggle" />
  <div class="flex flex-col items-center justify-center drawer-content">
    <label for="my-drawer-5" class="btn drawer-button">Open drawer</label>
  </div>
  <div class="drawer-side z-1002">
    <label for="my-drawer-5" aria-label="close sidebar" class="drawer-overlay"></label>
    <ul class="menu p-4 w-60 md:w-80 min-h-full bg-base-200">
      <li><button>Sidebar Item 1</button></li>
      <li><button>Sidebar Item 2</button></li>
    </ul>
  </div>
</div>

```html
<div class="$$drawer $$drawer-end">
  <input id="my-drawer-5" type="checkbox" class="$$drawer-toggle" />
  <div class="$$drawer-content">
    <!-- Page content here -->
    <label for="my-drawer-5" class="$$drawer-button $$btn $$btn-primary">Open drawer</label>
  </div>
  <div class="$$drawer-side">
    <label for="my-drawer-5" aria-label="close sidebar" class="$$drawer-overlay"></label>
    <ul class="$$menu bg-base-200 min-h-full w-80 p-4">
      <!-- Sidebar content here -->
      <li><a>Sidebar Item 1</a></li>
      <li><a>Sidebar Item 2</a></li>
    </ul>
  </div>
</div>
```
