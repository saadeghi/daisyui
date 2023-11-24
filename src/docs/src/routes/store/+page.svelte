<script>
  import { dev } from "$app/environment"
  import SEO from "$components/SEO.svelte"
  import Countdown from "svelte-countdown"

  export let data
  const products = data.products?.data
  const discounts = data.discounts?.data
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

  let isClipboardButtonPressed = false
  const copyText = (text) => {
    navigator.clipboard.writeText(text)
    isClipboardButtonPressed = true
    setTimeout(() => {
      isClipboardButtonPressed = false
    }, 2000)
  }
</script>

<SEO title="Official daisyUI Store" desc="daisyUI Store - Professional templates made by daisyUI" />

<!-- discounts -->
<div class="mb-10 flex flex-col gap-4 p-10">
  {#each discounts as discount}
    {#if discount.attributes.is_limited_to_products !== false}
      {#if dev}<meta name={discount.attributes.name} content="limited to specific products" />{/if}
    {:else if discount.attributes.is_limited_redemptions !== false}
      {#if dev}<meta name={discount.attributes.name} content="has limited redemptions" />{/if}
    {:else if discount.attributes.starts_at !== null && discount.attributes.starts_at > new Date().toISOString()}
      {#if dev}<meta name={discount.attributes.name} content="not started" />{/if}
    {:else if discount.attributes.expires_at !== null && discount.attributes.expires_at < new Date().toISOString()}
      {#if dev}<meta name={discount.attributes.name} content="expired" />{/if}
    {:else if discount.attributes.status !== "published"}
      {#if dev}<meta name={discount.attributes.name} content="not published" />{/if}
    {:else}
      <div class="alert">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="text-base-content/50 mx-2 h-5 w-5 shrink-0 stroke-current max-lg:hidden">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6z" />
        </svg>
        <div class="flex w-full flex-col items-center justify-between gap-10 sm:flex-row">
          <div class="flex flex-col gap-1">
            <h2 class="text-lg font-bold">
              {discount.attributes.name} discount!
            </h2>
            <div class="text-base-content/60 text-sm">
              Use <span
                data-tip={isClipboardButtonPressed ? "copied" : "copy"}
                class="tooltip badge badge-outline">
                <button
                  class="font-mono tracking-widest"
                  on:click={() => copyText(discount.attributes.code)}>
                  {discount.attributes.code}
                </button>
              </span>
              code to get
              <b>
                {discount.attributes.amount_type === "percent"
                  ? `${discount.attributes.amount}%`
                  : `${convertCurrency(discount.attributes.amount)}`}
              </b>
              discount on all products.
            </div>
          </div>

          {#if discount.attributes.expires_at}
            <Countdown
              from={new Date(discount.attributes.expires_at).toLocaleString("en-GB", dateFormat)}
              dateFormat="DD/MM/YYYY, HH:mm:ss"
              let:remaining>
              {#if remaining.done === false}
                <div class="tooltip shrink-0 after:hidden" data-tip="Remaining time">
                  <date
                    datetime={new Date(discount.attributes.expires_at).toLocaleString(
                      "en-GB",
                      dateFormat
                    )}
                    class="grid grid-cols-4 gap-2 text-center font-mono text-xs">
                    <div class="border-base-content/20 rounded-btn border border-dashed p-2">
                      <span class="countdown block text-xl">
                        <span style={`--value:${remaining.days};`}></span>
                      </span>
                      <span class="text-base-content/40 text-xs">day</span>
                    </div>
                    <div class="border-base-content/20 rounded-btn border border-dashed p-2">
                      <span class="countdown block text-xl">
                        <span style={`--value:${remaining.hours};`}></span>
                      </span>
                      <span class="text-base-content/40 text-xs">hour</span>
                    </div>
                    <div class="border-base-content/20 rounded-btn border border-dashed p-2">
                      <span class="countdown block text-xl">
                        <span style={`--value:${remaining.minutes};`}></span>
                      </span>
                      <span class="text-base-content/40 text-xs">min</span>
                    </div>
                    <div class="border-base-content/20 rounded-btn border border-dashed p-2">
                      <span class="countdown block text-xl">
                        <span style={`--value:${remaining.seconds};`}></span>
                      </span>
                      <span class="text-base-content/40 text-xs">sec</span>
                    </div>
                  </date>
                </div>
              {:else if !data}
                <div class="border-base-content/20 rounded-btn shrink-0 border border-dashed p-2">
                  Ended
                </div>
              {/if}
            </Countdown>
          {/if}
        </div>
      </div>
    {/if}
  {/each}
</div>

<!-- published -->
<div class="flex flex-col gap-16">
  {#each products.filter((product) => {
    return product.attributes.status === "published"
  }) as product}
    <div class="rounded-box relative grid grid-cols-5 gap-10 p-10">
      <div class="col-span-5 row-start-2 flex flex-col gap-8 xl:col-span-2 xl:row-start-1">
        <div>
          {#if product.customattributes?.bestseller}
            <span class="badge badge-success badge-outline badge-sm italic">Best Seller</span>
          {/if}
          {#if product.customattributes?.specialDiscount}
            <span class="badge badge-success badge-outline badge-sm italic">Special Discount</span>
          {/if}
          <h2 class="text-lg font-black sm:text-3xl xl:text-4xl">
            {product.attributes.name}
          </h2>
        </div>
        <div class="flex items-center justify-between">
          <div class="flex gap-2">
            {#if product.customattributes?.originalprice}
              <span class="text-2xl line-through opacity-40 xl:text-4xl">
                &nbsp;{convertCurrency(product.customattributes?.originalprice)}&nbsp;
              </span>
            {/if}
            <span class="text-2xl font-light xl:text-4xl">
              {convertCurrency(product.attributes.price)}
            </span>
          </div>
          <a
            href={product.attributes.buy_now_url}
            class="btn btn-primary shrink-0 xl:px-10"
            target="_blank"
            rel="noopener noreferrer">
            Get it now
          </a>
        </div>
        {#if product.attributes.description}
          <div
            class="prose prose-sm prose-li:my-0 prose-ul:leading-none prose-li:leading-normal prose-p:my-2 prose-ul:my-2 text-xs">
            {@html product.attributes.description}
          </div>
        {/if}
      </div>
      <div class="col-span-5 row-start-1 xl:col-span-3">
        <a
          target="_blank"
          href={product.attributes.buy_now_url}
          rel="noopener noreferrer"
          class="aspect-[4/3] object-cover">
          <img
            src={product.attributes.large_thumb_url}
            alt={product.attributes.name}
            class="rounded-box w-full" />
        </a>
      </div>
    </div>
  {:else}
    <div class="lg:col-span-3 flex justify-center items-center font-bold text-base-content/20">
      Coming soon…
    </div>
  {/each}
</div>

<!-- coming soon -->
<div class="divider text-base-content/30 mb-20 mt-52">In development</div>
<div class="grid gap-12 lg:grid-cols-3">
  {#each products.filter((product) => {
    return product.attributes.status === "draft"
  }) as product}
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
          stroke-linejoin="round" />
        <path d="M14 6V14" stroke="currentColor" stroke-width="4" stroke-linecap="round" />
        <path d="M25 23L14 23" stroke="currentColor" stroke-width="4" stroke-linecap="round" />
        <path d="M34 31L14 31" stroke="currentColor" stroke-width="4" stroke-linecap="round" />
        <path d="M34 6V14" stroke="currentColor" stroke-width="4" stroke-linecap="round" />
      </svg>
      <div>{product.attributes.name}</div>
    </div>
  {:else}
    <div class="lg:col-span-3 flex justify-center items-center font-bold text-base-content/20">
      Coming soon…
    </div>
  {/each}
</div>
