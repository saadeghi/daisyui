<script context="module">
  export async function load() {
    return {
      status: 302,
      redirect: "/docs/tailwindcss",
    }
  }
</script>

<script>
  import { onMount } from "svelte"
  onMount(() => {
    window.location.href = "/docs/tailwindcss"
  })
</script>
