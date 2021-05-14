<template>
  <div class="grid gap-4">
    <PromoDropdown title="pagination" desc="Pagination buttons in many colors and sizes!" classes="dropdown-end dropdown-top" link="components/pagination">
      <div class="grid gap-4">
        <div class="flex btn-group">
          <button class="flex-1 btn">1</button>
          <button class="flex-1 btn btn-active">2</button>
          <button class="flex-1 btn">3</button>
          <button class="flex-1 btn">4</button>
          <button class="flex-1 btn">5</button>
        </div>

        <div class="flex btn-group">
          <button class="flex-1 btn btn-outline">1</button>
          <button class="flex-1 btn btn-outline">2</button>
          <button class="flex-1 btn btn-outline">3</button>
          <button class="flex-1 btn btn-outline">4</button>
          <button class="flex-1 btn btn-outline">5</button>
        </div>
      </div>
    </PromoDropdown>
    <PromoDropdown title="tab" desc="Tab component with several sizes and styles" classes="dropdown-end dropdown-top" link="components/tab">
      <div class="items-center tabs tabs-boxed">
        <button class="flex-1 tab">Tab 1</button>
        <button class="flex-1 tab tab-active">Tab 2</button>
        <button class="flex-1 tab">Tab 3</button>
      </div>
    </PromoDropdown>
  </div>
</template>



