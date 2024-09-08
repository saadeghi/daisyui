export default {
  ".range": {
    "appearance": "none",
    "WebkitAppearance": "none",
    "--range-shdw": "currentColor",
    "@apply rounded-box overflow-hidden bg-transparent h-6 w-full cursor-pointer border-none": {},
    "&:focus": {
      "outline": "none"
    },
    "&:focus-visible": {
      "--focus-shadow": "0 0 0 6px var(--color-base-100) inset, 0 0 0 2rem var(--range-shdw) inset"
    },
    "&::-webkit-slider-runnable-track": {
      "@apply rounded-box bg-base-content/10 h-2 w-full": {}
    },
    "&::-webkit-slider-thumb": {
      "@apply rounded-box bg-base-100 relative h-6 w-6 border-none": {},
      "appearance": "none",
      "WebkitAppearance": "none",
      "top": "50%",
      "color": "var(--range-shdw)",
      "transform": "translateY(-50%)",
      "--filler-size": "100rem",
      "--filler-offset": "0.6rem",
      "boxShadow": "0 0 0 3px var(--range-shdw) inset,\n        var(--focus-shadow, 0 0),\n        calc(var(--filler-size) * -1 - var(--filler-offset)) 0 0 var(--filler-size)"
    },
    "&::-moz-range-track": {
      "@apply rounded-box bg-base-content/10 h-2 w-full": {}
    },
    "&::-moz-range-thumb": {
      "@apply rounded-box bg-base-100 relative h-6 w-6 border-none": {},
      "top": "50%",
      "color": "var(--range-shdw)",
      "--filler-size": "100rem",
      "--filler-offset": "0.5rem",
      "boxShadow": "0 0 0 3px var(--range-shdw) inset,\n        var(--focus-shadow, 0 0),\n        calc(var(--filler-size) * -1 - var(--filler-offset)) 0 0 var(--filler-size)"
    }
  },
  ".range-primary": {
    "@apply text-primary": {}
  },
  ".range-secondary": {
    "@apply text-secondary": {}
  },
  ".range-accent": {
    "@apply text-accent": {}
  },
  ".range-success": {
    "@apply text-success": {}
  },
  ".range-warning": {
    "@apply text-warning": {}
  },
  ".range-info": {
    "@apply text-info": {}
  },
  ".range-error": {
    "@apply text-error": {}
  },
  ".range-xs": {
    "@apply h-4": {},
    "&::-webkit-slider-runnable-track": {
      "@apply h-1": {}
    },
    "&::-webkit-slider-thumb": {
      "@apply size-4": {},
      "--filler-offset": "0.4rem"
    },
    "&::-moz-range-track": {
      "@apply h-1": {}
    },
    "&::-moz-range-thumb": {
      "@apply size-4": {},
      "--filler-offset": "0.4rem"
    }
  },
  ".range-sm": {
    "@apply h-5": {},
    "&::-webkit-slider-runnable-track": {
      "@apply h-1": {}
    },
    "&::-webkit-slider-thumb": {
      "@apply size-5": {},
      "--filler-offset": "0.5rem"
    },
    "&::-moz-range-track": {
      "@apply h-1": {}
    },
    "&::-moz-range-thumb": {
      "@apply size-5": {},
      "--filler-offset": "0.5rem"
    }
  },
  ".range-md": {
    "@apply h-6": {},
    "&::-webkit-slider-runnable-track": {
      "@apply h-2": {}
    },
    "&::-webkit-slider-thumb": {
      "@apply size-6": {},
      "--filler-offset": "0.6rem"
    },
    "&::-moz-range-track": {
      "@apply h-2": {}
    },
    "&::-moz-range-thumb": {
      "@apply size-6": {},
      "--filler-offset": "0.6rem"
    }
  },
  ".range-lg": {
    "@apply h-8": {},
    "&::-webkit-slider-runnable-track": {
      "@apply h-4": {}
    },
    "&::-webkit-slider-thumb": {
      "@apply size-8": {},
      "--filler-offset": "1rem"
    },
    "&::-moz-range-track": {
      "@apply h-4": {}
    },
    "&::-moz-range-thumb": {
      "@apply size-8": {},
      "--filler-offset": "1rem"
    }
  }
};