---
title: UI design MCP server for Cursor
desc: Use daisyUI Blueprint MCP in Cursor to generate UI with on-demand Tailwind CSS component context.
layout: contentLanding
keywords: ui design mcp server for cursor, cursor mcp ui design, daisyui blueprint cursor
---

<script>
  import Translate from "$components/Translate.svelte"
</script>

A [UI design MCP server for Cursor](/pages/use-less-token-cursor/) gives Agent Mode a focused source of daisyUI context. Instead of pasting component rules into every request, Cursor can connect to Blueprint MCP and fetch the details it needs while building the screen.

## Why Cursor benefits

Cursor works inside the editor, so it can move quickly from prompt to code. Speed is not enough when the repo contains mixed UI patterns. The agent needs a source of truth for components, themes, and repeated layout parts.

[Blueprint MCP](/pages/use-less-token-cursor/) separates the screen request from the design reference. You describe the admin layout, checkout flow, or dashboard. The MCP server provides daisyUI component context.

## Example target

```html
<div class="drawer lg:drawer-open">
  <input id="nav" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content">Dashboard content</div>
  <aside class="drawer-side">Navigation</aside>
</div>
```

A named drawer is easier for Cursor to revise than a hand-built sidebar.

## Install

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

Set LICENSE, EMAIL, and optional FIGMA values. Then prompt: "Build a responsive admin layout with daisyUI. use Blueprint MCP". Read [daisyUI MCP for Cursor](/docs/mcp/cursor/).
