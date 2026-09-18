### Marquee
Use the marquee component to scroll content in an infinite loop, like a strip of logos or a ticker.

[Marquee documentation](https://daisyui.com/components/marquee/)

#### Class names
- component: `marquee`
- modifier: `marquee-reverse`, `marquee-vertical`, `marquee-pause-hover`

#### Syntax
```html
<div class="marquee {MODIFIER}">
  <div>{content}</div>
  <div aria-hidden="true">{content}</div>
</div>
```

#### Rules
- `{MODIFIER}` is optional. It can include one or more modifier class names.
- Put two identical copies of the content inside the marquee so the loop is seamless. Add `aria-hidden="true"` to the second copy so screen readers only read the content once.
- Set the speed with the `--marquee-duration` CSS variable. It is the duration of one full loop, 30s by default.
- `marquee-vertical` needs a height on the marquee container.
- The scroll direction flips automatically in RTL layouts, and the animation pauses for users with reduced motion preference.
