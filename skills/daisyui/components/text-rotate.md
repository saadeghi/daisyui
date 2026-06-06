### text-rotate
Text Rotate can show up to 6 lines of text, one at a time, with a an infinite loop animation. Duration is 10 seconds by default. The animation will pause on hover.

[textarea docs](https://daisyui.com/components/text-rotate/)

#### Class Names:
- Component: `text-rotate`

#### Syntax
```html
<span class="text-rotate">
  <span>
    <span>Word 1</span>
    <span>Word 2</span>
    <span>Word 3</span>
    <span>Word 4</span>
    <span>Word 5</span>
    <span>Word 6</span>
  </span>
</span>
```
Example:
Big font size, horizontally centered
```html
<span class="text-rotate max-md:text-3xl text-7xl font-title">
  <span class="justify-items-center">
    <span>DESIGN</span>
    <span>DEVELOP</span>
    <span>DEPLOY</span>
    <span>SCALE</span>
    <span>MAINTAIN</span>
    <span>REPEAT</span>
  </span>
</span>
```
Rotating words in a sentence, different colors for each word
```html
<span>
  Providing AI Agents for 
  <span class="text-rotate">
    <span>
      <span class="bg-teal-400 text-teal-800 px-2">Designers</span>
      <span class="bg-red-400 text-red-800 px-2">Developers</span>
      <span class="bg-blue-400 text-blue-800 px-2">Managers</span>
    </span>
  </span>
</span>
```
Custom line height in case you have a tall font or need more vertical spacing between lines
```html
<span class="text-rotate max-md:text-3xl text-7xl font-title leading-[2]">
  <span class="justify-items-center">
    <span>📐 DESIGN</span>
    <span>⌨️ DEVELOP</span>
    <span>🌎 DEPLOY</span>
    <span>🌱 SCALE</span>
    <span>🔧 MAINTAIN</span>
    <span>♻️ REPEAT</span>
  </span>
</span>
```

#### Rules
- `text-rotate` must have one span or div inside it that contains 2 to 6 spans/divs for each line of text
- Total duration of the loop is 10000 milliseconds by default
- You can set custom duration using `duration-{value}` utility class, where value is in milliseconds (e.g. `duration-12000` for 12 seconds)
