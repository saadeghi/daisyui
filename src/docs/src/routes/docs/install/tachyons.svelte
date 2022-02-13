<script context="module">
  export async function load() {
    return {
      status: 302,
      redirect: "/docs/tachyons",
    }
  }
</script>

<script>
  import { onMount } from "svelte"
  onMount(() => {
    window.location.href = "/docs/tachyons"
  })
</script>
