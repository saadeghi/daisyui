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
<pre slot="react" use:replace={{ to: $prefix }}>{
`<kbd className="$$kbd">A</kbd>`
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
<pre slot="react" use:replace={{ to: $prefix }}>{
`<kbd className="$$kbd $$kbd-lg">Shift</kbd>
<kbd className="$$kbd $$kbd-md">Shift</kbd>
<kbd className="$$kbd $$kbd-sm">Shift</kbd>
<kbd className="$$kbd $$kbd-xs">Shift</kbd>`
}</pre>
</Component>

<Component title="In text">
Press <kbd class="kbd kbd-sm">F</kbd> to pay respects.
<pre slot="html" use:replace={{ to: $prefix }}>{
`Press <kbd class="$$kbd $$kbd-sm">F</kbd> to pay respects.`
}</pre>
<pre slot="react" use:replace={{ to: $prefix }}>{
`Press <kbd className="$$kbd $$kbd-sm">F</kbd> to pay respects.`
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
<pre slot="react" use:replace={{ to: $prefix }}>{
`<kbd className="$$kbd">ctrl</kbd>
+
<kbd className="$$kbd">shift</kbd>
+
<kbd className="$$kbd">del</kbd>`
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
<pre slot="react" use:replace={{ to: $prefix }}>{
`<kbd className="$$kbd">⌘</kbd>
<kbd className="$$kbd">⌥</kbd>
<kbd className="$$kbd">⇧</kbd>
<kbd className="$$kbd">⌃</kbd>`
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
<pre slot="react" use:replace={{ to: $prefix }}>{
`<div className="flex justify-center gap-1 my-1 w-full">
  <kbd className="$$kbd">q</kbd>
  <kbd className="$$kbd">w</kbd>
  <kbd className="$$kbd">e</kbd>
  <kbd className="$$kbd">r</kbd>
  <kbd className="$$kbd">t</kbd>
  <kbd className="$$kbd">y</kbd>
  <kbd className="$$kbd">u</kbd>
  <kbd className="$$kbd">i</kbd>
  <kbd className="$$kbd">o</kbd>
  <kbd className="$$kbd">p</kbd>
</div> 
<div className="flex justify-center gap-1 my-1 w-full">
  <kbd className="$$kbd">a</kbd>
  <kbd className="$$kbd">s</kbd>
  <kbd className="$$kbd">d</kbd>
  <kbd className="$$kbd">f</kbd>
  <kbd className="$$kbd">g</kbd>
  <kbd className="$$kbd">h</kbd>
  <kbd className="$$kbd">j</kbd>
  <kbd className="$$kbd">k</kbd>
  <kbd className="$$kbd">l</kbd>
</div> 
<div className="flex justify-center gap-1 my-1 w-full">
  <kbd className="$$kbd">z</kbd>
  <kbd className="$$kbd">x</kbd>
  <kbd className="$$kbd">c</kbd>
  <kbd className="$$kbd">v</kbd>
  <kbd className="$$kbd">b</kbd>
  <kbd className="$$kbd">n</kbd>
  <kbd className="$$kbd">m</kbd>
  <kbd className="$$kbd">/</kbd>
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
<pre slot="react" use:replace={{ to: $prefix }}>{
`<div className="flex justify-center w-full">
  <kbd className="$$kbd">▲</kbd>
</div>
<div className="flex justify-center gap-12 w-full">
  <kbd className="$$kbd">◀︎</kbd>
  <kbd className="$$kbd">▶︎</kbd>
</div>
<div className="flex justify-center w-full">
  <kbd className="$$kbd">▼</kbd>
</div>`
}</pre>
</Component>
