---
title: Kbd
desc: Kbd is used to display keyboard shortcuts.
published: true
---

<script>
  import Component from "@components/Component.svelte"
  import ClassTable from "@components/ClassTable.svelte"
  import { prefix } from '$lib/stores';
  import { replace } from '$lib/actions';
</script>

<ClassTable
data="{[
  { type:'component', class: 'kbd', desc: 'Do show a keyboard key or a shortcut key' },
  { type:'responsive', class: 'kbd-lg', desc: 'Large size' },
  { type:'responsive', class: 'kbd-md', desc: 'Medium size (default)' },
  { type:'responsive', class: 'kbd-sm', desc: 'Small size' },
  { type:'responsive', class: 'kbd-xs', desc: 'Extra small size' },
]}"
/>

<Component title="Kbd">
<kbd class="kbd">A</kbd>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<kbd class="$$kbd">A</kbd>`
}</pre>
</Component>

<Component title="Kbd sizes">
<kbd class="kbd kbd-lg">Shift</kbd>
<kbd class="kbd kbd-md">Shift</kbd>
<kbd class="kbd kbd-sm">Shift</kbd>
<kbd class="kbd kbd-xs">Shift</kbd>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<kbd class="$$kbd $$kbd-lg">Shift</kbd>
<kbd class="$$kbd $$kbd-md">Shift</kbd>
<kbd class="$$kbd $$kbd-sm">Shift</kbd>
<kbd class="$$kbd $$kbd-xs">Shift</kbd>`
}</pre>
</Component>

<Component title="In text">
Press <kbd class="kbd kbd-sm">F</kbd> to pay respects.
<pre slot="html" use:replace={{ to: $prefix }}>{
`Press <kbd class="$$kbd $$kbd-sm">F</kbd> to pay respects.`
}</pre>
</Component>

<Component title="Key combination">
<kbd class="kbd">ctrl</kbd>
+
<kbd class="kbd">shift</kbd>
+
<kbd class="kbd">del</kbd>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<kbd class="$$kbd">ctrl</kbd>
+
<kbd class="$$kbd">shift</kbd>
+
<kbd class="$$kbd">del</kbd>`
}</pre>
</Component>

<Component title="Function Keys">
<kbd class="kbd">⌘</kbd>
<kbd class="kbd">⌥</kbd>
<kbd class="kbd">⇧</kbd>
<kbd class="kbd">⌃</kbd>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<kbd class="$$kbd">⌘</kbd>
<kbd class="$$kbd">⌥</kbd>
<kbd class="$$kbd">⇧</kbd>
<kbd class="$$kbd">⌃</kbd>`
}</pre>
</Component>

<Component title="A full keyboard">
<div class="overflow-x-auto">
  <div class="flex justify-center gap-1 w-full">
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
  <div class="flex justify-center gap-1 w-full">
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
  <div class="flex justify-center gap-1 w-full">
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
<pre slot="html" use:replace={{ to: $prefix }}>{
`<div class="flex justify-center gap-1 my-1 w-full">
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
<div class="flex justify-center gap-1 my-1 w-full">
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
<div class="flex justify-center gap-1 my-1 w-full">
  <kbd class="$$kbd">z</kbd>
  <kbd class="$$kbd">x</kbd>
  <kbd class="$$kbd">c</kbd>
  <kbd class="$$kbd">v</kbd>
  <kbd class="$$kbd">b</kbd>
  <kbd class="$$kbd">n</kbd>
  <kbd class="$$kbd">m</kbd>
  <kbd class="$$kbd">/</kbd>
</div>`
}</pre>
</Component>

<Component title="Arrow Keys">
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
<pre slot="html" use:replace={{ to: $prefix }}>{
`<div class="flex justify-center w-full">
  <kbd class="$$kbd">▲</kbd>
</div>
<div class="flex justify-center gap-12 w-full">
  <kbd class="$$kbd">◀︎</kbd>
  <kbd class="$$kbd">▶︎</kbd>
</div>
<div class="flex justify-center w-full">
  <kbd class="$$kbd">▼</kbd>
</div>`
}</pre>
</Component>
