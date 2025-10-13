<script>
  import { formatHex, parse, oklch, hsl, rgb, inGamut } from "culori"

  let { value = $bindable(), rgbValue = undefined } = $props()

  let colorState = $state({
    mode: "oklch",
    oklch: { l: 0.7, c: 0.15, h: 0 },
    hsl: { h: 0, s: 0.5, l: 0.5 },
    rgb: { r: 128, g: 128, b: 128 },
  })

  // Track original OKLCH value to preserve it when switching modes
  let originalValue = $state(value)
  let previousMode = $state("oklch")
  let hasChangedInCurrentMode = $state(false)

  // Calculate range indicators for OKLCH sliders (L and C) - only show out-of-gamut for all (not in sRGB, P3, Rec2020)
  function calculateOKLCHRange(type, currentState) {
    // Helper: is truly out of all gamuts
    function isOutOfAllGamuts(color) {
      const c = rgb(color)
      const gap = 0.0001
      // sRGB
      if (
        c &&
        c.r >= -gap &&
        c.r <= 1 + gap &&
        c.g >= -gap &&
        c.g <= 1 + gap &&
        c.b >= -gap &&
        c.b <= 1 + gap
      )
        return false
      // P3
      if (inGamut("p3")(color)) return false
      // Rec2020
      if (inGamut("rec2020")(color)) return false
      return true
    }

    if (type === "oklch-lightness") {
      const c = currentState.oklch.c
      let h = currentState.oklch.h
      h = h >= 360 ? 0 : h
      const step = 0.001
      const unavailable = []
      let inOut = false
      let start = 0
      for (let l = 0; l <= 1; l += step) {
        const color = { mode: "oklch", l, c, h }
        if (isOutOfAllGamuts(color)) {
          if (!inOut) {
            start = l
            inOut = true
          }
        } else {
          if (inOut) {
            unavailable.push([start, l - step])
            inOut = false
          }
        }
      }
      if (inOut) unavailable.push([start, 1])
      // Return as array of {start, end} in percent
      return unavailable.map(([from, to]) => ({
        start: from * 100,
        width: Math.max((to - from) * 100, 0.1),
      }))
    }
    if (type === "oklch-chroma") {
      const l = currentState.oklch.l
      let h = currentState.oklch.h
      h = h >= 360 ? 0 : h
      const sliderRange = 0.37
      const step = 0.001
      const unavailable = []
      let inOut = false
      let start = 0
      for (let c = 0; c <= sliderRange; c += step) {
        const color = { mode: "oklch", l, c, h }
        if (isOutOfAllGamuts(color)) {
          if (!inOut) {
            start = c
            inOut = true
          }
        } else {
          if (inOut) {
            unavailable.push([start, c - step])
            inOut = false
          }
        }
      }
      if (inOut) unavailable.push([start, sliderRange])
      return unavailable.map(([from, to]) => ({
        start: (from / sliderRange) * 100,
        width: Math.max(((to - from) / sliderRange) * 100, 0.1),
      }))
    }
    if (type === "oklch-hue") {
      const chroma = currentState.oklch.c
      if (chroma < 0.01) {
        return [{ start: 40, width: 20 }]
      } else {
        return []
      }
    }
    return []
  } // Generate gradient backgrounds for sliders
  function generateSliderGradient(type, currentState) {
    const steps = 10
    const colors = []

    if (type === "oklch-lightness") {
      for (let i = 0; i <= steps; i++) {
        const l = i / steps
        colors.push(`oklch(${l} ${currentState.oklch.c} ${currentState.oklch.h})`)
      }
      return `linear-gradient(to right, ${colors.join(", ")})`
    }

    if (type === "oklch-chroma") {
      const L = currentState.oklch.l
      let h = currentState.oklch.h

      // Normalize hue to 0-360 range (handle 360° = 0°)
      h = h >= 360 ? 0 : h

      // Fixed slider range (0 to 0.37)
      const maxSliderChroma = 0.37

      // Use culori's built-in inGamut function for accurate sRGB checking
      const inSRGB = inGamut("rgb")

      // Find minimum and maximum valid chroma using culori's accurate gamut checking
      let minValidChroma = 0
      let maxValidChroma = 0

      // Find minimum valid chroma (should be 0 for most cases)
      for (let testC = 0; testC <= maxSliderChroma; testC += 0.001) {
        const testColor = { mode: "oklch", l: L, c: testC, h: h }
        if (inSRGB(testColor)) {
          minValidChroma = testC
          break
        }
      }

      // Find maximum valid chroma by going from low to high and keeping the last valid one
      for (let testC = 0; testC <= maxSliderChroma; testC += 0.001) {
        const testColor = { mode: "oklch", l: L, c: testC, h: h }
        if (inSRGB(testColor)) {
          maxValidChroma = testC // Keep updating until we find the last valid one
        } else {
          break // Stop when we go out of gamut
        }
      }

      // Create gradient for the full slider range (don't clamp - let browser handle out-of-gamut)
      for (let i = 0; i <= steps; i++) {
        const sliderChroma = (i / steps) * maxSliderChroma // 0 to 0.37

        // Use actual chroma value - don't clamp to valid range
        // This matches what the browser will display for the actual color
        colors.push(`oklch(${L} ${sliderChroma} ${h})`)
      }

      return `linear-gradient(to right, ${colors.join(", ")})`
    }

    if (type === "oklch-hue") {
      for (let i = 0; i <= steps; i++) {
        const h = (i / steps) * 360
        colors.push(`oklch(${currentState.oklch.l} ${currentState.oklch.c} ${h})`)
      }
      return `linear-gradient(to right, ${colors.join(", ")})`
    }

    if (type === "hsl-hue") {
      // Ensure valid saturation and lightness values for gradient
      const s = Math.max(0, Math.min(1, currentState.hsl.s)) * 100
      const l = Math.max(0, Math.min(1, currentState.hsl.l)) * 100
      for (let i = 0; i <= steps; i++) {
        const h = (i / steps) * 360
        colors.push(`hsl(${h} ${s}% ${l}%)`)
      }
      return `linear-gradient(to right, ${colors.join(", ")})`
    }

    if (type === "hsl-saturation") {
      // Ensure valid hue and lightness values for gradient
      const h = Math.max(0, Math.min(360, currentState.hsl.h || 0))
      const l = Math.max(0, Math.min(1, currentState.hsl.l)) * 100
      for (let i = 0; i <= steps; i++) {
        const s = (i / steps) * 100
        colors.push(`hsl(${h} ${s}% ${l}%)`)
      }
      return `linear-gradient(to right, ${colors.join(", ")})`
    }

    if (type === "hsl-lightness") {
      // Ensure valid hue and saturation values for gradient
      const h = Math.max(0, Math.min(360, currentState.hsl.h || 0))
      const s = Math.max(0, Math.min(1, currentState.hsl.s)) * 100
      for (let i = 0; i <= steps; i++) {
        const l = (i / steps) * 100
        colors.push(`hsl(${h} ${s}% ${l}%)`)
      }
      return `linear-gradient(to right, ${colors.join(", ")})`
    }

    if (type === "rgb-red") {
      for (let i = 0; i <= steps; i++) {
        const r = Math.round((i / steps) * 255)
        colors.push(`rgb(${r} 0 0)`)
      }
      return `linear-gradient(to right, ${colors.join(", ")})`
    }

    if (type === "rgb-green") {
      for (let i = 0; i <= steps; i++) {
        const g = Math.round((i / steps) * 255)
        colors.push(`rgb(0 ${g} 0)`)
      }
      return `linear-gradient(to right, ${colors.join(", ")})`
    }

    if (type === "rgb-blue") {
      for (let i = 0; i <= steps; i++) {
        const b = Math.round((i / steps) * 255)
        colors.push(`rgb(0 0 ${b})`)
      }
      return `linear-gradient(to right, ${colors.join(", ")})`
    }

    // Fallback
    return "linear-gradient(to right, #ccc, #666)"
  }

  // Convert current value to all formats when value changes
  $effect(() => {
    // When switching modes, reset the change tracking
    if (colorState.mode !== previousMode) {
      hasChangedInCurrentMode = false
      previousMode = colorState.mode
    }

    // When the value prop changes from parent (like text input), update originalValue
    // and reset change tracking to ensure sliders reflect the new value
    if (value !== originalValue) {
      originalValue = value
      hasChangedInCurrentMode = false
    }

    // Determine which color value to use:
    // - For OKLCH mode: always use originalValue to preserve P3 colors
    // - For other modes: use rgbValue (if available) to avoid P3 gamut issues
    let colorToUse
    if (colorState.mode === "oklch") {
      colorToUse = originalValue
    } else {
      colorToUse = rgbValue || value
    }

    if (colorToUse) {
      try {
        const parsedColor = parse(colorToUse)
        if (parsedColor) {
          // Convert to OKLCH
          const oklchColor = oklch(parsedColor)
          if (oklchColor) {
            // Handle black/white/achromatic colors properly
            colorState.oklch.l = oklchColor.l ?? colorState.oklch.l
            colorState.oklch.c = oklchColor.c ?? colorState.oklch.c
            // Only update hue if chroma > 0, otherwise keep current hue
            if (oklchColor.c && oklchColor.c > 0) {
              colorState.oklch.h = oklchColor.h ?? colorState.oklch.h
            }
          }

          // Convert to HSL
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

          // Convert to RGB
          const rgbColor = rgb(parsedColor)
          if (rgbColor) {
            colorState.rgb.r = Math.round(rgbColor.r * 255)
            colorState.rgb.g = Math.round(rgbColor.g * 255)
            colorState.rgb.b = Math.round(rgbColor.b * 255)
          }
        }
      } catch {
        // Keep current values if conversion fails
      }
    }
  })

  // Helper function to generate color value from current state
  function generateColorValue() {
    try {
      let generatedValue

      if (colorState.mode === "oklch") {
        const l = colorState.oklch.l
        const c = colorState.oklch.c
        const h = colorState.oklch.h
        generatedValue = `oklch(${l.toFixed(3)} ${c.toFixed(3)} ${h.toFixed(1)})`
      } else if (colorState.mode === "hsl") {
        generatedValue = `hsl(${colorState.hsl.h.toFixed(1)} ${(colorState.hsl.s * 100).toFixed(1)}% ${(colorState.hsl.l * 100).toFixed(1)}%)`
      } else if (colorState.mode === "hex") {
        const color = {
          mode: "rgb",
          r: colorState.rgb.r / 255,
          g: colorState.rgb.g / 255,
          b: colorState.rgb.b / 255,
        }
        generatedValue = formatHex(color)
      } else if (colorState.mode === "rgb") {
        generatedValue = `rgb(${colorState.rgb.r} ${colorState.rgb.g} ${colorState.rgb.b})`
      }

      // If we're in OKLCH mode, check if changes were made
      // For other modes, mark that changes have been made and return the generated value
      if (colorState.mode === "oklch") {
        // If changes were made in OKLCH mode, return the generated value
        if (hasChangedInCurrentMode) {
          return generatedValue
        } else {
          // If no changes, return original value to preserve P3 colors
          return originalValue
        }
      } else {
        hasChangedInCurrentMode = true
        return generatedValue
      }
    } catch {
      return value // Fallback to current value if conversion fails
    }
  }

  // Get current background color for preview
  let previewColor = $derived(() => {
    if (colorState.mode === "oklch") {
      return `oklch(${colorState.oklch.l} ${colorState.oklch.c} ${colorState.oklch.h})`
    } else if (colorState.mode === "hsl") {
      return `hsl(${colorState.hsl.h} ${colorState.hsl.s * 100}% ${colorState.hsl.l * 100}%)`
    } else {
      return `rgb(${colorState.rgb.r} ${colorState.rgb.g} ${colorState.rgb.b})`
    }
  })

  // Slider configurations
  let sliderConfigs = $derived.by(() => {
    const mode = colorState.mode

    if (mode === "oklch") {
      return [
        {
          label: "Lightness",
          value: colorState.oklch.l,
          setter: (val) => (colorState.oklch.l = val),
          min: 0,
          max: 1,
          step: 0.001,
          formatter: (val) => val.toFixed(3),
          minLabel: "0 (black)",
          maxLabel: "1 (white)",
          gradientType: "oklch-lightness",
          range: calculateOKLCHRange("oklch-lightness", colorState),
        },
        {
          label: "Chroma",
          value: colorState.oklch.c,
          setter: (val) => (colorState.oklch.c = val),
          min: 0,
          max: 0.37,
          step: 0.001,
          formatter: (val) => val.toFixed(3),
          minLabel: "0 (gray)",
          maxLabel: "0.37 (vivid)",
          gradientType: "oklch-chroma",
          range: calculateOKLCHRange("oklch-chroma", colorState),
        },
        {
          label: "Hue",
          value: colorState.oklch.h,
          setter: (val) => (colorState.oklch.h = val),
          min: 0,
          max: 360,
          step: 0.1,
          formatter: (val) => val.toFixed(1) + "°",
          minLabel: "0° (red)",
          midLabel: "180° (cyan)",
          maxLabel: "360° (red)",
          gradientType: "oklch-hue",
          range: calculateOKLCHRange("oklch-hue", colorState),
        },
      ]
    } else if (mode === "hsl") {
      return [
        {
          label: "Hue",
          value: colorState.hsl.h,
          setter: (val) => (colorState.hsl.h = val),
          min: 0,
          max: 360,
          step: 0.1,
          formatter: (val) => val.toFixed(1) + "°",
          minLabel: "0° (red)",
          midLabel: "180° (cyan)",
          maxLabel: "360° (red)",
          gradientType: "hsl-hue",
          range: { startMargin: 0, width: 100 },
        },
        {
          label: "Saturation",
          value: colorState.hsl.s,
          setter: (val) => (colorState.hsl.s = val),
          min: 0,
          max: 1,
          step: 0.001,
          formatter: (val) => (val * 100).toFixed(1) + "%",
          minLabel: "0% (gray)",
          maxLabel: "100% (vivid)",
          gradientType: "hsl-saturation",
          range: { startMargin: 0, width: 100 },
        },
        {
          label: "Lightness",
          value: colorState.hsl.l,
          setter: (val) => (colorState.hsl.l = val),
          min: 0,
          max: 1,
          step: 0.001,
          formatter: (val) => (val * 100).toFixed(1) + "%",
          minLabel: "0% (black)",
          maxLabel: "100% (white)",
          gradientType: "hsl-lightness",
          range: { startMargin: 0, width: 100 },
        },
      ]
    } else if (mode === "hex") {
      // Hex mode uses RGB sliders with hex formatting
      return [
        {
          label: "Red",
          value: colorState.rgb.r,
          setter: (val) => (colorState.rgb.r = val),
          min: 0,
          max: 255,
          step: 1,
          formatter: (val) => Math.round(val).toString(16).toUpperCase().padStart(2, "0"),
          minLabel: "00",
          maxLabel: "FF",
          gradientType: "rgb-red",
          range: { startMargin: 0, width: 100 },
        },
        {
          label: "Green",
          value: colorState.rgb.g,
          setter: (val) => (colorState.rgb.g = val),
          min: 0,
          max: 255,
          step: 1,
          formatter: (val) => Math.round(val).toString(16).toUpperCase().padStart(2, "0"),
          minLabel: "00",
          maxLabel: "FF",
          gradientType: "rgb-green",
          range: { startMargin: 0, width: 100 },
        },
        {
          label: "Blue",
          value: colorState.rgb.b,
          setter: (val) => (colorState.rgb.b = val),
          min: 0,
          max: 255,
          step: 1,
          formatter: (val) => Math.round(val).toString(16).toUpperCase().padStart(2, "0"),
          minLabel: "00",
          maxLabel: "FF",
          gradientType: "rgb-blue",
          range: { startMargin: 0, width: 100 },
        },
      ]
    } else if (mode === "rgb") {
      // RGB mode uses decimal formatting
      return [
        {
          label: "Red",
          value: colorState.rgb.r,
          setter: (val) => (colorState.rgb.r = val),
          min: 0,
          max: 255,
          step: 1,
          formatter: (val) => val.toString(),
          minLabel: "0",
          maxLabel: "255",
          gradientType: "rgb-red",
          range: { startMargin: 0, width: 100 },
        },
        {
          label: "Green",
          value: colorState.rgb.g,
          setter: (val) => (colorState.rgb.g = val),
          min: 0,
          max: 255,
          step: 1,
          formatter: (val) => val.toString(),
          minLabel: "0",
          maxLabel: "255",
          gradientType: "rgb-green",
          range: { startMargin: 0, width: 100 },
        },
        {
          label: "Blue",
          value: colorState.rgb.b,
          setter: (val) => (colorState.rgb.b = val),
          min: 0,
          max: 255,
          step: 1,
          formatter: (val) => val.toString(),
          minLabel: "0",
          maxLabel: "255",
          gradientType: "rgb-blue",
          range: { startMargin: 0, width: 100 },
        },
      ]
    }

    // Fallback - should never happen
    return []
  })
</script>

<div class="grid w-full gap-12 md:grid-cols-4 md:p-4">
  <div class="hide-when-range-is-active">
    <h3 class="text-base-content/40 mb-2 px-2 text-[0.6875rem] font-semibold">Change Format</h3>
    <div class="tabs tabs-box flex-col">
      <label class="tab justify-start gap-2">
        <input
          type="radio"
          name="color_mode"
          value="oklch"
          bind:group={colorState.mode}
          checked={colorState.mode === "oklch"}
        />
        <svg class="size-4 p-0.25" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <g
            stroke-linejoin="round"
            stroke-linecap="round"
            stroke-width="2"
            fill="none"
            stroke="currentColor"
          >
            <path d="m8 3 4 8 5-5 5 15H2L8 3z"></path>
          </g>
        </svg>
        OKLCH
      </label>
      <label class="tab justify-start gap-2">
        <input
          type="radio"
          name="color_mode"
          value="hsl"
          bind:group={colorState.mode}
          checked={colorState.mode === "hsl"}
        />
        <svg class="size-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <g
            stroke-linejoin="round"
            stroke-linecap="round"
            stroke-width="2"
            fill="none"
            stroke="currentColor"
          >
            <path d="M12 6m-7 0a7 3 0 1 0 14 0a7 3 0 1 0 -14 0"></path>
            <path d="M5 6v12c0 1.657 3.134 3 7 3s7 -1.343 7 -3v-12"></path>
          </g>
        </svg>
        HSL
      </label>
      <label class="tab justify-start gap-2">
        <input
          type="radio"
          name="color_mode"
          value="rgb"
          bind:group={colorState.mode}
          checked={colorState.mode === "rgb"}
        />
        <svg class="size-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <g
            stroke-linejoin="round"
            stroke-linecap="round"
            stroke-width="2"
            fill="none"
            stroke="currentColor"
          >
            <path
              d="M21 16.008v-8.018a1.98 1.98 0 0 0 -1 -1.717l-7 -4.008a2.016 2.016 0 0 0 -2 0l-7 4.008c-.619 .355 -1 1.01 -1 1.718v8.018c0 .709 .381 1.363 1 1.717l7 4.008a2.016 2.016 0 0 0 2 0l7 -4.008c.619 -.355 1 -1.01 1 -1.718z"
            ></path>
            <path d="M12 22v-10"></path>
            <path d="M12 12l8.73 -5.04"></path>
            <path d="M3.27 6.96l8.73 5.04"></path>
          </g>
        </svg>
        RGB
      </label>
      <label class="tab justify-start gap-2">
        <input
          type="radio"
          name="color_mode"
          value="hex"
          bind:group={colorState.mode}
          checked={colorState.mode === "hex"}
        />
        <svg class="size-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <g
            stroke-linejoin="round"
            stroke-linecap="round"
            stroke-width="2"
            fill="none"
            stroke="currentColor"
          >
            <path
              d="M21 16.008v-8.018a1.98 1.98 0 0 0 -1 -1.717l-7 -4.008a2.016 2.016 0 0 0 -2 0l-7 4.008c-.619 .355 -1 1.01 -1 1.718v8.018c0 .709 .381 1.363 1 1.717l7 4.008a2.016 2.016 0 0 0 2 0l7 -4.008c.619 -.355 1 -1.01 1 -1.718z"
            ></path>
            <path d="M12 22v-10"></path>
            <path d="M12 12l8.73 -5.04"></path>
            <path d="M3.27 6.96l8.73 5.04"></path>
          </g>
        </svg>
        Hex
      </label>
    </div>
  </div>
  <div
    class="hide-when-range-is-active [&:has(input.range:active)_.setbgcolor]:bg-base-100/50 flex flex-col gap-6 md:col-span-3 [&:has(input.range:active)]:visible!"
  >
    {#each sliderConfigs as config, index (index)}
      <div
        class="setbgcolor rounded-box border-base-100/20 h-20 border-2 px-4 pt-8 backdrop-blur-md"
      >
        <!-- Moving tooltip above the slider thumb -->
        {#if config.max > config.min}
          <div class="relative mx-4 w-[calc(100%-2rem)]">
            <div class="absolute -ms-2 -mt-[2em] text-[0.625rem]">
              {config.label}
            </div>
            <div
              class="tooltip tooltip-open relative block w-0 font-mono before:text-[0.6875rem]"
              style={`inset-inline-start: ${((config.value - config.min) / (config.max - config.min)) * 100}%; pointer-events: none;`}
            >
              <div class="tooltip-content text-start font-mono">
                <div class="text-[0.6875rem]">{config.formatter(config.value)}</div>
              </div>
            </div>
          </div>
        {/if}
        <input
          id="slider-{index}"
          type="range"
          min={config.min}
          max={config.max}
          step={config.step}
          value={config.value}
          onchange={(e) => {
            config.setter(parseFloat(e.target.value))

            // Mark that changes have been made in current mode
            hasChangedInCurrentMode = true

            const newValue = generateColorValue()

            // Update the bound value
            value = newValue

            // For OKLCH mode, update originalValue when changes are made
            // For non-OKLCH modes, update originalValue to preserve changes
            if (hasChangedInCurrentMode) {
              originalValue = newValue
            }
          }}
          oninput={(e) => {
            config.setter(parseFloat(e.target.value))

            // Mark that changes have been made in current mode
            hasChangedInCurrentMode = true

            const newValue = generateColorValue()

            // Update the bound value
            value = newValue

            // For OKLCH mode, update originalValue when changes are made
            // For non-OKLCH modes, update originalValue to preserve changes
            if (hasChangedInCurrentMode) {
              originalValue = newValue
            }
          }}
          class="range range-xl focus:outline-base-content/10 outline-base-content/10 w-full text-transparent outline [--range-bg:transparent] focus:outline [&.range::-webkit-slider-thumb]:shadow-[0_0_0_1px_oklch(0_0_0/.3)_inset,0_0_0_2px_oklch(100_0_0)_inset]"
          style={`background: ${generateSliderGradient(config.gradientType, colorState)};`}
        />
        <!-- range indicator: show truly out-of-gamut as overlays -->
        <!-- only for L and C of LCH -->
        {#if config.range && (config.label === "Lightness" || config.label === "Chroma") && Array.isArray(config.range) && config.range.length > 0}
          <div class="pointer-events-none px-2">
            <div class="relative mt-1 h-0.5 w-full">
              {#each Array.isArray(config.range) ? config.range : [config.range] as r}
                {#if r && r.width > 0.1}
                  <div
                    class="bg-base-content/10 absolute top-0 left-0 h-full rounded"
                    style={`left:${r.start}%;width:${r.width}%;`}
                  ></div>
                {/if}
              {/each}
            </div>
          </div>
        {/if}
      </div>
    {/each}
  </div>
</div>
