export default {
  ".checkbox": {
    "@apply border-base-content/20 text-base-content relative size-6 shrink-0 cursor-pointer appearance-none rounded-[--radius-btn] border p-1": {},
    "boxShadow": "0 1px oklch(0% 0 0 / 0.1) inset",
    "transition": "background-color 0.2s,\n\t\tbox-shadow 0.2s",
    "&:before": {
      "@apply block size-full rotate-45 bg-current opacity-0 content-['']": {},
      "transition": "clip-path 0.3s,\n\t\t\topacity 0.1s,\n\t\t\trotate 0.3s,\n\t\t\ttranslate 0.3s",
      "transitionDelay": "0.1s",
      "clipPath": "polygon(20% 100%, 20% 80%, 50% 80%, 50% 80%, 70% 80%, 70% 100%)",
      "boxShadow": "0px 3px 0 0px oklch(100% 0 0 / 0.1) inset"
    },
    "&:focus-visible": {
      "@apply outline-2 outline-offset-2 outline-current": {}
    },
    "&:checked,\n\t&[aria-checked=\"true\"]": {
      "boxShadow": "0 8px 0 -4px oklch(100% 0 0 / 0.1) inset,\n\t\t\t0 1px oklch(0% 0 0 / 0.1)",
      "&:before": {
        "@apply opacity-100": {},
        "clipPath": "polygon(20% 100%, 20% 80%, 50% 80%, 50% 0%, 70% 0%, 70% 100%)"
      }
    },
    "&:indeterminate": {
      "&:before": {
        "@apply translate-y-[-35%] rotate-0 opacity-100": {},
        "clipPath": "polygon(20% 100%, 20% 80%, 50% 80%, 50% 80%, 80% 80%, 80% 100%)"
      }
    }
  },
  ".checkbox-primary": {
    "@apply border-primary text-primary-content": {},
    "&:focus-visible": {
      "@apply outline-primary": {}
    },
    "&:checked": {
      "@apply bg-primary": {}
    }
  },
  ".checkbox-secondary": {
    "@apply border-secondary text-secondary-content": {},
    "&:focus-visible": {
      "@apply outline-secondary": {}
    },
    "&:checked": {
      "@apply bg-secondary": {}
    }
  },
  ".checkbox-accent": {
    "@apply border-accent text-accent-content": {},
    "&:focus-visible": {
      "@apply outline-accent": {}
    },
    "&:checked": {
      "@apply bg-accent": {}
    }
  },
  ".checkbox-success": {
    "@apply border-success text-success-content": {},
    "&:focus-visible": {
      "@apply outline-success": {}
    },
    "&:checked": {
      "@apply bg-success": {}
    }
  },
  ".checkbox-warning": {
    "@apply border-warning text-warning-content": {},
    "&:focus-visible": {
      "@apply outline-warning": {}
    },
    "&:checked": {
      "@apply bg-warning": {}
    }
  },
  ".checkbox-info": {
    "@apply border-info text-info-content": {},
    "&:focus-visible": {
      "@apply outline-info": {}
    },
    "&:checked": {
      "@apply bg-info": {}
    }
  },
  ".checkbox-error": {
    "@apply border-error text-error-content": {},
    "&:focus-visible": {
      "@apply outline-error": {}
    },
    "&:checked": {
      "@apply bg-error": {}
    }
  },
  ".checkbox:disabled": {
    "@apply cursor-not-allowed opacity-20": {}
  },
  ".checkbox-xs": {
    "@apply p-[.1875rem]": {},
    "&[type=\"checkbox\"]": {
      "@apply size-4": {},
      "&:not(:indeterminate):before": {
        "clipPath": "polygon(10% 100%, 10% 70%, 40% 70%, 40% 70%, 70% 70%, 70% 100%)"
      },
      "&:checked,\n\t\t&[aria-checked=\"true\"]": {
        "&:before": {
          "clipPath": "polygon(10% 100%, 10% 70%, 40% 70%, 40% 0%, 70% 0%, 70% 100%)"
        }
      }
    }
  },
  ".checkbox-sm": {
    "&[type=\"checkbox\"]": {
      "@apply size-5": {}
    }
  },
  ".checkbox-md": {
    "&[type=\"checkbox\"]": {
      "@apply size-6": {}
    }
  },
  ".checkbox-lg": {
    "&[type=\"checkbox\"]": {
      "@apply size-8": {}
    }
  }
};