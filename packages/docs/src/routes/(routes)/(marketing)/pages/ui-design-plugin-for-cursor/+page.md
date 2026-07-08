---
title: UI design plugin for Cursor
desc: Install the daisyUI plugin for Cursor to use daisyUI skill context while generating UI in Agent Mode.
layout: contentLanding
keywords: ui design plugin for cursor, cursor plugin ui design, daisyui plugin cursor
---

<script>
  import Translate from "$components/Translate.svelte"
</script>

A UI design plugin for Cursor keeps daisyUI guidance inside the editor workflow. Cursor plugins can bundle rules, skills, commands, [MCP servers](/pages/ui-design-mcp-server-for-cursor/), agents, and hooks. For daisyUI, the plugin gives Agent Mode access to design skill instructions.

## Why use the plugin path

A pasted prompt is temporary. A [plugin](/pages/cursor-use-less-tokens/) stays available through Cursor settings and can be managed with other project or user extensions. That is useful when you generate UI often and want one repeatable setup.

The daisyUI plugin helps Cursor avoid inventing a new mini design system on every screen. It points the agent toward component names.

## Component intent

```html
<div role="tablist" class="tabs tabs-border">
  <a role="tab" class="tab tab-active">Profile</a>
  <a role="tab" class="tab">Security</a>
</div>
```

Cursor can see this as tabs, not a random row of links.

## Install

1. Open Cursor settings with Cmd + comma.
2. Go to Plugins.
3. Search for https://github.com/saadeghi/daisyui.
4. Click daisyui.
5. Click Add to Cursor.

Then prompt with:

```md:prompt
/daisyui
```

Read [daisyUI plugin for Cursor](/docs/plugin/cursor/). Use [Blueprint MCP](/docs/mcp/cursor/) when on-demand context matters more than plugin packaging.

## When the plugin is the right fit

Use the plugin when you want Cursor to keep daisyUI guidance available across repeated sessions. This is different from a single prompt. The plugin is better for teams, frequent UI generation, or projects where several developers want the same agent behavior.

For one-off experimentation, the skill command is enough. For larger screens where Cursor needs current component details during the task, Blueprint MCP is the stronger option. The plugin sits between those two paths: simple to manage, reusable, and focused on agent guidance.
