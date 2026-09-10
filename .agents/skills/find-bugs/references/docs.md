# `packages/docs` reference

Use this reference for bugs in the daisyUI documentation website. Read
`packages/docs/AGENTS.md` first.

## Source locations

- Routes and page data: `packages/docs/src/routes/`
- Shared UI: `packages/docs/src/components/`
- Client code and data: `packages/docs/src/lib/`
- Markdown processing: `packages/docs/src/lib/mdsvex/`
- Translations: `packages/docs/src/translation/`
- Site CSS: `packages/docs/src/global.css` and `packages/docs/src/homepage.css`
- Build configuration: `packages/docs/vite.config.js`, `packages/docs/svelte.config.js`, and
  `packages/docs/package.json`

`packages/docs/.svelte-kit/` and `packages/docs/build/` are generated output. Do not identify them
as the source fix location. Decide whether a component example bug belongs to `packages/docs` or
`packages/daisyui` before you propose a solution.

## Verification

- Follow the affected URL through its route, layout, component, and data source.
- Use Svelte 5 behavior. Do not propose Svelte 4 patterns.
- Start with the closest existing test, such as
  `bun test packages/docs/src/<path>/<relevant>.test.js`.
- Use `bun --cwd packages/docs run lang:validate` only for translation bugs.
- Verify browser bugs on the exact route. Check SSR, client navigation, language, accessibility,
  or responsive behavior only when it can affect the bug.
- Do not run a build or another command that writes generated files in the working repository.
