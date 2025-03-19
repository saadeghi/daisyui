---
title: Progress
desc: Progress bar can be used to show the progress of a task or to show the passing of time.
layout: components
classnames:
  component:
  - class: progress
    desc: For <progress> tag
  color:
  - class: progress-neutral
    desc: neutral color
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
  import Translate from "$components/Translate.svelte"
</script>

### ~Progress
<div class="flex flex-col gap-2 items-center">
  <progress class="progress w-56" value="0" max="100"></progress>
  <progress class="progress w-56" value="10" max="100"></progress>
  <progress class="progress w-56" value="40" max="100"></progress>
  <progress class="progress w-56" value="70" max="100"></progress>
  <progress class="progress w-56" value="100" max="100"></progress>
</div>

```html
<progress class="$$progress w-56" value="0" max="100"></progress>
<progress class="$$progress w-56" value="10" max="100"></progress>
<progress class="$$progress w-56" value="40" max="100"></progress>
<progress class="$$progress w-56" value="70" max="100"></progress>
<progress class="$$progress w-56" value="100" max="100"></progress>
```

### ~Primary color
<div class="flex flex-col gap-2 items-center">
  <progress class="progress progress-primary w-56" value="0" max="100"></progress>
  <progress class="progress progress-primary w-56" value="10" max="100"></progress>
  <progress class="progress progress-primary w-56" value="40" max="100"></progress>
  <progress class="progress progress-primary w-56" value="70" max="100"></progress>
  <progress class="progress progress-primary w-56" value="100" max="100"></progress>
</div>

```html
<progress class="$$progress $$progress-primary w-56" value="0" max="100"></progress>
<progress class="$$progress $$progress-primary w-56" value="10" max="100"></progress>
<progress class="$$progress $$progress-primary w-56" value="40" max="100"></progress>
<progress class="$$progress $$progress-primary w-56" value="70" max="100"></progress>
<progress class="$$progress $$progress-primary w-56" value="100" max="100"></progress>
```


### ~Secondary color
<div class="flex flex-col gap-2 items-center">
  <progress class="progress progress-secondary w-56" value="0" max="100"></progress>
  <progress class="progress progress-secondary w-56" value="10" max="100"></progress>
  <progress class="progress progress-secondary w-56" value="40" max="100"></progress>
  <progress class="progress progress-secondary w-56" value="70" max="100"></progress>
  <progress class="progress progress-secondary w-56" value="100" max="100"></progress>
</div>

```html
<progress class="$$progress $$progress-secondary w-56" value="0" max="100"></progress>
<progress class="$$progress $$progress-secondary w-56" value="10" max="100"></progress>
<progress class="$$progress $$progress-secondary w-56" value="40" max="100"></progress>
<progress class="$$progress $$progress-secondary w-56" value="70" max="100"></progress>
<progress class="$$progress $$progress-secondary w-56" value="100" max="100"></progress>
```


### ~Accent color
<div class="flex flex-col gap-2 items-center">
  <progress class="progress progress-accent w-56" value="0" max="100"></progress>
  <progress class="progress progress-accent w-56" value="10" max="100"></progress>
  <progress class="progress progress-accent w-56" value="40" max="100"></progress>
  <progress class="progress progress-accent w-56" value="70" max="100"></progress>
  <progress class="progress progress-accent w-56" value="100" max="100"></progress>
</div>

```html
<progress class="$$progress $$progress-accent w-56" value="0" max="100"></progress>
<progress class="$$progress $$progress-accent w-56" value="10" max="100"></progress>
<progress class="$$progress $$progress-accent w-56" value="40" max="100"></progress>
<progress class="$$progress $$progress-accent w-56" value="70" max="100"></progress>
<progress class="$$progress $$progress-accent w-56" value="100" max="100"></progress>
```

### ~Neutral color
<div class="flex flex-col gap-2 items-center">
  <progress class="progress progress-neutral w-56" value="0" max="100"></progress>
  <progress class="progress progress-neutral w-56" value="10" max="100"></progress>
  <progress class="progress progress-neutral w-56" value="40" max="100"></progress>
  <progress class="progress progress-neutral w-56" value="70" max="100"></progress>
  <progress class="progress progress-neutral w-56" value="100" max="100"></progress>
</div>

```html
<progress class="$$progress $$progress-neutral w-56" value="0" max="100"></progress>
<progress class="$$progress $$progress-neutral w-56" value="10" max="100"></progress>
<progress class="$$progress $$progress-neutral w-56" value="40" max="100"></progress>
<progress class="$$progress $$progress-neutral w-56" value="70" max="100"></progress>
<progress class="$$progress $$progress-neutral w-56" value="100" max="100"></progress>
```

### ~Info color
<div class="flex flex-col gap-2 items-center">
  <progress class="progress progress-info w-56" value="0" max="100"></progress>
  <progress class="progress progress-info w-56" value="10" max="100"></progress>
  <progress class="progress progress-info w-56" value="40" max="100"></progress>
  <progress class="progress progress-info w-56" value="70" max="100"></progress>
  <progress class="progress progress-info w-56" value="100" max="100"></progress>
</div>

```html
<progress class="$$progress $$progress-info w-56" value="0" max="100"></progress>
<progress class="$$progress $$progress-info w-56" value="10" max="100"></progress>
<progress class="$$progress $$progress-info w-56" value="40" max="100"></progress>
<progress class="$$progress $$progress-info w-56" value="70" max="100"></progress>
<progress class="$$progress $$progress-info w-56" value="100" max="100"></progress>
```

### ~Success color
<div class="flex flex-col gap-2 items-center">
  <progress class="progress progress-success w-56" value="0" max="100"></progress>
  <progress class="progress progress-success w-56" value="10" max="100"></progress>
  <progress class="progress progress-success w-56" value="40" max="100"></progress>
  <progress class="progress progress-success w-56" value="70" max="100"></progress>
  <progress class="progress progress-success w-56" value="100" max="100"></progress>
</div>

```html
<progress class="$$progress $$progress-success w-56" value="0" max="100"></progress>
<progress class="$$progress $$progress-success w-56" value="10" max="100"></progress>
<progress class="$$progress $$progress-success w-56" value="40" max="100"></progress>
<progress class="$$progress $$progress-success w-56" value="70" max="100"></progress>
<progress class="$$progress $$progress-success w-56" value="100" max="100"></progress>
```

### ~Warning color
<div class="flex flex-col gap-2 items-center">
  <progress class="progress progress-warning w-56" value="0" max="100"></progress>
  <progress class="progress progress-warning w-56" value="10" max="100"></progress>
  <progress class="progress progress-warning w-56" value="40" max="100"></progress>
  <progress class="progress progress-warning w-56" value="70" max="100"></progress>
  <progress class="progress progress-warning w-56" value="100" max="100"></progress>
</div>

```html
<progress class="$$progress $$progress-warning w-56" value="0" max="100"></progress>
<progress class="$$progress $$progress-warning w-56" value="10" max="100"></progress>
<progress class="$$progress $$progress-warning w-56" value="40" max="100"></progress>
<progress class="$$progress $$progress-warning w-56" value="70" max="100"></progress>
<progress class="$$progress $$progress-warning w-56" value="100" max="100"></progress>
```


### ~Error color
<div class="flex flex-col gap-2 items-center">
  <progress class="progress progress-error w-56" value="0" max="100"></progress>
  <progress class="progress progress-error w-56" value="10" max="100"></progress>
  <progress class="progress progress-error w-56" value="40" max="100"></progress>
  <progress class="progress progress-error w-56" value="70" max="100"></progress>
  <progress class="progress progress-error w-56" value="100" max="100"></progress>
</div>

```html
<progress class="$$progress $$progress-error w-56" value="0" max="100"></progress>
<progress class="$$progress $$progress-error w-56" value="10" max="100"></progress>
<progress class="$$progress $$progress-error w-56" value="40" max="100"></progress>
<progress class="$$progress $$progress-error w-56" value="70" max="100"></progress>
<progress class="$$progress $$progress-error w-56" value="100" max="100"></progress>
```


### ~Indeterminate (without value)
<progress class="progress w-56"></progress>

```html
<progress class="$$progress w-56"></progress>
```
