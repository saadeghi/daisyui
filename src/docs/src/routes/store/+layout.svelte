<script>
  import Footer from "$components/Footer.svelte"
  export let data
</script>

<svelte:head>
  <script>
    window.lemonSqueezyAffiliateConfig = { store: "daisyui" }
  </script>
  <script src="https://lmsqueezy.com/affiliate.js" defer></script>
</svelte:head>
<div class="w-full px-4 pt-20 md:px-20" dir="ltr">
  <div class="flex flex-col items-center gap-6">
    <a href="/store" class="inline-block hover:opacity-80">
      <h1 class="font-title text-base-content text-3xl font-extrabold lg:text-4xl xl:text-6xl">
        daisyUI store
      </h1>
    </a>
    <p class="text-base-content/60 text-xs italic">Professional templates made by daisyUI</p>
  </div>
  <div class="py-20">
    <slot />
  </div>
</div>
<Footer />
