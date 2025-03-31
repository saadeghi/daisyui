---
title: Use daisyUI from CDN
desc: How to use daisyUI from a CDN?
---

<script>
  import { onMount } from "svelte"
  import Translate from "$components/Translate.svelte";
  import Clipboard from "$components/Clipboard.svelte"
  import { writable, derived } from 'svelte/store';
  export let data;

  // Create a map of the initial order of the URLs
  const initialOrderMap = new Map(data.files.map((file, index) => [file, index]));

  let selectedUrls = writable(data.files.filter(file => file.checked));

  function toggleUrl(url) {
    selectedUrls.update((current) => {
      if (current.includes(url)) {
        return current.filter((item) => item !== url);
      } else {
        const updated = [...current, url];
        // Sort the updated array based on the initial order
        updated.sort((a, b) => initialOrderMap.get(a) - initialOrderMap.get(b));
        return updated;
      }
    });
    url.checked = !url.checked;
  }

  let combinedUrl = derived(selectedUrls, ($selectedUrls) => {
    return $selectedUrls.length
      ? `https://cdn.jsdelivr.net/combine/${$selectedUrls.map((url) => `npm/daisyui@5/${url.path}`).join(",")}`
      : "";
  });

  let totalSize = derived(selectedUrls, ($selectedUrls) => {
    return $selectedUrls.reduce((sum, url) => sum + url.size, 0).toFixed(1);
  });

</script>

<Translate text="You don't need to install anything." />
<Translate text="Just add one of these to the <code>head</code> tag of your HTML" />:
<div role="tablist" class="tabs tabs-lift tabs-sm sm:tabs-md w-full mt-6 not-prose">
  <input
    type="radio"
    name="cdn"
    role="tab"
    class="tab checked:text-neutral-content! [--tab-bg:var(--color-neutral)] [--tab-border-color:var(--color-neutral)]"
    aria-label="daisyui.css"
    checked="checked"
  />
  <div class="tab-content border-none">
    <div class="bg-neutral text-neutral-content rounded-se-box rounded-b-box">
      <div class="grid *:[grid-area:1/1]">
        <div class="overflow-x-auto pt-16 pb-8 px-6 [direction:ltr]">
  
  <pre class="shiki tokyo-night" style="background-color:var(--shiki-bg);color:var(--shiki-punctuation)" tabindex="0"><code><span class="line"><span style="color:var(--shiki-punctuation)">&lt;link</span><span style="color:var(--shiki-attr-name)"> href</span><span style="color:var(--shiki-punctuation)">=</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-attr-value)">https://cdn.jsdelivr.net/npm/daisyui@5</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-attr-name)"> rel</span><span style="color:var(--shiki-punctuation)">=</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-attr-value)">stylesheet</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-attr-name)"> type</span><span style="color:var(--shiki-punctuation)">=</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-attr-value)">text/css</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-punctuation)"> /&gt;</span></span>
<span class="line"><span style="color:var(--shiki-punctuation)">&lt;script</span><span style="color:var(--shiki-attr-name)"> src</span><span style="color:var(--shiki-punctuation)">=</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-attr-value)">https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-punctuation)">&gt;&lt;/script&gt;</span></span></code></pre>
  
        </div>
        <div class="font-mono select-none text-xs m-4 justify-self-start place-self-start">
          <svg class="opacity-40 inline-block size-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g stroke-linejoin="round" stroke-linecap="round" stroke-width="2" fill="none" stroke="currentColor"><path d="m16 16 2 2 4-4"></path><path d="M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"></path><path d="m7.5 4.27 9 5.15"></path><path d="M3.29 7L12 12 20.71 7"></path><path d="M12 22L12 12"></path></g></svg>
          {data.daisyuiCssSize}kB compressed
        </div>
        {#if onMount}
          <Clipboard text={`<link href="https://cdn.jsdelivr.net/npm/daisyui@5" rel="stylesheet" type="text/css" />\n<script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>`} />
        {/if}
  
      </div>
    </div>
    
    <h3 class="block text-xl mt-6 mb-4 font-bold">Adding all themes</h3>
    
    <p class="mt-6 mb-4">daisyui.css includes light and dark themes. For other themes, add themes.css file as well:</p>
    <div class="grid *:[grid-area:1/1]">
      <div class="overflow-x-auto [direction:ltr] pt-12 pb-8 px-6 bg-neutral text-neutral-content rounded-box">
        <pre class="shiki tokyo-night" style="background-color:var(--shiki-bg);color:var(--shiki-punctuation)" tabindex="0"><code><span class="line"><span style="color:var(--shiki-punctuation)">&lt;link</span><span style="color:var(--shiki-attr-name)"> href</span><span style="color:var(--shiki-punctuation)">=</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-attr-value)">https://cdn.jsdelivr.net/npm/daisyui@5/themes.css</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-attr-name)"> rel</span><span style="color:var(--shiki-punctuation)">=</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-attr-value)">stylesheet</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-attr-name)"> type</span><span style="color:var(--shiki-punctuation)">=</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-attr-value)">text/css</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-punctuation)"> /&gt;</span></span></code></pre>
      </div>
      {#if onMount}
        <Clipboard text={`<link href="https://cdn.jsdelivr.net/npm/daisyui@5/themes.css" rel="stylesheet" type="text/css" />`} />
      {/if}
    </div>
  
    
  </div>
  <input
    type="radio"
    name="cdn"
    role="tab"
    class="tab checked:text-neutral-content! [--tab-bg:var(--color-neutral)] [--tab-border-color:var(--color-neutral)]"
    aria-label="customize parts"
  />
  <div class="tab-content border-none bg-neutral text-neutral-content">
    <div class="grid *:[grid-area:1/1]">
      
      <div class="overflow-x-auto [direction:ltr] pt-16 pb-2 mb-6 px-6">
          
        {#if $combinedUrl}
        
<pre class="shiki tokyo-night" style="background-color:var(--shiki-bg);color:var(--shiki-punctuation)" tabindex="0"><code><span class="line"><span style="color:var(--shiki-punctuation)">&lt;link</span><span style="color:var(--shiki-attr-name)"> href</span><span style="color:var(--shiki-punctuation)">=</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-attr-value)">{$combinedUrl}</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-attr-name)"> rel</span><span style="color:var(--shiki-punctuation)">=</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-attr-value)">stylesheet</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-attr-name)"> type</span><span style="color:var(--shiki-punctuation)">=</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-attr-value)">text/css</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-punctuation)"> /&gt;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>


        {:else}
          <div class="h-[3.5rem] opacity-50">Select the parts you want to use 👇</div>
        {/if}

      </div>
        
      <div class="font-mono select-none text-xs m-4 justify-self-start place-self-start">
        <svg class="opacity-40 inline-block size-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g stroke-linejoin="round" stroke-linecap="round" stroke-width="2" fill="none" stroke="currentColor"><path d="m16 16 2 2 4-4"></path><path d="M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"></path><path d="m7.5 4.27 9 5.15"></path><path d="M3.29 7L12 12 20.71 7"></path><path d="M12 22L12 12"></path></g></svg>
        <span class="text-neutral-content">{$totalSize}kB</span>
        <span class="opacity-40">•</span>
        {#if $totalSize < data.daisyuiCssSize}
          <span class="text-success" title="{Math.abs(($totalSize - data.daisyuiCssSize).toFixed(1))}kB smaller than daisyui.css">{((data.daisyuiCssSize - $totalSize) / data.daisyuiCssSize * 100).toFixed(1)}% smaller than daisyui.css</span>
        {:else}
          <span class="text-warning">daisyui.css is {Math.abs((($totalSize - data.daisyuiCssSize) / data.daisyuiCssSize * 100).toFixed(1))}% smaller</span>
        {/if}
      </div>
      {#if onMount}
        <Clipboard text={`<link href="${$combinedUrl}" rel="stylesheet" type="text/css" />`} />
      {/if}
    </div>
    <div class="py-8 flex gap-2 flex-col bg-base-200 text-base-content px-6 rounded-b-btn">
      <svg width="100%" height="20px" viewBox="0 0 1000 20" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" overflow="auto" shape-rendering="auto" fill="var(--color-neutral)" style="margin: -3.2rem -1.5rem 0; width: calc(100% + 3rem);">
        <defs>
         <path id="wavepath" d="M 0 2000 0 500 Q 10 495 20 500 t 20 0 20 0 20 0 20 0 20 0 20 0 20 0 20 0 20 0 20 0 20 0 20 0 20 0 20 0 20 0 20 0 20 0 20 0 20 0 20 0 20 0 20 0 20 0 20 0 20 0 20 0 20 0 20 0 20 0 20 0 20 0 20 0 20 0 20 0 20 0 20 0 20 0 20 0 20 0 20 0 20 0 20 0 20 0 20 0 20 0 20 0 20 0 20 0 20 0 20 0 20 0 20 0  v1000 z" />
        </defs>
        <g >
         <use xlink:href="#wavepath" y="-490" fill="var(--color-base-200)">
         </use>
        </g>
      </svg>
      <h3 class="block text-xl mt-4 mx-1 font-bold">Choose parts</h3>
      <p class="block text-xs mx-1 mb-1 tracking-wider">Combined and compress into one CSS file, hosted on the fastest CDN</p>
      {#each data.groupedFiles as group}
        <h4 class="block text-xs mt-4 mx-1 mb-1 font-semibold tracking-wider opacity-40">{group.name}</h4>
        <div class="flex gap-y-2 gap-x-1 flex-wrap">
          {#each group.files as file}
            <input class="btn btn-xs rounded-full" aria-label={file.name} type="checkbox" onchange={() => toggleUrl(file)} checked={file.checked} />
          {/each}
        </div>
      {/each}
    </div>
  </div>
</div>

Every part of daisyUI is [available on CDN](https://cdn.jsdelivr.net/npm/daisyui@5/) as separate CSS files.
