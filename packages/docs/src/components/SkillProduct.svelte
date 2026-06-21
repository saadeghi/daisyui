<script>
  import DiscountCountdown from "$components/DiscountCountdown.svelte"

  let { product, productKey, convertCurrency, productDiscount = true } = $props()
</script>

<div class={`relative ${productDiscount ? "outline-error z-1 outline-4 outline-offset-4" : ""}`}>
  <a
    href={`/skills/${productKey}/`}
    id={productKey}
    class="bg-base-100 group border-base-content/5 relative flex h-full flex-col items-start gap-4 overflow-hidden border-[length:var(--border)] p-8 font-mono transition-all hover:-translate-y-1 hover:shadow-md focus:-translate-y-0.5 focus:shadow-sm lg:p-16"
  >
    <div class="grid *:[grid-area:1/1] [&_img]:size-16 [&_svg]:size-16">
      <div
        class="translate-y-26 scale-800 [transform:scaleY(.3)] opacity-5 blur-lg saturate-200 transition-all duration-300 group-hover:[transform:scaleY(.4)] group-hover:opacity-30"
      >
        {@html product.logo}
      </div>
      <div
        class="absolute inset-0 size-full"
        style="background: radial-gradient(circle, var(--color-base-100) 25%, transparent 26%),radial-gradient(circle at bottom left, var(--color-base-100) 12%, transparent 13%),radial-gradient(circle at bottom right, var(--color-base-100) 12%, transparent 13%),radial-gradient(circle at top left, var(--color-base-100) 12%, transparent 13%),radial-gradient(circle at top right, var(--color-base-100) 12%, transparent 13%); background-size: 0.25rem 0.25rem;"
      ></div>
      <div class="z-2">
        {@html product.logo}
      </div>
      <div
        class="z-1 opacity-30 brightness-125 transition-all duration-0 group-hover:scale-130 group-hover:opacity-0 group-hover:duration-800"
      >
        {@html product.logo}
      </div>
    </div>
    <div
      class="group-hover:text-base-content text-base-content/60 z-3 text-left text-xs font-medium [text-wrap:balance] transition-colors sm:text-base"
    >
      {product.short_title}
    </div>
    <div
      class="group-hover:text-base-content/70 text-base-content/50 z-3 mb-12 text-left text-[0.75rem] leading-relaxed [text-wrap:balance] transition-colors"
    >
      {product.usecase}
    </div>
    <div class="btn absolute end-8 bottom-8 flex gap-2 font-sans font-medium">
      {#if product.originalprice}
        <span class="line-through opacity-40">
          &nbsp;{convertCurrency(product.originalprice)}&nbsp;
        </span>
      {/if}
      <span class="flex flex-col">
        <span class="flex items-center gap-2">
          {#if product.displayprice}
            <span class={`font-title ${productDiscount ? "line-through" : ""}`}>
              {convertCurrency(product.displayprice)}
            </span>
          {:else if product.from_price && product.to_price && product.from_price !== product.to_price}
            <span class="text-[0.625rem] italic opacity-50">from</span>
            <span class={`font-title ${productDiscount ? "line-through" : ""}`}>
              {convertCurrency(product.from_price)}
            </span>
          {:else}
            <span class={`font-title ${productDiscount ? "line-through" : ""}`}>
              {convertCurrency(product.price)}
            </span>
          {/if}
        </span>
      </span>
    </div>
  </a>
  {#if productDiscount?.expires_at}
    <div class="absolute start-6 -top-5 z-2 flex gap-1.5">
      <div
        class="bg-error text-error-content rounded-field font-title p-2 text-center text-sm font-semibold text-shadow-2xs text-shadow-white/30 xl:px-4 xl:tracking-widest"
      >
        {productDiscount.amount}% DISCOUNT
      </div>
      <DiscountCountdown expiresAt={productDiscount.expires_at} />
    </div>
  {/if}
</div>
