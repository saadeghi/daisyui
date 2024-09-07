export default {
  ".toggle": {
    "@apply h-6 w-12 inline-flex cursor-pointer rounded-full rounded-badge border-current appearance-none border shrink-0 text-base-content/50 p-[3px]": {},
    "boxShadow": "0 1px oklch(0% 0 0 / 0.1) inset",
    "transition": "border-color 0.1s",
    "&:before": {
      "@apply block h-full grow-0": {},
      "content": "\"\"",
      "transition": "flex-grow 0.1s"
    },
    "&:after": {
      "@apply rounded-full aspect-square h-full block bg-current": {},
      "content": "\"\"",
      "transition": "background-color 0.1s, border-color 0.1s",
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
      "@apply justify-center": {},
      "&:before": {
        "@apply grow-0": {}
      }
    },
    "&:disabled": {
      "@apply border-base-content cursor-not-allowed bg-transparent opacity-30": {}
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