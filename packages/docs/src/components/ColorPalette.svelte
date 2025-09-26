<script>
  import ContrastMeter from "$components/themegenerator/ContrastMeter.svelte"
  import ColorSlider from "$components/ColorSlider.svelte"
  import { validateColor } from "$lib/themeGeneratorValidation"
  import { parse, rgb, formatRgb, toGamut, clampGamut } from "culori"

  let {
    colors,
    value = $bindable(),
    name = "",
    label = "",
    colorPairs = [],
    themeColors = {},
    colorInitials = {},
    pickerMode = $bindable("palette"), // "palette" or "slider"
    onModalStateChange = () => {}, // Callback for modal state changes
  } = $props()
  let open = $state(false)
  let inputValue = $state(value)
  let isDragging = $state(false)

  // Derived RGB version of inputValue for non-P3 color spaces
  let inputValueRgb = $derived.by(() => {
    try {
      const parsedColor = parse(inputValue)
      if (parsedColor) {
        // Convert to RGB and clamp to sRGB gamut
        const rgbColor = clampGamut("rgb")(parsedColor)
        // Use formatRgb for better compatibility
        return formatRgb(rgbColor)
      }
      return inputValue
    } catch {
      return inputValue
    }
  })

  let useOklchPicker = $derived(pickerMode === "slider")
  let dragPreviewColor = $state(null) // Temporary color during dragging
  // eslint-disable-next-line no-unassigned-vars
  let dialog

  function handleKeydown(event) {
    if (event.key === "Escape") {
      closeModal()
    } else if (event.key === "Enter") {
      if (validateColor(inputValue)) {
        value = inputValue
        closeModal()
      }
    }
  }

  function handleDragStart(color) {
    isDragging = true
    dragPreviewColor = color
    inputValue = color
  }

  function handleDragOver(color) {
    if (isDragging) {
      dragPreviewColor = color
      inputValue = color
    }
  }

  function handleDragEnd(color) {
    if (isDragging) {
      value = color // Only update the bound value on drag end
      inputValue = color
      isDragging = false
      dragPreviewColor = null
    }
  }

  function handleGlobalMouseUp() {
    if (isDragging && dragPreviewColor) {
      value = dragPreviewColor // Ensure value is updated if drag ends elsewhere
      inputValue = dragPreviewColor
    }
    isDragging = false
    dragPreviewColor = null
  }

  function handleInput(event) {
    const newValue = event.target.value.trim()
    inputValue = newValue
    if (validateColor(newValue)) {
      value = newValue
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
    onModalStateChange(true)
  }

  function closeModal() {
    open = false
    dialog.close()
    if (!validateColor(inputValue)) {
      inputValue = value
    }
    onModalStateChange(false)
  }

  $effect(() => {
    inputValue = value
  })

  // Update value when inputValue changes and is valid
  $effect(() => {
    if (validateColor(inputValue) && inputValue !== value) {
      value = inputValue
    }
  })

  // Get the color to display (preview during dragging, actual value otherwise)
  let displayColor = $derived(dragPreviewColor || value)

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
  class="border-base-content/10 outline-base-content grid h-10 w-14 cursor-pointer place-items-center rounded-lg border-1 outline-offset-2 focus:outline-2"
  aria-label={`Choose ${name}: ${displayColor}`}
  title={`${name}: ${displayColor}`}
  style:color={label === "A" ? displayColor : getPairColor(name)}
  style:background-color={label === "A" ? getPairColor(name) : displayColor}
  class:font-black={label === "A"}
  class:text-2xl={label === "A"}
  onclick={toggleModal}>{label}</button
>

<dialog
  bind:this={dialog}
  class="modal modal-bottom lg:modal-middle [&::backdrop]:hidden [&:has(input.range:active)]:bg-transparent"
  inert={!open ? true : undefined}
>
  <div
    class="modal-box border-base-300 flex flex-col gap-4 overflow-x-hidden border p-0 max-lg:max-h-[80vh] lg:max-w-[50rem] [&:has(input.range:active)]:border-transparent [&:has(input.range:active)]:bg-transparent [&:has(input.range:active)]:shadow-none [&:has(input.range:active)_.hide-when-range-is-active]:invisible"
  >
    {#if open}
      <div class="flex items-center justify-between gap-2 px-8 pt-6 pb-0 max-md:flex-col">
        <div class="hide-when-range-is-active relative flex items-center gap-2">
          <div
            class="border-base-300 grid h-8 w-12 place-items-center rounded-lg border-1 text-xl font-black"
            aria-label={`Choose ${name}: ${displayColor}`}
            style:color={label === "A" ? displayColor : getPairColor(name)}
            style:background-color={label === "A" ? getPairColor(name) : displayColor}
          >
            A
          </div>
          <div
            class="border-px border-t-base-100/20 border-b-base-content/50 absolute h-px border border-x-0"
            class:w-[2.4rem]={label === "A"}
            class:start-[1.85rem]={label === "A"}
            class:w-[1.4rem]={label !== "A"}
            class:start-[2.9rem]={label !== "A"}
          ></div>
          <h2 class="ms-5 text-sm">
            <span class="opacity-50">Pick a color for</span>
            {name.replace("--color-", "").replace("-", " ")}
          </h2>
        </div>

        <!-- Toggle tabs -->
        <div class="tabs tabs-sm tabs-box hide-when-range-is-active">
          <label class="tab gap-2">
            <input
              type="radio"
              name="color_picker_tabs"
              checked={!useOklchPicker}
              onchange={() => {
                pickerMode = "palette"
              }}
            />
            <svg class="size-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <g
                stroke-linejoin="round"
                stroke-linecap="round"
                stroke-width="2"
                fill="none"
                stroke="currentColor"
              >
                <path d="M5 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                <path d="M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                <path d="M19 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                <path d="M5 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                <path d="M19 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                <path d="M5 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                <path d="M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                <path d="M19 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
              </g>
            </svg>
            Palette
          </label>
          <label class="tab gap-2">
            <input
              type="radio"
              name="color_picker_tabs"
              checked={useOklchPicker}
              onchange={() => {
                pickerMode = "slider"
              }}
            />
            <svg class="size-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <g
                stroke-linejoin="round"
                stroke-linecap="round"
                stroke-width="2"
                fill="none"
                stroke="currentColor"
              >
                <path d="M21 4L14 4"></path>
                <path d="M10 4L3 4"></path>
                <path d="M21 12L12 12"></path>
                <path d="M8 12L3 12"></path>
                <path d="M21 20L16 20"></path>
                <path d="M12 20L3 20"></path>
                <path d="M14 2L14 6"></path>
                <path d="M8 10L8 14"></path>
                <path d="M16 18L16 22"></path>
              </g>
            </svg>
            Picker
          </label>
        </div>
      </div>
      {#if useOklchPicker}
        <!-- OKLCH Color Picker -->
        <div class="flex justify-center px-8 py-4">
          <ColorSlider bind:value={inputValue} rgbValue={inputValueRgb} width={400} height={240} />
        </div>
      {:else}
        <!-- Traditional Color Palette -->
        <div
          class="mx-auto grid w-fit grid-cols-11 lg:my-auto lg:min-h-[20rem] lg:[writing-mode:vertical-lr]"
          role="listbox"
        >
          {#each Object.entries(colors) as [name, color]}
            <button
              class="appearance-none p-px [writing-mode:lr]"
              aria-label={name}
              onmousedown={() => handleDragStart(color)}
              onmouseover={() => handleDragOver(color)}
              onfocus={() => handleDragOver(color)}
              onmouseup={() => handleDragEnd(color)}
              onkeypress={() => handleDragStart(color)}
            >
              <div
                class="border-base-content/10 relative grid aspect-square w-5 place-items-center rounded-full border bg-transparent select-none sm:m-px sm:w-7"
                class:[box-shadow:0_0_0_2px_white,0_0_0_4px_black]={displayColor === color}
                class:outline-white={displayColor === color}
                class:outline-offset-[-3px]={displayColor === color}
                style:background-color={color}
              >
                {#if getColorInitials(color)}
                  <div class={`tooltip px-px ${getTextColorClass(name)}`}>
                    <div class="tooltip-content max-w-28 text-[10px] lowercase">
                      {#each getColorNames(color) as name}
                        <div>{name}</div>
                      {/each}
                    </div>
                    <div class="font-mono text-[9px] font-semibold uppercase">
                      {getColorInitials(color)[0]}{#if getColorInitials(color).length > 1}+{/if}
                    </div>
                  </div>
                {/if}
              </div>
            </button>
          {/each}
        </div>
      {/if}
      <div
        class="hide-when-range-is-active bg-base-200 flex flex-col items-center justify-between gap-2 px-8 pt-4 pb-6 md:flex-row"
      >
        <div class="flex grow flex-col gap-1">
          <span class="text-base-content/60 shrink-0 text-xs">Color value</span>
          <label dir="ltr" class="input input-bordered flex items-center gap-2 px-2">
            <input
              type="text"
              class="grow"
              bind:value={inputValue}
              oninput={handleInput}
              onkeydown={(event) => {
                if (event.key === "Enter") {
                  event.preventDefault()
                  if (validateColor(inputValue)) {
                    value = inputValue
                    closeModal()
                  }
                }
              }}
              aria-label={`${name} value`}
            />
            {#if Object.entries(colors).find(([key, color]) => color === inputValue)?.[0]}
              <span
                class="opacity/50 badge badge-xs badge-soft shrink-0 gap-1 select-none max-md:hidden"
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
        <ContrastMeter color1={displayColor} color2={getPairColor(name)} />
      </div>
    {/if}
  </div>
  <div
    class="modal-backdrop"
    onclick={closeModal}
    onkeydown={(e) => e.key === "Enter" && closeModal()}
    role="button"
    tabindex="0"
    aria-label="Close modal"
  >
    <button>close</button>
  </div>
</dialog>
