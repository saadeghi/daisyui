---
title: Progress
desc: Progress bar can be used to show the progress of a task or to show the passing of time.
layout: components
classnames:
  component:
  - class: progress
    desc: For <progress> tag
  color:
  - class: progress-primary
    desc: primary color
  - class: progress-secondary
    desc: secondary color
  - class: progress-accent
    desc: accent color
  - class: progress-info
    desc: info color
  - class: progress-success
    desc: success color
  - class: progress-warning
    desc: warning color
  - class: progress-error
    desc: error color
---

<script>
  import Component from "$components/Component.svelte"
</script>

<Component title="Progress">
<div class="flex flex-col gap-2 items-center">
  <progress class="progress w-56" value="0" max="100"></progress>
  <progress class="progress w-56" value="10" max="100"></progress>
  <progress class="progress w-56" value="40" max="100"></progress>
  <progress class="progress w-56" value="70" max="100"></progress>
  <progress class="progress w-56" value="100" max="100"></progress>
</div>
{#snippet html()}

```html
<progress class="$$progress w-56" value="0" max="100"></progress>
<progress class="$$progress w-56" value="10" max="100"></progress>
<progress class="$$progress w-56" value="40" max="100"></progress>
<progress class="$$progress w-56" value="70" max="100"></progress>
<progress class="$$progress w-56" value="100" max="100"></progress>
```

{/snippet}
</Component>

<Component title="Primary color">
<div class="flex flex-col gap-2 items-center">
  <progress class="progress progress-primary w-56" value="0" max="100"></progress>
  <progress class="progress progress-primary w-56" value="10" max="100"></progress>
  <progress class="progress progress-primary w-56" value="40" max="100"></progress>
  <progress class="progress progress-primary w-56" value="70" max="100"></progress>
  <progress class="progress progress-primary w-56" value="100" max="100"></progress>
</div>
{#snippet html()}

```html
<progress class="$$progress $$progress-primary w-56" value="0" max="100"></progress>
<progress class="$$progress $$progress-primary w-56" value="10" max="100"></progress>
<progress class="$$progress $$progress-primary w-56" value="40" max="100"></progress>
<progress class="$$progress $$progress-primary w-56" value="70" max="100"></progress>
<progress class="$$progress $$progress-primary w-56" value="100" max="100"></progress>
```

{/snippet}
</Component>

<Component title="Secondary color">
<div class="flex flex-col gap-2 items-center">
  <progress class="progress progress-secondary w-56" value="0" max="100"></progress>
  <progress class="progress progress-secondary w-56" value="10" max="100"></progress>
  <progress class="progress progress-secondary w-56" value="40" max="100"></progress>
  <progress class="progress progress-secondary w-56" value="70" max="100"></progress>
  <progress class="progress progress-secondary w-56" value="100" max="100"></progress>
</div>
{#snippet html()}

```html
<progress class="$$progress $$progress-secondary w-56" value="0" max="100"></progress>
<progress class="$$progress $$progress-secondary w-56" value="10" max="100"></progress>
<progress class="$$progress $$progress-secondary w-56" value="40" max="100"></progress>
<progress class="$$progress $$progress-secondary w-56" value="70" max="100"></progress>
<progress class="$$progress $$progress-secondary w-56" value="100" max="100"></progress>
```

{/snippet}
</Component>

<Component title="Accent color">
<div class="flex flex-col gap-2 items-center">
  <progress class="progress progress-accent w-56" value="0" max="100"></progress>
  <progress class="progress progress-accent w-56" value="10" max="100"></progress>
  <progress class="progress progress-accent w-56" value="40" max="100"></progress>
  <progress class="progress progress-accent w-56" value="70" max="100"></progress>
  <progress class="progress progress-accent w-56" value="100" max="100"></progress>
</div>
{#snippet html()}

```html
<progress class="$$progress $$progress-accent w-56" value="0" max="100"></progress>
<progress class="$$progress $$progress-accent w-56" value="10" max="100"></progress>
<progress class="$$progress $$progress-accent w-56" value="40" max="100"></progress>
<progress class="$$progress $$progress-accent w-56" value="70" max="100"></progress>
<progress class="$$progress $$progress-accent w-56" value="100" max="100"></progress>
```

{/snippet}
</Component>

<Component title="Success color">
<div class="flex flex-col gap-2 items-center">
  <progress class="progress progress-success w-56" value="0" max="100"></progress>
  <progress class="progress progress-success w-56" value="10" max="100"></progress>
  <progress class="progress progress-success w-56" value="40" max="100"></progress>
  <progress class="progress progress-success w-56" value="70" max="100"></progress>
  <progress class="progress progress-success w-56" value="100" max="100"></progress>
</div>
{#snippet html()}

```html
<progress class="$$progress $$progress-success w-56" value="0" max="100"></progress>
<progress class="$$progress $$progress-success w-56" value="10" max="100"></progress>
<progress class="$$progress $$progress-success w-56" value="40" max="100"></progress>
<progress class="$$progress $$progress-success w-56" value="70" max="100"></progress>
<progress class="$$progress $$progress-success w-56" value="100" max="100"></progress>
```

{/snippet}
</Component>

<Component title="Info color">
<div class="flex flex-col gap-2 items-center">
  <progress class="progress progress-info w-56" value="0" max="100"></progress>
  <progress class="progress progress-info w-56" value="10" max="100"></progress>
  <progress class="progress progress-info w-56" value="40" max="100"></progress>
  <progress class="progress progress-info w-56" value="70" max="100"></progress>
  <progress class="progress progress-info w-56" value="100" max="100"></progress>
</div>
{#snippet html()}

```html
<progress class="$$progress $$progress-info w-56" value="0" max="100"></progress>
<progress class="$$progress $$progress-info w-56" value="10" max="100"></progress>
<progress class="$$progress $$progress-info w-56" value="40" max="100"></progress>
<progress class="$$progress $$progress-info w-56" value="70" max="100"></progress>
<progress class="$$progress $$progress-info w-56" value="100" max="100"></progress>
```

{/snippet}
</Component>

<Component title="Warning color">
<div class="flex flex-col gap-2 items-center">
  <progress class="progress progress-warning w-56" value="0" max="100"></progress>
  <progress class="progress progress-warning w-56" value="10" max="100"></progress>
  <progress class="progress progress-warning w-56" value="40" max="100"></progress>
  <progress class="progress progress-warning w-56" value="70" max="100"></progress>
  <progress class="progress progress-warning w-56" value="100" max="100"></progress>
</div>
{#snippet html()}

```html
<progress class="$$progress $$progress-warning w-56" value="0" max="100"></progress>
<progress class="$$progress $$progress-warning w-56" value="10" max="100"></progress>
<progress class="$$progress $$progress-warning w-56" value="40" max="100"></progress>
<progress class="$$progress $$progress-warning w-56" value="70" max="100"></progress>
<progress class="$$progress $$progress-warning w-56" value="100" max="100"></progress>
```

{/snippet}
</Component>

<Component title="Error color">
<div class="flex flex-col gap-2 items-center">
  <progress class="progress progress-error w-56" value="0" max="100"></progress>
  <progress class="progress progress-error w-56" value="10" max="100"></progress>
  <progress class="progress progress-error w-56" value="40" max="100"></progress>
  <progress class="progress progress-error w-56" value="70" max="100"></progress>
  <progress class="progress progress-error w-56" value="100" max="100"></progress>
</div>
{#snippet html()}

```html
<progress class="$$progress $$progress-error w-56" value="0" max="100"></progress>
<progress class="$$progress $$progress-error w-56" value="10" max="100"></progress>
<progress class="$$progress $$progress-error w-56" value="40" max="100"></progress>
<progress class="$$progress $$progress-error w-56" value="70" max="100"></progress>
<progress class="$$progress $$progress-error w-56" value="100" max="100"></progress>
```

{/snippet}
</Component>

<Component title="Indeterminate (without value)">
<progress class="progress w-56"></progress>
{#snippet html()}

```html
<progress class="progress w-56"></progress>
```

{/snippet}
</Component>
