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
