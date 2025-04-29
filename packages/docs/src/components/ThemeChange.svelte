<script>
  import { onMount } from "svelte"
  import { themeChange } from "theme-change"
  import { t } from "$lib/i18n.svelte.js"
  onMount(() => {
    themeChange(false)
  })
  let {
    themes,
    dropdownClasses = "",
    btnClasses = "btn-ghost",
    contentClasses = "mt-16",
  } = $props()
</script>

<div title="Change Theme" class={`dropdown dropdown-end block ${dropdownClasses}`}>
  <div
    tabindex="0"
    role="button"
    class={`btn group btn-sm gap-1.5 px-1.5 ${btnClasses}`}
    aria-label="Change Theme"
  >
    <div
      class="bg-base-100 group-hover:border-base-content/20 border-base-content/10 grid shrink-0 grid-cols-2 gap-0.5 rounded-md border p-1 transition-colors"
    >
      <div class="bg-base-content size-1 rounded-full"></div>
      <div class="bg-primary size-1 rounded-full"></div>
      <div class="bg-secondary size-1 rounded-full"></div>
      <div class="bg-accent size-1 rounded-full"></div>
    </div>
    <svg
      width="12px"
      height="12px"
      class="mt-px hidden size-2 fill-current opacity-60 sm:inline-block"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 2048 2048"
    >
      <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
    </svg>
  </div>
  <div
    tabindex="0"
    class={`dropdown-content bg-base-200 text-base-content rounded-box top-px h-[30.5rem] max-h-[calc(100vh-8.6rem)] overflow-y-auto border border-white/5 shadow-2xl outline-1 outline-black/5 ${contentClasses}`}
  >
    <ul class="menu w-56">
      <li class="menu-title text-xs">{$t("change-theme-btn")}</li>
      {#each themes as theme}
        <li>
          <button class="gap-3 px-2" data-set-theme={theme} data-act-class="[&_svg]:visible">
            <div
              data-theme={theme}
              class="bg-base-100 grid shrink-0 grid-cols-2 gap-0.5 rounded-md p-1 shadow-sm"
            >
              <div class="bg-base-content size-1 rounded-full"></div>
              <div class="bg-primary size-1 rounded-full"></div>
              <div class="bg-secondary size-1 rounded-full"></div>
              <div class="bg-accent size-1 rounded-full"></div>
            </div>
            <div class="w-32 truncate">{theme}</div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="invisible h-3 w-3 shrink-0"
            >
              <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"> </path>
            </svg>
          </button>
        </li>
      {/each}
      <li></li>
      <li>
        <a href="/theme-generator/">
          <svg
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4 fill-current"
            viewBox="0 0 512 512"
          >
            <path d="M96,208H48a16,16,0,0,1,0-32H96a16,16,0,0,1,0,32Z"></path>
            <line x1="90.25" y1="90.25" x2="124.19" y2="124.19"></line>
            <path
              d="M124.19,140.19a15.91,15.91,0,0,1-11.31-4.69L78.93,101.56a16,16,0,0,1,22.63-22.63l33.94,33.95a16,16,0,0,1-11.31,27.31Z"
            >
            </path>
            <path d="M192,112a16,16,0,0,1-16-16V48a16,16,0,0,1,32,0V96A16,16,0,0,1,192,112Z">
            </path>
            <line x1="293.89" y1="90.25" x2="259.95" y2="124.19"></line>
            <path
              d="M260,140.19a16,16,0,0,1-11.31-27.31l33.94-33.95a16,16,0,0,1,22.63,22.63L271.27,135.5A15.94,15.94,0,0,1,260,140.19Z"
            >
            </path>
            <line x1="124.19" y1="259.95" x2="90.25" y2="293.89"></line>
            <path
              d="M90.25,309.89a16,16,0,0,1-11.32-27.31l33.95-33.94a16,16,0,0,1,22.62,22.63l-33.94,33.94A16,16,0,0,1,90.25,309.89Z"
            >
            </path>
            <path
              d="M219,151.83a26,26,0,0,0-36.77,0l-30.43,30.43a26,26,0,0,0,0,36.77L208.76,276a4,4,0,0,0,5.66,0L276,214.42a4,4,0,0,0,0-5.66Z"
            >
            </path>
            <path
              d="M472.31,405.11,304.24,237a4,4,0,0,0-5.66,0L237,298.58a4,4,0,0,0,0,5.66L405.12,472.31a26,26,0,0,0,36.76,0l30.43-30.43h0A26,26,0,0,0,472.31,405.11Z"
            >
            </path>
          </svg>
          <div class="grow text-sm font-bold">{$t("Make your theme")}!</div>
        </a>
      </li>
    </ul>
  </div>
</div>
