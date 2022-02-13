<script context="module">
  export async function load() {
    return {
      status: 302,
      redirect: "/docs/windicss",
    }
  }
</script>

<script>
  import { onMount } from "svelte"
  onMount(() => {
    window.location.href = "/docs/windicss"
  })
</script>
