// Paints on a 1×1 canvas so the browser applies the same `color-mix(in oklab, …)` as the components.
let context

const canvasContext = () => {
  if (!context) {
    const canvas = document.createElement("canvas")
    canvas.width = 1
    canvas.height = 1
    context = canvas.getContext("2d", { willReadFrequently: true })
  }
  return context
}

const paint = (background, overlay) => {
  const ctx = canvasContext()
  ctx.clearRect(0, 0, 1, 1)
  ctx.fillStyle = background
  ctx.fillRect(0, 0, 1, 1)
  if (overlay) {
    ctx.fillStyle = overlay
    ctx.fillRect(0, 0, 1, 1)
  }
  const [r, g, b] = ctx.getImageData(0, 0, 1, 1).data
  return [r, g, b]
}

const relativeLuminance = ([r, g, b]) => {
  const linear = (channel) => {
    const srgb = channel / 255
    return srgb <= 0.04045 ? srgb / 12.92 : ((srgb + 0.055) / 1.055) ** 2.4
  }
  return 0.2126 * linear(r) + 0.7152 * linear(g) + 0.0722 * linear(b)
}

export const contrastRatio = (a, b) => {
  const [light, dark] = [relativeLuminance(a), relativeLuminance(b)].sort((x, y) => y - x)
  return (light + 0.05) / (dark + 0.05)
}

export const minMixPercent = (foreground, backgrounds, target) => {
  for (let percent = 1; percent <= 100; percent++) {
    const mix = `color-mix(in oklab, ${foreground} ${percent}%, #0000)`
    const passes = backgrounds.every(
      (background) => contrastRatio(paint(background, mix), paint(background)) >= target,
    )
    if (passes) return percent
  }
  return 100
}

// Level 1 (disabled content) is exempt from WCAG 1.4.3, so it has no computed target.
export const optimalDimMixes = (theme) => {
  const foreground = theme["--color-base-content"]
  const base100 = theme["--color-base-100"]
  const base200 = theme["--color-base-200"] ?? base100
  if (!foreground || !base100) return {}
  return {
    "--dim-mix-2": `${minMixPercent(foreground, [base100], 3)}%`, // UI components: 3:1
    "--dim-mix-3": `${minMixPercent(foreground, [base100, base200], 4.5)}%`, // text: 4.5:1
  }
}

// Fills the levels the theme does not set; values a user picked are kept.
export const withOptimalDimMixes = (theme) => {
  const missing = Object.entries(optimalDimMixes(theme)).filter(([key]) => !theme[key])
  return missing.length ? Object.assign({}, theme, Object.fromEntries(missing)) : theme
}
