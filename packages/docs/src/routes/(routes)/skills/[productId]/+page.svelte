<script>
  import { PUBLIC_DAISYUI_API_PATH } from "$env/static/public"
  import SEO from "$components/SEO.svelte"
  import DiscountCountdown from "$components/DiscountCountdown.svelte"
  import Clipboard from "$components/Clipboard.svelte"
  import { fade, slide } from "svelte/transition"
  import {
    fetchActiveDiscount,
    getProductCreemIds,
    isDiscountApplicableToProduct,
  } from "$lib/storeDiscount.js"

  let { data } = $props()

  function convertCurrency(number) {
    const formatted = (number / 100).toFixed(2)
    if (number === 0) {
      return null
    }
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

  const fetchDiscount = fetchActiveDiscount(PUBLIC_DAISYUI_API_PATH)
</script>

<SEO
  title={`${data.product.title} – daisyUI and Tailwind CSS templates`}
  formatTitle={false}
  desc={data.product.desc}
/>

{#snippet tree(nodes)}
  {#if nodes}
    {#each nodes as node}
      <li class="pointer-events-none">
        {#if node.type === "directory"}
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="h-4 w-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
              />
            </svg>
            {node.name}
          </span>
          {#if node.contents && node.contents.length > 0}
            <ul>
              {@render tree(node.contents)}
            </ul>
          {/if}
        {:else if node.type === "file"}
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="h-4 w-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
              />
            </svg>
            {node.name}
          </span>
        {/if}
      </li>
    {/each}
  {/if}
{/snippet}

<div>
  <a class="btn btn-ghost group" href="/skills/" data-sveltekit-preload-data>
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
    <span class="text-sm">Back to skills</span>
  </a>
</div>

{#await fetchDiscount then discount}
  {@const productIds = getProductCreemIds(data.product)}
  {#if discount?.data.attributes.expires_at && new Date(discount?.data.attributes.expires_at).toISOString() > currentDate && isDiscountApplicableToProduct(discount, productIds)}
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
                class="tooltip tooltip-error"
              >
                <button
                  class="badge badge-error cursor-copy px-2 font-mono tracking-wide"
                  onclick={() => copyText(discount.data.attributes.code)}
                >
                  {discount.data.attributes.code}
                </button>
              </span>
              code at checkout to get {discount.data.attributes.amount}% discount.
            </div>
          </div>

          {#if discount.data.attributes.expires_at}
            <DiscountCountdown expiresAt={discount.data.attributes.expires_at} variant="neutral" />
          {/if}
        </div>
      </div>
    </div>
  {/if}
{/await}

<div class="mx-auto py-10">
  <!-- title -->
  <div class="flex justify-between gap-2 max-lg:mb-12 max-lg:flex-col">
    <div class="flex flex-col gap-2">
      <div class="flex items-center gap-4">
        {#if data.product.logo}
          <div class="rounded-box border-base-content/5 border p-3 [&_svg]:size-10">
            {@html data.product.logo}
          </div>
        {/if}
        <h1 class="font-title text-4xl font-bold">{data.product.title}</h1>
      </div>
      {#if data.product.desc}
        <div class="prose prose-sm mt-6 mb-12 ps-0! [&_ul>li>p]:my-0">
          {@html data.product.desc}
        </div>
      {/if}
    </div>
    <div class="flex items-start gap-6 max-lg:flex-col lg:justify-between">
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
            href={renderBuyNowUrl(data.product.buy_now_url, data.product.ref, data.product.params)}
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
        {:else if data.product.get_now_url || data.product.packages}
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
        {:else if data.product.install}
          <div class="flex flex-col gap-2">
            <div class="bg-base-200 rounded-box flex items-center justify-between gap-2 ps-4">
              <pre class="text-[0.625rem] md:text-xs lg:text-sm"><code
                  >{data.product.install.command}</code
                ></pre>
              <Clipboard text={data.product.install.copy} />
            </div>
            {#if data.product.install.hint}
              <div class="flex flex-col items-end px-2 font-mono text-[0.625rem]">
                <span class="flex gap-2 tracking-wide uppercase opacity-30">
                  {data.product.install.hint_title}
                </span>
                <span class="flex gap-2 italic opacity-70">
                  {data.product.install.hint}
                </span>
              </div>
            {/if}
          </div>
        {/if}
      </div>
    </div>
  </div>

  <div class="flex flex-col gap-4 xl:grid xl:grid-cols-12 xl:grid-rows-5">
    <!-- Product Images/Media -->
    <div class="flex flex-col gap-4 xl:col-span-8 xl:row-span-5">
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
              {:else if media.type === "diff"}
                <!-- svelte-ignore a11y_no_noninteractive_tabindex -->
                <div class="relative h-full w-full">
                  <span class="badge badge-neutral absolute start-4 top-1/2 z-2 -translate-y-1/2">
                    <svg
                      class="text-error size-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path
                        d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5M11,7H13V13H11M11,15H13V17H11"
                      ></path>
                    </svg>
                    Without skill
                  </span>
                  <span class="badge badge-neutral absolute end-4 top-1/2 z-2 -translate-y-1/2">
                    <svg
                      class="text-success size-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path
                        d="M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1Z"
                      ></path>
                    </svg>
                    With skill
                  </span>
                  <img
                    class="invisible h-full"
                    style={`aspect-ratio: ${media.ratio};`}
                    alt={data.product.title}
                    src={media.after}
                  />
                  <figure
                    class="diff absolute top-0"
                    tabindex="0"
                    style={`aspect-ratio: ${media.ratio};`}
                  >
                    <div class="diff-item-1 shadow-[0_0_3rem_black_-1rem]" role="img" tabindex="0">
                      <img alt={`without ${data.product.title}`} src={media.before} />
                    </div>
                    <div class="diff-item-2" role="img">
                      <img alt={`with ${data.product.title}`} src={media.after} />
                    </div>
                    <div class="diff-resizer"></div>
                  </figure>
                </div>
              {/if}
            </div>
          {/each}
          <div class="w-px shrink-0 xl:hidden"></div>
        </div>
      </div>
      <div class="text-base-content/60 mt-6 text-sm">Compatible with all coding agents</div>
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
    <div class="flex flex-col gap-4 xl:col-span-4 xl:row-span-5">
      <!-- stats -->
      <div class="grid grid-cols-3 gap-4 xl:col-span-4 xl:row-span-1">
        <div class="stats border-base-300 flex-grow border">
          <div class="stat">
            <div class="stat-value font-title text-xl tabular-nums">
              {JSON.stringify(data.product.filetree.contents).match(/"name":/g)?.length || 0}
            </div>
            <div class="stat-title opacity-50">Skill files</div>
          </div>
        </div>
        <div class="stats border-base-300 flex-grow border">
          <div class="stat">
            <div class="stat-value font-title text-xl tabular-nums">
              {data.product.filetree.LOC}
            </div>
            <div class="stat-title opacity-50">Lines</div>
          </div>
        </div>
        <div class="stats border-base-300 flex-grow border">
          <div class="stat">
            <div class="stat-value font-title text-xl tabular-nums">
              {data.product.filetree.size}
            </div>
            <div class="stat-title opacity-50">Total size</div>
          </div>
        </div>
      </div>
      <!-- tree -->

      <ul
        class="menu menu-xs lg:menu-sm bg-base-200 to-base-100 rounded-box border-base-300 h-80 w-full cursor-ns-resize flex-nowrap overflow-y-auto border bg-gradient-to-br font-mono xl:col-span-4 xl:row-span-3"
      >
        {@render tree(data.product.filetree.contents)}
      </ul>

      <!-- links -->
      <div class="flex flex-col gap-6 xl:col-span-4 xl:row-span-1">
        <div
          class="border-base-300 rounded-box divide-base-300 bg-base-100/60 sticky bottom-4 grid divide-x overflow-hidden border text-xs backdrop-blur-sm"
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
              </div>
            {:else if link === "screenshot"}
              <div>
                <a
                  href={value}
                  class="flex w-full cursor-pointer flex-col items-center gap-2 p-4 text-center capitalize transition-colors *:opacity-50 *:transition-opacity hover:*:opacity-100 focus-visible:outline focus-visible:-outline-offset-2 md:p-6"
                  onclick={(e) => {
                    ;(e.preventDefault(), screenshotDialog.showModal())
                    screenshotUrl = value
                  }}
                >
                  {@html getLinksIcon(link)}
                  <span>{link}</span>
                </a>
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

        <dialog class="modal max-md:modal-bottom" bind:this={licenseDialog}>
          <div class="modal-box max-h-[80vh] w-full max-w-[50rem] max-md:max-h-[80vh] lg:p-20">
            <h3 class="font-title text-lg font-semibold">{data.product.title} License</h3>
            <pre class="py-4 text-xs whitespace-pre-wrap">{licenseContent}</pre>
          </div>
          <form method="dialog" class="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>
        <dialog class="modal max-md:modal-bottom" bind:this={screenshotDialog}>
          <div class="modal-box max-h-[80vh] w-full p-0 max-md:max-h-[80vh] lg:max-w-[90vw]">
            <img src={screenshotUrl} alt="Screenshot" class="h-full w-full object-cover" />
          </div>
          <form method="dialog" class="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>
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

      <div
        style="--packages-count: {packageHeaders.length}"
        class="grid gap-6 lg:grid-cols-[repeat(var(--packages-count),minmax(0,1fr))] xl:gap-8"
      >
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
              <div class="card-body flex flex-row items-center gap-4 pb-4">
                <div class="max-sm:w-full max-sm:text-center">
                  <!-- Package name -->
                  <h3 class="card-title font-title mb-2 justify-center lg:text-xl">
                    {packageName}
                  </h3>

                  <!-- Price -->
                  {#if priceRow && priceRow[packageIndex + 1] && typeof priceRow[packageIndex + 1] === "number"}
                    <div class="font-title text-lg tabular-nums sm:text-2xl sm:font-thin">
                      {convertCurrency(priceRow[packageIndex + 1])}
                    </div>
                  {/if}
                </div>
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
        <br />send me an email to help@daisyui.com
        <br />I will do my best to help you.
      </p>
    </div>
    <div class="">
      <!-- data.product.faq might not exist, so we need to use the nullish coalescing operator to provide a default value -->
      {#each [...(data.product.faq ?? []), ...data.faq] as item, index}
        <div class="collapse-plus collapse">
          <input type="radio" name="faq" class="min-h-0!" checked={index === 0} />
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
</div>
