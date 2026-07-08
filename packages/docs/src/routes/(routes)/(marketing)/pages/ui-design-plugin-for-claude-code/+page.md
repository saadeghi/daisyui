---
title: UI design plugin for Claude Code
desc: Install the daisyUI plugin for Claude Code to package UI design skill context into a reusable workflow.
layout: contentLanding
keywords: ui design plugin for claude code, claude code plugin ui design, daisyui plugin claude code
---

<script>
  import Translate from "$components/Translate.svelte"
</script>

A UI design [plugin](/pages/claude-code-frontend-design-plugin/) for Claude Code packages reusable design guidance so it can travel across projects and machines. A standalone skill is useful. A plugin is the distribution format when you want an installable bundle.

## What changes with a plugin

Claude Code plugins can contain skills, agents, hooks, and [MCP servers](/pages/ui-design-mcp-server-for-claude-code/). Plugin skills are namespaced, which avoids conflicts with personal or project skills. For daisyUI, the plugin gives Claude Code the latest daisyUI skill through the plugin system.

That means Claude can learn how to use daisyUI component classes when you ask it to build UI. It does not install CSS into your web app. It improves the agent's instructions.

## Why this helps generated design

Claude can use named actions instead of inventing controls:

```html
<a class="btn btn-primary" href="/checkout/">Start trial</a>
<a class="btn btn-ghost" href="/docs/">Read docs</a>
```

Primary and secondary actions remain visible in the markup.

## Install

```sh:Terminal
claude plugin marketplace add saadeghi/daisyui
claude plugin install daisyui@daisyui
```

After installation, start a new Claude Code session and prompt: "Create a landing page hero and pricing section with daisyUI." See [daisyUI plugin for Claude Code](/docs/plugin/claude-code/). If you already use [Blueprint MCP](/blueprint/), you do not need the plugin for daisyUI context.
