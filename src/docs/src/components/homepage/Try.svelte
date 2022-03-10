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
      <div class="mx-auto w-full max-w-xs space-x-2 md:max-w-md">
        <a target="_blank" rel="noopener" href="/codepen" class="btn-outline btn btn-sm">Codepen</a>
        <a href="/tailwindplay" class="btn-outline btn btn-sm" target="_blank" rel="noopener">Tailwind Play</a>
      </div>
    </div>
  </div>
</div>
