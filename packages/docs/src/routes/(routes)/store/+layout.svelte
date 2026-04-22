<script>
  import StoreFooter from "$components/StoreFooter.svelte"
  let { data, children } = $props()
</script>

<svelte:head>
  <script>
    window.lemonSqueezyAffiliateConfig = { store: "daisyui" }
  </script>
  <script src="https://lmsqueezy.com/affiliate.js" defer></script>
</svelte:head>
<div class="w-full px-4 pt-20 md:px-20" dir="ltr">
  {@render children?.()}
</div>

<StoreFooter />
