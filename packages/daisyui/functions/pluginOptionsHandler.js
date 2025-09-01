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
        // Use prefix for theme-controller class name
        const themeControllerClass = `${prefix}theme-controller`
        let selector = `${root}:has(input.${themeControllerClass}[value=${themeName}]:checked),[data-theme=${themeName}]`
        if (flags.includes("--default")) {
          selector = `:where(${root}),${selector}`
        }
        addBase({ [selector]: theme })

        if (flags.includes("--prefersdark")) {
          // Use :root:not([data-theme]) for dark mode specificity
          const darkSelector =
            root === ":root" ? ":root:not([data-theme])" : `${root}:not([data-theme])`
          addBase({ "@media (prefers-color-scheme: dark)": { [darkSelector]: theme } })
        }
      }
    }

    if (themes === "all") {
      if (themesObject["light"]) {
        applyTheme("light", ["--default"])
      }

      if (themesObject["dark"]) {
        const darkSelector =
          root === ":root" ? ":root:not([data-theme])" : `${root}:not([data-theme])`
        addBase({ "@media (prefers-color-scheme: dark)": { [darkSelector]: themesObject["dark"] } })
      }

      themeOrder.forEach((themeName) => {
        if (themesObject[themeName]) {
          applyTheme(themeName, [])
        }
      })
    } else if (themes) {
      const themeArray = Array.isArray(themes) ? themes : [themes]

      // For single theme with --default flag, skip the other applications
      if (themeArray.length === 1 && themeArray[0].includes("--default")) {
        const [themeName, ...flags] = themeArray[0].split(" ")
        applyTheme(themeName, flags)
        return { include, exclude, prefix }
      }

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
          const darkSelector =
            root === ":root" ? ":root:not([data-theme])" : `${root}:not([data-theme])`
          addBase({
            "@media (prefers-color-scheme: dark)": { [darkSelector]: themesObject[themeName] },
          })
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
