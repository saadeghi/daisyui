<template>
  <div class="grid items-center gap-4 p-4 py-8 shadow-xl bg-base-100 rounded-box place-items-center">
    <PromoDropdown title="avatar" desc="Use avatar component with any size" classes="" link="components/avatar">
      <div class="avatar online">
        <div class="w-24 h-24 p-px mask mask-squircle bg-base-content bg-opacity-10">
          <img src="/tailwind-css-component-profile-1@94w.png" width="94" height="94" class="mask mask-squircle" alt="Avatar Tailwind CSS Component">
        </div>
      </div>
    </PromoDropdown>
    <div>
      <PromoDropdown title="card" desc="Card component is used to show products, features and more." classes="w-full" link="components/card">
        <div class="text-center">
          <div class="text-lg font-extrabold">Betsy Braddock</div>
          <div class="my-3 text-sm text-base-content text-opacity-60">
            Strategic Art Manager
            <br />Global Illustration Observer
            <br />Business Alignment Developer
          </div>
        </div>
      </PromoDropdown>
      <PromoDropdown title="badge" desc="Use badge component to highlight small inline items" classes="w-full" link="components/badge">
        <div class="mt-2 text-center">
          <div class="badge badge-ghost">Design</div>
          <div class="badge badge-ghost">Art</div>
          <div class="badge badge-ghost">Illustration</div>
        </div>
      </PromoDropdown>
    </div>
    <PromoDropdown title="button group" desc="Use it to group multiple buttons together" classes="dropdown-top" link="components/button-group">
      <div class="btn-group">
        <button class="btn btn-accent btn-sm">Follow</button>
        <button class="btn btn-accent btn-sm btn-square" aria-label="button component">
          <Icon glyph="dots" class="w-6 h-6 stroke-current" />
        </button>
      </div>
    </PromoDropdown>
  </div>
</template>
