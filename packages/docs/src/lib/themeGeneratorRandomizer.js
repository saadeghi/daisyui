export function randomizeThemeColors(tailwindcolors) {
  const randomFrom = (arr) => arr[Math.floor(Math.random() * arr.length)]
  const radiusValues = ["0rem", "0.25rem", "0.5rem", "1rem", "2rem"]
  const borderValues = [
    // "0.5px",
    "1px",
    "1px",
    "1px",
    "1px",
    "1px",
    "1px",
    "1px",
    "1px",
    "1.5px",
    "2px",
  ]
  const depthValues = ["0", "1"]
  const noiseValues = ["0", "1"]
  const sizeValues = [
    // "0.1875rem",
    // "0.21875rem",
    "0.25rem",
    // "0.28125rem",
    // "0.3125rem"
  ]

  function randomFromRange(colors, ranges) {
    const validColors = Object.entries(colors).filter(([name, _]) => {
      const [colorName, shade] = name.split("-")
      return (
        (ranges.colorNames.includes(colorName) && ranges.shades.includes(shade)) ||
        ranges.colorNames.includes(name) // Handle black and white
      )
    })
    return validColors[Math.floor(Math.random() * validColors.length)][1]
  }

  function shuffle(array) {
    const newArray = [...array]
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[newArray[i], newArray[j]] = [newArray[j], newArray[i]]
    }
    return newArray
  }

  function getContrastColor(colorName, shade) {
    if (colorName === "black") return tailwindcolors["white"]
    if (colorName === "white") return tailwindcolors["black"]
    const shadeNum = parseInt(shade)
    const contrastShade = shadeNum > 400 ? "50" : "950"
    return randomFromRange(tailwindcolors, {
      colorNames: [colorName],
      shades: [contrastShade],
    })
  }

  function getColorNameFromValue(colorValue) {
    const colorEntry = Object.entries(tailwindcolors).find(([_, value]) => value === colorValue)
    if (colorEntry) {
      return colorEntry[0].split("-")[0]
    }
    return null
  }

  function getRandomArray(arrays, probability = 0.3) {
    const randomNumber = Math.random()
    if (randomNumber < probability) {
      return arrays[1]
    }
    return arrays[0]
  }

  const generateWeightedArray = (weights) => {
    return Object.entries(weights).reduce((arr, [color, weight]) => {
      for (let i = 0; i < weight; i++) {
        arr.push(color)
      }
      return arr
    }, [])
  }

  // Initialize newColors object
  const newColors = {
    "--radius-selector": randomFrom(radiusValues),
    "--radius-field": randomFrom(radiusValues),
    "--radius-box": randomFrom(radiusValues),
    "--size-selector": randomFrom(sizeValues),
    "--size-field": randomFrom(sizeValues),
    "--border": randomFrom(borderValues),
    "--depth": randomFrom(depthValues),
    "--noise": randomFrom(noiseValues),
  }

  // Decide if theme should be light or dark
  const isDarkTheme = Math.random() > 0.5
  newColors["color-scheme"] = isDarkTheme ? "dark" : "light"

  // Base colors
  const baseColorNamesArray = [
    ["slate", "gray", "zinc", "neutral", "stone"], // base array
    [
      "red",
      "orange",
      "amber",
      "yellow",
      "lime",
      "green",
      "emerald",
      "teal",
      "cyan",
      "sky",
      "blue",
      "indigo",
      "violet",
      "purple",
      "fuchsia",
      "pink",
      "rose",
    ], // alternate array
  ]
  const baseColorNames = getRandomArray(baseColorNamesArray)
  const baseColorName = baseColorNames[Math.floor(Math.random() * baseColorNames.length)]
  if (isDarkTheme) {
    // Dark theme: high numbers (darker colors)
    newColors["--color-base-100"] = randomFromRange(tailwindcolors, {
      colorNames: [baseColorName],
      shades: ["950"],
    })
    newColors["--color-base-200"] = randomFromRange(tailwindcolors, {
      colorNames: [baseColorName],
      shades: ["900"],
    })
    newColors["--color-base-300"] = randomFromRange(tailwindcolors, {
      colorNames: [baseColorName],
      shades: ["800"],
    })
    // Dark theme - use light colors for content
    newColors["--color-base-content"] = randomFromRange(tailwindcolors, {
      colorNames: [baseColorName],
      shades: ["100"],
    })
  } else {
    // Light theme: low numbers (lighter colors)
    newColors["--color-base-100"] = randomFromRange(tailwindcolors, {
      colorNames: [baseColorName],
      shades: ["50"],
    })
    newColors["--color-base-200"] = randomFromRange(tailwindcolors, {
      colorNames: [baseColorName],
      shades: ["100"],
    })
    newColors["--color-base-300"] = randomFromRange(tailwindcolors, {
      colorNames: [baseColorName],
      shades: ["200"],
    })
    // Light theme - use dark colors for content
    newColors["--color-base-content"] = randomFromRange(tailwindcolors, {
      colorNames: [baseColorName],
      shades: ["900"],
    })
  }

  // Neutral color (matching base color family but middle range)
  newColors["--color-neutral"] = randomFromRange(tailwindcolors, {
    colorNames: [baseColorName],
    shades: ["600", "700", "800", "900", "950"],
  })

  // Neutral content color
  newColors["--color-neutral-content"] = getContrastColor(baseColorName, "700")

  // Semantic colors - all using the same shade
  const semanticShade = randomFrom(["400", "500", "600"])

  newColors["--color-info"] = randomFromRange(tailwindcolors, {
    colorNames: ["cyan", "sky", "blue"],
    shades: [semanticShade],
  })

  newColors["--color-success"] = randomFromRange(tailwindcolors, {
    colorNames: ["lime", "green", "emerald", "teal"],
    shades: [semanticShade],
  })

  newColors["--color-warning"] = randomFromRange(tailwindcolors, {
    colorNames: ["yellow", "amber", "orange"],
    shades: [semanticShade],
  })

  newColors["--color-error"] = randomFromRange(tailwindcolors, {
    colorNames: ["red", "pink", "rose"],
    shades: [semanticShade],
  })

  // Set semantic content colors
  const infoColorName = getColorNameFromValue(newColors["--color-info"])
  const successColorName = getColorNameFromValue(newColors["--color-success"])
  const warningColorName = getColorNameFromValue(newColors["--color-warning"])
  const errorColorName = getColorNameFromValue(newColors["--color-error"])

  newColors["--color-info-content"] = getContrastColor(infoColorName, semanticShade)
  newColors["--color-success-content"] = getContrastColor(successColorName, semanticShade)
  newColors["--color-warning-content"] = getContrastColor(warningColorName, semanticShade)
  newColors["--color-error-content"] = getContrastColor(errorColorName, semanticShade)

  // Primary, Secondary, Accent colors
  const brandShades = randomFrom(["300", "400", "500", "600"])
  const brandColorWeights = {
    amber: 3,
    black: 5,
    blue: 4,
    cyan: 2,
    emerald: 3,
    fuchsia: 1,
    gray: 1,
    green: 3,
    indigo: 4,
    lime: 3,
    neutral: 1,
    orange: 3,
    pink: 3,
    purple: 3,
    red: 3,
    rose: 1,
    sky: 2,
    slate: 1,
    stone: 1,
    teal: 3,
    violet: 3,
    yellow: 3,
    zinc: 1,
  }

  // Pick three different color families
  const [primaryColorName, secondaryColorName, accentColorName] = shuffle(
    generateWeightedArray(brandColorWeights),
  ).slice(0, 3)

  newColors["--color-primary"] = randomFromRange(tailwindcolors, {
    colorNames: [primaryColorName],
    shades: [brandShades],
  })

  newColors["--color-secondary"] = randomFromRange(tailwindcolors, {
    colorNames: [secondaryColorName],
    shades: [brandShades],
  })

  newColors["--color-accent"] = randomFromRange(tailwindcolors, {
    colorNames: [accentColorName],
    shades: [brandShades],
  })

  // Set primary/secondary/accent content colors
  newColors["--color-primary-content"] = getContrastColor(primaryColorName, brandShades)
  newColors["--color-secondary-content"] = getContrastColor(secondaryColorName, brandShades)
  newColors["--color-accent-content"] = getContrastColor(accentColorName, brandShades)

  return newColors
}
