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

For a read-only (non-interactive) rating, use `<div>` elements instead of radio inputs and mark the selected one with `aria-current="true"`:
```html
<div class="rating">
  <div class="mask mask-star" aria-label="1 star"></div>
  <div class="mask mask-star" aria-label="2 star" aria-current="true"></div>
  <div class="mask mask-star" aria-label="3 star"></div>
</div>
```

#### Rules
- {MODIFIER} is optional and can have one of the modifier/size class names
- Each set of rating inputs should have unique `name` attributes to avoid conflicts with other ratings on the same page
- Add `rating-hidden` for the first radio to make it hidden so user can clear the rating
- For a read-only/non-interactive rating, use `<div>` elements instead of the radio inputs and mark the selected one with `aria-current="true"`
