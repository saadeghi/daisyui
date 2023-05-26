const colorNames = require("./colorNames")
const themeDefaults = require("./themeDefaults")

const { colord, getFormat, extend } = require("colord")
const mixPlugin = require("colord/plugins/mix")
const namesPlugin = require("colord/plugins/names")
const lchPlugin = require("colord/plugins/lch")
const hwbPlugin = require("colord/plugins/hwb")
const labPlugin = require("colord/plugins/lab")
const xyzPlugin = require("colord/plugins/xyz")

extend([mixPlugin, namesPlugin, lchPlugin, hwbPlugin, labPlugin, xyzPlugin])

module.exports = {
  changeColorValuesToObject: function (input) {
    const [h, s, l] = input.match(/\d+(\.\d+)?%|\d+(\.\d+)?/g).map(parseFloat)
    return { h, s, l, a: 1 }
  },

  turnColorValuesToString: function (input) {
    const [h, s, l] = input.match(/\d+(\.\d+)?%|\d+(\.\d+)?/g).map(parseFloat)
    return `${h} ${s}% ${l}%`
  },

  generateForegroundColorFrom: function (input, percentage = 0.8) {
    const str = colord(input)
      .mix(colord(input).isDark() ? "white" : "black", percentage)
      .toHslString()
    return this.turnColorValuesToString(str)
  },

  generateDarkenColorFrom: function (input, percentage = 0.07) {
    const str = colord(input).darken(percentage).toHslString()
    return this.turnColorValuesToString(str)
  },

  convertColorFormat: function (input, colorFunction = "hsl") {
    if (typeof input !== "object" || input === null) {
      return input
    }

    const resultObj = {}

    Object.entries(input).forEach(([rule, value]) => {
      // if (!Object.hasOwn(colorNames, rule)) {
      // resultObj[rule] = value
      // } else {
      //   let arr
      //   if (getFormat(value) === "lch") {
      //     arr = this.changeColorValuesToObject(value)
      //   } else {
      //     arr = colord(value).toLch()
      //   }
      //   resultObj[colorNames[rule]] = arr.l + " " + arr.c + " " + arr.h
      // }

      if (colorNames.hasOwnProperty(rule)) {
        const hslArray = colord(value).toHsl()
        resultObj[colorNames[rule]] = `${hslArray.h} ${hslArray.s}% ${hslArray.l}%`
      } else {
        resultObj[rule] = value
      }

      // if (getFormat("lch(" + value + ")") === "lch") {
      //   resultObj[rule] = value
      //   if (colorFunction === "hsl") {
      //     let arr = colord("lch(" + value + ")").toHsl()
      //     resultObj[rule] = arr.h + " " + arr.s + "% " + arr.l + "%"
      //   }
      // }

      // auto generate focus colors
      if (!Object.hasOwn(input, "primary-focus")) {
        resultObj["--pf"] = this.generateDarkenColorFrom(input["primary"])
      }
      if (!Object.hasOwn(input, "secondary-focus")) {
        resultObj["--sf"] = this.generateDarkenColorFrom(input["secondary"])
      }
      if (!Object.hasOwn(input, "accent-focus")) {
        resultObj["--af"] = this.generateDarkenColorFrom(input["accent"])
      }
      if (!Object.hasOwn(input, "neutral-focus")) {
        resultObj["--nf"] = this.generateDarkenColorFrom(input["neutral"])
      }

      // auto generate base colors
      if (!Object.hasOwn(input, "base-100")) {
        resultObj["--b1"] = "100 0 0"
      }
      if (!Object.hasOwn(input, "base-200")) {
        resultObj["--b2"] = this.generateDarkenColorFrom(input["base-100"])
      }
      if (!Object.hasOwn(input, "base-300")) {
        if (Object.hasOwn(input, "base-200")) {
          resultObj["--b3"] = this.generateDarkenColorFrom(input["base-200"])
        } else {
          resultObj["--b3"] = this.generateDarkenColorFrom(input["base-100"], 0.14)
        }
      }

      // auto generate state colors

      if (!Object.hasOwn(input, "info")) {
        resultObj["--in"] = 198 + " " + 93 + "%" + " " + 60 + "%"
      }
      if (!Object.hasOwn(input, "success")) {
        resultObj["--su"] = 158 + " " + 64 + "%" + " " + 52 + "%"
      }
      if (!Object.hasOwn(input, "warning")) {
        resultObj["--wa"] = 43 + " " + 96 + "%" + " " + 56 + "%"
      }
      if (!Object.hasOwn(input, "error")) {
        resultObj["--er"] = 0 + " " + 91 + "%" + " " + 71 + "%"
      }

      // auto generate content colors
      if (!Object.hasOwn(input, "base-content")) {
        resultObj["--bc"] = this.generateForegroundColorFrom(input["base-100"])
      }
      if (!Object.hasOwn(input, "primary-content")) {
        resultObj["--pc"] = this.generateForegroundColorFrom(input["primary"])
      }
      if (!Object.hasOwn(input, "secondary-content")) {
        resultObj["--sc"] = this.generateForegroundColorFrom(input["secondary"])
      }
      if (!Object.hasOwn(input, "accent-content")) {
        resultObj["--ac"] = this.generateForegroundColorFrom(input["accent"])
      }
      if (!Object.hasOwn(input, "neutral-content")) {
        resultObj["--nc"] = this.generateForegroundColorFrom(input["neutral"])
      }
      if (!Object.hasOwn(input, "info-content")) {
        if (Object.hasOwn(input, "info")) {
          resultObj["--inc"] = this.generateForegroundColorFrom(input["info"])
        } else {
          resultObj["--inc"] = 198 + " " + 100 + "%" + " " + 12 + "%"
        }
      }
      if (!Object.hasOwn(input, "success-content")) {
        if (Object.hasOwn(input, "success")) {
          resultObj["--suc"] = this.generateForegroundColorFrom(input["success"])
        } else {
          resultObj["--suc"] = 158 + " " + 100 + "%" + " " + 10 + "%"
        }
      }
      if (!Object.hasOwn(input, "warning-content")) {
        if (Object.hasOwn(input, "warning")) {
          resultObj["--wac"] = this.generateForegroundColorFrom(input["warning"])
        } else {
          resultObj["--wac"] = 43 + " " + 100 + "%" + " " + 11 + "%"
        }
      }
      if (!Object.hasOwn(input, "error-content")) {
        if (Object.hasOwn(input, "error")) {
          resultObj["--erc"] = this.generateForegroundColorFrom(input["error"])
        } else {
          resultObj["--erc"] = 0 + " " + 100 + "%" + " " + 14 + "%"
        }
      }

      // add css variables if not exist
      Object.entries(themeDefaults.variables).forEach((item) => {
        const [variable, value] = item
        if (!Object.hasOwn(input, variable)) {
          resultObj[variable] = value
        }
      })

      // add other custom styles
      if (!colorNames.hasOwnProperty(rule)) {
        resultObj[rule] = value
      }
    })

    return resultObj
  },

  injectThemes: function (addBase, config, themes, colorFunction) {
    const includedThemesObj = {}
    // includedThemesObj["@supports (not(color: lch(0 0 0)))"] = {}
    // add default themes
    Object.entries(themes).forEach(([theme, value]) => {
      if (colorFunction === "lch") {
        includedThemesObj[theme] = this.convertColorFormat(value)
      }
      if (colorFunction === "hsl") {
        includedThemesObj[theme] = this.convertColorFormat(value, "hsl")
      }
    })

    // add custom themes
    if (Array.isArray(config("daisyui.themes"))) {
      config("daisyui.themes").forEach((item) => {
        if (typeof item === "object" && item !== null) {
          Object.entries(item).forEach(([customThemeName, customThemevalue]) => {
            includedThemesObj["[data-theme=" + customThemeName + "]"] =
              this.convertColorFormat(customThemevalue)
          })
        }
      })
    }

    let themeOrder = []
    if (Array.isArray(config("daisyui.themes"))) {
      config("daisyui.themes").forEach((theme) => {
        if (typeof theme === "object" && theme !== null) {
          Object.keys(theme).forEach((customThemeName) => {
            themeOrder.push(customThemeName)
          })
        } else if (Object.hasOwn(includedThemesObj, "[data-theme=" + theme + "]")) {
          themeOrder.push(theme)
        }
      })
    } else if (config("daisyui.themes") === true) {
      themeOrder = themeDefaults.themeOrder
    } else {
      themeOrder = ["light", "dark"]
    }

    // inject themes in order
    const themesToInject = {}
    themeOrder.forEach((themeName, index) => {
      if (index === 0) {
        // first theme as root
        themesToInject[":root"] = includedThemesObj["[data-theme=" + themeName + "]"]
      } else if (index === 1) {
        // auto dark
        if (config("daisyui.darkTheme")) {
          if (
            themeOrder[0] !== config("daisyui.darkTheme") &&
            themeOrder.includes(config("daisyui.darkTheme"))
          ) {
            themesToInject["@media (prefers-color-scheme: dark)"] = {
              [":root"]: includedThemesObj[`[data-theme=${config("daisyui.darkTheme")}]`],
            }
          }
        } else if (config("daisyui.darkTheme") === false) {
          // disables prefers-color-scheme: dark
        } else {
          if (themeOrder[0] !== "dark" && themeOrder.includes("dark")) {
            themesToInject["@media (prefers-color-scheme: dark)"] = {
              [":root"]: includedThemesObj["[data-theme=dark]"],
            }
          }
        }
        // theme 0 with name
        themesToInject["[data-theme=" + themeOrder[0] + "]"] =
          includedThemesObj["[data-theme=" + themeOrder[0] + "]"]
        // theme 1 with name
        themesToInject["[data-theme=" + themeOrder[1] + "]"] =
          includedThemesObj["[data-theme=" + themeOrder[1] + "]"]
      } else {
        themesToInject["[data-theme=" + themeName + "]"] =
          includedThemesObj["[data-theme=" + themeName + "]"]
      }
    })
    if (colorFunction === "lch") {
      addBase({ "@supports (color: lch(0 0 0))": themesToInject })
    }
    if (colorFunction === "hsl") {
      addBase(themesToInject)
    }

    return {
      includedThemesObj,
      themeOrder,
    }
  },
}
