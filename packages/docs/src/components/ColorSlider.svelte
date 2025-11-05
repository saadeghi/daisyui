<script>
  import { rgb, inGamut } from "culori"

  let { colorState = $bindable() } = $props()

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
  }

  // Generate gradient backgrounds for sliders
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

<div
  class="hide-when-range-is-active [&:has(input.range:active)_.setbgcolor]:bg-base-100/50 flex w-full flex-col gap-6 md:col-span-3 md:p-4 [&:has(input.range:active)]:visible!"
>
  {#each sliderConfigs as config, index (index)}
    <div class="setbgcolor rounded-box border-base-100/20 h-20 border-2 px-4 pt-8 backdrop-blur-md">
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
          // Update the bound value
          config.setter(parseFloat(e.target.value))
          colorState.changed = true
        }}
        oninput={(e) => {
          // Update the bound value
          config.setter(parseFloat(e.target.value))
          colorState.changed = true
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
