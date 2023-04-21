import { describe, expect, test } from "vitest"
import * as colorFunctions from "../theming/functions"
import * as themes from "../theming/themes"
import { trimThemeName, trimCssVariable, lchValuesToHex, ContrastRatioWarningThreshold, ContrastRatioErrorThreshold, isColorContrastOkay } from "./utils"

describe.each(
  // each theme
  Object.keys(themes).filter((themeKey) => {
    return themeKey !== "default"
  })
)("Check contrast of color pairs on all themes", (themeKey) => {
  test.each([
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
  ])(`${trimThemeName(themeKey)} color pairs`, (pair1, pair2) => {
    if (isColorContrastOkay(lchValuesToHex(colorFunctions.convertToLch(themes[themeKey])[pair1]), lchValuesToHex(colorFunctions.convertToLch(themes[themeKey])[pair2]), ContrastRatioWarningThreshold) === false && isColorContrastOkay(lchValuesToHex(colorFunctions.convertToLch(themes[themeKey])[pair1]), lchValuesToHex(colorFunctions.convertToLch(themes[themeKey])[pair2]), ContrastRatioErrorThreshold) === true) {
      console.log(`🟡 ${trimCssVariable(pair1)} + ${trimCssVariable(pair2)} contrast ratio on ${trimThemeName(themeKey)} theme is less than ${ContrastRatioWarningThreshold}:1`)
    }

    if (isColorContrastOkay(lchValuesToHex(colorFunctions.convertToLch(themes[themeKey])[pair1]), lchValuesToHex(colorFunctions.convertToLch(themes[themeKey])[pair2]), ContrastRatioErrorThreshold) === false) {
      console.log(`🔴 ${trimCssVariable(pair1)} + ${trimCssVariable(pair2)} contrast ratio on ${trimThemeName(themeKey)} theme is less than ${ContrastRatioErrorThreshold}:1`)
    }

    expect(isColorContrastOkay(lchValuesToHex(colorFunctions.convertToLch(themes[themeKey])[pair1]), lchValuesToHex(colorFunctions.convertToLch(themes[themeKey])[pair2]), ContrastRatioErrorThreshold)).toBe(true)
  })
})
