---
title: Kbd
desc: Kbd is used to display keyboard shortcuts.
layout: components
classnames:
  component:
  - class: kbd
    desc: Do show a keyboard key or a shortcut key
  size:
  - class: kbd-xs
    desc: Extra small size
  - class: kbd-sm
    desc: Small size
  - class: kbd-md
    desc: Medium size
    default: true
  - class: kbd-lg
    desc: Large size
  - class: kbd-xl
    desc: Extra large size
---

<script>
  import Component from "$components/Component.svelte"
  import Translate from "$components/Translate.svelte"
</script>

### ~Kbd
<kbd class="kbd">K</kbd>

```html
<kbd class="$$kbd">K</kbd>
```


### ~Kbd sizes
<kbd class="kbd kbd-xs">Xsmall</kbd>
<kbd class="kbd kbd-sm">Small</kbd>
<kbd class="kbd kbd-md">Medium</kbd>
<kbd class="kbd kbd-lg">Large</kbd>
<kbd class="kbd kbd-xl">Xlarge</kbd>

```html
<kbd class="$$kbd $$kbd-xs">Xsmall</kbd>
<kbd class="$$kbd $$kbd-sm">Small</kbd>
<kbd class="$$kbd $$kbd-md">Medium</kbd>
<kbd class="$$kbd $$kbd-lg">Large</kbd>
<kbd class="$$kbd $$kbd-xl">Xlarge</kbd>
```


### ~In text

<span>Press <kbd class="kbd kbd-sm">F</kbd> to pay respects.</span>

```html
Press
<kbd class="$$kbd $$kbd-sm">F</kbd>
to pay respects.
```


### ~Key combination
<kbd class="kbd">ctrl</kbd>
+
<kbd class="kbd">shift</kbd>
+
<kbd class="kbd">del</kbd>

```html
<kbd class="$$kbd">ctrl</kbd>
+
<kbd class="$$kbd">shift</kbd>
+
<kbd class="$$kbd">del</kbd>
```


### ~Function Keys
<kbd class="kbd">⌘</kbd>
<kbd class="kbd">⌥</kbd>
<kbd class="kbd">⇧</kbd>
<kbd class="kbd">⌃</kbd>

```html
<kbd class="$$kbd">⌘</kbd>
<kbd class="$$kbd">⌥</kbd>
<kbd class="$$kbd">⇧</kbd>
<kbd class="$$kbd">⌃</kbd>
```


### ~A full keyboard
<div class="overflow-x-auto">
  <div class="flex justify-center gap-1 w-full mb-1">
    <kbd class="kbd">q</kbd>
    <kbd class="kbd">w</kbd>
    <kbd class="kbd">e</kbd>
    <kbd class="kbd">r</kbd>
    <kbd class="kbd">t</kbd>
    <kbd class="kbd">y</kbd>
    <kbd class="kbd">u</kbd>
    <kbd class="kbd">i</kbd>
    <kbd class="kbd">o</kbd>
    <kbd class="kbd">p</kbd>
  </div>
  <div class="flex justify-center gap-1 w-full mb-1">
    <kbd class="kbd">a</kbd>
    <kbd class="kbd">s</kbd>
    <kbd class="kbd">d</kbd>
    <kbd class="kbd">f</kbd>
    <kbd class="kbd">g</kbd>
    <kbd class="kbd">h</kbd>
    <kbd class="kbd">j</kbd>
    <kbd class="kbd">k</kbd>
    <kbd class="kbd">l</kbd>
  </div>
  <div class="flex justify-center gap-1 w-full mb-1">
    <kbd class="kbd">z</kbd>
    <kbd class="kbd">x</kbd>
    <kbd class="kbd">c</kbd>
    <kbd class="kbd">v</kbd>
    <kbd class="kbd">b</kbd>
    <kbd class="kbd">n</kbd>
    <kbd class="kbd">m</kbd>
    <kbd class="kbd">/</kbd>
  </div>
</div>

```html
<div class="my-1 flex w-full justify-center gap-1">
  <kbd class="$$kbd">q</kbd>
  <kbd class="$$kbd">w</kbd>
  <kbd class="$$kbd">e</kbd>
  <kbd class="$$kbd">r</kbd>
  <kbd class="$$kbd">t</kbd>
  <kbd class="$$kbd">y</kbd>
  <kbd class="$$kbd">u</kbd>
  <kbd class="$$kbd">i</kbd>
  <kbd class="$$kbd">o</kbd>
  <kbd class="$$kbd">p</kbd>
</div>
<div class="my-1 flex w-full justify-center gap-1">
  <kbd class="$$kbd">a</kbd>
  <kbd class="$$kbd">s</kbd>
  <kbd class="$$kbd">d</kbd>
  <kbd class="$$kbd">f</kbd>
  <kbd class="$$kbd">g</kbd>
  <kbd class="$$kbd">h</kbd>
  <kbd class="$$kbd">j</kbd>
  <kbd class="$$kbd">k</kbd>
  <kbd class="$$kbd">l</kbd>
</div>
<div class="my-1 flex w-full justify-center gap-1">
  <kbd class="$$kbd">z</kbd>
  <kbd class="$$kbd">x</kbd>
  <kbd class="$$kbd">c</kbd>
  <kbd class="$$kbd">v</kbd>
  <kbd class="$$kbd">b</kbd>
  <kbd class="$$kbd">n</kbd>
  <kbd class="$$kbd">m</kbd>
  <kbd class="$$kbd">/</kbd>
</div>
```


### ~Arrow Keys
<div class="flex justify-center w-full">
  <kbd class="kbd">▲</kbd>
</div>
<div class="flex justify-center gap-12 w-full">
  <kbd class="kbd">◀︎</kbd>
  <kbd class="kbd">▶︎</kbd>
</div>
<div class="flex justify-center w-full">
  <kbd class="kbd">▼</kbd>
</div>

```html
<div class="flex w-full justify-center">
  <kbd class="$$kbd">▲</kbd>
</div>
<div class="flex w-full justify-center gap-12">
  <kbd class="$$kbd">◀︎</kbd>
  <kbd class="$$kbd">▶︎</kbd>
</div>
<div class="flex w-full justify-center">
  <kbd class="$$kbd">▼</kbd>
</div>
```
