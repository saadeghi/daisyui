<script>
  import { onMount } from "svelte"
  import { htmlToJsx, prefixClassNames } from "$lib/actions.svelte.js"
  import { t } from "$lib/i18n.svelte.js"
  import Clipboard from "$components/Clipboard.svelte"
  import { prefix } from "$lib/stores"

  let {
    title = undefined,
    desc = undefined,
    bg = undefined,
    classes = undefined,
    responsive = false,
    children,
    html,
    jsx,
    uuid = crypto.randomUUID(),
  } = $props()

  let wrapper = $state()
  let htmlSlot = $state()
  let jsxSlot = $state()
  let htmlContent = $state("")
  let jsxContent = $state("")

  let titleStr = $derived(
    title
      ? title
          .replace(/[ ]/g, "-") // replace spaces with -
          .replace(/[^A-Za-z0-9-]/g, "") // replace all non-alphanumeric chars
          .toLowerCase()
      : "",
  )

  onMount(() => {
    if (document.getElementById(location.hash.slice(1)) && location.hash.slice(1) === titleStr) {
      document.getElementById(location.hash.slice(1)).click()
    }
  })

  // Subscribe to prefix changes
  $effect(() => {
    const unsubscribe = prefix.subscribe((value) => {
      if (htmlSlot) {
        htmlContent = htmlSlot.firstChild.innerHTML
      }
      if (jsxSlot) {
        jsxContent = jsxSlot.firstChild.innerHTML
      }
    })

    return () => unsubscribe()
  })
</script>

<div
  class="component-preview not-prose text-base-content my-6 lg:my-12"
  id={titleStr}
  bind:this={wrapper}
>
  {#if title}
    <div class="flex items-center gap-2 pb-3 text-sm font-bold">
      <a
        class="bg-base-100 hover:bg-primary/10 text-base-content/50 hover:text-base-content border-primary/5 hover:border-primary/10 hover:shadow-base-200 inline-grid size-6 place-content-center rounded-sm border hover:shadow-sm"
        href={`#${titleStr}`}
      >
        <svg
          class="size-3"
          fill="currentColor"
          width="12"
          height="12"
          viewBox="0 0 256 256"
          id="Flat"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M216,148H172V108h44a12,12,0,0,0,0-24H172V40a12,12,0,0,0-24,0V84H108V40a12,12,0,0,0-24,0V84H40a12,12,0,0,0,0,24H84v40H40a12,12,0,0,0,0,24H84v44a12,12,0,0,0,24,0V172h40v44a12,12,0,0,0,24,0V172h44a12,12,0,0,0,0-24Zm-108,0V108h40v40Z"
          />
        </svg>
      </a>
      <h4 class="component-preview-title mt-2 mb-1 text-lg font-semibold">
        {$t(title)}
      </h4>
    </div>
  {/if}
  {#if desc}
    <div class="pb-4 text-xs opacity-70">
      {$t(desc)}
    </div>
  {/if}
  <div class="tabs tabs-lift">
    <input
      type="radio"
      name={`tab_${uuid}`}
      class="tab [--tab-p:.75rem]"
      aria-label={$t("Preview")}
      checked="checked"
    />
    <div class="tab-content border-base-300 overflow-x-auto">
      <div
        class="preview bg-base-100 relative flex min-h-[6rem] max-w-4xl min-w-[18rem] flex-wrap items-center justify-center gap-2 overflow-x-hidden bg-cover bg-top p-4 xl:py-10 {classes}"
        style={bg ? `background-image: url(${bg});background-size:cover;` : ``}
        class:resize-x={responsive}
      >
        {@render children()}
      </div>
    </div>

    {#if onMount}
      <input
        type="radio"
        name={`tab_${uuid}`}
        class="tab checked:text-neutral-content border-b-transparent! checked:[--tab-bg:var(--color-neutral)] checked:[--tab-border-color:var(--color-base-100)]"
        aria-label="HTML"
      />
      <div class="tab-content">
        <div class="grid *:[grid-area:1/1]">
          <div class="hidden" bind:this={htmlSlot} use:prefixClassNames>
            <pre>{@render html()}</pre>
          </div>
          <div class="code-wrapper" use:prefixClassNames>
            {@render html()}
          </div>
          {#if onMount}
            <Clipboard strip={true} text={htmlContent} />
          {/if}
        </div>
      </div>

      <input
        type="radio"
        name={`tab_${uuid}`}
        class="tab checked:text-neutral-content border-b-transparent! checked:[--tab-bg:var(--color-neutral)] checked:[--tab-border-color:var(--color-base-100)]"
        aria-label="JSX"
      />
      <div class="tab-content">
        <div class="grid *:[grid-area:1/1]">
          <div class="hidden" bind:this={jsxSlot}>
            <pre use:htmlToJsx use:prefixClassNames>
            {#if jsx}
                {@render jsx()}
              {:else}
                {@render html()}
              {/if}
          </pre>
          </div>
          <div class="code-wrapper">
            <div use:htmlToJsx use:prefixClassNames>
              {#if jsx}
                {@render jsx()}
              {:else}
                {@render html()}
              {/if}
            </div>
          </div>
          {#if onMount}
            <Clipboard strip={true} text={jsxContent} />
          {/if}
        </div>
      </div>
    {/if}
  </div>
</div>

<style>
</style>
