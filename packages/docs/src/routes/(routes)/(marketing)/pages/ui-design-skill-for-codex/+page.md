---
title: UI design skill for Codex
desc: Use the daisyUI skill in Codex to give UI generation a reusable Tailwind CSS component vocabulary.
layout: contentLanding
keywords: ui design skill for codex, codex design skill, daisyui skill codex
---

<script>
  import Translate from "$components/Translate.svelte"
</script>

A UI design skill for Codex gives the agent a compact design system before it edits frontend files. [Codex skills](/pages/best-free-component-library-for-codex/) use progressive disclosure, so Codex can start with the skill name and description, then read the full SKILL.md only when the UI task needs it.

## The Codex design problem

Codex is good at working inside a [repository](/pages/ai-frontend-code-generation/), but utility-only Tailwind CSS can hide intent. A long class list may be a primary button, a filter chip, or a one-off patch. Codex has to infer meaning before it can edit safely.

A daisyUI skill reduces that guesswork. It tells Codex which component classes represent repeated UI parts and when Tailwind utilities should handle layout.

## What the skill improves

With daisyUI, generated markup uses names a reviewer can understand:

```html
<div class="join">
  <input class="input join-item" placeholder="Search projects" />
  <button class="btn btn-primary join-item">Search</button>
</div>
```

The classes stay portable across React, Vue, Svelte, Astro, Rails, Laravel, and plain HTML because daisyUI adds CSS classes rather than framework components.

## Install

```sh:Terminal
npx skills add saadeghi/daisyui --agent codex --yes
```

Use a prompt like: "Build a project dashboard with daisyUI skill. Use stats for metrics, a table for activity, and btn-primary for the main action." Full guide: [daisyUI skill for Codex](/docs/skill/codex/).
