---
title: Navbar
desc: Navbar is used to show a navigation bar on the top of the page.
layout: components
classnames:
  component:
  - class: navbar
    desc: Navigation bar
  part:
  - class: navbar-start
    desc: For the div inside navbar, to fill 50% of width
  - class: navbar-center
    desc: For the div inside navbar, to be at center horizontally
  - class: navbar-end
    desc: For the div inside navbar, to fill second 50% of width
---

<script>
  import Component from "$components/Component.svelte"
  import Translate from "$components/Translate.svelte"
</script>

### ~Navbar with title only
<div class="navbar bg-base-100 shadow-sm">
  <button class="btn btn-ghost text-xl">daisyUI</button>
</div>

```html
<div class="$$navbar bg-base-100 shadow-sm">
  <a class="$$btn $$btn-ghost text-xl">daisyUI</a>
</div>
```


### ~Navbar with title and icon
<div class="navbar bg-base-100 shadow-sm">
  <div class="flex-1">
    <button class="btn btn-ghost text-xl">daisyUI</button>
  </div>
  <div class="flex-none">
    <button class="btn btn-square btn-ghost">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-5 h-5 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
    </button>
  </div>
</div>

```html
<div class="$$navbar bg-base-100 shadow-sm">
  <div class="flex-1">
    <a class="$$btn $$btn-ghost text-xl">daisyUI</a>
  </div>
  <div class="flex-none">
    <button class="$$btn $$btn-square $$btn-ghost">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block h-5 w-5 stroke-current"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path> </svg>
    </button>
  </div>
</div>
```


### ~Navbar with icon at start and end
<div class="navbar bg-base-100 shadow-sm">
  <div class="flex-none">
    <button class="btn btn-square btn-ghost">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-5 h-5 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
    </button>
  </div>
  <div class="flex-1">
    <button class="btn btn-ghost text-xl">daisyUI</button>
  </div>
  <div class="flex-none">
    <button class="btn btn-square btn-ghost">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-5 h-5 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
    </button>
  </div>
</div>

```html
<div class="$$navbar bg-base-100 shadow-sm">
  <div class="flex-none">
    <button class="$$btn $$btn-square $$btn-ghost">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block h-5 w-5 stroke-current"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path> </svg>
    </button>
  </div>
  <div class="flex-1">
    <a class="$$btn $$btn-ghost text-xl">daisyUI</a>
  </div>
  <div class="flex-none">
    <button class="$$btn $$btn-square $$btn-ghost">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block h-5 w-5 stroke-current"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path> </svg>
    </button>
  </div>
</div>
```


### ~Navbar with menu and submenu
<div class="navbar bg-base-100 mb-32 shadow-sm">
  <div class="flex-1">
    <button class="btn btn-ghost text-xl">daisyUI</button>
  </div>
  <div class="flex-none">
    <ul class="menu menu-horizontal">
      <li><button>Link</button></li>
      <li>
        <details>
          <summary>
            Parent
          </summary>
          <ul class="p-2 bg-base-100">
            <li><button>Link 1</button></li>
            <li><button>Link 2</button></li>
          </ul>
        </details>
      </li>
    </ul>
  </div>
</div>

```html
<div class="$$navbar bg-base-100 shadow-sm">
  <div class="flex-1">
    <a class="$$btn $$btn-ghost text-xl">daisyUI</a>
  </div>
  <div class="flex-none">
    <ul class="$$menu $$menu-horizontal px-1">
      <li><a>Link</a></li>
      <li>
        <details>
          <summary>Parent</summary>
          <ul class="bg-base-100 rounded-t-none p-2">
            <li><a>Link 1</a></li>
            <li><a>Link 2</a></li>
          </ul>
        </details>
      </li>
    </ul>
  </div>
</div>
```


### ~Navbar with search input and dropdown
<div class="navbar bg-base-100 mb-32 shadow-sm">
  <div class="flex-1">
    <button class="btn btn-ghost text-xl">daisyUI</button>
  </div>
  <div class="flex gap-2">
    <input type="text" placeholder="Search" class="input input-bordered w-24 md:w-auto" />
    <div class="dropdown dropdown-end">
      <div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar">
        <div class="w-10 rounded-full">
          <img alt="Tailwind CSS Navbar component" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
      <ul tabindex="0" class="mt-3 z-1 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <button class="justify-between">
            Profile
            <span class="badge">New</span>
          </button>
        </li>
        <li><button>Settings</button></li>
        <li><button>Logout</button></li>
      </ul>
    </div>
  </div>
</div>

```html
<div class="$$navbar bg-base-100 shadow-sm">
  <div class="flex-1">
    <a class="$$btn $$btn-ghost text-xl">daisyUI</a>
  </div>
  <div class="flex gap-2">
    <input type="text" placeholder="Search" class="$$input $$input-bordered w-24 md:w-auto" />
    <div class="$$dropdown $$dropdown-end">
      <div tabindex="0" role="button" class="$$btn $$btn-ghost $$btn-circle $$avatar">
        <div class="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
      <ul
        tabindex="0"
        class="$$menu $$menu-sm $$dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li>
          <a class="justify-between">
            Profile
            <span class="$$badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>
```


### ~Navbar with icon, indicator and dropdown
<div class="navbar bg-base-100 mb-40 shadow-sm">
  <div class="flex-1">
    <button class="btn btn-ghost text-xl">daisyUI</button>
  </div>
  <div class="flex-none">
    <div class="dropdown dropdown-end">
      <div tabindex="0" role="button" class="btn btn-ghost btn-circle">
        <div class="indicator">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
          <span class="badge badge-sm indicator-item">8</span>
        </div>
      </div>
      <div tabindex="0" class="mt-3 z-1 card card-compact w-52 dropdown-content bg-base-100 shadow">
        <div class="card-body">
          <span class="font-bold text-lg">8 Items</span>
          <span class="text-info">Subtotal: $999</span>
          <div class="card-actions">
            <button class="btn btn-primary btn-block">View cart</button>
          </div>
        </div>
      </div>
    </div>
    <div class="dropdown dropdown-end">
      <div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar">
        <div class="w-10 rounded-full">
          <img alt="Tailwind CSS Navbar component" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
      <ul tabindex="0" class="mt-3 z-1 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <button class="justify-between">
            Profile
            <span class="badge">New</span>
          </button>
        </li>
        <li><button>Settings</button></li>
        <li><button>Logout</button></li>
      </ul>
    </div>
  </div>
</div>

```html
<div class="$$navbar bg-base-100 shadow-sm">
  <div class="flex-1">
    <a class="$$btn $$btn-ghost text-xl">daisyUI</a>
  </div>
  <div class="flex-none">
    <div class="$$dropdown $$dropdown-end">
      <div tabindex="0" role="button" class="$$btn $$btn-ghost $$btn-circle">
        <div class="$$indicator">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /> </svg>
          <span class="$$badge $$badge-sm $$indicator-item">8</span>
        </div>
      </div>
      <div
        tabindex="0"
        class="$$card $$card-compact $$dropdown-content bg-base-100 z-1 mt-3 w-52 shadow">
        <div class="$$card-body">
          <span class="text-lg font-bold">8 Items</span>
          <span class="text-info">Subtotal: $999</span>
          <div class="$$card-actions">
            <button class="$$btn $$btn-primary $$btn-block">View cart</button>
          </div>
        </div>
      </div>
    </div>
    <div class="$$dropdown $$dropdown-end">
      <div tabindex="0" role="button" class="$$btn $$btn-ghost $$btn-circle $$avatar">
        <div class="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
      <ul
        tabindex="0"
        class="$$menu $$menu-sm $$dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li>
          <a class="justify-between">
            Profile
            <span class="$$badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>
```


### ~Navbar with dropdown, center logo and icon
<div class="navbar bg-base-100 mb-40 shadow-sm">
  <div class="navbar-start">
    <div class="dropdown">
      <div tabindex="0" role="button" class="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
      </div>
      <ul tabindex="0" class="mt-3 z-1 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
        <li><button>Homepage</button></li>
        <li><button>Portfolio</button></li>
        <li><button>About</button></li>
      </ul>
    </div>
  </div>
  <div class="navbar-center">
    <button class="btn btn-ghost text-xl">daisyUI</button>
  </div>
  <div class="navbar-end">
    <button class="btn btn-ghost btn-circle">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
    </button>
    <button class="btn btn-ghost btn-circle">
      <div class="indicator">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
        <span class="badge badge-xs badge-primary indicator-item"></span>
      </div>
    </button>
  </div>
</div>

```html
<div class="$$navbar bg-base-100 shadow-sm">
  <div class="$$navbar-start">
    <div class="$$dropdown">
      <div tabindex="0" role="button" class="$$btn $$btn-ghost $$btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /> </svg>
      </div>
      <ul
        tabindex="0"
        class="$$menu $$menu-sm $$dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><a>Homepage</a></li>
        <li><a>Portfolio</a></li>
        <li><a>About</a></li>
      </ul>
    </div>
  </div>
  <div class="$$navbar-center">
    <a class="$$btn $$btn-ghost text-xl">daisyUI</a>
  </div>
  <div class="$$navbar-end">
    <button class="$$btn $$btn-ghost $$btn-circle">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /> </svg>
    </button>
    <button class="$$btn $$btn-ghost $$btn-circle">
      <div class="$$indicator">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /> </svg>
        <span class="$$badge $$badge-xs $$badge-primary $$indicator-item"></span>
      </div>
    </button>
  </div>
</div>
```


### ~responsive (dropdown menu on small screen, center menu on large screen)
#### Resize screen to see changes

<div class="navbar bg-base-100 mb-48 shadow-sm">
  <div class="navbar-start">
    <div class="dropdown">
      <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabindex="0" class="mt-3 z-1 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
        <li><button>Item 1</button></li>
        <li>
          <button>Parent</button>
          <ul class="p-2 bg-base-100 w-40">
            <li><button>Submenu 1</button></li>
            <li><button>Submenu 2</button></li>
          </ul>
        </li>
        <li><button>Item 3</button></li>
      </ul>
    </div>
    <button class="btn btn-ghost text-xl">daisyUI</button>
  </div>
  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal px-1">
      <li><button>Item 1</button></li>
      <li>
        <details>
          <summary>Parent</summary>
          <ul class="p-2 bg-base-100 w-40">
            <li><button>Submenu 1</button></li>
            <li><button>Submenu 2</button></li>
          </ul>
        </details>
      </li>
      <li><button>Item 3</button></li>
    </ul>
  </div>
  <div class="navbar-end">
    <button class="btn">Button</button>
  </div>
</div>

```html
<div class="$$navbar bg-base-100 shadow-sm">
  <div class="$$navbar-start">
    <div class="$$dropdown">
      <div tabindex="0" role="button" class="$$btn $$btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabindex="0"
        class="$$menu $$menu-sm $$dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><a>Item 1</a></li>
        <li>
          <a>Parent</a>
          <ul class="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <a class="$$btn $$btn-ghost text-xl">daisyUI</a>
  </div>
  <div class="$$navbar-center hidden lg:flex">
    <ul class="$$menu $$menu-horizontal px-1">
      <li><a>Item 1</a></li>
      <li>
        <details>
          <summary>Parent</summary>
          <ul class="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </details>
      </li>
      <li><a>Item 3</a></li>
    </ul>
  </div>
  <div class="$$navbar-end">
    <a class="$$btn">Button</a>
  </div>
</div>
```


### ~Navbar with colors
<div class="navbar bg-neutral text-neutral-content">
  <button class="btn btn-ghost text-xl">daisyUI</button>
</div>
<div class="navbar bg-base-300">
  <button class="btn btn-ghost text-xl">daisyUI</button>
</div>
<div class="navbar bg-primary text-primary-content">
  <button class="btn btn-ghost text-xl">daisyUI</button>
</div>

```html
<div class="$$navbar bg-neutral text-neutral-content">
  <button class="$$btn $$btn-ghost text-xl">daisyUI</button>
</div>

<div class="$$navbar bg-base-300">
  <button class="$$btn $$btn-ghost text-xl">daisyUI</button>
</div>

<div class="$$navbar bg-primary text-primary-content">
  <button class="$$btn $$btn-ghost text-xl">daisyUI</button>
</div>
```
