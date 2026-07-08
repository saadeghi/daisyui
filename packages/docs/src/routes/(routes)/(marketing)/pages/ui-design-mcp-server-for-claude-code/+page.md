---
title: UI design MCP server for Claude Code
desc: Use daisyUI Blueprint MCP with Claude Code to fetch Tailwind CSS component context while generating UI.
layout: contentLanding
keywords: ui design mcp server for claude code, claude code mcp ui design, daisyui blueprint claude code
---

<script>
  import Translate from "$components/Translate.svelte"
</script>

A UI design [MCP server for Claude Code](/pages/use-less-token-claude-code/) is the better choice when static skill instructions are not enough. MCP lets Claude Code receive targeted daisyUI context during the task, instead of carrying every component rule inside the prompt.

## Why MCP fits UI work

MCP, the Model Context Protocol, connects an agent to external tools and resources. For interface generation, that means Claude can ask for the relevant daisyUI component information when the prompt mentions a drawer, modal, table, theme, or dashboard.

This keeps prompts focused on product requirements. Claude spends less attention on remembering rules and more attention on the screen structure, states, and code integration.

## Why Blueprint

[Blueprint](/pages/use-less-token-claude-code/) is the official daisyUI MCP server. Use it for production UI tasks where you want current daisyUI snippets and design context. It helps Claude avoid low-quality generated markup by grounding the output in real component patterns.

```md:prompt
Build a SaaS billing screen with daisyUI. use Blueprint MCP
```

## Install

```sh:Terminal
claude mcp add daisyui-blueprint --env LICENSE=YOUR_LICENSE_KEY --env EMAIL=YOUR_EMAIL --env FIGMA=YOUR_FIGMA_API_KEY -- npx -y daisyui-blueprint@latest
```

FIGMA is optional and only needed for Figma-to-code conversion. Read [daisyUI MCP for Claude Code](/docs/mcp/claudecode/). Use the [Claude Code skill](/docs/skill/claude-code/) for free static guidance.
