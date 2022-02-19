const colorNames = require("./colorNames");
const Color = require("color");

const generateForegorundColorFrom = function (input, percentage = 0.8) {
  if (Color(input).isDark()) {
    let arr = Color(input).mix(Color("white"), percentage).saturate(10).hsl().round().array()
    return arr[0] + " " + arr[1] + "%" + " " + arr[2] + "%";
  } else {
    let arr = Color(input).mix(Color("black"), percentage).saturate(10).hsl().round().array()
    return arr[0] + " " + arr[1] + "%" + " " + arr[2] + "%";
  }
}

const convertToHsl = function (input) {
  let resultObj = {};
  if (typeof input === "object" && input !== null) {
    Object.entries(input).forEach(([rule, value]) => {
      if (colorNames.hasOwnProperty(rule)) {
        const hslArray = Color(value).hsl().round().array();
        resultObj[colorNames[rule]] = hslArray[0] + " " + hslArray[1] + "%" + " " + hslArray[2] + "%";
      } else {
        resultObj[rule] = value;
      }

      // auto generate focus colors
      if (!input.hasOwnProperty("primary-focus")) {
        const darkerHslArray = Color(input["primary"]).darken(0.2).hsl().round().array();
        resultObj["--pf"] = darkerHslArray[0] + " " + darkerHslArray[1] + "%" + " " + darkerHslArray[2] + "%";
      }

      if (!input.hasOwnProperty("secondary-focus")) {
        const darkerHslArray = Color(input["secondary"]).darken(0.2).hsl().round().array();
        resultObj["--sf"] = darkerHslArray[0] + " " + darkerHslArray[1] + "%" + " " + darkerHslArray[2] + "%";
      }

      if (!input.hasOwnProperty("accent-focus")) {
        const darkerHslArray = Color(input["accent"]).darken(0.2).hsl().round().array();
        resultObj["--af"] = darkerHslArray[0] + " " + darkerHslArray[1] + "%" + " " + darkerHslArray[2] + "%";
      }

      if (!input.hasOwnProperty("neutral-focus")) {
        const darkerHslArray = Color(input["neutral"]).darken(0.2).hsl().round().array();
        resultObj["--nf"] = darkerHslArray[0] + " " + darkerHslArray[1] + "%" + " " + darkerHslArray[2] + "%";
      }

      // auto generate base colors
      if (!input.hasOwnProperty("base-100")) {
        resultObj["--b1"] = 0 + " " + 0 + "%" + " " + 100 + "%";
      }

      if (!input.hasOwnProperty("base-200")) {
        const darkerHslArray = Color(input["base-100"]).darken(0.1).hsl().round().array();
        resultObj["--b2"] = darkerHslArray[0] + " " + darkerHslArray[1] + "%" + " " + darkerHslArray[2] + "%";
      }

      if (!input.hasOwnProperty("base-300")) {
        if (input.hasOwnProperty("base-200")) {
          const darkerHslArray = Color(input["base-200"]).darken(0.1).hsl().round().array();
          resultObj["--b3"] = darkerHslArray[0] + " " + darkerHslArray[1] + "%" + " " + darkerHslArray[2] + "%";
        } else {
          const darkerHslArray = Color(input["base-100"]).darken(0.1).darken(0.1).hsl().round().array();
          resultObj["--b3"] = darkerHslArray[0] + " " + darkerHslArray[1] + "%" + " " + darkerHslArray[2] + "%";
        }
      }

      // auto generate state colors
      if (!input.hasOwnProperty("info")) {
        resultObj["--in"] = 204 + " " + 94 + "%" + " " + 94 + "%";
      }
      if (!input.hasOwnProperty("success")) {
        resultObj["--su"] = 141 + " " + 84 + "%" + " " + 93 + "%";
      }
      if (!input.hasOwnProperty("warning")) {
        resultObj["--wa"] = 48 + " " + 96 + "%" + " " + 89 + "%";
      }
      if (!input.hasOwnProperty("error")) {
        resultObj["--er"] = 0 + " " + 93 + "%" + " " + 94 + "%";
      }

      // auto generate content colors
      if (!input.hasOwnProperty("base-content")) {
        resultObj["--bc"] = generateForegorundColorFrom(input["base-100"])
      }
      if (!input.hasOwnProperty("primary-content")) {
        resultObj["--pc"] = generateForegorundColorFrom(input["primary"])
      }

      if (!input.hasOwnProperty("secondary-content")) {
        resultObj["--sc"] = generateForegorundColorFrom(input["secondary"])
      }

      if (!input.hasOwnProperty("accent-content")) {
        resultObj["--ac"] = generateForegorundColorFrom(input["accent"])
      }

      if (!input.hasOwnProperty("neutral-content")) {
        resultObj["--nc"] = generateForegorundColorFrom(input["neutral"])
      }

      if (!input.hasOwnProperty("info-content")) {
        if (input.hasOwnProperty("info")) {
          resultObj["--inc"] = generateForegorundColorFrom(input["info"])
        } else {
          resultObj["--inc"] = 221 + " " + 83 + "%" + " " + 53 + "%";
        }
      }

      if (!input.hasOwnProperty("success-content")) {
        if (input.hasOwnProperty("success")) {
          resultObj["--suc"] = generateForegorundColorFrom(input["success"])
        } else {
          resultObj["--suc"] = 142 + " " + 76 + "%" + " " + 36 + "%";
        }
      }

      if (!input.hasOwnProperty("warning-content")) {
        if (input.hasOwnProperty("warning")) {
          resultObj["--wac"] = generateForegorundColorFrom(input["warning"])
        } else {
          resultObj["--wac"] = 32 + " " + 95 + "%" + " " + 44 + "%";
        }
      }

      if (!input.hasOwnProperty("error-content")) {
        if (input.hasOwnProperty("error")) {
          resultObj["--erc"] = generateForegorundColorFrom(input["error"])
        } else {
          resultObj["--erc"] = 0 + " " + 72 + "%" + " " + 51 + "%";
        }
      }

      // auto generate css variables
      if (!input.hasOwnProperty("--rounded-box")) {
        resultObj["--rounded-box"] = "1rem";
      }
      if (!input.hasOwnProperty("--rounded-btn")) {
        resultObj["--rounded-btn"] = "0.5rem";
      }
      if (!input.hasOwnProperty("--rounded-badge")) {
        resultObj["--rounded-badge"] = "1.9rem";
      }
      if (!input.hasOwnProperty("--animation-btn")) {
        resultObj["--animation-btn"] = "0.25s";
      }
      if (!input.hasOwnProperty("--animation-input")) {
        resultObj["--animation-input"] = ".2s";
      }
      if (!input.hasOwnProperty("--btn-text-case")) {
        resultObj["--btn-text-case"] = "uppercase";
      }
      if (!input.hasOwnProperty("--btn-focus-scale")) {
        resultObj["--btn-focus-scale"] = "0.95";
      }
      if (!input.hasOwnProperty("--border-btn")) {
        resultObj["--border-btn"] = "1px";
      }
      if (!input.hasOwnProperty("--tab-border")) {
        resultObj["--tab-border"] = "1px";
      }
      if (!input.hasOwnProperty("--tab-radius")) {
        resultObj["--tab-radius"] = "0.5rem";
      }

    });
    return resultObj;
  }
  return input;
};

module.exports = {

  injectThemes: function (addBase, config, themes) {
    let includedThemesObj = new Object();

    // add light themes
    if (config("daisyui.themes") == false) {
      Object.entries(themes).forEach(([theme, index]) => {
        includedThemesObj[theme] = convertToHsl(themes[theme]);
      });
    }

    // add default themes
    if (config("daisyui.themes") != false) {
      Object.entries(themes).forEach(([theme, index]) => {
        includedThemesObj[theme] = convertToHsl(themes[theme]);
      });
    }

    // add custom themes
    if (Array.isArray(config("daisyui.themes"))) {
      config("daisyui.themes").forEach((item, index) => {
        if (typeof item === "object" && item !== null) {
          Object.entries(item).forEach(([customThemeName, customThemevalue]) => {
            includedThemesObj["[data-theme=" + customThemeName + "]"] =
              convertToHsl(customThemevalue);
          });
        }
      });
    }



    let themeOrder = [];
    if (Array.isArray(config("daisyui.themes"))) {
      config("daisyui.themes").forEach((theme, index) => {
        if (typeof theme === "object" && theme !== null) {
          Object.entries(theme).forEach(([customThemeName, customThemevalue]) => {
            themeOrder.push(customThemeName);
          });
        } else if (
          includedThemesObj.hasOwnProperty("[data-theme=" + theme + "]")
        ) {
          themeOrder.push(theme);
        }
      });
    } else if (config("daisyui.themes") != false) {
      themeOrder = [
        "light",
        "dark",
        "cupcake",
        "bumblebee",
        "emerald",
        "corporate",
        "synthwave",
        "retro",
        "cyberpunk",
        "valentine",
        "halloween",
        "garden",
        "forest",
        "aqua",
        "lofi",
        "pastel",
        "fantasy",
        "wireframe",
        "black",
        "luxury",
        "dracula",
        "cmyk",
        "autumn",
        "business",
        "acid",
        "lemonade",
      ];
    } else if (config("daisyui.themes") == false) {
      themeOrder.push("light");
    }

    // inject themes in order
    themeOrder.forEach((themeName, index) => {
      if (index === 0) {
        // first theme as root
        addBase({
          [":root"]: includedThemesObj["[data-theme=" + themeName + "]"],
        });
      } else if (index === 1) {
        // auto dark
        if (config("daisyui.darkTheme")) {
          if (
            themeOrder[0] != config("daisyui.darkTheme") &&
            themeOrder.includes(config("daisyui.darkTheme"))
          ) {
            addBase({
              ["@media (prefers-color-scheme: dark)"]: {
                [":root"]:
                  includedThemesObj[
                  `[data-theme=${config("daisyui.darkTheme")}]`
                  ],
              },
            });
          }
        } else {
          if (themeOrder[0] != "dark" && themeOrder.includes("dark")) {
            addBase({
              ["@media (prefers-color-scheme: dark)"]: {
                [":root"]: includedThemesObj["[data-theme=dark]"],
              },
            });
          }
        }
        // theme 0 with name
        addBase({
          ["[data-theme=" + themeOrder[0] + "]"]:
            includedThemesObj["[data-theme=" + themeOrder[0] + "]"],
        });
        // theme 1 with name
        addBase({
          ["[data-theme=" + themeOrder[1] + "]"]:
            includedThemesObj["[data-theme=" + themeOrder[1] + "]"],
        });
      } else {
        addBase({
          ["[data-theme=" + themeName + "]"]:
            includedThemesObj["[data-theme=" + themeName + "]"],
        });
      }
    });



    return {
      includedThemesObj: includedThemesObj,
      themeOrder: themeOrder,
    };
  }

}