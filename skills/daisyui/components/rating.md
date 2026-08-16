### Rating
A rating is a set of radio buttons that lets the user give a rating.

[Rating documentation](https://daisyui.com/components/rating/)

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

For a read-only, noninteractive rating, use `<div>` elements instead of radio inputs. Add `aria-current="true"` to the selected element:
```html
<div class="rating">
  <div class="mask mask-star" aria-label="1 star"></div>
  <div class="mask mask-star" aria-label="2 star" aria-current="true"></div>
  <div class="mask mask-star" aria-label="3 star"></div>
</div>
```

#### Rules
- `{MODIFIER}` is optional. It can include one modifier class name and one size class name.
- Recommendation: Use a unique `name` attribute for each rating-input group. This prevents conflicts with other ratings on the same page.
- Add `rating-hidden` to the first radio input to hide it. This lets the user clear the rating.
- For a read-only, noninteractive rating, use `<div>` elements instead of radio inputs. Add `aria-current="true"` to the selected element.
