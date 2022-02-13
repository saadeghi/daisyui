<script>
  export let size = 1
</script>

{#if size === 1}
  <div class="bg-base-300 mx-auto mb-6 flex h-[50px] w-[300px] items-center justify-center md:hidden">300x50</div>
{:else if size === 2}
  <div class="bg-base-300 md:flex mb-6 lg:hidden hidden justify-center h-[90px] w-[728px] items-center mx-auto">728x90</div>
{:else if size === 3}
  <div class="bg-base-300 lg:flex mb-6 xl:hidden hidden justify-center h-[60px] w-[468px] items-center mx-auto">468x60</div>
{:else if size === 4}
  <div class="bg-base-300 hidden h-[600px] w-[160px] items-center justify-center xl:flex 2xl:hidden mx-auto">160x600</div>
{:else if size === 5}
  <div class="bg-base-300 hidden h-[600px] w-[300px] items-center justify-center 2xl:flex mx-auto">300x600</div>
{/if}
