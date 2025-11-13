---
title: Text Rotate
desc: Text Rotate can show up to 6 lines of text, one at a time, with a an infinite loop animation. Duration is 10 seconds by default. The animation will pause on hover.
source: https://raw.githubusercontent.com/saadeghi/daisyui/refs/heads/master/packages/daisyui/src/components/textrotate.css
layout: components
classnames:
  component:
  - class: text-rotate
    desc: Wrapper for texts
---

<script>
  import Component from "$components/Component.svelte"
  import Translate from "$components/Translate.svelte"
</script>


### ~Text Rotate
#### Rotates through 3 words, in 10 seconds
<span class="text-rotate">
  <span>
    <span>ONE</span>
    <span>TWO</span>
    <span>THREE</span>
  </span>
</span>

```html
<span class="$$text-rotate">
  <span>
    <span>ONE</span>
    <span>TWO</span>
    <span>THREE</span>
  </span>
</span>
```

### ~Rotating 6 words
#### Big font size, horizontally centered
<span class="text-rotate max-md:text-3xl text-7xl font-title">
  <span class="justify-items-center">
    <span>DESIGN</span>
    <span>DEVELOP</span>
    <span>DEPLOY</span>
    <span>SCALE</span>
    <span>MAINTAIN</span>
    <span>REPEAT</span>
  </span>
</span>

```html
<span class="$$text-rotate text-7xl">
  <span class="justify-items-center">
    <span>DESIGN</span>
    <span>DEVELOP</span>
    <span>DEPLOY</span>
    <span>SCALE</span>
    <span>MAINTAIN</span>
    <span>REPEAT</span>
  </span>
</span>
```

### ~Rotating words in a sentence
#### Different colors for each word
<span>
  Providing AI Agents for 
  <span class="text-rotate">
    <span>
      <span class="bg-teal-400 text-teal-800 px-2">Designers</span>
      <span class="bg-red-400 text-red-800 px-2">Developers</span>
      <span class="bg-blue-400 text-blue-800 px-2">Managers</span>
    </span>
  </span>
</span>

```html
<span>
  Providing AI Agents for 
  <span class="$$text-rotate">
    <span>
      <span class="bg-teal-400 text-teal-800 px-2">Designers</span>
      <span class="bg-red-400 text-red-800 px-2">Developers</span>
      <span class="bg-blue-400 text-blue-800 px-2">Managers</span>
    </span>
  </span>
</span>
```

### ~Rotating 3 words with custom duration
#### Big font size, horizontally centered, 6 seconds duration instead of 10 seconds
<span class="text-rotate max-md:text-3xl text-7xl font-title duration-6000">
  <span class="justify-items-center">
    <span>BLAZING</span>
    <span class="font-bold italic px-2">FAST ▶︎▶︎</span>
  </span>
</span>

```html
<span class="$$text-rotate text-7xl duration-6000">
  <span class="justify-items-center">
  <span>BLAZING</span>
  <span class="font-bold italic px-2">FAST ▶︎▶︎</span>
  </span>
</span>
```

### ~Custom line height 
#### In case you have a tall font or need more vertical spacing between lines
<span class="text-rotate max-md:text-3xl text-7xl font-title leading-[2]">
  <span class="justify-items-center">
    <span>📐 DESIGN</span>
    <span>⌨️ DEVELOP</span>
    <span>🌎 DEPLOY</span>
    <span>🌱 SCALE</span>
    <span>🔧 MAINTAIN</span>
    <span>♻️ REPEAT</span>
  </span>
</span>

```html
<span class="$$text-rotate text-7xl leading-[2]">
  <span class="justify-items-center">
    <span>📐 DESIGN</span>
    <span>⌨️ DEVELOP</span>
    <span>🌎 DEPLOY</span>
    <span>🌱 SCALE</span>
    <span>🔧 MAINTAIN</span>
    <span>♻️ REPEAT</span>
  </span>
</span>
```
