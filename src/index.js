const tailwindColors = require("tailwindcss/colors")

const postcssJs = require("postcss-js")
const postcssPrefix = require("./lib/addPrefix")

const daisyuiInfo = require("../package.json")
const colors = require("./theming/index")
const utilities = require("../dist/utilities")
const base = require("../dist/base")
const unstyled = require("../dist/unstyled")
const unstyledRtl = require("../dist/unstyled.rtl")
const styled = require("../dist/styled")
const styledRtl = require("../dist/styled.rtl")
const utilitiesUnstyled = require("../dist/utilities-unstyled")
const utilitiesStyled = require("../dist/utilities-styled")
const themes = require("./theming/themes")
const colorFunctions = require("./theming/functions")

const mainFunction = ({ addBase, addComponents, config }) => {
  let logs = false
  if (config("daisyui.logs") != false) {
    logs = true
  }
  if (logs) {
    console.log()
    console.log(
      "\x1b[35m%s\x1b[0m",
      "🌼 daisyUI " + daisyuiInfo.version,
      "\x1b[0m" + daisyuiInfo.homepage
    )
  }

  // inject @base style
  if (config("daisyui.base") != false) {
    addBase(base)
  }

  // inject components
  // because rollupjs doesn't supprt dynamic require
  let file = styled
  if (config("daisyui.styled") == false && config("daisyui.rtl") != true) {
    file = unstyled
  } else if (config("daisyui.styled") == false && config("daisyui.rtl") == true) {
    file = unstyledRtl
  } else if (config("daisyui.styled") != false && config("daisyui.rtl") != true) {
    file = styled
  } else if (config("daisyui.styled") !== false && config("daisyui.rtl") == true) {
    file = styledRtl
  }

  // add prefix to class names if specified
  const prefix = config("daisyui.prefix")
  let postcssJsProcess
  if (prefix) {
    try {
      postcssJsProcess = postcssJs.sync(postcssPrefix({ prefix, ignore: [] }))
    } catch (error) {
      logs && console.error(`Error occurred and prevent applying the "prefix" option:`, error)
    }
  }
  const shouldApplyPrefix = prefix && postcssJsProcess
  if (shouldApplyPrefix) {
    file = postcssJsProcess(file)
  }

  addComponents(file)

  const themeInjectorHsl = colorFunctions.injectThemes(addBase, config, themes, "hsl")
  themeInjectorHsl

  // inject @utilities style needed by components
  if (config("daisyui.utils") != false) {
    addComponents(utilities, { variants: ["responsive"] })

    let toAdd = utilitiesUnstyled // shadow clone here to avoid mutate the original
    if (shouldApplyPrefix) {
      toAdd = postcssJsProcess(toAdd)
    }
    addComponents(toAdd, { variants: ["responsive"] })

    toAdd = utilitiesStyled
    if (shouldApplyPrefix) {
      toAdd = postcssJsProcess(toAdd)
    }
    addComponents(toAdd, { variants: ["responsive"] })
  }

  if (logs) {
    console.log("╰╮")
    if (config("daisyui.styled") == false) {
      console.log(
        " ├─",
        "\x1b[33m" + "◆" + "\x1b[0m" + "\x1b[2m",
        "daisyui.styled",
        "\x1b[0m" + "config is",
        "\x1b[2m" + "false" + "\x1b[0m",
        "– your components will have no design decisions" + "\n │"
      )
    }
    if (config("daisyui.utils") == false) {
      console.log(
        " ├─",
        "\x1b[33m" + "◆" + "\x1b[0m" + "\x1b[2m",
        "daisyui.utils",
        "\x1b[0m" + "config is",
        "\x1b[2m" + "false" + "\x1b[0m",
        "– daisyUI modifier utility classes are disabled" + "\n │"
      )
    }
    if (config("daisyui.prefix") && config("daisyui.prefix") !== "") {
      console.log(
        " ├─",
        "\x1b[32m" + "✔︎" + "\x1b[0m",
        "Prefix is enabled, daisyUI classnames must use",
        "\x1b[2m" + `${config("daisyui.prefix")}`,
        "\x1b[0m" + "prefix. like:",
        "\x1b[2m" + `${config("daisyui.prefix")}btn`,
        "\x1b[0m" + "\n │    https://daisyui.com/docs/config" + "\n │"
      )
    }
    if (config("daisyui.rtl") == true) {
      console.log(
        " ├─",
        "\x1b[32m" + "✔︎" + "\x1b[0m",
        "Using RTL, make sure you're using",
        "\x1b[2m" + "<html dir=rtl>" + "\x1b[0m",
        "and you have",
        "\x1b[2m",
        "tailwindcss-flip",
        "\x1b[0m",
        "plugin",
        "\n │  https://daisyui.com/docs/config" + "\n │"
      )
    }
    if (themeInjectorHsl.themeOrder.length > 0) {
      console.log(
        " ╰─",
        "\x1b[32m" + "✔︎" + "\x1b[0m",
        "\x1b[2m" +
          "[ " +
          "\x1b[0m" +
          `${themeInjectorHsl.themeOrder.length}` +
          "\x1b[2m" +
          " ]" +
          "\x1b[0m" +
          ` ${themeInjectorHsl.themeOrder.length > 1 ? "themes are" : "theme is"}` +
          ` enabled. You can add more themes or make your own theme:` +
          "\n      https://daisyui.com/docs/themes"
      )
    }
    if (themeInjectorHsl.themeOrder.length === 0) {
      console.log(
        " ╰─",
        "\x1b[33m" + "◆" + "\x1b[0m",
        `All themes are disabled in the config. You can add themes or make your own theme:` +
          "\n      https://daisyui.com/docs/themes"
      )
    }
    console.log(
      "\n\x1b[32m%s\x1b[0m",
      "    ❤︎ Support daisyUI" + "\x1b[0m" + `: ${daisyuiInfo.funding.url}`
    )
    console.log()
  }
}

module.exports = require("tailwindcss/plugin")(mainFunction, {
  theme: {
    extend: {
      colors: {
        ...colors,
        // adding all Tailwind `neutral` shades here so they don't get overridden by daisyUI `neutral` color
        "neutral-50": tailwindColors.neutral[50],
        "neutral-100": tailwindColors.neutral[100],
        "neutral-200": tailwindColors.neutral[200],
        "neutral-300": tailwindColors.neutral[300],
        "neutral-400": tailwindColors.neutral[400],
        "neutral-500": tailwindColors.neutral[500],
        "neutral-600": tailwindColors.neutral[600],
        "neutral-700": tailwindColors.neutral[700],
        "neutral-800": tailwindColors.neutral[800],
        "neutral-900": tailwindColors.neutral[900],
      },
    },
  },
})
