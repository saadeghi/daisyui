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
    <div class="carbonads-responsive mx-auto flex min-h-[100px] items-center justify-center">
      <Carbon />
    </div>
  </div>
</div>
