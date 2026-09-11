---
title: UI design skill for Codex
desc: Use the daisyUI skill in Codex to give UI generation a reusable Tailwind CSS component vocabulary.
layout: contentLanding
keywords: ui design skill for codex, codex design skill, daisyui skill codex
---

<script>
  import Translate from "$components/Translate.svelte"
</script>

Use the daisyUI skill in Codex to improve a project search form, then inspect its markup and browser behavior. [Set up the daisyUI skill for Codex](/docs/skill/codex/) in the project you want to edit.

## The Codex design problem

A styled input and button can look complete while missing a label and form behavior. The starting controls below have no form, field name, or submission method.

```html
<div class="join">
  <input class="input join-item" placeholder="Search projects" />
  <button class="btn btn-primary join-item">Search</button>
</div>
```

This example uses plain HTML, Tailwind CSS 4.3.3, and daisyUI 5.7.36. The project already loads its CSS and enables the light and dark themes. [Install daisyUI](/docs/install/) first if your project needs that setup. Installing an agent skill supplies instructions; your application still needs its CSS.

There is no search handler in this example. The task uses a native GET form on the current page with a field named `q`. If your application already has a search route or handler, ask Codex to preserve it.

## Install

Run this command from your project directory:

```sh:Terminal
npx skills add saadeghi/daisyui --agent codex --yes
```

Make sure the daisyUI skill is available to your Codex session before you start. This example used the repository skill and its usage, color, Input, Button, and Join references, read explicitly in a Codex session.

### Prompt for the search form

```text
Use the daisyUI skill to improve this project's existing search controls.
Keep the project's framework, dependencies, and current page.
Add a visible Search projects label connected to a search input.
Use a native GET form on the current page, with q as the input name.
Keep input and button together with daisyUI join classes. Use input for the field and btn btn-primary for the submit button.
Make the field fit a narrow screen without making the button unreadable.
Keep keyboard focus visible and keep the project's existing theme colors.
Do not add JavaScript, a new route, a search backend, or a package.
Show the changed markup and list the checks you actually ran.
```

## What the skill improves

The resulting form connects a visible label to the field and gives the browser enough information for native submission. The field can shrink on narrow screens while the button keeps its readable width.

```html
<form method="get" class="w-full max-w-md">
  <label for="project-search" class="label mb-2">Search projects</label>
  <div class="join w-full">
    <input
      id="project-search"
      name="q"
      type="search"
      class="input join-item min-w-0 flex-1"
      placeholder="Project name"
    />
    <button type="submit" class="btn btn-primary join-item shrink-0">Search</button>
  </div>
</form>
```

- [Input](/components/input/) and [Button](/components/button/) supply the field and button styles. `btn-primary` uses the current theme.
- [Join](/components/join/) and `join-item` connect the controls visually. Width utilities keep them inside the form.
- `for` and `id` connect the label and input. The placeholder gives a hint; it does not replace the label.
- `method="get"`, `name="q"`, and `type="submit"` supply native form behavior. Submitting a value adds `q` to the current page URL.

This form demonstrates query submission only. It does not fetch or filter project records. daisyUI supplies CSS; your application supplies search logic.

### Check the form in your project

This form was checked in Chrome on September 11, 2026, at 375 px and 1280 px widths with the light and dark themes. Label focus, keyboard access, Enter submission, button submission, and submission with JavaScript disabled passed. The page had no horizontal overflow.

Click the label to focus the input. Use Tab to reach the field and submit button. Submit a value with a space, such as `sample project`, with Enter and with the button. Both actions must open the current page with the submitted `q` value.

Check a narrow screen and a desktop screen in your enabled light and dark themes. Confirm visible focus, a readable button, and no page overflow. This native form does not need JavaScript.

[Set up the daisyUI skill for Codex](/docs/skill/codex/).
