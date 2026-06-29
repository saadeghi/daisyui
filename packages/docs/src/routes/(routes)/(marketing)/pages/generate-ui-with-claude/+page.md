---
title: Generate UI with Claude
desc: Generate UI with Claude using daisyUI component classes instead of long utility strings, so edits stay smaller and easier to review.
layout: contentLanding
keywords: generate ui with claude, claude ui generation, claude frontend code, ai ui with claude, claude tailwind ui
---

<script>
  import Translate from "$components/Translate.svelte"
</script>

## The problem: Claude workflows become expensive at scale

Claude handles UI well, but long utility-heavy markup makes every edit costly.

Claude does not keep project state between messages. If each component carries 20-30 classes, every prompt has to read and rewrite far more than the actual change.

What if your design system used semantic component classes instead of utility lists?

Same workflow, but with semantic components, each pass reads less and changes less.

## The solution: Claude + daisyUI for efficient workflows

daisyUI gives Claude a semantic vocabulary that dramatically reduces token consumption while maintaining code quality.

**1. Shorter context window pressure**

Instead of Claude reading:

```html
<div class="bg-white border border-gray-200 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-200 dark:bg-gray-800 dark:border-gray-700 dark:hover:shadow-lg">
```

Claude reads:

```html
<div class="card">
```

The model sees the page structure in fewer tokens. A 50-60 token difference per component adds up across large pages.

**2. Smaller diffs, cheaper edits**

Edit example:

```diff
- <button class="px-4 py-2 bg-blue-600 text-white rounded font-semibold hover:bg-blue-700 active:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors dark:bg-blue-700 dark:hover:bg-blue-800 dark:focus:ring-blue-400 disabled:opacity-50 disabled:cursor-not-allowed">
+ <button class="px-4 py-2 bg-purple-600 text-white rounded font-semibold hover:bg-purple-700 active:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors dark:bg-purple-700 dark:hover:bg-purple-800 dark:focus:ring-purple-400 disabled:opacity-50 disabled:cursor-not-allowed">
```

vs.

```diff
- <button class="btn btn-primary">
+ <button class="btn btn-secondary">
```

The second requires changing 1 class. The first requires changing 8 color references.

**3. Consistent component composition**

Claude learns and repeats patterns:

```html
<!-- Every button follows this -->
<button class="btn btn-primary">Action</button>

<!-- Every card follows this -->
<div class="card">
  <div class="card-body">
    <h2 class="card-title">Title</h2>
    <p>Content</p>
  </div>
</div>
```

Once Claude sees the pattern, consistency improves.

On larger dashboards, semantic components cut repeated token use and make edits much cheaper.

## How to use Claude with daisyUI

**Step 1: Train Claude on your component API**

Include this in your system prompt:

```
You have access to daisyUI components:

Buttons:
- btn btn-primary
- btn btn-secondary
- btn btn-outline
- btn btn-ghost

Cards:
- card (use .card-body inside)
- card-title, card-actions (internals)

Forms:
- input (use input-bordered variant)
- textarea textarea-bordered
- checkbox, radio, toggle
- select

Feedback:
- alert alert-info/warning/error/success
- badge
- loading

Always prefer these components over building custom utility chains.
```

**Step 2: Ask Claude for semantic output**

Instead of: "Build a form"

Write: "Build a form using daisyUI components. Use card for the container, form-control for each field, input/textarea for text fields, and btn btn-primary for submit."

**Step 3: Make edits with component names**

Instead of: "Make the button green"

Write: "Change the button from btn-primary to btn-success."

Claude modifies one class instead of rewriting button styles.

## Real example: E-commerce product page

The numbers below are illustrative examples. Actual costs depend on the model and current pricing.

**Without daisyUI:**

Prompt: "Build a product page with image, title, price, description, and add-to-cart button."

Claude outputs 250+ lines. One change (add a review section) costs:
- Read 250 lines (~62K tokens)
- Output modified 300+ lines (~75K tokens)
- Total: $0.68

**With daisyUI:**

Same prompt. Claude outputs 100 lines using semantic components. One change (add a review section) costs:
- Read 100 lines (~25K tokens)
- Output modified 130 lines (~32K tokens)
- Total: $0.28

**Savings: fewer tokens per edit and lower repeated spend.**

## When Claude + daisyUI wins

This approach shines when:

- You iterate multiple times on generated UI
- You maintain complex dashboards or admin panels
- You use Claude's retrieval or agentic workflows
- Token cost is a budget concern
- You need consistent UI across many pages
- You want to hand off code to human developers

## Getting started

Read the [component library](/components/), add the component reference to your Claude prompt, and make edits by changing component classes instead of individual utilities.
