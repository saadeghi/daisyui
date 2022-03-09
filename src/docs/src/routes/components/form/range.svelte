<script context="module">
  export async function load() {
    return {
      status: 302,
      redirect: "/components/range",
    }
  }
</script>

<script>
  import { onMount } from "svelte"
  onMount(() => {
    window.location.href = "/components/range"
  })
</script>
