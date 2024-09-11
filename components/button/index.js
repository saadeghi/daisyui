export default {
  ".btn": {
    "@apply text-base-content outline-base-content inline-flex h-12 min-h-[3rem] shrink-0 cursor-pointer flex-wrap items-center justify-center gap-2 rounded-[--radius-btn] px-4 text-center text-sm/none font-semibold no-underline outline-offset-2 duration-200 ease-out select-none": {},
    "transitionProperty": "color, background-color, border-color, opacity,\n\t\tbox-shadow, transform",
    "backgroundColor": "var(--btn-color, var(--color-base-200))",
    "borderWidth": "var(--spacing-button-border)",
    "borderColor": "color-mix(\n\t\tin oklab,\n\t\tvar(--btn-color, var(--color-base-200)),\n\t\tblack 2%\n\t)",
    "borderBottomColor": "color-mix(\n\t\tin oklab,\n\t\tvar(--btn-color, var(--color-base-200)),\n\t\tblack 4%\n\t)",
    "boxShadow": "0 1px 0 0 oklch(100% 0 0/0.1) inset,\n\t\t0 1px 1px 0 oklch(0% 0 0/0.07)",
    "@media (hover: hover)": {
      "&:hover": {
        "borderColor": "color-mix(\n\t\t\t\tin oklab,\n\t\t\t\tvar(--btn-color, var(--color-base-200)),\n\t\t\t\tblack 5%\n\t\t\t)",
        "borderBottomColor": "color-mix(\n\t\t\t\tin oklab,\n\t\t\t\tvar(--btn-color, var(--color-base-200)),\n\t\t\t\tblack 7%\n\t\t\t)",
        "backgroundColor": "color-mix(\n\t\t\t\tin oklab,\n\t\t\t\tvar(--btn-color, var(--color-base-200)),\n\t\t\t\tblack 5%\n\t\t\t)"
      }
    },
    "&.btn-active": {
      "borderColor": "color-mix(\n\t\t\tin oklab,\n\t\t\tvar(--btn-color, var(--color-base-200)),\n\t\t\tblack 5%\n\t\t)",
      "borderBottomColor": "color-mix(\n\t\t\tin oklab,\n\t\t\tvar(--btn-color, var(--color-base-200)),\n\t\t\tblack 7%\n\t\t)",
      "backgroundColor": "color-mix(\n\t\t\tin oklab,\n\t\t\tvar(--btn-color, var(--color-base-200)),\n\t\t\tblack 5%\n\t\t)"
    },
    "&:focus-visible": {
      "@apply outline outline-2": {}
    },
    "&:active": {
      "&:focus": {
        "transform": "scale(var(--btn-focus-scale, 0.97))",
        "@apply animate-[button-pop_0s_ease-out]": {},
        "borderColor": "color-mix(\n\t\t\t\tin oklab,\n\t\t\t\tvar(--btn-color, var(--color-base-200)),\n\t\t\t\tblack 5%\n\t\t\t)",
        "borderBottomColor": "color-mix(\n\t\t\t\tin oklab,\n\t\t\t\tvar(--btn-color, var(--color-base-200)),\n\t\t\t\tblack 7%\n\t\t\t)",
        "boxShadow": "0 1px 0 0 oklch(0% 0 0/0.07) inset,\n\t\t\t\t0 0 0 0 oklch(0% 0 0/0.1)"
      },
      "@media (hover: hover)": {
        "&:hover": {
          "transform": "scale(var(--btn-focus-scale, 0.97))",
          "@apply animate-[button-pop_0s_ease-out]": {}
        }
      }
    },
    "&:is(:disabled, [disabled], .btn-disabled)": {
      "@apply bg-neutral/20 text-base-content/20 [@media(hover:hover)]:bg-neutral/20 [@media(hover:hover)]:text-base-content/20 pointer-events-none border-transparent [@media(hover:hover)]:pointer-events-none [@media(hover:hover)]:border-transparent": {}
    },
    "&:is(input[type=\"checkbox\"]),\n\t&:is(input[type=\"radio\"])": {
      "@apply w-auto appearance-none": {}
    }
  },
  ".btn-square": {
    "@apply size-12 p-0": {},
    "@apply p-0": {},
    "&:where(.btn-xs)": {
      "@apply size-6": {}
    },
    "&:where(.btn-sm)": {
      "@apply size-8": {}
    },
    "&:where(.btn-md)": {
      "@apply size-12": {}
    },
    "&:where(.btn-lg)": {
      "@apply size-16": {}
    }
  },
  ".btn-circle": {
    "@apply size-12 rounded-full p-0": {},
    "@apply rounded-full p-0": {},
    "&:where(.btn-xs)": {
      "@apply size-6": {}
    },
    "&:where(.btn-sm)": {
      "@apply size-8": {}
    },
    "&:where(.btn-md)": {
      "@apply size-12": {}
    },
    "&:where(.btn-lg)": {
      "@apply size-16": {}
    }
  },
  ".btn-primary": {
    "--btn-color": "var(--color-primary)",
    "@apply text-primary-content outline-primary": {}
  },
  ".btn-secondary": {
    "--btn-color": "var(--color-secondary)",
    "@apply text-secondary-content outline-secondary": {}
  },
  ".btn-accent": {
    "--btn-color": "var(--color-accent)",
    "@apply text-accent-content outline-accent": {}
  },
  ".btn-neutral": {
    "--btn-color": "var(--color-neutral)",
    "@apply text-neutral-content outline-neutral": {}
  },
  ".btn-info": {
    "--btn-color": "var(--color-info)",
    "@apply text-info-content outline-info": {}
  },
  ".btn-success": {
    "--btn-color": "var(--color-success)",
    "@apply text-success-content outline-success": {}
  },
  ".btn-warning": {
    "--btn-color": "var(--color-warning)",
    "@apply text-warning-content outline-warning": {}
  },
  ".btn-error": {
    "--btn-color": "var(--color-error)",
    "@apply text-error-content outline-error": {}
  },
  ".btn.glass": {
    "@apply shadow-none outline-current [&.btn-active]:[--glass-border-opacity:15%] [&.btn-active]:[--glass-opacity:25%] [@media(hover:hover)]:hover:[--glass-border-opacity:15%] [@media(hover:hover)]:hover:[--glass-opacity:25%]": {}
  },
  ".btn-ghost": {
    "@apply [@media(hover:hover)]:hover:bg-base-content/20 [&.btn-active]:bg-base-content/20 border border-transparent bg-transparent text-current shadow-none outline-current [&.btn-active]:border-transparent [@media(hover:hover)]:hover:border-transparent": {}
  },
  ".btn-link": {
    "@apply text-primary border-transparent bg-transparent underline shadow-none outline-current [&.btn-active]:border-transparent [&.btn-active]:bg-transparent [&.btn-active]:underline [@media(hover:hover)]:hover:border-transparent [@media(hover:hover)]:hover:bg-transparent [@media(hover:hover)]:hover:underline": {}
  },
  ".btn-outline": {
    "@apply bg-transparent text-[var(--btn-color)] shadow-none": {},
    "&.btn-active": {
      "@apply text-base-content": {},
      "borderColor": "color-mix(\n\t\t\tin oklab,\n\t\t\tvar(--btn-color, var(--color-base-200)) 90%,\n\t\t\tblack\n\t\t)",
      "backgroundColor": "color-mix(\n\t\t\tin oklab,\n\t\t\tvar(--btn-color, var(--color-base-200)) 90%,\n\t\t\tblack\n\t\t)"
    },
    "&.btn-primary": {
      "@apply [@media(hover:hover)]:hover:text-primary-content text-primary [&.btn-active]:text-primary-content": {}
    },
    "&.btn-secondary": {
      "@apply [@media(hover:hover)]:hover:text-secondary-content text-secondary [&.btn-active]:text-secondary-content": {}
    },
    "&.btn-accent": {
      "@apply [@media(hover:hover)]:hover:text-accent-content text-accent [&.btn-active]:text-accent-content": {}
    },
    "&.btn-neutral": {
      "@apply [@media(hover:hover)]:hover:text-neutral-content text-neutral [&.btn-active]:text-neutral-content": {}
    },
    "&.btn-success": {
      "@apply [@media(hover:hover)]:hover:text-success-content text-success [&.btn-active]:text-success-content": {}
    },
    "&.btn-info": {
      "@apply [@media(hover:hover)]:hover:text-info-content text-info [&.btn-active]:text-info-content": {}
    },
    "&.btn-warning": {
      "@apply [@media(hover:hover)]:hover:text-warning-content text-warning [&.btn-active]:text-warning-content": {}
    },
    "&.btn-error": {
      "@apply [@media(hover:hover)]:hover:text-error-content text-error [&.btn-active]:text-error-content": {}
    }
  },
  ".btn:is(input[type=\"checkbox\"]):after,\n.btn:is(input[type=\"radio\"]):after": {
    "@apply content-[attr(aria-label)]": {}
  },
  ".btn:is(input[type=\"checkbox\"]:checked),\n.btn:is(input[type=\"radio\"]:checked)": {
    "@apply border-primary bg-primary text-primary-content": {},
    "@media (hover: hover)": {
      "&:hover": {
        "backgroundColor": "color-mix(in oklab, var(--color-primary) 90%, black)",
        "borderColor": "color-mix(in oklab, var(--color-primary) 90%, black)"
      }
    },
    "&:focus-visible": {
      "@apply outline-primary": {}
    }
  },
  "@keyframes button-pop": {
    "0%": {
      "transform": "scale(var(--btn-focus-scale, 0.98))"
    },
    "40%": {
      "transform": "scale(1.02)"
    },
    "100%": {
      "transform": "scale(1)"
    }
  },
  ".btn-xs": {
    "@apply h-6 min-h-[1.5rem] px-2": {},
    "fontSize": "0.75rem"
  },
  ".btn-sm": {
    "@apply h-8 min-h-[2rem] px-3": {},
    "fontSize": "0.875rem"
  },
  ".btn-md": {
    "@apply h-12 min-h-[3rem] px-4": {},
    "fontSize": "0.875rem"
  },
  ".btn-lg": {
    "@apply h-16 min-h-[4rem] px-6": {},
    "fontSize": "1.125rem"
  },
  ".btn-wide": {
    "@apply w-64": {}
  },
  ".btn-block": {
    "@apply w-full": {}
  }
};