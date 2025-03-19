---
title: Radial progress
desc: Radial progress can be used to show the progress of a task or to show the passing of time.
layout: components
classnames:
  component:
  - class: radial-progress
    desc: Shows a radial progress
---

<script>
  import Component from "$components/Component.svelte"
  import Translate from "$components/Translate.svelte"
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
<div class="radial-progress" style="--value:70;" aria-valuenow="70" role="progressbar">70%</div>

```html
<div class="$$radial-progress" style="--$$value:70;" aria-valuenow="70" role="progressbar">70%</div>
```
```jsx
{/* For TSX uncomment the commented types below */}
<div className="$$radial-progress" style={{ "--$$value": 70 } /* as React.CSSProperties */ } 
  aria-valuenow={70} role="progressbar">70%</div>
```


### ~Different values
<div class="radial-progress" style="--value:0;" aria-valuenow="0" role="progressbar">0%</div>
<div class="radial-progress" style="--value:20;" aria-valuenow="20" role="progressbar">20%</div>
<div class="radial-progress" style="--value:60;" aria-valuenow="60" role="progressbar">60%</div>
<div class="radial-progress" style="--value:80;" aria-valuenow="80" role="progressbar">80%</div>
<div class="radial-progress" style="--value:100;" aria-valuenow="100" role="progressbar">100%</div>

```html
<div class="$$radial-progress" style="--$$value:0;" aria-valuenow="0" role="progressbar">0%</div>
<div class="$$radial-progress" style="--$$value:20;" aria-valuenow="20" role="progressbar">20%</div>
<div class="$$radial-progress" style="--$$value:60;" aria-valuenow="60" role="progressbar">60%</div>
<div class="$$radial-progress" style="--$$value:80;" aria-valuenow="80" role="progressbar">80%</div>
<div class="$$radial-progress" style="--$$value:100;" aria-valuenow="100" role="progressbar">100%</div>
```
```jsx
{/* For TSX uncomment the commented types below */}
<div className="$$radial-progress" style={{"--$$value":0} /* as React.CSSProperties */ } 
  aria-valuenow={0} role="progressbar">0%</div>

<div className="$$radial-progress" style={{"--$$value":20} /* as React.CSSProperties */ } 
aria-valuenow={20} role="progressbar">20%</div>

<div className="$$radial-progress" style={{"--$$value":60} /* as React.CSSProperties */ } 
  aria-valuenow={60} role="progressbar">60%</div>

<div className="$$radial-progress" style={{"--$$value":80} /* as React.CSSProperties */ } 
  aria-valuenow={80} role="progressbar">80%</div>

<div className="$$radial-progress" style={{"--$$value":100} /* as React.CSSProperties */ } 
  aria-valuenow={100} role="progressbar">100%</div>
```


### ~Custom color
<div class="radial-progress text-primary" style="--value:70;" aria-valuenow="70" role="progressbar">70%</div>

```html
<div class="$$radial-progress text-primary" style="--$$value:70;" aria-valuenow="70" role="progressbar">70%</div>
```
```jsx
{/* For TSX uncomment the commented types below */}
<div className="$$radial-progress text-primary" style={{ "--$$value": 70 } /* as React.CSSProperties */ } aria-valuenow={70} role="progressbar">
  70%
</div>
```


### ~With background color and border
<div class="radial-progress bg-primary text-primary-content border-4 border-primary" style="--value:70;" aria-valuenow="70" role="progressbar">70%</div>

```html
<div
  class="$$radial-progress bg-primary text-primary-content border-primary border-4"
  style="--$$value:70;" aria-valuenow="70" role="progressbar">
  70%
</div>
```
```jsx
{/* For TSX uncomment the commented types below */}
<div
  className="$$radial-progress bg-primary text-primary-content border-primary border-4"
  style={{ "--$$value": 70 } /* as React.CSSProperties */ } aria-valuenow={70} role="progressbar">
  70%
</div>
```


### ~Custom size and custom thickness
<div class="radial-progress" style="--value:70; --size:12rem; --thickness: 2px;" aria-valuenow="70" role="progressbar">70%</div>
<div class="radial-progress" style="--value:70; --size:12rem; --thickness: 2rem;" aria-valuenow="70" role="progressbar">70%</div>

```html
<div class="$$radial-progress" style="--$$value:70; --$$size:12rem; --$$thickness: 2px;" aria-valuenow="70" role="progressbar">70%</div>
<div class="$$radial-progress" style="--$$value:70; --$$size:12rem; --$$thickness: 2rem;" aria-valuenow="70" role="progressbar">70%</div>
```
```jsx
{/* For TSX uncomment the commented types below */}
<div className="$$radial-progress"
  style={{ "--$$value": "70", "--$$size": "12rem", "--$$thickness": "2px" } /* as React.CSSProperties */ } 
  aria-valuenow={70} role="progressbar">70%</div>

<div className="$$radial-progress"
  style={{ "--$$value": "70", "--$$size": "12rem", "--$$thickness": "2rem" } /* as React.CSSProperties */ } 
  aria-valuenow={70} role="progressbar">70%</div>
```
