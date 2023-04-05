<script context="module">
  export async function load() {
    return {
      status: 302,
      redirect: "https://codepen.io/pen?template=gOwWKvv",
    }
  }
</script>

<script>
  import { onMount } from "svelte"
  onMount(() => {
    window.location.href = "https://codepen.io/pen?template=gOwWKvv"
  })
</script>
