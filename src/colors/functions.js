const Color = require("color")
const colorNames = require("./colorNames")

module.exports = {
  generateForegroundColorFrom: function (input, percentage = 0.8) {
    const arr = Color(input).isDark() ? Color(input).mix(Color("white"), percentage).saturate(10).hsl().array() : Color(input).mix(Color("black"), percentage).saturate(10).hsl().array()

    return arr[0].toPrecision(5).replace(/\.?0+$/, "") + " " + arr[1].toPrecision(5).replace(/\.?0+$/, "") + "%" + " " + arr[2].toPrecision(5).replace(/\.?0+$/, "") + "%"
  },

  convertToHsl: function (input) {
    if (typeof input !== "object" || input === null) {
      return input
    }

    const resultObj = {}

    Object.entries(input).forEach(([rule, value]) => {
      if (!Object.hasOwn(colorNames, rule)) {
        resultObj[rule] = value
      } else {
        const hslArray = Color(value).hsl().array()

        resultObj[colorNames[rule]] = hslArray[0].toPrecision(5).replace(/\.?0+$/, "") + " " + hslArray[1].toPrecision(5).replace(/\.?0+$/, "") + "%" + " " + hslArray[2].toPrecision(5).replace(/\.?0+$/, "") + "%"
      }

      // auto generate focus colors
      if (!Object.hasOwn(input, "primary-focus")) {
        const darkerHslArray = Color(input["primary"]).darken(0.2).hsl().array()

        resultObj["--pf"] = darkerHslArray[0].toPrecision(5).replace(/\.?0+$/, "") + " " + darkerHslArray[1].toPrecision(5).replace(/\.?0+$/, "") + "%" + " " + darkerHslArray[2].toPrecision(5).replace(/\.?0+$/, "") + "%"
      }
      if (!Object.hasOwn(input, "secondary-focus")) {
        const darkerHslArray = Color(input["secondary"]).darken(0.2).hsl().array()

        resultObj["--sf"] = darkerHslArray[0].toPrecision(5).replace(/\.?0+$/, "") + " " + darkerHslArray[1].toPrecision(5).replace(/\.?0+$/, "") + "%" + " " + darkerHslArray[2].toPrecision(5).replace(/\.?0+$/, "") + "%"
      }
      if (!Object.hasOwn(input, "accent-focus")) {
        const darkerHslArray = Color(input["accent"]).darken(0.2).hsl().array()

        resultObj["--af"] = darkerHslArray[0].toPrecision(5).replace(/\.?0+$/, "") + " " + darkerHslArray[1].toPrecision(5).replace(/\.?0+$/, "") + "%" + " " + darkerHslArray[2].toPrecision(5).replace(/\.?0+$/, "") + "%"
      }
      if (!Object.hasOwn(input, "neutral-focus")) {
        const darkerHslArray = Color(input["neutral"]).darken(0.2).hsl().array()

        resultObj["--nf"] = darkerHslArray[0].toPrecision(5).replace(/\.?0+$/, "") + " " + darkerHslArray[1].toPrecision(5).replace(/\.?0+$/, "") + "%" + " " + darkerHslArray[2].toPrecision(5).replace(/\.?0+$/, "") + "%"
      }

      // auto generate base colors
      if (!Object.hasOwn(input, "base-100")) {
        resultObj["--b1"] = 0 + " " + 0 + "%" + " " + 100 + "%"
      }
      if (!Object.hasOwn(input, "base-200")) {
        const darkerHslArray = Color(input["base-100"]).darken(0.1).hsl().array()

        resultObj["--b2"] = darkerHslArray[0].toPrecision(5).replace(/\.?0+$/, "") + " " + darkerHslArray[1].toPrecision(5).replace(/\.?0+$/, "") + "%" + " " + darkerHslArray[2].toPrecision(5).replace(/\.?0+$/, "") + "%"
      }
      if (!Object.hasOwn(input, "base-300")) {
        if (Object.hasOwn(input, "base-200")) {
          const darkerHslArray = Color(input["base-200"]).darken(0.1).hsl().array()

          resultObj["--b3"] = darkerHslArray[0].toPrecision(5).replace(/\.?0+$/, "") + " " + darkerHslArray[1].toPrecision(5).replace(/\.?0+$/, "") + "%" + " " + darkerHslArray[2].toPrecision(5).replace(/\.?0+$/, "") + "%"
        } else {
          const darkerHslArray = Color(input["base-100"]).darken(0.1).darken(0.1).hsl().array()

          resultObj["--b3"] = darkerHslArray[0].toPrecision(5).replace(/\.?0+$/, "") + " " + darkerHslArray[1].toPrecision(5).replace(/\.?0+$/, "") + "%" + " " + darkerHslArray[2].toPrecision(5).replace(/\.?0+$/, "") + "%"
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

      // auto generate css variables
      if (!Object.hasOwn(input, "--rounded-box")) {
        resultObj["--rounded-box"] = "1rem"
      }
      if (!Object.hasOwn(input, "--rounded-btn")) {
        resultObj["--rounded-btn"] = "0.5rem"
      }
      if (!Object.hasOwn(input, "--rounded-badge")) {
        resultObj["--rounded-badge"] = "1.9rem"
      }
      if (!Object.hasOwn(input, "--animation-btn")) {
        resultObj["--animation-btn"] = "0.25s"
      }
      if (!Object.hasOwn(input, "--animation-input")) {
        resultObj["--animation-input"] = ".2s"
      }
      if (!Object.hasOwn(input, "--btn-text-case")) {
        resultObj["--btn-text-case"] = "uppercase"
      }
      if (!Object.hasOwn(input, "--btn-focus-scale")) {
        resultObj["--btn-focus-scale"] = "0.95"
      }
      if (!Object.hasOwn(input, "--border-btn")) {
        resultObj["--border-btn"] = "1px"
      }
      if (!Object.hasOwn(input, "--tab-border")) {
        resultObj["--tab-border"] = "1px"
      }
      if (!Object.hasOwn(input, "--tab-radius")) {
        resultObj["--tab-radius"] = "0.5rem"
      }
    })

    return resultObj
  },

  injectThemes: function (addBase, config, themes) {
    const includedThemesObj = {}

    // add default themes
    Object.entries(themes).forEach(([theme, value]) => {
      includedThemesObj[theme] = this.convertToHsl(value)
    })

    // add custom themes
    if (Array.isArray(config("daisyui.themes"))) {
      config("daisyui.themes").forEach((item) => {
        if (typeof item === "object" && item !== null) {
          Object.entries(item).forEach(([customThemeName, customThemevalue]) => {
            includedThemesObj["[data-theme=" + customThemeName + "]"] = this.convertToHsl(customThemevalue)
          })
        }
      })
    }

    let themeOrder = []
    if (config("daisyui.themes") === false) {
      themeOrder.push("light")
    } else if (Array.isArray(config("daisyui.themes"))) {
      config("daisyui.themes").forEach((theme) => {
        if (typeof theme === "object" && theme !== null) {
          Object.keys(theme).forEach((customThemeName) => {
            themeOrder.push(customThemeName)
          })
        } else if (Object.hasOwn(includedThemesObj, "[data-theme=" + theme + "]")) {
          themeOrder.push(theme)
        }
      })
    } else {
      themeOrder = ["light", "dark", "cupcake", "bumblebee", "emerald", "corporate", "synthwave", "retro", "cyberpunk", "valentine", "halloween", "garden", "forest", "aqua", "lofi", "pastel", "fantasy", "wireframe", "black", "luxury", "dracula", "cmyk", "autumn", "business", "acid", "lemonade", "night", "coffee", "winter"]
    }

    // inject themes in order
    themeOrder.forEach((themeName, index) => {
      if (index === 0) {
        // first theme as root
        addBase({
          [":root"]: includedThemesObj["[data-theme=" + themeName + "]"],
        })
      } else if (index === 1) {
        // auto dark
        if (config("daisyui.darkTheme")) {
          if (themeOrder[0] !== config("daisyui.darkTheme") && themeOrder.includes(config("daisyui.darkTheme"))) {
            addBase({
              ["@media (prefers-color-scheme: dark)"]: {
                [":root"]: includedThemesObj[`[data-theme=${config("daisyui.darkTheme")}]`],
              },
            })
          }
        } else if (config("daisyui.darkTheme") === false) {
          // disables prefers-color-scheme: dark
        } else {
          if (themeOrder[0] !== "dark" && themeOrder.includes("dark")) {
            addBase({
              ["@media (prefers-color-scheme: dark)"]: {
                [":root"]: includedThemesObj["[data-theme=dark]"],
              },
            })
          }
        }
        // theme 0 with name
        addBase({
          ["[data-theme=" + themeOrder[0] + "]"]: includedThemesObj["[data-theme=" + themeOrder[0] + "]"],
        })
        // theme 1 with name
        addBase({
          ["[data-theme=" + themeOrder[1] + "]"]: includedThemesObj["[data-theme=" + themeOrder[1] + "]"],
        })
      } else {
        addBase({
          ["[data-theme=" + themeName + "]"]: includedThemesObj["[data-theme=" + themeName + "]"],
        })
      }
    })

    return {
      includedThemesObj,
      themeOrder,
    }
  },
}
