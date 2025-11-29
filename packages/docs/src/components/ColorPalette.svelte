<script>
  import ContrastMeter from "$components/themegenerator/ContrastMeter.svelte"
  import ColorSpaceSelectorOklch from "$components/themegenerator/ColorSpaceSelectorOklch.svelte"
  import ColorSpaceSelectorHsl from "$components/themegenerator/ColorSpaceSelectorHsl.svelte"
  import ColorSpaceSelectorRgb from "$components/themegenerator/ColorSpaceSelectorRgb.svelte"
  import ColorSpaceSelectorHex from "$components/themegenerator/ColorSpaceSelectorHex.svelte"
  import ColorSlider from "$components/ColorSlider.svelte"
  import { validateColor } from "$lib/themeGeneratorValidation"
  import { parse, oklch, hsl, rgb, formatHex, clampGamut } from "culori"
  import { untrack } from "svelte"

  let {
    value = $bindable(),
    name = "",
    label = "",
    colorPairs = [],
    colorDetails = [],
    themeColors = {},
    pickerMode = $bindable("palette"), // "palette" or "slider"
    onModalStateChange = () => {}, // Callback for modal state changes
  } = $props()
  let open = $state(false)
  let inputValue = $state(value)
  let isDragging = $state(false)
  let selectedTailwindColorName = $state(null)
  let colorState = $state({
    oklch: {},
    hsl: {},
    rgb: {},
  })

  updateColorState(value)

  let useOklchPicker = $derived(pickerMode === "slider")
  let dragPreviewColor = $state(null) // Temporary color during dragging
  // eslint-disable-next-line no-unassigned-vars
  let dialog

  function handleKeydown(event) {
    if (event.key === "Escape") {
      closeModal()
    } else if (event.key === "Enter") {
      event.preventDefault()
      if (validateColor(inputValue)) {
        if (value !== inputValue) {
          const v = inputValue
          inputValue = ""
          value = v
        }
        closeModal()
      }
    }
  }

  function handleDragStart(color, name) {
    isDragging = true
    dragPreviewColor = color
    inputValue = color
    selectedTailwindColorName = name
  }

  function handleDragOver(color, name) {
    if (isDragging) {
      dragPreviewColor = color
      inputValue = color
      selectedTailwindColorName = name
    }
  }

  function handleDragEnd(color) {
    if (isDragging) {
      if (value !== color) {
        inputValue = ""
        value = color
      } else {
        inputValue = color
      }
      isDragging = false
      dragPreviewColor = null
    }
  }

  function handleGlobalMouseUp() {
    if (isDragging && dragPreviewColor) {
      if (value !== dragPreviewColor) {
        inputValue = ""
        value = dragPreviewColor // Ensure value is updated if drag ends elsewhere
      } else {
        inputValue = dragPreviewColor
      }
    }
    isDragging = false
    dragPreviewColor = null
  }

  let inputDebounce = null
  function handleInput(event) {
    if (inputDebounce != null) {
      clearTimeout(inputDebounce)
    }
    inputDebounce = setTimeout(() => {
      inputDebounce = null

      const newValue = event.target.value
      if (validateColor(newValue) && value !== newValue) {
        inputValue = ""
        value = newValue
        selectedTailwindColorName = null
      } else {
        inputValue = newValue
      }
    }, 300)
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

  $effect.pre(() => {
    if (open) {
      untrack(() => {
        if (value !== inputValue) {
          updateColorState(value)
        }
      })
      inputValue = value
    }
  })

  // Update inputValue when colorState changes
  $effect.pre(() => {
    const newValue = generateColorValue()

    untrack(() => {
      if (newValue != null && inputValue !== newValue) {
        if (!colorState.changed) {
          colorState.value = newValue
          inputValue = newValue
        }
        value = newValue
        if (colorState.changed) {
          selectedTailwindColorName = null
        }
      }
    })
  })

  // Get the color to display (preview during dragging, actual value otherwise)
  const displayColor = $derived(dragPreviewColor || value)

  const colorName = $derived(
    selectedTailwindColorName || colorDetails.find(([, color]) => color === inputValue)?.[0],
  )
  const colorPairsMap = $derived.by(() => {
    const map = {
      color: {},
      content: {},
    }

    for (const [color, contentColor] of colorPairs) {
      map.color[color] = contentColor
      map.content[contentColor] = color
    }

    return map
  })

  function getTextColorClass(name) {
    const numberMatch = name.match(/\d+/)
    const number = numberMatch ? parseInt(numberMatch[0], 10) : null
    if (number > 500 || name.includes("black")) {
      return "text-white"
    }
    return "text-black"
  }

  function getPairColor(currentColor) {
    return (
      themeColors[colorPairsMap.color[currentColor] || colorPairsMap.content[currentColor]] ||
      currentColor
    )
  }

  function updateColorState(newValue) {
    colorState.changed = false

    if (colorState.value === newValue) return

    if (colorState.originalValue === newValue) {
      colorState.mode = colorState.originalMode
      colorState.value = colorState.originalValue
      return
    }

    try {
      const parsedColor = parse(newValue)
      if (parsedColor) {
        if (newValue.startsWith("#")) {
          parsedColor.mode = "hex"
        }

        colorState.mode = parsedColor.mode
        colorState.value = newValue

        colorState.originalMode = parsedColor.mode
        colorState.originalValue = newValue

        const oklchColor = oklch(parsedColor)
        if (oklchColor) {
          // Handle black/white/achromatic colors properly
          colorState.oklch.l = oklchColor.l ?? colorState.oklch.l
          colorState.oklch.c = oklchColor.c ?? colorState.oklch.c
          colorState.oklch.h = oklchColor.h ?? colorState.oklch.h
        }

        const hslColor = hsl(parsedColor)
        if (hslColor) {
          // Validate and clamp HSL values to prevent weird gradients
          colorState.hsl.h = isNaN(hslColor.h)
            ? colorState.hsl.h
            : Math.max(0, Math.min(360, hslColor.h ?? colorState.hsl.h))
          colorState.hsl.s = isNaN(hslColor.s)
            ? colorState.hsl.s
            : Math.max(0, Math.min(1, hslColor.s ?? colorState.hsl.s))
          colorState.hsl.l = isNaN(hslColor.l)
            ? colorState.hsl.l
            : Math.max(0, Math.min(1, hslColor.l ?? colorState.hsl.l))
        }

        const rgbColor = rgb(clampGamut("rgb")(parsedColor))
        if (rgbColor) {
          colorState.rgb.r = Math.round(rgbColor.r * 255)
          colorState.rgb.g = Math.round(rgbColor.g * 255)
          colorState.rgb.b = Math.round(rgbColor.b * 255)
        }
      }
    } catch {
      // Do not change if value cannot be parsed
    }
  }

  const reNoDecimals = /\.0+$/
  function toFixed(value, decimals) {
    if (!value) return '0'
    const text = value.toFixed(decimals)
    return reNoDecimals.test(text)
      ? text.split('.')[0]
      : text
  }

  // Helper function to generate color value from color state
  function generateColorValue() {
    if (
      colorState.originalMode === colorState.mode &&
      colorState.originalValue &&
      !colorState.changed
    ) {
      return colorState.originalValue
    }

    try {
      if (colorState.mode === "oklch") {
        const { l, c, h } = colorState.oklch
        return `oklch(${toFixed(l * 100, 1)}% ${toFixed(c, 3)} ${toFixed(h, 3)})`
      }

      if (colorState.mode === "hsl") {
        const { h, s, l } = colorState.hsl
        return `hsl(${toFixed(h, 1)} ${toFixed(s * 100, 1)}% ${toFixed(l * 100, 1)}%)`
      }

      const { r, g, b } = colorState.rgb
      if (colorState.mode === "hex") {
        const color = {
          mode: "rgb",
          r: r / 255,
          g: g / 255,
          b: b / 255,
        }
        return formatHex(color)
      }

      return `rgb(${colorState.rgb.r} ${colorState.rgb.g} ${colorState.rgb.b})`
    } catch {
      return null
    }
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
  class="modal modal-bottom lg:modal-middle [&::backdrop]:hidden [&:has(.range-is-active)]:bg-transparent"
  inert={!open ? true : undefined}
>
  <div
    class="modal-box border-base-300 flex flex-col gap-4 overflow-x-hidden border p-0 max-lg:max-h-[80vh] lg:max-w-[50rem] [&:has(.range-is-active)]:border-transparent [&:has(.range-is-active)]:bg-transparent [&:has(.range-is-active)]:shadow-none [&:has(.range-is-active)_.hide-when-range-is-active]:invisible"
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
          <ColorSlider bind:colorState width={400} height={240} />
        </div>
      {:else}
        <!-- Traditional Color Palette -->
        <div
          class="mx-auto grid w-fit grid-cols-11 lg:my-auto lg:min-h-[20rem] lg:[writing-mode:vertical-lr]"
          role="listbox"
        >
          {#each colorDetails as [name, color, initials, names]}
            <button
              class="appearance-none p-px [writing-mode:lr]"
              aria-label={name}
              onmousedown={() => handleDragStart(color, name)}
              onmouseover={() => handleDragOver(color, name)}
              onfocus={() => handleDragOver(color, name)}
              onmouseup={() => handleDragEnd(color)}
              onkeypress={() => handleDragStart(color, name)}
            >
              <div
                class="border-base-content/10 relative grid aspect-square w-5 place-items-center rounded-full border bg-transparent select-none sm:m-px sm:w-7"
                class:[box-shadow:0_0_0_2px_white,0_0_0_4px_black]={colorName === name}
                class:outline-white={colorName === name}
                class:outline-offset-[-3px]={colorName === name}
                class:z-1={colorName === name}
                style:background-color={color}
              >
                {#if initials != null}
                  <div class={`tooltip px-px ${getTextColorClass(name)}`}>
                    <div class="tooltip-content max-w-28 text-[10px] lowercase">
                      {#each names as name}
                        <div>{name}</div>
                      {/each}
                    </div>
                    <div class="font-mono text-[9px] font-semibold uppercase">
                      {initials}
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
          <div class="flex items-center gap-1 max-md:flex-col">
            <div class="dropdown dropdown-top">
              <div tabindex="0" role="button" class="btn btn-sm">
                {#if colorState.mode === "hex"}
                  <ColorSpaceSelectorHex />
                {:else if colorState.mode === "hsl"}
                  <ColorSpaceSelectorHsl />
                {:else if colorState.mode === "rgb"}
                  <ColorSpaceSelectorRgb />
                {:else}
                  <ColorSpaceSelectorOklch />
                {/if}
                <svg
                  width="12px"
                  height="12px"
                  class="inline-block size-2 rotate-x-180 fill-current opacity-60"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 2048 2048"
                >
                  <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
                </svg>
              </div>
              <ul
                tabindex="-1"
                class="dropdown-content menu rounded-box bg-base-200 mb-1 w-40 border-[length:var(--border)] border-white/5 p-2 shadow-2xl outline-[length:var(--border)] outline-black/5"
              >
                <li class="menu-title text-xs font-semibold">Convert format</li>
                <li>
                  <button
                    type="button"
                    class:menu-active={colorState.mode === "oklch"}
                    onclick={({ target }) => {
                      target?.blur()
                      colorState.mode = "oklch"
                    }}
                  >
                    <ColorSpaceSelectorOklch />
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    class:menu-active={colorState.mode === "hsl"}
                    onclick={({ target }) => {
                      target?.blur()
                      colorState.mode = "hsl"
                    }}
                  >
                    <ColorSpaceSelectorHsl />
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    class:menu-active={colorState.mode === "rgb"}
                    onclick={({ target }) => {
                      target?.blur()
                      colorState.mode = "rgb"
                    }}
                  >
                    <ColorSpaceSelectorRgb />
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    class:menu-active={colorState.mode === "hex"}
                    onclick={({ target }) => {
                      target?.blur()
                      colorState.mode = "hex"
                    }}
                  >
                    <ColorSpaceSelectorHex />
                  </button>
                </li>
              </ul>
            </div>
            <label dir="ltr" class="input input-sm flex items-center gap-2 px-2">
              <input
                type="text"
                class="grow xl:font-mono xl:normal-nums"
                value={inputValue}
                oninput={handleInput}
                aria-label={`${name} value`}
              />
              {#if colorName}
                <span
                  class="opacity/50 badge badge-xs badge-soft shrink-0 gap-1 select-none max-md:hidden"
                >
                  {colorName}
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
        </div>
        <ContrastMeter color1={displayColor} color2={getPairColor(name)} />
      </div>
    {/if}
  </div>
  <div
    class="modal-backdrop"
    onclick={closeModal}
    onkeydown={handleKeydown}
    role="button"
    tabindex="0"
    aria-label="Close modal"
  >
    <button>close</button>
  </div>
</dialog>
