<script>
  import { currentLang, langs, setLang } from "$lib/i18n.svelte.js"
  import { t } from "$lib/i18n.svelte.js"

  // Create a sorted array of languages based on languageMetadata order
  // This will be used instead of the unsorted 'langs' array
  import { languageMetadata } from "$lib/i18n.svelte.js"

  // Filter langs to only include languages that exist in both languageMetadata and langs
  const sortedLangs = Object.keys(languageMetadata).filter((lang) => langs.includes(lang))
</script>

<div class="dropdown dropdown-end">
  <div
    tabindex="0"
    role="button"
    class="btn btn-sm btn-ghost gap-1 px-1.5 text-[.5625rem] font-bold"
    aria-label="Language"
    title="Change Language"
  >
    <svg class="text-base-content/70 size-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        stroke-linejoin="round"
        stroke-linecap="round"
        stroke-width="2"
        fill="none"
        stroke="currentColor"
        d="M12 21a9 9 0 1 0 0-18m0 18a9 9 0 1 1 0-18m0 18c2.761 0 3.941-5.163 3.941-9S14.761 3 12 3m0 18c-2.761 0-3.941-5.163-3.941-9S9.239 3 12 3M3.5 9h17m-17 6h17"
      ></path>
    </svg>
    <!-- {$t("__code")} -->
    <svg
      class="mt-px hidden size-2 fill-current opacity-60 sm:inline-block"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 2048 2048"
    >
      <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
    </svg>
  </div>
  <div
    tabindex="0"
    class="dropdown-content bg-base-200 text-base-content rounded-box top-px mt-16 h-[30.5rem] max-h-[calc(100vh-8.6rem)] w-56 overflow-y-auto border border-white/5 shadow-2xl outline-1 outline-black/5"
  >
    <ul class="menu menu-sm w-full">
      {#each sortedLangs as langItem}
        {#if $t("__name", {}, langItem, false) !== "__name"}
          <li>
            <button class:menu-active={$currentLang == langItem} onclick={() => setLang(langItem)}>
              {#if $t("__code", {}, langItem, false) !== "__code"}
                <span
                  class="pe-4 font-mono text-[.5625rem] font-bold tracking-[0.09375rem] opacity-40"
                >
                  {$t("__code", {}, langItem)}
                </span>
              {/if}
              <span class="font-[sans-serif]">{$t("__name", {}, langItem)}</span>
              <!-- {#if $t("__status", {}, langItem) !== "__status" && $t("__status", {}, langItem) !== ""}
                <span class="badge badge-xs badge-soft">
                  {$t("__status", {}, langItem)}
                </span>
              {/if} -->
            </button>
          </li>
        {/if}
      {/each}
    </ul>
  </div>
</div>
