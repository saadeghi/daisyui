<script>
  import { t } from "@src/lib/i18n"
</script>

<div class="hero bg-neutral text-neutral-content min-h-screen">
  <div class="hero-content mx-auto max-w-md text-center md:max-w-full">
    <div>
      <h2 class="mt-20 mb-2 text-4xl font-extrabold md:text-6xl">{$t("customizable-title")}</h2>
      <h3 class="mb-5 text-3xl font-bold">{$t("customizable-desc")}</h3>
      <p class="mx-auto mb-5 max-w-lg">
        {$t("customizable-content")}
      </p>
      <div class="my-20 flex flex-col">
        <div class="mockup-code bg-neutral-focus mx-auto w-full max-w-xs text-left shadow-lg sm:max-w-none"><pre><code>&lt;a class="<span>btn btn-primary</span>"&gt;Button&lt;/a&gt;</code></pre></div>
        <div class="divider text-neutral-content text-opacity-30">↓</div>
        <div class="mockup-code bg-neutral-focus mx-auto w-full max-w-xs text-left shadow-lg sm:max-w-none"><pre><code>&lt;a class="<span>btn btn-primary</span> <span class="text-teal-500">rounded-full</span>"&gt;Button&lt;/a&gt;</code></pre></div>
      </div>
    </div>
  </div>
</div>
