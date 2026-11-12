const version = ""
import { pluginOptionsHandler } from "./functions/pluginOptionsHandler.js"
import { plugin } from "./functions/plugin.js"
import { nestCssLayers } from "./functions/nestCssLayers.js"
import { removeScrollLockSetters } from "./functions/removeScrollLockSetters.js"
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

      // modal and drawer set --page-scroll-lock, which is only read by rootscrolllock and rootscrollgutter
      const hasScrollLockReaders =
        shouldIncludeItem("rootscrolllock") || shouldIncludeItem("rootscrollgutter")
      const prepareComponentStyles = (styles) =>
        nestCssLayers(hasScrollLockReaders ? styles : removeScrollLockSetters(styles))

      Object.entries(base).forEach(([name, item]) => {
        if (!shouldIncludeItem(name)) return
        item({ addBase, prefix })
      })

      Object.entries(components).forEach(([name, item]) => {
        if (!shouldIncludeItem(name)) return
        item({
          addComponents: (styles) => addComponents(prepareComponentStyles(styles)),
          prefix,
        })
      })

      Object.entries(utilities).forEach(([name, item]) => {
        if (!shouldIncludeItem(name)) return
        item({
          addUtilities: (styles) => addUtilities(nestCssLayers(styles)),
          prefix,
        })
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
