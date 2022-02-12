<script context="module">
  export async function load() {
    return {
      status: 302,
      redirect: "/components/checkbox",
    }
  }
</script>

<script>
  import { onMount } from "svelte"
  onMount(() => {
    window.location.href = "/components/checkbox"
  })
</script>
