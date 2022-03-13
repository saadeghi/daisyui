<script>
  import { currentLang, langs, setLang } from "@src/lib/i18n"
  import { langInfo } from "@src/lib/data.js"
</script>

<div title="Change Theme" class="dropdown dropdown-end">
  <div tabindex="0" class="btn btn-ghost gap-1 normal-case">
    <svg class="inline-block h-4 w-4 fill-current md:h-5 md:w-5" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512">
      <path d="M363,176,246,464h47.24l24.49-58h90.54l24.49,58H480ZM336.31,362,363,279.85,389.69,362Z" />
      <path d="M272,320c-.25-.19-20.59-15.77-45.42-42.67,39.58-53.64,62-114.61,71.15-143.33H352V90H214V48H170V90H32v44H251.25c-9.52,26.95-27.05,69.5-53.79,108.36-32.68-43.44-47.14-75.88-47.33-76.22L143,152l-38,22,6.87,13.86c.89,1.56,17.19,37.9,54.71,86.57.92,1.21,1.85,2.39,2.78,3.57-49.72,56.86-89.15,79.09-89.66,79.47L64,368l23,36,19.3-11.47c2.2-1.67,41.33-24,92-80.78,24.52,26.28,43.22,40.83,44.3,41.67L255,362Z" />
    </svg>

    <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1792" class="ml-1 inline-block h-4 w-4 fill-current"><path d="M1395 736q0 13-10 23l-466 466q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l393 393 393-393q10-10 23-10t23 10l50 50q10 10 10 23z" /></svg>
  </div>
  <div class="dropdown-content bg-base-200 text-base-content rounded-t-box rounded-b-box top-px mt-16 w-52 overflow-y-auto shadow-2xl">
    <ul class="menu menu-compact p-2" tabindex="0">
      {#each langs as langItem}
        <li>
          <button class:active={$currentLang == langItem} on:click={() => setLang(langItem)}>
            {@html langInfo[langItem].flag}
            {langInfo[langItem].name}
          </button>
        </li>
      {/each}
    </ul>
  </div>
</div>
