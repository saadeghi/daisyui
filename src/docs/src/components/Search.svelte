<script>
  import { onMount, createEventDispatcher } from "svelte"
  import { page } from "$app/stores"
  import { goto } from "$app/navigation"
  import Typeahead from "svelte-typeahead"

  import { pages } from "@src/lib/data.js"
  import { getOS } from "$lib/util"
  import { t } from "@src/lib/i18n"

  const dispatch = createEventDispatcher()

  let searchIndex = []
  pages.forEach((group) => {
    group.items.forEach((item) => {
      searchIndex.push(item)
    })
  })

  let os
  onMount(() => {
    os = getOS()
  })

  let seachboxEl
  function handleKeydown(e) {
    if ((e.keyCode === 75 && e.metaKey) || (e.keyCode === 75 && e.ctrlKey)) {
      e.preventDefault()
      seachboxEl.querySelector("input[type=search]").focus()
      dispatch("focus")
    }
  }

  function onSelect({ detail }) {
    goto(searchIndex[detail.originalIndex].href)
    dispatch("search", detail)
  }
</script>

<svelte:window on:keydown={handleKeydown} />

<!-- svelte-ignore a11y-label-has-associated-control -->
<label class={`searchbox relative mx-3 w-full`} bind:this={seachboxEl}>
  <svg class={`text-base-content pointer-events-none absolute z-10 my-3 ml-2 stroke-current opacity-60 ${$page.url.pathname == "/" ? "hidden" : ""}`} width="16" height="16" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
  <Typeahead placeholder={$t("Search") + "…"} limit={8} label="Search" data={searchIndex} extract={(item) => item.tags} inputAfterSelect="clear" on:select={onSelect} let:result>
    <div class="py-1 text-sm">
      {searchIndex[result.index].name}
    </div>
  </Typeahead>
  <div class={`pointer-events-none absolute right-8 top-2 gap-1 opacity-50 ${$page.url.pathname == "/" ? "hidden" : "hidden lg:flex"}`}>
    {#if ["macos"].includes(os)}
      <kbd class="kbd kbd-sm">⌘</kbd>
      <kbd class="kbd kbd-sm">K</kbd>
    {:else if ["windows", "linux"].includes(os)}
      <kbd class="kbd kbd-sm">ctrl</kbd>
      <kbd class="kbd kbd-sm">K</kbd>
    {/if}
  </div>
</label>

<style global>
  .searchbox [data-svelte-typeahead] {
    background: none;
    width: 100%;
    max-width: 100%;
  }
  [data-svelte-search] label {
    display: none;
  }
  [data-svelte-search] input {
    background-color: transparent;
    color: inherit;
    border-radius: 0.5em;
    border: none;
    padding-left: 2em;
  }
  [data-svelte-search] input::placeholder {
    color: inherit;
  }
  [data-svelte-search] input:focus {
    outline-color: hsla(var(--bc) / 0.2);
    background-color: hsl(var(--b1));
    color: hsla(var(--bc));
  }
  [data-svelte-typeahead] .svelte-typeahead-list {
    transform: translateY(0.5em);
    background: hsl(var(--b1));
    border-radius: var(--rounded-btn);
    overflow: hidden;
  }
  [data-svelte-typeahead] .svelte-typeahead-list .selected,
  [data-svelte-typeahead] .svelte-typeahead-list .selected:hover {
    background: hsl(var(--n));
    color: hsl(var(--nc));
  }
  [data-svelte-typeahead] .svelte-typeahead-list li {
    color: hsl(var(--bc));
  }
  [data-svelte-typeahead] .svelte-typeahead-list li:hover {
    background: hsl(var(--b2));
    color: hsl(var(--bc));
  }
  [data-svelte-typeahead] .svelte-typeahead-list li:not(:last-of-type) {
    border-bottom-color: hsla(var(--bc) / 0.1);
  }
</style>
