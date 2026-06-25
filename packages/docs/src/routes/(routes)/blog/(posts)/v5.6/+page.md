---
title: "daisyUI 5.6"
desc: daisyUI 5.6 is here with 3 new components, new ways to use existing components, and many small improvements across the library.
published: true
date: 2026-06-25
author: Pouya Saadeghi
thumbnail: https://img.daisyui.com/images/blog/v5.6.webp
tags:
  - News
---

<script>
  import Translate from "$components/Translate.svelte"
</script>

Try the new version now:

```bash
npm i daisyui@5.6.0
```

## New components

### Aura

Give aura to your components!

[Aura](/components/aura/) is a new wrapper component for animated border glow effects. You can put it around a card, button, image, or any other element and get a conic-gradient border animation with a smooth blur aura effect.

<div class="flex max-sm:flex-col items-center justify-center gap-4 border px-4 border-base-300 py-20 rounded-box">
  <button class="btn">Your button</button>
  <div class="aura aura-rainbow">
    <button class="btn w-full">The button she told you not to worry about</button>
  </div>
</div>

It comes with different styles:

- `aura-dual`
- `aura-rainbow`
- `aura-holo`
- `aura-gold`
- `aura-silver`
- `aura-glow`

It supports 5 sizes from `xs` to `xl`. If one element in your page needs extra attention, wrap it in an aura!

[See Aura docs](/components/aura/) for more examples and usage.

### Megamenu

[Megamenu](/components/megamenu/) is a new navigation component for larger menus. It uses the Popover API for desktop and can fall back to a vertical layout on small screens.

<div class="border px-4 border-base-300 py-20 rounded-box flex justify-center">
  <button class="btn sm:hidden" popovertarget="megamenu-blog-demo">Open responsive megamenu</button>
  <div class="megamenu not-prose max-sm:megamenu-vertical p-2 border border-base-300 w-full" id="megamenu-blog-demo" popover>
    <span class="megamenu-active"></span>
    <button popovertarget="megamenu-blog-demo-1">Services</button>
    <div id="megamenu-blog-demo-1" popover>
      <ul class="menu">
        <li><a>Enterprise</a></li>
        <li><a>CRM software</a></li>
        <li><a>Security</a></li>
        <li><a>Consulting</a></li>
      </ul>
    </div>
    <button popovertarget="megamenu-blog-demo-2">AI</button>
    <div id="megamenu-blog-demo-2" popover>
      <ul class="menu">
        <li><a>AI infrastructure</a></li>
        <li><a>Image generation</a></li>
        <li><a>MCP servers</a></li>
      </ul>
    </div>
    <button popovertarget="megamenu-blog-demo-3">Cloud Solutions</button>
    <div id="megamenu-blog-demo-3" popover>
      <ul class="menu">
        <li><a>Cloud computing</a></li>
        <li><a>Storage solutions</a></li>
        <li><a>Database services</a></li>
        <li><a>CDN performance</a></li>
      </ul>
    </div>
  </div>
</div>

It supports wide, full width, and vertical modifiers, plus size variants from `xs` to `xl`. This is useful for docs sites, dashboards, stores, and apps where a normal dropdown gets crowded too quickly.

[See Megamenu docs](/components/megamenu/) for more examples and usage.

### OTP

[OTP](/components/otp/) is a new one-time password input component. You can use it for login codes, verification codes, 2FA screens, and similar flows.

<div class="border px-4 border-base-300 py-20 rounded-box flex justify-center">
  <label class="otp">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <input type="text" autocomplete="one-time-code" inputmode="numeric" maxlength="4" pattern="[0-9]&#123;4}" required />
  </label>
</div>

It uses a native input with visual slots. You get the familiar OTP look while keeping the form simple. It supports joined style, semantic colors, and all sizes from `xs` to `xl`.

[See OTP docs](/components/otp/) for more examples and usage.

## Better sliders, tooltips, modals, and cards

- [Range slider](/components/range/) now has a vertical mode. Add `range-vertical` to make it vertical.

- [Tooltip](/components/tooltip/) now supports alignment modifiers:

  - `tooltip-start`
  - `tooltip-center`
  - `tooltip-end`

  These work with all tooltip directions. You can place the tooltip at the top, bottom, left, or right and still choose how it aligns on that axis.

- [Modal](/components/modal/) now supports the Popover API as another opening method. daisyUI already supported modal patterns using HTML dialog and other methods. With 5.6, you can also use `[popover]`, `:popover-open`, and `::backdrop` when that fits your project better.

- [Card](/components/card/) also got selectable states. Cards can now use `aria-checked`, nested checkbox or radio focus styles, pointer cursor, and a stronger checked focus outline. This makes selectable pricing cards, plan cards, and settings cards easier to build.

## Improvements across existing components

Many small improvements are coming in 5.6. Here are some highlights:

- Buttons got cleaner internal variables for variants like `ghost`, `outline`, `dash`, `soft`, and `link`. Disabled buttons now also support `[aria-disabled="true"]`, which is useful when the element can't use the native `disabled` attribute.

- Collapse got smoother native `details` animation support and better overflow handling. Loading animations now respect `prefers-reduced-motion`, showing a static fallback for users who prefer reduced motion.

- Inputs, selects, textareas, floating labels, ratings, and range sliders got cleaner size variables and selector improvements. That means size variants are easier to maintain and more consistent.

- There are also smaller fixes for menu, dropdown, footer, mockup code, FAB, filter, calendar, and more. These are not the loud features. They make the whole system feel more solid.

## Docs updates

- The docs now include pages and examples for the new components [Aura](/components/aura/), [Megamenu](/components/megamenu/), and [OTP](/components/otp/). [Modal](/components/modal/) docs include the new popover method, [Tooltip](/components/tooltip/) docs include alignment examples, and [Range](/components/range/) docs include the vertical slider example.

- [Card](/components/card/) docs now include selectable card examples with checkbox and radio inputs.

- [Blueprint MCP](/blueprint/), [daisyUI Skill](/skills/daisyui/) and [llms.txt](/llms.txt/) are all updated to include the new components and new improvements.

  - Use the latest version of Blueprint with `daisyui-blueprint@latest`
  - Update your daisyUI Skill using `npx skills update`

## Try it and send feedback

daisyUI 5.6 is ready to use now, and you can install it with:

```bash
npm i daisyui@5.6.0
```

If you find a bug or if something feels confusing, please open an issue or discussion on [GitHub](https://github.com/saadeghi/daisyui) or [Discord](https://daisyui.com/discord).

