<script context="module">
  export async function load() {
    return {
      status: 302,
      redirect: "/docs/themes",
    }
  }
</script>

<script>
  import { onMount } from "svelte"
  onMount(() => {
    window.location.href = "/docs/themes"
  })
</script>
