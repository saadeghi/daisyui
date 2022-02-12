---
title: Colors
desc: How to use daisyUI colors?
published: true
---

## Introduction

<div class="max-w-3xl">

daisyUI is fully themeable and colorable,  
So instead of using constant color utility classes like:

- <span class="badge badge-xs bg-green-500"></span> bg-green-500
- <span class="badge badge-xs bg-orange-600"></span> bg-orange-600
- <span class="badge badge-xs bg-blue-700"></span> bg-blue-700
- etc...

It's suggested to use semantic color utility classes like:

- <span class="badge badge-xs bg-primary"></span> bg-primary
- <span class="badge badge-xs bg-secondary"></span> bg-secondary
- <span class="badge badge-xs bg-accent"></span> bg-accent
- etc...

Each color name contains CSS variables and each daisyUI theme applies color values to the utility classes when it is applied.

## Benefits

Semantic color names make more sense because when we design interfaces, we don't just use any random color. We define a specific color palette with names like `primary`, `secondary`, etc... and we only use those specific colors in our interfaces.  
Also, using semantic color names makes theming easier. You wouldn't have to define dark-mode colors for every single element and you wouldn't be limited to only ligh/dark themes. you can have multiple themes available and each theme is just a few lines of CSS variables.

## How to use

Some daisyUI components come with variants and you can use them by name.  
Like `<button class="btn btn-primary">Button</button>`  
or `<input type="checkbox" class="checkbox checkbox-secondary">`

You can also use color names in utility classes just like Tailwind's color names.  
These are default utility classes that use color names:

```css
bg-{COLOR_NAME}
text-{COLOR_NAME}
border-{COLOR_NAME}
caret-{COLOR_NAME}
from-{COLOR_NAME}
via-{COLOR_NAME}
to-{COLOR_NAME}
placeholder-{COLOR_NAME}
divide-{COLOR_NAME}
ring-{COLOR_NAME}
ring-offset-{COLOR_NAME}
```

So you can use `bg-primary`, `border-secondary`, etc...

</div>

## List of all daisyUI color names:

<div class="overflow-x-auto">
<div class="whitespace-nowrap">

| Color name                                                                  | Description                                        | Example class name     | Actual CSS value |
| --------------------------------------------------------------------------- | -------------------------------------------------- | ---------------------- | ---------------- |
| <span class="badge badge-xs bg-primary"></span> primary                     | Primary color                                      | `bg-primary`           | `hsl(--p)`       |
| <span class="badge badge-xs bg-primary-focus"></span> primary-focus         | Primary color - focused                            | `bg-primary-focus`     | `hsl(--pf)`      |
| <span class="badge badge-xs bg-primary-content"></span> primary-content     | Foreground content color to use on primary color   | `bg-primary-content`   | `hsl(--pc)`      |
|                                                                             |                                                    |                        |
| <span class="badge badge-xs bg-secondary"></span> secondary                 | Secondary color                                    | `bg-secondary`         | `hsl(--s)`       |
| <span class="badge badge-xs bg-secondary-focus"></span> secondary-focus     | Secondary color - focused                          | `bg-secondary-focus`   | `hsl(--sf)`      |
| <span class="badge badge-xs bg-secondary-content"></span> secondary-content | Foreground content color to use on secondary color | `bg-secondary-content` | `hsl(--sc)`      |
|                                                                             |                                                    |                        |
| <span class="badge badge-xs bg-accent"></span> accent                       | Accent color                                       | `bg-accent`            | `hsl(--a)`       |
| <span class="badge badge-xs bg-accent-focus"></span> accent-focus           | Accent color - focused                             | `bg-accent-focus`      | `hsl(--af)`      |
| <span class="badge badge-xs bg-accent-content"></span> accent-content       | Foreground content color to use on accent color    | `bg-accent-content`    | `hsl(--ac)`      |
|                                                                             |                                                    |                        |
| <span class="badge badge-xs bg-neutral"></span> neutral                     | Neutral color                                      | `bg-neutral`           | `hsl(--n)`       |
| <span class="badge badge-xs bg-neutral-focus"></span> neutral-focus         | Neutral color - focused                            | `bg-neutral-focus`     | `hsl(--nf)`      |
| <span class="badge badge-xs bg-neutral-content"></span> neutral-content     | Foreground content color to use on neutral color   | `bg-neutral-content`   | `hsl(--nc)`      |
|                                                                             |                                                    |                        |
| <span class="badge badge-xs bg-base-100"></span> base-100                   | Base color of page, used for blank backgrounds     | `bg-base-100`          | `hsl(--b1)`      |
| <span class="badge badge-xs bg-base-200"></span> base-200                   | Base color, a little darker                        | `bg-base-200`          | `hsl(--b2)`      |
| <span class="badge badge-xs bg-base-300"></span> base-300                   | Base color, even more darker                       | `bg-base-300`          | `hsl(--b3)`      |
| <span class="badge badge-xs bg-base-content"></span> base-content           | Foreground content color to use on base color      | `bg-base-content`      | `hsl(--bc)`      |
|                                                                             |                                                    |                        |
| <span class="badge badge-xs bg-info"></span> info                           | Info color                                         | `bg-info`              | `hsl(--in)`      |
| <span class="badge badge-xs bg-info-content"></span> info-content           | Foreground content color to use on info color      | `bg-info-content`      | `hsl(--inc)`     |
|                                                                             |                                                    |                        |
| <span class="badge badge-xs bg-success"></span> success                     | Success color                                      | `bg-success`           | `hsl(--su)`      |
| <span class="badge badge-xs bg-success-content"></span> success-content     | Foreground content color to use on success color   | `bg-success-content`   | `hsl(--suc)`     |
|                                                                             |                                                    |                        |
| <span class="badge badge-xs bg-warning"></span> warning                     | Warning color                                      | `bg-warning`           | `hsl(--wa)`      |
| <span class="badge badge-xs bg-warning-content"></span> warning-content     | Foreground content color to use on warning color   | `bg-warning-content`   | `hsl(--wac)`     |
|                                                                             |                                                    |                        |
| <span class="badge badge-xs bg-error"></span> error                         | Error color                                        | `bg-error`             | `hsl(--er)`      |
| <span class="badge badge-xs bg-error-content"></span> error-content         | Foreground content color to use on error color     | `bg-error-content`     | `hsl(--erc)`     |

</div>
</div>
