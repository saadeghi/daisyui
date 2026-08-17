---
title: Sheet
desc: Sheet is a panel that slides in from the edge of the screen to show content on demand.
source: https://raw.githubusercontent.com/saadeghi/daisyui/refs/heads/master/packages/daisyui/src/components/sheet.css
layout: components
classnames:
  component:
    - class: sheet
      desc: The container of the sheet. Covers the screen and is positioned at one of the edges
  part:
    - class: sheet-backdrop
      desc: Dark overlay that appears when the sheet is open. Clicking it closes the sheet
    - class: sheet-content
      desc: The content area of the sheet
    - class: sheet-handle
      desc: The grip of the sheet that stays visible on screen and opens the sheet when clicked
    - class: sheet-radio-closed
      desc: Sets the sheet state to closed
    - class: sheet-radio-half
      desc: Sets the sheet state to half
    - class: sheet-radio-full
      desc: Sets the sheet state to full
    - class: sheet-spacer-closed
      desc: Keeps the sheet content in place for the closed state
    - class: sheet-spacer-half
      desc: Keeps the sheet content in place for the half state
    - class: sheet-toggle
      desc: Changes the state of the sheet when clicked
    - class: sheet-toggle-to-closed
      desc: Closes the sheet when clicked
    - class: sheet-toggle-to-half
      desc: Shows the sheet in half state when clicked
    - class: sheet-toggle-to-full
      desc: Fully opens the sheet when clicked
  placement:
    - class: sheet-bottom
      desc: Shows the sheet at the bottom of the screen
    - class: sheet-top
      desc: Shows the sheet at the top of the screen
    - class: sheet-start
      desc: Shows the sheet at the start side (left side in LTR)
    - class: sheet-end
      desc: Shows the sheet at the end side (right side in LTR)
---

<script>
  import Component from "$components/Component.svelte"
  import Translate from "$components/Translate.svelte"
</script>

### Structure

Sheet is a fixed element that covers the screen and is positioned at one of the edges (top, bottom, start, end).
Sheet has 3 states: `closed`, `half` and `full`. The state is controlled by hidden radio inputs with the same `name` attribute.

In `closed` state, only the `sheet-handle` is visible at the edge of the screen.
Clicking the `sheet-toggle-to-*` labels inside the handle changes the state of the sheet.

```json:Structure
.sheet // The root container. Add a placement class (sheet-bottom, sheet-top, sheet-start, sheet-end)
  ├── .sheet-radio-closed // checked = closed state
  ├── .sheet-radio-half // checked = half state (optional)
  ├── .sheet-radio-full // checked = full state
  ├── .sheet-backdrop // Covers the screen when the sheet is open. Clicking it closes the sheet
  ├── .sheet-spacer-closed // Keeps the sheet content in place for the closed state
  ├── .sheet-spacer-half // Keeps the sheet content in place for the half state (optional)
  ╰── .sheet-content // The content area of the sheet
       ├── .sheet-handle // The grip of the sheet that stays visible on screen and opens the sheet
       │    ├── .sheet-toggle-to-half // Shows the sheet in half state (optional)
       │    ├── .sheet-toggle-to-full // Fully opens the sheet
       │    ╰── .sheet-toggle-to-closed // Closes the sheet
       ╰── // Your content goes here
```

### Functionality

All radio inputs of a sheet must have the same `name` attribute.
The `sheet-radio-closed` input must be checked by default so the sheet starts in `closed` state.

To change the state of the sheet, you can use:
- `sheet-toggle-to-*` labels inside the `sheet-handle` — clicking them checks the matching radio input
- `sheet-backdrop` label — clicking it checks the `sheet-radio-closed` input and closes the sheet

On touch devices, the sheet can be dragged between the states using scroll-snap.
On desktop, clicking the handle changes the state with a smooth transition.


> :INFO:
>
> The examples are contained in the example boxes. On a real page, the sheet covers the full screen and you don't need the wrapper or the `--sheet-trans-*` overrides. They are not shown in the `HTML` and `JSX` tabs.

### ~Bottom sheet

#### Click the handle to open the sheet on desktop and slide on mobile devices

<div class="contain-layout flex h-96 w-full items-center justify-center rounded-box border border-base-200 bg-base-100">
  <div class="max-w-sm space-y-4 p-8 text-center">
    <h2 class="text-lg font-bold">Page content</h2>
    <p class="text-sm text-base-content/70">Some content</p>
    <p class="text-sm text-base-content/70">Some content</p>
    <p class="text-sm text-base-content/70">Some content</p>
    <p class="text-sm text-base-content/70">Some content</p>
    <p class="text-sm text-base-content/70">Some content</p>
    <p class="text-sm text-base-content/70">Some content</p>
  </div>

  <div class="sheet sheet-bottom [--sheet-handle:1.5em] [--sheet-trans-closed:translateY(calc(100%_-_var(--sheet-handle)))] [--sheet-trans-full:translateY(0)]">
    <input type="radio" name="bottom-sheet" id="bottom-sheet-closed" class="sheet-radio-closed" checked />
    <input type="radio" name="bottom-sheet" id="bottom-sheet-full" class="sheet-radio-full" />

    <label class="sheet-backdrop bg-neutral/10" for="bottom-sheet-closed"></label>

    <div class="sheet-spacer-closed"></div>

    <div class="sheet-content bottom-0 bg-base-200">
      <div class="sheet-handle">
        <div class="h-1.5 w-12 rounded-full bg-base-content/30"></div>

        <label class="sheet-toggle-to-full sheet-toggle" for="bottom-sheet-full"></label>
        <label class="sheet-toggle-to-closed sheet-toggle" for="bottom-sheet-closed"></label>
      </div>

      <div class="flex-1 overflow-y-auto p-6">
        <h2 class="mb-4 text-xl font-bold">Bottom sheet</h2>
        <p>This is a bottom sheet.</p>
        <p>It slides in from the bottom edge of the screen.</p>
        <p>Click the handle to open or close it on desktop, or slide it on mobile devices.</p>
      </div>
    </div>
  </div>
</div>

```html
<div class="$$sheet $$sheet-bottom [--sheet-handle:1.5em]">
  <input type="radio" name="bottom-sheet" id="bottom-sheet-closed" class="$$sheet-radio-closed" checked />
  <input type="radio" name="bottom-sheet" id="bottom-sheet-full" class="$$sheet-radio-full" />

  <label class="$$sheet-backdrop bg-neutral/10" for="bottom-sheet-closed"></label>

  <div class="$$sheet-spacer-closed"></div>

  <div class="$$sheet-content bg-base-200">
    <div class="$$sheet-handle">
      <div class="h-1.5 w-12 rounded-full bg-base-content/30"></div>

      <label class="$$sheet-toggle-to-full $$sheet-toggle" for="bottom-sheet-full"></label>
      <label class="$$sheet-toggle-to-closed $$sheet-toggle" for="bottom-sheet-closed"></label>
    </div>

    <div class="flex-1 overflow-y-auto p-6">
      <!-- Sheet content goes here -->
    </div>
  </div>
</div>
```

### ~Top sheet

#### Click the handle to open the sheet on desktop and slide on mobile devices

<div class="contain-layout flex h-96 w-full items-center justify-center rounded-box border border-base-200 bg-base-100">
  <div class="max-w-sm space-y-4 p-8 text-center">
    <h2 class="text-lg font-bold">Page content</h2>
    <p class="text-sm text-base-content/70">Some content</p>
    <p class="text-sm text-base-content/70">Some content</p>
    <p class="text-sm text-base-content/70">Some content</p>
    <p class="text-sm text-base-content/70">Some content</p>
    <p class="text-sm text-base-content/70">Some content</p>
    <p class="text-sm text-base-content/70">Some content</p>
  </div>
  <div class="sheet sheet-top [--sheet-handle:1.5em] [--sheet-trans-closed:translateY(calc(-100%_+_var(--sheet-handle)))] [--sheet-trans-full:translateY(0)]">
    <input type="radio" name="top-sheet" id="top-sheet-closed" class="sheet-radio-closed" checked />
    <input type="radio" name="top-sheet" id="top-sheet-full" class="sheet-radio-full" />

    <label class="sheet-backdrop bg-neutral/10" for="top-sheet-closed"></label>

    <div class="sheet-spacer-closed"></div>

    <div class="sheet-content top-0 bg-base-200">
      <div class="sheet-handle">
        <div class="h-1.5 w-12 rounded-full bg-base-content/30"></div>

        <label class="sheet-toggle-to-full sheet-toggle" for="top-sheet-full"></label>
        <label class="sheet-toggle-to-closed sheet-toggle" for="top-sheet-closed"></label>
      </div>

      <div class="flex-1 overflow-y-auto p-6">
        <h2 class="mb-4 text-xl font-bold">Top sheet</h2>
        <p>This is a top sheet.</p>
        <p>It slides in from the top edge of the screen.</p>
        <p>Click the handle to open or close it on desktop, or slide it on mobile devices.</p>
      </div>
    </div>
  </div>
</div>

```html
<div class="$$sheet $$sheet-top [--sheet-handle:1.5em]">
  <input type="radio" name="top-sheet" id="top-sheet-closed" class="$$sheet-radio-closed" checked />
  <input type="radio" name="top-sheet" id="top-sheet-full" class="$$sheet-radio-full" />

  <label class="$$sheet-backdrop bg-neutral/10" for="top-sheet-closed"></label>

  <div class="$$sheet-spacer-closed"></div>

  <div class="$$sheet-content bg-base-200">
    <div class="$$sheet-handle">
      <div class="h-1.5 w-12 rounded-full bg-base-content/30"></div>

      <label class="$$sheet-toggle-to-full $$sheet-toggle" for="top-sheet-full"></label>
      <label class="$$sheet-toggle-to-closed $$sheet-toggle" for="top-sheet-closed"></label>
    </div>

    <div class="flex-1 overflow-y-auto p-6">
      <!-- Sheet content goes here -->
    </div>
  </div>
</div>
```

### ~Start sheet

#### Click the handle to open the sheet on desktop and slide on mobile devices

<div class="contain-layout flex h-96 w-full items-center justify-center rounded-box border border-base-200 bg-base-100">
  <div class="max-w-sm space-y-4 p-8 text-center">
    <h2 class="text-lg font-bold">Page content</h2>
    <p class="text-sm text-base-content/70">Some content</p>
    <p class="text-sm text-base-content/70">Some content</p>
    <p class="text-sm text-base-content/70">Some content</p>
    <p class="text-sm text-base-content/70">Some content</p>
    <p class="text-sm text-base-content/70">Some content</p>
    <p class="text-sm text-base-content/70">Some content</p>
  </div>
  <div class="sheet sheet-start [--sheet-handle:1.5em] [--sheet-full:80%] sm:[--sheet-full:400px]">
    <input type="radio" name="start-sheet" id="start-sheet-closed" class="sheet-radio-closed" checked />
    <input type="radio" name="start-sheet" id="start-sheet-full" class="sheet-radio-full" />

    <label class="sheet-backdrop bg-neutral/10" for="start-sheet-closed"></label>

    <div class="sheet-spacer-closed"></div>

    <div class="sheet-content h-full bg-base-200">
      <div class="sheet-handle">
        <div class="h-12 w-1.5 rounded-full bg-base-content/30"></div>

        <label class="sheet-toggle-to-full sheet-toggle" for="start-sheet-full"></label>
        <label class="sheet-toggle-to-closed sheet-toggle" for="start-sheet-closed"></label>
      </div>

      <div class="flex-1 overflow-y-auto p-6">
        <h2 class="mb-4 text-xl font-bold">Start sheet</h2>
        <p>This is a start sheet.</p>
        <p>It slides in from the start edge of the screen.</p>
        <p>Click the handle to open or close it on desktop, or slide it on mobile devices.</p>
      </div>
    </div>
  </div>
</div>

```html
<div class="$$sheet $$sheet-start [--sheet-handle:1.5em] [--sheet-full:80%] sm:[--sheet-full:400px]">
  <input type="radio" name="start-sheet" id="start-sheet-closed" class="$$sheet-radio-closed" checked />
  <input type="radio" name="start-sheet" id="start-sheet-full" class="$$sheet-radio-full" />

  <label class="$$sheet-backdrop bg-neutral/10" for="start-sheet-closed"></label>

  <div class="$$sheet-spacer-closed"></div>

  <div class="$$sheet-content bg-base-200">
    <div class="$$sheet-handle">
      <div class="h-12 w-1.5 rounded-full bg-base-content/30"></div>

      <label class="$$sheet-toggle-to-full $$sheet-toggle" for="start-sheet-full"></label>
      <label class="$$sheet-toggle-to-closed $$sheet-toggle" for="start-sheet-closed"></label>
    </div>

    <div class="flex-1 overflow-y-auto p-6">
      <!-- Sheet content goes here -->
    </div>
  </div>
</div>
```

### ~End sheet

#### Click the handle to open the sheet on desktop and slide on mobile devices

<div class="contain-layout flex h-96 w-full items-center justify-center rounded-box border border-base-200 bg-base-100">
  <div class="max-w-sm space-y-4 p-8 text-center">
    <h2 class="text-lg font-bold">Page content</h2>
    <p class="text-sm text-base-content/70">Some content</p>
    <p class="text-sm text-base-content/70">Some content</p>
    <p class="text-sm text-base-content/70">Some content</p>
    <p class="text-sm text-base-content/70">Some content</p>
    <p class="text-sm text-base-content/70">Some content</p>
    <p class="text-sm text-base-content/70">Some content</p>
  </div>
  <div class="sheet sheet-end [--sheet-handle:1.5em] [--sheet-full:80%] sm:[--sheet-full:400px]">
    <input type="radio" name="end-sheet" id="end-sheet-closed" class="sheet-radio-closed" checked />
    <input type="radio" name="end-sheet" id="end-sheet-full" class="sheet-radio-full" />

    <label class="sheet-backdrop bg-neutral/10" for="end-sheet-closed"></label>

    <div class="sheet-spacer-closed"></div>

    <div class="sheet-content h-full bg-base-200">
      <div class="sheet-handle">
        <div class="h-12 w-1.5 rounded-full bg-base-content/30"></div>

        <label class="sheet-toggle-to-full sheet-toggle" for="end-sheet-full"></label>
        <label class="sheet-toggle-to-closed sheet-toggle" for="end-sheet-closed"></label>
      </div>

      <div class="flex-1 overflow-y-auto p-6">
        <h2 class="mb-4 text-xl font-bold">End sheet</h2>
        <p>This is an end sheet.</p>
        <p>It slides in from the end edge of the screen.</p>
        <p>Click the handle to open or close it on desktop, or slide it on mobile devices.</p>
      </div>
    </div>
  </div>
</div>

```html
<div class="$$sheet $$sheet-end [--sheet-handle:1.5em] [--sheet-full:80%]">
  <input type="radio" name="end-sheet" id="end-sheet-closed" class="$$sheet-radio-closed" checked />
  <input type="radio" name="end-sheet" id="end-sheet-full" class="$$sheet-radio-full" />

  <label class="$$sheet-backdrop bg-neutral/10" for="end-sheet-closed"></label>

  <div class="$$sheet-spacer-closed"></div>

  <div class="$$sheet-content bg-base-200">
    <div class="$$sheet-handle">
      <div class="h-12 w-1.5 rounded-full bg-base-content/30"></div>

      <label class="$$sheet-toggle-to-full $$sheet-toggle" for="end-sheet-full"></label>
      <label class="$$sheet-toggle-to-closed $$sheet-toggle" for="end-sheet-closed"></label>
    </div>

    <div class="flex-1 overflow-y-auto p-6">
      <!-- Sheet content goes here -->
    </div>
  </div>
</div>
```

### ~End sheet with a custom handle

#### A tab-like handle with text. Click it to open the sheet

<div class="contain-layout flex h-96 w-full items-center justify-center rounded-box border border-base-200 bg-base-100">
  <div class="max-w-sm space-y-4 p-8 text-center">
    <h2 class="text-lg font-bold">Page content</h2>
    <p class="text-sm text-base-content/70">Some content</p>
    <p class="text-sm text-base-content/70">Some content</p>
    <p class="text-sm text-base-content/70">Some content</p>
    <p class="text-sm text-base-content/70">Some content</p>
    <p class="text-sm text-base-content/70">Some content</p>
    <p class="text-sm text-base-content/70">Some content</p>
  </div>

  <div class="sheet sheet-end [--sheet-handle:2rem] [--sheet-full:80%] sm:[--sheet-full:400px]">
    <input type="radio" name="end-custom-sheet" id="end-custom-sheet-closed" class="sheet-radio-closed" checked />
    <input type="radio" name="end-custom-sheet" id="end-custom-sheet-full" class="sheet-radio-full" />

    <label class="sheet-backdrop bg-neutral/10" for="end-custom-sheet-closed"></label>

    <div class="sheet-spacer-closed"></div>

    <div class="sheet-content h-full pointer-events-none">
      <div class="sheet-handle pointer-events-auto self-start top-1/4 -translate-y-1/2 bg-neutral text-neutral-content">
        <span class="px-4 font-bold tracking-widest [writing-mode:vertical-rl] rotate-180">Settings</span>

        <label class="sheet-toggle-to-full sheet-toggle" for="end-custom-sheet-full"></label>
        <label class="sheet-toggle-to-closed sheet-toggle" for="end-custom-sheet-closed"></label>
      </div>

      <div class="flex-1 overflow-y-auto bg-base-200 p-6 pointer-events-auto">
        <h2 class="mb-4 text-xl font-bold">End sheet</h2>
        <p>This is an end sheet with a custom handle.</p>
        <p>Click the tab to open or close it on desktop, or slide it on mobile devices.</p>
      </div>
    </div>
  </div>
</div>

```html
<div class="$$sheet $$sheet-end [--sheet-handle:3rem] [--sheet-full:80%]">
  <input type="radio" name="end-custom-sheet" id="end-custom-sheet-closed" class="$$sheet-radio-closed" checked />
  <input type="radio" name="end-custom-sheet" id="end-custom-sheet-full" class="$$sheet-radio-full" />

  <label class="$$sheet-backdrop bg-neutral/10" for="end-custom-sheet-closed"></label>

  <div class="$$sheet-spacer-closed"></div>

  <div class="$$sheet-content pointer-events-none">
    <div class="$$sheet-handle pointer-events-auto self-start top-1/4 -translate-y-1/2 bg-neutral text-neutral-content">
      <span class="px-4 font-bold tracking-widest [writing-mode:vertical-rl] rotate-180">Settings</span>

      <label class="$$sheet-toggle-to-full $$sheet-toggle" for="end-custom-sheet-full"></label>
      <label class="$$sheet-toggle-to-closed $$sheet-toggle" for="end-custom-sheet-closed"></label>
    </div>

    <div class="flex-1 overflow-y-auto bg-base-200 p-6 pointer-events-auto">
      <!-- Sheet content goes here -->
    </div>
  </div>
</div>
```

### ~Bottom sheet with 3 states

#### The sheet has closed, half and full states. Click the handle to change the state

<div class="contain-layout flex h-96 w-full items-center justify-center rounded-box border border-base-200 bg-base-100">
  <div class="max-w-sm space-y-4 p-8 text-center">
    <h2 class="text-lg font-bold">Page content</h2>
    <p class="text-sm text-base-content/70">Some content</p>
    <p class="text-sm text-base-content/70">Some content</p>
    <p class="text-sm text-base-content/70">Some content</p>
    <p class="text-sm text-base-content/70">Some content</p>
    <p class="text-sm text-base-content/70">Some content</p>
    <p class="text-sm text-base-content/70">Some content</p>
  </div>
  <div class="sheet sheet-bottom [--sheet-handle:1.5em] [--sheet-trans-closed:translateY(calc(100%_-_var(--sheet-handle)))] [--sheet-trans-half:translateY(calc(100%_-_10rem))] [--sheet-trans-full:translateY(0)]">
    <input type="radio" name="three-state-sheet" id="three-state-sheet-closed" class="sheet-radio-closed" checked />
    <input type="radio" name="three-state-sheet" id="three-state-sheet-half" class="sheet-radio-half" />
    <input type="radio" name="three-state-sheet" id="three-state-sheet-full" class="sheet-radio-full" />

    <label class="sheet-backdrop bg-neutral/10" for="three-state-sheet-closed"></label>

    <div class="sheet-spacer-closed"></div>
    <div class="sheet-spacer-half"></div>

    <div class="sheet-content bottom-0 bg-neutral text-neutral-content">
      <div class="sheet-handle">
        <div class="h-1.5 w-12 rounded-full bg-neutral-content/90"></div>

        <label class="sheet-toggle-to-half sheet-toggle" for="three-state-sheet-half"></label>
        <label class="sheet-toggle-to-full sheet-toggle" for="three-state-sheet-full"></label>
        <label class="sheet-toggle-to-closed sheet-toggle" for="three-state-sheet-closed"></label>
      </div>

      <div class="flex-1 overflow-y-auto p-6">
        <h2 class="mb-4 text-xl font-bold">Bottom sheet (3 states)</h2>
        <p>This is a bottom sheet with 3 states.</p>
        <p>Click the handle to switch between closed, half and full states.</p>
        <p class="mt-6">Some more content</p>
        <p>Some more content</p>
        <p>Some more content</p>
        <p>Some more content</p>
      </div>
    </div>
  </div>
</div>

```html
<div class="$$sheet $$sheet-bottom [--sheet-handle:1.5em]">
  <input type="radio" name="three-state-sheet" id="three-state-sheet-closed" class="$$sheet-radio-closed" checked />
  <input type="radio" name="three-state-sheet" id="three-state-sheet-half" class="$$sheet-radio-half" />
  <input type="radio" name="three-state-sheet" id="three-state-sheet-full" class="$$sheet-radio-full" />

  <label class="$$sheet-backdrop bg-neutral/10" for="three-state-sheet-closed"></label>

  <div class="$$sheet-spacer-closed"></div>
  <div class="$$sheet-spacer-half"></div>

  <div class="$$sheet-content bg-neutral text-neutral-content">
    <div class="$$sheet-handle">
      <div class="h-1.5 w-12 rounded-full bg-neutral-content/90"></div>

      <label class="$$sheet-toggle-to-half $$sheet-toggle" for="three-state-sheet-half"></label>
      <label class="$$sheet-toggle-to-full $$sheet-toggle" for="three-state-sheet-full"></label>
      <label class="$$sheet-toggle-to-closed $$sheet-toggle" for="three-state-sheet-closed"></label>
    </div>

    <div class="flex-1 overflow-y-auto p-6">
      <!-- Sheet content goes here -->
    </div>
  </div>
</div>
```

### Customization

You can customize the size of the sheet and the handle using CSS variables:

| CSS Variable     | Description                                                         |
| ---------------- | ------------------------------------------------------------------- |
| `--sheet-half`   | Size of the sheet in half state (defaults to 50% of the screen)     |
| `--sheet-full`   | Size of the sheet in full state (defaults to 100% of the screen)    |
| `--sheet-handle` | Size of the sheet handle (defaults to 3em)                          |

```html
<div class="sheet sheet-bottom [--sheet-half:20dvh] [--sheet-full:50dvh] [--sheet-handle:40px]">
  ...
</div>
```
