<template>
  <div class="grid gap-4">

    <div class="shadow-xl bg-base-100 text-base-content rounded-box">
      <PromoDropdown title="checkbox" desc="Colorful, animated and accessible" classes="dropdown-end w-full dropdown-top" link="components/form/checkbox">
        <div class="flex justify-around p-4 space-x-4">
          <label aria-label="checkbox CSS component">
            <input type="checkbox" checked="checked" class="checkbox">
            <span class="checkbox-mark">
            </span>
          </label>
          <label aria-label="checkbox CSS component">
            <input type="checkbox" checked="checked" class="checkbox checkbox-primary">
            <span class="checkbox-mark">
            </span>
          </label>
          <label aria-label="checkbox CSS component">
            <input type="checkbox" checked="checked" class="checkbox checkbox-secondary">
            <span class="checkbox-mark">
            </span>
          </label>
          <label aria-label="checkbox CSS component">
            <input type="checkbox" checked="checked" class="checkbox checkbox-accent">
            <span class="checkbox-mark">
            </span>
          </label>
        </div>
      </PromoDropdown>
      <PromoDropdown title="radio" desc="Colorful, animated and accessible" classes="dropdown-end w-full" link="components/form/radio">
        <div class="flex justify-around p-4 space-x-4">
          <label aria-label="radio CSS component">
            <input type="radio" name="opt" class="radio">
            <span class="radio-mark">
            </span>
          </label>
          <label aria-label="radio CSS component">
            <input type="radio" name="opt" class="radio radio-primary">
            <span class="radio-mark">
            </span>
          </label>
          <label aria-label="radio CSS component">
            <input type="radio" name="opt" class="radio radio-secondary">
            <span class="radio-mark">
            </span>
          </label>
          <label aria-label="radio CSS component">
            <input type="radio" name="opt" class="radio radio-accent">
            <span class="radio-mark">
            </span>
          </label>
        </div>
      </PromoDropdown>
    </div>
  </div>
</template>



