import { colord, extend } from "colord"
import mixPlugin from "colord/plugins/mix"
import namesPlugin from "colord/plugins/names"
import lchPlugin from "colord/plugins/lch"
import hwbPlugin from "colord/plugins/hwb"
import labPlugin from "colord/plugins/lab"
import xyzPlugin from "colord/plugins/xyz"
extend([mixPlugin, namesPlugin, lchPlugin, hwbPlugin, labPlugin, xyzPlugin])

import ColorContrastChecker from "color-contrast-checker"

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

function changeLchValuesToObject(input) {
  const [l, c, h] = input.match(/\d+(\.\d+)?%|\d+(\.\d+)?/g).map(parseFloat)
  return { l, c, h, a: 1 }
}

export const lchValuesToHex = (input) => {
  console.log(input)
  return colord(`lch(${changeLchValuesToObject(input).l}% ${changeLchValuesToObject(input).c} ${changeLchValuesToObject(input).h})`).toHex()
}

export const trimCssVariable = (input) => {
  return input.replace("--", "")
}

export const trimThemeName = (input) => {
  return input.replace("[data-theme=", "").replace("]", "")
}
