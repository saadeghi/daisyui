### Scroll fade

Scroll fade adds a shade at the edge of a scrollable container, so it is clear there is more content in that direction.

[Scroll fade documentation](https://daisyui.com/components/scroll-fade/)

#### Class names

- component: `scroll-fade`
- part: `scroll-fade-body`
- direction: `scroll-fade-x`

#### Syntax

```html
<div class="scroll-fade {HEIGHT}">
  <div class="scroll-fade-body">{Content}</div>
</div>
```

A horizontal scroller:

```html
<div class="scroll-fade scroll-fade-x">
  <div class="scroll-fade-body">
    <div class="flex w-max">{Items}</div>
  </div>
</div>
```

#### Rules

- `scroll-fade` is the container that gets the shade, `scroll-fade-body` is the element that scrolls. Both are required.
- Put the size on `scroll-fade` (`h-52`, `max-h-64`), not on the body.
- A horizontal scroller needs a width on the container (`w-md`, `max-w-full`), otherwise it grows to the content.
- Without `scroll-fade-x` the shade is on the block edges; with `scroll-fade-x` it is on the inline edges and follows the writing direction.
- The shade is a gradient of `--scroll-fade-color` (default `base-100`); set it when the container sits on another surface.
- `--scroll-fade-size` sets the shade size, 2rem by default.
- The shade only shows while there is more content in that direction. Browsers without CSS scroll-driven animations show the container without a shade.
- Border, background and scrollbar of the container stay as they are; the shade is drawn above the content.
- A pinned header that sets its own `z-index` (`table-pin-rows`) stays above the shade, so by default the shade hides behind it.
- Set `--scroll-fade-offset` to the height of a pinned header (`[--scroll-fade-offset:3rem]`) so the top shade starts below it instead.
- The block shade is a sticky pseudo inside the scroller, so it never covers the scrollbar; the `scroll-fade-x` bands sit on the container and do span the full height.
- Never put padding on `.scroll-fade-body` (or on `.scroll-fade` around it): sticky boxes are clamped to the scroller's content box, so padding shows up as a strip between the border and the shade. Pad the content inside the body instead.
