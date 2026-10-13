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

    // Themes that already have a rule in this run. Must be per-invocation, not module scope,
    // otherwise later builds (dev server rebuilds, multiple CSS entries) emit no themes at all.
    //
    // A theme must never be emitted twice. Two rules with identical declarations where one
    // selector list is a subset of the other survive lightningcss' dead-compound elimination,
    // and when `targets` includes a browser without `:has()` support (Vite derives `targets`
    // from `build.target`; its default `baseline-widely-available` includes Firefox 104) the
    // list is rewritten to `:is(...)`. `:is()` takes the highest specificity of its arguments,
    // so `[data-theme=x]` jumps from (0,1,0) to (0,4,1) and the built-in theme starts winning
    // over a user theme defined with `@plugin "daisyui/theme"`. See #4488.
    //
    // The `--default` variant is always applied first, so keeping the first emission keeps the
    // `:where(:root)` prefix.
    const appliedThemes = new Set()

    const applyTheme = (themeName, flags) => {
      const theme = themesObject[themeName]
      if (theme && !appliedThemes.has(themeName)) {
        appliedThemes.add(themeName)
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
