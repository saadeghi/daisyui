export default {
  ".rating": {
    "@apply relative inline-flex align-middle": {},
    "& input": {
      "@apply appearance-none border-none": {},
      "WebkitAppearance": "none"
    },
    ":where(input)": {
      "animation": "rating-pop var(--animation-input, 0.25s) ease-out",
      "@apply bg-base-content h-6 w-6 cursor-pointer rounded-none opacity-100": {}
    },
    "& .rating-hidden": {
      "@apply w-2 bg-transparent": {}
    },
    "input[type=\"radio\"]:checked": {
      "backgroundImage": "none"
    },
    "input": {
      "&:checked,\n    &[aria-checked=\"true\"]": {
        "&~input": {
          "@apply opacity-20": {}
        }
      },
      "&:focus-visible": {
        "@apply transition-transform duration-300 ease-out": {},
        "transform": "translateY(-0.125em)"
      }
    },
    "& input:active:focus": {
      "animation": "none",
      "transform": "translateY(-0.125em)"
    },
    "&:is(.rating-xs)": {
      "input": {
        "@apply size-3": {}
      }
    },
    "&:is(.rating-sm)": {
      "input": {
        "@apply size-4": {}
      }
    },
    "&:is(.rating-md)": {
      "input": {
        "@apply size-6": {}
      }
    },
    "&:is(.rating-lg)": {
      "input": {
        "@apply size-10": {}
      }
    }
  },
  ".rating-half": {
    ":where(input:not(.rating-hidden))": {
      "@apply w-3": {}
    },
    "&.rating-xs input:not(.rating-hidden)": {
      "@apply w-1.5": {}
    },
    "&.rating-sm input:not(.rating-hidden)": {
      "@apply w-2": {}
    },
    "&.rating-md input:not(.rating-hidden)": {
      "@apply w-3": {}
    },
    "&.rating-lg input:not(.rating-hidden)": {
      "@apply w-5": {}
    }
  },
  "@keyframes rating-pop": {
    "0%": {
      "transform": "translateY(-0.125em)"
    },
    "40%": {
      "transform": "translateY(-0.125em)"
    },
    "100%": {
      "transform": "translateY(0)"
    }
  }
};