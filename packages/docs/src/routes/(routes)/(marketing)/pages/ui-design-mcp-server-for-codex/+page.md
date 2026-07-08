---
title: UI design MCP server for Codex
desc: Use daisyUI Blueprint MCP with Codex to generate component-aware Tailwind CSS UI with less repeated prompt context.
layout: contentLanding
keywords: ui design mcp server for codex, codex mcp ui design, daisyui blueprint codex
---

<script>
  import Translate from "$components/Translate.svelte"
</script>

A [UI design MCP server for Codex](/pages/use-less-token-codex/) helps when your UI prompts keep repeating the same component guidance. Codex can inspect the repository, but it still needs reliable frontend context. Blueprint MCP supplies that context on demand.

## The repeated-token problem

Codex UI prompts often include product requirements plus a mini style guide: use accessible controls, avoid hardcoded colors, keep buttons consistent, follow Tailwind CSS, and preserve dark mode. Most of that text repeats across tasks.

With MCP, the prompt can stay shorter. You describe the screen, then tell Codex to use [Blueprint MCP](/pages/use-less-token-codex/) for daisyUI context.

## Component-aware output

daisyUI gives Codex compact class names for common UI:

```html
<div class="stats shadow-sm">
  <div class="stat">
    <div class="stat-title">Revenue</div>
    <div class="stat-value">$18.2K</div>
  </div>
</div>
```

The intent is visible, so later edits are safer.

## Install

```sh:Terminal
codex mcp add daisyui-blueprint --env LICENSE=YOUR_LICENSE_KEY --env EMAIL=YOUR_EMAIL --env FIGMA=YOUR_FIGMA_API_KEY -- npx -y daisyui-blueprint@latest
```

Then prompt: "Create a product analytics dashboard with daisyUI. use Blueprint MCP". Read [daisyUI MCP for Codex](/docs/mcp/codex/). Use [daisyUI skill for Codex](/docs/skill/codex/) for the free static setup.
