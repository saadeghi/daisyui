export default {
  ".radio": {
    "@apply border-base-content/20 text-base-content relative size-6 shrink-0 cursor-pointer appearance-none rounded-full border p-1 align-middle": {},
    "boxShadow": "0 1px oklch(0% 0 0 / 0.1) inset",
    "&:before": {
      "@apply block size-full rounded-full": {},
      "content": "\"\""
    },
    "&:focus-visible": {
      "@apply outline-2 outline-offset-2 outline-current": {}
    },
    "&:checked,\n  &[aria-checked=\"true\"]": {
      "animation": "radiomark var(--animation-input, 0.2s) ease-out",
      "@apply bg-base-100 border-current": {},
      "&:before": {
        "@apply bg-current": {},
        "boxShadow": "0 -1px oklch(0% 0 0 / 0.1) inset,\n        0 8px 0 -4px oklch(100% 0 0 / 0.1) inset,\n        0 1px oklch(0% 0 0 / 0.1)"
      }
    }
  },
  ".radio-primary": {
    "@apply text-primary border-current": {}
  },
  ".radio-secondary": {
    "@apply text-secondary border-current": {}
  },
  ".radio-accent": {
    "@apply text-accent border-current": {}
  },
  ".radio-success": {
    "@apply text-success border-current": {}
  },
  ".radio-warning": {
    "@apply text-warning border-current": {}
  },
  ".radio-info": {
    "@apply text-info border-current": {}
  },
  ".radio-error": {
    "@apply text-error border-current": {}
  },
  ".radio:disabled": {
    "@apply cursor-not-allowed opacity-20": {}
  },
  "@keyframes radiomark": {
    "0%": {
      "padding": "5px"
    },
    "50%": {
      "padding": "3px"
    }
  },
  ".radio-xs": {
    "&:is([type=\"radio\"])": {
      "@apply size-4": {}
    }
  },
  ".radio-sm": {
    "&:is([type=\"radio\"])": {
      "@apply size-5": {}
    }
  },
  ".radio-md": {
    "&:is([type=\"radio\"])": {
      "@apply size-6": {}
    }
  },
  ".radio-lg": {
    "&:is([type=\"radio\"])": {
      "@apply size-8": {}
    }
  }
};