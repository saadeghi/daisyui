export default {
  ".input": {
    "@apply bg-base-100 rounded-btn h-12 shrink appearance-none border border-transparent px-4 text-base text-sm leading-loose": {},
    "input": {
      "@apply border-none bg-transparent": {},
      "&:focus": {
        "@apply outline-none": {}
      }
    },
    "&:focus,\n\t&:focus-within": {
      "@apply border-base-content/20 outline-base-content/20 outline outline-2 outline-offset-2": {}
    },
    "&:has(> input[disabled]),\n\t&:is(:disabled, [disabled], .btn-disabled)": {
      "@apply border-base-200 bg-base-200 placeholder-base-content text-base-content/40 placeholder-base-content/20 cursor-not-allowed": {}
    },
    "&:has(> input[disabled]) > input[disabled]": {
      "@apply cursor-not-allowed": {}
    },
    "&::-webkit-date-and-time-value": {
      "textAlign": "inherit"
    },
    "&[type=\"number\"]": {
      "&::-webkit-inner-spin-button": {
        "@apply -my-4 -me-4": {}
      }
    },
    "&[list]": {
      "&::-webkit-calendar-picker-indicator": {
        "lineHeight": "1em"
      }
    },
    "&.input-bordered": {
      "@apply border-base-content/20": {},
      "boxShadow": "0 1px oklch(0% 0 0 / 0.1) inset,\n\t\t\t0 -1px oklch(100% 0 0 / 0.1) inset",
      "&:focus": {
        "boxShadow": "0 1px oklch(0% 0 0 / 0.1)"
      }
    },
    "&.input-ghost": {
      "@apply bg-base-100/5 shadow-none": {},
      "&:focus,\n\t\t&:focus-within": {
        "@apply text-base-content bg-base-100": {},
        "boxShadow": "none"
      }
    },
    "&.input-primary": {
      "@apply border-primary": {},
      "backgroundColor": "color-mix(in oklab, var(--color-primary) 2%, transparent)",
      "&:focus,\n\t\t&:focus-within": {
        "@apply outline-primary border-primary": {}
      }
    },
    "&.input-secondary": {
      "@apply border-secondary": {},
      "backgroundColor": "color-mix(\n\t\t\tin oklab,\n\t\t\tvar(--color-secondary) 2%,\n\t\t\ttransparent\n\t\t)",
      "&:focus,\n\t\t&:focus-within": {
        "@apply outline-secondary border-secondary": {}
      }
    },
    "&.input-accent": {
      "@apply border-accent": {},
      "backgroundColor": "color-mix(in oklab, var(--color-accent) 2%, transparent)",
      "&:focus,\n\t\t&:focus-within": {
        "@apply outline-accent border-accent": {}
      }
    },
    "&.input-info": {
      "@apply border-info": {},
      "backgroundColor": "color-mix(in oklab, var(--color-info) 2%, transparent)",
      "&:focus,\n\t\t&:focus-within": {
        "@apply outline-info border-info": {}
      }
    },
    "&.input-success": {
      "@apply border-success": {},
      "backgroundColor": "color-mix(in oklab, var(--color-success) 2%, transparent)",
      "&:focus,\n\t\t&:focus-within": {
        "@apply outline-success border-success": {}
      }
    },
    "&.input-warning": {
      "@apply border-warning": {},
      "backgroundColor": "color-mix(in oklab, var(--color-warning) 2%, transparent)",
      "&:focus,\n\t\t&:focus-within": {
        "@apply outline-warning border-warning": {}
      }
    },
    "&.input-error": {
      "@apply border-error": {},
      "backgroundColor": "color-mix(in oklab, var(--color-error) 2%, transparent)",
      "&:focus,\n\t\t&:focus-within": {
        "@apply outline-error border-error": {}
      }
    },
    "&.input-xs": {
      "@apply h-6 px-2 text-xs leading-relaxed": {},
      "&[type=\"number\"]": {
        "&::-webkit-inner-spin-button": {
          "@apply -my-1 -me-0": {}
        }
      }
    },
    "&.input-sm": {
      "@apply h-8 px-3 text-sm leading-8": {},
      "&[type=\"number\"]": {
        "&::-webkit-inner-spin-button": {
          "@apply my-0 -me-0": {}
        }
      }
    },
    "&.input-md": {
      "@apply h-12 px-4 text-sm leading-loose": {},
      "&[type=\"number\"]": {
        "&::-webkit-inner-spin-button": {
          "@apply -my-4 -me-4": {}
        }
      }
    },
    "&.input-lg": {
      "@apply h-16 px-6 text-lg leading-loose": {},
      "&[type=\"number\"]": {
        "&::-webkit-inner-spin-button": {
          "@apply -my-6 -me-6": {}
        }
      }
    }
  }
};