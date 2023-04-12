const Color = require("color");
const colorNames = require("./colorNames");

module.exports = {

  generateForegroundColorFrom: function (input, percentage = 0.8) {
    const arr = Color(input).isDark()
      ? Color(input).mix(Color("white"), percentage).saturate(10).hsl().array()
      : Color(input).mix(Color("black"), percentage).saturate(10).hsl().array();

    return (
      arr[0].toPrecision(5).replace(/\.?0+$/, "") +
      " " +
      arr[1].toPrecision(5).replace(/\.?0+$/, "") +
      "%" +
      " " +
      arr[2].toPrecision(5).replace(/\.?0+$/, "") +
      "%"
    );
  },

  convertToHsl: function (input) {
    let resultObj = {};
    if (typeof input === "object" && input !== null) {
      Object.entries(input).forEach(([rule, value]) => {
        if (colorNames.hasOwnProperty(rule)) {
          const hslArray = Color(value).hsl().array();
          resultObj[colorNames[rule]] = hslArray[0].toPrecision(5).replace(/\.?0+$/,"") + " " + hslArray[1].toPrecision(5).replace(/\.?0+$/,"") + "%" + " " + hslArray[2].toPrecision(5).replace(/\.?0+$/,"") + "%";
        } else {
          resultObj[rule] = value;
        }

        // auto generate focus colors
        if (!input.hasOwnProperty("primary-focus")) {
          const darkerHslArray = Color(input["primary"]).darken(0.2).hsl().array();
          resultObj["--pf"] = darkerHslArray[0].toPrecision(5).replace(/\.?0+$/,"") + " " + darkerHslArray[1].toPrecision(5).replace(/\.?0+$/,"") + "%" + " " + darkerHslArray[2].toPrecision(5).replace(/\.?0+$/,"") + "%";
        }

        if (!input.hasOwnProperty("secondary-focus")) {
          const darkerHslArray = Color(input["secondary"]).darken(0.2).hsl().array();
          resultObj["--sf"] = darkerHslArray[0].toPrecision(5).replace(/\.?0+$/,"") + " " + darkerHslArray[1].toPrecision(5).replace(/\.?0+$/,"") + "%" + " " + darkerHslArray[2].toPrecision(5).replace(/\.?0+$/,"") + "%";
        }

        if (!input.hasOwnProperty("accent-focus")) {
          const darkerHslArray = Color(input["accent"]).darken(0.2).hsl().array();
          resultObj["--af"] = darkerHslArray[0].toPrecision(5).replace(/\.?0+$/,"") + " " + darkerHslArray[1].toPrecision(5).replace(/\.?0+$/,"") + "%" + " " + darkerHslArray[2].toPrecision(5).replace(/\.?0+$/,"") + "%";
        }

        if (!input.hasOwnProperty("neutral-focus")) {
          const darkerHslArray = Color(input["neutral"]).darken(0.2).hsl().array();
          resultObj["--nf"] = darkerHslArray[0].toPrecision(5).replace(/\.?0+$/,"") + " " + darkerHslArray[1].toPrecision(5).replace(/\.?0+$/,"") + "%" + " " + darkerHslArray[2].toPrecision(5).replace(/\.?0+$/,"") + "%";
        }

        // auto generate base colors
        if (!input.hasOwnProperty("base-100")) {
          resultObj["--b1"] = 0 + " " + 0 + "%" + " " + 100 + "%";
        }

        if (!input.hasOwnProperty("base-200")) {
          const darkerHslArray = Color(input["base-100"]).darken(0.1).hsl().array();
          resultObj["--b2"] = darkerHslArray[0].toPrecision(5).replace(/\.?0+$/,"") + " " + darkerHslArray[1].toPrecision(5).replace(/\.?0+$/,"") + "%" + " " + darkerHslArray[2].toPrecision(5).replace(/\.?0+$/,"") + "%";
        }

        if (!input.hasOwnProperty("base-300")) {
          if (input.hasOwnProperty("base-200")) {
            const darkerHslArray = Color(input["base-200"]).darken(0.1).hsl().array();
            resultObj["--b3"] = darkerHslArray[0].toPrecision(5).replace(/\.?0+$/,"") + " " + darkerHslArray[1].toPrecision(5).replace(/\.?0+$/,"") + "%" + " " + darkerHslArray[2].toPrecision(5).replace(/\.?0+$/,"") + "%";
          } else {
            const darkerHslArray = Color(input["base-100"]).darken(0.1).darken(0.1).hsl().array();
            resultObj["--b3"] = darkerHslArray[0].toPrecision(5).replace(/\.?0+$/,"") + " " + darkerHslArray[1].toPrecision(5).replace(/\.?0+$/,"") + "%" + " " + darkerHslArray[2].toPrecision(5).replace(/\.?0+$/,"") + "%";
          }
        }

        // auto generate state colors
        if (!input.hasOwnProperty("info")) {
          resultObj["--in"] = 198 + " " + 93 + "%" + " " + 60 + "%";
        }
        if (!input.hasOwnProperty("success")) {
          resultObj["--su"] = 158 + " " + 64 + "%" + " " + 52 + "%";
        }
        if (!input.hasOwnProperty("warning")) {
          resultObj["--wa"] = 43 + " " + 96 + "%" + " " + 56 + "%";
        }
        if (!input.hasOwnProperty("error")) {
          resultObj["--er"] = 0 + " " + 91 + "%" + " " + 71 + "%";
        }

        // auto generate content colors
        if (!input.hasOwnProperty("base-content")) {
          resultObj["--bc"] = this.generateForegroundColorFrom(input["base-100"])
        }
        if (!input.hasOwnProperty("primary-content")) {
          resultObj["--pc"] = this.generateForegroundColorFrom(input["primary"])
        }

        if (!input.hasOwnProperty("secondary-content")) {
          resultObj["--sc"] = this.generateForegroundColorFrom(input["secondary"])
        }

        if (!input.hasOwnProperty("accent-content")) {
          resultObj["--ac"] = this.generateForegroundColorFrom(input["accent"])
        }

        if (!input.hasOwnProperty("neutral-content")) {
          resultObj["--nc"] = this.generateForegroundColorFrom(input["neutral"])
        }

        if (!input.hasOwnProperty("info-content")) {
          if (input.hasOwnProperty("info")) {
            resultObj["--inc"] = this.generateForegroundColorFrom(input["info"])
          } else {
            resultObj["--inc"] = 198 + " " + 100 + "%" + " " + 12 + "%";
          }
        }

        if (!input.hasOwnProperty("success-content")) {
          if (input.hasOwnProperty("success")) {
            resultObj["--suc"] = this.generateForegroundColorFrom(input["success"])
          } else {
            resultObj["--suc"] = 158 + " " + 100 + "%" + " " + 10 + "%";
          }
        }

        if (!input.hasOwnProperty("warning-content")) {
          if (input.hasOwnProperty("warning")) {
            resultObj["--wac"] = this.generateForegroundColorFrom(input["warning"])
          } else {
            resultObj["--wac"] = 43 + " " + 100 + "%" + " " + 11 + "%";
          }
        }

        if (!input.hasOwnProperty("error-content")) {
          if (input.hasOwnProperty("error")) {
            resultObj["--erc"] = this.generateForegroundColorFrom(input["error"])
          } else {
            resultObj["--erc"] = 0 + " " + 100 + "%" + " " + 14 + "%";
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
  },

  injectThemes: function (addBase, config, themes) {
    let includedThemesObj = new Object();

    // add light themes
    if (config("daisyui.themes") == false) {
      Object.entries(themes).forEach(([theme, index]) => {
        includedThemesObj[theme] = this.convertToHsl(themes[theme]);
      });
    }

    // add default themes
    if (config("daisyui.themes") != false) {
      Object.entries(themes).forEach(([theme, index]) => {
        includedThemesObj[theme] = this.convertToHsl(themes[theme]);
      });
    }

    // add custom themes
    if (Array.isArray(config("daisyui.themes"))) {
      config("daisyui.themes").forEach((item, index) => {
        if (typeof item === "object" && item !== null) {
          Object.entries(item).forEach(([customThemeName, customThemevalue]) => {
            includedThemesObj["[data-theme=" + customThemeName + "]"] =
              this.convertToHsl(customThemevalue);
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
        "night",
        "coffee",
        "winter",
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
        }
        else if (config("daisyui.darkTheme") === false ) {
          // disables prefers-color-scheme: dark
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
