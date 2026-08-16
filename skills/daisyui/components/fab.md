### FAB
A FAB is a floating action button that stays in a bottom corner of the screen. It contains a focusable, accessible element with a button role. When the user clicks or focuses it, more speed-dial buttons appear. These buttons have a vertical or quarter-circle arrangement.

[FAB documentation](https://daisyui.com/components/fab/)

#### Class names
- component: `fab`
- part: `fab-close`, `fab-main-action`
- modifier: `fab-flower`

#### Syntax
One FAB in a screen corner:
```html
<div class="fab">
  <button class="btn btn-lg btn-circle">{IconOriginal}</button>
</div>
```
A FAB that opens three other buttons vertically in a page corner:
```html
<div class="fab">
  <div tabindex="0" role="button" class="btn btn-lg btn-circle btn-primary">{IconOriginal}</div>
  <button class="btn btn-lg btn-circle">{Icon1}</button>
  <button class="btn btn-lg btn-circle">{Icon2}</button>
  <button class="btn btn-lg btn-circle">{Icon3}</button>
</div>
```
A FAB that opens three other buttons vertically in a page corner. Each button has label text:
```html
<div class="fab">
  <div tabindex="0" role="button" class="btn btn-lg btn-circle btn-primary">{IconOriginal}</div>
  <div>{Label1}<button class="btn btn-lg btn-circle">{Icon1}</button></div>
  <div>{Label2}<button class="btn btn-lg btn-circle">{Icon2}</button></div>
  <div>{Label3}<button class="btn btn-lg btn-circle">{Icon3}</button></div>
</div>
```
A FAB with rectangular buttons. These buttons can contain more content than circular buttons:
```html
<div class="fab">
  <div tabindex="0" role="button" class="btn btn-lg btn-circle btn-primary">{IconOriginal}</div>
  <button class="btn btn-lg">{Label1}</button>
  <button class="btn btn-lg">{Label2}</button>
  <button class="btn btn-lg">{Label3}</button>
</div>
```
A FAB with a close button. When the FAB is open, the close button replaces the original button:
```html
<div class="fab">
  <div tabindex="0" role="button" class="btn btn-lg btn-circle btn-primary">{IconOriginal}</div>
  <div class="fab-close">Close <span class="btn btn-circle btn-lg btn-error">×</span></div>
  <div>{Label1}<button class="btn btn-lg btn-circle">{Icon1}</button></div>
  <div>{Label2}<button class="btn btn-lg btn-circle">{Icon2}</button></div>
  <div>{Label3}<button class="btn btn-lg btn-circle">{Icon3}</button></div>
</div>
```
A FAB with a main-action button. When the FAB is open, the main-action button replaces the original button:
```html
<div class="fab">
  <div tabindex="0" role="button" class="btn btn-lg btn-circle btn-primary">{IconOriginal}</div>
  <div class="fab-main-action">
    {LabelMainAction}<button class="btn btn-circle btn-secondary btn-lg">{IconMainAction}</button>
  </div>
  <div>{Label1}<button class="btn btn-lg btn-circle">{Icon1}</button></div>
  <div>{Label2}<button class="btn btn-lg btn-circle">{Icon2}</button></div>
  <div>{Label3}<button class="btn btn-lg btn-circle">{Icon3}</button></div>
</div>
```
A flower FAB. It opens the buttons in a quarter-circle arrangement instead of a vertical arrangement:
```html
<div class="fab fab-flower">
  <div tabindex="0" role="button" class="btn btn-lg btn-circle btn-primary">{IconOriginal}</div>
  <button class="fab-main-action btn btn-circle btn-lg">{IconMainAction}</button>
  <button class="btn btn-lg btn-circle">{Icon1}</button>
  <button class="btn btn-lg btn-circle">{Icon2}</button>
  <button class="btn btn-lg btn-circle">{Icon3}</button>
</div>
```
A flower FAB with tooltips. A quarter circle has no space for a text label. Thus, each tooltip identifies the button function:
```html
<div class="fab fab-flower">
  <div tabindex="0" role="button" class="btn btn-lg btn-circle btn-primary">{IconOriginal}</div>
  <button class="fab-main-action btn btn-circle btn-lg">{IconMainAction}</button>
  <div class="tooltip tooltip-left" data-tip="{Label1}">
    <button class="btn btn-lg btn-circle">{Icon1}</button>
  </div>
  <div class="tooltip tooltip-left" data-tip="{Label2}">
    <button class="btn btn-lg btn-circle">{Icon2}</button>
  </div>
  <div class="tooltip tooltip-left" data-tip="{Label3}">
    <button class="btn btn-lg btn-circle">{Icon3}</button>
  </div>
</div>
```
#### Rules
- Replace `{Icon*}` with the applicable icon for each button. If possible, use SVG icons.
- Use `{IconOriginal}` for the icon that appears before the FAB opens.
- Use `{IconMainAction}` for the icon that appears after the FAB opens.
- Use `{Icon1}`, `{Icon2}`, and `{Icon3}` for the other button icons.
- Replace `{Label*}` with the label text for each button.
