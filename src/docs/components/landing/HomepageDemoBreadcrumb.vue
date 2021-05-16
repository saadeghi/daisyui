<template>
  <div class="grid gap-4">



    <div class="flex items-center shadow-xl text-primary-content bg-neutral text-neutral-content rounded-box">
      <PromoDropdown title="breadcrumbs" desc="Make a better navigation with breadcrumbs!" classes="dropdown-top" link="components/breadcrumbs">
        <div class="px-4 text-sm breadcrumbs">
          <ul>
            <li>
              <a href="#" v-on:click.stop.prevent>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="w-4 h-4 mr-2 stroke-current">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z">
                  </path>
                </svg>
                Documents
              </a>
            </li>
            <li>
              <a href="#" v-on:click.stop.prevent>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="w-4 h-4 mr-2 stroke-current">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z">
                  </path>
                </svg>
                Add Document
              </a>
            </li>
          </ul>
        </div>
      </PromoDropdown>
    </div>


    <div class="flex items-center p-4 shadow-xl rounded-box bg-accent text-accent-content">
      <div class="flex-1 px-2">
        <h2 class="text-3xl font-extrabold">4,600</h2>
        <p class="text-sm text-opacity-80">Page views</p>
      </div>
      <div class="flex-0">
        <PromoDropdown title="button" desc="Buttons come in various shapes, colors and sizes" classes="dropdown-top dropdown-end" link="components/button">
          <div class="flex space-x-1">
            <Button classes="btn-ghost btn-square" aria-label="button component">
              <Icon glyph="eye" class="inline-block w-6 h-6 stroke-current" />
            </Button>
            <Button classes="btn-ghost btn-square" aria-label="button component">
              <Icon glyph="dots" class="inline-block w-6 h-6 stroke-current" />
            </Button>
          </div>
        </PromoDropdown>
      </div>
    </div>
  </div>
</template>



