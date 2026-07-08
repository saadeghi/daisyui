---
title: How to design UI with Cursor
desc: Design UI with Cursor Agent Mode using daisyUI skill, plugin, or MCP context for cleaner Tailwind CSS output.
layout: contentLanding
keywords: how to design ui with cursor, cursor ui design, daisyui cursor
---

<script>
  import Translate from "$components/Translate.svelte"
</script>

To design UI with [Cursor](/pages/cursor-frontend-skill/), give Agent Mode a precise screen request and a reusable component source. Cursor can edit quickly, but the prompt still needs a design system.

## Write the UI as parts

Name the page and the components: navbar, drawer, cards, table, alerts, modal, tabs, inputs, and buttons. This keeps Cursor from turning every visual choice into custom utility chains.

## Choose a setup

Free skill:

```sh:Terminal
npx skills add saadeghi/daisyui --agent cursor --yes
```

Plugin: open Cursor settings, go to Plugins, search for https://github.com/saadeghi/daisyui, choose daisyui, and click Add to Cursor.

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

## Prompt example

```md:prompt
Design a CRM contact page with daisyUI. Use tabs for overview and activity, badges for lifecycle stage, a table for deals, and a modal for notes.
```

See [skill](/docs/skill/cursor/), [plugin](/docs/plugin/cursor/), and [MCP](/docs/mcp/cursor/) setup guides.

## Keep Cursor grounded in the repo

Ask Cursor to inspect nearby UI before generating a new screen. Then tell it to prefer [daisyUI components](/pages/ui-design-skill-for-cursor/) for repeated controls. This avoids a common failure: a new page that looks isolated from the rest of the app.

When the first draft lands, use a focused follow-up: "Keep the layout, but replace custom controls with daisyUI components and preserve existing routes." That keeps the edit narrow.
