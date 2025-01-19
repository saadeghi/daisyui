<script>
  import { onMount } from "svelte"
  import SEO from "$components/SEO.svelte"
  import StoreProduct from "$components/StoreProduct.svelte"
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
      }),
  )
</script>

<SEO title="Official daisyUI Store" desc="daisyUI Store - Professional templates made by daisyUI" />

<div class="flex gap-6 justify-between mx-4 flex-col lg:flex-row">
  <div class="flex flex-col gap-2">
    <h1 class="font-title text-base-content text-3xl font-extrabold lg:text-4xl">daisyUI store</h1>
    <p class="text-base-content/60 text-sm">Official templates made by daisyUI</p>
  </div>
  <div class="flex flex-col gap-3">
    <div class="text-xs text-base-content/50">Filter by</div>
    <div class="flex gap-2 items-center">
      {#each data.techFilters as filter}
        {#if (selectedTech === "" && filter !== "all") || selectedTech === "all" || (selectedTech !== "" && (filter === selectedTech || filter === "all"))}
          <button
            transition:slide={{ duration: 50, axis: "x" }}
            class={`btn btn-sm rounded-full ${filter === "all" ? "btn-circle" : ""} ${selectedTech === filter ? "btn-neutral" : ""}`}
            xstyle={filter !== "all"
              ? `background-color: ${data.tech[filter].bg};border-color: ${data.tech[filter].bg};color: ${data.tech[filter].fg};`
              : ``}
            aria-label={filter === "all" ? "×" : data.tech[filter].title}
            onclick={() => handleFilterChange(filter)}
          >
            {#if filter === "all"}
              <svg
                aria-label="Clear filters"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="size-5"
              >
                <path
                  d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z"
                />
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

<hr class="mb-20 mt-10 mx-4 border-base-content/10" />

<div>
  {#await fetchDiscount then discount}
    {#if discount?.data.attributes.expires_at && new Date(discount?.data.attributes.expires_at).toISOString() > currentDate}
      <div class="mb-12">
        <div
          class="alert min-h-24 border-transparent bg-neutral text-neutral-content"
          transition:slide={{ duration: 400 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6 mx-4"
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
                    class="font-mono tracking-wide badge px-2 badge-info cursor-copy"
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
                        <div
                          class="border-neutral-content/40 rounded-field border border-dashed p-2"
                        >
                          <span class="countdown block text-2xl">
                            <span style={`--value:${remaining.hours};`}></span>
                          </span>
                          <span class="text-neutral-content/40 text-xs">hour</span>
                        </div>
                        <div
                          class="border-neutral-content/40 rounded-field border border-dashed p-2"
                        >
                          <span class="countdown block text-2xl">
                            <span style={`--value:${remaining.minutes};`}></span>
                          </span>
                          <span class="text-neutral-content/40 text-xs">min</span>
                        </div>
                        <div
                          class="border-neutral-content/40 rounded-field border border-dashed p-2"
                        >
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

  <!-- <select class="select" id="sort-by" bind:value={sortBy}>
    <option value="">Popular</option>
    <option value="new">New</option>
  </select> -->

  <div class="mx-auto grid md:grid-cols-2 xl:grid-cols-3 gap-x-10 xl:gap-x-16 gap-y-36">
    {#each sortedFilteredProducts as product, index}
      <StoreProduct {product} {convertCurrency} />
    {:else}
      <div
        class="lg:col-span-3 flex justify-center items-center font-bold text-base-content/20 py-32"
      >
        Coming soon…
      </div>
    {/each}
  </div>

  <div class="divider text-base-content/30 my-20">In development</div>
  <div class="grid gap-12 lg:grid-cols-3">
    {#each data.futureProducts as product}
      <div
        class="rounded-box border-base-300 text-base-content/30 flex h-72 flex-col items-center justify-center gap-6 border-2 border-dashed p-10 text-center [text-wrap:balance]"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
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
            stroke-linejoin="round"
          >
          </rect>
          <path d="M14 6V14" stroke="currentColor" stroke-width="4" stroke-linecap="round"></path>
          <path d="M25 23L14 23" stroke="currentColor" stroke-width="4" stroke-linecap="round"
          ></path>
          <path d="M34 31L14 31" stroke="currentColor" stroke-width="4" stroke-linecap="round"
          ></path>
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
          Subscribe to daisyUI store newsletter to get updates about new products and discounts
          codes.
        </p>
        <p class="text-base-content/60 text-xs">
          You will only receive a single email when a new product is added or when a new discount
          code is available. No spam. No ads.
        </p>
      </div>
      <div id="mc_embed_signup">
        <form
          action="https://gmail.us8.list-manage.com/subscribe/post?u=42813cff910e47b1bd132369a&amp;id=9fd7333f07&amp;f_id=003d03e0f0"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          target="_blank"
          novalidate=""
        >
          <!-- store group -->
          <input
            type="checkbox"
            name="group[347002][8]"
            value="1"
            class="hidden"
            checked="checked"
          />
          <!-- discounts group -->
          <input
            type="checkbox"
            name="group[347002][1]"
            value="1"
            class="hidden"
            checked="checked"
          />
          <div class="flex flex-col gap-2 w-full max-w-sm">
            <label for="mce-EMAIL">Email Address</label>
            <div class="join">
              <input
                type="email"
                name="EMAIL"
                class="join-item input input-bordered w-full max-w-sm"
                id="mce-EMAIL"
                placeholder="mail@site.com"
                required
              />
              <button name="subscribe" class="join-item btn btn-success">Subscribe</button>
            </div>
          </div>
          <div aria-hidden="true" class="hidden">
            <input
              type="text"
              name="b_42813cff910e47b1bd132369a_9fd7333f07"
              tabindex="-1"
              value=""
            />
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
