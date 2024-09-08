export default {
  ".range": {
    "appearance": "none",
    "WebkitAppearance": "none",
    "@apply rounded-[--radius-box] bg-transparent w-full cursor-pointer border-none": {},
    "--range-thumb-size": "var(--spacing-6)",
    "--range-track-size": "0.5em",
    "--range-track-color": "var(--color-base-300)",
    "height": "var(--range-thumb-size)",
    "&:focus": {
      "outline": "none"
    },
    "&:focus-visible": {
      "&::-webkit-slider-thumb": {
        "--focus-shadow": "0 0 0 6px currentColor inset, 0 0 0 2rem var(--color-base-100) inset"
      }
    },
    "&::-webkit-slider-runnable-track": {
      "position": "relative",
      "height": "var(--range-thumb-size)",
      "background": "linear-gradient(var(--range-track-color) 0 0) scroll no-repeat center / 100% calc(var(--range-track-size) + 1px)"
    },
    "&::-webkit-slider-thumb": {
      "appearance": "none",
      "WebkitAppearance": "none",
      "position": "relative",
      "height": "var(--range-thumb-size)",
      "--range-clip-top": "calc((var(--range-thumb-size) - var(--range-track-size))* 0.5 - 0.5px)",
      "--range-clip-bottom": "calc(var(--range-thumb-size) - var(--range-clip-top))",
      "background": "linear-gradient(currentColor 0 0) scroll no-repeat left center / 50% calc(var(--range-track-size) + 1px)",
      "backgroundColor": "currentColor",
      "boxShadow": "calc(calc(-100vmax - 1px) - var(--range-thumb-size)) 0 0 100vmax currentColor, calc(var(--range-thumb-size) * -0.55) 0 0 calc(calc(var(--range-thumb-size) - var(--range-track-size)) / -2.15),0 -1px oklch(0% 0 0 / 0.1) inset,\n          0 8px 0 -4px oklch(100% 0 0 / 0.1) inset, var(--focus-shadow, 0 0)",
      "width": "var(--range-thumb-size)",
      "borderRadius": "var(--radius-box)",
      "clipPath": "polygon(100% 0, 0 0, 0 var(--range-clip-top), -100vmax var(--range-clip-top), -100vmax var(--range-clip-bottom), 0 var(--range-clip-bottom), 0 100%, 100% 100%)"
    },
    "@supports (-moz-appearance:none)": {}
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
    "--range-thumb-size": "var(--spacing-4)",
    "--range-track-size": ".25rem"
  },
  ".range-sm": {
    "--range-thumb-size": "var(--spacing-5)",
    "--range-track-size": ".25rem"
  },
  ".range-md": {
    "--range-thumb-size": "var(--spacing-6)",
    "--range-track-size": ".5em"
  },
  ".range-lg": {
    "--range-thumb-size": "var(--spacing-8)",
    "--range-track-size": "1em"
  }
};