<script>
  import { t } from "$lib/i18n"
  import { onMount } from "svelte"
  import Clipboard from "$components/Clipboard.svelte"
</script>

<p class="mx-auto mb-2 mt-5 w-full text-start">1. {$t("install-step-1")}:</p>
<div class="tabs tabs-lift w-full">
  <input
    type="radio"
    name="install[packagemanager]"
    class="tab checked:text-neutral-content! [--tab-bg:var(--color-neutral)] [--tab-border-color:var(--color-neutral)] text-neutral"
    aria-label="NPM"
    checked="checked"
  />
  <div class="bg-neutral text-neutral-content tab-content relative p-4 text-left shadow-lg">
    <div class="absolute right-0 top-0 z-1">
      {#if onMount}
        <Clipboard text={`npm i -D daisyui@beta`} />
      {/if}
    </div>
    <pre data-prefix="$"><code>npm i -D daisyui@beta</code></pre>
  </div>
  <input
    type="radio"
    name="install[packagemanager]"
    class="tab checked:text-neutral-content! [--tab-bg:var(--color-neutral)] [--tab-border-color:var(--color-neutral)] text-neutral"
    aria-label="PNPM"
  />
  <div class="bg-neutral text-neutral-content tab-content relative p-4 text-left shadow-lg">
    <div class="absolute right-0 top-0 z-1">
      {#if onMount}
        <Clipboard text={`pnpm add -D daisyui@beta`} />
      {/if}
    </div>
    <pre data-prefix="$"><code>pnpm add -D daisyui@beta</code></pre>
  </div>
  <input
    type="radio"
    name="install[packagemanager]"
    class="tab checked:text-neutral-content! [--tab-bg:var(--color-neutral)] [--tab-border-color:var(--color-neutral)] text-neutral"
    aria-label="Yarn"
  />
  <div class="bg-neutral text-neutral-content tab-content relative p-4 text-left shadow-lg">
    <div class="absolute right-0 top-0 z-1">
      {#if onMount}
        <Clipboard text={`yarn add -D daisyui@beta`} />
      {/if}
    </div>
    <pre data-prefix="$"><code>yarn add -D daisyui@beta</code></pre>
  </div>
  <input
    type="radio"
    name="install[packagemanager]"
    class="tab checked:text-neutral-content! [--tab-bg:var(--color-neutral)] [--tab-border-color:var(--color-neutral)] text-neutral"
    aria-label="Bun"
  />
  <div class="bg-neutral text-neutral-content tab-content relative p-4 text-left shadow-lg">
    <div class="absolute right-0 top-0 z-1">
      {#if onMount}
        <Clipboard text={`bun add -D daisyui@beta`} />
      {/if}
    </div>
    <pre data-prefix="$"><code>bun add -D daisyui@beta</code></pre>
  </div>
</div>
<p class="mx-auto mb-2 mt-5 w-full text-start">2. {$t("install-step-2")}:</p>
<div class="my-2 w-full max-w-4xl">
  <div class="tabs tabs-lift w-full">
    <input
      type="radio"
      name="install[jstype]"
      class="tab checked:text-neutral-content! [--tab-bg:var(--color-neutral)] [--tab-border-color:var(--color-neutral)] text-neutral"
      aria-label="app.css"
      checked="checked"
    />
    <div class="bg-neutral text-neutral-content tab-content relative p-4 text-left shadow-lg">
      <pre dir="ltr"><code
          ><span class="opacity-50">@import "tailwindcss";</span>
<span class="text-success">@plugin "daisyui";</span></code
        ></pre>
      <div class="absolute right-0 top-0 z-1">
        {#if onMount}
          <Clipboard text={`@plugin "daisyui";`} />
        {/if}
      </div>
    </div>
  </div>
</div>
