<script>
  import { browser } from "$app/env"
  import Prism from "svelte-prism"
  import CopyToClipboard from "@components/CopyToClipboard.svelte"

  export let title = ""
  let showContent = "preview"
  let htmlSlot
</script>

<div class="component-preview my-4">
  <div class="pb-2">
    {title}
  </div>
  <div class="grid">
    <div class="tabs -mb-px">
      <button on:click={() => (showContent = "preview")} class={`tab tab-lifted ${showContent == "preview" ? "tab-active [--tab-bg:hsl(var(--b2))]" : "[--tab-border-color:transparent]"}`}>Preview</button>
      <button on:click={() => (showContent = "html")} class={`tab tab-lifted ${showContent == "html" ? "tab-active [--tab-bg:hsl(var(--n))] [--tab-border-color:hsl(var(--n))] [--tab-color:hsl(var(--nc))]" : ""}`}>HTML</button>
      <div class="tab tab-lifted mr-6 flex-1 cursor-default" />
    </div>

    {#if showContent == "preview"}
      <div class="border-base-300 preview flex w-full items-center justify-center rounded-b-xl rounded-tr-xl border py-16">
        <slot />
      </div>
    {/if}

    {#if browser && showContent == "html"}
      <div class="grid" bind:this={htmlSlot}>
        <div class="col-start-1 row-start-1">
          <Prism language="html">
            <slot name="html" />
          </Prism>
        </div>
        <div class="col-start-1 row-start-1 flex items-start justify-end p-2">
          <CopyToClipboard textToCopy="fixthis" />
        </div>
      </div>
    {/if}
  </div>
</div>

<style global>
  .prose .component-preview pre[class*="language-"] {
    padding-top: 1em;
    padding-bottom: 1em;
    max-width: 100%;
    font-size: 14px;
    border-top-right-radius: 0.75rem;
    border-top-left-radius: 0.75rem;
    border-bottom-right-radius: 0.75rem;
    border-bottom-left-radius: 0.75rem;
    margin-top: 0;
  }
  .prose .component-preview .preview {
    background-image: radial-gradient(hsla(var(--bc) / 0.15) 0.5px, hsla(var(--b2) / 0.9) 0.5px);
    background-size: 10px 10px;
  }
</style>
