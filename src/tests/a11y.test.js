import { expect, test } from "bun:test"
import { wcagContrast } from "culori"
import * as colorFunctions from "../theming/functions"
import * as themes from "../theming/themes"
import { trimThemeName } from "./utils"
import { colorPairs, ContrastRatioErrorThreshold, ContrastRatioWarningThreshold } from "./data"

for (let themeKey in themes) {
  if (themeKey === "default") continue
  // for each variable name
  for (let variableName of colorPairs) {
    test(`${trimThemeName(themeKey)}: \t${variableName[0].substring(2)}/${variableName[1].substring(
      2
    )} \tcontrast = ${wcagContrast(
      `oklch(${colorFunctions.convertColorFormat(themes[themeKey], "oklch")[variableName[0]]})`,
      `oklch(${colorFunctions.convertColorFormat(themes[themeKey], "oklch")[variableName[1]]})`
    ).toFixed(2)}:1`, () => {
      expect(
        wcagContrast(
          `oklch(${colorFunctions.convertColorFormat(themes[themeKey], "oklch")[variableName[0]]})`,
          `oklch(${colorFunctions.convertColorFormat(themes[themeKey], "oklch")[variableName[1]]})`
        )
      ).toBeGreaterThan(ContrastRatioErrorThreshold)
    })
  }
}
