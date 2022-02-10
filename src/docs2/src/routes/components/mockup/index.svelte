<script context="module">
  export async function load() {
    return {
      status: 302,
      redirect: "/components/mockup/code",
    }
  }
</script>

<script>
  import { onMount } from "svelte"
  onMount(() => {
    window.location.href = "/components/mockup/code"
  })
</script>
