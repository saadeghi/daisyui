<template>
  <div class="space-x-1 navbar rounded-box text-primary-content">
    <div class="flex-none hidden md:flex">

        <button class="border-none btn btn-square btn-ghost mask mask-squircle focus:bg-base-content focus:bg-opacity-50" aria-label="drawer component">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16">
            </path>
          </svg>
        </button>

    </div>
    <div class="flex justify-center flex-1 px-2 mx-2 md:justify-start">

        <span class="text-2xl font-title">
          Components Demo
        </span>

    </div>
    <div class="flex-1 hidden md:flex md:flex-none">
      <div class="form-control">
          <input type="text" placeholder="Text Input" class="rounded-full input input-ghost placeholder-primary-content text-primary-content focus:text-primary-content input-bordered focus:bg-transparent">

      </div>
    </div>

      <button class="hidden border-none md:flex btn btn-square btn-ghost mask mask-squircle focus:bg-base-content focus:bg-opacity-50" aria-label="button component">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z">
          </path>
        </svg>
      </button>



      <button class="hidden border-none md:flex btn btn-square btn-ghost mask mask-squircle focus:bg-base-content focus:bg-opacity-50" aria-label="button component">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9">
          </path>
        </svg>
      </button>



      <button class="hidden border-none md:flex btn btn-square btn-ghost mask mask-squircle focus:bg-base-content focus:bg-opacity-50" aria-label="navbar component">
        <div class="avatar">
          <div class="w-10 h-10 mask mask-squircle">
            <img src="/profile-1@40w.png" alt="avatar component">
          </div>
        </div>
      </button>

  </div>
</template>



