---
title: Use less token with Codex
desc: Use daisyUI skill or Blueprint MCP with Codex to reduce repeated UI context while generating Tailwind CSS screens.
layout: contentLanding
keywords: use less token codex, codex token ui, daisyui mcp codex
---

<script>
  import Translate from "$components/Translate.svelte"
</script>

To use less token with Codex, stop writing a design manual inside every UI prompt. Put [reusable daisyUI guidance](/pages/ui-design-plugin-for-codex/) in a skill or MCP server, then keep prompts focused on the feature.

## Why this works

Codex skills use progressive disclosure. Codex sees skill metadata first and reads full instructions only when needed. [Blueprint MCP](/pages/ui-design-mcp-server-for-codex/) gives another option: fetch daisyUI details during the task.

## Skill setup

```sh:Terminal
npx skills add saadeghi/daisyui --agent codex --yes
```

Prompt: "Build a settings sidebar with daisyUI skill. Include account, billing, and security sections."

## MCP setup

```sh:Terminal
codex mcp add daisyui-blueprint --env LICENSE=YOUR_LICENSE_KEY --env EMAIL=YOUR_EMAIL --env FIGMA=YOUR_FIGMA_API_KEY -- npx -y daisyui-blueprint@latest
```

Prompt: "Generate a metrics dashboard with daisyUI. use Blueprint MCP"

Use [daisyUI skill for Codex](/docs/skill/codex/) for free rules and [daisyUI MCP for Codex](/docs/mcp/codex/) for on-demand context.

## What to remove from prompts

After installing the skill or MCP server, remove repeated low-level design rules from your [Codex prompts](/pages/ui-design-skill-for-codex/). Do not restate every button, radius, color, and theme instruction. Put those in daisyUI context.

Keep the prompt focused on what changes from task to task: page goal, user flow, data states, and file boundaries. That leaves more context for Codex to understand the repository and less noise for the model to reconcile.
