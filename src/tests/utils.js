import { colord, extend } from "colord"
import mixPlugin from "colord/plugins/mix"
import namesPlugin from "colord/plugins/names"
import lchPlugin from "colord/plugins/lch"
import hwbPlugin from "colord/plugins/hwb"
import labPlugin from "colord/plugins/lab"
import xyzPlugin from "colord/plugins/xyz"
import a11yPlugin from "colord/plugins/a11y"
extend([mixPlugin, namesPlugin, lchPlugin, hwbPlugin, labPlugin, xyzPlugin, a11yPlugin])

// WCAG 2.0 level AA requires a contrast ratio of at least 4.5:1
// for normal text and 3:1 for large text. WCAG 2.1 requires a
// contrast ratio of at least 3:1 for graphics and user interface
// components (such as form input borders). WCAG Level AAA requires
// a contrast ratio of at least 7:1 for normal text and 4.5:1 for
// large text.

export const ContrastRatioWarningThreshold = 3
export const ContrastRatioErrorThreshold = 2.5

export const isColorContrastOkay = (input1, input2, ratio) => {
  if (colord(input1).contrast(input2) > ratio) {
    return true
  }
  return false
}

function changeHslValuesToObject(input) {
  const [h, s, l] = input.match(/\d+(\.\d+)?%|\d+(\.\d+)?/g).map(parseFloat)
  return { h, s, l, a: 1 }
}

export const hslValuesToHex = (input) => {
  return colord(
    `hsl(${changeHslValuesToObject(input).h} ${changeHslValuesToObject(input).s}% ${
      changeHslValuesToObject(input).l
    }%)`
  ).toHex()
}

export const trimCssVariable = (input) => {
  return input.replace("--", "")
}

export const trimThemeName = (input) => {
  return input.replace("[data-theme=", "").replace("]", "")
}
