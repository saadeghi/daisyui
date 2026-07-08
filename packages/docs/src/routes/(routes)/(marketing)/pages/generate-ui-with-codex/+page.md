---
title: Generate UI with Codex
desc: Generate UI with Codex using daisyUI semantic components for cleaner output, smaller diffs, and simpler maintenance.
layout: contentLanding
keywords: generate ui with codex, codex ui generation, codex frontend code, codex ai ui, codex tailwind components
---

<script>
  import Translate from "$components/Translate.svelte"
</script>

## Codex needs project-level UI rules

[Codex](/pages/how-to-design-ui-with-codex/) works inside a codebase, so its UI output has to match surrounding files. Without project-level component rules, it can generate valid markup that still feels unlike the rest of the app.

The fix is not a longer prompt for every task. The fix is a reusable [component vocabulary](/pages/ui-design-skill-for-codex/) Codex can follow each time it edits frontend files.

## The hidden cost is not the first screen

The first version often looks acceptable. The maintenance cost shows up in the second, fifth, and tenth edit.

- One button becomes five different button class strings.
- A card uses different padding on each page.
- Dark mode colors get copied by hand.
- The model changes nearby styles while fixing one small detail.
- Reviewing the diff takes longer than the prompt.

This is a codebase consistency problem. Codex needs stable class patterns it can repeat across files.

## Give the model component names before it writes code

Semantic classes narrow the search space. Instead of asking Codex to invent a button from utilities, give it a known target:

```html
<button class="btn btn-primary">Save changes</button>
```

The same idea works across a page:

```html
<section class="grid gap-6 md:grid-cols-3!">
  <div class="card bg-base-100 shadow-sm">
    <div class="card-body">
      <h2 class="card-title">Team usage</h2>
      <p>See seats, invites, and plan limits in one place.</p>
      <div class="card-actions justify-end">
        <button class="btn btn-primary">Manage</button>
      </div>
    </div>
  </div>
</section>
```

Now the prompt and the code share the same vocabulary. You can ask for "primary", "outline", "warning", "compact", or "ghost" instead of asking the model to rebuild color, border, spacing, hover, active, disabled, and focus styles.

## Why daisyUI fits Codex UI generation

daisyUI is a Tailwind CSS component library. Version 5 installs with `@plugin "daisyui"`, includes 61 component families in this repo, ships 35 built-in themes, and can also be used from CDN with `@tailwindcss/browser@4` for quick HTML prototypes. It adds CSS class names. It does not ship React, Vue, or Svelte components, so your framework keeps control of state and behavior.

That combination matters for generated UI. Tailwind CSS remains available for layout and one-off styling, while daisyUI handles repeated interface parts with names a model can reuse: `btn`, `card`, `input`, `select`, `modal`, `navbar`, `menu`, `table`, `badge`, `alert`, `stat`, and `toast`.

The model still has freedom. It can choose the layout, data, copy, and interaction wiring. The repetitive visual layer has a stable vocabulary.

## A better prompt pattern

Use prompts that define the repo's UI rules before the change:

```text
Build a settings page with daisyUI.
Use cards for sections, fieldsets for form groups, inputs for text fields,
selects for option lists, and btn-primary for the main action.
Use Tailwind utilities only for layout and spacing.
```

That prompt gives the model pieces it can assemble. It also gives you code that is easier to review because the important UI decisions are visible in class names.

## When this approach pays off

Use semantic components when Codex will edit existing UI, not only create a throwaway snippet. Consistent class names make diffs smaller and review faster.

Start with the [daisyUI components](/components/), then keep the [install guide](/docs/install/) and [theme generator](/theme-generator/) close while you prompt. The less the model has to invent, the more attention it can spend on the screen you asked for.
