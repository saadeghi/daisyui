import { describe, expect, test } from "vitest"
import * as colorFunctions from "../theming/functions"
import * as themes from "../theming/themes"
import * as colorNames from "../theming/colorNames"
import { trimThemeName } from "./utils"

describe.each(
  // each theme
  Object.keys(themes).filter((themeKey) => {
    return themeKey !== "default"
  })
)("All themes have all colors", (themeKey) => {
  test.each(
    // each color
    Object.keys(colorNames).filter((colorName) => {
      return colorName !== "default"
    })
  )(`${trimThemeName(themeKey)} has colors`, (colorName) => {
    expect(colorFunctions.convertColorFormat(themes[themeKey])).toHaveProperty(
      colorNames[colorName]
    )
  })
})

describe.each(
  // each theme
  Object.keys(themes).filter((themeKey) => {
    return themeKey !== "default"
  })
)("All themes have all required CSS variables", (themeKey) => {
  test.each(
    // each variable
    [
      "--rounded-box",
      "--rounded-btn",
      "--rounded-badge",
      "--animation-btn",
      "--animation-input",
      "--btn-text-case",
      "--btn-focus-scale",
      "--border-btn",
      "--tab-border",
      "--tab-radius",
    ]
  )(`${trimThemeName(themeKey)} has CSS variables`, (variableName) => {
    expect(colorFunctions.convertColorFormat(themes[themeKey])).toHaveProperty(variableName)
  })
})
