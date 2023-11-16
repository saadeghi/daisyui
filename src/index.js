// const tailwindColors = require("tailwindcss/colors")
// const tailwindPlugin = require("tailwindcss/plugin")
import tailwindPlugin from "./lib/createPlugin"

import { sync } from "postcss-js"
import { magenta, dim, yellow, blue, reset, green } from "picocolors"
import postcssPrefix from "./lib/addPrefix"

import { version, funding } from "../package.json"
import utilities from "../dist/utilities.cjs"
import base from "../dist/base.cjs"
import unstyled from "../dist/unstyled.cjs"
import styled from "../dist/styled.cjs"
import utilitiesUnstyled from "../dist/utilities-unstyled.cjs"
import utilitiesStyled from "../dist/utilities-styled.cjs"
import { themes } from "./theming/themes"
import { injectThemes } from "./theming/functions"
import { utilityClasses } from "./lib/utility-classes"
import colorObject from "./theming/index"

const mainFunction = ({ addBase, addComponents, config }) => {
  let logs = false
  if (config("daisyui.logs") != false) {
    logs = true
  }
  if (logs) {
    console.log()
    console.log(`🌼   ${magenta("daisyUI")} ${dim(version)}`)
  }

  // inject @base style
  if (config("daisyui.base") != false) {
    addBase(base)
  }

  // inject components
  let file = styled
  if (config("daisyui.styled") == false) {
    file = unstyled
  }

  // add prefix to class names if specified
  const prefix = config("daisyui.prefix")
  let postcssJsProcess
  if (prefix) {
    try {
      postcssJsProcess = sync(postcssPrefix({ prefix, ignore: [] }))
    } catch (error) {
      logs && console.error(`Error occurred and prevent applying the "prefix" option:`, error)
    }
  }
  const shouldApplyPrefix = prefix && postcssJsProcess
  if (shouldApplyPrefix) {
    file = postcssJsProcess(file)
  }

  addComponents(file)

  const themeInjector = injectThemes(addBase, config, themes)
  themeInjector

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
    if (config("daisyui.styled") == false) {
      console.log(
        `├─ ${yellow("ℹ︎")} ${blue("styled")} ${reset("config is")} ${blue("false")} ${dim(
          "\tcomponents won't have design decisions"
        )}`
      )
    }
    if (config("daisyui.utils") == false) {
      console.log(
        `├─ ${yellow("ℹ︎")} ${blue("utils")} ${reset("config is")} ${blue("false")} ${dim(
          "\tdaisyUI utility classes are disabled"
        )}`
      )
    }
    if (config("daisyui.prefix") && config("daisyui.prefix") !== "") {
      console.log(
        `├─ ${green("✔︎")} ${blue("prefix")} is enabled${dim(
          "\t\tdaisyUI classnames must use"
        )} ${blue(config("daisyui.prefix"))} ${dim("prefix")}`
      )
    }
    if (themeInjector.themeOrder.length > 0) {
      console.log(
        `├─ ${green("✔︎")} ${themeInjector.themeOrder.length} ${
          themeInjector.themeOrder.length > 1 ? "themes" : "theme"
        } added${dim("\t\thttps://daisyui.com/docs/themes")}`
      )
    }
    if (themeInjector.themeOrder.length === 0) {
      console.log(
        `├─ ${yellow("ℹ︎")} All themes are disabled in config${dim(
          "\t\thttps://daisyui.com/docs/themes"
        )}`
      )
    }
    let messages = [
      `${green("❤︎")} ${reset("Support daisyUI project:")}\t${dim(funding.url)}`,
      `${green("★")} ${reset("Star daisyUI on GitHub")}\t${dim(
        "https://github.com/saadeghi/daisyui"
      )}`,
    ]
    console.log(`╰─ ${messages[Math.floor(Math.random() * messages.length)]}`)
    console.log()
  }
}

export default tailwindPlugin(mainFunction, {
  theme: {
    extend: {
      colors: {
        ...colorObject,
        // adding all Tailwind `neutral` shades here so they don't get overridden by daisyUI `neutral` color
        "neutral-50": "#fafafa",
        "neutral-100": "#f5f5f5",
        "neutral-200": "#e5e5e5",
        "neutral-300": "#d4d4d4",
        "neutral-400": "#a3a3a3",
        "neutral-500": "#737373",
        "neutral-600": "#525252",
        "neutral-700": "#404040",
        "neutral-800": "#262626",
        "neutral-900": "#171717",
        "neutral-950": "#0a0a0a",
      },
      ...utilityClasses,
    },
  },
})
