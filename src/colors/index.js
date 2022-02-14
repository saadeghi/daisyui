function withOpacityValue(variable, fallbackColor) {
  return ({ opacityValue }) => {
    let fallbackColorValue = "";
    if (fallbackColor) {
      fallbackColorValue = `, var(${fallbackColor})`;
    }
    if (opacityValue === undefined) {
      return `hsl(var(${variable}${fallbackColorValue}))`;
    }
    return `hsl(var(${variable}${fallbackColorValue}) / ${opacityValue})`;
  };
}

let colorObject = {
  transparent: "transparent",
  current: "currentColor",

  primary: withOpacityValue("--p"),
  "primary-focus": withOpacityValue("--pf", "--p"),
  "primary-content": withOpacityValue("--pc"),

  secondary: withOpacityValue("--s"),
  "secondary-focus": withOpacityValue("--sf", "--s"),
  "secondary-content": withOpacityValue("--sc"),

  accent: withOpacityValue("--a"),
  "accent-focus": withOpacityValue("--af", "--a"),
  "accent-content": withOpacityValue("--ac"),

  neutral: withOpacityValue("--n"),
  "neutral-focus": withOpacityValue("--nf", "--n"),
  "neutral-content": withOpacityValue("--nc"),

  "base-100": withOpacityValue("--b1"),
  "base-200": withOpacityValue("--b2", "--b1"),
  "base-300": withOpacityValue("--b3", "--b2"),
  "base-content": withOpacityValue("--bc"),

  info: withOpacityValue("--in"),
  "info-content": withOpacityValue("--inc", "--nc"),

  success: withOpacityValue("--su"),
  "success-content": withOpacityValue("--suc", "--nc"),

  warning: withOpacityValue("--wa"),
  "warning-content": withOpacityValue("--wac", "--nc"),

  error: withOpacityValue("--er"),
  "error-content": withOpacityValue("--erc", "--nc"),
};

module.exports = colorObject;
