<script>
  import { page } from "$app/stores"
  import { onMount } from "svelte"
  onMount(() => {
    window.location.href = `/docs/${$page.params.slug}`
  })
</script>
