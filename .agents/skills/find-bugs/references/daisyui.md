# `packages/daisyui` reference

Use this reference for bugs in the published daisyUI library. Read
`packages/daisyui/AGENTS.md` first.

## Source locations

- Component CSS: `packages/daisyui/src/components/`
- Base styles: `packages/daisyui/src/base/`
- Utilities: `packages/daisyui/src/utilities/`
- Themes: `packages/daisyui/src/themes/`
- Plugin and configuration: `packages/daisyui/index.js`, `packages/daisyui/theme/`, and
  `packages/daisyui/functions/`
- Package generation: `packages/daisyui/build.js` and `packages/daisyui/package.json`
- Component examples: `packages/docs/src/routes/(routes)/components/`

Top-level CSS, theme, component, utility, and import files in `packages/daisyui/` can be generated
product files. Trace a bug to its source or generator. Do not propose a change only to generated
output. Do not inspect `packages/bundle` or `packages/logs`.

## Verification

- Start with the closest existing test. For function tests, use
  `bun test packages/daisyui/functions/<relevant>.test.js`.
- Verify CSS behavior through the related docs example. Verify plugin or export behavior with the
  current package from an OS-temporary consumer fixture.
- Check configuration, theme, direction, and browser variants only when they can affect the bug.
- Do not run a build or another command that writes generated files in the working repository.
