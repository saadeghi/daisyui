<template>
  <div class="overflow-visible shadow-xl card bg-base-100">
    <PromoDropdown title="card" desc="Card component is used to show products, features and more." classes="" link="components/card">
      <figure>
        <img src="/tailwind-css-component-card-1.png" width="300" height="187" class="rounded-t-box" alt="Card Tailwind CSS Component">
      </figure>
    </PromoDropdown>
    <div class="card-body">
      <div class="flex items-center font-extrabold card-title">
        Card Component
        <PromoDropdown title="dropdown" desc="helper dropdown can show an element when focused." classes="dropdown-top dropdown-end" link="components/dropdown">
          <div tabindex="0" class="inline-block mx-1 btn btn-circle btn-ghost btn-xs text-info">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline w-5 h-5 stroke-current">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z">
              </path>
            </svg>
          </div>
        </PromoDropdown>
      </div>
      <PromoDropdown title="badge" desc="Use badge component to highlight small inline items" classes="w-full" link="components/badge">
        <div class="mb-2">
          <div class="badge badge-ghost">May 14th</div>
        </div>
      </PromoDropdown>
      <p class="text-sm text-base-content text-opacity-80">
        Use card component to easily show blog posts, products, features, items and more.
      </p>
      <div class="justify-end card-actions">
        <PromoDropdown title="button" desc="Buttons come in various shapes, colors and sizes" classes="dropdown-top dropdown-end" link="components/button">
          <button class="btn btn-primary">Get Started</button>
        </PromoDropdown>
      </div>
    </div>
  </div>
</template>
