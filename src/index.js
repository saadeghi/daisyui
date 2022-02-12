const daisyuiInfo = require('./package.json')
const colors = require('./colors/index')
const utilities = require('./dist/utilities')
const base = require('./dist/base')
const unstyled = require('./dist/unstyled')
const unstyledRtl = require('./dist/unstyled.rtl')
const styled = require('./dist/styled')
const styledRtl = require('./dist/styled.rtl')
const utilitiesUnstyled = require('./dist/utilities-unstyled')
const utilitiesStyled = require('./dist/utilities-styled')
const themes = require('./colors/themes')
const colorNames = require('./colors/colorNames')
const Color = require('color');

const mainFunction = ({ addBase, addComponents, addUtilities, config }) => {
  let diasyuiIncludedItems = []
  let logs = false
  if (config('daisyui.logs') != false) {
    logs = true
  }
  if (logs) {
    console.log()
    console.log('\x1b[35m%s\x1b[0m', '🌼 daisyUI components ' + daisyuiInfo.version, '\x1b[0m', daisyuiInfo.homepage)
    console.group()
  }

  // inject @base style 
  if (config('daisyui.base') != false) {
    addBase(base)
    diasyuiIncludedItems.push('base')
  }

  // inject components
  // because rollupjs doesn't supprt dynamic require
  let file = styled
  if (config('daisyui.styled') == false && config('daisyui.rtl') != true) {
    diasyuiIncludedItems.push('unstyled components')
    file = unstyled
  } else if (config('daisyui.styled') == false && config('daisyui.rtl') == true) {
    diasyuiIncludedItems.push('unstyled components')
    console.log('\x1b[36m%s\x1b[0m', ' Direction:', '\x1b[0m', 'RTL');
    file = unstyledRtl
  } else if (config('daisyui.styled') != false && config('daisyui.rtl') != true) {
    diasyuiIncludedItems.push('components')
    file = styled
  } else if (config('daisyui.styled') !== false && config('daisyui.rtl') == true) {
    diasyuiIncludedItems.push('components')
    console.log('\x1b[36m%s\x1b[0m', ' Direction:', '\x1b[0m', 'RTL');
    file = styledRtl
  }
  addComponents(file)

  let includedThemesObj = new Object()

  function convertThemeColorsToHsl(input) {
    let resultObj = {}
    if (typeof input === 'object' && input !== null) {
      Object.entries(input).forEach(([rule, value]) => {
        if (colorNames.hasOwnProperty(rule)) {
          const hslArray = Color(value).hsl().round().array()
          resultObj[colorNames[rule]] = hslArray[0] + " " + hslArray[1] + "%" + " " + hslArray[2] + "%"
        } else {
          resultObj[rule] = value
          // console.log(input)
        }
      })
      return resultObj
    }
    return input
  }

  // add light themes
  if (config('daisyui.themes') == false) {
    Object.entries(themes).forEach(([theme, index]) => {
      includedThemesObj[theme] = convertThemeColorsToHsl(themes[theme])
    });
  }

  // add default themes
  if (config('daisyui.themes') != false) {
    Object.entries(themes).forEach(([theme, index]) => {
      includedThemesObj[theme] = convertThemeColorsToHsl(themes[theme])
    });
  }

  // add custom themes
  if (Array.isArray(config('daisyui.themes'))) {
    config('daisyui.themes').forEach((item, index) => {
      if (typeof item === 'object' && item !== null) {
        Object.entries(item).forEach(([customThemeName, customThemevalue]) => {
          includedThemesObj['[data-theme=' + customThemeName + ']'] = convertThemeColorsToHsl(customThemevalue)
        })
      }
    })
  }

  let themeOrder = []
  if (Array.isArray(config('daisyui.themes'))) {
    config('daisyui.themes').forEach((theme, index) => {
      if (typeof theme === 'object' && theme !== null) {
        Object.entries(theme).forEach(([customThemeName, customThemevalue]) => {
          themeOrder.push(customThemeName)
        })
      } else if (includedThemesObj.hasOwnProperty('[data-theme=' + theme + ']')) {
        themeOrder.push(theme)
      }
    })
  } else if (config('daisyui.themes') != false) {
    themeOrder = ['light', 'dark', 'cupcake', 'bumblebee', 'emerald', 'corporate', 'synthwave', 'retro', 'cyberpunk', 'valentine', 'halloween', 'garden', 'forest', 'aqua', 'lofi', 'pastel', 'fantasy', 'wireframe', 'black', 'luxury', 'dracula', 'cmyk',]
  } else if (config('daisyui.themes') == false) {
    themeOrder.push('light')
  }

  // inject themes in order
  themeOrder.forEach((themeName, index) => {
    if (index === 0) { // first theme as root
      addBase({ [':root']: includedThemesObj['[data-theme=' + themeName + ']'] })
    } else if (index === 1) {
      // auto dark
      if (config('daisyui.darkTheme')) {
        if (themeOrder[0] != config('daisyui.darkTheme') && themeOrder.includes(config('daisyui.darkTheme'))) {
          addBase({ ['@media (prefers-color-scheme: dark)']: { [':root']: includedThemesObj[`[data-theme=${config('daisyui.darkTheme')}]`] } })
        }
      } else {
        if (themeOrder[0] != 'dark' && themeOrder.includes('dark')) {
          addBase({ ['@media (prefers-color-scheme: dark)']: { [':root']: includedThemesObj['[data-theme=dark]'] } })
        }
      }
      // theme 0 with name
      addBase({ ['[data-theme=' + themeOrder[0] + ']']: includedThemesObj['[data-theme=' + themeOrder[0] + ']'] })
      // theme 1 with name
      addBase({ ['[data-theme=' + themeOrder[1] + ']']: includedThemesObj['[data-theme=' + themeOrder[1] + ']'] })
    } else {
      addBase({ ['[data-theme=' + themeName + ']']: includedThemesObj['[data-theme=' + themeName + ']'] })
    }
  })
  diasyuiIncludedItems.push('themes[' + themeOrder.length + ']')


  // inject @utilities style needed by components
  if (config('daisyui.utils') != false) {
    addComponents(utilities, { variants: ['responsive'] })
    addComponents(utilitiesUnstyled, { variants: ['responsive'] })
    addComponents(utilitiesStyled, { variants: ['responsive'] })
    diasyuiIncludedItems.push('utilities')
  }
  if (logs) {
    console.log('\x1b[32m%s\x1b[0m', '✔︎ Including:', '\x1b[0m', '' + diasyuiIncludedItems.join(', '));
    console.log()
    console.groupEnd()
  }
}


module.exports = require("tailwindcss/plugin")(
  mainFunction, { theme: { extend: { colors } } }
);


