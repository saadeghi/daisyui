import Color from 'color'
import ColorContrastChecker from 'color-contrast-checker'

// WCAG 2.0 level AA requires a contrast ratio of at least 4.5:1 
// for normal text and 3:1 for large text. WCAG 2.1 requires a 
// contrast ratio of at least 3:1 for graphics and user interface 
// components (such as form input borders). WCAG Level AAA requires 
// a contrast ratio of at least 7:1 for normal text and 4.5:1 for 
// large text.

export const ContrastRatioWarningThreshold = 3
export const ContrastRatioErrorThreshold = 2

export const isColorContrastOkay = (input1, input2, ratio) => {
  if (new ColorContrastChecker().isLevelCustom(input1, input2, ratio)) {
    return true
  }
  return false
}

export const colorToHslValue = (input) => {
  const arr = Color(input).hsl().round().array()
  return arr[0] + " " + arr[1] + "%" + " " + arr[2] + "%";
}

export const hslValuesToHex = (input) => {
  return Color(`hsl(${input})`).hex()
}

export const trimCssVariable = (input) => {
  return input.replace('--', '')
}

export const trimThemeName = (input) => {
  return input.replace('[data-theme=', '').replace(']', '')
}