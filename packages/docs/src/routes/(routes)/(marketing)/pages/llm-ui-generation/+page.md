---
title: LLM UI generation
desc: LLM UI generation works better with semantic components instead of long Tailwind class strings. Use daisyUI to keep edits smaller and clearer.
layout: contentLanding
keywords: llm ui generation, llm ui builder, llm frontend generation, ai generated ui code, llm web ui
---

<script>
  import Translate from "$components/Translate.svelte"
</script>

## The problem: LLM workflows get bogged down

Most generated code is correct but verbose. The model has to read and rewrite too much styling for changes that should be small. That is where people start losing trust in the workflow.

Tailwind encourages low-level control. That is powerful, but a single card can still turn into a long class string that the model has to reread and rewrite on every edit.

```html
<!-- A card in Tailwind: 40+ classes required -->
<div class="bg-white rounded-lg shadow-md p-6 border border-gray-200 transition-shadow duration-200 hover:shadow-lg dark:bg-gray-800 dark:border-gray-700 dark:hover:shadow-lg">
  <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-2">
    Title
  </h3>
  <p class="text-sm text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
    Description
  </p>
  <button class="px-4 py-2.5 bg-blue-600 text-white rounded font-medium text-sm border border-blue-700 transition-all duration-200 hover:bg-blue-700 hover:border-blue-800 active:bg-blue-800 active:shadow-inner focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 disabled:opacity-50 disabled:cursor-not-allowed dark:bg-blue-700 dark:border-blue-800 dark:text-blue-50 dark:hover:bg-blue-800 dark:hover:border-blue-900 dark:active:bg-blue-900 dark:active:shadow-inner dark:focus-visible:outline-blue-400 inline-flex items-center justify-center cursor-pointer">
    Action
  </button>
</div>
```

Every time you ask the LLM to modify this card, it must read all these classes. Every response includes all these classes. You're paying per token for what should be a single primitive.

## The solution: give the LLM building blocks

Instead of teaching the LLM how to write `px-4 py-2 bg-blue-600 text-white rounded...`, teach it to write `btn btn-primary`. That simple switch changes the workflow. The output gets shorter, the model makes fewer mistakes, and prompt language starts to match developer intent instead of fighting it.

daisyUI gives the model a concrete component vocabulary it can reuse: `btn`, `card`, `modal`, `navbar`, `badge`, `alert`, and `dropdown`. Once those names are part of the workflow, the LLM spends less time rebuilding style details and more time composing useful structure.

That also helps humans. Shorter prompts are easier to write. Smaller diffs are easier to review. And the model has more room in context for the actual change instead of a pile of repeated utility classes.

The LLM learns patterns:

```javascript
// Pattern 1: Use .btn for buttons
<button class="btn btn-primary">Save</button>

// Pattern 2: Use .card for card containers
<div class="card">
  <div class="card-body">...</div>
</div>

// Pattern 3: Use semantic colors
class="bg-primary text-primary-content"
```

Once trained, the LLM applies them consistently. That consistency is what makes the workflow feel usable instead of fragile.

Each LLM call is smaller:

```diff
- <button class="px-4 py-2 bg-blue-600 text-white rounded font-medium border border-blue-700 transition-all hover:bg-blue-700 hover:border-blue-800 active:bg-blue-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 disabled:opacity-50 dark:bg-blue-700 dark:border-blue-800 dark:hover:bg-blue-800 dark:active:bg-blue-900">
+ <button class="btn btn-secondary">
```

vs.

**Scenario:** You're building a product dashboard with an LLM, iterating daily.

| Metric | Tailwind only | Tailwind + daisyUI |
|---|---|---|
| Lines per page | 200-300 | 50-80 |
| Classes per button | 25-35 | 1-3 |
| Tokens per edit cycle | 20K-40K | 3K-6K |
| Cost to change one color | Multiple file edits | Change 1 theme class |
## How to structure LLM workflows with daisyUI

Teach the model the component API, define semantic color rules, and keep the HTML structure consistent. Once the model has a few examples, it starts repeating the same patterns automatically instead of inventing new button styles and card layouts.

Add daisyUI's structure to your system prompt:

```
You have access to daisyUI components:
- .btn (primary, secondary, outline, ghost, link)
- .card (with .card-body, .card-title)
- .modal (with .modal-content, .modal-action)
- .navbar (with .navbar-start, .navbar-center, .navbar-end)
- .badge, .alert, .loading, .dropdown, .menu

Prefer these over building custom utility chains.
```

Define your palette once:

```
Color tokens:
- primary: Your brand color
- secondary: Accent color
- neutral: UI text and borders
- success, warning, error: Status colors
```

The LLM learns to use `bg-primary` instead of `bg-blue-600`.

Ask for component-first changes instead of style rewrites. For example, say "update this text to use the error color" or "switch the primary action to `btn-outline`." That is easier for the model to execute and easier for a human to check.

Maintain a consistent HTML structure:

```html
<div class="card">
  <div class="card-body">
    <h2 class="card-title">Title</h2>
    <p>Content</p>
    <div class="card-actions">
      <button class="btn btn-primary">Action</button>
    </div>
  </div>
</div>
```
```
 <div class="card bg-base-200 border border-base-300">
```
Once the LLM sees this pattern, it replicates it automatically.

## Real workflow example

**Day 1:** You ask the LLM to build a dashboard with user cards, stat boxes, and action buttons.
```
 <div class="bg-gray-50 rounded-lg shadow-md p-6 border border-gray-300">
```
With daisyUI, the LLM outputs:

```html
<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
  <div class="card bg-base-100">
    <div class="card-body">
    ...
```

**Day 3:** You say, "Change the cards to use a darker background and add a border."

The LLM modifies:

```diff
- <div class="card bg-base-100">
+ <div class="card bg-base-200 border border-base-300">
```

Not:

```diff
- <div class="bg-white rounded-lg shadow-md p-6 border border-gray-200">
+ <div class="bg-gray-50 rounded-lg shadow-md p-6 border border-gray-300">
```

## When to use this approach

LLM + daisyUI workflows shine when:

- You iterate with LLMs multiple times per feature
- You build a consistent UI across many pages
- You want to experiment with layouts without custom CSS
- Token cost and speed matter to your project budget
- You need code that developers can understand and maintain

In practice, this is the point where the LLM stops feeling like a demo and starts feeling like a tool you can depend on.

## Getting started

Start with daisyUI's [component library](/components/). Show the LLM a few examples, then ask it to build something new using only those components.
