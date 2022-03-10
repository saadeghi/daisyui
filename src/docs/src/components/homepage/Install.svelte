<script>
  import { t } from "@src/lib/i18n"
</script>

<div class="hero bg-base-100 text-base-content mx-auto min-h-screen max-w-md md:max-w-full">
  <div class="hero-content text-center">
    <div class="w-full max-w-md">
      <h2 class="mt-20 mb-2 text-4xl font-extrabold md:text-6xl">{$t("install-title")}</h2>
      <p class="mx-auto mt-5 w-full max-w-lg">{$t("install-desc")}</p>
      <p class="mx-auto mt-5 w-full max-w-lg text-left">1. {$t("install-step-1")}:</p>
      <div class="mx-auto my-2 w-full max-w-md">
        <div class="mockup-code mx-auto w-full max-w-xs text-left shadow-lg sm:max-w-none"><pre data-prefix="$"><code>npm i daisyui</code></pre></div>
        <p class="mx-auto mt-5 w-full max-w-lg text-left">2. {$t("install-step-2")}:</p>
        <div class="my-2 w-full max-w-4xl">
          <div class="mockup-code mx-auto w-full max-w-xs text-left text-sm shadow-lg sm:max-w-none">
            <pre><code><span class="text-neutral-content text-opacity-40">// tailwind.config.js</span>
  module.exports = {`{`}
    plugins: [
      <span class="badge badge-secondary">require('daisyui'),</span>
    ],
  {`}`}</code></pre>
          </div>
        </div>
        <a href="/docs/install" class="btn-primary btn btn-wide mt-4 mb-20 shadow-lg">{$t("install-btn")}</a>
      </div>
    </div>
  </div>
</div>
