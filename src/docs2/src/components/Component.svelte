<script>
  import { onMount } from "svelte"

  let Prism
  onMount(async () => {
    Prism = (await import("svelte-prism")).default
  })
  export let title
  export let desc
  export let bg
  export let classes
  let showContent = "preview"
  let htmlSlot

  let isClipboardButtonPressed = false
  const copyText = (text) => {
    navigator.clipboard.writeText(text)
    isClipboardButtonPressed = true
    setTimeout(() => {
      isClipboardButtonPressed = false
    }, 2000)
  }
  const decodeHtml = (html) => {
    var txt = document.createElement("textarea")
    txt.innerHTML = html
    return txt.value
  }
</script>

<div class="component-preview not-prose my-4 max-w-4xl">
  {#if title}
    <div class="pb-2 text-sm font-bold">
      {title}
    </div>
  {/if}
  {#if desc}
    <div class="pb-2 text-xs opacity-70">
      {desc}
    </div>
  {/if}
  <div class="grid">
    <div class="tabs z-10 -mb-px">
      <button on:click={() => (showContent = "preview")} class={`tab tab-lifted ${showContent == "preview" ? "tab-active [--tab-bg:hsl(var(--b2))]" : "[--tab-border-color:transparent]"}`}>Preview</button>
      <button on:click={() => (showContent = "html")} class={`tab tab-lifted ${showContent == "html" ? "tab-active [--tab-bg:hsl(var(--n))] [--tab-border-color:hsl(var(--n))] [--tab-color:hsl(var(--nc))]" : ""}`}>HTML</button>
      <div class="tab tab-lifted mr-6 flex-1 cursor-default [--tab-border-color:transparent]" />
    </div>

    {#if showContent == "preview"}
      <div class="bg-base-300 relative overflow-x-auto rounded-b-xl rounded-tr-xl">
        <div class="border-base-300 bg-base-200 preview flex min-h-[6rem] min-w-[24rem] max-w-4xl resize-x flex-wrap items-center justify-center gap-2 overflow-x-hidden rounded-b-xl rounded-tr-xl border bg-cover bg-center	p-4 {classes}" style={bg ? `background-image: url(${bg})` : `background-size: 5px 5px`}>
          <slot />
        </div>
      </div>
    {/if}

    {#if onMount && showContent == "html"}
      <div class="grid">
        <div class="hidden" bind:this={htmlSlot}>
          <slot name="html" />
        </div>
        <div class="code-wrapper col-start-1 row-start-1">
          <svelte:component this={Prism} language="html">
            <slot name="html" />
          </svelte:component>
        </div>
        <div class="col-start-1 row-start-1 flex items-start justify-end p-2">
          <div data-tip={isClipboardButtonPressed ? "copied" : "copy"} class="tooltip tooltip-left tooltip-accent">
            <button class="btn btn-square btn-sm" on:click={() => copyText(decodeHtml(htmlSlot.firstChild.innerHTML))}>
              {#if isClipboardButtonPressed}
                <svg class="h-5 w-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M 16 2 C 14.742188 2 13.847656 2.890625 13.40625 4 L 5 4 L 5 29 L 27 29 L 27 4 L 18.59375 4 C 18.152344 2.890625 17.257813 2 16 2 Z M 16 4 C 16.554688 4 17 4.445313 17 5 L 17 6 L 20 6 L 20 8 L 12 8 L 12 6 L 15 6 L 15 5 C 15 4.445313 15.445313 4 16 4 Z M 7 6 L 10 6 L 10 10 L 22 10 L 22 6 L 25 6 L 25 27 L 7 27 Z M 21.28125 13.28125 L 15 19.5625 L 11.71875 16.28125 L 10.28125 17.71875 L 14.28125 21.71875 L 15 22.40625 L 15.71875 21.71875 L 22.71875 14.71875 Z" /></svg>
              {:else}
                <svg class="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M 16 3 C 14.742188 3 13.847656 3.890625 13.40625 5 L 6 5 L 6 28 L 26 28 L 26 5 L 18.59375 5 C 18.152344 3.890625 17.257813 3 16 3 Z M 16 5 C 16.554688 5 17 5.445313 17 6 L 17 7 L 20 7 L 20 9 L 12 9 L 12 7 L 15 7 L 15 6 C 15 5.445313 15.445313 5 16 5 Z M 8 7 L 10 7 L 10 11 L 22 11 L 22 7 L 24 7 L 24 26 L 8 26 Z" /></svg>
              {/if}
            </button>
          </div>
        </div>
      </div>
    {/if}
  </div>
</div>

<style global lang="postcss">
  .prose .code-wrapper {
    max-width: 100vw;
    overflow-x: auto;
  }
  .prose .component-preview pre[class*="language-"] {
    width: 100%;
    max-width: 100%;
    font-size: 14px;
    padding-top: 1rem;
    padding-bottom: 1rem;
    border-top-right-radius: 0.75rem;
    border-top-left-radius: 0.75rem;
    border-bottom-right-radius: 0.75rem;
    border-bottom-left-radius: 0.75rem;
    margin: 0;
    min-height: 6rem;
  }
  .prose .component-preview pre[class*="language-"] .token.comment {
    color: hsla(var(--nc) / 0.4);
  }
  [data-theme="wireframe"],
  [data-theme="lofi"] {
    .prose .component-preview pre[class*="language-"] {
      .token.attr-value {
        color: #587e20;
      }
      .token.punctuation {
        color: #00449b;
      }
      .token.attr-name {
        color: #cd7302;
      }
    }
  }
  [data-theme="pastel"] {
    .prose .component-preview pre[class*="language-"] {
      .token.punctuation {
        color: #2b477c;
      }
      .token.tag {
        color: #810c47;
      }
      .token.attr-value {
        color: #155211;
      }
      .token.attr-name {
        color: #8d4e0b;
      }
    }
  }
  [data-theme="valentine"] {
    .prose .component-preview pre[class*="language-"] {
      .token.tag {
        color: #ffa2a2;
      }
    }
  }
  .prose .component-preview .preview {
    background-image: radial-gradient(hsla(var(--bc) / 0.2) 0.5px, hsla(var(--b2) / 1) 0.5px);
  }
</style>
