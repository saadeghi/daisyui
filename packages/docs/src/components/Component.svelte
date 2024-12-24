<script>
  import { onMount } from "svelte"
  import { htmlToJsx, prefixClassNames } from "$lib/actions.svelte.js"
  import { t } from "$lib/i18n"
  import Clipboard from "$components/Clipboard.svelte"
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
</script>

<div
  class="component-preview not-prose text-base-content my-6 lg:my-12"
  id={titleStr}
  bind:this={wrapper}
>
  {#if title}
    <div class="pb-3 text-sm font-bold flex gap-2 items-center">
      <a
        class="bg-base-100 hover:bg-primary/10 size-6 text-base-content/50 hover:text-base-content rounded-sm border border-primary/5 hover:border-primary/10 inline-grid place-content-center hover:shadow-sm hover:shadow-base-200"
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
      <h4 class="component-preview-title text-lg font-semibold mt-2 mb-1">
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
        class="preview bg-base-100 relative flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden bg-cover bg-top p-4 xl:py-10 {classes}"
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
        class="tab checked:[--tab-bg:var(--color-neutral)] border-b-transparent! checked:[--tab-border-color:var(--color-base-100)] checked:text-neutral-content"
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
            <Clipboard strip={true} text={htmlSlot?.firstChild.innerHTML} />
          {/if}
        </div>
      </div>

      <input
        type="radio"
        name={`tab_${uuid}`}
        class="tab checked:[--tab-bg:var(--color-neutral)] border-b-transparent! checked:[--tab-border-color:var(--color-base-100)] checked:text-neutral-content"
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
            <Clipboard strip={true} text={jsxSlot?.firstChild.innerHTML} />
          {/if}
        </div>
      </div>
    {/if}
  </div>
</div>

<style>
</style>
