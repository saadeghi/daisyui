// WCAG 2.0 level AA requires a contrast ratio of at least 4.5:1
// for normal text and 3:1 for large text. WCAG 2.1 requires a
// contrast ratio of at least 3:1 for graphics and user interface
// components (such as form input borders). WCAG Level AAA requires
// a contrast ratio of at least 7:1 for normal text and 4.5:1 for
// large text.

export const ContrastRatioWarningThreshold = 4.5
export const ContrastRatioErrorThreshold = 3

export const trimCssVariable = (input) => {
  return input.replace("--", "")
}

export const trimThemeName = (input) => {
  return input.replace("[data-theme=", "").replace("]", "")
}
