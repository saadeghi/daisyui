<template>
  <div class="grid shadow-xl rounded-box bg-base-100 text-base-content">
    <div class="grid w-full grid-cols-1 gap-4 p-4">
      <PromoDropdown title="button" desc="Buttons come in various shapes, colors and sizes" classes="" link="components/button">
        <div class="grid w-full grid-cols-2 gap-4">
          <button class="btn btn-block">Neutral</button>
          <button class="btn btn-block btn-primary">primary</button>
          <button class="btn btn-block btn-secondary">secondary</button>
          <button class="btn btn-block btn-accent">accent</button>
          <button class="btn btn-block btn-info">info</button>
          <button class="btn btn-block btn-success">success</button>
        </div>
      </PromoDropdown>
      <PromoDropdown title="button" desc="Buttons come in various shapes, colors and sizes" classes="dropdown-top" link="components/button">
          <div class="grid w-full grid-cols-2 gap-4">
            <button class="btn btn-block btn-warning">warning</button>
            <button class="btn btn-block btn-error">error</button>
            <button class="btn btn-block btn-outline">outline</button>
            <button class="btn btn-block btn-outline btn-primary">primary</button>
            <button class="btn btn-block btn-outline btn-secondary">secondary</button>
            <button class="btn btn-block btn-outline btn-accent">accent</button>
            <button class="btn btn-block btn-ghost">ghost</button>
            <button class="btn btn-block btn-link">link</button>
          </div>
        </PromoDropdown>
      </div>
  </div>
</template>
