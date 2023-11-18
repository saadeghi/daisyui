import { expect, test } from "bun:test"
import * as colorFunctions from "../theming/functions"
import * as themes from "../theming/themes"
import * as colorNames from "../theming/colorNames"
import { trimThemeName } from "./utils"
import { cssVars } from "./data"

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
    for (let variableName of cssVars) {
      expect(colorFunctions.convertColorFormat(themes[themeKey])).toHaveProperty(variableName)
    }
  })
}
