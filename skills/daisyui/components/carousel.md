### Carousel
Use a carousel to show images or content in a scrollable area.

[Carousel documentation](https://daisyui.com/components/carousel/)

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
- `{MODIFIER}` is optional. It can include one modifier class name and one direction class name.
- The content is a list of `carousel-item` divs: `<div class="carousel-item"></div>`.
- To make a full-width carousel, add `w-full` to each carousel item.
