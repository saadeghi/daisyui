# daisyUI 5
daisyUI 5 is a CSS library for Tailwind CSS 4
daisyUI 5 provides class names for common UI components

- [daisyUI 5 docs](http://daisyui.com)
- [Guide: How to use this file in LLMs and code editors](https://daisyui.com/docs/editor/)
- [daisyUI 5 release notes](https://daisyui.com/docs/v5/)
- [daisyUI 4 to 5 upgrade guide](https://daisyui.com/docs/upgrade/)

## daisyUI 5 install notes
[install guide](https://daisyui.com/docs/install/)
1. daisyUI 5 requires Tailwind CSS 4
2. `tailwind.config.js` file is deprecated in Tailwind CSS v4. do not use `tailwind.config.js`. Tailwind CSS v4 only needs `@import "tailwindcss";` in the CSS file if it's a node dependency.
3. daisyUI 5 can be installed using `npm i -D daisyui@latest` and then adding `@plugin "daisyui";` to the CSS file
4. daisyUI is suggested to be installed as a dependency but if you really want to use it from CDN, you can use Tailwind CSS and daisyUI CDN files:
```html
<link href="https://cdn.jsdelivr.net/npm/daisyui@5" rel="stylesheet" type="text/css" />
<script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
```
5. A CSS file with Tailwind CSS and daisyUI looks like this (if it's a node dependency)
```css
@import "tailwindcss";
@plugin "daisyui";
```

## daisyUI 5 usage rules
1. We can give styles to a HTML element by adding daisyUI class names to it. By adding a component class name, part class names (if there's any available for that component), and modifier class names (if there's any available for that component)
2. Components can be customized using Tailwind CSS utility classes if the customization is not possible using the existing daisyUI classes. For example `btn px-10` sets a custom horizontal padding to a `btn`
3. If customization of daisyUI styles using Tailwind CSS utility classes didn't work because of CSS specificity issues, you can use the `!` at the end of the Tailwind CSS utility class to override the existing styles. For example `btn bg-red-500!` sets a custom background color to a `btn` forcefully. This is a last resort solution and should be used sparingly
4. If a specific component or something similar to it doesn't exist in daisyUI, you can create your own component using Tailwind CSS utility
5. when using Tailwind CSS `flex` and `grid` for layout, it should be responsive using Tailwind CSS responsive utility prefixes.
6. Only allowed class names are existing daisyUI class names or Tailwind CSS utility classes.
7. Ideally, you won't need to write any custom CSS. Using daisyUI class names or Tailwind CSS utility classes is preferred.
8. suggested - if you need placeholder images, use https://picsum.photos/200/300 with the size you want
9. suggested - when designing , don't add a custom font unless it's necessary
10. don't add `bg-base-100 text-base-content` to body unless it's necessary
11. For design decisions, use Refactoring UI book best practices

daisyUI 5 class names are one of the following categories. these type names are only for reference and are not used in the actual code
- `component`: the required component class
- `part`: a child part of a component
- `style`: sets a specific style to component or part
- `behavior`: changes the behavior of component or part
- `color`: sets a specific color to component or part
- `size`: sets a specific size to component or part
- `placement`: sets a specific placement to component or part
- `direction`: sets a specific direction to component or part
- `modifier`: modifies the component or part in a specific way

## Config
daisyUI 5 config docs: https://daisyui.com/docs/config/
daisyUI without config:
```css
@plugin "daisyui";
```
daisyUI config with `light` theme only:
```css
@plugin "daisyui" {
  themes: light --default;
}
```
daisyUI with all the default configs:
```css
@plugin "daisyui" {
  themes: light --default, dark --prefersdark;
  root: ":root";
  include: ;
  exclude: ;
  prefix: ;
  logs: true;
}
```
An example config:
In below config, all the built-in themes are enabled while bumblebee is the default theme and synthwave is the prefersdark theme (default dark mode)
All the other themes are enabled and can be used by adding `data-theme="THEME_NAME"` to the `<html>` element
root scrollbar gutter is excluded. `daisy-` prefix is used for all daisyUI classes and console.log is disabled
```css
@plugin "daisyui" {
  themes: light, dark, cupcake, bumblebee --default, emerald, corporate, synthwave --prefersdark, retro, cyberpunk, valentine, halloween, garden, forest, aqua, lofi, pastel, fantasy, wireframe, black, luxury, dracula, cmyk, autumn, business, acid, lemonade, night, coffee, winter, dim, nord, sunset, caramellatte, abyss, silk;
  root: ":root";
  include: ;
  exclude: rootscrollgutter, checkbox;
  prefix: daisy-;
  logs: false;
}
```
## daisyUI 5 colors

### daisyUI color names
- `primary`: Primary brand color, The main color of your brand
- `primary-content`: Foreground content color to use on primary color
- `secondary`: Secondary brand color, The optional, secondary color of your brand
- `secondary-content`: Foreground content color to use on secondary color
- `accent`: Accent brand color, The optional, accent color of your brand
- `accent-content`: Foreground content color to use on accent color
- `neutral`: Neutral dark color, For not-saturated parts of UI
- `neutral-content`: Foreground content color to use on neutral color
- `base-100`:-100 Base surface color of page, used for blank backgrounds
- `base-200`:-200 Base color, darker shade, to create elevations
- `base-300`:-300 Base color, even more darker shade, to create elevations
- `base-content`: Foreground content color to use on base color
- `info`: Info color, For informative/helpful messages
- `info-content`: Foreground content color to use on info color
- `success`: Success color, For success/safe messages
- `success-content`: Foreground content color to use on success color
- `warning`: Warning color, For warning/caution messages
- `warning-content`: Foreground content color to use on warning color
- `error`: Error color, For error/danger/destructive messages
- `error-content`: Foreground content color to use on error color

### daisyUI color rules
1. daisyUI adds semantic color names to Tailwind CSS colors
2. daisyUI color names can be used in utility classes, like other Tailwind CSS color names. for example, `bg-primary` will use the primary color for the background
3. daisyUI color names include variables as value so they can change based the theme
4. There's no need to use `dark:` for daisyUI color names
5. Ideally only daisyUI color names should be used for colors so the colors can change automatically based on the theme
6. If a Tailwind CSS color name (like `red-500`) is used, it will be same red color on all themes
7. If a daisyUI color name (like `primary`) is used, it will change color based on the theme
8. Using Tailwind CSS color names for text colors should be avoided because Tailwind CSS color `text-gray-800` on `bg-base-100` would be unreadable on a dark theme - because on dark theme, `bg-base-100` is a dark color
9. `*-content` colors should have a good contrast compared to their associated colors
10. suggestion - when designing a page use `base-*` colors for majority of the page. use `primary` color for important elements

### daisyUI custom theme with custom colors
A CSS file with Tailwind CSS, daisyUI and a custom daisyUI theme looks like this:
```css
@import "tailwindcss";
@plugin "daisyui";
@plugin "daisyui/theme" {
  name: "mytheme";
  default: true; /* set as default */
  prefersdark: false; /* set as default dark mode (prefers-color-scheme:dark) */
  color-scheme: light; /* color of browser-provided UI */

  --color-base-100: oklch(98% 0.02 240);
  --color-base-200: oklch(95% 0.03 240);
  --color-base-300: oklch(92% 0.04 240);
  --color-base-content: oklch(20% 0.05 240);
  --color-primary: oklch(55% 0.3 240);
  --color-primary-content: oklch(98% 0.01 240);
  --color-secondary: oklch(70% 0.25 200);
  --color-secondary-content: oklch(98% 0.01 200);
  --color-accent: oklch(65% 0.25 160);
  --color-accent-content: oklch(98% 0.01 160);
  --color-neutral: oklch(50% 0.05 240);
  --color-neutral-content: oklch(98% 0.01 240);
  --color-info: oklch(70% 0.2 220);
  --color-info-content: oklch(98% 0.01 220);
  --color-success: oklch(65% 0.25 140);
  --color-success-content: oklch(98% 0.01 140);
  --color-warning: oklch(80% 0.25 80);
  --color-warning-content: oklch(20% 0.05 80);
  --color-error: oklch(65% 0.3 30);
  --color-error-content: oklch(98% 0.01 30);

  --radius-selector: 1rem; /* border radius of selectors (checkbox, toggle, badge) */
  --radius-field: 0.25rem; /* border radius of fields (button, input, select, tab) */
  --radius-box: 0.5rem; /* border radius of boxes (card, modal, alert) */
  /* preferred values for --radius-* : 0rem, 0.25rem, 0.5rem, 1rem, 2rem */

  --size-selector: 0.25rem; /* base size of selectors (checkbox, toggle, badge). Value must be 0.25rem unless we intentionally want bigger selectors. In so it can be 0.28125 or 0.3125. If we intentionally want smaller selectors, it can be 0.21875 or 0.1875 */
  --size-field: 0.25rem; /* base size of fields (button, input, select, tab). Value must be 0.25rem unless we intentionally want bigger fields. In so it can be 0.28125 or 0.3125. If we intentionally want smaller fields, it can be 0.21875 or 0.1875 */

  --border: 1px; /* border size. Value must be 1px unless we intentionally want thicker borders. In so it can be 1.5px or 2px. If we intentionally want thinner borders, it can be 0.5px */

  --depth: 1; /* only 0 or 1 – Adds a shadow and subtle 3D depth effect to components */
  --noise: 0; /* only 0 or 1 - Adds a subtle noise (grain) effect to components */
}
```
#### Rules
- All CSS variables above are required
- Colors can be OKLCH or hex or other formats
- If you're generating a custom theme, do not include the comments from the example above. Just provide the code.

People can use https://daisyui.com/theme-generator/ visual tool to create their own theme.

## daisyUI 5 components

### accordion
Accordion is used for showing and hiding content but only one item can stay open at a time

[accordion docs](https://daisyui.com/components/accordion/)

#### Class names
- component: `collapse`
- part: `collapse-title`, `collapse-content`
- modifier: `collapse-arrow`, `collapse-plus`, `collapse-open`, `collapse-close`

#### Syntax
```html
<div class="collapse {MODIFIER}">{CONTENT}</div>
```
where content is:
```html
<input type="radio" name="{name}" checked="{checked}" />
<div class="collapse-title">{title}</div>
<div class="collapse-content">{CONTENT}</div>
```

#### Rules
- {MODIFIER} is optional and can have one of the modifier class names
- Accordion uses radio inputs. All radio inputs with the same name work together and only one of them can be open at a time
- If you have more than one set of accordion items on a page, use different names for the radio inputs on each set
- Replace {name} with a unique name for the accordion group
- replace `{checked}` with `checked="checked"` if you want the accordion to be open by default

### alert
Alert informs users about important events

[alert docs](https://daisyui.com/components/alert/)

#### Class names
- component: `alert`
- style: `alert-outline`, `alert-dash`, `alert-soft`
- color: `alert-info`, `alert-success`, `alert-warning`, `alert-error`
- direction: `alert-vertical`, `alert-horizontal`

#### Syntax
```html
<div role="alert" class="alert {MODIFIER}">{CONTENT}</div>
```

#### Rules
- {MODIFIER} is optional and can have one of each style/color/direction class names
- Add `sm:alert-horizontal` for responsive layouts

### avatar
Avatars are used to show a thumbnail

[avatar docs](https://daisyui.com/components/avatar/)

#### Class names
- component: `avatar`, `avatar-group`
- modifier: `avatar-online`, `avatar-offline`, `avatar-placeholder`

#### Syntax
```html
<div class="avatar {MODIFIER}">
  <div>
    <img src="{image-url}" />
  </div>
</div>
```

#### Rules
- {MODIFIER} is optional and can have one of the modifier class names
- Use `avatar-group` for containing multiple avatars
- You can set custom sizes using `w-*` and `h-*`
- You can use mask classes such as `mask-squircle`, `mask-hexagon`, `mask-triangle`

### badge
Badges are used to inform the user of the status of specific data

[badge docs](https://daisyui.com/components/badge/)

#### Class names
- component: `badge`
- style: `badge-outline`, `badge-dash`, `badge-soft`, `badge-ghost`
- color: `badge-neutral`, `badge-primary`, `badge-secondary`, `badge-accent`, `badge-info`, `badge-success`, `badge-warning`, `badge-error`
- size: `badge-xs`, `badge-sm`, `badge-md`, `badge-lg`, `badge-xl`

#### Syntax
```html
<span class="badge {MODIFIER}">Badge</span>
```

#### Rules
- {MODIFIER} is optional and can have one of each style/color/size class names
- Can be used inside text or buttons
- To create an empty badge, just remove the text between the span tags

### breadcrumbs
Breadcrumbs helps users to navigate

[breadcrumbs docs](https://daisyui.com/components/breadcrumbs/)

#### Class names
- component: `breadcrumbs`

#### Syntax
```html
<div class="breadcrumbs">
  <ul><li><a>Link</a></li></ul>
</div>
```

#### Rules
- breadcrumbs only has one main class name
- Can contain icons inside the links
- If you set `max-width` or the list gets larger than the container it will scroll

### button
Buttons allow the user to take actions

[button docs](https://daisyui.com/components/button/)

#### Class names
- component: `btn`
- color: `btn-neutral`, `btn-primary`, `btn-secondary`, `btn-accent`, `btn-info`, `btn-success`, `btn-warning`, `btn-error`
- style: `btn-outline`, `btn-dash`, `btn-soft`, `btn-ghost`, `btn-link`
- behavior: `btn-active`, `btn-disabled`
- size: `btn-xs`, `btn-sm`, `btn-md`, `btn-lg`, `btn-xl`
- modifier: `btn-wide`, `btn-block`, `btn-square`, `btn-circle`

#### Syntax
```html
<button class="btn {MODIFIER}">Button</button>
```
#### Rules
- {MODIFIER} is optional and can have one of each color/style/behavior/size/modifier class names
- btn can be used on any html tags such as `<button>`, `<a>`, `<input>`
- btn can have an icon before or after the text
- set `tabindex="-1" role="button" aria-disabled="true"` if you want to disable the button using a class name

### calendar
Calendar includes styles for different calendar libraries

[calendar docs](https://daisyui.com/components/calendar/)

#### Class names
- component
  - `cally (for Cally web component)`
  - `pika-single (for the input field that opens Pikaday calendar)`
  - `react-day-picker (for the DayPicker component)`

#### Syntax
For Cally:
```html
<calendar-date class="cally">{CONTENT}</calendar-date>
```
For Pikaday:
```html
<input type="text" class="input pika-single">
```
For React Day Picker:
```html
<DayPicker className="react-day-picker">
```

#### Rules
- daisyUI supports Cally, Pikaday, React Day Picker

### card
Cards are used to group and display content

[card docs](https://daisyui.com/components/card/)

#### Class names
- component: `card`
- part: `card-title`, `card-body`, `card-actions`
- style: `card-border`, `card-dash`
- modifier: `card-side`, `image-full`
- size: `card-xs`, `card-sm`, `card-md`, `card-lg`, `card-xl`

#### Syntax
```html
<div class="card {MODIFIER}">
  <figure><img src="{image-url}" alt="{alt-text}" /></figure>
  <div class="card-body">
    <h2 class="card-title">{title}</h2>
    <p>{CONTENT}</p>
    <div class="card-actions">{actions}</div>
  </div>
</div>
```

#### Rules
- {MODIFIER} is optional and can have one of the modifier class names and one of the size class names
- `<figure>` and `<div class="card-body">` are optional
- can use `sm:card-horizontal` for responsive layouts
- If image is placed after `card-body`, the image will be placed at the bottom

### carousel
Carousel show images or content in a scrollable area

[carousel docs](https://daisyui.com/components/carousel/)

#### Class names
- component: `carousel`
- part: `carousel-item`
- modifier: `carousel-start`, `carousel-center`, `carousel-end`
- direction: `carousel-horizontal`, `carousel-vertical`

#### Syntax
```html
<div class="carousel {MODIFIER}">{CONTENT}</div>
```

#### Rules
- {MODIFIER} is optional and can have one of the modifier/direction class names
- Content is a list of `carousel-item` divs: `<div class="carousel-item"></div>`
- To create a full-width carousel, add `w-full` to each carousel item

### chat
Chat bubbles are used to show one line of conversation and all its data, including the author image, author name, time, etc

[chat docs](https://daisyui.com/components/chat/)

#### Class names
- component: `chat`
- part: `chat-image`, `chat-header`, `chat-footer`, `chat-bubble`
- placement: `chat-start`, `chat-end`
- color: `chat-bubble-neutral`, `chat-bubble-primary`, `chat-bubble-secondary`, `chat-bubble-accent`, `chat-bubble-info`, `chat-bubble-success`, `chat-bubble-warning`, `chat-bubble-error`

#### Syntax
```html
<div class="chat {PLACEMENT}">
  <div class="chat-image"></div>
  <div class="chat-header"></div>
  <div class="chat-bubble {COLOR}">Message text</div>
  <div class="chat-footer"></div>
</div>
```

#### Rules
- {PLACEMENT} is required and must be either `chat-start` or `chat-end`
- {COLOR} is optional and can have one of the color class names
- To add an avatar, use `<div class="chat-image avatar">` and nest the avatar content inside

### checkbox
Checkboxes are used to select or deselect a value

[checkbox docs](https://daisyui.com/components/checkbox/)

#### Class names
- component: `checkbox`
- color: `checkbox-primary`, `checkbox-secondary`, `checkbox-accent`, `checkbox-neutral`, `checkbox-success`, `checkbox-warning`, `checkbox-info`, `checkbox-error`
- size: `checkbox-xs`, `checkbox-sm`, `checkbox-md`, `checkbox-lg`, `checkbox-xl`

#### Syntax
```html
<input type="checkbox" class="checkbox {MODIFIER}" />
```

#### Rules
- {MODIFIER} is optional and can have one of each color/size class names

### collapse
Collapse is used for showing and hiding content

[collapse docs](https://daisyui.com/components/collapse/)

#### Class names
- component: `collapse`
- part: `collapse-title`, `collapse-content`
- modifier: `collapse-arrow`, `collapse-plus`, `collapse-open`, `collapse-close`

#### Syntax
```html
<div tabindex="0" class="collapse {MODIFIER}">
  <div class="collapse-title">{title}</div>
  <div class="collapse-content">{CONTENT}</div>
</div>
```

#### Rules
- {MODIFIER} is optional and can have one of the modifier class names
- instead of `tabindex="0"`, you can use  `<input type="checkbox">` as a first child
- Can also be a details/summary tag

### countdown
Countdown gives you a transition effect when you change a number between 0 to 99

[countdown docs](https://daisyui.com/components/countdown/)

#### Class names
- component: `countdown`

#### Syntax
```html
<span class="countdown">
  <span style="--value:{number};">number</span>
</span>
```

#### Rules
- The `--value` CSS variable and text must be a number between 0 and 99
- you need to change the span text and the `--value` CSS variable using JS
- you need to add `aria-live="polite"` and `aria-label="{number}"` so screen readers can properly read changes

### diff
Diff component shows a side-by-side comparison of two items

[diff docs](https://daisyui.com/components/diff/)

#### Class names
- component: `diff`
- part: `diff-item-1`, `diff-item-2`, `diff-resizer`

#### Syntax
```html
<figure class="diff">
  <div class="diff-item-1">{item1}</div>
  <div class="diff-item-2">{item2}</div>
  <div class="diff-resizer"></div>
</figure>
```

#### Rules
- To maintain aspect ratio, add `aspect-16/9` or other aspect ratio classes to `<figure class="diff">` element

### divider
Divider will be used to separate content vertically or horizontally

[divider docs](https://daisyui.com/components/divider/)

#### Class names
- component: `divider`
- color: `divider-neutral`, `divider-primary`, `divider-secondary`, `divider-accent`, `divider-success`, `divider-warning`, `divider-info`, `divider-error`
- direction: `divider-vertical`, `divider-horizontal`
- placement: `divider-start`, `divider-end`

#### Syntax
```html
<div class="divider {MODIFIER}">{text}</div>
```

#### Rules
- {MODIFIER} is optional and can have one of each direction/color/placement class names
- Omit text for a blank divider

### dock
Dock (also know as Bottom navigation or Bottom bar) is a UI element that provides navigation options to the user. Dock sticks to the bottom of the screen

[dock docs](https://daisyui.com/components/dock/)

#### Class names
- component: `dock`
- part: `dock-label`
- modifier: `dock-active`
- size: `dock-xs`, `dock-sm`, `dock-md`, `dock-lg`, `dock-xl`

#### Syntax
```html
<div class="dock {MODIFIER}">{CONTENT}</div>
```
where content is a list of buttons:
```html
<button>
    <svg>{icon}</svg>
    <span class="dock-label">Text</span>
</button>
```

#### Rules
- {MODIFIER} is optional and can have one of the size class names
- To make a button active, add `dock-active` class to the button
- add `<meta name="viewport" content="viewport-fit=cover">` is required for responsivness of the dock in iOS

### drawer
Drawer is a grid layout that can show/hide a sidebar on the left or right side of the page

[drawer docs](https://daisyui.com/components/drawer/)

#### Class names
- component: `drawer`
- part: `drawer-toggle`, `drawer-content`, `drawer-side`, `drawer-overlay`
- placement: `drawer-end`
- modifier: `drawer-open`

#### Syntax
```html
<div class="drawer {MODIFIER}">
  <input id="my-drawer" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content">{CONTENT}</div>
  <div class="drawer-side">{SIDEBAR}</div>
</div>
```
where {CONTENT} can be navbar, site content, footer, etc
and {SIDEBAR} can be a menu like:
```html
<ul class="menu p-4 w-80 min-h-full bg-base-100 text-base-content">
  <li><a>Item 1</a></li>
  <li><a>Item 2</a></li>
</ul>
```

#### Rules
- {MODIFIER} is optional and can have one of the modifier/placement class names
- `id` is required for the `drawer-toggle` input. change `my-drawer` to a unique id according to your needs
- `lg:drawer-open` can be used to make sidebar visible on larger screens
- `drawer-toggle` is a hidden checkbox. Use label with "for" attribute to toggle state
- if you want to open the drawer when a button is clicked, use `<label for="my-drawer" class="btn drawer-button">Open drawer</label>` where `my-drawer` is the id of the `drawer-toggle` input
- when using drawer, every page content must be inside `drawer-content` element. for example navbar, footer, etc should not be outside of `drawer`

### dropdown
Dropdown can open a menu or any other element when the button is clicked

[dropdown docs](https://daisyui.com/components/dropdown/)

#### Class names
- component: `dropdown`
- part: `dropdown-content`
- placement: `dropdown-start`, `dropdown-center`, `dropdown-end`, `dropdown-top`, `dropdown-bottom`, `dropdown-left`, `dropdown-right`
- modifier: `dropdown-hover`, `dropdown-open`

#### Syntax
Using details and summary
```html
<details class="dropdown">
  <summary>Button</summary>
  <ul class="dropdown-content">{CONTENT}</ul>
</details>
```

Using popover API
```html
<button popovertarget="{id}" style="anchor-name:--{anchor}">{button}</button>
<ul class="dropdown-content" popover id="{id}" style="position-anchor:--{anchor}">{CONTENT}</ul>
```

Using CSS focus
```html
<div class="dropdown">
  <div tabindex="0" role="button">Button</div>
  <ul tabindex="0" class="dropdown-content">{CONTENT}</ul>
</div>
```

#### Rules
- {MODIFIER} is optional and can have one of the modifier/placement class names
- replace `{id}` and `{anchor}` with a unique name
- For CSS focus dropdowns, use `tabindex="0"` and `role="button"` on the button
- The content can be any HTML element (not just `<ul>`)

### fab
FAB (Floating Action Button) stays in the bottom corner of screen. It includes a focusable and accessible element with button role. Clicking or focusing it shows additional buttons (known as Speed Dial buttons) in a vertical arrangement or a flower shape (quarter circle)

[fab docs](https://daisyui.com/components/fab/)

#### Class names
- component: `fab`
- part: `fab-close`, `fab-main-action`
- modifier: `fab-flower`

#### Syntax
A single FAB in the corder of screen
```html
<div class="fab">
  <button class="btn btn-lg btn-circle">{IconOriginal}</button>
</div>
```
A FAB that opens a 3 other buttons in the corner of page vertically
```html
<div class="fab">
  <div tabindex="0" role="button" class="btn btn-lg btn-circle btn-primary">{IconOriginal}</div>
  <button class="btn btn-lg btn-circle">{Icon1}</button>
  <button class="btn btn-lg btn-circle">{Icon2}</button>
  <button class="btn btn-lg btn-circle">{Icon3}</button>
</div>
```
A FAB that opens a 3 other buttons in the corner of page vertically and they have label text
```html
<div class="fab">
  <div tabindex="0" role="button" class="btn btn-lg btn-circle btn-primary">{IconOriginal}</div>
  <div>{Label1}<button class="btn btn-lg btn-circle">{Icon1}</button></div>
  <div>{Label2}<button class="btn btn-lg btn-circle">{Icon2}</button></div>
  <div>{Label3}<button class="btn btn-lg btn-circle">{Icon3}</button></div>
</div>
```
FAB with rectangle buttons. These are not circular buttons so they can have more content.
```html
<div class="fab">
  <div tabindex="0" role="button" class="btn btn-lg btn-circle btn-primary">{IconOriginal}</div>
  <button class="btn btn-lg">{Label1}</button>
  <button class="btn btn-lg">{Label2}</button>
  <button class="btn btn-lg">{Label3}</button>
</div>
```
FAB with close button. When FAB is open, the original button is replaced with a close button
```html
<div class="fab">
  <div tabindex="0" role="button" class="btn btn-lg btn-circle btn-primary">{IconOriginal}</div>
  <div class="fab-close">Close <span class="btn btn-circle btn-lg btn-error">✕</span></div>
  <div>{Label1}<button class="btn btn-lg btn-circle">{Icon1}</button></div>
  <div>{Label2}<button class="btn btn-lg btn-circle">{Icon2}</button></div>
  <div>{Label3}<button class="btn btn-lg btn-circle">{Icon3}</button></div>
</div>
```
FAB with Main Action button. When FAB is open, the original button is replaced with a main action button
```html
<div class="fab">
  <div tabindex="0" role="button" class="btn btn-lg btn-circle btn-primary">{IconOriginal}</div>
  <div class="fab-main-action">
    {LabelMainAction}<button class="btn btn-circle btn-secondary btn-lg">{IconMainAction}</button>
  </div>
  <div>{Label1}<button class="btn btn-lg btn-circle">{Icon1}</button></div>
  <div>{Label2}<button class="btn btn-lg btn-circle">{Icon2}</button></div>
  <div>{Label3}<button class="btn btn-lg btn-circle">{Icon3}</button></div>
</div>
```
FAB Flower. It opens the buttons in a flower shape (quarter circle) arrangement instead of vertical
```html
<div class="fab fab-flower">
  <div tabindex="0" role="button" class="btn btn-lg btn-circle btn-primary">{IconOriginal}</div>
  <button class="fab-main-action btn btn-circle btn-lg">{IconMainAction}</button>
  <button class="btn btn-lg btn-circle">{Icon1}</button>
  <button class="btn btn-lg btn-circle">{Icon2}</button>
  <button class="btn btn-lg btn-circle">{Icon3}</button>
</div>
```
FAB Flower with tooltips. There's no space for a text label in a quarter circle, so tooltips are used to indicate the button's function
```html
<div class="fab fab-flower">
  <div tabindex="0" role="button" class="btn btn-lg btn-circle btn-primary">{IconOriginal}</div>
  <button class="fab-main-action btn btn-circle btn-lg">{IconMainAction}</button>
  <div class="tooltip tooltip-left" data-tip="{Label1}">
    <button class="btn btn-lg btn-circle">{Icon1}</button>
  </div>
  <div class="tooltip tooltip-left" data-tip="{Label2}">
    <button class="btn btn-lg btn-circle">{Icon2}</button>
  </div>
  <div class="tooltip tooltip-left" data-tip="{Label3}">
    <button class="btn btn-lg btn-circle">{Icon3}</button>
  </div>
</div>
```
#### Rules
- {Icon*} should be replaced with the appropriate icon for each button. SVG icons are recommended
- {IconOriginal} is the icon that we see before opening the FAB
- {IconMainAction} is the icon we see after opening the FAB
- {Icon1}, {Icon2}, {Icon3} are the icons for the additional buttons
- {Label*} is the label text for each button

### fieldset
Fieldset is a container for grouping related form elements. It includes fieldset-legend as a title and label as a description

[fieldset docs](https://daisyui.com/components/fieldset/)

#### Class names
- Component: `fieldset`, `label`
- Parts: `fieldset-legend`

#### Syntax
```html
<fieldset class="fieldset">
  <legend class="fieldset-legend">{title}</legend>
  {CONTENT}
  <p class="label">{description}</p>
</fieldset>
```

#### Rules
- You can use any element as a direct child of fieldset to add form elements

### file-input
File Input is a an input field for uploading files

[file-input docs](https://daisyui.com/components/file-input/)

#### Class Names:
- Component: `file-input`
- Style: `file-input-ghost`
- Color: `file-input-neutral`, `file-input-primary`, `file-input-secondary`, `file-input-accent`, `file-input-info`, `file-input-success`, `file-input-warning`, `file-input-error`
- Size: `file-input-xs`, `file-input-sm`, `file-input-md`, `file-input-lg`, `file-input-xl`

#### Syntax
```html
<input type="file" class="file-input {MODIFIER}" />
```

#### Rules
- {MODIFIER} is optional and can have one of each style/color/size class names

### filter
Filter is a group of radio buttons. Choosing one of the options will hide the others and shows a reset button next to the chosen option

[filter docs](https://daisyui.com/components/filter/)

#### Class names
- component: `filter`
- part: `filter-reset`

#### Syntax
Using HTML form
```html
<form class="filter">
  <input class="btn btn-square" type="reset" value="×"/>
  <input class="btn" type="radio" name="{NAME}" aria-label="Tab 1 title"/>
  <input class="btn" type="radio" name="{NAME}" aria-label="Tab 2 title"/>
</form>
```
Without HTML form
```html
<div class="filter">
  <input class="btn filter-reset" type="radio" name="{NAME}" aria-label="×"/>
  <input class="btn" type="radio" name="{NAME}" aria-label="Tab 1 title"/>
  <input class="btn" type="radio" name="{NAME}" aria-label="Tab 2 title"/>
</div>
```

#### Rules
- replace `{NAME}` with proper value, according to the context of the filter
- Each set of radio inputs must have unique `name` attributes to avoid conflicts
- Use `<form>` tag when possible and only use `<div>` if you can't use a HTML form for some reason
- Use `filter-reset` class for the reset button

### footer
Footer can contain logo, copyright notice, and links to other pages

[footer docs](https://daisyui.com/components/footer/)

#### Class names
- component: `footer`
- part: `footer-title`
- placement: `footer-center`
- direction: `footer-horizontal`, `footer-vertical`

#### Syntax
```html
<footer class="footer {MODIFIER}">{CONTENT}</footer>
```
where content can contain several `<nav>` tags with `footer-title` and links inside

#### Rules
- {MODIFIER} is optional and can have one of each placement/direction class names
- try to use `sm:footer-horizontal` to make footer responsive
- suggestion - use `base-200` for background color

### hero
Hero is a component for displaying a large box or image with a title and description

[hero docs](https://daisyui.com/components/hero/)

#### Class names
- component: `hero`
- part: `hero-content`, `hero-overlay`

#### Syntax
```html
<div class="hero {MODIFIER}">{CONTENT}</div>
```

#### Rules
- {MODIFIER} is optional
- Use `hero-content` for the text content
- Use `hero-overlay` inside the hero to overlay the background image with a color
- Content can contain a figure

### hover-gallery
Hover Gallery is container of images. The first image is visible be default and when we hover it horizontally, other images show up. Hover Gallery is useful for product cards in ecommerce sites, portfoilios or in image galleries. Hover Gallery can include up to 10 images.

[indicator docs](https://daisyui.com/components/hover-gallery/)

#### Class names
- component: `hover-gallery`

#### Syntax
```html
<figure class="hover-gallery max-w-60">
  <img src="https://img.daisyui.com/images/stock/daisyui-hat-1.webp" />
  <img src="https://img.daisyui.com/images/stock/daisyui-hat-2.webp" />
  <img src="https://img.daisyui.com/images/stock/daisyui-hat-3.webp" />
  <img src="https://img.daisyui.com/images/stock/daisyui-hat-4.webp" />
</figure>
```

#### Rules
- hover-gallery can be a `<div>` or a `<figure>`
- hover-gallery can include up to 10 images
- hover-gallery needs a max width otherwise if fills the container width
- images must be same dimensions for a proper alignment

### indicator
Indicators are used to place an element on the corner of another element

[indicator docs](https://daisyui.com/components/indicator/)

#### Class names
- component: `indicator`
- part: `indicator-item`
- placement: `indicator-start`, `indicator-center`, `indicator-end`, `indicator-top`, `indicator-middle`, `indicator-bottom`

#### Syntax
```html
<div class="indicator">
  <span class="indicator-item">{indicator content}</span>
  <div>{main content}</div>
</div>
```

#### Rules
- Add all indicator elements (with `indicator-item` class) before the main content
- {placement} is optional and can have one of each horizontal/vertical class names. default is `indicator-end indicator-top`

### input
Text Input is a simple input field

[input docs](https://daisyui.com/components/input/)

#### Class names
- component: `input`
- style: `input-ghost`
- color: `input-neutral`, `input-primary`, `input-secondary`, `input-accent`, `input-info`, `input-success`, `input-warning`, `input-error`
- size: `input-xs`, `input-sm`, `input-md`, `input-lg`, `input-xl`

#### Syntax
```html
<input type="{type}" placeholder="Type here" class="input {MODIFIER}" />
```

#### Rules
- {MODIFIER} is optional and can have one of each style/color/size class names
- Can be used with any input field type (text, password, email, etc.)
- Use `input` class for the parent when you have more than one element inside input

### join
Join is a container for grouping multiple items, it can be used to group buttons, inputs, etc. Join applies border radius to the first and last item. Join can be used to create a horizontal or vertical list of items

[join docs](https://daisyui.com/components/join/)

#### Class names
- component: `join`, `join-item`
- direction: `join-vertical`, `join-horizontal`

#### Syntax
```html
<div class="join {MODIFIER}">{CONTENT}</div>
```

#### Rules
- {MODIFIER} is optional and can have one of the direction class names
- Any direct child of the join element will get joined together
- Any element with `join-item` will be affected
- Use `lg:join-horizontal` for responsive layouts

### kbd
Kbd is used to display keyboard shortcuts

[kbd docs](https://daisyui.com/components/kbd/)

#### Class names
- component: `kbd`
- size: `kbd-xs`, `kbd-sm`, `kbd-md`, `kbd-lg`, `kbd-xl`

#### Syntax
```html
<kbd class="kbd {MODIFIER}">K</kbd>
```

#### Rules
- {MODIFIER} is optional and can have one of the size class names

### label
Label is used to provide a name or title for an input field. Label can be placed before or after the field

[label docs](https://daisyui.com/components/label/)

#### Class names
- component: `label`, `floating-label`

#### Syntax
For regular label:
```html
<label class="input">
  <span class="label">{label text}</span>
  <input type="text" placeholder="Type here" />
</label>
```
For floating label:
```html
<label class="floating-label">
  <input type="text" placeholder="Type here" class="input" />
  <span>{label text}</span>
</label>
```

#### Rules
- The `input` class is for styling the parent element which contains the input field and label, so the label does not have the 'input' class
- Use `floating-label` for the parent of an input field and a span that floats above the input field when the field is focused

### link
Link adds the missing underline style to links

[link docs](https://daisyui.com/components/link/)

#### Class names
- component: `link`
- style: `link-hover`
- color: `link-neutral`, `link-primary`, `link-secondary`, `link-accent`, `link-success`, `link-info`, `link-warning`, `link-error`

#### Syntax
```html
<a class="link {MODIFIER}">Click me</a>
```

#### Rules
- {MODIFIER} is optional and can have one of the modifier class names

### list
List is a vertical layout to display information in rows

[list docs](https://daisyui.com/components/list/)

#### Class Names:
- Component: `list`, `list-row`
- Modifier: `list-col-wrap`, `list-col-grow`

#### Syntax
```html
<ul class="list">
  <li class="list-row">{CONTENT}</li>
</ul>
```

#### Rules
- Use `list-row` for each item inside the list
- By default, the second child of the `list-row` will fill the remaining space. You can use `list-col-grow` on another child to make it fill the remaining space instead
- Use `list-col-wrap` to force an item to wrap to the next line

### loading
Loading shows an animation to indicate that something is loading

[loading docs](https://daisyui.com/components/loading/)

#### Class names
- component: `loading`
- style: `loading-spinner`, `loading-dots`, `loading-ring`, `loading-ball`, `loading-bars`, `loading-infinity`
- size: `loading-xs`, `loading-sm`, `loading-md`, `loading-lg`, `loading-xl`

#### Syntax
```html
<span class="loading {MODIFIER}"></span>
```

#### Rules
- {MODIFIER} is optional and can have one of the style/size class names

### mask
Mask crops the content of the element to common shapes

[mask docs](https://daisyui.com/components/mask/)

#### Class names
- component: `mask`
- style: `mask-squircle`, `mask-heart`, `mask-hexagon`, `mask-hexagon-2`, `mask-decagon`, `mask-pentagon`, `mask-diamond`, `mask-square`, `mask-circle`, `mask-star`, `mask-star-2`, `mask-triangle`, `mask-triangle-2`, `mask-triangle-3`, `mask-triangle-4`
- modifier: `mask-half-1`, `mask-half-2`

#### Syntax
```html
<img class="mask {MODIFIER}" src="{image-url}" />
```

#### Rules
- {MODIFIER} is required and can have one of the style/modifier class names
- You can change the shape of any element using `mask` class names
- You can set custom sizes using `w-*` and `h-*`

### menu
Menu is used to display a list of links vertically or horizontally

[menu docs](https://daisyui.com/components/menu/)

#### Class names
- component: `menu`
- part: `menu-title`, `menu-dropdown`, `menu-dropdown-toggle`
- modifier: `menu-disabled`, `menu-active`, `menu-focus`, `menu-dropdown-show`
- size: `menu-xs`, `menu-sm`, `menu-md`, `menu-lg`, `menu-xl`
- direction: `menu-vertical`, `menu-horizontal`

#### Syntax
Vertical menu:
```html
<ul class="menu">
  <li><button>Item</button></li>
</ul>
```
Horizontal menu:
```html
<ul class="menu menu-horizontal">
  <li><button>Item</button></li>
</ul>
```

#### Rules
- {MODIFIER} is optional and can have one of the modifier/size/direction class names
- Use `lg:menu-horizontal` for responsive layouts
- Use `menu-title` for list item title
- Use `<details>` tag to make submenus collapsible
- Use `menu-dropdown` and `menu-dropdown-toggle` to toggle the dropdown using JS

### mockup-browser
Browser mockup shows a box that looks like a browser window

[mockup-browser docs](https://daisyui.com/components/mockup-browser/)

#### Class names
- component: `mockup-browser`
- part: `mockup-browser-toolbar`

#### Syntax
```html
<div class="mockup-browser">
  <div class="mockup-browser-toolbar">
    {toolbar content}
  </div>
  <div>{CONTENT}</div>
</div>
```

#### Rules
- For a default mockup, use just `mockup-browser` class name
- To set a URL in toolbar, add a div with `input` class

### mockup-code
Code mockup is used to show a block of code in a box that looks like a code editor

[mockup-code docs](https://daisyui.com/components/mockup-code/)

#### Class names
- component: `mockup-code`

#### Syntax
```html
<div class="mockup-code">
  <pre data-prefix="$"><code>npm i daisyui</code></pre>
</div>
```

#### Rules
- Use `<pre data-prefix="{prefix}">` to show a prefix before each line
- Use `<code>` tag to add code syntax highlighting (requires additional library)
- To highlight a line, add background/text color

### mockup-phone
Phone mockup shows a mockup of an iPhone

[mockup-phone docs](https://daisyui.com/components/mockup-phone/)

#### Class names
- component: `mockup-phone`
- part: `mockup-phone-camera`, `mockup-phone-display`

#### Syntax
```html
<div class="mockup-phone">
  <div class="mockup-phone-camera"></div>
  <div class="mockup-phone-display">{CONTENT}</div>
</div>
```

#### Rules
- Inside `mockup-phone-display` you can add anything

### mockup-window
Window mockup shows a box that looks like an operating system window

[mockup-window docs](https://daisyui.com/components/mockup-window/)

#### Class names
- component: `mockup-window`

#### Syntax
```html
<div class="mockup-window">
  <div>{CONTENT}</div>
</div>
```

### modal
Modal is used to show a dialog or a box when you click a button

[modal docs](https://daisyui.com/components/modal/)

#### Class names
- component: `modal`
- part: `modal-box`, `modal-action`, `modal-backdrop`, `modal-toggle`
- modifier: `modal-open`
- placement: `modal-top`, `modal-middle`, `modal-bottom`, `modal-start`, `modal-end`

#### Syntax
Using HTML dialog element
```html
<button onclick="my_modal.showModal()">Open modal</button>
<dialog id="my_modal" class="modal">
  <div class="modal-box">{CONTENT}</div>
  <form method="dialog" class="modal-backdrop"><button>close</button></form>
</dialog>
```

Using checkbox (legacy)
```html
<label for="my-modal" class="btn">Open modal</label>
<input type="checkbox" id="my-modal" class="modal-toggle" />
<div class="modal">
  <div class="modal-box">{CONTENT}</div>
  <label class="modal-backdrop" for="my-modal">Close</label>
</div>
```

Using anchor links (legacy)
```html
<a href="#my-modal" class="btn">Open modal</a>
<div class="modal" id="my-modal">
  <div class="modal-box">{CONTENT}</div>
</div>
```

#### Rules
- {MODIFIER} is optional and can have one of the modifier/placement class names
- Add `tabindex="0"` to make modal focusable
- Use unique IDs for each modal
- For HTML dialog element modals, add `<form method="dialog">` for closing the modal with submit

### navbar
Navbar is used to show a navigation bar on the top of the page

[navbar docs](https://daisyui.com/components/navbar/)

#### Class names
- component: `navbar`
- part: `navbar-start`, `navbar-center`, `navbar-end`

#### Syntax
```html
<div class="navbar">{CONTENT}</div>
```

#### Rules
- use `navbar-start`, `navbar-center`, `navbar-end` to position content horizontally
- put anything inside each section
- suggestion - use `base-200` for background color

### pagination
Pagination is a group of buttons

[pagination docs](https://daisyui.com/components/pagination/)

#### Class names
- component: `join`
- part: `join-item`
- direction: `join-vertical`, `join-horizontal`

#### Syntax
```html
<div class="join">{CONTENT}</div>
```

#### Rules
- Use `join-item` for each button or link inside the pagination
- Use `btn` class for styling pagination items

### progress
Progress bar can be used to show the progress of a task or to show the passing of time

[progress docs](https://daisyui.com/components/progress/)

#### Class names
- component: `progress`
- color: `progress-neutral`, `progress-primary`, `progress-secondary`, `progress-accent`, `progress-info`, `progress-success`, `progress-warning`, `progress-error`

#### Syntax
```html
<progress class="progress {MODIFIER}" value="50" max="100"></progress>
```

#### Rules
- {MODIFIER} is optional and can have one of the color class names
- You must specify value and max attributes

### radial-progress
Radial progress can be used to show the progress of a task or to show the passing of time

[radial-progress docs](https://daisyui.com/components/radial-progress/)

#### Class names
- component: `radial-progress`

#### Syntax
```html
<div class="radial-progress" style="--value:70;" aria-valuenow="70" role="progressbar">70%</div>
```

#### Rules
- The `--value` CSS variable and text must be a number between 0 and 100
- you need to add `aria-valuenow="{value}"`, `aria-valuenow={value}` so screen readers can properly read value and also show that its a progress element to them
- Use `div` instead of progress because browsers can't show text inside progress tag
- Use `--size` for setting size (default 5rem) and `--thickness` to set how thick the indicator is

### radio
Radio buttons allow the user to select one option

[radio docs](https://daisyui.com/components/radio/)

#### Class names
- component: `radio`
- color: `radio-neutral`, `radio-primary`, `radio-secondary`, `radio-accent`, `radio-success`, `radio-warning`, `radio-info`, `radio-error`
- size: `radio-xs`, `radio-sm`, `radio-md`, `radio-lg`, `radio-xl`

#### Syntax
```html
<input type="radio" name="{name}" class="radio {MODIFIER}" />
```

#### Rules
- {MODIFIER} is optional and can have one of the size/color class names
- Replace {name} with a unique name for the radio group
- Each set of radio inputs should have unique `name` attributes to avoid conflicts with other sets of radio inputs on the same page

### range
Range slider is used to select a value by sliding a handle

[range docs](https://daisyui.com/components/range/)

#### Class names
- component: `range`
- color: `range-neutral`, `range-primary`, `range-secondary`, `range-accent`, `range-success`, `range-warning`, `range-info`, `range-error`
- size: `range-xs`, `range-sm`, `range-md`, `range-lg`, `range-xl`

#### Syntax
```html
<input type="range" min="0" max="100" value="40" class="range {MODIFIER}" />
```

#### Rules
- {MODIFIER} is optional and can have one of each color/size class names
- You must specify `min` and `max` attributes

### rating
Rating is a set of radio buttons that allow the user to rate something

[rating docs](https://daisyui.com/components/rating/)

#### Class names
- component: `rating`
- modifier: `rating-half`, `rating-hidden`
- size: `rating-xs`, `rating-sm`, `rating-md`, `rating-lg`, `rating-xl`

#### Syntax
```html
<div class="rating {MODIFIER}">
  <input type="radio" name="rating-1" class="mask mask-star" />
</div>
```

#### Rules
- {MODIFIER} is optional and can have one of the modifier/size class names
- Each set of rating inputs should have unique `name` attributes to avoid conflicts with other ratings on the same page
- Add `rating-hidden` for the first radio to make it hidden so user can clear the rating

### select
Select is used to pick a value from a list of options

[select docs](https://daisyui.com/components/select/)

#### Class names
- component: `select`
- style: `select-ghost`
- color: `select-neutral`, `select-primary`, `select-secondary`, `select-accent`, `select-info`, `select-success`, `select-warning`, `select-error`
- size: `select-xs`, `select-sm`, `select-md`, `select-lg`, `select-xl`

#### Syntax
```html
<select class="select {MODIFIER}">
  <option>Option</option>
</select>
```

#### Rules
- {MODIFIER} is optional and can have one of each style/color/size class names

### skeleton
Skeleton is a component that can be used to show a loading state

[skeleton docs](https://daisyui.com/components/skeleton/)

#### Class names
- component: `skeleton`

#### Syntax
```html
<div class="skeleton"></div>
```

#### Rules
- Add `h-*` and `w-*` utility classes to set height and width

### stack
Stack visually puts elements on top of each other

[stack docs](https://daisyui.com/components/stack/)

#### Class Names:
- Component: `stack`
- Modifier: `stack-top`, `stack-bottom`, `stack-start`, `stack-end`

#### Syntax
```html
<div class="stack {MODIFIER}">{CONTENT}</div>
```

#### Rules
- {MODIFIER} is optional and can have one of the modifier class names
- You can use `w-*` and `h-*` classes to set the width and height of the stack, making all items the same size

### stat
Stat is used to show numbers and data in a block

[stat docs](https://daisyui.com/components/stat/)

#### Class names
- Component: `stats`
- Part: `stat`, `stat-title`, `stat-value`, `stat-desc`, `stat-figure`, `stat-actions`
- Direction: `stats-horizontal`, `stats-vertical`

#### Syntax
```html
<div class="stats {MODIFIER}">
  <div class="stat">{CONTENT}</div>
</div>
```

#### Rules
- {MODIFIER} is optional and can have one of the direction class names
- It's horizontal by default but you can make it vertical with the `stats-vertical` class
- Content includes `stat-title`, `stat-value`, `stat-desc` inside a `stat`

### status
Status is a really small icon to visually show the current status of an element, like online, offline, error, etc

[status docs](https://daisyui.com/components/status/)

#### Class Names:
- Component: `status`
- Color: `status-neutral`, `status-primary`, `status-secondary`, `status-accent`, `status-info`, `status-success`, `status-warning`, `status-error`
- Size: `status-xs`, `status-sm`, `status-md`, `status-lg`, `status-xl`

#### Syntax
```html
<span class="status {MODIFIER}"></span>
```

#### Rules
- {MODIFIER} is optional and can have one of the color/size class names
- This component does not render anything visible

### steps
Steps can be used to show a list of steps in a process

[steps docs](https://daisyui.com/components/steps/)

#### Class Names:
- Component: `steps`
- Part: `step`, `step-icon`
- Color: `step-neutral`, `step-primary`, `step-secondary`, `step-accent`, `step-info`, `step-success`, `step-warning`, `step-error`
- Direction: `steps-vertical`, `steps-horizontal`

#### Syntax
```html
<ul class="steps {MODIFIER}">
  <li class="step">{step content}</li>
</ul>
```

#### Rules
- {MODIFIER} is optional and can have one of each direction/color class names
- To make a step active, add the `step-primary` class
- You can add an icon in each step using `step-icon` class
- To display data in `data-content` ,use `data-content="{value}"` at the `<li>`

### swap
Swap allows you to toggle the visibility of two elements using a checkbox or a class name

[swap docs](https://daisyui.com/components/swap/)

#### Class Names:
- Component: `swap`
- Part: `swap-on`, `swap-off`, `swap-indeterminate`
- Modifier: `swap-active`
- Style: `swap-rotate`, `swap-flip`

#### Syntax
Using checkbox
```html
<label class="swap {MODIFIER}">
  <input type="checkbox" />
  <div class="swap-on">{content when active}</div>
  <div class="swap-off">{content when inactive}</div>
</label>
```

Using class name
```html
<div class="swap {MODIFIER}">
  <div class="swap-on">{content when active}</div>
  <div class="swap-off">{content when inactive}</div>
</div>
```

#### Rules
- {MODIFIER} is optional and can have one of the modifier/style class names
- Use only a hidden checkbox to control swap state or add/remove the `swap-active` class using JS to control state
- To show something when the checkbox is indeterminate, use `swap-indeterminate` class

### tab
Tabs can be used to show a list of links in a tabbed format

[tab docs](https://daisyui.com/components/tab/)

#### Class Names:
- Component: `tabs`
- Part: `tab`, `tab-content`
- Style: `tabs-box`, `tabs-border`, `tabs-lift`
- Modifier: `tab-active`, `tab-disabled`
- Placement: `tabs-top`, `tabs-bottom`

#### Syntax
Using buttons:
```html
<div role="tablist" class="tabs {MODIFIER}">
  <button role="tab" class="tab">Tab</button>
</div>
```

Using radio inputs:
```html
<div role="tablist" class="tabs tabs-box">
  <input type="radio" name="my_tabs" class="tab" aria-label="Tab" />
</div>
```

#### Rules
- {MODIFIER} is optional and can have one of the style/size class names
- Radio inputs are needed for tab content to work with tab click
- If tabs gets a background then every tab inside it becomes rounded from both top corners

### table
Table can be used to show a list of data in a table format

[table docs](https://daisyui.com/components/table/)

#### Class Names:
- Component: `table`
- Modifier: `table-zebra`, `table-pin-rows`, `table-pin-cols`
- Size: `table-xs`, `table-sm`, `table-md`, `table-lg`, `table-xl`

#### Syntax
```html
<div class="overflow-x-auto">
  <table class="table {MODIFIER}">
    <thead>
      <tr>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th></th>
      </tr>
    </tbody>
  </table>
</div>
```

#### Rules
- {MODIFIER} is optional and can have one of each modifier/size class names
- The `overflow-x-auto` class is added to the wrapper div to make the table horizontally scrollable on smaller screens

### textarea
Textarea allows users to enter text in multiple lines

[textarea docs](https://daisyui.com/components/textarea/)

#### Class Names:
- Component: `textarea`
- Style: `textarea-ghost`
- Color: `textarea-neutral`, `textarea-primary`, `textarea-secondary`, `textarea-accent`, `textarea-info`, `textarea-success`, `textarea-warning`, `textarea-error`
- Size: `textarea-xs`, `textarea-sm`, `textarea-md`, `textarea-lg`, `textarea-xl`

#### Syntax
```html
<textarea class="textarea {MODIFIER}" placeholder="Bio"></textarea>
```

#### Rules
- {MODIFIER} is optional and can have one of each style/color/size class names

### theme-controller
If a checked checkbox input or a checked radio input with theme-controller class exists in the page, The page will have the same theme as that input's value

[theme-controller docs](https://daisyui.com/components/theme-controller/)

#### Class names
- component: `theme-controller`

#### Syntax
```html
<input type="checkbox" value="{theme-name}" class="theme-controller" />
```

#### Rules
- The value attribute of the input element should be a valid daisyUI theme name

### timeline
Timeline component shows a list of events in chronological order

[timeline docs](https://daisyui.com/components/timeline/)

#### Class Names:
- Component: `timeline`
- Part: `timeline-start`, `timeline-middle`, `timeline-end`
- Modifier: `timeline-snap-icon`, `timeline-box`, `timeline-compact`
- Direction: `timeline-vertical`, `timeline-horizontal`

#### Syntax
```html
<ul class="timeline {MODIFIER}">
  <li>
    <div class="timeline-start">{start}</div>
    <div class="timeline-middle">{icon}</div>
    <div class="timeline-end">{end}</div>
  </li>
</ul>
```

#### Rules
- {MODIFIER} is optional and can have one of the modifier/direction class names
- To make a vertical timeline, add the `timeline-vertical` class to the `ul` element or just do nothing (because its the default style.)
- Add `timeline-snap-icon` to snap the icon to the start instead of middle
- Add the `timeline-compact` class to force all items on one side

### toast
Toast is a wrapper to stack elements, positioned on the corner of page

[toast docs](https://daisyui.com/components/toast/)

#### Class Names:
- Component: `toast`
- Placement: `toast-start`, `toast-center`, `toast-end`, `toast-top`, `toast-middle`, `toast-bottom`

#### Syntax
```html
<div class="toast {MODIFIER}">{CONTENT}</div>
```

#### Rules
- {MODIFIER} is optional and can have one of the placement class names

### toggle
Toggle is a checkbox that is styled to look like a switch button

[toggle docs](https://daisyui.com/components/toggle/)

#### Class Names:
- Component: `toggle`
- Color: `toggle-primary`, `toggle-secondary`, `toggle-accent`, `toggle-neutral`, `toggle-success`, `toggle-warning`, `toggle-info`, `toggle-error`
- Size: `toggle-xs`, `toggle-sm`, `toggle-md`, `toggle-lg`, `toggle-xl`

#### Syntax
```html
<input type="checkbox" class="toggle {MODIFIER}" />
```

#### Rules
- {MODIFIER} is optional and can have one of each color/size class names

### validator
Validator class changes the color of form elements to error or success based on input's validation rules

[validator docs](https://daisyui.com/components/validator/)

#### Class names
- component: `validator`
- part: `validator-hint`

#### Syntax
```html
<input type="{type}" class="input validator" required />
<p class="validator-hint">Error message</p>
```

#### Rules
- Use with `input`, `select`, `textarea`

## Notes
- Get the latest version of this file at https://daisyui.com/llms.txt
- Compatible with daisyUI 5.1