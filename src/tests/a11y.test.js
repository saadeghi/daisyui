import { expect, test } from "bun:test"
import * as colorFunctions from "../theming/functions"
import { themes } from "../theming/themes"
const { wcagContrast } = require("culori")

import { trimThemeName, ContrastRatioWarningThreshold, ContrastRatioErrorThreshold } from "./utils"

for (let themeKey in themes) {
  if (themeKey === "default") continue
  // for each variable name
  for (let variableName of [
    ["--pc", "--p"],
    ["--sc", "--s"],
    ["--ac", "--a"],
    ["--nc", "--n"],

    ["--bc", "--b1"],
    ["--bc", "--b2"],
    ["--bc", "--b3"],

    ["--inc", "--in"],
    ["--suc", "--su"],
    ["--wac", "--wa"],
    ["--erc", "--er"],
  ]) {
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
