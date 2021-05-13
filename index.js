var daisyuiInfo = require('./package.json')

const base = require("./dist/base")
const baseRtl = require("./dist/base.rtl")
const styled = require("./dist/styled")
const styledRtl = require("./dist/styled.rtl")
const colors = require("./colors/index")
const resets_general = require('./dist/resets/general')
const themes = require("./dist/themes")

const utilities_borderRadius = require('./dist/utilities/borderRadius')
const utilities_fontSize = require('./dist/utilities/fontSize')
const utilities_glass = require('./dist/utilities/glass')
const utilities_sizing = require('./dist/utilities/sizing')
const utilities_responsiveComponent = require('./dist/utilities/responsiveComponent')
const utilities_typography = require('./dist/utilities/typography')
const utilities_variables = require('./dist/utilities/variables')


const mainFunction = ({ addBase, addComponents, addUtilities, config }) => {
  let diasyuiIncludedItems = []
  let logs = false
  if (config('daisyui.logs') != false) {
    logs = true
  }
  if (logs) {
    console.log()
    console.log('\x1b[35m%s\x1b[0m', '🌼 DaisyUI components ' + daisyuiInfo.version, '\x1b[0m', daisyuiInfo.homepage)
    console.group()
  }

  // core
  // because rollupjs doesn't supprt dynamic require
  let file = styled
  if (config('daisyui.styled') == false && config('daisyui.rtl') == false) {
    diasyuiIncludedItems.push('unstyled components')
    file = base
  } else if (config('daisyui.styled') == false && config('daisyui.rtl') == true) {
    diasyuiIncludedItems.push('unstyled components')
    console.log('\x1b[36m%s\x1b[0m', ' Direction:', '\x1b[0m', 'RTL');
    file = baseRtl
  } else if (config('daisyui.styled') != false && config('daisyui.rtl') != true) {
    diasyuiIncludedItems.push('components')
    file = styled
  } else if (config('daisyui.styled') !== false && config('daisyui.rtl') == true) {
    diasyuiIncludedItems.push('components')
    console.log('\x1b[36m%s\x1b[0m', ' Direction:', '\x1b[0m', 'RTL');
    file = styledRtl
  }
  addComponents(file)

  // inject @base style 
  if (config('daisyui.resets') != false) {
    addBase(resets_general)
    diasyuiIncludedItems.push('resets')
  }

  // inject themes
  if (Array.isArray( config('daisyui.themes') )) {
    let diasyuiIncludedThemes = []
    config('daisyui.themes').forEach(theme => {
      addComponents(require("./dist/themes/"+theme))
      diasyuiIncludedThemes.push(theme)
    });
    diasyuiIncludedItems.push('selected themes(' + diasyuiIncludedThemes.length + ')')
  }
  else if (config('daisyui.themes') != false) {
    addComponents(themes)
    diasyuiIncludedItems.push('themes')
  }

  // inject @utilities style needed by components
  if (config('daisyui.utils') != false) {
    addUtilities(utilities_borderRadius, { variants: ['responsive'] })
    addUtilities(utilities_fontSize, { variants: ['responsive'] })
    addUtilities(utilities_glass, { variants: ['responsive'] })
    addUtilities(utilities_sizing, { variants: ['responsive'] })
    addUtilities(utilities_responsiveComponent, { variants: ['responsive'] })
    addUtilities(utilities_typography, { variants: ['responsive'] })
    addUtilities(utilities_variables, { variants: ['responsive'] })
    diasyuiIncludedItems.push('utilities')
  }
  if (logs) {
    console.log('\x1b[32m%s\x1b[0m', '✔︎ Including:', '\x1b[0m', '' + diasyuiIncludedItems.join(', '));
    if (isTailwindInstalled === false) {
      console.log(`\n\x1b[33;1m! warning\x1b[0m - unable to require \x1b[36mtailwindcss/plugin\x1b[0m
DaisyUI color are now only available for DaisyUI components.
If you want to use DaisyUI color as utility classes (like 'bg-primary')
you need to add this to your \x1b[36mtailwind.config.js\x1b[0m file:
───────────────────────────────────────
\x1b[36mmodule.exports = {
  \x1b[32mtheme: {
    extend: {
      colors: require('daisyui/colors'),
    },
  },\x1b[0m
\x1b[36m}\x1b[0m
───────────────────────────────────────  
      `)
    }
    console.log()
    console.groupEnd()
  }
}

// check if tailwindcss package exists
let isTailwindInstalled = false;
try {
  require.resolve('tailwindcss/plugin')
  isTailwindInstalled = true
} catch (er) {
  isTailwindInstalled = false
}
if (isTailwindInstalled !== false) {
  module.exports = require("tailwindcss/plugin")(
    mainFunction, { theme: { extend: { colors } } }
  );
} else {
  module.exports = mainFunction;
}

