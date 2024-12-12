<script>
import { onMount } from "svelte"
import SEO from "$components/SEO.svelte"
import Countdown from "svelte-countdown"
import { fade, slide } from "svelte/transition"
let { data } = $props()
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
    fetch("https://api.daisyui.com/api/discount_shorttime.json"),
    fetch("https://api.daisyui.com/api/discount_special.json"),
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

function convertCurrency(number) {
  const formatted = (number / 100).toFixed(2)
  return `$${formatted.endsWith(".00") ? formatted.slice(0, -3) : formatted}`
}
function extractUUID(url) {
  const regex = /\/buy\/([a-f0-9-]{36})(?:\?|$)/
  const match = url.match(regex)
  return match ? match[1] : null
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

let sortBy = $state("")
let selectedTech = $state("")

onMount(() => {
  const urlParams = new URLSearchParams(window.location.search)
  const filter = urlParams.get("filter") || ""
  selectedTech = filter
})

// Update URL parameters when filter changes
function updateURLParameter(param, value) {
  const url = new URL(window.location)
  url.searchParams.set(param, value)
  window.history.pushState({}, "", url)
}
function handleFilterChange(filter) {
  selectedTech = filter === "all" ? "" : filter
  updateURLParameter("filter", selectedTech)
}

let sortedFilteredProducts = $derived(
  data.products
    .filter((product) => selectedTech === "" || product.tech?.includes(selectedTech))
    .sort((a, b) => {
      if (sortBy === "price") {
        return a.attributes.price - b.attributes.price
      }
      if (sortBy === "id") {
        return a.id - b.id
      }
      if (sortBy === "new") {
        return new Date(b.attributes.created_at) - new Date(a.attributes.created_at)
      }
      return 0
    })
)

let rednerBuyNowUrl = (url, ref, params) => {
  if (ref) {
    return `/store/checkout?product=${extractUUID(url)}&aff=${ref}${params ? `&${params}` : ""}`
  }
  return `${url}${params ? `?${params}` : ""}`
}

let sliders = $state(Object.fromEntries(data.products.map(product => [product.id, { currentIndex: 0 }])));

function next(productId, media) {
  sliders[productId].currentIndex = (sliders[productId].currentIndex + 1) % media.length;
}

function prev(productId, media) {
  sliders[productId].currentIndex = (sliders[productId].currentIndex - 1 + media.length) % media.length;
}
</script>

<SEO title="Official daisyUI Store" desc="daisyUI Store - Professional templates made by daisyUI" />

<div class="flex gap-6 justify-between mx-4 flex-col lg:flex-row">
  <div class="flex flex-col gap-2">
    <h1 class="font-title text-base-content text-3xl font-extrabold lg:text-4xl">
      daisyUI store
    </h1>
    <p class="text-base-content/60 text-sm">Official templates made by daisyUI</p>
  </div>
  <div class="flex flex-col gap-3">
    <div class="text-xs text-base-content/50">Filter by</div>
    <div class="flex gap-2 items-center">
      {#each data.techFilters as filter}
        {#if
          (selectedTech === '' && filter !== 'all') ||
          (selectedTech === 'all') ||
          (selectedTech !== '' && (filter === selectedTech || filter === 'all'))
        }
          <button
            transition:slide={{ duration: 50, axis: 'x' }}
            class={`btn btn-sm rounded-full ${ filter === 'all' ? 'btn-circle' : '' } ${selectedTech === filter ? 'btn-neutral' : ''}`}
            xstyle={filter !== 'all' ? `background-color: ${data.tech[filter].bg};border-color: ${data.tech[filter].bg};color: ${data.tech[filter].fg};`:``}
            aria-label={filter === 'all' ? '×' : data.tech[filter].title}
            onclick={() => handleFilterChange(filter)}>
            {#if filter === 'all'}
              <svg aria-label="Clear filters" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5">
                <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
              </svg>
            {:else}
              {data.tech[filter].title}
            {/if}
          </button>
        {/if}
      {/each}
    </div>
  </div>
</div>

<hr class="mb-20 mt-10 mx-4 border-base-content/10"/>

<div>
  {#await fetchDiscount}
  {:then discount}
    {#if discount?.data.attributes.expires_at && new Date(discount?.data.attributes.expires_at).toISOString() > currentDate}
      <div class="mx-4 mb-10">
        <div class="alert min-h-24 border-transparent bg-neutral text-neutral-content" transition:slide={{ duration: 400 }}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 mx-4">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 11.25v8.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 1 0 9.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1 1 14.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
          </svg>
          <div class="flex w-full flex-col items-center justify-between gap-10 sm:flex-row" transition:fade={{ duration: 400 }}>
            <div class="flex flex-col gap-1">
              <h2 class="text-lg font-bold">
                {discount.data.attributes.name}
              </h2>
              <div class="text-neutral-content/70 text-sm [text-wrap:balance]">
                Use <span
                  data-tip="{isClipboardButtonPressed ? 'copied' : 'copy'}"
                  class="tooltip tooltip-info">
                  <button
                    class="font-mono tracking-wide badge px-2 badge-info"
                    onclick="{() => copyText(discount.data.attributes.code)}">
                    {discount.data.attributes.code}
                  </button>
                </span>
                code at checkout to get {discount.data.attributes.amount}% discount on all products.
              </div>
            </div>

            {#if discount.data.attributes.expires_at}
              <Countdown
                from="{new Date(discount.data.attributes.expires_at).toLocaleString('en-GB', dateFormat)}"
                dateFormat="DD/MM/YYYY, HH:mm:ss"
                let:remaining>
                {#if remaining.done === false}
                  <div class="tooltip shrink-0 after:hidden" data-tip="Remaining time" transition:fade={{ duration: 400 }}>
                    <date
                      datetime="{new Date(discount.data.attributes.expires_at).toLocaleString(
                        'en-GB',
                        dateFormat
                      )}"
                      class={`grid ${remaining.days > 0 ? 'grid-cols-4' : 'grid-cols-3'} gap-2 text-center font-mono text-xs`}>
                      {#if remaining.days > 0}
                        <div class="border-neutral-content/40 rounded-btn border border-dashed p-2">
                          <span class="countdown block text-2xl">
                            <span style="{`--value:${remaining.days};`}"></span>
                          </span>
                          <span class="text-neutral-content/40 text-xs">day</span>
                        </div>
                      {/if}
                      <div class="border-neutral-content/40 rounded-btn border border-dashed p-2">
                        <span class="countdown block text-2xl">
                          <span style="{`--value:${remaining.hours};`}"></span>
                        </span>
                        <span class="text-neutral-content/40 text-xs">hour</span>
                      </div>
                      <div class="border-neutral-content/40 rounded-btn border border-dashed p-2">
                        <span class="countdown block text-2xl">
                          <span style="{`--value:${remaining.minutes};`}"></span>
                        </span>
                        <span class="text-neutral-content/40 text-xs">min</span>
                      </div>
                      <div class="border-neutral-content/40 rounded-btn border border-dashed p-2">
                        <span class="countdown block text-2xl">
                          <span style="{`--value:${remaining.seconds};`}"></span>
                        </span>
                        <span class="text-neutral-content/40 text-xs">sec</span>
                      </div>
                    </date>
                  </div>
                {:else if !data}
                  <div class="text-neutral-content/20 rounded-btn shrink-0 border border-dashed p-2">
                    Ended
                  </div>
                {/if}
              </Countdown>
            {/if}
          </div>
        </div>
      </div>
    {/if}
  {/await}

  <!-- <select class="select" id="sort-by" bind:value="{sortBy}">
    <option value="">Popular</option>
    <option value="new">New</option>
  </select> -->


  <div class="mx-auto flex max-w-7xl flex-col gap-16">
    {#each sortedFilteredProducts as product, index}
      <div
        class="rounded-box relative grid grid-cols-12 gap-y-10 py-10 xl:gap-x-10"
        id="{product.id}">
        <div class="col-span-12 flex flex-col gap-8 xl:col-span-5 xl:row-start-1">
          <div>
            {#if product.tags}
              <span class="flex gap-2">
                {#each product.tags as tag}
                  <span class="badge badge-success badge-outline italic">{tag}</span>
                {/each}
              </span>
            {/if}
            <h2 class="font-title text-lg font-black [text-wrap:balance] sm:text-3xl tracking-tight" class:xl:text-6xl={index===0} class:xl:text-5xl={index>0}>
              {product.attributes.name}
            </h2>
          </div>
          <div class="flex items-start justify-between">
            <div class="flex gap-2">
              {#if product.originalprice}
                <span class="text-2xl line-through opacity-40 xl:text-4xl">
                  &nbsp;{convertCurrency(product.originalprice)}&nbsp;
                </span>
              {/if}
              <span class="flex flex-col">
                <span class="flex items-center gap-2">
                  {#if product.displayprice}
                    <span class="font-title text-2xl font-light xl:text-5xl">
                      {convertCurrency(product.displayprice)}
                    </span>
                  {:else if product.attributes.from_price && product.attributes.to_price && product.attributes.from_price !== product.attributes.to_price}
                    From
                    <span class="font-title text-2xl font-light xl:text-5xl">
                      {convertCurrency(product.attributes.from_price)}
                    </span>
                    to
                    <span class="font-title text-2xl font-light xl:text-5xl">
                      {convertCurrency(product.attributes.to_price)}
                    </span>
                  {:else}
                    <span class="font-title text-2xl font-light xl:text-5xl">
                      {convertCurrency(product.attributes.price)}
                    </span>
                  {/if}
                </span>

                {#if product.displaypricenote}
                  <span class="text-sm italic opacity-40">
                    {product.displaypricenote}
                  </span>
                {/if}
              </span>
            </div>
            <div class="flex flex-col items-center gap-3">
              <a
                href="{rednerBuyNowUrl(product.attributes.buy_now_url, product.ref, product.params)}"
                class="btn btn-primary shadow-primary/50 group shrink-0 rounded-full shadow xl:px-10"
                target="_blank"
                rel="noopener noreferrer">
                Get it now
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="hidden h-6 w-6 transition-transform duration-300 group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1 md:inline-block">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3">
                  </path>
                </svg>
              </a>
              <div class="flex gap-x-4">
                {#if product.preview}
                  <a class="link text-xs" href="{product.preview.url}" target="_blank" rel="noopener noreferrer">
                    {product.preview.button}
                  </a>
                {/if}
                {#if product.preview_modal}
                  <button class="link text-xs" onclick="{() => preview_modal.showModal()}">{product.preview_modal.button}</button>
                  <dialog id="preview_modal" class="modal">
                    <div class="modal-box p-0 shadow-none bg-transparent max-w-fit max-h-fit my-32">
                      <img src="{product.preview_modal.img}" alt="{product.attributes.name}" class="max-h-screen w-auto" />
                    </div>
                    <form method="dialog" class="modal-backdrop">
                      <button>close</button>
                    </form>
                  </dialog>
                {/if}
              </div>
            </div>
          </div>
          {#if product.attributes.description}
            <div
              class="prose prose-sm prose-li:my-0 prose-ul:leading-none prose-li:leading-normal prose-p:my-2 prose-ul:my-2 text-xs [text-wrap:balance]">
              {@html product.attributes.description}
            </div>
          {/if}
        </div>
        <div class="col-span-12 flex flex-col gap-6 xl:col-span-7">
          <div class="relative grid items-center group place-items-center [grid-template-columns:min-content_1fr_min-content] border border-base-300 rounded-box overflow-hidden">
            <div class="col-span-3 col-start-1 row-start-1 flex overflow-hidden items-center rounded-box">
              {#each product.media as media}
                <div class="w-full shrink-0 transition-transform duration-300"
                    style={`transform: translateX(-${sliders[product.id].currentIndex * 100}%)`}
                  >
                  {#if media.type === 'video'}
                    <div class="w-full grid">
                      <div class="[grid-column:1/1] [grid-row:1/1] z-[1]"></div>
                      <iframe class="w-full [grid-column:1/1] [grid-row:1/1]" style={`aspect-ratio: ${media.ratio};`} src="{media.url}" frameborder="0" title="Official daisyUI Figma Library" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                  {/if}
                  {#if media.type === 'image'}
                    <img
                      style="{`background-image: url('${media.sm}')`}"
                      src="{media.lg}"
                      alt="{product.attributes.name}"
                      loading="lazy"
                      class="bg-base-300 w-full bg-cover bg-center object-cover" />
                  {/if}
                </div>
              {/each}
            </div>
            {#if product.media.length > 1}
              <button aria-label="Previous" onclick={() => prev(product.id, product.media)} class="rounded-full aspect-square p-4 focus-visible:outline-white col-start-1 row-start-1 z-[1] m-4 opacity-0 -translate-x-2 duration-300 bg-black/70 border-transparent text-white group-hover:opacity-100 group-hover:translate-x-0 focus-visible:opacity-100 focus-visible:translate-x-0">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="size-8">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                </svg>
              </button>
            {/if}
            {#if product.screenshot}
              <a target="_blank"
              aria-label="Screenshot"
              href="{product.screenshot}"
              rel="noopener noreferrer"
              class=" rounded-full aspect-square p-4 focus-visible:outline-white col-start-2 row-start-1 z-[1] m-4 opacity-0 scale-90 duration-300 bg-black/70 border-transparent text-white group-hover:opacity-100 group-hover:scale-100 focus-visible:opacity-100 focus-visible:scale-100"
              >
                <svg
                  class="text-white"
                  width="32"
                  height="32"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M21 38C30.3888 38 38 30.3888 38 21C38 11.6112 30.3888 4 21 4C11.6112 4 4 11.6112 4 21C4 30.3888 11.6112 38 21 38Z"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="4"
                    stroke-linejoin="round">
                  </path>
                  <path
                    d="M21 15L21 27"
                    stroke="currentColor"
                    stroke-width="4"
                    stroke-linecap="round"
                    stroke-linejoin="round">
                  </path>
                  <path
                    d="M15.0156 21.0156L27 21"
                    stroke="currentColor"
                    stroke-width="4"
                    stroke-linecap="round"
                    stroke-linejoin="round">
                  </path>
                  <path
                    d="M33.2216 33.2217L41.7069 41.707"
                    stroke="currentColor"
                    stroke-width="4"
                    stroke-linecap="round"
                    stroke-linejoin="round">
                  </path>
                </svg>
              </a>
            {/if}
            {#if product.media.length > 1}
              <button aria-label="Next" onclick={() => next(product.id, product.media)} class="rounded-full aspect-square p-4 focus-visible:outline-white col-start-3 row-start-1 z-[1] m-4 opacity-0 translate-x-2 duration-300 bg-black/70 border-transparent text-white group-hover:opacity-100 group-hover:translate-x-0 focus-visible:opacity-100 focus-visible:translate-x-0">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="size-8">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
              </button>
            {/if}
          </div>
          {#if product.tech}
            <div class="flex items-center justify-center gap-4 md:justify-end">
              <span class="text-base-content/50 text-xs italic">made with</span>
              {#each product.tech as tech}
                <div
                  class="bg-white border border-black/5 tooltip grid place-content-center rounded-full lg:p-2 xl:p-3"
                  data-tip="{data.tech[tech].title}">
                  <img
                    class="aspect-square w-5 xl:w-6"
                    src="{`https://img.daisyui.com/images/logos/${tech}.svg`}"
                    alt="{tech}" />
                </div>
              {/each}
            </div>
          {/if}
          {#if product.quote}
            <div class="chat chat-end">
            {#each product.quote.text as text, index}
              <div class={`chat-bubble mt-1 text-xs max-w-md bg-base-200 text-base-content ${index !== product.quote.text.length - 1 ? "before:hidden [.chat-end>&]:rounded-box":""}`}>
                {#each text as line}
                  <p class="py-1">{@html line}</p>
                {/each}
              </div>
            {/each}
              <div class="chat-image avatar">
                <div class="w-10 rounded-full">
                  <img
                    alt="{product.quote.name}"
                    src="{product.quote.img}" />
                </div>
              </div>
            </div>
          {/if}
        </div>
      </div>
    {:else}
      <div class="lg:col-span-3 flex justify-center items-center font-bold text-base-content/20 py-32">
        Coming soon…
      </div>
    {/each}
  </div>

  <!-- coming soon -->
  <div class="divider text-base-content/30 my-20">In development</div>
  <div class="grid gap-12 lg:grid-cols-3">
    {#each data.futureProducts as product}
      <div
        class="rounded-box border-base-300 text-base-content/30 flex h-72 flex-col items-center justify-center gap-6 border-2 border-dashed p-10 text-center [text-wrap:balance]">
        <svg
          width="16"
          height="16"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <rect
            x="4"
            y="10"
            width="40"
            height="30"
            rx="2"
            fill="none"
            stroke="currentColor"
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round">
          </rect>
          <path d="M14 6V14" stroke="currentColor" stroke-width="4" stroke-linecap="round"></path>
          <path d="M25 23L14 23" stroke="currentColor" stroke-width="4" stroke-linecap="round"></path>
          <path d="M34 31L14 31" stroke="currentColor" stroke-width="4" stroke-linecap="round"></path>
          <path d="M34 6V14" stroke="currentColor" stroke-width="4" stroke-linecap="round"></path>
        </svg>
        <div>{product}</div>
      </div>
    {:else}
      <div class="lg:col-span-3 flex justify-center items-center font-bold text-base-content/20">
        Coming soon…
      </div>
    {/each}
  </div>

  <div class="divider text-base-content/30 my-20"></div>

  <div id="mc_embed_shell" class="card bg-base-200 mt-10">
    <div class="card-body flex flex-col gap-4">
      <h2 class="text-xl font-black lg:text-4xl">
        Get notified about upcoming products and discounts!
      </h2>
      <div>
        <p class="font-bold">
          Subscribe to daisyUI store newsletter to get updates about new products and discounts codes.
        </p>
        <p class="text-base-content/60 text-xs">
          You will only receive a single email when a new product is added or when a new discount code
          is available. No spam. No ads.
        </p>
      </div>
      <div id="mc_embed_signup">
        <form
          action="https://gmail.us8.list-manage.com/subscribe/post?u=42813cff910e47b1bd132369a&amp;id=9fd7333f07&amp;f_id=003d03e0f0"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          target="_blank"
          novalidate="">
          <!-- store group -->
          <input type="checkbox" name="group[347002][8]" value="1" class="hidden" checked="checked" />
          <!-- discounts group -->
          <input type="checkbox" name="group[347002][1]" value="1" class="hidden" checked="checked" />
          <div class="form-control w-full max-w-sm">
            <label class="label" for="mce-EMAIL">
              <span class="label-text">Email Address</span>
            </label>
            <div class="join">
              <input
                type="email"
                name="EMAIL"
                class="join-item input input-bordered w-full max-w-sm"
                id="mce-EMAIL"
                placeholder="mail@site.com"
                required />
              <button name="subscribe" class="join-item btn btn-success">Subscribe</button>
            </div>
          </div>
          <div aria-hidden="true" class="hidden">
            <input type="text" name="b_42813cff910e47b1bd132369a_9fd7333f07" tabindex="-1" value="" />
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
