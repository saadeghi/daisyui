---
title: Use less token with Cursor
desc: Use daisyUI skill, plugin, or Blueprint MCP with Cursor to reduce repeated UI prompt context.
layout: contentLanding
keywords: use less token cursor, cursor token ui, daisyui mcp cursor
---

<script>
  import Translate from "$components/Translate.svelte"
</script>

To use less token with [Cursor](/pages/cursor-use-less-tokens/), separate design context from the task prompt. Agent Mode should receive the screen goal, file target, and states. daisyUI context can come from a skill, plugin, or MCP server.

## Why Cursor prompts expand

After weak UI output, developers add more instructions: avoid AI slop, use real components, preserve dark mode, and keep buttons consistent. A reusable daisyUI setup turns those repeated notes into context.

## Three setup paths

Skill:

```sh:Terminal
npx skills add saadeghi/daisyui --agent cursor --yes
```

Plugin: open [Cursor settings](/pages/ui-design-plugin-for-cursor/), go to Plugins, search for https://github.com/saadeghi/daisyui, choose daisyui, and click Add to Cursor.

MCP:

```json:~/.cursor/mcp.json
{
  "mcpServers": {
    "daisyui-blueprint": {
      "type": "stdio",
      "command": "npx",
      "args": ["-y", "daisyui-blueprint@latest"],
      "env": {
        "LICENSE": "YOUR BLUEPRINT LICENSE KEY",
        "EMAIL": "YOUR EMAIL ADDRESS",
        "FIGMA": "YOUR FIGMA API KEY (optional)"
      }
    }
  }
}
```

Prompt: "Create an API keys page with daisyUI skill. Use a table, warning alert, and modal for creating a key." See [skill](/docs/skill/cursor/), [plugin](/docs/plugin/cursor/), and [MCP](/docs/mcp/cursor/) guides.

## Choose the lowest-context path

If you only need occasional UI help, use the skill. If you want Cursor settings to manage the setup, use the plugin. If you generate larger screens often and want the prompt to stay short, use MCP.

The best path is the one that removes repeated instructions from daily prompts. You should not need to describe what a primary button, card, alert, or modal means every time Cursor builds a page.
