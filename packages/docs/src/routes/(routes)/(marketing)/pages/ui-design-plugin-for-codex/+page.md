---
title: UI design plugin for Codex
desc: Install the daisyUI plugin for Codex to give UI generation reusable Tailwind CSS component guidance.
layout: contentLanding
keywords: ui design plugin for codex, codex plugin ui design, daisyui plugin codex
---

<script>
  import Translate from "$components/Translate.svelte"
</script>

A UI design plugin for Codex is the installable way to add daisyUI design guidance to Codex. Codex plugins can bundle skills, app integrations, and [MCP servers](/pages/ui-design-mcp-server-for-codex/), but the key value here is the daisyUI skill packaged for reuse.

## Plugin versus project dependency

The [Codex plugin](/pages/use-less-token-codex/) does not replace installing daisyUI in your app. The app still needs daisyUI CSS if you want the classes to render. The plugin helps Codex choose the right classes while it writes UI code.

That distinction matters. One part is runtime styling. The other part is agent context.

## Better UI edits

A generated menu with daisyUI carries intent:

```html
<ul class="menu bg-base-100 rounded-box">
  <li><a>Overview</a></li>
  <li><a>Billing</a></li>
  <li><a>Team</a></li>
</ul>
```

Codex can search for menu usage and keep navigation consistent.

## Install

```sh:Terminal
codex plugin marketplace add saadeghi/daisyui --sparse .agents/plugins
codex plugin add daisyui@daisyui
```

Then prompt: "Build a customer detail page with daisyUI. Use tabs for sections, a table for invoices, and alerts for account status." Read [daisyUI plugin for Codex](/docs/plugin/codex/).
