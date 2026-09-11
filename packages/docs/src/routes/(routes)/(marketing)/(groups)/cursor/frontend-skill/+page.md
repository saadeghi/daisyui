---
title: Cursor frontend skill
desc: Add the daisyUI skill to Cursor so frontend code generation uses consistent components, themes, and shorter Tailwind CSS.
layout: contentLanding
keywords: cursor frontend skill, frontend skill cursor, daisyui cursor skill
---

<script>
  import Translate from "$components/Translate.svelte"
</script>

Use the daisyUI frontend skill in Cursor to improve an existing issues page. Give the agent the current theme, issue data, and required states so it can preserve your application while changing the interface.

## What Cursor is

Cursor is a code editor with an agent that can read and edit project files. Use the [Cursor skill setup guide](/docs/skill/cursor/) to add daisyUI instructions to that workflow.

## The hidden cost of unstructured frontend prompts

A request for a dashboard leaves the component choices and states unspecified. Name the current theme, the status filter, table headings, priority labels, and empty result. Ask Cursor to preserve existing creation actions and data handling.

## daisyUI makes frontend output easier to steer

Use [Table](/components/table/) for rows, [Badge](/components/badge/) for text priority labels, and [Select](/components/select/) for the status filter. These classes supply styles. Svelte state and filtering supply the application behavior.

### Starting project and reference code

This small reference uses Svelte 5, Tailwind CSS 4, and daisyUI 5 in an application that already loads its CSS. [Install daisyUI](/docs/install/) if needed. Keep the application's enabled theme and existing page shell.

The sample data are fictional. Each issue has an `id`, `title`, `status`, and `priority`. This isolated list has no backend or creation workflow. Keep your application's existing creation action outside the list.

The code below is a reference implementation for the task. A generation run in Cursor has not been recorded for this example.

```svelte:Issues.svelte
<script>
  const allStatuses = "all"
  const statuses = ["open", "closed", "blocked"]
  const issues = [
    { id: "UI-101", title: "Keep long issue titles readable on a narrow screen", status: "open", priority: "High" },
    { id: "UI-102", title: "Add the empty result message", status: "closed", priority: "Normal" },
  ]
  let selectedStatus = $state(allStatuses)
  let visibleIssues = $derived(
    issues.filter((issue) => selectedStatus === allStatuses || issue.status === selectedStatus),
  )
</script>

<section aria-labelledby="issues-title" class="mx-auto w-full max-w-3xl p-4">
  <h2 id="issues-title" class="text-2xl font-semibold">Project issues</h2>
  <div class="my-4">
    <label for="issue-status" class="label mb-2">Filter by status</label>
    <select id="issue-status" class="select w-full sm:w-48" bind:value={selectedStatus}>
      <option value={allStatuses}>All statuses</option>
      {#each statuses as status}
        <option value={status}>{status}</option>
      {/each}
    </select>
  </div>
  <p role="status" class="mb-3">{visibleIssues.length} issues shown</p>
  {#if visibleIssues.length}
    <div class="overflow-x-auto rounded-box border border-base-300"
      role="region" aria-label="Project issue list" tabindex="0">
      <table class="table table-sm">
        <caption class="sr-only">Issues matching the selected status</caption>
        <thead><tr><th scope="col">Issue</th><th scope="col">Status</th><th scope="col">Priority</th></tr></thead>
        <tbody>
          {#each visibleIssues as issue (issue.id)}
            <tr>
              <th scope="row" class="min-w-40 whitespace-normal break-words">
                {issue.id}: {issue.title}
              </th>
              <td>{issue.status}</td>
              <td><span class="badge badge-outline whitespace-nowrap">{issue.priority}</span></td>
            </tr>
          {/each}
        </tbody>
      </table>
    </div>
  {:else}
    <p class="rounded-box border border-base-300 p-6">No issues match this status. Choose another status or All statuses.</p>
  {/if}
</section>

```

Choose `open` to show one issue. Choose `blocked` to see the empty result. `All statuses` restores both rows. The data remain separate from the filter expression. Priority uses visible text, so color is not the only signal.

The reference was compiled with Svelte 5 and checked in Chrome on September 11, 2026. The full list, filtered list, and empty result worked. The light and dark themes fit 375 px and 1280 px screens without page overflow. These checks verify the reference code; the Cursor generation check remains pending.

## A skill keeps the guidance reusable

The daisyUI skill supplies component and theme instructions. It does not add filtering, form submission, or a database. Before the task, check that Cursor can find the skill in the intended project. Use the skill selection controls available in your Cursor version. Generated class names alone do not prove that the agent loaded the skill.

## Install

Run this command from the intended project directory:

```sh:Terminal
npx skills add saadeghi/daisyui --agent cursor --yes
```

[Set up the daisyUI skill for Cursor](/docs/skill/cursor/). This adds agent guidance; the application still needs Tailwind CSS and daisyUI configured.

### Proposed issues-page prompt

Use this prompt for a Svelte 5 project with an `Issues.svelte` file. Replace the path if your file is elsewhere.

```text
Use the daisyUI skill to improve the issues list in Issues.svelte.
Keep Svelte 5, the enabled theme, issue data, and existing page shell.
Use a table for issues and text badges for priority.
Add a labeled status filter and a useful empty result.
Keep the application's existing issue creation action.
Use daisyUI classes for component styles and Tailwind CSS utilities for layout.
Include the Svelte state and code needed for filtering.
Do not add a dependency or invent a backend endpoint.
Explain the changes and list the checks you run.
```

### Check the result

Check the full list, an `open` result, and an empty `blocked` result. Use the keyboard to reach the filter and select a status. Confirm table headers, readable priorities, and visible focus. Test narrow and desktop widths in two enabled themes. Long titles must wrap or stay inside the table's scrolling region.

Record the Cursor version, model if shown, skill revision, exact prompt, and any corrections when you run this task. Check the application in the browser before treating the generated page as complete.

## When to use the plugin

The [Cursor plugin guide](/docs/plugin/cursor/) provides an alternative installation method for the daisyUI skill.

[Set up the daisyUI skill for Cursor](/docs/skill/cursor/).
