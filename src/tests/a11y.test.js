import { describe, expect, test } from 'vitest'
import * as colorFunctions from '../colors/functions'
import * as themes from "../colors/themes"
import {
  trimThemeName,
  trimCssVariable,
  hslValuesToHex,
  ContrastRatioWarningThreshold,
  ContrastRatioErrorThreshold,
  isColorContrastOkay,
} from "./utils"


describe.each(
  // each theme
  Object.keys(themes).filter((themeKey) => {
    return themeKey !== "default";
  })
)('Check contrast of color pairs on all themes', (themeKey) => {

  test.each(
    [
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
    ]
  )(`${trimThemeName(themeKey)} color pairs`, (pair1, pair2) => {

    if (
      isColorContrastOkay(
        hslValuesToHex(colorFunctions.convertToHsl(themes[themeKey])[pair1]),
        hslValuesToHex(colorFunctions.convertToHsl(themes[themeKey])[pair2]),
        ContrastRatioWarningThreshold
      ) === false
      &&
      isColorContrastOkay(
        hslValuesToHex(colorFunctions.convertToHsl(themes[themeKey])[pair1]),
        hslValuesToHex(colorFunctions.convertToHsl(themes[themeKey])[pair2]),
        ContrastRatioErrorThreshold
      ) === true
    ) {
      console.log(`🟡 ${trimCssVariable(pair1)} + ${trimCssVariable(pair2)} contrast ratio on ${trimThemeName(themeKey)} theme is less than ${ContrastRatioWarningThreshold}:1`)
    }

    if (
      isColorContrastOkay(
        hslValuesToHex(colorFunctions.convertToHsl(themes[themeKey])[pair1]),
        hslValuesToHex(colorFunctions.convertToHsl(themes[themeKey])[pair2]),
        ContrastRatioErrorThreshold
      ) === false
    ) {
      console.log(`🔴 ${trimCssVariable(pair1)} + ${trimCssVariable(pair2)} contrast ratio on ${trimThemeName(themeKey)} theme is less than ${ContrastRatioErrorThreshold}:1`)
    }


    expect(
      isColorContrastOkay(
        hslValuesToHex(colorFunctions.convertToHsl(themes[themeKey])[pair1]),
        hslValuesToHex(colorFunctions.convertToHsl(themes[themeKey])[pair2]),
        ContrastRatioErrorThreshold
      )
    ).toBe(true)

  })


})
