---
title: Segmented Control
desc: Segmented Control is a set of radio or checkbox inputs where the selected option is raised above the group.
source: https://raw.githubusercontent.com/saadeghi/daisyui/refs/heads/master/packages/daisyui/src/components/segmentedcontrol.css
layout: components
classnames:
  component:
    - class: segmented-control
      desc: Container of the segments
  part:
    - class: segmented-control-item
      desc: A single segment (a label wrapping a radio or checkbox input, or a radio or checkbox input)
    - class: segmented-control-indicator
      desc: The element that slides behind the selected segment
  color:
    - class: segmented-control-primary
      desc: primary color
    - class: segmented-control-secondary
      desc: secondary color
    - class: segmented-control-accent
      desc: accent color
    - class: segmented-control-neutral
      desc: neutral color
    - class: segmented-control-success
      desc: success color
    - class: segmented-control-warning
      desc: warning color
    - class: segmented-control-info
      desc: info color
    - class: segmented-control-error
      desc: error color
  size:
    - class: segmented-control-xs
      desc: extra small size
    - class: segmented-control-sm
      desc: small size
    - class: segmented-control-md
      desc: medium size
      default: true
    - class: segmented-control-lg
      desc: large size
    - class: segmented-control-xl
      desc: extra large size
---

<script>
  import Component from "$components/Component.svelte"
  import Translate from "$components/Translate.svelte"
</script>

### ~Segmented control

#### Use the same `name` for the radio inputs of a group

<fieldset class="segmented-control" aria-label="Text alignment">
  <label class="segmented-control-item">
    <input type="radio" name="alignment" value="left" checked>
    Left
  </label>
  <label class="segmented-control-item">
    <input type="radio" name="alignment" value="center">
    Center
  </label>
  <label class="segmented-control-item">
    <input type="radio" name="alignment" value="right">
    Right
  </label>
</fieldset>

```html
<fieldset class="$$segmented-control" aria-label="Text alignment">
  <label class="$$segmented-control-item">
    <input type="radio" name="alignment" value="left" checked />
    Left
  </label>
  <label class="$$segmented-control-item">
    <input type="radio" name="alignment" value="center" />
    Center
  </label>
  <label class="$$segmented-control-item">
    <input type="radio" name="alignment" value="right" />
    Right
  </label>
</fieldset>
```

### ~Animated selection

#### Add one `segmented-control-indicator` to the group to animate the selection

<fieldset class="segmented-control" aria-label="Plan">
  <label class="segmented-control-item">
    <input type="radio" name="plan" value="free" checked>
    Free
  </label>
  <label class="segmented-control-item">
    <input type="radio" name="plan" value="pro">
    Pro
  </label>
  <label class="segmented-control-item">
    <input type="radio" name="plan" value="team">
    Team
  </label>
  <span class="segmented-control-indicator"></span>
</fieldset>

```html
<fieldset class="$$segmented-control" aria-label="Plan">
  <label class="$$segmented-control-item">
    <input type="radio" name="plan" value="free" checked />
    Free
  </label>
  <label class="$$segmented-control-item">
    <input type="radio" name="plan" value="pro" />
    Pro
  </label>
  <label class="$$segmented-control-item">
    <input type="radio" name="plan" value="team" />
    Team
  </label>
  <span class="$$segmented-control-indicator"></span>
</fieldset>
```

### ~Multiple choice

#### Checkbox inputs allow multiple selected segments. Every checked segment paints its own chip, so the sliding indicator is used for single select only

<fieldset class="segmented-control" aria-label="Text style">
  <label class="segmented-control-item">
    <input type="checkbox" name="style" checked>
    Bold
  </label>
  <label class="segmented-control-item">
    <input type="checkbox" name="style">
    Italic
  </label>
  <label class="segmented-control-item">
    <input type="checkbox" name="style" checked>
    Underline
  </label>
</fieldset>

```html
<fieldset class="$$segmented-control" aria-label="Text style">
  <label class="$$segmented-control-item">
    <input type="checkbox" name="style" checked />
    Bold
  </label>
  <label class="$$segmented-control-item">
    <input type="checkbox" name="style" />
    Italic
  </label>
  <label class="$$segmented-control-item">
    <input type="checkbox" name="style" checked />
    Underline
  </label>
</fieldset>
```

### ~With icons

#### Icons are placed next to the text inside the segment

<fieldset class="segmented-control" aria-label="View">
  <label class="segmented-control-item">
    <input type="radio" name="view" value="list" checked>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-5">
      <path d="M4 6h16v2H4zM4 11h16v2H4zM4 16h16v2H4z"/>
    </svg>
    List
  </label>
  <label class="segmented-control-item">
    <input type="radio" name="view" value="grid">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-5">
      <path d="M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z"/>
    </svg>
    Grid
  </label>
</fieldset>

```html
<fieldset class="$$segmented-control" aria-label="View">
  <label class="$$segmented-control-item">
    <input type="radio" name="view" value="list" checked />
    {IconList} List
  </label>
  <label class="$$segmented-control-item">
    <input type="radio" name="view" value="grid" />
    {IconGrid} Grid
  </label>
</fieldset>
```

### ~A bare radio input

#### The `aria-label` of a radio input is shown as its text

<fieldset class="segmented-control" aria-label="Density">
  <input type="radio" class="segmented-control-item" name="density" aria-label="Compact" checked>
  <input type="radio" class="segmented-control-item" name="density" aria-label="Normal">
  <input type="radio" class="segmented-control-item" name="density" aria-label="Comfortable">
</fieldset>

```html
<fieldset class="$$segmented-control" aria-label="Density">
  <input
    type="radio"
    class="$$segmented-control-item"
    name="density"
    aria-label="Compact"
    checked
  />
  <input type="radio" class="$$segmented-control-item" name="density" aria-label="Normal" />
  <input type="radio" class="$$segmented-control-item" name="density" aria-label="Comfortable" />
</fieldset>
```

### ~Colors

<div class="flex flex-wrap gap-2">
<fieldset class="segmented-control segmented-control-primary" aria-label="Primary">
  <label class="segmented-control-item"><input type="radio" name="color-primary" checked>Day</label>
  <label class="segmented-control-item"><input type="radio" name="color-primary">Week</label>
  <label class="segmented-control-item"><input type="radio" name="color-primary">Month</label>
  <span class="segmented-control-indicator"></span>
</fieldset>
<fieldset class="segmented-control segmented-control-secondary" aria-label="Secondary">
  <label class="segmented-control-item"><input type="radio" name="color-secondary" checked>Day</label>
  <label class="segmented-control-item"><input type="radio" name="color-secondary">Week</label>
  <label class="segmented-control-item"><input type="radio" name="color-secondary">Month</label>
  <span class="segmented-control-indicator"></span>
</fieldset>
<fieldset class="segmented-control segmented-control-accent" aria-label="Accent">
  <label class="segmented-control-item"><input type="radio" name="color-accent" checked>Day</label>
  <label class="segmented-control-item"><input type="radio" name="color-accent">Week</label>
  <label class="segmented-control-item"><input type="radio" name="color-accent">Month</label>
  <span class="segmented-control-indicator"></span>
</fieldset>
<fieldset class="segmented-control segmented-control-neutral" aria-label="Neutral">
  <label class="segmented-control-item"><input type="radio" name="color-neutral" checked>Day</label>
  <label class="segmented-control-item"><input type="radio" name="color-neutral">Week</label>
  <label class="segmented-control-item"><input type="radio" name="color-neutral">Month</label>
  <span class="segmented-control-indicator"></span>
</fieldset>
<fieldset class="segmented-control segmented-control-success" aria-label="Success">
  <label class="segmented-control-item"><input type="radio" name="color-success" checked>Day</label>
  <label class="segmented-control-item"><input type="radio" name="color-success">Week</label>
  <label class="segmented-control-item"><input type="radio" name="color-success">Month</label>
  <span class="segmented-control-indicator"></span>
</fieldset>
<fieldset class="segmented-control segmented-control-warning" aria-label="Warning">
  <label class="segmented-control-item"><input type="radio" name="color-warning" checked>Day</label>
  <label class="segmented-control-item"><input type="radio" name="color-warning">Week</label>
  <label class="segmented-control-item"><input type="radio" name="color-warning">Month</label>
  <span class="segmented-control-indicator"></span>
</fieldset>
<fieldset class="segmented-control segmented-control-info" aria-label="Info">
  <label class="segmented-control-item"><input type="radio" name="color-info" checked>Day</label>
  <label class="segmented-control-item"><input type="radio" name="color-info">Week</label>
  <label class="segmented-control-item"><input type="radio" name="color-info">Month</label>
  <span class="segmented-control-indicator"></span>
</fieldset>
<fieldset class="segmented-control segmented-control-error" aria-label="Error">
  <label class="segmented-control-item"><input type="radio" name="color-error" checked>Day</label>
  <label class="segmented-control-item"><input type="radio" name="color-error">Week</label>
  <label class="segmented-control-item"><input type="radio" name="color-error">Month</label>
  <span class="segmented-control-indicator"></span>
</fieldset>
</div>

```html
<fieldset class="$$segmented-control $$segmented-control-primary" aria-label="Primary">
  <label class="$$segmented-control-item"><input type="radio" name="color-primary" checked>Day</label>
  <label class="$$segmented-control-item"><input type="radio" name="color-primary">Week</label>
  <label class="$$segmented-control-item"><input type="radio" name="color-primary">Month</label>
  <span class="$$segmented-control-indicator"></span>
</fieldset>
<fieldset class="$$segmented-control $$segmented-control-secondary" aria-label="Secondary">
  <label class="$$segmented-control-item"><input type="radio" name="color-secondary" checked>Day</label>
  <label class="$$segmented-control-item"><input type="radio" name="color-secondary">Week</label>
  <label class="$$segmented-control-item"><input type="radio" name="color-secondary">Month</label>
  <span class="$$segmented-control-indicator"></span>
</fieldset>
<fieldset class="$$segmented-control $$segmented-control-accent" aria-label="Accent">
  <label class="$$segmented-control-item"><input type="radio" name="color-accent" checked>Day</label>
  <label class="$$segmented-control-item"><input type="radio" name="color-accent">Week</label>
  <label class="$$segmented-control-item"><input type="radio" name="color-accent">Month</label>
  <span class="$$segmented-control-indicator"></span>
</fieldset>
<fieldset class="$$segmented-control $$segmented-control-neutral" aria-label="Neutral">
  <label class="$$segmented-control-item"><input type="radio" name="color-neutral" checked>Day</label>
  <label class="$$segmented-control-item"><input type="radio" name="color-neutral">Week</label>
  <label class="$$segmented-control-item"><input type="radio" name="color-neutral">Month</label>
  <span class="$$segmented-control-indicator"></span>
</fieldset>
<fieldset class="$$segmented-control $$segmented-control-success" aria-label="Success">
  <label class="$$segmented-control-item"><input type="radio" name="color-success" checked>Day</label>
  <label class="$$segmented-control-item"><input type="radio" name="color-success">Week</label>
  <label class="$$segmented-control-item"><input type="radio" name="color-success">Month</label>
  <span class="$$segmented-control-indicator"></span>
</fieldset>
<fieldset class="$$segmented-control $$segmented-control-warning" aria-label="Warning">
  <label class="$$segmented-control-item"><input type="radio" name="color-warning" checked>Day</label>
  <label class="$$segmented-control-item"><input type="radio" name="color-warning">Week</label>
  <label class="$$segmented-control-item"><input type="radio" name="color-warning">Month</label>
  <span class="$$segmented-control-indicator"></span>
</fieldset>
<fieldset class="$$segmented-control $$segmented-control-info" aria-label="Info">
  <label class="$$segmented-control-item"><input type="radio" name="color-info" checked>Day</label>
  <label class="$$segmented-control-item"><input type="radio" name="color-info">Week</label>
  <label class="$$segmented-control-item"><input type="radio" name="color-info">Month</label>
  <span class="$$segmented-control-indicator"></span>
</fieldset>
<fieldset class="$$segmented-control $$segmented-control-error" aria-label="Error">
  <label class="$$segmented-control-item"><input type="radio" name="color-error" checked>Day</label>
  <label class="$$segmented-control-item"><input type="radio" name="color-error">Week</label>
  <label class="$$segmented-control-item"><input type="radio" name="color-error">Month</label>
  <span class="$$segmented-control-indicator"></span>
</fieldset>
```

### ~Sizes

<fieldset class="segmented-control segmented-control-xs" aria-label="Extra small">
  <label class="segmented-control-item">
    <input type="radio" name="size-xs" checked>
    Extra small
  </label>
  <label class="segmented-control-item">
    <input type="radio" name="size-xs">
    Option
  </label>
</fieldset>

<fieldset class="segmented-control segmented-control-sm" aria-label="Small">
  <label class="segmented-control-item">
    <input type="radio" name="size-sm" checked>
    Small
  </label>
  <label class="segmented-control-item">
    <input type="radio" name="size-sm">
    Option
  </label>
</fieldset>

<fieldset class="segmented-control segmented-control-md" aria-label="Medium">
  <label class="segmented-control-item">
    <input type="radio" name="size-md" checked>
    Medium
  </label>
  <label class="segmented-control-item">
    <input type="radio" name="size-md">
    Option
  </label>
</fieldset>

<fieldset class="segmented-control segmented-control-lg" aria-label="Large">
  <label class="segmented-control-item">
    <input type="radio" name="size-lg" checked>
    Large
  </label>
  <label class="segmented-control-item">
    <input type="radio" name="size-lg">
    Option
  </label>
</fieldset>

<fieldset class="segmented-control segmented-control-xl" aria-label="Extra large">
  <label class="segmented-control-item">
    <input type="radio" name="size-xl" checked>
    Extra large
  </label>
  <label class="segmented-control-item">
    <input type="radio" name="size-xl">
    Option
  </label>
</fieldset>

```html
<fieldset class="$$segmented-control $$segmented-control-xs">
  <label class="$$segmented-control-item">
    <input type="radio" name="size" checked />
    Extra small
  </label>
  <label class="$$segmented-control-item">
    <input type="radio" name="size" />
    Option
  </label>
</fieldset>
```

### ~Disabled

#### Add `disabled` to the radio input or to the `fieldset`

<fieldset class="segmented-control" aria-label="Disabled group" disabled>
  <label class="segmented-control-item">
    <input type="radio" name="disabled" checked disabled>
    One
  </label>
  <label class="segmented-control-item">
    <input type="radio" name="disabled" disabled>
    Two
  </label>
</fieldset>

```html
<fieldset class="$$segmented-control" disabled>
  <label class="$$segmented-control-item">
    <input type="radio" name="disabled" checked disabled />
    One
  </label>
  <label class="$$segmented-control-item">
    <input type="radio" name="disabled" disabled />
    Two
  </label>
</fieldset>
```
