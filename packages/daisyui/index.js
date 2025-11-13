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
        `${prefix}is-drawer-close`,
        `&:where(.${prefix}drawer-toggle:not(:checked) ~ .${prefix}drawer-side, .${prefix}drawer-toggle:not(:checked) ~ .${prefix}drawer-side *)`,
      )
      addVariant(
        `${prefix}is-drawer-open`,
        `&:where(.${prefix}drawer-toggle:checked ~ .${prefix}drawer-side, .${prefix}drawer-toggle:checked ~ .${prefix}drawer-side *)`,
      )
    }
  },
  () => ({
    theme: {
      extend: variables,
    },
  }),
)
