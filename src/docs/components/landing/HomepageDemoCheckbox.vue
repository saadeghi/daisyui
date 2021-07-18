<template>
  <div class="grid gap-4">

    <div class="shadow-xl bg-base-100 text-base-content rounded-box">
      <PromoDropdown title="checkbox" desc="Colorful, animated and accessible" classes="dropdown-end w-full dropdown-top" link="components/form/checkbox">
        <div class="flex justify-around p-4 space-x-4">
          <label aria-label="checkbox CSS component">
            <input type="checkbox" checked="checked" class="checkbox">
          </label>
          <label aria-label="checkbox CSS component">
            <input type="checkbox" checked="checked" class="checkbox checkbox-primary">
          </label>
          <label aria-label="checkbox CSS component">
            <input type="checkbox" checked="checked" class="checkbox checkbox-secondary">
          </label>
          <label aria-label="checkbox CSS component">
            <input type="checkbox" checked="checked" class="checkbox checkbox-accent">
          </label>
        </div>
      </PromoDropdown>
      <PromoDropdown title="radio" desc="Colorful, animated and accessible" classes="dropdown-end w-full" link="components/form/radio">
        <div class="flex justify-around p-4 space-x-4">
          <label aria-label="radio CSS component">
            <input type="radio" name="opt" class="radio">
          </label>
          <label aria-label="radio CSS component">
            <input type="radio" name="opt" class="radio radio-primary">
          </label>
          <label aria-label="radio CSS component">
            <input type="radio" name="opt" class="radio radio-secondary">
          </label>
          <label aria-label="radio CSS component">
            <input type="radio" name="opt" class="radio radio-accent">
          </label>
        </div>
      </PromoDropdown>
    </div>
  </div>
</template>



