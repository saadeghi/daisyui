import { expect, test } from "bun:test"
import * as colorFunctions from "../theming/functions"
import themes from "../theming/themes"
import colorNames from "../theming/colorNames"
import { trimThemeName } from "./utils"

for (let themeKey in themes) {
  if (themeKey === "default") continue
  test(`${trimThemeName(themeKey)}:   \tcolors`, () => {
    for (let colorName in colorNames) {
      if (colorName === "default") continue
      expect(colorFunctions.convertColorFormat(themes[themeKey])).toHaveProperty(
        colorNames[colorName]
      )
    }
  })
}
for (let themeKey in themes) {
  if (themeKey === "default") continue
  test(`${trimThemeName(themeKey)}:   \tvariables`, () => {
    for (let variableName of [
      "--rounded-box",
      "--rounded-btn",
      "--rounded-badge",
      "--animation-btn",
      "--animation-input",
      "--btn-focus-scale",
      "--border-btn",
      "--tab-border",
      "--tab-radius",
    ]) {
      expect(colorFunctions.convertColorFormat(themes[themeKey])).toHaveProperty(variableName)
    }
  })
}
