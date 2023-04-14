const tailwindColors = require('tailwindcss/colors')

const postcssJs = require("postcss-js")
const postcssPrefix = require('./lib/addPrefix')

const daisyuiInfo = require("../package.json");
const colors = require("./colors/index");
const utilities = require("../dist/utilities");
const base = require("../dist/base");
const unstyled = require("../dist/unstyled");
const unstyledRtl = require("../dist/unstyled.rtl");
const styled = require("../dist/styled");
const styledRtl = require("../dist/styled.rtl");
const utilitiesUnstyled = require("../dist/utilities-unstyled");
const utilitiesStyled = require("../dist/utilities-styled");
const themes = require("./colors/themes");
const colorFunctions = require("./colors/functions");

const mainFunction = ({ addBase, addComponents, addUtilities, config, postcss }) => {
  let daisyuiIncludedItems = [];
  let logs = false;
  if (config("daisyui.logs") != false) {
    logs = true;
  }
  if (logs) {
    console.log();
    console.log(
      "\x1b[35m%s\x1b[0m",
      "🌼 daisyUI components " + daisyuiInfo.version,
      "\x1b[0m",
      daisyuiInfo.homepage
    );
    console.group();
  }

  // inject @base style
  if (config("daisyui.base") != false) {
    addBase(base);
    daisyuiIncludedItems.push("base");
  }

  // inject components
  // because rollupjs doesn't supprt dynamic require
  let file = styled;
  if (config("daisyui.styled") == false && config("daisyui.rtl") != true) {
    daisyuiIncludedItems.push("unstyled components");
    file = unstyled;
  } else if (
    config("daisyui.styled") == false &&
    config("daisyui.rtl") == true
  ) {
    daisyuiIncludedItems.push("unstyled components");
    console.log("\x1b[36m%s\x1b[0m", " Direction:", "\x1b[0m", "RTL");
    file = unstyledRtl;
  } else if (
    config("daisyui.styled") != false &&
    config("daisyui.rtl") != true
  ) {
    daisyuiIncludedItems.push("components");
    file = styled;
  } else if (
    config("daisyui.styled") !== false &&
    config("daisyui.rtl") == true
  ) {
    daisyuiIncludedItems.push("components");
    console.log("\x1b[36m%s\x1b[0m", " Direction:", "\x1b[0m", "RTL");
    file = styledRtl;
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
  const shouldApplyPrefix = prefix && postcssJsProcess;
  if (shouldApplyPrefix) {
    file = postcssJsProcess(file)
  }

  addComponents(file);

  const themeInjector = colorFunctions.injectThemes(addBase, config, themes)
  themeInjector;

  daisyuiIncludedItems.push(themeInjector.themeOrder.length + " themes");

  // inject @utilities style needed by components
  if (config("daisyui.utils") != false) {
    addComponents(utilities, { variants: ["responsive"] });

    let toAdd = utilitiesUnstyled // shadow clone here to avoid mutate the original
    if (shouldApplyPrefix) {
      toAdd = postcssJsProcess(toAdd);
    }
    addComponents(toAdd, { variants: ["responsive"] });

    toAdd = utilitiesStyled
    if (shouldApplyPrefix) {
      toAdd = postcssJsProcess(toAdd);
    }
    addComponents(toAdd, { variants: ["responsive"] });
    daisyuiIncludedItems.push("utilities");
  }
  if (logs) {
    console.log(
      "\x1b[32m%s\x1b[0m",
      "✔︎ Including:",
      "\x1b[0m",
      "" + daisyuiIncludedItems.join(", ")
    );
    console.log(
      "\x1b[32m%s\x1b[0m",
      "❤︎ Support daisyUI: ", daisyuiInfo.funding.url,
      "\x1b[0m",
    );
    console.log();
    console.groupEnd();
  }
};

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
      }
    }
  },
});
