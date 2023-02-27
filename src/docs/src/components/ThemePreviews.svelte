<script>
  import { onMount } from "svelte"
  import { themes } from "@src/lib/data.js"
  import { themeChange } from "theme-change"
  onMount(() => {
    themeChange(false)
  })
</script>

<div class=" rounded-box grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
  {#each themes as theme}
    <div class="border-base-content/20 hover:border-base-content/40 outline-base-content overflow-hidden rounded-lg border outline outline-2 outline-offset-2" data-set-theme={theme.id} data-act-class="outline">
      <div data-theme={theme.id} class="bg-base-100 text-base-content w-full cursor-pointer font-sans">
        <div class="grid grid-cols-5 grid-rows-3">
          <div class="bg-base-200 col-start-1 row-span-2 row-start-1" />
          <div class="bg-base-300 col-start-1 row-start-3" />
          <div class="bg-base-100 col-span-4 col-start-2 row-span-3 row-start-1 flex flex-col gap-1 p-2">
            <div class="font-bold">
              {theme.id}
            </div>
            <div class="flex flex-wrap gap-1">
              <div class="bg-primary flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                <div class="text-primary-content text-sm font-bold">A</div>
              </div>
              <div class="bg-secondary flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                <div class="text-secondary-content text-sm font-bold">A</div>
              </div>
              <div class="bg-accent flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                <div class="text-accent-content text-sm font-bold">A</div>
              </div>
              <div class="bg-neutral flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                <div class="text-neutral-content text-sm font-bold">A</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  {/each}
</div>
