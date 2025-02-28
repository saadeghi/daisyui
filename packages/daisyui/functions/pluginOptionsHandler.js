import themeOrder from "./themeOrder.js"

export const pluginOptionsHandler = (() => {
  let firstRun = true
  return (options, addBase, themesObject, packageVersion) => {
    const {
      logs = true,
      root = ":root",
      themes = ["light --default", "dark --prefersdark"],
      include,
      exclude,
      prefix = "",
    } = options || {}

    if (logs !== false && firstRun) {
      console.log(
        `${atob("Lyoh")} ${decodeURIComponent("%F0%9F%8C%BC")} ${atob("ZGFpc3lVSQ==")} ${packageVersion} ${atob("Ki8=")}`,
      )
      firstRun = false
    }

    const applyTheme = (themeName, flags) => {
      const theme = themesObject[themeName]
      if (theme) {
        let selector = `${root}:has(input.theme-controller[value=${themeName}]:checked),[data-theme=${themeName}]`
        if (flags.includes("--default")) {
          selector = `:where(${root}),${selector}`
        }
        addBase({ [selector]: theme })

        if (flags.includes("--prefersdark")) {
          addBase({ "@media (prefers-color-scheme: dark)": { [root]: theme } })
        }
      }
    }

    if (themes === "all") {
      if (themesObject["light"]) {
        applyTheme("light", ["--default"])
      }

      if (themesObject["dark"]) {
        addBase({ "@media (prefers-color-scheme: dark)": { [root]: themesObject["dark"] } })
      }

      themeOrder.forEach((themeName) => {
        if (themesObject[themeName]) {
          applyTheme(themeName, [])
        }
      })
    } else if (themes) {
      const themeArray = Array.isArray(themes) ? themes : [themes]

      // default theme
      themeArray.forEach((themeOption) => {
        const [themeName, ...flags] = themeOption.split(" ")
        if (flags.includes("--default")) {
          applyTheme(themeName, ["--default"])
        }
      })

      // prefers dark theme
      themeArray.forEach((themeOption) => {
        const [themeName, ...flags] = themeOption.split(" ")
        if (flags.includes("--prefersdark")) {
          addBase({ "@media (prefers-color-scheme: dark)": { [root]: themesObject[themeName] } })
        }
      })

      // other themes
      themeArray.forEach((themeOption) => {
        const [themeName] = themeOption.split(" ")
        applyTheme(themeName, [])
      })
    }

    return { include, exclude, prefix }
  }
})()
