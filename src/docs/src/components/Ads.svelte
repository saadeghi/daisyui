<script>
import { onMount } from "svelte"
import { fade } from "svelte/transition"
import Sponsors from "$components/Sponsors.svelte"
export let adslot

let showCarbon = false
onMount(async () => {
  setTimeout(() => {
    showCarbon = true
  }, 1000)
})
</script>

{#if adslot === "carbon1" && showCarbon}
  <div
    transition:fade={{ delay: 300 }}
    class="pointer-events-auto h-[100px] w-full min-w-[330px] max-w-[350px]"
  >
    {#if onMount}
      <script
        async
        type="text/javascript"
        src="//cdn.carbonads.com/carbon.js?serve=CEAI423U&placement=daisyuicom"
        id="_carbonads_js"
      ></script>
    {/if}
  </div>
{/if}
{#if adslot === "carbon2"}
  <div>
    <div class="sticky top-20 my-6 xl:mx-2 xl:my-0 xl:mt-32 xl:w-[130px]">
      <div class="hidden xl:block">
        <Sponsors />
      </div>
      <div class="h-6"></div>
      <div
        class="carbonads-responsive mx-auto flex min-h-[100px] items-center justify-center"
      >
        {#if onMount}
          <script
            async
            type="text/javascript"
            src="//cdn.carbonads.com/carbon.js?serve=CEAI423U&placement=daisyuicom"
            id="_carbonads_js"
          ></script>
        {/if}
      </div>
    </div>
  </div>
{/if}
