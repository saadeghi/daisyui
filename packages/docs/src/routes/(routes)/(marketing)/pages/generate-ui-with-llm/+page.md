---
title: Generate UI with LLM
desc: Generate UI with LLM tools faster by using daisyUI component classes that cut token use and keep generated UI maintainable.
layout: contentLanding
keywords: generate ui with llm, llm ui generation, llm frontend workflow, ai ui from llm, llm generated frontend code
---

<script>
  import Translate from "$components/Translate.svelte"
</script>

## The problem: LLM UI generation slows down over time

LLM-generated UI starts fast, then slows as the codebase fills with verbose markup. The model has to read too much just to make small changes.

More markup means more tokens, slower prompts, and less room for useful output.

What if instead of 3,000 lines of styling, you gave it 500 lines of semantic markup?

```html
Before: Component with 25 Tailwind classes
<div class="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md border border-gray-200 dark:bg-gray-800 dark:border-gray-700 hover:shadow-lg transition-shadow duration-200">
  <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">Title</h3>
  <p class="text-sm text-gray-600 dark:text-gray-300 mb-4">Description</p>
  <div class="flex gap-2">
    <button class="px-3 py-1.5 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors text-sm">Action</button>
  </div>
</div>

After: Component with semantic classes
<div class="card">
  <div class="card-body">
    <h3 class="card-title">Title</h3>
    <p>Description</p>
    <div class="card-actions">
      <button class="btn btn-primary">Action</button>
    </div>
  </div>
</div>
```

Same component. Far fewer tokens. Same visual output.

## The solution: daisyUI + LLM for steady generation

Semantic components reduce repeated token use from verbose markup.

**1. Token savings add up**

The savings repeat on every page and every edit.

**2. Context window breathing room**

Smaller components leave more room for new requests and larger outputs.

**3. Better understanding through semantics**

When the LLM reads `.card` instead of 25 utility classes, it understands faster.

With daisyUI, a 20-page dashboard keeps the same structure but uses far fewer tokens and less time.

## How to structure LLM UI generation

**Step 1: Give the model official daisyUI context**

Use one of the official sources:

- Add `https://daisyui.com/llms.txt` to your prompt context.
- Or use the official Blueprint MCP server.

This keeps generated code aligned with current daisyUI class names and patterns.

**Step 2: Generate with semantic prompts**

Instead of: "Build a dashboard"

Write: "Build a dashboard using daisyUI components. Use hero for the header, card for stat boxes, and table for the data grid."

**Step 3: Iterate on structure, not styling**

Ask the LLM to modify layout, sections, text, or component placement. Keep styling changes in the theme or CSS.

## Real example: E-commerce site with LLM

The numbers below are illustrative examples. Actual costs depend on the model and current pricing.

Across multiple product pages, daisyUI keeps the pattern stable and the token use much lower.

## When LLM + daisyUI generates value

This approach shines when:

- You generate many pages from the same codebase
- You iterate heavily on features
- Token cost is a constraint
- You need consistent UI across the product
- Processing speed matters
- You're building with agent workflows

## Getting started

Install [daisyUI components](/components/), include the reference in your prompt, and keep styling changes in the theme.
