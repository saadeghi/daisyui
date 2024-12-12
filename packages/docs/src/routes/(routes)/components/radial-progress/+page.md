---
title: Radial progress
desc: Radial progress can be used to show the progress of a task or to show the passing of time.
layout: components
classnames:
  component:
  - class: radial-progress
    desc: Shows a radial progress
  variable:
  # - class: --value
  #   desc: Integer value of progress (required)
  # - class: --size
  #   desc: Size of the progress circle. (default 5rem)
  # - class: --thickness
  #   desc: Thickness of progress circle. (default 10%)
---

<script>
  import Component from "$components/Component.svelte"
</script>

> :INFO:
>
> Radial progress needs `--value` CSS variable to work.  
> To change the size, use `--size` CSS variable which has a default value of `5rem`.  
> To change the thickness, use `--thickness` CSS variable which is 10% of the size by default.  

> :INFO:
>
> For Radial progress we need to use a `div` instead of the `progress` tag because browsers can't show text inside `progress` tag, and Firefox doesn’t render pseudo-elements inside `progress` tag at all.  
> Adding `role="progressbar"` makes it accessible to screen readers as well.


### ~Radial progress
<div class="radial-progress" style="--value:70;" role="progressbar">70%</div>

```html
<div class="$$radial-progress" style="--value:70;" role="progressbar">70%</div>
```
```jsx
<div className="$$radial-progress" style={{ "--value": 70 }} role="progressbar">70%</div>
```


### ~Different values
<div class="radial-progress" style="--value:0;" role="progressbar">0%</div>
<div class="radial-progress" style="--value:20;" role="progressbar">20%</div>
<div class="radial-progress" style="--value:60;" role="progressbar">60%</div>
<div class="radial-progress" style="--value:80;" role="progressbar">80%</div>
<div class="radial-progress" style="--value:100;" role="progressbar">100%</div>

```html
<div class="$$radial-progress" style="--value:0;" role="progressbar">0%</div>
<div class="$$radial-progress" style="--value:20;" role="progressbar">20%</div>
<div class="$$radial-progress" style="--value:60;" role="progressbar">60%</div>
<div class="$$radial-progress" style="--value:80;" role="progressbar">80%</div>
<div class="$$radial-progress" style="--value:100;" role="progressbar">100%</div>
```
```jsx
<div className="$$radial-progress" style={{"--value":0}} role="progressbar">0%</div>
<div className="$$radial-progress" style={{"--value":20}} role="progressbar">20%</div>
<div className="$$radial-progress" style={{"--value":60}} role="progressbar">60%</div>
<div className="$$radial-progress" style={{"--value":80}} role="progressbar">80%</div>
<div className="$$radial-progress" style={{"--value":100}} role="progressbar">100%</div>
```


### ~Custom color
<div class="radial-progress text-primary" style="--value:70;" role="progressbar">70%</div>

```html
<div class="$$radial-progress text-primary" style="--value:70;" role="progressbar">70%</div>
```
```jsx
<div className="$$radial-progress text-primary" style={{ "--value": 70 }} role="progressbar">
  70%
</div>
```


### ~With background color and border
<div class="radial-progress bg-primary text-primary-content border-4 border-primary" style="--value:70;" role="progressbar">70%</div>

```html
<div
  class="$$radial-progress bg-primary text-primary-content border-primary border-4"
  style="--value:70;"
  role="progressbar">
  70%
</div>
```
```jsx
<div
  className="$$radial-progress bg-primary text-primary-content border-primary border-4"
  style={{ "--value": 70 }}
  role="progressbar">
  70%
</div>
```


### ~Custom size and custom thickness
<div class="radial-progress" style="--value:70; --size:12rem; --thickness: 2px;" role="progressbar">70%</div>
<div class="radial-progress" style="--value:70; --size:12rem; --thickness: 2rem;" role="progressbar">70%</div>

```html
<div
  class="$$radial-progress"
  style="--value:70; --size:12rem; --thickness: 2px;"
  role="progressbar">
  70%
</div>
<div
  class="$$radial-progress"
  style="--value:70; --size:12rem; --thickness: 2rem;"
  role="progressbar">
  70%
</div>
```
```jsx
<div className="$$radial-progress" style={{ "--value": "70", "--size": "12rem", "--thickness": "2px" }} role="progressbar">70%</div>
<div className="$$radial-progress" style={{ "--value": "70", "--size": "12rem", "--thickness": "2rem" }} role="progressbar">70%</div>
```
