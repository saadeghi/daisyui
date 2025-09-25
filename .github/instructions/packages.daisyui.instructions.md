---
applyTo: "packages/daisyui/src/**,packages/daisyui/functions/**"
---

# Instructions for `daisyui` package

- This is the source code of daisyUI. The source styles will be compiled into daisyUI plugin for Tailwind CSS. daisyUI adds component classes to Tailwind CSS development faster, cleaner, easier.
- We use nested CSS
- Prefer using Tailwind CSS 4 utilities for styling using `@apply` directive
- Do not use unnecessary styles. Every byte counts
- Avoid repetition if possible
- Do not use `!important` at all costs
- daisyUI themes use OKLCH color space by default

## Files

- daisyUI components: `packages/daisyui/src/components`
- daisyUI base styles: `packages/daisyui/src/components`
- daisyUI utilities: `packages/daisyui/src/utilities`
- daisyUI themes: `packages/daisyui/src/themes`
- daisyUI build functions and tests: `packages/daisyui/functions`

## Fixing daisyUI issues

1. Read the issue carefully
2. If the issue is not clear, ask for more information
3. Find the CSS file or JS files that may be causing the issue
4. Provide one or more logical solutions to the issue and let us decide which one to implement
5. Implement the chosen solution
6. Apply the solution without breaking existing functionality or changing other parts of the code
