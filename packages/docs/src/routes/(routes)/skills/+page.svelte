<script>
  import { PUBLIC_DAISYUI_API_PATH } from "$env/static/public"
  import { onMount } from "svelte"
  import SEO from "$components/SEO.svelte"
  import SkillProduct from "$components/SkillProduct.svelte"
  import { t } from "$lib/i18n.svelte.js"
  import { fade, slide } from "svelte/transition"
  import {
    discountDateFormat,
    fetchActiveDiscount,
    getProductCreemIds,
    isDiscountApplicableToProduct,
  } from "$lib/storeDiscount.js"
  let { data } = $props()
  let currentDate = $state(new Date().toISOString())
  $effect(() => {
    const interval = setInterval(() => {
      currentDate = new Date().toISOString()
    }, 1000)
    return () => clearInterval(interval)
  })

  let discount = $state(null)
  const fetchDiscount = fetchActiveDiscount(PUBLIC_DAISYUI_API_PATH)
  fetchDiscount.then((d) => {
    discount = d
  })

  function getProductDiscount(product) {
    if (!discount?.data?.attributes?.expires_at) return null
    if (new Date(discount.data.attributes.expires_at).toISOString() <= currentDate) return null
    const productIds = getProductCreemIds(product)
    if (!isDiscountApplicableToProduct(discount, productIds)) return null
    return discount.data.attributes
  }

  function convertCurrency(number) {
    const formatted = (number / 100).toFixed(2)
    if (formatted === "0.00") return "Free"
    return `$${formatted.endsWith(".00") ? formatted.slice(0, -3) : formatted}`
  }

  const dateFormat = discountDateFormat

  let isClipboardButtonPressed = $state(false)
  const copyText = (text) => {
    navigator.clipboard.writeText(text)
    isClipboardButtonPressed = true
    setTimeout(() => {
      isClipboardButtonPressed = false
    }, 2000)
  }

  let sortBy = $state("id")
  let selectedTech = $state("all")

  onMount(() => {
    const urlParams = new URLSearchParams(window.location.search)
    const filter = urlParams.get("filter") || "all"
    selectedTech = filter
  })

  let sortedFilteredProducts = $derived(
    data.products
      ? data.products
          .filter(
            (product) =>
              !selectedTech || selectedTech === "all" || product.tech?.includes(selectedTech),
          )
          .sort((a, b) => {
            if (sortBy === "price") {
              return a.price - b.price
            }
            if (sortBy === "id") {
              return a.id - b.id
            }
            if (sortBy === "new") {
              return new Date(b.created_at) - new Date(a.created_at)
            }
            if (sortBy === "updated") {
              return new Date(b.updated_at) - new Date(a.updated_at)
            }
            return 0
          })
      : [],
  )
</script>

<SEO
  title="daisyUI Skills"
  desc="daisyUI Skills - Tailwind CSS Skill"
  img="https://img.daisyui.com/images/skills.webp"
/>

<div class="flex flex-col gap-2">
  <h1 class="font-title text-base-content text-3xl font-extrabold lg:text-4xl">
    {$t("Official daisyUI Skills")}
  </h1>
  <p class="text-base-content/60 mb-2 text-sm">
    {$t("Enough with AI slop")} <span class="text-base-content">🙅</span>
    {$t("Setup your coding agent to generate better UI.")}
  </p>
  <div class="text-base-content/60 mt-6 text-sm">{$t("Compatible with all coding agents")}</div>
  <div class="mt-2 mb-6 flex flex-wrap gap-2">
    {#each data.codingTools as tool, index}
      <div class="bg-base-200 border-base-300 rounded-field tooltip p-3" data-tip={tool.name}>
        <img
          src="https://img.daisyui.com/images/logos/{tool.icon}.svg"
          alt={tool.name}
          width="20"
          height="20"
        />
      </div>
    {/each}
  </div>
</div>

<div>
  <div class="not-prose grid grid-cols-1 py-6 *:-ms-px *:-mt-px md:grid-cols-2 lg:grid-cols-3">
    {#each sortedFilteredProducts as product}
      <SkillProduct
        {product}
        productKey={product._key}
        {convertCurrency}
        productDiscount={getProductDiscount(product)}
      />
    {:else}
      <div class="list-row">{$t("Coming soon…")}</div>
    {/each}
  </div>
</div>
