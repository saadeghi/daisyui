---
title: "Blueprint MCP new update - Introducing the six-step UI workflow"
desc: Blueprint MCP 1.5 comes with six required steps, to help coding agents follow instructions, use fewer tokens, avoid generic UI, and catch UI problems before calling a page finished.
published: true
date: 2026-07-21
author: Pouya Saadeghi
thumbnail: https://img.daisyui.com/images/blog/blueprint-1-5.webp
tags:
  - News
---

<script>
  import Translate from "$components/Translate.svelte"
</script>

<div class="flex flex-wrap items-center justify-center gap-2">
  <img src="https://img.daisyui.com/images/emoji/1280_mage_1f9d9.png" alt="Setup Expert" class="size-10 lg:size-16 object-contain" width="40" height="40" />
  <img src="https://img.daisyui.com/images/emoji/1040_woman-police-officer_1f46e-200d-2640-fe0f.png" alt="Rules Enforcer" class="size-10 lg:size-16 object-contain" width="40" height="40" />
  <img src="https://img.daisyui.com/images/emoji/0960_artist_1f9d1-200d-1f3a8.png" alt="Creative Director" class="size-10 lg:size-16 object-contain" width="40" height="40" />
  <img src="https://img.daisyui.com/images/emoji/0800_woman-teacher_1f469-200d-1f3eb.png" alt="Page Architect" class="size-10 lg:size-16 object-contain" width="40" height="40" />
  <img src="https://img.daisyui.com/images/emoji/0880_technologist_1f9d1-200d-1f4bb.png" alt="Component Syntax Expert" class="size-10 lg:size-16 object-contain" width="40" height="40" />
  <img src="https://img.daisyui.com/images/emoji/1040_detective_1f575-fe0f.png" alt="Quality Inspector" class="size-10 lg:size-16 object-contain" width="40" height="40" />
</div>

--- 

## The UI design fast fashion is doomed

AI can design a page and out of context, you can call it good enough. Until you realize the same UI with the same layout is being generated for everyone else at the same time!

Without any custom instructions, AI creates generic UI. The same hero section, same cards, the same gradient, same missing states, and a pile of classes that almost looks right.

Why?  
Because models are trained on the same exact designs we can find on Dribbble. And when the models get good at a design, they repeat those same UI patterns over and over. For every project, and for every user around the world. This is the reason every UI trend nowadays is going out of fashion so fast.

## The revision loop is not helping much, if you're not a designer

Now you have to customize it to make it look less like an ...AI slop. You ask for changes. You waste more time, the agent burns even more tokens, forgets an earlier instruction, fixes one problem, and creates a new one.

That revision loop is where it wastes all the time and effort. Especially for the engineers with less design experience.

## Agents skip, forget or ignore the instructions when it's too much

Installing different agent skills sound good until you start reading the LLM logs and realizing how much the LLM ignores or forgets the rules and instructions.

You can put all the rules in an `AGENTS.md` file. You can install a carefully written skill. You can squeeze your design system, accessibility checklist, product brief, and preferred style into one big prompt.

More context = more likely for the LLM to partially ignore them and go back to factory settings!

That happens because we're asking the model to do too many jobs at once. It has to understand the repo, remember every constraint, choose a visual direction, plan the page, recall component syntax, write the code, and judge its own work. The easier instructions work. The difficult instructions quietly fall out of context.

## What if we control the flow of providing the instructions to the LLM?

[Blueprint MCP 1.5](/blueprint/) improves the whole loop of UI design with a six-step UI workflow. It gives your coding agent the right context at the right time. Step by step. Blueprint MCP supplies creative directions, page context, rules and code snippets. Finally inspects the result to validate the design quality.

<div class="flex flex-wrap items-center justify-center gap-2">
  <img src="https://img.daisyui.com/images/emoji/1280_mage_1f9d9.png" alt="Setup Expert" class="size-10 lg:size-16 object-contain" width="40" height="40" />
  <img src="https://img.daisyui.com/images/emoji/1040_woman-police-officer_1f46e-200d-2640-fe0f.png" alt="Rules Enforcer" class="size-10 lg:size-16 object-contain" width="40" height="40" />
  <img src="https://img.daisyui.com/images/emoji/0960_artist_1f9d1-200d-1f3a8.png" alt="Creative Director" class="size-10 lg:size-16 object-contain" width="40" height="40" />
  <img src="https://img.daisyui.com/images/emoji/0800_woman-teacher_1f469-200d-1f3eb.png" alt="Page Architect" class="size-10 lg:size-16 object-contain" width="40" height="40" />
  <img src="https://img.daisyui.com/images/emoji/0880_technologist_1f9d1-200d-1f4bb.png" alt="Component Syntax Expert" class="size-10 lg:size-16 object-contain" width="40" height="40" />
  <img src="https://img.daisyui.com/images/emoji/1040_detective_1f575-fe0f.png" alt="Quality Inspector" class="size-10 lg:size-16 object-contain" width="40" height="40" />
</div>

## No prompt engineering needed.

You can ask for a complete UI without writing an article:

```md:prompt
Make a landingpage for my food tracking app.  
Use Blueprint MCP.
```

Now six expert tools will guide the agent from 0 to 100:

### 1. How to install and config

<img src="https://img.daisyui.com/images/emoji/1280_mage_1f9d9.png" alt="Setup Expert" class="lg:ms-4 my-4 block size-48 rounded-box border border-base-300 bg-base-200 p-8 lg:float-end lg:rotate-2" width="192" height="192" loading="lazy" />

The [Setup Expert](/blueprint/workflow/#1-setup-expert) MCP tool checks the framework, dependencies, Tailwind CSS configuration, daisyUI setup, themes, colors, fonts, icons, and file structure.

This prevents a common first mistake: the agent guesses how the project works. It starts with the repo you have instead of adding conflicting configuration, replacing your theme, or following patterns from another setup.

### 2. The rules that cannot be skipped

<img src="https://img.daisyui.com/images/emoji/1040_woman-police-officer_1f46e-200d-2640-fe0f.png" alt="Rules Enforcer" class="lg:ms-4 my-4 block size-48 rounded-box border border-base-300 bg-base-200 p-8 lg:float-end lg:-rotate-2" width="192" height="192" loading="lazy" />

The [Rules Enforcer](/blueprint/workflow/#2-rules-enforcer) MCP tool explains all the rules for UI principles, component syntax, accessibility, responsive behavior, themes, media, content and code quality.

A long skill file is easy to ignore when coding has already started. Blueprint makes the rules their own required step and confirms the agent understood them before the workflow moves on. The instructions become part of the process, instead of a suggested resource the model can silently ignore.

### 3. Taste, creativity, and originality

<img src="https://img.daisyui.com/images/emoji/0960_artist_1f9d1-200d-1f3a8.png" alt="Creative Director" class="lg:ms-4 my-4 block size-48 rounded-box border border-base-300 bg-base-200 p-8 lg:float-end lg:rotate-2" width="192" height="192" loading="lazy" />

The [Creative Director](/blueprint/workflow/#3-creative-director) MCP tool connects the product, audience, content, typography, color, imagery, composition, and motion into one direction. Creative director guides the LLM about creativity and authenticity. It introduces design principles that your agent is not allowed ignore.

This is prevents a generic UI. Blueprint understands the direction from the product and its context, then carries that idea through the page.

### 4. Plan the page context, layout and structure

<img src="https://img.daisyui.com/images/emoji/0800_woman-teacher_1f469-200d-1f3eb.png" alt="Page Architect" class="lg:ms-4 my-4 block size-48 rounded-box border border-base-300 bg-base-200 p-8 lg:float-end lg:-rotate-2" width="192" height="192" loading="lazy" />

The [Page Architect](/blueprint/workflow/#4-page-architect) MCP tool chooses from 211 page architectures. Each page architecture covers a specific UI's purpose, sections, content hierarchy, actions, navigation, behavior, interaction states, and edge cases.

Without a plan, agents tend to improvise one section at a time. That produces pages made of individually plausible blocks without a flow. The Page Architect MCP tool gives the agent a complete route through the page and includes the components where it's needed.

### 5. The accurate code syntax

<img src="https://img.daisyui.com/images/emoji/0880_technologist_1f9d1-200d-1f4bb.png" alt="Component Syntax Expert" class="lg:ms-4 my-4 block size-48 rounded-box border border-base-300 bg-base-200 p-8 lg:float-end lg:rotate-2" width="192" height="192" loading="lazy" />

This was the only tool Blueprint MCP had before version 1.5 update.

The [Component Syntax Expert](/blueprint/workflow/#5-component-syntax-expert) MCP tool provides the accurate code syntax, class names, variants, modifiers, snippets, and examples.

The agent does not need to load the entire documentation or guess from an outdated training data. It receives the correct and updated syntax for the components, when it needs them. No more guesses!

### 6. Quality check

<img src="https://img.daisyui.com/images/emoji/1040_detective_1f575-fe0f.png" alt="Quality Inspector" class="lg:ms-4 my-4 block size-48 rounded-box border border-base-300 bg-base-200 p-8 lg:float-end lg:-rotate-2" width="192" height="192" loading="lazy" />

The [Quality Inspector](/blueprint/workflow/#6-quality-inspector) MCP tool reviews the code for UI mistakes, visual hierarchy, class names misuse, accessibility, responsive behavior, theme colors, and missing states.

This tool compares the generated code agains the previously introduced rules and instructions. Prevents the LLM from ignoring the rules and if there's visual problem, the LLM is forced to go back and fix it.

## This is where the time and tokens come back

Without Blueprint MCP, UI iteration were something like: "It doesn't look good. Try something else." And the LLM can't help much without an exact instruction.

Blueprint makes the important decisions before code generation and checks the result afterward. You spend fewer turns reminding the agent about ignored requirements. You also avoid loading every rule, page pattern, and component example into every prompt. Each stage requests the context it needs, when it needs it. A solid workflow.

You can still change the result. The difference is that your feedback can be about the product and the content, instead of trying to fix the Slop design.

## See how it works

You may not believe this:  
A prompt less than 7 words generates this unique design, made with daisyUI

<div class="not-prose my-8 aspect-video overflow-hidden rounded-box border border-base-300 bg-base-200">
  <iframe
    class="h-full w-full"
    src="https://www.youtube.com/embed/Z70rWqKRitI?autoplay=0&controls=1&rel=0&modestbranding=1"
    title="Make a profile settings UI with agents - Blueprint MCP v1.5"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    loading="lazy"
    allowfullscreen
  ></iframe>
</div>

Watch [more videos here →](/blueprint/#demos)

## Use Blueprint 1.5 with your own coding agent

Blueprint MCP works with Claude Code, Codex, Grok Build, VS Code Copilot, Cursor, OpenCode, Antigravity, etc. Install the MCP server for your agent, add your license key, then mention Blueprint in your prompt.

<div class="flex flex-wrap items-center justify-between gap-4">
  <img class="size-10" src="https://img.daisyui.com/images/logos/claude-code.svg" alt="Claude Code" width="36" height="36">
  <img class="size-10" src="https://img.daisyui.com/images/logos/codex.svg" alt="Codex" width="36" height="36">
  <img class="size-10" src="https://img.daisyui.com/images/logos/copilot.svg" alt="VS Code Copilot" width="36" height="36">
  <img class="size-10" src="https://img.daisyui.com/images/logos/cursor.svg" alt="Cursor" width="36" height="36">
  <img class="size-10" src="https://img.daisyui.com/images/logos/opencode.svg" alt="OpenCode" width="36" height="36">
  <img class="size-10" src="https://img.daisyui.com/images/logos/grok.svg" alt="Grok Build" width="36" height="36">
  <img class="size-10" src="https://img.daisyui.com/images/logos/antigravity.svg" alt="Antigravity" width="36" height="36">
</div>

Visit the [Blueprint MCP page](/blueprint/) to see generated UI examples. Read [Blueprint MCP installation guides here](/blueprint/cursor/). You can also find [Blueprint v1.5 changelog here](/blueprint/changelog/).
