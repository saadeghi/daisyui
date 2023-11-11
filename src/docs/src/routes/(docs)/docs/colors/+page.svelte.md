---
title: Colors
desc: How to use daisyUI colors?
published: true
---

<script>
  import Translate from "@components/Translate.svelte"
</script>

## <Translate text="Introduction" />

<div class="max-w-3xl">

<Translate text="daisyUI is fully themeable and colorable," />  
<Translate text="So instead of using constant color utility classes like:" />

- <span class="badge badge-xs bg-green-500"></span> bg-green-500
- <span class="badge badge-xs bg-orange-600"></span> bg-orange-600
- <span class="badge badge-xs bg-blue-700"></span> bg-blue-700
- <Translate text="etc." />

<Translate text="It's suggested to use semantic color utility classes like:" />

- <span class="badge badge-xs bg-primary"></span> bg-primary
- <span class="badge badge-xs bg-secondary"></span> bg-secondary
- <span class="badge badge-xs bg-accent"></span> bg-accent
- <Translate text="etc." />

<Translate text="Each color name contains CSS variables and each daisyUI theme applies color values to the utility classes when it is applied." />

## <Translate text="Benefits" />

<Translate text="Semantic color names make more sense because when we design interfaces, we don't just use any random color. We define a specific color palette with names like <code>primary</code>, <code>secondary</code>, etc. and we only use those specific colors in our interfaces." />  
<Translate text="Also, using semantic color names makes theming easier. You wouldn't have to define dark-mode colors for every single element and you wouldn't be limited to only light/dark themes. you can have multiple themes available and each theme is just a few lines of CSS variables." />

</div>

## <Translate text="List of all daisyUI color names" />

<Translate text="You can use these color names in your theme or in utility classes." />

<div class="overflow-x-auto">
<div class="whitespace-nowrap">

|                                                                 | <Translate text="Color name + description" />                                                                                                              | <Translate text="Required or optional for themes" />                                                                                                        | <Translate text="Example use" />                                                                                                                                           |
| --------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span class="badge relative top-4 bg-primary"></span>           | <span class="font-mono font-bold">primary</span> <br> <span class="text-xs opacity-60">Primary color </span>                                               | <span class="badge badge-sm">required</span>                                                                                                                | <span class="font-mono text-xs opacity-60">Class name: `bg-primary`</span> <br> <span class="text-xs opacity-60 font-mono">CSS variable: `hsl(var(--p))`</span>            |
| <span class="badge relative top-4 bg-primary-focus"></span>     | <span class="font-mono font-bold">primary-focus</span> <br> <span class="text-xs opacity-60">Primary color when focused </span>                            | <span class="badge badge-sm badge-ghost">optional</span> <br> <span class="text-xs opacity-60">Will be a darker tone of primary if not specified</span>     | <span class="font-mono text-xs opacity-60">Class name: `bg-primary-focus`</span> <br> <span class="text-xs opacity-60 font-mono">CSS variable: `hsl(var(--pf))`</span>     |
| <span class="badge relative top-4 bg-primary-content"></span>   | <span class="font-mono font-bold">primary-content</span> <br> <span class="text-xs opacity-60">Foreground content color to use on primary color </span>    | <span class="badge badge-sm badge-ghost">optional</span> <br> <span class="text-xs opacity-60">Will be a readable tone of primary if not specified</span>   | <span class="font-mono text-xs opacity-60">Class name: `bg-primary-content`</span> <br> <span class="text-xs opacity-60 font-mono">CSS variable: `hsl(var(--pc))`</span>   |
|                                                                 |                                                                                                                                                            |                                                                                                                                                             |                                                                                                                                                                            |
| <span class="badge relative top-4 bg-secondary"></span>         | <span class="font-mono font-bold">secondary</span> <br> <span class="text-xs opacity-60">Secondary color </span>                                           | <span class="badge badge-sm">required</span>                                                                                                                | <span class="font-mono text-xs opacity-60">Class name: `bg-secondary`</span> <br> <span class="text-xs opacity-60 font-mono">CSS variable: `hsl(var(--s))`</span>          |
| <span class="badge relative top-4 bg-secondary-focus"></span>   | <span class="font-mono font-bold">secondary-focus</span> <br> <span class="text-xs opacity-60">Secondary color when focused </span>                        | <span class="badge badge-sm badge-ghost">optional</span> <br> <span class="text-xs opacity-60">Will be a darker tone of secondary if not specified</span>   | <span class="font-mono text-xs opacity-60">Class name: `bg-secondary-focus`</span> <br> <span class="text-xs opacity-60 font-mono">CSS variable: `hsl(var(--sf))`</span>   |
| <span class="badge relative top-4 bg-secondary-content"></span> | <span class="font-mono font-bold">secondary-content</span> <br> <span class="text-xs opacity-60">Foreground content color to use on secondary color</span> | <span class="badge badge-sm badge-ghost">optional</span> <br> <span class="text-xs opacity-60">Will be a readable tone of secondary if not specified</span> | <span class="font-mono text-xs opacity-60">Class name: `bg-secondary-content`</span> <br> <span class="text-xs opacity-60 font-mono">CSS variable: `hsl(var(--sc))`</span> |
|                                                                 |                                                                                                                                                            |                                                                                                                                                             |                                                                                                                                                                            |
| <span class="badge relative top-4 bg-accent"></span>            | <span class="font-mono font-bold">accent</span> <br> <span class="text-xs opacity-60">Accent color </span>                                                 | <span class="badge badge-sm">required</span>                                                                                                                | <span class="font-mono text-xs opacity-60">Class name: `bg-accent`</span> <br> <span class="text-xs opacity-60 font-mono">CSS variable: `hsl(var(--a))`</span>             |
| <span class="badge relative top-4 bg-accent-focus"></span>      | <span class="font-mono font-bold">accent-focus</span> <br> <span class="text-xs opacity-60">Accent color when focused </span>                              | <span class="badge badge-sm badge-ghost">optional</span> <br> <span class="text-xs opacity-60">Will be a darker tone of accent if not specified</span>      | <span class="font-mono text-xs opacity-60">Class name: `bg-accent-focus`</span> <br> <span class="text-xs opacity-60 font-mono">CSS variable: `hsl(var(--af))`</span>      |
| <span class="badge relative top-4 bg-accent-content"></span>    | <span class="font-mono font-bold">accent-content</span> <br> <span class="text-xs opacity-60">Foreground content color to use on accent color </span>      | <span class="badge badge-sm badge-ghost">optional</span> <br> <span class="text-xs opacity-60">Will be a readable tone of accent if not specified</span>    | <span class="font-mono text-xs opacity-60">Class name: `bg-accent-content`</span> <br> <span class="text-xs opacity-60 font-mono">CSS variable: `hsl(var(--ac))`</span>    |
|                                                                 |                                                                                                                                                            |                                                                                                                                                             |                                                                                                                                                                            |
| <span class="badge relative top-4 bg-neutral"></span>           | <span class="font-mono font-bold">neutral</span> <br> <span class="text-xs opacity-60">Neutral color </span>                                               | <span class="badge badge-sm">required</span>                                                                                                                | <span class="font-mono text-xs opacity-60">Class name: `bg-neutral`</span> <br> <span class="text-xs opacity-60 font-mono">CSS variable: `hsl(var(--n))`</span>            |
| <span class="badge relative top-4 bg-neutral-focus"></span>     | <span class="font-mono font-bold">neutral-focus</span> <br> <span class="text-xs opacity-60">Neutral color when focused </span>                            | <span class="badge badge-sm badge-ghost">optional</span> <br> <span class="text-xs opacity-60">Will be a darker tone of neutral if not specified</span>     | <span class="font-mono text-xs opacity-60">Class name: `bg-neutral-focus`</span> <br> <span class="text-xs opacity-60 font-mono">CSS variable: `hsl(var(--nf))`</span>     |
| <span class="badge relative top-4 bg-neutral-content"></span>   | <span class="font-mono font-bold">neutral-content</span> <br> <span class="text-xs opacity-60">Foreground content color to use on neutral color </span>    | <span class="badge badge-sm badge-ghost">optional</span> <br> <span class="text-xs opacity-60">Will be a readable tone of neutral if not specified</span>   | <span class="font-mono text-xs opacity-60">Class name: `bg-neutral-content`</span> <br> <span class="text-xs opacity-60 font-mono">CSS variable: `hsl(var(--nc))`</span>   |
|                                                                 |                                                                                                                                                            |                                                                                                                                                             |                                                                                                                                                                            |
| <span class="badge relative top-4 bg-base-100"></span>          | <span class="font-mono font-bold">base-100</span> <br> <span class="text-xs opacity-60">Base color of page, used for blank backgrounds </span>             | <span class="badge badge-sm">required</span>                                                                                                                | <span class="font-mono text-xs opacity-60">Class name: `bg-base-100`</span> <br> <span class="text-xs opacity-60 font-mono">CSS variable: `hsl(var(--b1))`</span>          |
| <span class="badge relative top-4 bg-base-200"></span>          | <span class="font-mono font-bold">base-200</span> <br> <span class="text-xs opacity-60">Base color, a little darker </span>                                | <span class="badge badge-sm badge-ghost">optional</span> <br> <span class="text-xs opacity-60">Will be a darker tone of base-100 if not specified</span>    | <span class="font-mono text-xs opacity-60">Class name: `bg-base-200`</span> <br> <span class="text-xs opacity-60 font-mono">CSS variable: `hsl(var(--b2))`</span>          |
| <span class="badge relative top-4 bg-base-300"></span>          | <span class="font-mono font-bold">base-300</span> <br> <span class="text-xs opacity-60">Base color, even more darker </span>                               | <span class="badge badge-sm badge-ghost">optional</span> <br> <span class="text-xs opacity-60">Will be a darker tone of base-200 if not specified</span>    | <span class="font-mono text-xs opacity-60">Class name: `bg-base-300`</span> <br> <span class="text-xs opacity-60 font-mono">CSS variable: `hsl(var(--b3))`</span>          |
| <span class="badge relative top-4 bg-base-content"></span>      | <span class="font-mono font-bold">base-content</span> <br> <span class="text-xs opacity-60">Foreground content color to use on base color </span>          | <span class="badge badge-sm badge-ghost">optional</span> <br> <span class="text-xs opacity-60">Will be a readable tone of base-100 if not specified</span>  | <span class="font-mono text-xs opacity-60">Class name: `bg-base-content`</span> <br> <span class="text-xs opacity-60 font-mono">CSS variable: `hsl(var(--bc))`</span>      |
|                                                                 |                                                                                                                                                            |                                                                                                                                                             |                                                                                                                                                                            |
| <span class="badge relative top-4 bg-info"></span>              | <span class="font-mono font-bold">info</span> <br> <span class="text-xs opacity-60">Info color </span>                                                     | <span class="badge badge-sm badge-ghost">optional</span> <br> <span class="text-xs opacity-60">Will be a default blue color if not specified</span>         | <span class="font-mono text-xs opacity-60">Class name: `bg-info`</span> <br> <span class="text-xs opacity-60 font-mono">CSS variable: `hsl(var(--in))`</span>              |
| <span class="badge relative top-4 bg-info-content"></span>      | <span class="font-mono font-bold">info-content</span> <br> <span class="text-xs opacity-60">Foreground content color to use on info color </span>          | <span class="badge badge-sm badge-ghost">optional</span> <br> <span class="text-xs opacity-60">Will be a readable tone of info if not specified</span>      | <span class="font-mono text-xs opacity-60">Class name: `bg-info-content`</span> <br> <span class="text-xs opacity-60 font-mono">CSS variable: `hsl(var(--inc))`</span>     |
| <span class="badge relative top-4 bg-success"></span>           | <span class="font-mono font-bold">success</span> <br> <span class="text-xs opacity-60">Success color </span>                                               | <span class="badge badge-sm badge-ghost">optional</span> <br> <span class="text-xs opacity-60">Will be a default green color if not specified</span>        | <span class="font-mono text-xs opacity-60">Class name: `bg-success`</span> <br> <span class="text-xs opacity-60 font-mono">CSS variable: `hsl(var(--su))`</span>           |
| <span class="badge relative top-4 bg-success-content"></span>   | <span class="font-mono font-bold">success-content</span> <br> <span class="text-xs opacity-60">Foreground content color to use on success color </span>    | <span class="badge badge-sm badge-ghost">optional</span> <br> <span class="text-xs opacity-60">Will be a readable tone of success if not specified</span>   | <span class="font-mono text-xs opacity-60">Class name: `bg-success-content`</span> <br> <span class="text-xs opacity-60 font-mono">CSS variable: `hsl(var(--suc))`</span>  |
| <span class="badge relative top-4 bg-warning"></span>           | <span class="font-mono font-bold">warning</span> <br> <span class="text-xs opacity-60">Warning color </span>                                               | <span class="badge badge-sm badge-ghost">optional</span> <br> <span class="text-xs opacity-60">Will be a default orange color if not specified</span>       | <span class="font-mono text-xs opacity-60">Class name: `bg-warning`</span> <br> <span class="text-xs opacity-60 font-mono">CSS variable: `hsl(var(--wa))`</span>           |
| <span class="badge relative top-4 bg-warning-content"></span>   | <span class="font-mono font-bold">warning-content</span> <br> <span class="text-xs opacity-60">Foreground content color to use on warning color </span>    | <span class="badge badge-sm badge-ghost">optional</span> <br> <span class="text-xs opacity-60">Will be a readable tone of warning if not specified</span>   | <span class="font-mono text-xs opacity-60">Class name: `bg-warning-content`</span> <br> <span class="text-xs opacity-60 font-mono">CSS variable: `hsl(var(--wac))`</span>  |
| <span class="badge relative top-4 bg-error"></span>             | <span class="font-mono font-bold">error</span> <br> <span class="text-xs opacity-60">Error color </span>                                                   | <span class="badge badge-sm badge-ghost">optional</span> <br> <span class="text-xs opacity-60">Will be a default red color if not specified</span>          | <span class="font-mono text-xs opacity-60">Class name: `bg-error`</span> <br> <span class="text-xs opacity-60 font-mono">CSS variable: `hsl(var(--er))`</span>             |
| <span class="badge relative top-4 bg-error-content"></span>     | <span class="font-mono font-bold">error-content</span> <br> <span class="text-xs opacity-60">Foreground content color to use on error color </span>        | <span class="badge badge-sm badge-ghost">optional</span> <br> <span class="text-xs opacity-60">Will be a readable tone of error if not specified</span>     | <span class="font-mono text-xs opacity-60">Class name: `bg-error-content`</span> <br> <span class="text-xs opacity-60 font-mono">CSS variable: `hsl(var(--erc))`</span>    |

</div>
</div>

## <Translate text="How to use" />

<Translate text="Some daisyUI components come with modifier class names and that modifier class name will apply a color." />

<Translate text="For example" />:

```html
<button class="btn btn-primary">Button</button>
```

<Translate text="Or" />:

```html
<input type="checkbox" class="checkbox checkbox-secondary" />
```

<Translate text="You can also use color names in utility classes just like Tailwind's original color names." />  
<Translate text="These are utility classes that can be used with a color name:" />

```css
bg-{COLOR_NAME}
to-{COLOR_NAME}
via-{COLOR_NAME}
from-{COLOR_NAME}
text-{COLOR_NAME}
ring-{COLOR_NAME}
fill-{COLOR_NAME}
caret-{COLOR_NAME}
stroke-{COLOR_NAME}
border-{COLOR_NAME}
divide-{COLOR_NAME}
accent-{COLOR_NAME}
shadow-{COLOR_NAME}
outline-{COLOR_NAME}
decoration-{COLOR_NAME}
placeholder-{COLOR_NAME}
ring-offset-{COLOR_NAME}
```

<Translate text="So you can use <code>bg-primary</code>, <code>border-secondary</code>, etc." />
