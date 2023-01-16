<script>
  import Ads from "@components/Ads.svelte"
  import { t } from "@src/lib/i18n"

  let isClipboardButtonPressed = false
  let selectedPackageInstaller = "npm"

  function changePackageInstaller(pkgName) {
    selectedPackageInstaller = pkgName  
    isClipboardButtonPressed = false
  }

  function copyInstallScript(pkgName) {
    const scripts = {
      npm: "npm i daisyui",
      yarn: "yarn add daisyui",
    }

    navigator.clipboard.writeText(scripts[pkgName])

    isClipboardButtonPressed = true
    setTimeout(() => {
      isClipboardButtonPressed = false
    }, 2000)
  }
</script>

<div class="from-primary to-secondary text-primary-content -mt-[4rem] grid place-items-center items-end bg-gradient-to-br pt-20">
  <div class="hero-content col-start-1 row-start-1 w-full max-w-7xl flex-col justify-between gap-10 pb-40 lg:flex-row lg:items-end lg:gap-0 xl:gap-20">
    <div class="lg:pl-10 lg:pb-32">
      <div class="mb-2 py-4 text-center lg:py-10 lg:text-left">
        <h1 class="font-title mb-2 text-4xl font-extrabold sm:text-5xl lg:text-6xl">{@html $t("daisyUI components")}</h1>
        <h2 class="font-title text-lg font-extrabold sm:text-xl lg:text-2xl">
          {@html $t("daisyui-tagline")}
        </h2>
      </div>
      <div class="flex w-full flex-col items-center space-y-10 lg:flex-row lg:items-start lg:space-x-4 lg:space-y-0">
        <div class="my-2 flex max-w-sm flex-col gap-2 text-left">
          <div class="flex gap-2">
            <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block h-6 w-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            {$t("feat-1")}
          </div>
          <div class="flex gap-2">
            <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block h-6 w-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            {$t("feat-2")}
          </div>
          <div class="flex gap-2">
            <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block h-6 w-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            {$t("feat-3")}
          </div>
          <div class="flex gap-2">
            <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block h-6 w-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            {$t("feat-4")}
          </div>
          <div class="flex gap-2">
            <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block h-6 w-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            {$t("feat-5")}
          </div>
        </div>

        <div class="mockup-code border-base-content w-full max-w-xs flex-1 border-2 border-opacity-20 bg-transparent pb-6 text-left text-current lg:mx-0">
          <div class="tabs mb-2">
            <a class={`tab tab-bordered selected ${selectedPackageInstaller === "npm" && "tab-active"}`} on:click={() => changePackageInstaller("npm")}>NPM</a>
            <a class={`tab tab-bordered selected ${selectedPackageInstaller === "yarn" && "tab-active"}`} on:click={() => changePackageInstaller("yarn")}>Yarn</a>
          </div>

          {#if selectedPackageInstaller === "npm"}
            <pre class="flex items-center" data-prefix="$"><code>npm i daisyui</code>
            <button class="btn btn-square btn-sm mx-2" on:click={() => copyInstallScript("npm")}>
              {#if isClipboardButtonPressed}
                  <svg class="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M 16 2 C 14.742188 2 13.847656 2.890625 13.40625 4 L 5 4 L 5 29 L 27 29 L 27 4 L 18.59375 4 C 18.152344 2.890625 17.257813 2 16 2 Z M 16 4 C 16.554688 4 17 4.445313 17 5 L 17 6 L 20 6 L 20 8 L 12 8 L 12 6 L 15 6 L 15 5 C 15 4.445313 15.445313 4 16 4 Z M 7 6 L 10 6 L 10 10 L 22 10 L 22 6 L 25 6 L 25 27 L 7 27 Z M 21.28125 13.28125 L 15 19.5625 L 11.71875 16.28125 L 10.28125 17.71875 L 14.28125 21.71875 L 15 22.40625 L 15.71875 21.71875 L 22.71875 14.71875 Z" /></svg>
                {:else}
                  <svg class="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M 16 3 C 14.742188 3 13.847656 3.890625 13.40625 5 L 6 5 L 6 28 L 26 28 L 26 5 L 18.59375 5 C 18.152344 3.890625 17.257813 3 16 3 Z M 16 5 C 16.554688 5 17 5.445313 17 6 L 17 7 L 20 7 L 20 9 L 12 9 L 12 7 L 15 7 L 15 6 C 15 5.445313 15.445313 5 16 5 Z M 8 7 L 10 7 L 10 11 L 22 11 L 22 7 L 24 7 L 24 26 L 8 26 Z" /></svg>
                {/if}
            </button>            
          </pre>
          
          {:else}
            <pre class="flex items-center" data-prefix="$"><code>yarn add daisyui</code>
            <button class="btn btn-square btn-sm mx-2" on:click={() => copyInstallScript("yarn")}>
              {#if isClipboardButtonPressed}
                  <svg class="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M 16 2 C 14.742188 2 13.847656 2.890625 13.40625 4 L 5 4 L 5 29 L 27 29 L 27 4 L 18.59375 4 C 18.152344 2.890625 17.257813 2 16 2 Z M 16 4 C 16.554688 4 17 4.445313 17 5 L 17 6 L 20 6 L 20 8 L 12 8 L 12 6 L 15 6 L 15 5 C 15 4.445313 15.445313 4 16 4 Z M 7 6 L 10 6 L 10 10 L 22 10 L 22 6 L 25 6 L 25 27 L 7 27 Z M 21.28125 13.28125 L 15 19.5625 L 11.71875 16.28125 L 10.28125 17.71875 L 14.28125 21.71875 L 15 22.40625 L 15.71875 21.71875 L 22.71875 14.71875 Z" /></svg>
                {:else}
                  <svg class="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M 16 3 C 14.742188 3 13.847656 3.890625 13.40625 5 L 6 5 L 6 28 L 26 28 L 26 5 L 18.59375 5 C 18.152344 3.890625 17.257813 3 16 3 Z M 16 5 C 16.554688 5 17 5.445313 17 6 L 17 7 L 20 7 L 20 9 L 12 9 L 12 7 L 15 7 L 15 6 C 15 5.445313 15.445313 5 16 5 Z M 8 7 L 10 7 L 10 11 L 22 11 L 22 7 L 24 7 L 24 26 L 8 26 Z" /></svg>
                {/if}
            </button>            
          </pre>
          {/if}
        </div>
      </div>
      <div class="mt-4 flex flex-1 justify-center space-x-2 lg:mt-6 lg:justify-start">
        <a sveltekit:prefetch href="/components" class="btn btn-ghost btn-active lg:btn-lg normal-case">
          <span class="hidden sm:inline">{$t("cta-1")}</span>
          <span class="inline sm:hidden">{$t("cta-1-mobile")}</span>
        </a>
        <a sveltekit:prefetch href="/docs/install" class="btn lg:btn-lg normal-case">{$t("cta-2")}</a>
      </div>
    </div>
    <div>
      <Ads slot="carbon1" />
    </div>
  </div>
  <svg class="fill-secondary col-start-1 row-start-1 h-auto w-full" width="1600" height="595" viewBox="0 0 1600 595" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 338L53.3 349.2C106.7 360.3 213.3 382.7 320 393.8C426.7 405 533.3 405 640 359.3C746.7 313.7 853.3 222.3 960 189.2C1066.7 156 1173.3 181 1280 159.2C1386.7 137.3 1493.3 68.7 1546.7 34.3L1600 0V595H1546.7C1493.3 595 1386.7 595 1280 595C1173.3 595 1066.7 595 960 595C853.3 595 746.7 595 640 595C533.3 595 426.7 595 320 595C213.3 595 106.7 595 53.3 595H0V338Z" /></svg>
</div>
