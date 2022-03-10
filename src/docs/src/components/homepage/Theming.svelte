<script>
  import { t } from "@src/lib/i18n"
</script>

<div class="hero from-primary to-accent text-primary-content min-h-screen bg-gradient-to-br">
  <div class="hero-content mx-auto max-w-md text-center md:max-w-full">
    <div>
      <h2 class="mt-20 mb-2 text-4xl font-extrabold md:text-6xl">{$t("theming-title")}</h2>
      <h3 class="mb-5 text-3xl font-bold">{$t("theming-desc")}</h3>
      <p class="mx-auto mb-5 w-full max-w-lg">
        {$t("theming-content")}
        <a href="/docs/themes" class="link">{$t("theming-btn")}</a>
      </p>
      <div class="my-20 flex w-full flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
        <div data-theme="luxury" class="card bg-base-100 text-base-content mx-auto w-full max-w-xs flex-1 p-8">
          <h3 class="text-sm font-bold">Luxury Theme</h3>
          <div class="mt-2 flex flex-col space-y-2">
            <progress value="40" max="100" class="progress" />
            <div class="flex items-center justify-center space-x-2">
              <div class="btn btn-accent btn-square btn-sm"><svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block h-4 w-4 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg></div>
              <label aria-label="toggle" class="label"><input type="checkbox" checked="checked" class="toggle" /></label>
              <label aria-label="Checkbox" class="label"><input type="checkbox" checked="checked" class="checkbox" /></label>
            </div>
            <button class="btn btn-primary btn-block btn-sm">Primary</button>
            <button class="btn btn-secondary btn-block btn-sm">Secondary</button>
            <button class="btn btn-outline btn-block btn-sm">Outline</button>
          </div>
        </div>
        <div data-theme="cupcake" class="card bg-base-100 text-base-content mx-auto w-full max-w-xs flex-1 p-8">
          <h3 class="text-sm font-bold">Cupcake Theme</h3>
          <div class="mt-2 flex flex-col space-y-2">
            <progress value="40" max="100" class="progress" />
            <div class="flex items-center justify-center space-x-2">
              <div class="btn btn-accent btn-square btn-sm"><svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block h-4 w-4 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg></div>
              <label aria-label="toggle" class="label"><input type="checkbox" checked="checked" class="toggle" /></label>
              <label aria-label="Checkbox" class="label"><input type="checkbox" checked="checked" class="checkbox" /></label>
            </div>
            <button class="btn btn-primary btn-block btn-sm">Primary</button>
            <button class="btn btn-secondary btn-block btn-sm">Secondary</button>
            <button class="btn btn-outline btn-block btn-sm">Outline</button>
          </div>
        </div>
        <div data-theme="cyberpunk" class="card bg-base-100 text-base-content mx-auto w-full max-w-xs flex-1 p-8">
          <h3 class="text-sm font-bold">Cyberpunk Theme</h3>
          <div class="mt-2 flex flex-col space-y-2">
            <progress value="40" max="100" class="progress" />
            <div class="flex items-center justify-center space-x-2">
              <div class="btn btn-accent btn-square btn-sm"><svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block h-4 w-4 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg></div>
              <label aria-label="toggle" class="label"><input type="checkbox" checked="checked" class="toggle" /></label>
              <label aria-label="Checkbox" class="label"><input type="checkbox" checked="checked" class="checkbox" /></label>
            </div>
            <button class="btn btn-primary btn-block btn-sm">Primary</button>
            <button class="btn btn-secondary btn-block btn-sm">Secondary</button>
            <button class="btn btn-outline btn-block btn-sm">Outline</button>
          </div>
        </div>
      </div>
      <a href="/docs/themes" class="btn btn-ghost btn-sm mb-20">{$t("theming-btn")}</a>
      <div />
    </div>
  </div>
</div>
