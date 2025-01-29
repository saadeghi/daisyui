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
      <div class="overflow-hidden w-full rounded-box grid *:[grid-area:1/1] place-items-center">
        <img
          style={`background-image: url('${media.sm}')`}
          src={media.lg}
          alt={product.attributes.name}
          loading="lazy"
          class="bg-base-300 w-full h-full bg-cover bg-center object-cover group-hover:scale-103 ease-out transition-transform duration-300"
        />
        <div class="z-1 transition-colors size-full duration-500 group-hover:bg-black/60">
          <div
            class="duration-500 text-white opacity-0 group-hover:opacity-100 transition-all grid place-items-center size-full"
          >
            <div class="flex items-center gap-3">
              View details
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="inline-block size-[1em] animate-[bounce-horizontal_1s_infinite]"
                viewBox="0 0 16 16"
                ><g fill="none"
                  ><path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M2 8C2 7.58579 2.33579 7.25 2.75 7.25L11.4393 7.25L8.21967 4.03033C7.92678 3.73744 7.92678 3.26256 8.21967 2.96967C8.51256 2.67678 8.98744 2.67678 9.28033 2.96967L13.7803 7.46967C14.0732 7.76256 14.0732 8.23744 13.7803 8.53033L9.28033 13.0303C8.98744 13.3232 8.51256 13.3232 8.21967 13.0303C7.92678 12.7374 7.92678 12.2626 8.21967 11.9697L11.4393 8.75L2.75 8.75C2.33579 8.75 2 8.41421 2 8Z"
                    fill="currentColor"
                  ></path></g
                ></svg
              >
            </div>
          </div>
        </div>
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
