import { expect, test } from "bun:test"
import * as colorFunctions from "../theming/functions"
import * as themes from "../theming/themes"
import {
  trimThemeName,
  trimCssVariable,
  hslValuesToHex,
  ContrastRatioWarningThreshold,
  ContrastRatioErrorThreshold,
  isColorContrastOkay,
} from "./utils"

for (let themeKey in themes) {
  if (themeKey === "default") continue
  // for each variable name
  for (let variableName of [
    ["--pc", "--p"],
    ["--pc", "--pf"],
    ["--sc", "--s"],
    ["--sc", "--sf"],
    ["--ac", "--a"],
    ["--ac", "--af"],
    ["--nc", "--n"],
    ["--nc", "--nf"],
    ["--bc", "--b1"],
    ["--bc", "--b2"],
    ["--bc", "--b3"],
    ["--inc", "--in"],
    ["--suc", "--su"],
    ["--wac", "--wa"],
    ["--erc", "--er"],
  ]) {
    test(`${trimThemeName(themeKey)}: ${variableName[0].substring(2)}/${variableName[1].substring(
      2
    )} contrast is more than ${ContrastRatioErrorThreshold}:1`, () => {
      expect(
        isColorContrastOkay(
          hslValuesToHex(colorFunctions.convertColorFormat(themes[themeKey])[variableName[0]]),
          hslValuesToHex(colorFunctions.convertColorFormat(themes[themeKey])[variableName[1]]),
          ContrastRatioErrorThreshold
        )
      ).toBe(true)
    })
  }
}
