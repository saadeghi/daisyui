---
title: Colors
desc: How to use daisyUI colors?
published: true
---

<script>
  import Translate from "$components/Translate.svelte"
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

| | Color | Where to use |
| --- | --- | ---
| <span class="badge bg-primary"></span>           | --color-primary | Primary brand color
| <span class="badge bg-primary-content"></span>   | --color-primary-content | Foreground content color to use on primary color <br/><br/>
| <span class="badge bg-secondary"></span>         | --color-secondary | Secondary brand color
| <span class="badge bg-secondary-content"></span> | --color-secondary-content | Foreground content color to use on secondary color <br/><br/>
| <span class="badge bg-accent"></span>            | --color-accent | Accent brand color
| <span class="badge bg-accent-content"></span>    | --color-accent-content | Foreground content color to use on accent color <br/><br/>
| <span class="badge bg-neutral"></span>           | --color-neutral | Neutral dark color
| <span class="badge bg-neutral-content"></span>   | --color-neutral-content | Foreground content color to use on neutral color <br/><br/>
| <span class="badge bg-base-100"></span>          | --color-base-100 | Base color of page, used for blank backgrounds
| <span class="badge bg-base-200"></span>          | --color-base-200 | Base color, darker shade
| <span class="badge bg-base-300"></span>          | --color-base-300 | Base color, even more darker shade
| <span class="badge bg-base-content"></span>      | --color-base-content | Foreground content color to use on base color <br/><br/>
| <span class="badge bg-info"></span>              | --color-info | Info color
| <span class="badge bg-info-content"></span>      | --color-info-content | Foreground content color to use on info color
| <span class="badge bg-success"></span>           | --color-success | Success color
| <span class="badge bg-success-content"></span>   | --color-success-content | Foreground content color to use on success color
| <span class="badge bg-warning"></span>           | --color-warning | Warning color
| <span class="badge bg-warning-content"></span>   | --color-warning-content | Foreground content color to use on warning color
| <span class="badge bg-error"></span>             | --color-error | Error color
| <span class="badge bg-error-content"></span>     | --color-error-content | Foreground content color to use on error color

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
bg-{COLOR_NAME} /* also available in daisyUI CDN file */
text-{COLOR_NAME} /* also available in daisyUI CDN file */
border-{COLOR_NAME} /* also available in daisyUI CDN file */
from-{COLOR_NAME}
via-{COLOR_NAME}
to-{COLOR_NAME}
ring-{COLOR_NAME}
fill-{COLOR_NAME}
caret-{COLOR_NAME}
stroke-{COLOR_NAME}
divide-{COLOR_NAME}
accent-{COLOR_NAME}
shadow-{COLOR_NAME}
outline-{COLOR_NAME}
decoration-{COLOR_NAME}
placeholder-{COLOR_NAME}
ring-offset-{COLOR_NAME}
```

So you can use `bg-primary`, `border-secondary`, etc
