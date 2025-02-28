# Changelog

All notable changes to this project will be documented in this file. See [commit-and-tag-version](https://github.com/absolute-version/commit-and-tag-version) for commit guidelines.

## 5.0.0

> This is the detailed list of changes per component. Most of these changes won't affect your project, so if you want to learn about the breaking changes only, [check out the daisyUI 5 release notes](/docs/v5/)

### Alert

🆕 Additions
- Added `alert-outline`, `alert-dash`, and `alert-soft` variants.
- Added `alert-vertical` and `alert-horizontal` layout options.

🔧 Changes
- Instead of hardcoded responsive breakpoints, you can now use the `max-sm:alert-horizontal` or any other responsive breakpoint.

### Artboard

🗑️ Removals
- **Breaking Change:** Removed all `artboard` and `phone-*` classes. These classes were simply setting the width and height of the div. Use Tailwind CSS `w-*` and `h-*` classes instead.

| Before | After |
| --- | --- |
| `artboard phone-1` | `w-[320px] h-[568px]` |
| `artboard phone-2` | `w-[375px] h-[667px]` |
| `artboard phone-3` | `w-[414px] h-[736px]` |
| `artboard phone-4` | `w-[375px] h-[812px]` |
| `artboard phone-5` | `w-[414px] h-[896px]` |
| `artboard phone-6` | `w-[320px] h-[1024px]` |

| Before | After |
| --- | --- |
| `artboard artboard-horizontal phone-1` | `w-[568px] h-[320px]` |
| `artboard artboard-horizontal phone-2` | `w-[667px] h-[375px]` |
| `artboard artboard-horizontal phone-3` | `w-[736px] h-[414px]` |
| `artboard artboard-horizontal phone-4` | `w-[812px] h-[375px]` |
| `artboard artboard-horizontal phone-5` | `w-[896px] h-[414px]` |
| `artboard artboard-horizontal phone-6` | `w-[1024px] h-[320px]` |

```diff:page.html
- <div class="artboard phone-1">
+ <div class="w-[320px] h-[568px]">
```

To be clear, `mockup-phone` is not removed. It just doesn't need the `artboard` class anymore.

### Avatar

🔧 Changes
- **Breaking Change:** Renamed `online` class to `avatar-online`, `offline` to `avatar-offline`, and `placeholder` to `avatar-placeholder`.

```diff:page.html
- <div class="avatar online">
+ <div class="avatar avatar-online">
  <div class="w-24 rounded-full">
    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
  </div>
</div>
```
```diff:page.html
- <div class="avatar offline">
+ <div class="avatar avatar-offline">
  <div class="w-24 rounded-full">
    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
  </div>
</div>
```


### Badge

🆕 Additions
- Added `badge-dash`, and `badge-soft` styles.
- Added `badge-xl` size.
- Added a default `gap-2` between content of badge so you don't have to add it manually to put a space between the text and icon.

🔧 Changes
- Adjusted sizes based on the new scale.

### Breadcrumbs

🆕 Additions
- Added a default `gap-2` for the element inside list item so you don't have to add it manually to put a space between the text and icon.

### Bottom Navigation

🗑️ Removals
- **Breaking Change:** Removed `bottom-nav` component. Use [`dock`](/components/dock/) component instead.
- **Breaking Change:** Removed `btm-nav-xs`, `btm-nav-sm`, `btm-nav-md`, `btm-nav-lg`. Use `dock-xs`, `dock-sm`, `dock-md`, `dock-lg` instead.
- **Breaking Change:** Removed `btm-nav-active`. Use `dock-active` instead.
- **Breaking Change:** Removed `disabled` class of `bottom-nav`. Use `aria-disabled="true"` attribute or `disabled` attribute if it's a button. This is for better accessibility.

```diff:page.html
- <div class="btm-nav btm-nav-sm">
+ <div class="dock dock-sm">
  <button>🏠</button>
-   <button class="active">🍿</button>
+   <button class="dock-active">🍿</button>
  <button>⚙️</button>
</div>
```

### Button

🆕 Additions
- Added `btn-xl` size.
- Added `btn-dash` and `btn-soft` styles.
- Added box-shadow with if `--depth` effect is enabled.

🔧 Changes
- Reworked click animation which is now more subtle and fits better with any size of the button.
- Adjusted size scale.
- Adjusted font-size.
- Adjusted padding.
- Improved disabled state styling.
- **Breaking Change:** Default height reduced; customizable via `--size-field`.
- checked button (checkbox, radio) now has outline insteaed of forced primary color. This allows customization like `checked:btn-secondary`

### Card

🆕 Additions
- Added `card-border` and `card-dash` styles which adapts the border width from the theme.
- Added support for different card sizes (`card-xs`, `card-sm`, `card-md`, `card-lg`, `card-xl`).
- Allow `<label class="card">` to be used as a radio card. If a checkbox or radio is directly inside a card, clicking the card will toggle the checkbox/radio and will show an outline around the card.

🔧 Changes
- **Breaking Change:** `card-bordered` is renamed to `card-border`.
- Adjusted padding in card body.
- Adjusted font size.

```diff:page.html
- <div class="card card-bordered">
+ <div class="card card-border">
```

🗑️ Removals
- Removed `card-compact`. Use `card-sm` instead.

### Chat

🆕 Additions
- Added `chat-bubble-neutral` color.

🔧 Changes
- **Breaking Change:** Changed chat bubble default color from `neutral` to `base-300`. Add `chat-bubble-neutral` if you want to keep using the neutral color.
- Improved chat bubble tail shape to a prettier shape.
- Adjusted bubble sizes to fit with other components.
- Adjusted font size for headers/footers.

### Checkbox

🆕 Additions
- Added `checkbox-xl` size.
- Added `checkbox-neutral` color.
- Checkbox is now print-friendly.

🔧 Changes
- Default styles have been significantly altered based on the new theming system.
- Improved the checkmark icon and animation.
- Improved focus styling for better accessibility.
- Adjust size scale to fit with other components.
- Improve forced color mode for better accessibility.

### Countdown

🆕 Additions
- Accessibility improvements for screen readers.

### Diff

🆕 Additions
- Add ability to focus on each side using keyboard navigation.
- Add ability to focus on each side using tap on iOS Safari.

🔧 Changes
- Images are now in chronological order. first image is `diff-item-1` and second image is `diff-item-2`.
- Fix Firefox lag issue.
- Updated HTML syntax to support iOS and keyboard navigation. `tabindex="0"` allows focus on the element using keyboard navigation or tap on iOS Safari where CSS `resize` property is not supported.
```diff:page.html
- <figure class="diff aspect-16/9">
+ <figure class="diff aspect-16/9" tabindex="0">
  <div class="diff-item-1" role="img">
    <img alt="image 1" src="https://img.daisyui.com/images/stock/photo-1560717789-0ac7c58ac90a.webp" />
  </div>
-  <div class="diff-item-2" role="img">
+  <div class="diff-item-2" role="img" tabindex="0">
    <img alt="image 2" src="https://img.daisyui.com/images/stock/photo-1560717789-0ac7c58ac90a-blur.webp" />
  </div>
  <div class="diff-resizer"></div>
</figure>
```

### Dropdown

🆕 Additions
- Using CSS focus method, clicking the dropdown button again will now close the dropdown ✅
- Added support for the new HTML [`popover`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/popover) attribute. HTML popover is the new standard for creating dropdowns in HTML. It prevents any overflow edgecase issues and any z-index issues.
- Added support for the new CSS [`Anchor positioning`](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_anchor_positioning) (Currently only works on Chromium-based browsers. Other browsers will position the dropdown on the middle of the screen, like a modal).

🔧 Changes
- Uses CSS `@starting-style` now.
- Uses `display` instead of `visibility` to show/hide the dropdown to prevent overflow issues.

### Divider

🆕 Additions
- Divider is now print-friendly.

### FileInput

🆕 Additions
- Added `file-input-xl` size.

🔧 Changes
- Adjusted size scale to fit with other components.
- Adjusted padding.
- Adjusted font-size.
- **Breaking Change:** File input now has border by default. Use `file-input-ghost` if you want to remove the border.

🗑️ Removals
- **Breaking Change:** Removed `file-input-bordered`. File input has a border by default now. Use `file-input-ghost` if you want to remove the border.

```diff:page.html
- <input type="file" class="file-input file-input-bordered">
+ <input type="file" class="file-input">
```

### Footer

🆕 Additions
- Added support for horizontal and vertical layouts (`footer-horizontal`, `footer-vertical`).

🔧 Changes
- **Breaking Change:** Footer is now vertical by default. Use `footer-horizontal` to make it horizontal at the screen size you want.

```diff:page.html
- <footer class="footer">
+ <footer class="footer md:footer-horizontal">
```

### Input

🆕 Additions
- Add new `input-xl` size.

🔧 Changes
- **Breaking Change:** Input now has a default width of 20rem, no need for adding `w-full max-w-xs`.
- **Breaking Change:** Removed `input-border`.Input has a border by default now. Use `input-ghost` if you want to remove the border.
- Adjusted padding.
- Adjust size scale to fit with other components.
- Improved focus style.


🗑️ Removals
- **Breaking Change:** Removed `input-bordered` class (not needed anymore).

<div class="before-after">

```html:before
<!-- Input with border -->
<input class="input input-bordered"/>

<!-- Input without border -->
<input class="input"/>

<!-- Input with 20rem width -->
<input class="input w-full max-w-xs"/>
```

```html:after
<!-- Input with border -->
<input class="input"/>

<!-- Input without border -->
<input class="input input-ghost"/>

<!-- Input with consistent width -->
<input class="input"/>
```

</div>


### Join

🔧 Changes
- Refactor the structure to be more compatible with all buttons and fields.

### Kbd

🆕 Additions
- Added new `kbd-xl` size.

### Label

🔧 Changes
- **Breaking Change:** Label has been refactored to be more compatible with form elements. See [label docs](/components/label/) for more information.

### Loading

🔧 Changes
- Added new `loading-xl` size.
- Use SVG animation instead of CSS animation for better performance.
- Fix Safari bug where the animation were stuck sometimes.

### Mask

🗑️ Removals
- **Breaking Change:** Removed `mask-parallelogram`, `mask-parallelogram-2`, `mask-parallelogram-3`, and `mask-parallelogram-4`. These mask styles are no longer included in the library. If you need them, [manually use the CSS](https://github.com/saadeghi/daisyui/blob/ff313a45cea023c852903138ea032ac2d0a217f4/src/components/styled/mask.css#L23)

### Menu

🆕 Additions
- Added new `menu-xl` size.

🔧 Changes
- Improve hover effects to menu items.
- Adjusted padding, font-size, and height to match other components.
- Easier style customization for the menu items.
- **Breaking Change:** vertical menu is not `w-full` anymore. Use `w-full` if you want it to be full width.
- **Breaking Change:** Renamed `disabled` class of menu item to `menu-disabled`.
- **Breaking Change:** Renamed `active` class of menu item to `menu-active`.
- **Breaking Change:** Renamed `focus` class of menu item to `menu-focus`.

```diff:page.html
- <ul class="menu">
+ <ul class="menu w-full">

-   <li class="disabled"><a>disabled item</a></li>
+   <li class="menu-disabled"><a>disabled item</a></li>

-   <li class="active"><a>active item</a></li>
+   <li class="menu-active"><a>active item</a></li>

-   <li class="focus"><a>focus item</a></li>
+   <li class="menu-focus"><a>focus item</a></li>
</ul>
```

### Mockup

🔧 Changes
- **Breaking Change:** Rename `camera` class in mockup-phone to `mockup-phone-camera`.
- **Breaking Change:** Rename `display` class in mockup-phone to `mockup-phone-display`.
- **Breaking Change:** `mockup-phone-display`

```diff:page.html
<div class="mockup-phone">
-  <div class="camera"></div>
+  <div class="mockup-phone-camera"></div>

-    <div class="display">
+    <div class="mockup-phone-display">

-    <div class="artboard artboard-demo phone-1">Hi.</div>
+    <div class="w-[320px] h-[568px]">Hi.</div>
  </div>
</div>
```

### Modal

🆕 Additions
- Added new `modal-start` and `modal-end` positioning options.

🔧 Changes
- Uses CSS `@starting-style` now
- Uses `display` instead of `visibility` to show/hide the modal.

### Radial Progress

🆕 Additions
- Added animation to `--value` when it changes.
- Accessibility improvements for screen readers.

### Radio

🆕 Additions
- Added new `radio-xl` size.
- Radio is now print-friendly.

🔧 Changes
- Improve size scale to fit with other components.
- Improve forced color mode for better accessibility.

### Range

🆕 Additions
- Added new `range-xl` size.

🔧 Changes
- improve the visual appeal of the range component.
- Improve size scale to fit with other components.
- Improve forced color mode for better accessibility.

### Rating

🆕 Additions
- Accessibility improvements for screen readers.

🔧 Changes
- Fix the issue of unchecked radio inputs looking like checked ones.
- Improve the click and focus animations

### Select

🆕 Additions
- Added new `select-xl` size.

🔧 Changes
- **Breaking Change:** Select now has a default width of 20rem, no need for adding `w-full max-w-xs`. `max-w-none` class.

- **Breaking Change:** Removed `select-border`. Select has a border by default now. Use `select-ghost` if you want to remove the border.
- Adjusted padding, height, and font-size to match other components.

<div class="before-after">

```html:before
<!-- Select with border -->
<select class="select select-bordered">

<!-- Select without border -->
<select class="select">

<!-- Select with consistent width -->
<select class="select w-full max-w-xs">
```

```html:after
<!-- Select with border -->
<select class="select">

<!-- Select without border -->
<select class="select select-ghost">

<!-- Select with consistent width -->
<select class="select">
```

</div>

### Stack

🆕 Additions
- Added support for different stack directions `stack-bottom`, `stack-top`, `stack-start`, `stack-end`.

🔧 Changes
- Stack uses CSS grid now.
- **Breaking Change:** Instead of setting the width and height of the stack items, use width and height for the stack itself.

```diff:page.html
- <div class="stack">
-   <div class="card bg-base-100 w-36 h-36">Text</div>
-   <div class="card bg-base-100 w-36 h-36">Text</div>
-   <div class="card bg-base-100 w-36 h-36">Text</div>
+ <div class="stack w-36 h-32">
+   <div class="card bg-base-100">Text</div>
+   <div class="card bg-base-100">Text</div>
+   <div class="card bg-base-100">Text</div>
</div>
```


### Stat

🔧 Changes
- **Breaking Change:** `stats` background color is now transparent. Use `bg-base-100` if you need a background color.

### Steps

🆕 Additions
- Add new `step-icon` class for custom icons inside step.
- Steps is now print-friendly.

### Tab

🆕 Additions
- Added new `tab-xl` size.
- Adjusted padding, font-size, and height to match other components.
- Added ability to customize the tab height form theme CSS variables. Check out the [Theme Generator](/theme-generator/) page to see how it works.
- Added new `tabs-top` and `tabs-bottom` positioning options.
- Accessibility improvements for screen readers and forced color mode.


🔧 Changes
- Changed and refactored `tabs` and `tab-content` form a grid to flex, allowing us to fix the unstable margin issue at the end of the `tab-content` which was a side-effect of using infinite grid columns in v4, to push the tabs to the left while keeping the content full width. flex and flex order gives us more control over in this layout.
- **Breaking Change:** Renamed `tabs-lifted` to `tabs-lift`.

```diff:page.html
- <div class="tabs tabs-lifted">
+ <div class="tabs tabs-lift">
```

### Table

🆕 Additions
- Added new `table-xl` size.

🔧 Changes
- **Breaking Change:** Removed `hover` class. Use `hover:bg-base-300` (or any other color) instead.

```diff:page.html
- <tr class="hover">
+ <tr class="hover:bg-base-300">
```

### Textarea

🆕 Additions
- Added new `textarea-xl` size.

🔧 Changes
- **Breaking Change:** Removed `textarea-border`. Textarea has a border by default now. Use `textarea-ghost` if you want to remove the border.

### Timeline

🆕 Additions
- Timeline is now print-friendly.

### Toggle

🆕 Additions
- Added new `toggle-xl` size.
- Added `toggle-neutral` color.
- Allow using custom icons for the toggle. [Example](/components/toggle/#toggle-with-icons-inside)
- Toggle is now print-friendly.

🔧 Changes
- Uses CSS pseudo-elements for the toggle thumb instead of box shadow which is visually more accessible.
- Improve forced color mode for better accessibility.

### Tooltip

🆕 Additions
- Added new optional `tooltip-content` class, allowing HTML content inside the tooltip.
- Added smooth transition and animation for all directions.

🔧 Changes
- Changed tooltip tail shape to a prettier shape.

### Typography

🔧 Changes
- daisyUI now only applies colors to `@tailwindcss/typography` plugin, not other modifications like padding. You can customize those according to [`@tailwindcss/typography` config](https://github.com/tailwindlabs/tailwindcss-typography) If you want other modifications from v4, [Here's the CSS](https://github.com/saadeghi/daisyui/blob/ff313a45cea023c852903138ea032ac2d0a217f4/src/components/styled/typography.css#L1)

### Other removals

#### 🗑️ Remove form-control, label-text, label-text-alt

You can still use the same HTML still, but class names don't exist anymore and won't apply color, font-size, flex, etc.  
I suggest using the newly added class names for `fieldset` and `legend` elements for better accessibility.

<div class="before-after">

```html:before
<label class="form-control w-full max-w-xs">
  Login
  <div class="label">
    <span class="label-text">Name</span>
  </div>
  <input class="input" placeholder="Name" />
</label>
```

```html:after
<fieldset class="fieldset">
  <legend>Login</legend>
  <label class="label" for="name">Name</label>
  <input id="name" class="input" placeholder="Name" />
</fieldset>
```

</div>

<div class="before-after">

```html:before
<label class="form-control w-full max-w-xs">
  <div class="label">
    <span class="label-text">What is your name?</span>
    <span class="label-text-alt">Top Right label</span>
  </div>
  <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
  <div class="label">
    <span class="label-text-alt">Bottom Left label</span>
    <span class="label-text-alt">Bottom Right label</span>
  </div>
</label>
```

```html:after
<fieldset class="fieldset max-w-xs">
  <label class="label flex justify-between" for="name">
    <span>What is your name?</span>
    <span>Top Right label</span>
  </label>
  <input id="name" class="input" placeholder="Name" />
  <label class="label flex justify-between" for="name">
    <span>Bottom Left label</span>
    <span>Bottom Right label</span>
  </label>
</fieldset>
```

</div>

#### 🗑️ Remove btn-group and input-group

btn-group, input-group were deprecated a year ago and now finally removed.  
If you've been using btn-group or input-group, you can use `join` instead

<div class="before-after">

```html:before
<div class="btn-group">
  <button class="btn">Button 1</button>
  <button class="btn">Button 2</button>
</div>
```

```html:after
<div class="join">
  <button class="btn join-item">Button 1</button>
  <button class="btn join-item">Button 2</button>
</div>
```

</div>
