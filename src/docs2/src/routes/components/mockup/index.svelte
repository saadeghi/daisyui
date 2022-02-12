<script context="module">
  export async function load() {
    return {
      status: 302,
      redirect: "/components/code",
    }
  }
</script>

<script>
  import { onMount } from "svelte"
  onMount(() => {
    window.location.href = "/components/code"
  })
</script>
