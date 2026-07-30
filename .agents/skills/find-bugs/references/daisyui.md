# Investigating `packages/daisyui`

Use this guide for bugs owned by the published daisyUI library.

## Source and product map

Read `packages/daisyui/AGENTS.md` first.

| Concern              | Primary source to inspect                                                                         | Product-facing result                             |
| -------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------- |
| Components           | `packages/daisyui/src/components/*.css`                                                           | Component CSS/modules, plugin output, bundled CSS |
| Base styles          | `packages/daisyui/src/base/*.css`                                                                 | Base modules, plugin output, bundled CSS          |
| Utilities            | `packages/daisyui/src/utilities/*.css`                                                            | Utility modules, plugin output, bundled CSS       |
| Themes               | `packages/daisyui/src/themes/*.css`                                                               | Theme modules/objects, `themes.css`, bundled CSS  |
| Plugin/config        | `packages/daisyui/index.js`, `theme/index.js`, `functions/plugin*.js`, `functions/themePlugin.js` | Public plugin and theme behavior                  |
| Prefixing/nesting    | `functions/addPrefix.js`, `functions/nestCssLayers.js`                                            | Selector and layer behavior                       |
| Generation/packaging | `build.js`, `functions/generate*.js`, `functions/packCss.js`, `package.json`                      | Published files and exports                       |

Top-level `base/`, `colors/`, `components/`, `theme/`, `utilities/`, `imports.js`, `chunks.css`,
`themes.css`, and `daisyui.css` are generated or packaged results. Inspect them to prove that a
source defect reaches consumers, but never plan a fix that edits only generated output. Trace the
change back to its source or generator.

Never inspect or modify `packages/bundle` or `packages/logs`.

## High-signal search paths

### CSS and component behavior

- Start with the component's source CSS and its docs example under
  `packages/docs/src/routes/(routes)/components/<component>/`.
- Trace nested selectors, state combinations, pseudo-elements, native form behavior, cascade
  layers, specificity, inheritance, and custom properties.
- Check disabled, checked, indeterminate, invalid, focus-visible, hover, active, open/closed, and
  reduced-motion behavior when relevant.
- Check size/style/color variants, composition with other components, and unmodified default
  behavior.
- Check logical directions and `[dir="rtl"]` where physical placement is involved.
- Check light/dark and at least one non-default theme when semantic colors or tokens are involved.
- Check supported browser differences when native controls, `:has()`, masks, scroll behavior,
  popovers, dialogs, or new CSS features are involved.

### Plugin and package behavior

- Test default configuration and relevant combinations of `themes`, `root`, `include`, `exclude`,
  `prefix`, and `logs`.
- Follow transformations through imports, prefixing, nesting, object conversion, packing, and
  package exports.
- Check both module consumers and bundled/CDN CSS when the defect could affect one path only.
- Compare source and generated product output to rule out a stale or generation-only defect.

### Theme and token behavior

- Inspect OKLCH tokens, content/background pairs, state colors, fallbacks, and theme-controller
  selectors.
- Check whether a shared variable affects every component or theme before claiming isolation.
- Treat a subjective color preference as a design request unless it violates a documented token,
  contrast, or product invariant.

## Verification ladder

Use the smallest relevant existing check first:

1. Run a focused test such as
   `bun test packages/daisyui/functions/<relevant>.test.js`.
2. Run `bun test packages/daisyui/functions` when the affected generator/helper has neighboring
   behavior.
3. Exercise the current built package from an OS-temporary consumer fixture for public plugin,
   export, configuration, or compiled-CSS behavior.
4. Render the affected component through an existing docs or playground route and inspect actual
   computed behavior at relevant states, themes, viewports, directions, and browsers.
5. Use the root `bun run test` only when cross-package coverage is justified.

Do not run `bun run build`, `bun run bundle`, `bun run wallace`, or another writer in the working
repository during discovery. If shipped-output proof requires a fresh build, record it as pending
or run it only in a disposable OS-temporary copy that cannot affect the working tree.

Capture exact commands, fixture inputs, output excerpts, computed properties, and screenshots
needed to reproduce the failure. A source selector that merely looks wrong is not evidence.

## Isolation and solution constraints

A ready plan must account for:

- nested CSS and Tailwind CSS 4 compilation;
- existing component class, part, modifier, and variant contracts;
- selector specificity and layer order;
- prefixed and include/exclude builds when relevant;
- theme switching, OKLCH tokens, and default-theme behavior;
- RTL/logical placement, accessibility states, and supported browsers;
- generated outputs that an approved build will refresh;
- size impact and duplication.

The recommended solution must not depend on `!important`, unnecessary styles, unrelated
refactoring, or a new dependency. Prefer Tailwind CSS 4 `@apply` where repository conventions
already use it, but do not force it when it obscures the smallest correct behavior.

Identify the exact existing test file to extend or the closest test seam to add later. For a
visual bug, plan both a stable structural/compiled-CSS assertion where possible and a rendered
product check; do not rely only on a screenshot.
