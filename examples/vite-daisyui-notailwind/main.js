import 'daisyui/dist/full.css'

document.querySelector('#app').innerHTML = `

<!-- default theme (dark) -->
<div>
  <button class="btn">button</button>
  <button class="btn btn-primary">button</button>
  <button class="btn btn-secondary">button</button>
  <button class="btn btn-accent">button</button>
</div>

<!-- garden theme -->
<div data-theme=garden>
  <button class="btn">button</button>
  <button class="btn btn-primary">button</button>
  <button class="btn btn-secondary">button</button>
  <button class="btn btn-accent">button</button>
</div>

<!-- forest theme -->
<div data-theme=forest>
  <button class="btn">button</button>
  <button class="btn btn-primary">button</button>
  <button class="btn btn-secondary">button</button>
  <button class="btn btn-accent">button</button>
</div>

`
