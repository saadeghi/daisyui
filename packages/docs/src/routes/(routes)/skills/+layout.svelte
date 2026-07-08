<script>
  import "../../../global.css"
  import StoreFooter from "$components/StoreFooter.svelte"
  let { data, children } = $props()
</script>

<div class="w-full px-4 pt-20 md:px-20!" dir="ltr">
  {@render children?.()}
</div>

<StoreFooter />
