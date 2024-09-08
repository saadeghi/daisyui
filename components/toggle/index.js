export default {
  ".toggle": {
    "@apply h-6 w-12 inline-flex cursor-pointer rounded-[--radius-badge] rounded-badge border-current appearance-none border shrink-0 text-base-content/50 p-[.1875rem]": {},
    "boxShadow": "0 1px oklch(0% 0 0 / 0.1) inset",
    "&:before": {
      "@apply block h-full grow-0": {},
      "content": "\"\"",
      "transition": "flex-grow 0.2s"
    },
    "&:after": {
      "@apply [border-radius:calc(var(--radius-badge)-3px)] aspect-square h-full block bg-current relative translate-x-0 start-0": {},
      "content": "\"\"",
      "transition": "background-color 0.1s, translate 0.2s, inset-inline-start 0.2s",
      "boxShadow": "0 -1px oklch(0% 0 0 / 0.1) inset,\n      0 8px 0 -4px oklch(100% 0 0 / 0.1) inset, 0 1px oklch(0% 0 0 / 0.1)"
    },
    "&:focus-visible": {
      "@apply outline outline-2 outline-offset-2 outline-current": {}
    },
    "&:checked,\n  &[aria-checked=\"true\"]": {
      "@apply bg-base-100 text-base-content": {},
      "&:before": {
        "@apply grow": {}
      },
      "&:after": {
        "@apply bg-current": {},
        "@starting-style": {
          "opacity": 0
        }
      }
    },
    "&:indeterminate": {
      "&:before": {
        "@apply grow-0": {}
      },
      "&:after": {
        "@apply -translate-x-1/2 start-1/2": {}
      }
    },
    "&:disabled": {
      "@apply cursor-not-allowed opacity-30": {},
      "&:after": {
        "@apply border border-current bg-transparent": {}
      }
    }
  },
  ".toggle-primary": {
    "&:checked,\n  &[aria-checked=\"true\"]": {
      "@apply text-primary": {}
    }
  },
  ".toggle-secondary": {
    "&:checked,\n  &[aria-checked=\"true\"]": {
      "@apply text-secondary": {}
    }
  },
  ".toggle-accent": {
    "&:checked,\n  &[aria-checked=\"true\"]": {
      "@apply text-accent": {}
    }
  },
  ".toggle-success": {
    "&:checked,\n  &[aria-checked=\"true\"]": {
      "@apply text-success": {}
    }
  },
  ".toggle-warning": {
    "&:checked,\n  &[aria-checked=\"true\"]": {
      "@apply text-warning": {}
    }
  },
  ".toggle-info": {
    "&:checked,\n  &[aria-checked=\"true\"]": {
      "@apply text-info": {}
    }
  },
  ".toggle-error": {
    "&:checked,\n  &[aria-checked=\"true\"]": {
      "@apply text-error": {}
    }
  },
  ".toggle-xs": {
    "&:is([type=\"checkbox\"])": {
      "@apply h-4 w-6": {}
    }
  },
  ".toggle-sm": {
    "&:is([type=\"checkbox\"])": {
      "@apply h-5 w-8": {}
    }
  },
  ".toggle-md": {
    "&:is([type=\"checkbox\"])": {
      "@apply h-6 w-12": {}
    }
  },
  ".toggle-lg": {
    "&:is([type=\"checkbox\"])": {
      "@apply h-8 w-16": {}
    }
  }
};