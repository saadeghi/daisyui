<script>
  let { product, convertCurrency } = $props()
</script>

<a
  class="flex flex-col group"
  href={`/store/${product.id}`}
  id={product.id}
  data-sveltekit-preload-data
>
  <div class="grow flex items-center">
    {#each product.media.filter((media) => media.type === "image").slice(0, 1) as media}
      <div class="overflow-hidden w-full rounded-box">
        <img
          style={`background-image: url('${media.sm}')`}
          src={media.lg}
          alt={product.attributes.name}
          loading="lazy"
          class="bg-base-300 w-full h-full bg-cover bg-center object-cover group-hover:scale-103 ease-out transition-transform duration-300"
        />
      </div>
    {/each}
  </div>

  <div class="py-6 flex justify-center gap-4">
    <h2 class="text-lg font-title">{product.attributes.name}</h2>
    <!-- <div class="flex items-start justify-between">
      <div class="flex gap-2">
        {#if product.originalprice}
          <span class="line-through opacity-40">
            &nbsp;{convertCurrency(product.originalprice)}&nbsp;
          </span>
        {/if}
        <span class="flex flex-col">
          <span class="flex items-center gap-2">
            {#if product.displayprice}
              <span class="font-title">
                {convertCurrency(product.displayprice)}
              </span>
            {:else if product.attributes.from_price && product.attributes.to_price && product.attributes.from_price !== product.attributes.to_price}
              <span class="text-[0.625rem] opacity-50">From</span>
              <span class="font-title">
                {convertCurrency(product.attributes.from_price)}
              </span>
            {:else}
              <span class="font-title">
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
    </div> -->
  </div>
</a>
