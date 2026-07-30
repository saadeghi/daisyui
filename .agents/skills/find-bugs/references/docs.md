# Investigating `packages/docs`

Use this guide for bugs owned by the daisyUI documentation website.

## Source and product map

Read `packages/docs/AGENTS.md` first.

| Concern                | Primary source to inspect                                           |
| ---------------------- | ------------------------------------------------------------------- |
| Routes and page data   | `packages/docs/src/routes/**/+page.*`, `+layout.*`, `+server.*`     |
| Shared UI              | `packages/docs/src/components/**/*.svelte`                          |
| Client state/actions   | `packages/docs/src/lib/*.svelte.js`, `src/lib/*.js`                 |
| Content and route data | `src/lib/server/content/**/*.js`, `src/lib/data/`                   |
| Markdown rendering     | `src/lib/mdsvex/`                                                   |
| Search/build integrity | `src/lib/searchCsv.js`, `src/lib/scripts/verifyBuild.js`            |
| Internationalization   | `src/lib/i18n.svelte.js`, `src/translation/<language>.<chunk>.json` |
| Site-wide CSS          | `src/global.css`, `src/homepage.css`                                |
| Build/runtime config   | `vite.config.js`, `svelte.config.js`, `package.json`                |

`packages/docs/.svelte-kit/` and `packages/docs/build/` are generated output. Inspect rendered
results when necessary, but never identify them as the source fix location.

## High-signal search paths

### Routes, data, and rendering

- Follow the exact URL into its route group, nearest layout, server load, shared component, and
  content/data provider.
- Check direct navigation and client-side navigation. Distinguish SSR/prerender failures from
  hydration or client-state failures.
- Check loading, empty, error, missing, malformed, and stale-data paths.
- Check dynamic route normalization, redirects, sitemap/search inclusion, fragment IDs, and
  serialization boundaries.
- For remote data, prove whether the fault is local transformation/cache/error handling or an
  external service. Do not call a service merely to mutate or refresh it.

### Svelte and browser behavior

- Use Svelte 5 behavior and Runes as the contract; do not propose Svelte 4 patterns.
- Inspect effects, derived state, cleanup, event ordering, browser-only globals, and
  server/client guards.
- Reproduce interaction bugs with keyboard as well as pointer input when applicable.
- Check console errors, failed requests, focus order, accessible names, responsive layout,
  overflow, and theme behavior.
- Use daisyUI component/class contracts for markup behavior; distinguish a docs integration bug
  from a library bug before choosing ownership.

### Markdown, search, and content

- Trace Markdown through mdsvex transforms, syntax highlighting, heading IDs/links, layouts,
  search CSV generation, and static build verification.
- Check fenced code, inline code, escaped markup, external links, duplicate headings, and unusual
  Unicode when relevant.
- For data-driven pages, confirm DTO/projection behavior and all consumers before expanding a
  shared object.

### Internationalization

- Identify the route chunk selected by `src/lib/i18n.svelte.js`.
- Check `common` plus the route's `home`, `docs`, `components`, or `other` chunk.
- Verify identical keys across languages, placeholder/markup preservation, fallback behavior,
  direction, and protected technical terms.
- Respect every translation and no-translation rule in `packages/docs/AGENTS.md`.
- Check at least English and one affected non-English language when the bug concerns translation,
  layout expansion, direction, or route chunking.

## Verification ladder

Use the smallest relevant existing check first:

1. Run a focused test such as
   `bun test packages/docs/src/<path>/<relevant>.test.js`.
2. Run `bun test packages/docs/src` for neighboring docs logic.
3. Run `bun --cwd packages/docs run lang:validate` for translation consistency when applicable.
4. Use the current local docs site to reproduce the exact route and inspect rendered behavior,
   console, network, accessibility, and responsive states.
5. Use `bun --cwd packages/docs run verify` for the package-wide tests and language validation
   when justified.
6. Treat a production build plus `verify:build` as final planned verification for routing,
   prerendering, search, sitemap, or static-output bugs.

The development script opens a browser and the build writes generated directories. Prefer direct
control of an already-running local server. Do not launch a repository-writing build during
discovery; use a disposable OS-temporary copy when fresh output is essential, or mark the build
check as pending for the approved implementation phase.

Record exact URL, navigation mode, viewport, theme, language, input sequence, console/network
evidence, automated commands, and their observed output.

## Isolation and solution constraints

A ready plan must account for:

- SSR, prerendering, hydration, and client navigation as applicable;
- shared layout/component consumers and dynamic route families;
- Svelte 5 and Runes behavior;
- static build, search, sitemap, and heading-link integrity;
- responsive, theme, accessibility, and keyboard behavior;
- translation chunk/key synchronization and RTL when relevant;
- error, empty, loading, and offline/service-failure paths;
- whether the defect belongs in docs or `packages/daisyui`.

The recommended solution must use existing dependencies, daisyUI/Tailwind conventions, and the
smallest route/component/helper boundary. Do not plan an unrelated redesign, content rewrite, or
shared abstraction solely to fix a local defect.

Identify the exact existing test file to extend or the closest test seam to add later. For
render-only defects, plan a deterministic logic/markup assertion where possible plus a browser
verification; do not rely only on visual inspection.
