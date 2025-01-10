<script>
  import SEO from "$components/SEO.svelte"

  let { data } = $props()
  const { product } = data

  let currentIndex = $state(0)

  function next() {
    currentIndex = (currentIndex + 1) % product.media.length
  }

  function prev() {
    currentIndex = (currentIndex - 1 + product.media.length) % product.media.length
  }

  function convertCurrency(number) {
    const formatted = (number / 100).toFixed(2)
    return `$${formatted.endsWith(".00") ? formatted.slice(0, -3) : formatted}`
  }

  function extractUUID(url) {
    const regex = /\/buy\/([a-f0-9-]{36})(?:\?|$)/
    const match = url.match(regex)
    return match ? match[1] : null
  }

  function rednerBuyNowUrl(url, ref, params) {
    if (ref) {
      return `/store/checkout?product=${extractUUID(url)}&aff=${ref}${params ? `&${params}` : ""}`
    }
    return `${url}${params ? `?${params}` : ""}`
  }

  const faq = [
    {
      Q: "How can I get the file",
      A: "Click the 'Buy now' button, fill the payment form, and you will receive an email with the download link.",
    },
    {
      Q: "What happens after I buy",
      A: "You will receive an email with the download link. If you don't see the email, check your spam folder.",
    },
    {
      Q: "Will I receive updates?",
      A: "All packages will receive bug fixes as long as they are available. You can download the latest version from the link you received in the email, or from https://app.lemonsqueezy.com/my-orders",
    },
    {
      Q: "Do I get customer support",
      A: "We offer support via Discord. You can join the server https://daisyui.com/discord and ask your questions there. We will do our best to help you.",
    },
    {
      Q: "I didn't receive the email",
      A: "Please check your spam folder. If you still can't find it, send an email to help@daisyui.com so I can help you.",
    },
    {
      Q: "I bought the wrong package",
      A: "Send me an email at help@daisyui.com and I will help you get the right package.",
    },
    {
      Q: "I paid twice for the same product",
      A: "If you paid twice for the same product, send an email to help@daisyui.com and I will refund the extra payment.",
    },
    {
      Q: "There was an issue with the payment",
      A: "If the payment failed and you didn't receive the product, it usually means the payment didn't go through. Please try again. If the money was deducted from your account, it will be refunded automatically within a week or two. If the issue persists, send an email to help@daisyui.com so I can help you.",
    },
    {
      Q: "Can I get a refund",
      A: "If there was an issue with the product, send an email to help@daisyui.com so I can help you. I will do my best to resolve the issue. We don't offer refunds for digital products, however if there was a mistake in payment, for example if you paid twice for the same product, send an email to help@daisyui.com and I will refund the extra payment.",
    },
    {
      Q: "What's the license",
      A: "Each product has its own license. The link to the license is available on this page and also in the package you receive. If you have any questions about the license, send an email to help@daisyui.com",
    },
    {
      Q: "I have other questions",
      A: "Send an email to help@daisyui.com and I will do my best to help you.",
    },
  ]
</script>

<SEO title={`${product.attributes.name} - daisyUI Store`} desc={product.attributes.description} />

<div class="mx-4">
  <a
    class="inline-flex items-center gap-2 text-base-content opacity-50 hover:opacity-100"
    href="/store/"
    data-sveltekit-preload-data
  >
    <svg class="size-4 inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
      ><g fill="currentColor"
        ><line
          x1="17"
          y1="10"
          x2="3"
          y2="10"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
        ></line><polyline
          points="8 5 3 10 8 15"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
        ></polyline></g
      ></svg
    >
    <span class="text-sm">Back to store</span>
  </a>
</div>
<div class="mx-auto py-10">
  <div class="grid xl:grid-cols-2 gap-12">
    <!-- Product Images/Media -->
    <div class="flex flex-col gap-4">
      <div class="relative">
        <div class="relative group rounded-box overflow-hidden border border-base-300">
          <div
            class="flex transition-transform duration-300"
            style={`transform: translateX(-${currentIndex * 100}%)`}
          >
            {#each product.media as media}
              <div class="w-full shrink-0">
                {#if media.type === "video"}
                  <div class="w-full" style={`aspect-ratio: ${media.ratio};`}>
                    <iframe
                      class="w-full h-full"
                      src={media.url}
                      title={product.attributes.name}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </div>
                {:else if media.type === "image"}
                  <img
                    src={media.lg}
                    alt={product.attributes.name}
                    class="w-full object-cover"
                    loading="lazy"
                  />
                {/if}
              </div>
            {/each}
          </div>

          {#if product.media.length > 1}
            <div
              class="absolute left-4 top-1/2 -translate-y-1/2 group-hover:opacity-100 opacity-0 transition-opacity"
            >
              <button class="btn btn-circle" onclick={prev}> ← </button>
            </div>
            <div
              class="absolute right-4 top-1/2 -translate-y-1/2 group-hover:opacity-100 opacity-0 transition-opacity"
            >
              <button class="btn btn-circle" onclick={next}> → </button>
            </div>
          {/if}
        </div>

        <!-- Thumbnail Navigation -->
        {#if product.media.length > 1}
          <div class="overflow-x-auto -mx-4">
            <div class="flex gap-2 p-4">
              {#each product.media as media, i}
                <button
                  class="h-8 w-11 shrink-0 rounded-sm overflow-hidden outline-2 outline-offset-2 cursor-pointer border border-base-content/15"
                  class:outline-base-content={i === currentIndex}
                  class:outline-transparent={i !== currentIndex}
                  onclick={() => (currentIndex = i)}
                >
                  {#if media.type === "image"}
                    <img
                      src={media.sm}
                      alt={`${product.attributes.name} thumbnail ${i + 1}`}
                      class="w-full h-full object-cover brightness-90"
                    />
                  {:else}
                    <div
                      class="w-full h-full bg-base-200 grid place-items-center *:[grid-area:1/1]"
                    >
                      <img
                        class="w-full h-full object-cover blur-[2px] brightness-90"
                        src={product.media.find((media) => media.type === "image").sm}
                        alt={product.attributes.name}
                      />
                      <svg
                        class="size-5 text-black z-1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        ><g
                          stroke-linejoin="round"
                          stroke-linecap="round"
                          stroke-width="1.5"
                          fill="none"
                          ><path
                            d="M14.9531 12.3948C14.8016 13.0215 14.0857 13.4644 12.6539 14.3502C11.2697 15.2064 10.5777 15.6346 10.0199 15.4625C9.78934 15.3913 9.57925 15.2562 9.40982 15.07C9 14.6198 9 13.7465 9 12C9 10.2535 9 9.38018 9.40982 8.92995C9.57925 8.74381 9.78934 8.60868 10.0199 8.53753C10.5777 8.36544 11.2697 8.79357 12.6539 9.64983C14.0857 10.5356 14.8016 10.9785 14.9531 11.6052C15.0156 11.8639 15.0156 12.1361 14.9531 12.3948Z"
                            stroke="currentColor"
                          ></path><path
                            d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z"
                            stroke="currentColor"
                          ></path></g
                        ></svg
                      >
                    </div>
                  {/if}
                </button>
              {/each}
            </div>
          </div>
        {/if}
        <div
          class="border border-base-300 grid rounded-box my-6 divide-x text-[0.6875rem] divide-base-300 overflow-hidden"
          style={`grid-template-columns: repeat(${Object.keys(product.links).length}, minmax(0, 1fr));`}
        >
          {#each Object.entries(product.links) as [link, value]}
            <a
              target="_blank"
              aria-label={link}
              href={value}
              rel="noopener noreferrer"
              class="opacity-60 hover:opacity-100 flex flex-col gap-2 items-center p-6 text-center hover:bg-base-200"
            >
              {#if link === "license"}
                <svg class="inline-block w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                  ><g
                    stroke-linejoin="round"
                    stroke-linecap="round"
                    stroke-width="2"
                    fill="none"
                    stroke="currentColor"
                    ><path d="M7 20l10 0"></path><path d="M6 6l6 -1l6 1"></path><path d="M12 3l0 17"
                    ></path><path d="M9 12l-3 -6l-3 6a3 3 0 0 0 6 0"></path><path
                      d="M21 12l-3 -6l-3 6a3 3 0 0 0 6 0"
                    ></path></g
                  ></svg
                >
              {/if}
              {#if link === "screenshot"}
                <svg
                  class="inline-block w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <g
                    stroke-linejoin="round"
                    stroke-linecap="round"
                    stroke-width="2"
                    fill="none"
                    stroke="currentColor"
                    ><circle cx="11" cy="11" r="8"></circle><path d="M21 21L16.65 16.65"
                    ></path><path d="M11 8L11 14"></path><path d="M8 11L14 11"></path></g
                  >
                </svg>
              {/if}
              {#if link === "preview"}
                <svg
                  class="inline-block w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <g
                    stroke-linejoin="round"
                    stroke-linecap="round"
                    stroke-width="2"
                    fill="none"
                    stroke="currentColor"
                    ><path
                      d="M10 7.75a.75.75 0 0 1 1.142-.638l3.664 2.249a.75.75 0 0 1 0 1.278l-3.664 2.25a.75.75 0 0 1-1.142-.64z"
                    ></path><path d="M12 17v4"></path><path d="M8 21h8"></path><rect
                      x="2"
                      y="3"
                      width="20"
                      height="14"
                      rx="2"
                    ></rect></g
                  >
                </svg>
              {/if}
              {link}
            </a>
          {/each}
        </div>
      </div>
    </div>

    <!-- Product Info -->
    <div class="flex flex-col gap-6">
      <div>
        {#if product.tags}
          <div class="flex gap-2">
            {#each product.tags as tag}
              <span class="badge badge-sm badge-success badge-soft italic">{tag}</span>
            {/each}
          </div>
        {/if}

        <h1 class="text-4xl font-bold">{product.attributes.name}</h1>
      </div>
      <div class="flex items-start justify-between">
        <div class="flex gap-2">
          {#if product.originalprice}
            <span class="text-2xl line-through opacity-40">
              {convertCurrency(product.originalprice)}
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
            href={rednerBuyNowUrl(product.attributes.buy_now_url, product.ref, product.params)}
            class="btn btn-lg btn-primary group shrink-0 rounded-full xl:px-10"
            target="_blank"
            rel="noopener noreferrer"
          >
            Buy now
            <span class="flex gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="hidden size-6 transition-transform duration-300 group-hover:translate-x-1 rtl:rotate-180 group-hover:rtl:-translate-x-1 md:inline-block"
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

      {#if product.attributes.description}
        <div class="prose prose-sm text-xs max-w-none ps-0!">
          {@html product.attributes.description}
        </div>
      {/if}

      {#if product.tech}
        <div class="flex items-center gap-4 mt-4 lg:gap-8">
          <span class="text-sm text-base-content/60">Made with:</span>
          {#each product.tech as tech}
            <div class="tooltip" data-tip={data.tech[tech].title}>
              <img
                class="size-6 lg:size-8"
                src={`https://img.daisyui.com/images/logos/${tech}.svg`}
                alt={tech}
              />
            </div>
          {/each}
        </div>
      {/if}

      {#if product.quote}
        <div class="chat chat-end">
          {#each product.quote.text as text, index}
            <div
              class={`chat-bubble mt-1 text-xs max-w-md bg-base-200 text-base-content ${index !== product.quote.text.length - 1 ? "before:hidden [.chat-end>&]:rounded-field" : ""}`}
            >
              {#each text as line}
                <p class="py-1">{@html line}</p>
              {/each}
            </div>
          {/each}
          <div class="chat-image avatar">
            <div class="w-10 rounded-full">
              <img alt={product.quote.name} src={product.quote.img} />
            </div>
          </div>
        </div>
      {/if}
    </div>
  </div>
  <div class="my-40">
    {#each product.more_images as image}
      <img src={image} alt={product.attributes.name} class="w-full object-cover" loading="lazy" />
    {/each}
  </div>
  <div class="my-40 max-w-2xl mx-auto">
    <h2 class="px-4 py-10 font-semibold font-title text-3xl">daisyUI Store FAQ</h2>

    {#each faq as item}
      <div class="collapse collapse-plus bg-base-100 border border-base-300 mb-4">
        <input type="radio" name="faq" checked="checked" />
        <div class="collapse-title font-semibold">{item.Q}</div>
        <div class="collapse-content text-xs">
          {item.A}
        </div>
      </div>
    {/each}
  </div>
</div>
