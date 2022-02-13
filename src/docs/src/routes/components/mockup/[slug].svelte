<script>
  import { page } from "$app/stores"
  import { onMount } from "svelte"
  onMount(() => {
    window.location.href = `/components/${$page.params.slug}`
  })
</script>
