---
title: "Make unique UI with agents"
desc: When the agent is in charge of creative direction, it will generate the same exact UI for everyone. Now that all websites are looking similar, how can we make a unique UI?
published: true
date: 2026-08-03
author: Pouya Saadeghi
thumbnail: https://img.daisyui.com/images/blog/desing-unique-ui-with-ai.webp
tags:
  - Insights
---

<script>
  import Translate from "$components/Translate.svelte"
</script>

A short prompt should be enough:

```text
Create a dashboard UI for my app.
Use Blueprint MCP.
```

Without Blueprint, this leaves every design decision to the LLM. The model falls back to patterns it already knows: a centered hero, a gradient, three cards, and the same layout it generates for everyone else.

To prevent that, the user must describe the page structure, content hierarchy, layout, creative direction, fonts, icons, colors, design tokens, components, responsive behavior, and accessibility rules. The prompt becomes a complete design specification.

That is prompt engineering. Not everyone wants to do it, and not everyone is good at it.

## Why skills and instruction files get skipped

Skills, reference files, and `AGENTS.md` files are useful, but they do not control the agent's workflow. The LLM decides which file to open, how much of it to read, what is relevant, and what can be skipped.

As the instructions grow, setup rules, design principles, component docs, accessibility requirements, and examples all compete for attention. The model may skim a file, read only part of it, or decide it already has enough information. The instructions exist, but following them is optional from the model's point of view.

A large prompt has the same problem. It puts everything into context, but it does not enforce an order. The agent can start coding before it chooses a creative direction or plans the page. It can also review its own output without checking the requirements it ignored.

## MCP controls the workflow

[Blueprint MCP](/blueprint/) turns the design process into a sequence of required tool calls. The tools share a workflow ID, each step receives the decisions from earlier steps, and the server tells the agent which tool must run next. The agent cannot jump directly from the request to code or skip the final inspection.

The [six-step workflow](/blueprint/workflow/) covers the complete UI process:

<div class="flex flex-wrap items-center justify-center gap-2">
  <img src="https://img.daisyui.com/images/emoji/1280_mage_1f9d9.png" alt="Setup Expert" class="size-10 lg:size-16 object-contain" width="40" height="40" />
  <img src="https://img.daisyui.com/images/emoji/1040_woman-police-officer_1f46e-200d-2640-fe0f.png" alt="Rules Enforcer" class="size-10 lg:size-16 object-contain" width="40" height="40" />
  <img src="https://img.daisyui.com/images/emoji/0960_artist_1f9d1-200d-1f3a8.png" alt="Creative Director" class="size-10 lg:size-16 object-contain" width="40" height="40" />
  <img src="https://img.daisyui.com/images/emoji/0800_woman-teacher_1f469-200d-1f3eb.png" alt="Page Architect" class="size-10 lg:size-16 object-contain" width="40" height="40" />
  <img src="https://img.daisyui.com/images/emoji/0880_technologist_1f9d1-200d-1f4bb.png" alt="Component Syntax Expert" class="size-10 lg:size-16 object-contain" width="40" height="40" />
  <img src="https://img.daisyui.com/images/emoji/1040_detective_1f575-fe0f.png" alt="Quality Inspector" class="size-10 lg:size-16 object-contain" width="40" height="40" />
</div>

1. **Setup Expert** reads the project and defines the correct framework setup, themes, colors, fonts, icons, and design tokens.
2. **Rules Enforcer** provides the requirements for component code, responsive behavior, themes, accessibility, media, and quality.
3. **Creative Director** chooses a coherent direction based on the product, audience, and content. It controls typography, color, composition, imagery, and motion instead of asking the LLM to "be creative."
4. **Page Architect** selects a matching page architecture and defines the sections, hierarchy, layout, actions, states, edge cases, and required components.
5. **Component Syntax Expert** supplies the current daisyUI classes, variants, and examples for only those components.
6. **Quality Inspector** checks the generated source against the earlier rules and decisions. If it finds problems, the workflow requires the agent to fix them.

The LLM still writes the code. Blueprint controls the creative decisions, the context provided at each stage, and the checkpoints around the code.

This also solves the size problem of skill files. Instead of loading a large design manual and hoping the model reads it, Blueprint provides a small, relevant set of instructions at the exact step where they apply. Page architecture arrives before implementation. Component syntax arrives after the components are known. Inspection happens after the code exists.

## Why the result is different

Blueprint does not make a UI unique by adding random decoration. It locks in a direction before code generation, then connects that direction to the page architecture, typography, design tokens, components, and content.

A server dashboard using a dense technical direction should not look like a food app using claymorphism, even if both use daisyUI. The difference comes from deliberate decisions made for each product, not from the LLM's default landing page.

<div class="not-prose my-8 grid gap-4 sm:grid-cols-2">
  <figure class="overflow-hidden rounded-box border border-base-300 bg-base-200">
    <a href="https://img.daisyui.com/images/blueprint/lg/front-end-skill.png" target="_blank" rel="noopener noreferrer">
      <img src="https://img.daisyui.com/images/blueprint/sm/front-end-skill.avif" alt="Retro-futurist server management dashboard generated with Blueprint MCP" class="aspect-video w-full object-cover object-top" loading="lazy" />
    </a>
    <figcaption class="p-4 text-sm text-base-content/70">A retro-futurist server management dashboard</figcaption>
  </figure>
  <figure class="overflow-hidden rounded-box border border-base-300 bg-base-200">
    <a href="https://img.daisyui.com/images/blueprint/lg/ai-site-maker.png" target="_blank" rel="noopener noreferrer">
      <img src="https://img.daisyui.com/images/blueprint/sm/ai-site-maker.avif" alt="Cute cafe landing page generated with Blueprint MCP" class="aspect-video w-full object-cover object-top" loading="lazy" />
    </a>
    <figcaption class="p-4 text-sm text-base-content/70">A playful landing page for a cafe</figcaption>
  </figure>
</div>

The short prompt works because the workflow contains the detailed instructions. For the design process, no prompt engineering is needed. You can still provide product facts or preferences, but you do not need to specify every section, token, font, icon, component, or quality rule yourself.

That is the practical difference between giving an agent more instructions and using an MCP server that makes the agent follow them.

See the [Blueprint workflow](/blueprint/workflow/) or follow the setup guide for [Codex](/blueprint/codex/), [Claude Code](/blueprint/claudecode/), or [Cursor](/blueprint/cursor/).
