<template>
  <Card class="overflow-visible shadow-lg bg-base-100">
    <div class="flex-row items-center px-4 space-x-4 card-body">
      <div class="flex-1">
        <h2 class="flex mb-0 card-title">
          <PromoDropdown title="loading button" desc="Buttons can get loadings state using a simple class" classes="dropdown-top" link="components/button">
            <button class="btn btn-ghost btn-sm btn-circle loading" aria-label="loading button">
            </button>
          </PromoDropdown>
          Downloading...
        </h2>
        <PromoDropdown title="progress" desc="Show progressbar, loadings or simple bar charts using progress component" classes="w-full dropdown-top" link="components/progress">
          <progress class="progress progress-secondary" value="70" max="100">
          </progress>
        </PromoDropdown>
      </div>
      <div class="flex-0">
        <PromoDropdown title="button" desc="Buttons come in various shapes, colors and sizes" classes="dropdown-top dropdown-end" link="components/button">
          <button class="btn btn-circle" aria-label="circle button component">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12">
              </path>
            </svg>
          </button>
        </PromoDropdown>
      </div>
    </div>
  </Card>
</template>



