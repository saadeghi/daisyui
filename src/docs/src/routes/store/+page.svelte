<script>
  export let data
  const products = data.products?.data
  const discounts = data.discounts?.data
  function convertCurrency(number) {
    const formatted = (number / 100).toFixed(2)
    return `$${formatted.endsWith(".00") ? formatted.slice(0, -3) : formatted}`
  }
</script>

<div class="flex flex-col gap-4 p-10">
  {#each discounts as discount}
    {#if discount.attributes.is_limited_to_products !== false}
      <meta name={discount.attributes.name} content="limited to specific products" />
    {:else if discount.attributes.is_limited_redemptions !== false}
      <meta name={discount.attributes.name} content="has limited redemptions" />
    {:else if discount.attributes.starts_at !== null && discount.attributes.starts_at > new Date().toISOString()}
      <meta name={discount.attributes.name} content="not started" />
    {:else if discount.attributes.expires_at !== null && discount.attributes.expires_at < new Date().toISOString()}
      <meta name={discount.attributes.name} content="expired" />
    {:else if discount.attributes.status !== "published"}
      <meta name={discount.attributes.name} content="not published" />
    {:else}
      <div class="alert">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="text-base-content/50 mx-2 h-5 w-5 shrink-0 stroke-current">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6z" />
        </svg>
        <div class="flex flex-col gap-1">
          <h2 class="font-bold">
            {discount.attributes.name} discount!
            {#if discount.attributes.expires_at}
              until {new Date(discount.attributes.expires_at).toLocaleString("en-us", {
                month: "long",
                day: "numeric",
              })}
            {/if}
          </h2>
          <div class="text-base-content/60 text-sm">
            Use <span class="badge badge-outline font-mono tracking-widest">
              {discount.attributes.code}
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
      </div>
    {/if}
  {/each}
</div>
<div class="flex flex-col gap-12">
  {#each products as product}
    <div class="rounded-box relative grid grid-cols-5 gap-10 p-10">
      <div class="col-span-5 row-start-2 flex flex-col gap-10 xl:col-span-2 xl:row-start-1">
        <h2 class="text-lg font-black sm:text-3xl xl:text-4xl">
          {product.attributes.name}
        </h2>
        <div class="flex items-center justify-between">
          <span class="text-2xl font-light xl:text-4xl">
            {convertCurrency(product.attributes.price)}
          </span>
          <a
            href={product.attributes.buy_now_url}
            class="btn btn-primary shrink-0"
            target="_blank"
            rel="noopener noreferrer">
            Get it now
          </a>
        </div>
        {#if product.attributes.description}
          <div class="prose prose-sm leading-3">{@html product.attributes.description}</div>
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
