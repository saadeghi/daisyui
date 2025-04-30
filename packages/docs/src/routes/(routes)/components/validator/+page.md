---
title: Validator
desc: Validator class changes the color of form elements to error or success based on input's validation rules.
layout: components
classnames:
  component:
  - class: validator
    desc: For input, select, textarea
  part:
  - class: validator-hint
    desc: for the hint text that appears after the input if it's invalid
---

<script>
  import Component from "$components/Component.svelte"
  import Translate from "$components/Translate.svelte"
</script>

### ~Validator
#### writing an invalid email address applies error color to the input. Valid email address applies success color.

<form class="w-full max-w-xs">
  <input class="input validator" type="email" required placeholder="mail@site.com" autocomplete="false" />
</form>


```html
<input class="$$input $$validator" type="email" required placeholder="mail@site.com" />
```

### ~Validator and validator-hint
#### If value is invalid, a hint text appears below the input.

<form class="w-full max-w-xs">
  <input class="input validator" type="email" required placeholder="mail@site.com" autocomplete="false" />
  <div class="validator-hint">Enter valid email address</div>
</form>


```html
<input class="$$input $$validator" type="email" required placeholder="mail@site.com" />
<div class="$$validator-hint">Enter valid email address</div>
```

> :INFO:
>
> `validator-hint` class will be invisible if it comes after a `validator` class, then if the input is invalid, `validator-hint` will get visible.  
> `validator-hint` still occupies space even if it's invisible because we don't want a layout shift when the hint appears.  
> If you prefer to hide the hint when it's not visible, add `hidden` class to `validator-hint`. It will take no space when it's hidden, and if input is invalid, it will appear and take space.


### ~Password requirement validator

<form class="w-full max-w-xs">
  <input type="password" class="input validator" required placeholder="Password" minlength="8" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).&#123;8,}" title="Must be more than 8 characters, including number, lowercase letter, uppercase letter" />
  <p class="validator-hint">
    Must be more than 8 characters, including
    <br/>At least one number
    <br/>At least one lowercase letter
    <br/>At least one uppercase letter
  </p>
</form>


```html
<input type="password" class="$$input $$validator" required placeholder="Password" minlength="8" 
  pattern="(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" 
  title="Must be more than 8 characters, including number, lowercase letter, uppercase letter" />
<p class="$$validator-hint">
  Must be more than 8 characters, including
  <br/>At least one number
  <br/>At least one lowercase letter
  <br/>At least one uppercase letter
</p>
```

### ~Username requirement validator
<form class="w-full max-w-xs">
  <input type="text" class="input validator" required placeholder="Username" pattern="[A-Za-z][A-Za-z0-9\-]*" minlength="3" maxlength="30" title="Only letters, numbers or dash" />
  <p class="validator-hint">
    Must be 3 to 30 characters
    <br/>containing only letters, numbers or dash
  </p>
</form>

```html
<input type="text" class="$$input $$validator" required placeholder="Username" 
  pattern="[A-Za-z][A-Za-z0-9\\-]*" minlength="3" maxlength="30" title="Only letters, numbers or dash" />
<p class="$$validator-hint">
  Must be 3 to 30 characters
  <br/>containing only letters, numbers or dash
</p>
```

### ~Phone Number requirement validator
<form class="w-full max-w-xs">
  <input type="tel" class="input validator tabular-nums" required placeholder="Phone" pattern="[0-9]*" minlength="10" maxlength="10" title="Must be 10 digits" />
  <p class="validator-hint">Must be 10 digits</p>
</form>

```html
<input type="tel" class="$$input $$validator tabular-nums" required placeholder="Phone" 
  pattern="[0-9]*" minlength="10" maxlength="10" title="Must be 10 digits" />
<p class="$$validator-hint">Must be 10 digits</p>
```

### ~URL input requirement validator
<form class="w-full max-w-xs">
  <input type="url" class="input validator" required placeholder="https://" value="https://" pattern="^(https?://)?([a-zA-Z0-9]([a-zA-Z0-9\-].*[a-zA-Z0-9])?\.)+[a-zA-Z].*$" title="Must be valid URL" />
  <p class="validator-hint">Must be valid URL</p>
</form>

```html
<input type="url" class="$$input $$validator" required placeholder="https://" value="https://"
  pattern="^(https?://)?([a-zA-Z0-9]([a-zA-Z0-9\-].*[a-zA-Z0-9])?\.)+[a-zA-Z].*$" 
  title="Must be valid URL" />
<p class="$$validator-hint">Must be valid URL</p>
```

### ~Date input requirement validator
<form class="w-full max-w-xs">
  <input type="date" class="input validator" required placeholder="Pick a date in 2025" 
  min="2025-01-01" max="2025-12-31" title="Must be valid URL" />
  <p class="validator-hint">Must be 2025</p>
</form>

```html
<input type="date" class="$$input $$validator" required placeholder="Pick a date in 2025" 
min="2025-01-01" max="2025-12-31"
  title="Must be valid URL" />
<p class="$$validator-hint">Must be 2025</p>
```

### ~Number input requirement validator
<form class="w-full max-w-xs">
  <input type="number" class="input validator" required placeholder="Type a number between 1 to 10" 
  min="1" max="10" title="Must be between be 1 to 10" />
  <p class="validator-hint">Must be between be 1 to 10</p>
</form>

```html
<input type="number" class="$$input $$validator" required placeholder="Type a number between 1 to 10" 
min="1" max="10"
  title="Must be between be 1 to 10" />
<p class="$$validator-hint">Must be between be 1 to 10</p>
```

### ~Checkbox requirement validator
<form>
  <input type="checkbox" class="checkbox validator" required title="Required" />
  <p class="validator-hint">Required</p>
</form>

```html
<input type="checkbox" class="$$checkbox $$validator" required title="Required" />
<p class="$$validator-hint">Required</p>
```

### ~Toggle requirement validator
<form>
  <input type="checkbox" class="toggle validator" required title="Required" />
  <p class="validator-hint">Required</p>
</form>

```html
<input type="checkbox" class="$$toggle $$validator" required title="Required" />
<p class="$$validator-hint">Required</p>
```

### ~Select requirement validator
#### Click the button before picking an option to see the error color.
<form class="w-full max-w-xs">
  <select class="select validator" required>
    <option disabled selected value="">Choose:</option>
    <option>Tabs</option>
    <option>Spaces</option>
  </select>
  <p class="validator-hint">Required</p>
  <button class="btn" type="submit">Submit form</button>
</form>

```html
<form>
  <select class="$$select $$validator" required>
    <option disabled selected value="">Choose:</option>
    <option>Tabs</option>
    <option>Spaces</option>
  </select>
  <p class="$$validator-hint">Required</p>
  <button class="$$btn" type="submit">Submit form</button>
</form>
```
