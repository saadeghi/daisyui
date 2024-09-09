export default {
  ".btn": {
    "@apply rounded-[--radius-btn] inline-flex h-12 min-h-[3rem] shrink-0 cursor-pointer select-none flex-wrap items-center justify-center px-4 text-center gap-2 font-semibold duration-200 ease-out [border-width:var(--spacing-button-border)] text-base-content outline-base-content no-underline bg-[var(--btn-color,var(--color-base-200))] border-[var(--btn-color,var(--color-base-200))] outline-offset-2 text-sm/none [transition-property:color,background-color,border-color,opacity,box-shadow,transform] shadow-sm": {},
    "borderColor": "color-mix(in oklab, var(--btn-color,var(--color-base-200)), white 3%)",
    "borderTopColor": "color-mix(in oklab, var(--btn-color,var(--color-base-200)), white 6%)",
    "borderBottomColor": "color-mix(in oklab, var(--btn-color,var(--color-base-200)), black 3%)",
    "@media (hover:hover)": {
      "&:hover": {
        "@apply bg-[color-mix(in_oklab,var(--btn-color,var(--color-base-200))_90%,black)] border-[color-mix(in_oklab,var(--btn-color,var(--color-base-200))_90%,black)]": {}
      }
    },
    "&:focus-visible": {
      "@apply outline outline-2": {}
    },
    "&:active": {
      "&:focus": {
        "@apply [transform:scale(var(--btn-focus-scale,0.97))] animate-[button-pop_0s_ease-out]": {}
      },
      "&:hover": {
        "@apply animate-[button-pop_0s_ease-out] [transform:scale(var(--btn-focus-scale,0.97))]": {}
      }
    },
    "&:is(:disabled, [disabled], .btn-disabled)": {
      "@apply pointer-events-none bg-neutral/20 text-base-content/20 border-transparent [@media(hover:hover)]:pointer-events-none [@media(hover:hover)]:bg-neutral/20 [@media(hover:hover)]:text-base-content/20 [@media(hover:hover)]:border-transparent": {}
    },
    "&:is(input[type=\"checkbox\"]),\n    &:is(input[type=\"radio\"])": {
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
    "@apply [--btn-color:var(--color-primary)] text-primary-content outline-primary": {}
  },
  ".btn-secondary": {
    "@apply [--btn-color:var(--color-secondary)] text-secondary-content outline-secondary": {}
  },
  ".btn-accent": {
    "@apply [--btn-color:var(--color-accent)] text-accent-content outline-accent": {}
  },
  ".btn-neutral": {
    "@apply [--btn-color:var(--color-neutral)] text-neutral-content outline-neutral": {}
  },
  ".btn-info": {
    "@apply [--btn-color:var(--color-info)] text-info-content outline-info": {}
  },
  ".btn-success": {
    "@apply [--btn-color:var(--color-success)] text-success-content outline-success": {}
  },
  ".btn-warning": {
    "@apply [--btn-color:var(--color-warning)] text-warning-content outline-warning": {}
  },
  ".btn-error": {
    "@apply [--btn-color:var(--color-error)] text-error-content outline-error": {}
  },
  ".btn.glass": {
    "@apply shadow-none outline-current [@media(hover:hover)]:hover:[--glass-opacity:25%] [@media(hover:hover)]:hover:[--glass-border-opacity:15%] [&.btn-active]:[--glass-opacity:25%] [&.btn-active]:[--glass-border-opacity:15%]": {}
  },
  ".btn-ghost": {
    "@apply border border-transparent bg-transparent text-current shadow-none outline-current [@media(hover:hover)]:hover:bg-base-content/20 [@media(hover:hover)]:hover:border-transparent [&.btn-active]:bg-base-content/20 [&.btn-active]:border-transparent": {}
  },
  ".btn-link": {
    "@apply text-primary border-transparent bg-transparent underline shadow-none outline-current [@media(hover:hover)]:hover:border-transparent [@media(hover:hover)]:hover:bg-transparent [@media(hover:hover)]:hover:underline [&.btn-active]:border-transparent [&.btn-active]:bg-transparent [&.btn-active]:underline": {}
  },
  ".btn-outline": {
    "@apply text-[var(--btn-color)] bg-transparent shadow-none [&.btn-active]:text-base-content [&.btn-active]:bg-[color-mix(in_oklab,var(--btn-color,var(--color-base-200))_90%,black)] [&.btn-active]:border-[color-mix(in_oklab,var(--btn-color,var(--color-base-200))_90%,black)]": {},
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