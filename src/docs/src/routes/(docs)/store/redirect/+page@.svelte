<script>
import { onMount } from "svelte"
import { page } from "$app/stores"
import { goto } from "$app/navigation"
import { browser } from "$app/environment"

function validate_id({ input, length }) {
  const regex = new RegExp(`^[a-zA-Z0-9-]{${length}}$`)
  if (regex.test(input)) {
    return input
  }
  if (browser) {
    goto("/store")
  }
  return null
}

const product_id = validate_id({ input: $page.url.searchParams.get("product_id"), length: 36 })
// const aff = validate_id({ input: $page.url.searchParams.get("aff"), length: 5 })

onMount(() => {
  window.location.href = `https://daisyui.lemonsqueezy.com/checkout/buy/${product_id}?aff_ref=${LemonSqueezy.Affiliate.GetId()}`
})
</script>
<svelte:head>
  <meta name="robots" content="noindex">
  <script src="https://app.lemonsqueezy.com/js/lemon.js"></script>
</svelte:head>




