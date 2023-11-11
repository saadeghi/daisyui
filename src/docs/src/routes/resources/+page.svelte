<script context="module">
  export async function load() {
    return {
      status: 302,
      redirect: "/resources/videos/",
    }
  }
</script>

<script>
  import { onMount } from "svelte"
  onMount(() => {
    window.location.href = "/resources/videos/"
  })
</script>
