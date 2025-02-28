<script>
  import Sponsors from "$components/Sponsors.svelte"
  import Carbon from "$components/Carbon.svelte"
</script>

<div>
  <div class="sticky top-20 my-6 xl:mx-2 xl:my-0 xl:mt-32 xl:w-[130px]">
    <div class="hidden xl:block">
      <Sponsors />
    </div>
    <div class="h-6"></div>
    {#if import.meta.env.DEV}
      <div
        class="carbonads-responsive mx-auto max-xl:w-[22rem] xl:h-[13rem] bg-base-200 rounded-box flex min-h-[100px] items-center justify-center"
      >
        <div class="text-xs text-base-content/30">Ads</div>
      </div>
    {:else}
      <div class="carbonads-responsive mx-auto flex min-h-[100px] items-center justify-center">
        <Carbon />
      </div>
    {/if}
  </div>
</div>
