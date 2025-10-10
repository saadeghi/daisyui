const version = ""
import { pluginOptionsHandler } from "./functions/pluginOptionsHandler.js"
import { plugin } from "./functions/plugin.js"
import variables from "./functions/variables.js"
import themesObject from "./theme/object.js"
import { base, components, utilities } from "./imports.js"

export default plugin.withOptions(
  (options) => {
    return ({ addBase, addComponents, addUtilities, addVariant }) => {
      const {
        include,
        exclude,
        prefix = "",
      } = pluginOptionsHandler(options, addBase, themesObject, version)

      const shouldIncludeItem = (name) => {
        if (include && exclude) {
          return include.includes(name) && !exclude.includes(name)
        }
        if (include) {
          return include.includes(name)
        }
        if (exclude) {
          return !exclude.includes(name)
        }
        return true
      }

      Object.entries(base).forEach(([name, item]) => {
        if (!shouldIncludeItem(name)) return
        item({ addBase, prefix })
      })

      Object.entries(components).forEach(([name, item]) => {
        if (!shouldIncludeItem(name)) return
        item({ addComponents, prefix })
      })

      Object.entries(utilities).forEach(([name, item]) => {
        if (!shouldIncludeItem(name)) return
        item({ addUtilities, prefix })
      })

      // drawer variants. Can not be nested in layers so defined here
      addVariant(
        "is-drawer-close",
        "&:where(.drawer-toggle:not(:checked) ~ .drawer-side, .drawer-toggle:not(:checked) ~ .drawer-side *)",
      )
      addVariant(
        "is-drawer-open",
        "&:where(.drawer-toggle:checked ~ .drawer-side, .drawer-toggle:checked ~ .drawer-side *)",
      )
    }
  },
  () => ({
    theme: {
      extend: variables,
    },
  }),
)
