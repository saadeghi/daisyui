<script>
  import { readEnv } from "$lib/util"
  let version = readEnv("VITE_DAISYUI_VERSION", "latest")

  import { t } from "@src/lib/i18n"
</script>

<div class="hero bg-base-200 text-base-content min-h-screen py-10">
  <div class="hero-content mx-auto w-full max-w-md text-center md:max-w-full">
    <div class="w-full">
      <h2 class="mt-20 mb-2 text-4xl font-extrabold md:text-6xl">{$t("try-online-title")}</h2>
      <p class="mx-auto mb-5 w-full md:max-w-lg">{$t("try-online-desc")}</p>
      <div class="mx-auto my-2 w-full max-w-sm md:max-w-md lg:max-w-2xl">
        <div class="mockup-code bg-neutral-focus mx-auto w-full max-w-xs text-left text-sm shadow-lg sm:max-w-none">
          <pre><code>
  <span class="text-neutral-content text-opacity-40">&lt;link href="</span>https://cdn.jsdelivr.net/npm/daisyui@{version}/dist/full.css<span class="text-neutral-content text-opacity-40">" rel="stylesheet" type="text/css" /&gt;</span>
  <span class="text-neutral-content text-opacity-40">&lt;script src="</span>https://cdn.tailwindcss.com<span class="text-neutral-content text-opacity-40">"&gt;&lt;/script&gt;</span>

</code></pre>
        </div>
      </div>
      <p class="mx-auto mt-10 mb-5 max-w-lg">{$t("try-online-playground-links-title")}:</p>
      <div class="flex flex-wrap justify-center gap-2">
        <a target="_blank" rel="noopener" href="/codepen" class="btn-outline btn gap-3 normal-case">
          <svg class="h-4 w-4 stroke-current" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" fill="none" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"><path d="M3.06 41.732L32 60.932l28.94-19.2V22.268L32 3.068l-28.94 19.2zm57.878 0L32 22.268 3.06 41.732m0-19.463L32 41.47l28.94-19.2M32 3.068v19.2m0 19.463v19.2" stroke-width="6.05" /></svg>
          CodePen
        </a>
        <a href="/tailwindplay" class="btn-outline btn gap-3 normal-case" target="_blank" rel="noopener">
          <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 54 33">
            <g clip-path="url(#prefix__clip0)"><path fill="#38bdf8" fill-rule="evenodd" d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z" clip-rule="evenodd" /></g>
            <defs><clipPath id="prefix__clip0"><path fill="#fff" d="M0 0h54v32.4H0z" /></clipPath></defs>
          </svg>
          Tailwind Play
        </a>
        <a sveltekit:prefetch href="/docs/install/" class="btn-outline btn gap-3 normal-case">
          <div class="flex">
            <img class="w-5" src="/logos/react.svg" alt="React" loading="lazy" />
            <img class="w-5" src="/logos/vue.svg" alt="Vue" loading="lazy" />
            <img class="w-5" src="/logos/svelte.svg" alt="Svelte" loading="lazy" />
          </div>
          {$t("More examples")}
          <svg class="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M 18.71875 6.78125 L 17.28125 8.21875 L 24.0625 15 L 4 15 L 4 17 L 24.0625 17 L 17.28125 23.78125 L 18.71875 25.21875 L 27.21875 16.71875 L 27.90625 16 L 27.21875 15.28125 Z" /></svg>
        </a>
      </div>
    </div>
  </div>
</div>
