<template>
  <div class="space-x-1 navbar rounded-box text-primary-content">
    <div class="flex-none hidden md:flex">
      <PromoDropdown title="drawer" desc="Drawer component is useful for opening a sidebar menu" link="components/drawer">
        <button class="border-none btn btn-square btn-ghost mask mask-squircle focus:bg-base-content focus:bg-opacity-50" aria-label="drawer component">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16">
            </path>
          </svg>
        </button>
      </PromoDropdown>
    </div>
    <div class="flex-1 px-2 mx-2 md:flex justify-center md:justify-start">
      <PromoDropdown title="navbar" desc="You'll need a navbar on top of your page" link="components/navbar">
        <span class="text-2xl font-title">
          Components Demo
        </span>
      </PromoDropdown>
    </div>
    <div class="flex-1 hidden md:flex md:flex-none">
      <div class="form-control">
        <PromoDropdown title="text input" desc="Text input comes in various sizes and styles" link="components/form/input">
          <input type="text" placeholder="Text Input" class="rounded-full input input-ghost placeholder-primary-content text-primary-content focus:text-primary-content input-bordered focus:bg-transparent">
        </PromoDropdown>
      </div>
    </div>
    <PromoDropdown title="navbar" desc="You'll need a navbar on top of your page" classes="dropdown-left" link="components/navbar">
      <button class="hidden md:flex border-none btn btn-square btn-ghost mask mask-squircle focus:bg-base-content focus:bg-opacity-50" aria-label="button component">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z">
          </path>
        </svg>
      </button>
    </PromoDropdown>

    <PromoDropdown title="navbar" desc="You'll need a navbar on top of your page" classes="dropdown-left" link="components/navbar">
      <button class="hidden md:flex border-none btn btn-square btn-ghost mask mask-squircle focus:bg-base-content focus:bg-opacity-50" aria-label="button component">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9">
          </path>
        </svg>
      </button>
    </PromoDropdown>

    <PromoDropdown title="avatar" desc="Use avatar component with any size" classes="dropdown-left" link="components/avatar">
      <button class="hidden md:flex border-none btn btn-square btn-ghost mask mask-squircle focus:bg-base-content focus:bg-opacity-50" aria-label="navbar component">
        <div class="avatar">
          <div class="w-10 h-10 mask mask-squircle">
            <img src="/tailwind-css-component-profile-1@40w.png" alt="Avatar Tailwind CSS Component">
          </div>
        </div>
      </button>
    </PromoDropdown>
  </div>
</template>



