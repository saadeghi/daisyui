<script>
  import ContrastMeter from "$components/themegenerator/ContrastMeter.svelte"
  import { validateColor } from "$lib/themeGeneratorValidation"

  let {
    colors,
    value = $bindable(),
    name = "",
    label = "",
    colorPairs = [],
    themeColors = {},
    colorInitials = {},
  } = $props()
  let open = $state(false)
  let inputValue = $state(value)
  let isDragging = $state(false)
  let dialog

  function handleKeydown(event) {
    if (event.key === "Escape") {
      closeModal()
    } else if (event.key === "Enter") {
      value = inputValue
      closeModal()
    }
  }

  function handleDragStart(color) {
    isDragging = true
    value = color
    inputValue = color
  }

  function handleDragOver(color) {
    if (isDragging) {
      value = color
      inputValue = color
    }
  }

  function handleDragEnd(color) {
    if (isDragging) {
      value = color
      inputValue = color
      isDragging = false
    }
  }

  function handleGlobalMouseUp() {
    isDragging = false
  }

  function handleInput(event) {
    inputValue = event.target.value
    if (validateColor(inputValue)) {
      value = inputValue
    }
  }

  function toggleModal() {
    if (open) {
      closeModal()
    } else {
      openModal()
    }
  }

  function openModal() {
    open = true
    dialog.showModal()
  }

  function closeModal() {
    open = false
    dialog.close()
    if (!validateColor(inputValue)) {
      inputValue = value
    }
  }

  $effect(() => {
    inputValue = value
  })

  function getColorNames(color) {
    const names = []
    for (const [key, themeColor] of Object.entries(themeColors)) {
      if (themeColor === color) {
        names.push(key.replace("--color-", ""))
      }
    }
    return names.length > 0 ? names : null
  }

  function getColorInitials(color) {
    const initials = []
    for (const [key, themeColor] of Object.entries(themeColors)) {
      if (themeColor === color) {
        initials.push(colorInitials[key] || null)
      }
    }
    return initials.length > 0 ? initials : null
  }

  function getTextColorClass(name) {
    const numberMatch = name.match(/\d+/)
    const number = numberMatch ? parseInt(numberMatch[0], 10) : null
    if (number > 500 || name.includes("black")) {
      return "text-white"
    }
    return "text-black"
  }

  function getPairColor(currentColor) {
    for (const [color, contentColor] of colorPairs) {
      if (currentColor === color) {
        return themeColors[contentColor]
      } else if (currentColor === contentColor) {
        return themeColors[color]
      }
    }
    return currentColor
  }
</script>

<svelte:window onmouseup={handleGlobalMouseUp} onkeydown={open ? handleKeydown : null} />

<button
  type="button"
  class="w-14 h-10 border-1 border-base-content/10 rounded-lg cursor-pointer grid place-items-center outline-offset-2 focus:outline-2 outline-base-content"
  aria-label={`Choose ${name}: ${value}`}
  title={`${name}: ${value}`}
  style:color={label === "A" ? value : getPairColor(name)}
  style:background-color={label === "A" ? getPairColor(name) : value}
  class:font-black={label === "A"}
  class:text-2xl={label === "A"}
  onclick={toggleModal}>{label}</button
>

<dialog
  bind:this={dialog}
  class="modal modal-bottom lg:modal-middle [&::backdrop]:hidden"
  inert={!open ? true : undefined}
>
  <div
    class="modal-box p-0 border border-base-300 overflow-x-hidden lg:max-w-[50rem] max-lg:max-h-[80vh] flex flex-col gap-4"
  >
    {#if open}
      <div class="flex gap-2 justify-between items-center px-8 pt-6 pb-0">
        <div class="flex gap-2 items-center relative">
          <div
            class="h-8 w-12 border-1 border-base-300 rounded-lg grid place-items-center text-xl font-black"
            aria-label={`Choose ${name}: ${value}`}
            style:color={label === "A" ? value : getPairColor(name)}
            style:background-color={label === "A" ? getPairColor(name) : value}
          >
            A
          </div>
          <div
            class="h-px border border-px border-t-base-100/20 border-x-0 border-b-base-content/50 absolute"
            class:w-[2.4rem]={label === "A"}
            class:start-[1.85rem]={label === "A"}
            class:w-[1.4rem]={label !== "A"}
            class:start-[2.9rem]={label !== "A"}
          ></div>
          <h2 class="text-sm ms-5">
            <span class="opacity-50">Pick a color for</span>
            {name.replace("--color-", "").replace("-", " ")}
          </h2>
        </div>
      </div>
      <div
        class="lg:[writing-mode:vertical-lr] lg:my-auto mx-auto w-fit grid grid-cols-11 lg:min-h-[20rem]"
        role="listbox"
      >
        {#each Object.entries(colors) as [name, color]}
          <button
            class="appearance-none p-px [writing-mode:lr]"
            aria-label={name}
            aria-selected={value === color}
            onmousedown={() => handleDragStart(color)}
            onmouseover={() => handleDragOver(color)}
            onmouseup={() => handleDragEnd(color)}
            onkeypress={() => handleDragStart(color)}
          >
            <div
              class="rounded-full border border-base-content/10 w-5 sm:w-7 sm:m-px relative aspect-square select-none bg-transparent grid place-items-center"
              class:[box-shadow:0_0_0_2px_white,0_0_0_4px_black]={value === color}
              class:outline-white={value === color}
              class:outline-offset-[-3px]={value === color}
              style:background-color={color}
            >
              {#if getColorInitials(color)}
                <div class={`tooltip px-px ${getTextColorClass(name)}`}>
                  <div class="tooltip-content lowercase max-w-28 text-[10px]">
                    {#each getColorNames(color) as name}
                      <div>{name}</div>
                    {/each}
                  </div>
                  <div class="text-[9px] font-mono uppercase font-semibold">
                    {getColorInitials(color)[0]}{#if getColorInitials(color).length > 1}+{/if}
                  </div>
                </div>
              {/if}
            </div>
          </button>
        {/each}
      </div>
      <div
        class="flex flex-col md:flex-row gap-2 items-center bg-base-200 px-8 pt-4 pb-6 justify-between"
      >
        <div class="flex flex-col gap-1 grow">
          <span class="text-xs text-base-content/60 shrink-0">Adjust Lightness, Chroma, Hue:</span>
          <label dir="ltr" class="input input-border items-center flex gap-2 px-2">
            <input
              type="text"
              value={inputValue}
              oninput={handleInput}
              aria-label={`${name} value`}
            />
            {#if Object.entries(colors).find(([key, color]) => color === inputValue)?.[0]}
              <span
                class="opacity/50 shrink-0 badge badge-xs gap-1 badge-soft max-md:hidden select-none"
              >
                {Object.entries(colors).find(([key, color]) => color === inputValue)?.[0]}
                <svg
                  width="16px"
                  height="16px"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                  ><path
                    d="M9,13.7q1.4-5.6,7-5.6c5.6,0,6.3,4.2,9.1,4.9q2.8.7,4.9-2.1-1.4,5.6-7,5.6c-5.6,0-6.3-4.2-9.1-4.9Q11.1,10.9,9,13.7ZM2,22.1q1.4-5.6,7-5.6c5.6,0,6.3,4.2,9.1,4.9q2.8.7,4.9-2.1-1.4,5.6-7,5.6c-5.6,0-6.3-4.2-9.1-4.9Q4.1,19.3,2,22.1Z"
                    fill="currentColor"
                  /></svg
                >
              </span>
            {/if}
          </label>
        </div>
        <ContrastMeter color1={value} color2={getPairColor(name)} />
      </div>
    {/if}
  </div>
  <div class="modal-backdrop" onclick={closeModal}>
    <button>close</button>
  </div>
</dialog>
