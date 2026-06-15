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
