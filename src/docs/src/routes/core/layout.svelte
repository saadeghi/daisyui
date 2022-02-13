<script context="module">
  export async function load() {
    return {
      status: 302,
      redirect: "/docs/layout-and-typography",
    }
  }
</script>

<script>
  import { onMount } from "svelte"
  onMount(() => {
    window.location.href = "/docs/layout-and-typography"
  })
</script>
