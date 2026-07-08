---
title: Generate UI with LLM
desc: Generate UI with an LLM by using semantic component classes that reduce repeated Tailwind markup.
layout: contentLanding
keywords: generate ui with llm, llm ui generation, llm frontend workflow, ai ui from llm, llm generated frontend code
---

<script>
  import Translate from "$components/Translate.svelte"
</script>

## LLM UI generation needs reusable primitives

An LLM can turn a prompt into a working interface, but it does not automatically preserve a design system across prompts. It follows the context you give it.

If the context contains long utility chains, the model has to reason through them. If the context contains [component names](/pages/tailwind-ui-components/), it can operate at the level of the UI you meant.

## The hidden cost is not the first screen

The first version often looks acceptable. The maintenance cost shows up in the second, fifth, and tenth edit.

- One button becomes five different button class strings.
- A card uses different padding on each page.
- Dark mode colors get copied by hand.
- The model changes nearby styles while fixing one small detail.
- Reviewing the diff takes longer than the prompt.

This is a representation problem. The code should represent common UI as common parts, not as fresh styling every time.

## Give the model component names before it writes code

Semantic classes narrow the search space. Instead of asking An LLM to invent a button from utilities, give it a known target:

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

## Why daisyUI fits LLM UI generation

daisyUI is a Tailwind CSS component library. Version 5 installs with `@plugin "daisyui"`, includes 61 component families in this repo, ships 35 built-in themes, and can also be used from CDN with `@tailwindcss/browser@4` for quick HTML prototypes. It adds CSS class names. It does not ship React, Vue, or Svelte components, so your framework keeps control of state and behavior.

That combination matters for [generated UI](/pages/llm-ui-generation/). Tailwind CSS remains available for layout and one-off styling, while daisyUI handles repeated interface parts with names a model can reuse: `btn`, `card`, `input`, `select`, `modal`, `navbar`, `menu`, `table`, `badge`, `alert`, `stat`, and `toast`.

The model still has freedom. It can choose the layout, data, copy, and interaction wiring. The repetitive visual layer has a stable vocabulary.

## A better prompt pattern

Use prompts that define reusable primitives before layout details:

```text
Build a settings page with daisyUI.
Use cards for sections, fieldsets for form groups, inputs for text fields,
selects for option lists, and btn-primary for the main action.
Use Tailwind utilities only for layout and spacing.
```

That prompt gives the model pieces it can assemble. It also gives you code that is easier to review because the important UI decisions are visible in class names.

## When this approach pays off

Use semantic components when LLM output has to survive future prompts. The markup stays closer to product language and farther from repeated CSS bookkeeping.

Start with the [daisyUI components](/components/), then keep the [install guide](/docs/install/) and [theme generator](/theme-generator/) close while you prompt. The less the model has to invent, the more attention it can spend on the screen you asked for.
