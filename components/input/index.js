export default {
  ".input": {
    "@apply shrink appearance-none h-12 px-4 text-sm leading-loose bg-base-100 rounded-btn border border-transparent text-base": {},
    "input": {
      "@apply bg-transparent border-none": {},
      "&:focus": {
        "@apply outline-none": {}
      }
    },
    "&:focus": {
      "@apply border-base-content/20 outline-base-content/10 outline outline-4": {}
    },
    "&:has(> input[disabled]),\n    &:is(:disabled, [disabled], .btn-disabled)": {
      "@apply border-base-200 bg-base-200 placeholder-base-content text-base-content/40 cursor-not-allowed placeholder-base-content/20": {}
    },
    "&:has(> input[disabled])>input[disabled]": {
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
      "boxShadow": "0 1px oklch(0% 0 0 / 0.1) inset, 0 -1px oklch(100% 0 0 / 0.1) inset",
      "&:focus": {
        "boxShadow": "0 1px oklch(0% 0 0 / 0.1)"
      }
    },
    "&.input-ghost": {
      "@apply bg-base-100/5 shadow-none": {},
      "&:focus,\n        &:focus-within": {
        "@apply text-base-content bg-base-100": {},
        "boxShadow": "none"
      }
    },
    "&.input-primary": {
      "@apply border-primary": {},
      "backgroundColor": "color-mix(in oklab, var(--color-primary) 2%, transparent)",
      "&:focus,\n        &:focus-within": {
        "@apply outline-primary/30 border-primary": {}
      }
    },
    "&.input-secondary": {
      "@apply border-secondary": {},
      "backgroundColor": "color-mix(in oklab, var(--color-secondary) 2%, transparent)",
      "&:focus,\n        &:focus-within": {
        "@apply outline-secondary/30 border-secondary": {}
      }
    },
    "&.input-accent": {
      "@apply border-accent": {},
      "backgroundColor": "color-mix(in oklab, var(--color-accent) 2%, transparent)",
      "&:focus,\n        &:focus-within": {
        "@apply outline-accent/30 border-accent": {}
      }
    },
    "&.input-info": {
      "@apply border-info": {},
      "backgroundColor": "color-mix(in oklab, var(--color-info) 2%, transparent)",
      "&:focus,\n        &:focus-within": {
        "@apply outline-info/30 border-info": {}
      }
    },
    "&.input-success": {
      "@apply border-success": {},
      "backgroundColor": "color-mix(in oklab, var(--color-success) 2%, transparent)",
      "&:focus,\n        &:focus-within": {
        "@apply outline-success/30 border-success": {}
      }
    },
    "&.input-warning": {
      "@apply border-warning": {},
      "backgroundColor": "color-mix(in oklab, var(--color-warning) 2%, transparent)",
      "&:focus,\n        &:focus-within": {
        "@apply outline-warning/30 border-warning": {}
      }
    },
    "&.input-error": {
      "@apply border-error": {},
      "backgroundColor": "color-mix(in oklab, var(--color-error) 2%, transparent)",
      "&:focus,\n        &:focus-within": {
        "@apply outline-error/30 border-error": {}
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