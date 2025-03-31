<script>
  let { product, convertCurrency } = $props()
</script>

<a
  class="group flex flex-col"
  href={`/store/${product.id}`}
  id={product.id}
  data-sveltekit-preload-data
>
  <div class="flex grow items-center">
    <div class="rounded-box gallery-column-reveal w-full">
      <div class="gallery-column-reveal-images">
        {#each product.media.filter((media) => media.type === "image") as media}
          <img
            style={`background-image: url('${media.sm}')`}
            src={media.lg}
            alt={product.title}
            loading="lazy"
            class="bg-base-300 h-full w-full bg-cover bg-center object-cover"
          />
        {/each}
      </div>
      <div class="z-1 size-full transition-colors duration-500 group-hover:bg-black/80">
        <div
          class="grid size-full place-items-center text-white opacity-0 transition-all duration-500 group-hover:opacity-100"
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
      <div class="gallery-column-reveal-columns">
        {#each product.media.filter((media) => media.type === "image") as media}
          <div></div>
        {/each}
      </div>
    </div>
  </div>

  <div class="flex justify-between gap-4 pt-6">
    <div class="flex flex-col gap-1">
      <h2 class="font-title text-lg">
        {product.title}
      </h2>
      <div>
        {#if product.badge}
          <span
            class={`badge badge-soft flex gap-1 rounded-full ps-1 text-[0.625rem] tracking-wide shadow-xs ${product.badge.class}`}
          >
            {#if product.badge.icon === "check"}
              <svg class="size-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
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
            {#if product.badge.icon === "wait"}
              <svg class="size-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
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
            {product.badge.text}
          </span>
        {/if}
      </div>
    </div>
    <div class="flex items-start justify-between">
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
              <span class="text-[0.625rem] italic opacity-50">from</span>
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
    </div>
  </div>
</a>
