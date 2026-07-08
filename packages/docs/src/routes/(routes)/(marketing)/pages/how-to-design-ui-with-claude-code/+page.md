---
title: How to design UI with Claude Code
desc: Design UI with Claude Code using daisyUI skill or Blueprint MCP for component-aware Tailwind CSS generation.
layout: contentLanding
keywords: how to design ui with claude code, claude code ui design, daisyui claude code
---

<script>
  import Translate from "$components/Translate.svelte"
</script>

To design UI with [Claude Code](/pages/claude-code-free-design-skill/), give Claude a screen goal and a component system. Do not ask for a vague "clean page" and expect consistent design decisions.

## Step 1: write a product brief

Name the page, the user goal, and the states. For example: billing settings with current plan, invoice list, failed payment alert, and cancellation flow.

## Step 2: add daisyUI context

For free static guidance, install the skill:

```sh:Terminal
npx skills add saadeghi/daisyui --agent claude-code --yes
```

For on-demand [component context](/pages/ui-design-mcp-server-for-claude-code/), install Blueprint MCP:

```sh:Terminal
claude mcp add daisyui-blueprint --env LICENSE=YOUR_LICENSE_KEY --env EMAIL=YOUR_EMAIL --env FIGMA=YOUR_FIGMA_API_KEY -- npx -y daisyui-blueprint@latest
```

FIGMA is optional unless you need Figma-to-code conversion.

## Step 3: prompt with components

```md:prompt
Design a customer support inbox with daisyUI skill. Use a drawer for navigation, cards for conversation previews, badges for priority, and a modal for assigning a ticket.
```

Read [daisyUI skill for Claude Code](/docs/skill/claude-code/) and [daisyUI MCP for Claude Code](/docs/mcp/claudecode/).

## Review the first pass

After Claude Code writes the UI, check whether repeated parts use daisyUI classes. If a screen has custom utility-only buttons next to daisyUI buttons, ask Claude to normalize the actions. If it hardcodes colors, ask it to use daisyUI semantic colors.

This review loop is short, but it matters. It turns the first generated draft into a reusable pattern for the next Claude Code edit.
