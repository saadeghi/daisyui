<template>
  <div class="min-h-screen hero bg-base-200 text-base-content">
    <div class="w-full max-w-md mx-auto text-center hero-content md:max-w-full">
      <div class="w-full">
        <h2 class="mt-20 mb-2 text-4xl font-extrabold md:text-6xl">
          Try it online
        </h2>
        <h3 class="mb-5 text-3xl font-bold"></h3>
        <p class="w-full mx-auto mb-5 md:max-w-lg">
          Use daisyUI file from CDN
        </p>
        <div class="w-full max-w-sm mx-auto my-2 md:max-w-md lg:max-w-2xl">
          <div class="w-full max-w-xs mx-auto text-sm text-left shadow-lg mockup-code bg-neutral-focus sm:max-w-none">
            <pre><code>
    <span class="text-neutral-content text-opacity-40">&lt;link href="</span>https://cdn.jsdelivr.net/npm/tailwindcss@2.2/dist/tailwind.min.css<span class="text-neutral-content text-opacity-40">" rel="stylesheet" type="text/css" /&gt;</span>
  <span class="text-neutral-content text-opacity-40">  &lt;link href="</span>https://cdn.jsdelivr.net/npm/daisyui@{{ DAISYUI_VERSION }}/dist/full.css<span class="text-neutral-content text-opacity-40">" rel="stylesheet" type="text/css" /&gt;</span>

  </code></pre>
          </div>
        </div>
        <p class="max-w-lg mx-auto mt-10 mb-5">
          Or try it online:
        </p>
        <div class="w-full max-w-xs mx-auto space-x-2 md:max-w-md">
          <a class="btn-outline btn-sm btn" target="_blank" rel="noopener" href="https://codepen.io/saadeghi/pen/gOwWKvv">Codepen</a>
          <NuxtLink to="/tailwindplay" class="btn-outline btn-sm btn" target="_blank" rel="noopener">Tailwind Play</NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        DAISYUI_VERSION: process.env.DAISYUI_VERSION
      };
    },
  };

</script>
