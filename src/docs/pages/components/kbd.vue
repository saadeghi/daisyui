<template>
  <div>
    <ClassTable v-bind:data="{
      components : [
        { class: 'kbd', desc: 'Do show a keyboard key or a shortcut key' },
      ],
      utilities : [
        { class: 'kbd-lg', desc: 'Large size' },
        { class: 'kbd-md', desc: 'Medium size (default)' },
        { class: 'kbd-sm', desc: 'Small size' },
        { class: 'kbd-xs', desc: 'Extra small size' },
      ],
    }"/>
    <Wrapper title="kbd">
      <kbd class="kbd">A</kbd>
    </Wrapper>
    <Wrapper title="Sizes">
      <kbd class="kbd kbd-lg">Shift</kbd>
      <kbd class="kbd kbd-md">Shift</kbd>
      <kbd class="kbd kbd-sm">Shift</kbd>
      <kbd class="kbd kbd-xs">Shift</kbd>
    </Wrapper>
    <Wrapper title="key combination">
      <kbd class="kbd">ctrl</kbd>
      +
      <kbd class="kbd">shift</kbd>
      +
      <kbd class="kbd">del</kbd>
    </Wrapper>
    <Wrapper title="kbd">
      <kbd class="kbd">⌘</kbd>
      <kbd class="kbd">⌥</kbd>
      <kbd class="kbd">⇧</kbd>
      <kbd class="kbd">⌃</kbd>
    </Wrapper>
    <Wrapper title="kbd">
      <kbd class="kbd">▲</kbd>
      <kbd class="kbd">▼</kbd>
      <kbd class="kbd">◀︎</kbd>
      <kbd class="kbd">▶︎</kbd>
    </Wrapper>
    <Wrapper title="a full keyboard">
      <div class="flex justify-center gap-1 my-1 w-96">
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
      <div class="flex justify-center gap-1 my-1 w-96">
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
      <div class="flex justify-center gap-1 my-1 w-96">
        <kbd class="kbd">z</kbd>
        <kbd class="kbd">x</kbd>
        <kbd class="kbd">c</kbd>
        <kbd class="kbd">v</kbd>
        <kbd class="kbd">b</kbd>
        <kbd class="kbd">n</kbd>
        <kbd class="kbd">m</kbd>
        <kbd class="kbd">/</kbd>
      </div>
    </Wrapper>
  </div>
</template>


<script>
export default {
  head() {
    return {
      title: "daisyUI — Tailwind CSS Kbd component",
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Tailwind CSS kbd component - Tailwind CSS kbd example'
        }
      ]
    }
  }
}
</script>
