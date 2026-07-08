---
title: Codex free design skill
desc: Install the free daisyUI design skill for Codex to generate cleaner Tailwind CSS UI with reusable component context.
layout: contentLanding
keywords: codex free design skill, free codex skill, daisyui codex skill
---

<script>
  import Translate from "$components/Translate.svelte"
</script>

A Codex free design skill is the easiest way to give Codex UI guidance without setting up an [MCP server](/pages/ui-design-mcp-server-for-codex/). It is useful when your prompts repeat the same Tailwind CSS component rules.

## Why use the free skill

Codex needs context to avoid inconsistent UI. The daisyUI skill supplies a small design vocabulary for common screens: [dashboards](/pages/generate-ui-with-codex/), settings pages, tables, alerts, forms, and modals.

## Example output target

```html
<table class="table">
  <thead>
    <tr>
      <th>User</th>
      <th>Role</th>
      <th>Status</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Ada</td>
      <td>Admin</td>
      <td><span class="badge">Active</span></td>
    </tr>
  </tbody>
</table>
```

Codex can revise this as a table instead of restyling every cell.

## Install

```sh:Terminal
npx skills add saadeghi/daisyui --agent codex --yes
```

Prompt: "Create an admin user table with daisyUI skill. Use badges for status and btn-ghost for row actions." See [daisyUI skill for Codex](/docs/skill/codex/).

## How to get better Codex output

Do not ask Codex for a beautiful page without naming the interface parts. The free skill gives Codex the daisyUI reference, but your prompt still needs product structure. Name the screen, the data, and the components you expect.

For example, a billing page prompt should mention plan summary, invoice table, payment alert, and primary action. Codex can then map those ideas to daisyUI classes instead of inventing fresh styling for every block.
