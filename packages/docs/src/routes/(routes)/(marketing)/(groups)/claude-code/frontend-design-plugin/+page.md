---
title: Claude Code frontend design plugin
desc: Install the daisyUI plugin for Claude Code to give frontend design tasks reusable daisyUI skill context.
layout: contentLanding
keywords: claude code frontend design plugin, claude code design plugin, daisyui plugin claude code
---

<script>
  import Translate from "$components/Translate.svelte"
</script>

The daisyUI plugin for Claude Code packages instructions for using daisyUI components and themes in a coding task. [Set up the daisyUI plugin for Claude Code](/docs/plugin/claude-code/) to make that guidance available in your project.

This page covers the daisyUI package. The [Anthropic Frontend Design plugin](https://claude.com/plugins/frontend-design) is a separate product.

## What Claude Code is

Claude Code is Anthropic's coding agent for working with project files. It can use skills for repeated workflows. A plugin packages capabilities for distribution, while an MCP server supplies tools or resources through a separate connection.

## Why a plugin helps frontend design

Reusable instructions give a task a component system, theme rules, and reference guides. They make those decisions available without repeating the whole guide in each prompt.

Claude Code plugin skills use a namespace to separate command names. Namespaces do not guarantee that instructions from several skills agree. Check the enabled plugin and skill in the client before a task. See the official [skill](https://code.claude.com/docs/en/skills) and [plugin](https://code.claude.com/docs/en/plugins) instructions.

## What the daisyUI plugin provides

The package includes the daisyUI skill and guides for installation, usage, configuration, colors, and components. The installed version determines which instructions are available.

Your web application still needs [Tailwind CSS and daisyUI configured](/docs/install/) to render component classes. [Blueprint](/blueprint/) is a separate MCP product. Installing the daisyUI skill plugin does not activate Blueprint.

## Why daisyUI works well with agents

The service status task below uses [Card](/components/card/) for grouping, [Table](/components/table/) for data, and [Badge](/components/badge/) for status text. Theme values supply the colors. The [Alert](/components/alert/) variant reports a failed load.

### Service status reference

This reference uses plain HTML with Tailwind CSS 4.3.3 and daisyUI 5.7.36. The project enables the light and dark themes. The two service names and their status values are fictional.

These are separate static states. Your application must select the correct state and supply its data. The markup does not contact a service or implement retry behavior. A Claude Code generation run has not been recorded for this reference.

#### Ready

```html
<section aria-labelledby="service-title" class="card card-border mx-auto w-full max-w-2xl bg-base-100">
  <div class="card-body">
    <h2 id="service-title" class="card-title">Service status</h2>
    <p>2 services reporting. 1 service needs attention.</p>
    <div class="overflow-x-auto" role="region" aria-label="Service status table" tabindex="0">
      <table class="table table-sm">
        <caption class="sr-only">Fictional service status sample</caption>
        <thead><tr><th scope="col">Service</th><th scope="col">Status</th></tr></thead>
        <tbody>
          <tr><th scope="row">Web service</th><td><span class="badge badge-success">Operational</span></td></tr>
          <tr><th scope="row">Job queue</th><td><span class="badge badge-warning">Delayed</span></td></tr>
        </tbody>
      </table>
    </div>
  </div>
</section>
```

#### While data load

```html
<section aria-labelledby="service-title" class="card card-border mx-auto w-full max-w-2xl bg-base-100" aria-busy="true">
  <div class="card-body">
    <h2 id="service-title" class="card-title">Service status</h2>
    <p role="status"><span class="loading loading-spinner loading-sm" aria-hidden="true"></span> Loading service status...</p>
  </div>
</section>
```

#### Empty

```html
<section aria-labelledby="service-title" class="card card-border mx-auto w-full max-w-2xl bg-base-100">
  <div class="card-body">
    <h2 id="service-title" class="card-title">Service status</h2>
    <p>No service status data are available.</p>
  </div>
</section>
```

#### Failed load

```html
<section aria-labelledby="service-title" class="card card-border mx-auto w-full max-w-2xl bg-base-100">
  <div class="card-body">
    <h2 id="service-title" class="card-title">Service status</h2>
    <p role="alert" class="alert alert-error">Service status could not load. Check the connection and try again.</p>
  </div>
</section>
```

Use one variant at a time so the `service-title` ID stays unique. Keep text labels for the statuses. Check the summary against the supplied data. Test each state at narrow and desktop widths in your enabled themes. Use the keyboard to check the table's scrolling region when it overflows.

All four static variants were checked in Chrome on September 11, 2026, at 375 px and 1280 px widths with the light and dark themes. The headings, text labels, and state messages were present, with no page overflow. These checks verify the reference markup; the Claude Code generation check remains pending.

## Install the plugin

```sh:Terminal
claude plugin marketplace add saadeghi/daisyui
claude plugin install daisyui@daisyui
```

The first command adds the marketplace catalog. The second installs the selected daisyUI plugin. [Set up the daisyUI plugin for Claude Code](/docs/plugin/claude-code/) for the full procedure. The [plugin setup overview](/docs/plugin/) lists other supported tools.

## Skill install option

Use the [standalone daisyUI skill for Claude Code](/docs/skill/claude-code/) as an alternative setup method. Choose the method you need; this example does not require both.

## Prompt after installing

This is a proposed prompt for the service status task:

```text
Use the daisyUI plugin to build a read-only service status panel.
The project uses plain HTML, Tailwind CSS 4.3.3, and daisyUI 5.7.36.
Preserve its enabled light and dark themes and existing page shell.
Use this fictional data: Web service is Operational; Job queue is Delayed.
Show a short summary, a service status table, and text status labels.
Provide separate ready, loading, empty, and failed-load error variants.
Use an alert for the error. Do not add a state selector or inactive action buttons.
Keep the panel usable at 375px and 1280px with no page-level overflow.
Use a labeled scroll region if the table needs horizontal scrolling.
Do not add a UI library, custom color system, backend, or unrelated change.
Show the complete markup and list the checks you run.
```

After a run, record the Claude Code version, model if shown, installed plugin revision, skill availability, and any correction. Review the output and run the rendering checks before using it in your application.

[Set up the daisyUI plugin for Claude Code](/docs/plugin/claude-code/).
