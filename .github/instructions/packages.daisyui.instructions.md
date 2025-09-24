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
