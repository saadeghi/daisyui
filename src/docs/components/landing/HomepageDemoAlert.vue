<template>
  <div class="grid items-stretch shadow-xl text-base-content bg-base-100 rounded-box">

    <div class="grid gap-4 p-4 place-content-center">

      <PromoDropdown title="alert" desc="Show alerts, warnings, notification or other info" classes="dropdown-end" link="components/alert">
        <Alert class="flex-col space-y-2">
          <div class="flex-1">
            <label class="mx-3 text-sm">Lorem ipsum dolor sit amet, consectetur adip!</label>
          </div>
          <div class="flex-none">
            <button class="mr-2 btn btn-sm btn-primary btn-outline">Cancel</button>
            <button class="btn btn-sm btn-primary">Apply</button>
          </div>
        </Alert>
      </PromoDropdown>
      <PromoDropdown title="alert" desc="Show alerts, warnings, notification or other info" classes="dropdown-end dropdown-top" link="components/alert">
        <Alert class="alert-info">
          <div class="flex-1">
            <Icon glyph="info" class="w-6 h-6 mx-2 stroke-current" />
            <label class="text-sm">Lorem ipsum dolor sit amet, consectetur adip!</label>
          </div>
        </Alert>
      </PromoDropdown>

      <PromoDropdown title="alert" desc="Show alerts, warnings, notification or other info" classes="dropdown-end dropdown-top" link="components/alert">
        <Alert class="alert-success">
          <div class="flex-1">
            <Icon glyph="folder" class="w-6 h-6 mx-2 stroke-current" />
            <label class="text-sm">Lorem ipsum dolor sit amet, consectetur adip!</label>
          </div>
        </Alert>
      </PromoDropdown>
    </div>
    </PromoDropdown>
  </div>
</template>
