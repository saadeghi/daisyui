---
title: Generate UI with Codex
desc: Generate UI with Codex using daisyUI semantic components for cleaner output, smaller diffs, and easier maintenance.
layout: contentLanding
keywords: generate ui with codex, codex ui generation, codex frontend code, codex ai ui, codex tailwind components
---

<script>
  import Translate from "$components/Translate.svelte"
</script>

## The problem: Codex output is verbose and inconsistent

Codex is good at generating code, but without constraints it tends to produce utility-heavy HTML.

You ask Codex: "Add a button to save data."

Codex outputs:

```html
<button class="px-4 py-2.5 bg-blue-600 text-white font-semibold text-sm rounded-lg border border-blue-700 transition-all duration-200 hover:bg-blue-700 hover:border-blue-800 active:bg-blue-800 active:shadow-inner focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 disabled:opacity-50 disabled:cursor-not-allowed dark:bg-blue-700 dark:border-blue-800 dark:text-blue-50 dark:hover:bg-blue-800 dark:hover:border-blue-900 dark:active:bg-blue-900 dark:focus-visible:outline-blue-400 inline-flex items-center justify-center cursor-pointer">
  Save
</button>
```

You ask Codex: "Add another button for cancel."

Codex outputs:

```html
<button class="px-3 py-2 bg-gray-300 text-gray-900 font-medium text-xs rounded border border-gray-400 transition-all duration-150 hover:bg-gray-400 hover:border-gray-500 active:bg-gray-500 active:shadow-inner focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600 disabled:opacity-60 disabled:cursor-not-allowed dark:bg-gray-600 dark:border-gray-700 dark:text-gray-100 dark:hover:bg-gray-700 dark:hover:border-gray-800 dark:active:bg-gray-800 dark:focus-visible:outline-gray-400 inline-flex items-center justify-center cursor-pointer">
  Cancel
</button>
```

Both buttons work. Both have different class sets. At scale, maintaining these variations becomes impossible.

Without explicit instruction, Codex invents locally-optimal variations:

- Button 1: 12 classes
- Button 2: 14 classes (slightly different padding/colors)
- Button 3: 11 classes (similar but not identical)

Each is valid on its own. Together, they're hard to maintain.

What if you could tell Codex: "All buttons should use this semantic class: `btn btn-primary`?"

Now Codex has a constraint. It follows the pattern. Every button is the same. Changes are global.

Benefits:

1. **Consistency emerges immediately**
2. **Changes stay small and focused**
3. **New developers can read the system**
4. **The same components scale across pages**

## The solution: Codex with daisyUI semantic components

daisyUI provides the semantic targets that make Codex output consistent.

**1. Codex learns semantic patterns**

Show Codex examples:

```html
<!-- All buttons follow this -->
<button class="btn">Default</button>
<button class="btn btn-primary">Primary</button>
<button class="btn btn-secondary">Secondary</button>
<button class="btn btn-outline">Outline</button>
```

Codex learns: "Buttons use `.btn` classes."

**2. Smaller output, easier review**

Without daisyUI:

```html
<button class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 transition-colors">Click</button>
```

With daisyUI:

```html
<button class="btn btn-primary">Click</button>
```

Codex generates both quickly. One is easier to maintain.

**3. Consistency across files**

Codex sees a few `.card` examples and repeats the pattern.

Without daisyUI, buttons drift into variations. With daisyUI, the same variants repeat everywhere.

## How to guide Codex toward daisyUI patterns

**Step 1: Show patterns in your codebase**

When Codex starts working on your project, it learns from existing code. If your existing components use daisyUI, Codex will follow.

Example:

```html
<!-- Existing code Codex reads -->
<div class="card bg-base-100 shadow">
  <div class="card-body">
    <h2 class="card-title">Title</h2>
    <p>Content</p>
  </div>
</div>
```

Codex generates:

```html
<!-- New code Codex creates -->
<div class="card bg-base-100 shadow">
  <div class="card-body">
    <h2 class="card-title">New Title</h2>
    <p>New content</p>
  </div>
</div>
```

Same pattern. Codex learned it from context.

**Step 2: Mention component names in comments**

Codex pays attention to comments. A comment like:

```html
<!-- use .card for containers -->
<!-- use .btn btn-primary for main actions -->
<!-- use .input for text fields -->
```

Guides Codex toward semantic generation.

**Step 3: Use daisyUI components in prompts**

When you ask Codex to generate:

"Add a card showing user profile with avatar and name. Use the .avatar component for the image."

Codex knows what to target.

## Real example: Building a dashboard with Codex

**Task:** "Build a dashboard with 5 stat cards and a recent activity list."

**Without daisyUI:**

Codex generates each stat card independently. Stat card 1 has one styling approach. Stat card 5 has a slightly different approach. A recent activity list is styled from scratch.

Result: 250+ lines of inconsistent utility combinations.

**With daisyUI:**

Codex generates:

```html
<div class="grid grid-cols-1 md:grid-cols-5 gap-4">
  <div class="card bg-base-100">
    <div class="card-body">
      <h2 class="text-2xl font-bold">1,234</h2>
      <p>Total Users</p>
    </div>
  </div>
  <!-- 4 more stat cards using same pattern -->
</div>

<div class="card bg-base-100 shadow">
  <div class="card-body">
    <h2 class="card-title">Recent Activity</h2>
    <!-- activity list -->
  </div>
</div>
```

Result: 100 lines of consistent semantic structure.

Fast code becomes technical debt when it isn't consistent. daisyUI keeps Codex output maintainable.

## When Codex + daisyUI works best

- Building multi-page applications
- Maintaining consistency across teams
- Iterating on features without redesigning
- Handing code to human developers
- Optimizing for maintainability over speed

## Getting started

Browse the [component library](/components/), add a few components to your codebase, and use those names in your Codex prompts.
