---
title: Countdown
desc: Countdown gives you a transition effect when you change a number between 0 to 99.
layout: components
classnames:
  component:
  - class: countdown
    desc: Countdown wrapper
---

<script>
  import Component from "$components/Component.svelte"
  import Translate from "$components/Translate.svelte"

  import { onMount } from "svelte"
  let counter = 59
  function count(){
    if (counter > 0) {
      counter--
      setTimeout(count, 1000)
    }else{
      counter = 59
      setTimeout(count, 1000)
    }
  }
  onMount(() => {
    count()
  })
</script>

> :INFO:
>
> you need to change the span text and the `--value` CSS variable using JS. Value must be a number between 0 and 99.

### ~Countdown
<span class="countdown">
  <span style="--value:{counter};" aria-live="polite" aria-label="{counter}">{counter}</span>
</span>

```html
<span class="$$countdown">
  <span style="--$$value:59;" aria-live="polite" aria-label="59">59</span>
</span>
```
```jsx
{/* For TSX uncomment the commented types below */}
<span class="$$countdown">
  <span style={{"--$$value":59} /* as React.CSSProperties */ } aria-live="polite" aria-label={counter}>59</span>
</span>
```


### ~Large text
<span class="countdown font-mono text-6xl">
  <span style="--value:{counter};" aria-live="polite" aria-label="{counter}">{counter}</span>
</span>

```html
<span class="$$countdown font-mono text-6xl">
  <span style="--$$value:59;" aria-live="polite" aria-label="59">59</span>
</span>
```
```jsx
{/* For TSX uncomment the commented types below */}
<span class="$$countdown font-mono text-6xl">
  <span style={{"--$$value":59} /* as React.CSSProperties */ } aria-live="polite" aria-label={counter}>59</span>
</span>
```


### ~Clock countdown
<span class="font-mono text-2xl countdown">
  <span style="--value:10;" aria-live="polite" aria-label="10">10</span>h
  <span style="--value:24;" aria-live="polite" aria-label="24">24</span>m
  <span style="--value:{counter};" aria-live="polite" aria-label="{counter}">{counter}</span>s
</span>

```html
<span class="$$countdown font-mono text-2xl">
  <span style="--$$value:10;" aria-live="polite" aria-label="10">10</span>
  h
  <span style="--$$value:24;" aria-live="polite" aria-label="24">24</span>
  m
  <span style="--$$value:59;" aria-live="polite" aria-label="59">59</span>
  s
</span>
```
```jsx
{/* For TSX uncomment the commented types below */}
<span class="$$countdown font-mono text-2xl">
  <span style={{"--$$value":10} /* as React.CSSProperties */ } aria-live="polite" aria-label={counter}>10</span>h
  <span style={{"--$$value":24} /* as React.CSSProperties */ } aria-live="polite" aria-label={counter}>24</span>m
  <span style={{"--$$value":59} /* as React.CSSProperties */ } aria-live="polite" aria-label={counter}>59</span>s
</span>
```


### ~Clock countdown with colons
<span class="font-mono text-2xl countdown">
  <span style="--value:10;" aria-live="polite" aria-label="10">10</span>:
  <span style="--value:24;" aria-live="polite" aria-label="24">24</span>:
  <span style="--value:{counter};" aria-live="polite" aria-label="{counter}">{counter}</span>
</span>

```html
<span class="$$countdown font-mono text-2xl">
  <span style="--$$value:10;" aria-live="polite" aria-label="10">10</span>
  :
  <span style="--$$value:24;" aria-live="polite" aria-label="24">24</span>
  :
  <span style="--$$value:59;" aria-live="polite" aria-label="59">59</span>
</span>
```
```jsx
{/* For TSX uncomment the commented types below */}
<span class="$$countdown font-mono text-2xl">
  <span style={{"--$$value":10} /* as React.CSSProperties */ } aria-live="polite" aria-label={counter}>10</span>:
  <span style={{"--$$value":24} /* as React.CSSProperties */ } aria-live="polite" aria-label={counter}>24</span>:
  <span style={{"--$$value":59} /* as React.CSSProperties */ } aria-live="polite" aria-label={counter}>59</span>
</span>
```


### ~Large text with labels
<div class="flex gap-5">
  <div>
    <span class="font-mono text-4xl countdown">
      <span style="--value:15;" aria-live="polite" aria-label="15">15</span>
    </span>
    days
  </div>
  <div>
    <span class="font-mono text-4xl countdown">
      <span style="--value:10;" aria-live="polite" aria-label="10">10</span>
    </span>
    hours
  </div>
  <div>
    <span class="font-mono text-4xl countdown">
      <span style="--value:24;" aria-live="polite" aria-label="24">24</span>
    </span>
    minutes
  </div>
  <div>
    <span class="font-mono text-4xl countdown">
      <span style="--value:{counter};" aria-live="polite" aria-label="{counter}">{counter}</span>
    </span>
    sec
  </div>
</div>

```html
<div class="flex gap-5">
  <div>
    <span class="$$countdown font-mono text-4xl">
      <span style="--$$value:15;" aria-live="polite" aria-label="15">15</span>
    </span>
    days
  </div>
  <div>
    <span class="$$countdown font-mono text-4xl">
      <span style="--$$value:10;" aria-live="polite" aria-label="10">10</span>
    </span>
    hours
  </div>
  <div>
    <span class="$$countdown font-mono text-4xl">
      <span style="--$$value:24;" aria-live="polite" aria-label="24">24</span>
    </span>
    min
  </div>
  <div>
    <span class="$$countdown font-mono text-4xl">
      <span style="--$$value:59;" aria-live="polite" aria-label="59">59</span>
    </span>
    sec
  </div>
</div>
```
```jsx
{/* For TSX uncomment the commented types below */}
<div class="flex gap-5">
  <div>
    <span class="$$countdown font-mono text-4xl">
        <span style={{"--$$value":15} /* as React.CSSProperties */ } aria-live="polite" aria-label={counter}>15</span>
    </span>
    days
  </div>
  <div>
    <span class="$$countdown font-mono text-4xl">
        <span style={{"--$$value":10} /* as React.CSSProperties */ } aria-live="polite" aria-label={counter}>10</span>
    </span>
    hours
  </div>
  <div>
    <span class="$$countdown font-mono text-4xl">
      <span style={{"--$$value":24} /* as React.CSSProperties */ } aria-live="polite" aria-label={counter}>24</span>
    </span>
    min
  </div>
  <div>
    <span class="$$countdown font-mono text-4xl">
      <span style={{"--$$value":59} /* as React.CSSProperties */ } aria-live="polite" aria-label={counter}>59</span>
    </span>
    sec
  </div>
</div>
```


### ~Large text with labels under
<div class="grid grid-flow-col gap-5 text-center auto-cols-max">
  <div class="flex flex-col">
    <span class="font-mono text-5xl countdown">
      <span style="--value:15;" aria-live="polite" aria-label="15">15</span>
    </span>
    days
  </div>
  <div class="flex flex-col">
    <span class="font-mono text-5xl countdown">
      <span style="--value:10;" aria-live="polite" aria-label="10">10</span>
    </span>
    hours
  </div>
  <div class="flex flex-col">
    <span class="font-mono text-5xl countdown">
      <span style="--value:24;" aria-live="polite" aria-label="24">24</span>
    </span>
    min
  </div>
  <div class="flex flex-col">
    <span class="font-mono text-5xl countdown">
      <span style="--value:{counter};" aria-live="polite" aria-label="{counter}">{counter}</span>
    </span>
    sec
  </div>
</div>

```html
<div class="grid auto-cols-max grid-flow-col gap-5 text-center">
  <div class="flex flex-col">
    <span class="$$countdown font-mono text-5xl">
      <span style="--$$value:15;" aria-live="polite" aria-label="15">15</span>
    </span>
    days
  </div>
  <div class="flex flex-col">
    <span class="$$countdown font-mono text-5xl">
      <span style="--$$value:10;" aria-live="polite" aria-label="10">10</span>
    </span>
    hours
  </div>
  <div class="flex flex-col">
    <span class="$$countdown font-mono text-5xl">
      <span style="--$$value:24;" aria-live="polite" aria-label="24">24</span>
    </span>
    min
  </div>
  <div class="flex flex-col">
    <span class="$$countdown font-mono text-5xl">
      <span style="--$$value:59;" aria-live="polite" aria-label="59">59</span>
    </span>
    sec
  </div>
</div>
```
```jsx
{/* For TSX uncomment the commented types below */}
<div class="grid grid-flow-col gap-5 text-center auto-cols-max">
  <div class="flex flex-col">
    <span class="$$countdown font-mono text-5xl">
      <span style={{"--$$value":15} /* as React.CSSProperties */ } aria-live="polite" aria-label={counter}>15</span>
    </span>
    days
  </div>
  <div class="flex flex-col">
    <span class="$$countdown font-mono text-5xl">
      <span style={{"--$$value":10} /* as React.CSSProperties */ } aria-live="polite" aria-label={counter}>10</span>
    </span>
    hours
  </div>
  <div class="flex flex-col">
    <span class="$$countdown font-mono text-5xl">
      <span style={{"--$$value":24} /* as React.CSSProperties */ } aria-live="polite" aria-label={counter}>24</span>
    </span>
    min
  </div>
  <div class="flex flex-col">
    <span class="$$countdown font-mono text-5xl">
      <span style={{"--$$value":59} /* as React.CSSProperties */ } aria-live="polite" aria-label={counter}>59</span>
    </span>
    sec
  </div>
</div>
```


### ~In boxes
<div class="grid grid-flow-col gap-5 text-center auto-cols-max">
  <div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
    <span class="font-mono text-5xl countdown">
      <span style="--value:15;" aria-live="polite" aria-label="15">15</span>
    </span>
    days
  </div>
  <div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
    <span class="font-mono text-5xl countdown">
      <span style="--value:10;" aria-live="polite" aria-label="10">10</span>
    </span>
    hours
  </div>
  <div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
    <span class="font-mono text-5xl countdown">
      <span style="--value:24;" aria-live="polite" aria-label="24">24</span>
    </span>
    min
  </div>
  <div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
    <span class="font-mono text-5xl countdown">
      <span style="--value:{counter};" aria-live="polite" aria-label="{counter}">{counter}</span>
    </span>
    sec
  </div>
</div>

```html
<div class="grid auto-cols-max grid-flow-col gap-5 text-center">
  <div class="bg-neutral rounded-box text-neutral-content flex flex-col p-2">
    <span class="$$countdown font-mono text-5xl">
      <span style="--$$value:15;" aria-live="polite" aria-label="15">15</span>
    </span>
    days
  </div>
  <div class="bg-neutral rounded-box text-neutral-content flex flex-col p-2">
    <span class="$$countdown font-mono text-5xl">
      <span style="--$$value:10;" aria-live="polite" aria-label="10">10</span>
    </span>
    hours
  </div>
  <div class="bg-neutral rounded-box text-neutral-content flex flex-col p-2">
    <span class="$$countdown font-mono text-5xl">
      <span style="--$$value:24;" aria-live="polite" aria-label="24">24</span>
    </span>
    min
  </div>
  <div class="bg-neutral rounded-box text-neutral-content flex flex-col p-2">
    <span class="$$countdown font-mono text-5xl">
      <span style="--$$value:59;" aria-live="polite" aria-label="59">59</span>
    </span>
    sec
  </div>
</div>
```
```jsx
{/* For TSX uncomment the commented types below */}
<div class="grid grid-flow-col gap-5 text-center auto-cols-max">
  <div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
    <span class="$$countdown font-mono text-5xl">
      <span style={{"--$$value":15} /* as React.CSSProperties */ } aria-live="polite" aria-label={counter}>15</span>
    </span>
    days
  </div>
  <div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
    <span class="$$countdown font-mono text-5xl">
      <span style={{"--$$value":10} /* as React.CSSProperties */ } aria-live="polite" aria-label={counter}>10</span>
    </span>
    hours
  </div>
  <div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
    <span class="$$countdown font-mono text-5xl">
      <span style={{"--$$value":24} /* as React.CSSProperties */ } aria-live="polite" aria-label={counter}>24</span>
    </span>
    min
  </div>
  <div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
    <span class="$$countdown font-mono text-5xl">
      <span style={{"--$$value":59} /* as React.CSSProperties */ } aria-live="polite" aria-label={counter}>59</span>
    </span>
    sec
  </div>
</div>
```
