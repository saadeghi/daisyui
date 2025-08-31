<script>
  import { PUBLIC_DAISYUI_API_PATH } from "$env/static/public"
  import SEO from "$components/SEO.svelte"
  import StoreProduct from "$components/StoreProduct.svelte"
  import Countdown from "svelte-countdown"
  import { fade, slide } from "svelte/transition"

  let { data } = $props()

  // let currentIndex = $state(0)

  // function next() {
  //   currentIndex = (currentIndex + 1) % data.product.media.length
  // }

  // function prev() {
  //   currentIndex = (currentIndex - 1 + data.product.media.length) % data.product.media.length
  // }

  function convertCurrency(number) {
    const formatted = (number / 100).toFixed(2)
    return `$${formatted.endsWith(".00") ? formatted.slice(0, -3) : formatted}`
  }

  function extractUUID(url) {
    const regex = /\/buy\/([a-f0-9-]{36})(?:\?|$)/
    const match = url.match(regex)
    return match ? match[1] : null
  }

  function renderBuyNowUrl(url, ref, params) {
    if (!url) {
      return "#packages"
    }
    if (ref) {
      return `/store/checkout?product=${extractUUID(url)}&aff=${ref}${params ? `&${params}` : ""}`
    }
    return `${url}${params ? `?${params}` : ""}`
  }

  function hasAllSameTag(product1, product2) {
    return (
      product1.tags &&
      product2.tags &&
      product1.tags.length === product2.tags.length &&
      product1.tags.every((tags) => product2.tags.includes(tags))
    )
  }
  function getSimilarProducts(product, allProducts) {
    // Filter for products with all the same tags
    const allSameTagProducts = allProducts.filter(
      (p) => p.id !== product.id && hasAllSameTag(product, p),
    )

    // Filter for products with at least one overlapping tags
    const someSameTagProducts = allProducts.filter(
      (p) => p.id !== product.id && p.tags && p.tags.some((t) => product.tags.includes(t)),
    )

    // Combine, remove duplicates, and limit to 3
    const similarProducts = [...allSameTagProducts, ...someSameTagProducts]
      .filter((product, index, self) => index === self.findIndex((p) => p.id === product.id))
      .slice(0, 2)

    return similarProducts
  }

  function getLinksIcon(link) {
    switch (link) {
      case "license":
        return `
          <svg class="inline-block size-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <g stroke-linejoin="round" stroke-linecap="round" stroke-width="2" fill="none" stroke="currentColor">
              <path d="M7 20l10 0"></path>
              <path d="M6 6l6 -1l6 1"></path>
              <path d="M12 3l0 17"></path>
              <path d="M9 12l-3 -6l-3 6a3 3 0 0 0 6 0"></path>
              <path d="M21 12l-3 -6l-3 6a3 3 0 0 0 6 0"></path>
            </g>
          </svg>
        `
      case "screenshot":
        return `
          <svg class="inline-block size-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <g stroke-linejoin="round" stroke-linecap="round" stroke-width="2" fill="none" stroke="currentColor">
              <circle cx="11" cy="11" r="8"></circle>
              <path d="M21 21L16.65 16.65"></path>
              <path d="M11 8L11 14"></path>
              <path d="M8 11L14 11"></path>
            </g>
          </svg>
        `
      case "preview":
        return `
          <svg class="inline-block size-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <g stroke-linejoin="round" stroke-linecap="round" stroke-width="2" fill="none" stroke="currentColor">
              <path d="M10 7.75a.75.75 0 0 1 1.142-.638l3.664 2.249a.75.75 0 0 1 0 1.278l-3.664 2.25a.75.75 0 0 1-1.142-.64z"></path>
              <path d="M12 17v4"></path>
              <path d="M8 21h8"></path>
              <rect x="2" y="3" width="20" height="14" rx="2"></rect>
            </g>
          </svg>
        `
      default:
        return ""
    }
  }

  let screenshotDialog = $state()
  let licenseDialog = $state()
  let screenshotUrl = $state("")
  let licenseContent = $state("")
  const openModal = async (url) => {
    const response = await fetch(url)
    licenseContent = await response.text()
    licenseDialog.showModal()
  }

  const dateFormat = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  }

  let isClipboardButtonPressed = $state(false)
  const copyText = (text) => {
    navigator.clipboard.writeText(text)
    isClipboardButtonPressed = true
    setTimeout(() => {
      isClipboardButtonPressed = false
    }, 2000)
  }

  let currentDate = $state(new Date().toISOString())
  $effect(() => {
    const interval = setInterval(() => {
      currentDate = new Date().toISOString()
    }, 1000)
    return () => clearInterval(interval)
  })

  const isDiscountValid = (discount) => {
    if (discount.data?.attributes.expires_at) {
      const expiresAt = new Date(discount.data.attributes.expires_at).toISOString()
      const currentDate = new Date().toISOString()
      return expiresAt > currentDate
    }
    return false
  }
  const fetchDiscount = (async () => {
    // Fetch both discount types
    const [shorttimeDiscountResponse, specialDiscountResponse] = await Promise.all([
      fetch(`${PUBLIC_DAISYUI_API_PATH}/api/discount_shorttime.json`),
      fetch(`${PUBLIC_DAISYUI_API_PATH}/api/discount_special.json`),
    ])

    // Parse the JSON responses
    const shorttimeDiscount = await shorttimeDiscountResponse.json()
    const specialDiscount = await specialDiscountResponse.json()

    // Check if special discount exists and is still valid
    if (isDiscountValid(specialDiscount)) {
      return specialDiscount
    }

    // Check if short-time discount exists and is still valid
    if (isDiscountValid(shorttimeDiscount)) {
      return shorttimeDiscount
    }

    // If neither discount is valid, return null or handle accordingly
    return null
  })()
</script>

<SEO title={`${data.product.title} - daisyUI Store`} desc={data.product.desc} />

<div>
  <a class="btn btn-ghost group" href="/store/" data-sveltekit-preload-data>
    <svg
      class="inline-block size-4 transition-transform group-hover:-translate-x-0.5"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
    >
      <g fill="currentColor">
        <line
          x1="17"
          y1="10"
          x2="3"
          y2="10"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
        >
        </line>
        <polyline
          points="8 5 3 10 8 15"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
        >
        </polyline>
      </g>
    </svg>
    <span class="text-sm">Back to store</span>
  </a>
</div>

{#await fetchDiscount then discount}
  {#if discount?.data.attributes.expires_at && new Date(discount?.data.attributes.expires_at).toISOString() > currentDate}
    <div class="my-12">
      <div
        class="alert bg-neutral text-neutral-content min-h-24 border-transparent"
        transition:slide={{ duration: 400 }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="mx-4 size-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21 11.25v8.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 1 0 9.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1 1 14.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
          />
        </svg>
        <div
          class="flex w-full flex-col items-center justify-between gap-10 sm:flex-row"
          transition:fade={{ duration: 400 }}
        >
          <div class="flex flex-col gap-1">
            <h2 class="text-lg font-bold">
              {discount.data.attributes.name}
            </h2>
            <div class="text-neutral-content/70 text-sm [text-wrap:balance]">
              Use <span
                data-tip={isClipboardButtonPressed ? "copied" : "copy"}
                class="tooltip tooltip-info"
              >
                <button
                  class="badge badge-info cursor-copy px-2 font-mono tracking-wide"
                  onclick={() => copyText(discount.data.attributes.code)}
                >
                  {discount.data.attributes.code}
                </button>
              </span>
              code at checkout to get {discount.data.attributes.amount}% discount on all products.
            </div>
          </div>

          {#if discount.data.attributes.expires_at}
            <Countdown
              from={new Date(discount.data.attributes.expires_at).toLocaleString(
                "en-GB",
                dateFormat,
              )}
              dateFormat="DD/MM/YYYY, HH:mm:ss"
            >
              {#snippet children({ remaining })}
                {#if remaining.done === false}
                  <div
                    class="tooltip shrink-0 after:hidden"
                    data-tip="Remaining time"
                    transition:fade={{ duration: 400 }}
                  >
                    <date
                      datetime={new Date(discount.data.attributes.expires_at).toLocaleString(
                        "en-GB",
                        dateFormat,
                      )}
                      class={`grid ${remaining.days > 0 ? "grid-cols-4" : "grid-cols-3"} gap-2 text-center font-mono text-xs`}
                    >
                      {#if remaining.days > 0}
                        <div
                          class="border-neutral-content/40 rounded-field border border-dashed p-2"
                        >
                          <span class="countdown block text-2xl">
                            <span style={`--value:${remaining.days};`}></span>
                          </span>
                          <span class="text-neutral-content/40 text-xs">day</span>
                        </div>
                      {/if}
                      <div class="border-neutral-content/40 rounded-field border border-dashed p-2">
                        <span class="countdown block text-2xl">
                          <span style={`--value:${remaining.hours};`}></span>
                        </span>
                        <span class="text-neutral-content/40 text-xs">hour</span>
                      </div>
                      <div class="border-neutral-content/40 rounded-field border border-dashed p-2">
                        <span class="countdown block text-2xl">
                          <span style={`--value:${remaining.minutes};`}></span>
                        </span>
                        <span class="text-neutral-content/40 text-xs">min</span>
                      </div>
                      <div class="border-neutral-content/40 rounded-field border border-dashed p-2">
                        <span class="countdown block text-2xl">
                          <span style={`--value:${remaining.seconds};`}></span>
                        </span>
                        <span class="text-neutral-content/40 text-xs">sec</span>
                      </div>
                    </date>
                  </div>
                {:else if !data}
                  <div
                    class="text-neutral-content/20 rounded-field shrink-0 border border-dashed p-2"
                  >
                    Ended
                  </div>
                {/if}
              {/snippet}
            </Countdown>
          {/if}
        </div>
      </div>
    </div>
  {/if}
{/await}

<div class="mx-auto py-10">
  <div class="grid gap-12 xl:grid-cols-12">
    <!-- Product Images/Media -->
    <div class="flex flex-col gap-4 xl:col-span-7">
      <div class="relative max-xl:-mx-4 max-xl:overflow-x-auto md:max-xl:-mx-20">
        <div class="flex gap-6 max-xl:w-screen xl:flex-col xl:gap-16">
          <div class="w-px shrink-0 xl:hidden"></div>
          {#each data.product.media as media, index}
            <div
              class="rounded-box no-shadow-[0px_-1px_12px_-3px_rgba(0,_0,_0,_0.2),0px_0px_2px_0px_rgba(0,_0,_0,_0.1)] shrink-0 overflow-hidden shadow-[0_3px_oklch(0%_0_0/0.05),0_0_0_1px_oklch(0%_0_0/0.05)] max-xl:h-[45vh] xl:w-full"
            >
              {#if media.type === "video"}
                <div class="max-xl:h-full xl:w-full" style={`aspect-ratio: ${media.ratio};`}>
                  <iframe
                    class="h-full w-full"
                    src={media.url}
                    title={data.product.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
              {:else if media.type === "image"}
                <img
                  src={media.lg}
                  alt={data.product.title}
                  class="h-full w-full bg-cover object-cover text-transparent"
                  style={`background-image:url(${media.sm});`}
                />
              {/if}
            </div>
          {/each}
          <div class="w-px shrink-0 xl:hidden"></div>
        </div>
      </div>
    </div>

    <!-- Product Info -->
    <div class="xl:col-span-5">
      <div class="sticky top-20 flex flex-col gap-6">
        <div class="flex flex-col gap-2">
          {#if data.product.badge}
            <span
              class={`badge  badge-soft flex gap-1 rounded-full ps-1 text-xs shadow-xs ${data.product.badge.class}`}
            >
              {#if data.product.badge.icon === "check"}
                <svg class="size-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                  <g fill="none">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15ZM11.8435 6.20859C12.0967 5.88082 12.0363 5.40981 11.7086 5.15654C11.3808 4.90327 10.9098 4.96365 10.6565 5.29141L6.95615 10.0801L5.30747 8.24828C5.03038 7.94039 4.55616 7.91543 4.24828 8.19253C3.94039 8.46962 3.91544 8.94384 4.19253 9.25172L6.44253 11.7517C6.59132 11.917 6.80582 12.0078 7.02809 11.9995C7.25036 11.9911 7.45746 11.8846 7.59346 11.7086L11.8435 6.20859Z"
                      fill="currentColor"
                    >
                    </path>
                  </g>
                </svg>
              {/if}
              {#if data.product.badge.icon === "wait"}
                <svg class="size-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                  <g fill="none">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8ZM8.75 3.75C8.75 3.33579 8.41421 3 8 3C7.58579 3 7.25 3.33579 7.25 3.75V8C7.25 8.41421 7.58579 8.75 8 8.75H11.25C11.6642 8.75 12 8.41421 12 8C12 7.58579 11.6642 7.25 11.25 7.25H8.75V3.75Z"
                      fill="currentColor"
                    >
                    </path>
                  </g>
                </svg>
              {/if}
              {data.product.badge.text}
            </span>
          {/if}

          <h1 class="font-title text-4xl font-bold">{data.product.title}</h1>
        </div>
        <div class="flex items-start justify-between gap-2">
          <div class="flex gap-2">
            {#if data.product.originalprice}
              <span class="text-2xl line-through opacity-40">
                {convertCurrency(data.product.originalprice)}
              </span>
            {/if}
            <span class="flex flex-col">
              <span class="flex items-center gap-2">
                {#if data.product.displayprice}
                  <span class="font-title text-2xl font-light xl:text-5xl">
                    {convertCurrency(data.product.displayprice)}
                  </span>
                {:else if data.product.from_price && data.product.to_price && data.product.from_price !== data.product.to_price}
                  From
                  <span class="font-title text-2xl font-light xl:text-5xl">
                    {convertCurrency(data.product.from_price)}
                  </span>
                  to
                  <span class="font-title text-2xl font-light xl:text-5xl">
                    {convertCurrency(data.product.to_price)}
                  </span>
                {:else}
                  <span class="font-title text-2xl font-light xl:text-5xl">
                    {convertCurrency(data.product.price)}
                  </span>
                {/if}
              </span>

              {#if data.product.displaypricenote}
                <span class="text-sm italic opacity-40">
                  {data.product.displaypricenote}
                </span>
              {/if}
            </span>
          </div>
          <div class="flex flex-col items-center gap-3">
            {#if data.product.buy_now_url}
              <a
                href={renderBuyNowUrl(
                  data.product.buy_now_url,
                  data.product.ref,
                  data.product.params,
                )}
                class="btn btn-lg btn-success group shrink-0 rounded-full whitespace-nowrap xl:px-10"
                target={data.product.buy_now_url ? "_blank" : undefined}
                rel={data.product.buy_now_url ? "noopener noreferrer" : undefined}
              >
                Buy now
                <span class="flex gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="hidden size-6 transition-transform duration-300 group-hover:translate-x-1 md:inline-block"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    >
                    </path>
                  </svg>
                </span>
              </a>
            {:else}
              <a
                href="#packages"
                class="btn btn-lg btn-success group shrink-0 rounded-full whitespace-nowrap xl:px-10"
              >
                Get now
                <span class="flex gap-2">
                  <svg
                    class="hidden size-6 transition-transform duration-300 group-hover:translate-y-0.5 md:inline-block"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <g
                      stroke-linejoin="round"
                      stroke-linecap="round"
                      stroke-width="2"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path d="M12 5v14"></path>
                      <path d="m19 12-7 7-7-7"></path>
                    </g>
                  </svg>
                </span>
              </a>
            {/if}
          </div>
        </div>

        {#if data.product.desc}
          <div class="prose prose-sm max-w-none ps-0! [&_ul>li>p]:my-0">
            {@html data.product.desc}
          </div>
        {/if}
        <!-- {#if data.product.attributes.description}
        <div class="prose prose-sm max-w-none ps-0! [&_ul>li>p]:my-0">
          {@html data.product.attributes.description}
        </div>
      {/if} -->

        <div
          class="border-base-300 rounded-box divide-base-300 bg-base-100/60 sticky bottom-4 my-6 grid divide-x overflow-hidden border text-xs backdrop-blur-sm"
          style={`grid-template-columns: repeat(${Object.keys(data.product.links).length}, minmax(0, 1fr));`}
        >
          {#each Object.entries(data.product.links) as [link, value]}
            {#if link === "license"}
              <div>
                <a
                  href={value}
                  class="flex w-full cursor-pointer flex-col items-center gap-2 p-4 text-center capitalize transition-colors *:opacity-50 *:transition-opacity hover:*:opacity-100 focus-visible:outline focus-visible:-outline-offset-2 md:p-6"
                  onclick={(e) => (e.preventDefault(), openModal(value))}
                >
                  {@html getLinksIcon(link)}
                  <span>{link}</span>
                </a>
                <dialog class="modal max-md:modal-bottom" bind:this={licenseDialog}>
                  <div
                    class="modal-box max-h-[80vh] w-full max-w-[50rem] max-md:max-h-[80vh] lg:p-20"
                  >
                    <h3 class="text-lg font-bold">{data.product.title} License</h3>
                    <pre class="py-4 whitespace-pre-wrap">{licenseContent}</pre>
                  </div>
                  <form method="dialog" class="modal-backdrop">
                    <button>close</button>
                  </form>
                </dialog>
              </div>
            {:else if link === "screenshot"}
              <div>
                <a
                  href={value}
                  class="flex w-full cursor-pointer flex-col items-center gap-2 p-4 text-center capitalize transition-colors *:opacity-50 *:transition-opacity hover:*:opacity-100 focus-visible:outline focus-visible:-outline-offset-2 md:p-6"
                  onclick={(e) => {
                    e.preventDefault(), screenshotDialog.showModal()
                    screenshotUrl = value
                  }}
                >
                  {@html getLinksIcon(link)}
                  <span>{link}</span>
                </a>
                <dialog class="modal max-md:modal-bottom" bind:this={screenshotDialog}>
                  <div class="modal-box max-h-[80vh] w-full max-w-[90vw] p-0 max-md:max-h-[80vh]">
                    <img src={screenshotUrl} alt="Screenshot" class="h-full w-full object-cover" />
                  </div>
                  <form method="dialog" class="modal-backdrop">
                    <button>close</button>
                  </form>
                </dialog>
              </div>
            {:else}
              <a
                target="_blank"
                aria-label={link}
                href={value}
                rel="noopener noreferrer"
                class="flex flex-col items-center gap-2 p-6 text-center capitalize *:opacity-50 hover:*:opacity-100"
              >
                {@html getLinksIcon(link)}
                <span>{link}</span>
              </a>
            {/if}
          {/each}
        </div>

        {#if data.product.tech}
          <div class="flex items-center gap-4 lg:gap-8">
            <span class="text-base-content/60 text-sm">Made with:</span>
            {#each data.product.tech as tech}
              <div class="tooltip" data-tip={data.tech[tech]}>
                <img
                  class="size-6 lg:size-8"
                  src={`https://img.daisyui.com/images/logos/${tech}.svg`}
                  alt={tech}
                />
              </div>
            {/each}
          </div>
        {/if}

        {#if data.product.quote}
          <div>
            {#each data.product.quote.text as text, index}
              <div class="chat chat-end p-0">
                <div
                  class={`chat-bubble bg-base-200 text-base-content mt-1 max-w-md text-xs ${index !== data.product.quote.text.length - 1 ? "[.chat-end>&]:rounded-field before:hidden" : ""}`}
                >
                  <p class="py-1">{@html text}</p>
                </div>
                <div class="chat-image avatar">
                  <div class="w-10 rounded-full">
                    {#if index === data.product.quote.text.length - 1}
                      <img alt={data.product.quote.name} src={data.product.quote.img} />
                    {/if}
                  </div>
                </div>
              </div>
            {/each}
          </div>
        {/if}
      </div>
    </div>
  </div>
  <div class="mt-40 mb-20" id="packages">
    {#if data.product.packages}
      <!-- Extract package headers (excluding first column) -->
      {@const packageHeaders = data.product.packages[0].slice(1)}

      <!-- Extract all rows except header -->
      {@const packageRows = data.product.packages.slice(1)}

      <!-- Extract price and checkout rows -->
      {@const priceRow = packageRows.find((row) => row[0] === "price")}
      {@const checkoutRow = packageRows.find((row) => row[0] === "checkout")}
      {@const popularRow = packageRows.find((row) => row[0] === "popular")}

      <!-- Filter out price, checkout, and popular rows from feature rows -->
      {@const featureRows = packageRows.filter(
        (row) => row[0] !== "price" && row[0] !== "checkout" && row[0] !== "popular",
      )}

      <div class="grid gap-6 lg:grid-cols-3 xl:gap-8">
        {#each packageHeaders as packageName, packageIndex}
          {@const isHighlighted = popularRow && popularRow[packageIndex + 1] === true}
          <div
            class={`card group bg-base-200 relative flex flex-col border ${isHighlighted ? "border-success/20 -m-1 border-4" : "border-base-300"}`}
          >
            {#if isHighlighted}
              <div
                class="badge badge-success badge-xs font-title absolute start-4 -top-2.5 z-12 font-semibold tracking-widest uppercase"
              >
                <svg class="size-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12">
                  <path
                    d="m11.95,4.323c-.12-.371-.435-.635-.818-.69l-2.918-.424-1.304-2.641c-.344-.699-1.477-.698-1.82-.001l-1.304,2.643-2.917.424c-.385.055-.699.32-.819.69-.12.37-.021.769.257,1.04l2.111,2.058-.499,2.905c-.065.383.089.763.402.991.313.229.725.26,1.069.079l2.609-1.372,2.61,1.372c.149.078.311.117.472.117.21,0,.419-.066.597-.196.313-.229.468-.608.402-.991l-.499-2.905,2.11-2.058c.279-.271.378-.67.258-1.04Z"
                    stroke-width="0"
                    fill="currentColor"
                  >
                  </path>
                </svg>
                Popular
              </div>
            {/if}
            <!-- Sticky header: Package name and price -->
            <div
              class="rounded-box from-base-200 via-base-200 sticky top-16 z-11 bg-gradient-to-b via-80%"
            >
              <div class="card-body pb-4">
                <!-- Package name -->
                <h3
                  class="card-title font-title mb-2 justify-center text-center text-xl font-semibold"
                >
                  {packageName}
                </h3>

                <!-- Price -->
                {#if priceRow && priceRow[packageIndex + 1] && typeof priceRow[packageIndex + 1] === "number"}
                  <div class="text-center">
                    <div class="font-title text-2xl font-thin tabular-nums">
                      {convertCurrency(priceRow[packageIndex + 1])}
                    </div>
                  </div>
                {/if}
              </div>
            </div>

            <!-- Scrollable features content -->
            <div class="flex-1 overflow-y-auto">
              <div class="card-body px-4 pt-4">
                <!-- Features list -->
                <div class="flex flex-col gap-1">
                  {#each featureRows as row, rowIndex}
                    {@const featureName = row[0]}
                    {@const featureValue = row[packageIndex + 1]}
                    {@const prevFeatureValue = packageIndex > 0 ? row[packageIndex] : undefined}
                    {@const isDifferent =
                      packageIndex > 0 &&
                      JSON.stringify(featureValue) !== JSON.stringify(prevFeatureValue)}

                    {#if featureName && featureValue !== null && featureValue !== undefined}
                      <div
                        class={`flex items-center justify-between px-4 py-1 text-xs ${isDifferent ? "group-hover:bg-success/15 rounded-field group-hover:scale-102" : ""}`}
                        style={`transition: scale 0.2s ease-in-out ${rowIndex * 30}ms, background-color 0.2s ease-in-out ${rowIndex * 30}ms`}
                      >
                        <span class="text-base-content/70">{featureName}</span>
                        <div class="flex items-center">
                          {#if typeof featureValue === "boolean"}
                            {#if featureValue}
                              <svg
                                aria-label="Yes"
                                xmlns="http://www.w3.org/2000/svg"
                                class="text-success size-5"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  fill="none"
                                  stroke="currentColor"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="3"
                                  d="M5 12l5 5L20 7"
                                />
                              </svg>
                            {:else}
                              <svg
                                aria-label="No"
                                xmlns="http://www.w3.org/2000/svg"
                                class="text-error size-5"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  fill="none"
                                  stroke="currentColor"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="3"
                                  d="M18 6L6 18M6 6l12 12"
                                />
                              </svg>
                            {/if}
                          {:else}
                            <span class="font-medium whitespace-nowrap">{featureValue}</span>
                          {/if}
                        </div>
                      </div>
                    {/if}
                  {/each}
                </div>
              </div>
            </div>

            <!-- Sticky footer: Buy button -->
            {#if checkoutRow && checkoutRow[packageIndex + 1]}
              <div
                class="rounded-box from-base-200 via-base-200 sticky bottom-0 z-10 bg-gradient-to-t via-80%"
              >
                <div class="card-body pt-4">
                  <div class="card-actions justify-center">
                    <a
                      href={checkoutRow[packageIndex + 1]}
                      class={`btn btn-block btn-success ${isHighlighted ? "btn-lg" : ""}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>Buy Now</span>
                      <!-- <span class="font-title tabular-nums"
                        >{convertCurrency(priceRow[packageIndex + 1])}</span
                      > -->
                    </a>
                  </div>
                </div>
              </div>
            {/if}
          </div>
        {/each}
      </div>

      {#if data.product.packages && !checkoutRow}
        <div class="my-20 flex justify-center">
          <a
            href={renderBuyNowUrl(data.product.buy_now_url, data.product.ref, data.product.params)}
            class="btn lg:btn-lg xl:btn-xl btn-outline group shrink-0 rounded-full xl:px-10"
            target={data.product.buy_now_url ? "_blank" : undefined}
            rel={data.product.buy_now_url ? "noopener noreferrer" : undefined}
          >
            Buy {data.product.title}
            <span class="flex gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="hidden size-6 transition-transform duration-300 group-hover:translate-x-1 md:inline-block rtl:rotate-180 group-hover:rtl:-translate-x-1"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                >
                </path>
              </svg>
            </span>
          </a>
        </div>
      {/if}
    {/if}
  </div>
  {#if data.product.banner}
    <div class="alert lg:p-12">
      <svg
        class="mt-2 size-6 -rotate-6 self-start lg:size-8"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <g
          stroke-linejoin="round"
          stroke-linecap="round"
          stroke-width="2"
          fill="none"
          stroke="currentColor"
        >
          <rect x="3" y="8" width="18" height="4" rx="1"> </rect>
          <path d="M12 8v13"> </path>
          <path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"> </path>
          <path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5">
          </path>
        </g>
      </svg>
      <div class="prose lg:text-md text-xs max-lg:ps-0">
        <div class="font-title text-lg font-semibold">{@html data.product.bannerTitle}</div>
        {@html data.product.banner}
      </div>
    </div>
  {/if}
  <div class="my-40">
    {#each data.product.more_images as image}
      <img src={image} alt={data.product.title} class="w-full object-cover" loading="lazy" />
    {/each}
  </div>
  <div class="mx-auto my-40 grid gap-2 gap-y-16 lg:grid-cols-2" id="faq">
    <div class="flex flex-col gap-6">
      <h2 class="font-title lg:text-base-content/10 text-4xl font-semibold lg:text-[10rem]">
        F.A.Q
      </h2>
      <p class="text-base-content/60 text-xs">
        If you have any questions before purchase
        <br />send me an email to pouya@daisyui.com
        <br />I will do my best to help you.
      </p>
    </div>
    <div class="">
      <!-- data.product.faq might not exist, so we need to use the nullish coalescing operator to provide a default value -->
      {#each [...(data.product.faq ?? []), ...data.faq] as item}
        <div class="collapse-plus collapse">
          <input type="radio" name="faq" checked="checked" class="min-h-0!" />
          <div class="collapse-title min-h-0! text-sm font-semibold">{item.Q}</div>
          <div
            class="collapse-content text-base-content/70 border-base-content/10 ms-4 border-s-2 px-6 text-xs"
          >
            {@html item.A}
          </div>
        </div>
      {/each}
    </div>
  </div>
  <div class="group grid place-items-center *:[grid-area:1/1]">
    <div class="grid max-w-2xl grid-cols-8 grid-rows-5 place-items-center gap-4 perspective-normal">
      <img
        class="rounded-box col-start-1 col-end-4 row-start-2 row-end-5 translate-x-10 scale-x-80 rotate-y-18 brightness-50 transition-transform duration-500 group-has-[a:hover]:translate-x-0 group-has-[a:hover]:rotate-y-15"
        src={data.product.media.filter((media) => media.type === "image")[1].lg}
      />
      <img
        class="rounded-box col-start-6 col-end-9 row-start-2 row-end-5 -translate-x-10 scale-x-80 -rotate-y-18 brightness-50 transition-transform duration-500 group-has-[a:hover]:translate-x-0 group-has-[a:hover]:-rotate-y-15"
        src={data.product.media.filter((media) => media.type === "image")[2].lg}
      />
      <img
        class="rounded-box col-start-3 col-end-7 row-start-1 row-end-6 shadow-xl brightness-70 transition-transform duration-500 group-has-[a:hover]:scale-102"
        src={data.product.media.filter((media) => media.type === "image")[0].lg}
      />
      <div
        class="-z-1 col-start-1 col-end-9 row-start-5 row-end-6 h-10 w-full rounded-[100%] bg-black/40 blur-2xl lg:h-20"
      ></div>
    </div>
    <div
      class="relative z-1 rounded-full border border-white/20 bg-white/40 p-4 backdrop-blur-lg max-sm:top-[40%]"
    >
      <a
        href={renderBuyNowUrl(data.product.buy_now_url, data.product.ref, data.product.params)}
        class="btn lg:btn-lg xl:btn-xl btn-neutral group shrink-0 rounded-full xl:px-10"
        target={data.product.buy_now_url ? "_blank" : undefined}
        rel={data.product.buy_now_url ? "noopener noreferrer" : undefined}
      >
        Buy {data.product.title}
        <span class="flex gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="hidden size-6 transition-transform duration-300 group-hover:translate-x-1 md:inline-block rtl:rotate-180 group-hover:rtl:-translate-x-1"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
            >
            </path>
          </svg>
        </span>
      </a>
    </div>
  </div>
</div>

{#if data.product.tags && data.products.length > 0 && getSimilarProducts(data.product, data.products).length > 0}
  <div class="divider text-base-content/30 my-20">You will also like these</div>

  <div class="mx-auto grid gap-x-10 gap-y-36 md:grid-cols-2 xl:gap-x-16">
    {#each getSimilarProducts(data.product, data.products) as product}
      <StoreProduct {product} {convertCurrency} />
    {/each}
  </div>
{/if}
<div class="divider divider-end text-base-content/30 my-20">
  <a href="/store/" class="text-base-content opacity-50 hover:opacity-100">View all products</a>
</div>
