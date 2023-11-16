const colorObject = {
  "transparent": "transparent",
  "current": "currentColor",

  "primary": "var(--fallback-p,oklch(var(--p)/<alpha-value>))",
  "primary-content": "var(--fallback-pc,oklch(var(--pc)/<alpha-value>))",

  "secondary": "var(--fallback-s,oklch(var(--s)/<alpha-value>))",
  "secondary-content": "var(--fallback-sc,oklch(var(--sc)/<alpha-value>))",

  "accent": "var(--fallback-a,oklch(var(--a)/<alpha-value>))",
  "accent-content": "var(--fallback-ac,oklch(var(--ac)/<alpha-value>))",

  "neutral": "var(--fallback-n,oklch(var(--n)/<alpha-value>))",
  "neutral-content": "var(--fallback-nc,oklch(var(--nc)/<alpha-value>))",

  "base-100": "var(--fallback-b1,oklch(var(--b1)/<alpha-value>))",
  "base-200": "var(--fallback-b2,oklch(var(--b2)/<alpha-value>))",
  "base-300": "var(--fallback-b3,oklch(var(--b3)/<alpha-value>))",
  "base-content": "var(--fallback-bc,oklch(var(--bc)/<alpha-value>))",

  "info": "var(--fallback-in,oklch(var(--in)/<alpha-value>))",
  "info-content": "var(--fallback-inc,oklch(var(--inc)/<alpha-value>))",

  "success": "var(--fallback-su,oklch(var(--su)/<alpha-value>))",
  "success-content": "var(--fallback-suc,oklch(var(--suc)/<alpha-value>))",

  "warning": "var(--fallback-wa,oklch(var(--wa)/<alpha-value>))",
  "warning-content": "var(--fallback-wac,oklch(var(--wac)/<alpha-value>))",

  "error": "var(--fallback-er,oklch(var(--er)/<alpha-value>))",
  "error-content": "var(--fallback-erc,oklch(var(--erc)/<alpha-value>))",
}

module.exports = colorObject
