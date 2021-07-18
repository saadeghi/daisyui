<template>
  <div class="flex flex-col justify-center gap-4 p-4 shadow-xl bg-base-100 rounded-box">

    <div class="px-6 pt-6">
      <div class="text-xl font-extrabold">Superpower settings</div>
      <div class="my-4 text-xs text-base-content text-opacity-60">Enable your favorite superpowers. Terms and conditions apply</div>

      <PromoDropdown title="toggle" desc="Use toggle to switch between two states" classes="flex-1 w-full" link="components/form/toggle"><div class="form-control">
        <label class="cursor-pointer label">
          <span class="label-text">Enable teleportation</span>
          <input type="checkbox" checked="checked" class="toggle toggle-primary">
        </label>
      </div>
      <div class="form-control">
        <label class="cursor-pointer label">
          <span class="label-text">Enable time travel</span>
          <input type="checkbox" checked="checked" class="toggle toggle-secondary">
        </label>
      </div>
      <div class="form-control">
        <label class="cursor-pointer label">
          <span class="label-text">Enable laser eyes</span>
          <input type="checkbox" checked="checked" class="toggle toggle-accent">
        </label>
      </div>
      <div class="form-control">
        <label class="cursor-pointer label">
          <span class="label-text">Enable immortality</span>
          <input type="checkbox" checked="checked" class="toggle">
        </label>
      </div>
      </PromoDropdown>
    </div>

    <div class="form-control">
      <PromoDropdown title="button" desc="Buttons come in various shapes, colors and sizes" classes="dropdown-top dropdown-end" link="components/button">
        <button class="space-x-2 btn btn-block btn-secondary">
          <Icon glyph="check" class="w-6 h-6 stroke-current" />
          <span>Apply settings</span>
        </button>
      </PromoDropdown>
    </div>
  </div>
</template>
