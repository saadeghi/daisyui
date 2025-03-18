<script>
  import Carbon from "$components/Carbon.svelte"
</script>

<div>
  <div class="sticky top-20 my-6 xl:mx-2 xl:my-0 xl:mt-32 xl:w-[130px]">
    <div class="h-6"></div>
    {#if import.meta.env.DEV}
      <div
        class="carbonads-responsive bg-base-200 rounded-box mx-auto flex min-h-[100px] items-center justify-center max-xl:w-[22rem] xl:h-[13rem]"
      >
        <div class="text-base-content/30 text-xs">Ads</div>
      </div>
    {:else}
      <div class="carbonads-responsive mx-auto flex min-h-[100px] items-center justify-center">
        <Carbon />
      </div>
    {/if}
  </div>
</div>
