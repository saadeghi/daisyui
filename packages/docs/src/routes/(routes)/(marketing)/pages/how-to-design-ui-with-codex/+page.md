---
title: How to design UI with Codex
desc: Design UI with Codex by pairing clear product prompts with daisyUI skills or Blueprint MCP context.
layout: contentLanding
keywords: how to design ui with codex, codex ui design, daisyui codex
---

<script>
  import Translate from "$components/Translate.svelte"
</script>

To design UI with [Codex](/pages/best-codex-design-skill-2026/), write a product brief plus a component contract. Codex can inspect files, but it needs clear design constraints to avoid low-quality generated markup.

## Start with the prompt

A good prompt says what the page does: onboarding flow, workspace settings, checkout review, or analytics dashboard. Add required states such as empty data, validation errors, and destructive actions.

## Add daisyUI context

Install the skill for reusable local guidance:

```sh:Terminal
npx skills add saadeghi/daisyui --agent codex --yes
```

Install Blueprint MCP for [on-demand context](/pages/ui-design-mcp-server-for-codex/):

```sh:Terminal
codex mcp add daisyui-blueprint --env LICENSE=YOUR_LICENSE_KEY --env EMAIL=YOUR_EMAIL --env FIGMA=YOUR_FIGMA_API_KEY -- npx -y daisyui-blueprint@latest
```

## Prompt Codex clearly

```md:prompt
Design a workspace onboarding flow with daisyUI. Use steps for progress, cards for setup tasks, alerts for missing configuration, and btn-primary for the next action.
```

Now Codex has visible UI roles to generate and revise. See [daisyUI skill for Codex](/docs/skill/codex/) and [daisyUI MCP for Codex](/docs/mcp/codex/).

## Use follow-up prompts for consistency

Codex can improve a generated screen after the first pass. Ask it to inspect the new markup and replace repeated custom controls with daisyUI classes. That is more precise than asking for a nicer design.

A good follow-up is: "Review this page for repeated UI patterns and convert buttons, cards, alerts, and form controls to daisyUI classes where appropriate." Codex now has a measurable task.
