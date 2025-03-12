<script>
  import { parseThemeCSS } from "$lib/themeGeneratorCssParser"
  let dialog = $state()
  let {
    showCssModal = $bindable(),
    themeCSS = $bindable(),
    currentTheme = $bindable(),
    builtinThemes = $bindable(),
    customThemes = $bindable(),
  } = $props()
  $effect(() => {
    if (showCssModal) dialog.showModal()
  })

  let isClipboardButtonPressed = $state(false)
  function copyThemeCSSToClipboard() {
    navigator.clipboard
      .writeText(themeCSS)
      .then(() => {
        isClipboardButtonPressed = true
        setTimeout(() => (isClipboardButtonPressed = false), 2000)
      })
      .catch((err) => console.error("Failed to copy:", err))
  }

  function handleThemeCSSInput(event) {
    const newThemeData = parseThemeCSS(event.target.value, currentTheme)
    if (newThemeData) {
      currentTheme = newThemeData
      if (currentTheme.type === "custom") {
        customThemes = customThemes.map((theme) =>
          theme.id === currentTheme.id ? currentTheme : theme,
        )
      } else if (currentTheme.type === "builtin") {
        builtinThemes = builtinThemes.map((theme) =>
          theme.id === currentTheme.id ? currentTheme : theme,
        )
      }
    }
  }
</script>

<dialog class="modal max-md:modal-bottom" bind:this={dialog} onclose={() => (showCssModal = false)}>
  <div class="modal-box border-base-300 max-sm:modal-bottom border md:max-w-[40rem]">
    <div class="mb-4 flex items-center justify-between">
      <h3 class="flex items-center gap-2">
        <svg
          class="text-success"
          width="16"
          height="16"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          ><path
            d="M6 41.9999L14.6741 17.2639L31 34.0384L6 41.9999Z"
            fill="none"
            stroke="currentColor"
            stroke-width="4"
            stroke-linejoin="round"
          /><path
            d="M23 19L28 14C30.6667 11.3333 31 9 29 7"
            stroke="currentColor"
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
          /><path
            d="M29 25L34 20C37.3333 16.6667 40.6667 16.6667 44 20"
            stroke="currentColor"
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
          /><path
            d="M20 7C21.1046 7 22 6.10457 22 5C22 3.89543 21.1046 3 20 3C18.8954 3 18 3.89543 18 5C18 6.10457 18.8954 7 20 7Z"
            fill="currentColor"
          /><path
            d="M42 6C43.1046 6 44 5.10457 44 4C44 2.89543 43.1046 2 42 2C40.8954 2 40 2.89543 40 4C40 5.10457 40.8954 6 42 6Z"
            fill="currentColor"
          /><path
            d="M42 29C43.1046 29 44 28.1046 44 27C44 25.8954 43.1046 25 42 25C40.8954 25 40 25.8954 40 27C40 28.1046 40.8954 29 42 29Z"
            fill="currentColor"
          /><path
            d="M39 38C40.1046 38 41 37.1046 41 36C41 34.8954 40.1046 34 39 34C37.8954 34 37 34.8954 37 36C37 37.1046 37.8954 38 39 38Z"
            fill="currentColor"
          /></svg
        >
        <span>
          Add <span class="font-bold">{currentTheme.name}</span> theme to your CSS file
        </span>
      </h3>
      <button class="btn btn-sm" onclick={copyThemeCSSToClipboard}>
        {#if isClipboardButtonPressed}
          <svg class="h-5 w-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
            <path
              d="M 16 2 C 14.742188 2 13.847656 2.890625 13.40625 4 L 5 4 L 5 29 L 27 29 L 27 4 L 18.59375 4 C 18.152344 2.890625 17.257813 2 16 2 Z M 16 4 C 16.554688 4 17 4.445313 17 5 L 17 6 L 20 6 L 20 8 L 12 8 L 12 6 L 15 6 L 15 5 C 15 4.445313 15.445313 4 16 4 Z M 7 6 L 10 6 L 10 10 L 22 10 L 22 6 L 25 6 L 25 27 L 7 27 Z M 21.28125 13.28125 L 15 19.5625 L 11.71875 16.28125 L 10.28125 17.71875 L 14.28125 21.71875 L 15 22.40625 L 15.71875 21.71875 L 22.71875 14.71875 Z"
            >
            </path>
          </svg>
        {:else}
          <svg class="h-5 w-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
            <path
              d="M 16 3 C 14.742188 3 13.847656 3.890625 13.40625 5 L 6 5 L 6 28 L 26 28 L 26 5 L 18.59375 5 C 18.152344 3.890625 17.257813 3 16 3 Z M 16 5 C 16.554688 5 17 5.445313 17 6 L 17 7 L 20 7 L 20 9 L 12 9 L 12 7 L 15 7 L 15 6 C 15 5.445313 15.445313 5 16 5 Z M 8 7 L 10 7 L 10 11 L 22 11 L 22 7 L 24 7 L 24 26 L 8 26 Z"
            >
            </path>
          </svg>
        {/if}
        Copy to clipboard
      </button>
    </div>
    <span class="text-xs">
      <span class="text-base-content/40">Add it after</span>
      <span class="text-base-content/50 font-bold italic">@plugin "daisyui";</span></span
    >
    <textarea
      spellcheck="false"
      data-theme="dark"
      class="textarea textarea-border textarea-xs block h-96 min-h-80 w-full max-w-none resize-none font-mono"
      bind:value={themeCSS}
      oninput={handleThemeCSSInput}
    ></textarea>
  </div>
  <div class="modal-backdrop" onclick={() => dialog.close()}></div>
</dialog>
