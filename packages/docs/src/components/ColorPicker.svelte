<script>
  import { createEventDispatcher } from "svelte"

  let isOpen = $state(false)
  let lightness = $state(0)
  let chroma = $state(0)
  let hue = $state(0)
  let isDragging = $state(false)
  let pickerElement

  let { value = $bindable() } = $props()
  let dispatch = createEventDispatcher()

  // Parse initial value immediately and when it changes
  $effect(() => {
    if (value) {
      const match = value.match(/oklch\((\d*\.?\d+)%\s+(\d*\.?\d+)\s+(\d*\.?\d+)\)/)
      if (match) {
        lightness = Math.max(0, Math.min(100, parseFloat(match[1])))
        chroma = Math.max(0, Math.min(0.4, parseFloat(match[2])))
        hue = Math.max(0, Math.min(360, parseFloat(match[3])))
      }
    }
  })

  let currentColor = $derived(
    `oklch(${lightness.toFixed(3)}% ${chroma.toFixed(3)} ${hue.toFixed(3)})`,
  )

  // Update the bound value whenever the color changes
  $effect(() => {
    value = currentColor
  })

  function updateColor() {
    dispatch("input", currentColor)
    isOpen = false
  }

  function togglePicker() {
    isOpen = !isOpen
  }

  function handleMouseDown(e) {
    isDragging = true
    updateLCFromMouse(e)
  }

  function handleGlobalMouseMove(e) {
    if (isDragging && pickerElement) {
      const rect = pickerElement.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width
      const y = 1 - (e.clientY - rect.top) / rect.height

      const clampedX = Math.max(0, Math.min(1, x))
      const clampedY = Math.max(0, Math.min(1, y))

      chroma = clampedX * 0.4
      lightness = clampedY * 100
    }
  }

  function handleGlobalMouseUp() {
    isDragging = false
  }

  function updateLCFromMouse(e) {
    if (pickerElement) {
      const rect = pickerElement.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width
      const y = 1 - (e.clientY - rect.top) / rect.height

      const clampedX = Math.max(0, Math.min(1, x))
      const clampedY = Math.max(0, Math.min(1, y))

      chroma = clampedX * 0.4
      lightness = clampedY * 100
    }
  }
</script>

<svelte:window on:mousemove={handleGlobalMouseMove} on:mouseup={handleGlobalMouseUp} />

<div class="relative inline-block align-middle">
  <button
    class="h-6 w-6 cursor-pointer rounded border border-gray-300"
    style:background-color={currentColor}
    on:click={togglePicker}
    aria-label="Open color picker"
  />

  {#if isOpen}
    <div class="fixed inset-0 z-40" on:click={togglePicker} />
    <div class="absolute z-50 mt-2 rounded-2xl bg-white p-4 shadow-lg">
      <div
        class="relative mb-4 grid h-52 w-52 cursor-crosshair overflow-hidden rounded-lg border border-black/10"
        bind:this={pickerElement}
        on:mousedown={handleMouseDown}
      >
        <!-- Base chroma gradient -->
        <div
          class="col-[1/1] row-[1/1]"
          style="background: linear-gradient(
              to right,
              oklch(100% 0 {hue}),
              oklch(100% 0.4 {hue})
            )"
        ></div>

        <!-- Light/Dark overlay -->
        <div
          class="col-[1/1] row-[1/1] mix-blend-multiply"
          style="background: linear-gradient(
              to bottom,
              transparent,
              oklch(0% 0 0)
            )"
        ></div>

        <!-- Selection indicator -->
        <div
          class="pointer-events-none absolute h-4 w-4 rounded-full border-2 border-white shadow-sm"
          style:left={`${(chroma / 0.4) * 100}%`}
          style:top={`${100 - lightness}%`}
          style:transform="translate(-50%, -50%)"
        />
      </div>

      <input
        type="range"
        min="0"
        max="360"
        bind:value={hue}
        class="h-5 w-full cursor-pointer appearance-none rounded-xl px-[2px]"
        style={`background: linear-gradient(to right,
          oklch(${lightness}% 0.3 0),
          oklch(${lightness}% 0.3 65),
          oklch(${lightness}% 0.3 120),
          oklch(${lightness}% 0.3 180),
          oklch(${lightness}% 0.3 240),
          oklch(${lightness}% 0.3 300),
          oklch(${lightness}% 0.3 360)
        )`}
      />

      <div class="mt-2 flex gap-2 text-sm text-gray-600 tabular-nums">
        <div
          class="size-6 rounded"
          style:background-color={`oklch(${lightness.toFixed(0)}% ${chroma.toFixed(2)} ${hue.toFixed(0)})`}
        ></div>
        oklch({lightness.toFixed(0)}% {chroma.toFixed(2)}
        {hue.toFixed(0)})
      </div>

      <button
        class="mt-4 w-full rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
        on:click={updateColor}
      >
        Apply
      </button>
    </div>
  {/if}
</div>

<style>
  input[type="range"] {
    appearance: none;
    border: none;
  }
  input[type="range"]::-webkit-slider-thumb {
    appearance: none;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    cursor: pointer;
    background: transparent;
    border: 2px solid white;
  }
</style>
