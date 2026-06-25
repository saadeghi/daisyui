---
title: OTP
desc: OTP (One-Time Password) component for inputting verification codes. It's usually 4 to 6 digits long and is used for two-factor authentication (2FA) or passwordless login.
source: https://raw.githubusercontent.com/saadeghi/daisyui/refs/heads/master/packages/daisyui/src/components/otp.css
layout: components
classnames:
  component:
    - class: otp
      desc: For the container label
  modifier:
  - class: otp-joined
    desc: Connects the character boxes together
  size:
  - class: otp-xs
    desc: Extra small size
  - class: otp-sm
    desc: Small size
  - class: otp-md
    desc: Medium size
    default: true
  - class: otp-lg
    desc: Large size
  - class: otp-xl
    desc: Extra large size
  color:
  - class: otp-neutral
    desc: neutral color
  - class: otp-primary
    desc: primary color
  - class: otp-secondary
    desc: secondary color
  - class: otp-accent
    desc: accent color
  - class: otp-success
    desc: success color
  - class: otp-info
    desc: info color
  - class: otp-warning
    desc: warning color
  - class: otp-error
    desc: error color
---

<script>
  import Component from "$components/Component.svelte"
  import Translate from "$components/Translate.svelte"
</script>

### ~OTP
#### Make sure the number of spans matches the maxlength and the pattern of the input field. In this example, we have 4 spans for a 4-digit OTP.
<label class="otp">
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <input type="text" autocomplete="one-time-code" inputmode="numeric" maxlength="4" pattern="[0-9]&#123;4}" required />
</label>

```html
<label class="$$otp">
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <input type="text" autocomplete="one-time-code" inputmode="numeric" maxlength="4" pattern="[0-9]{4}" required />
</label>
```

### ~OTP with 6 digits

<label class="otp">
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <input type="text" autocomplete="one-time-code" inputmode="numeric" maxlength="6" pattern="[0-9]&#123;6}" required />
</label>

```html
<label class="$$otp">
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <input type="text" autocomplete="one-time-code" inputmode="numeric" maxlength="6" pattern="[0-9]{6}" required />
</label>
```

### ~OTP joined
#### Connects the character boxes together
<label class="otp otp-joined">
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <input type="text" autocomplete="one-time-code" inputmode="numeric" maxlength="5" pattern="[0-9]&#123;4}" required />
</label>

```html
<label class="$$otp $$otp-joined">
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <input type="text" autocomplete="one-time-code" inputmode="numeric" maxlength="5" pattern="[0-9]{4}" required />
</label>
```

### ~OTP with different sizes

<div class="flex flex-col gap-4 items-center">
  <label class="otp otp-xs">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <input type="text" autocomplete="one-time-code" inputmode="numeric" maxlength="4" pattern="[0-9]&#123;4}" required />
  </label>
  <label class="otp otp-sm">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <input type="text" autocomplete="one-time-code" inputmode="numeric" maxlength="4" pattern="[0-9]&#123;4}" required />
  </label>
  <label class="otp otp-md">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <input type="text" autocomplete="one-time-code" inputmode="numeric" maxlength="4" pattern="[0-9]&#123;4}" required />
  </label>
  <label class="otp otp-lg">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <input type="text" autocomplete="one-time-code" inputmode="numeric" maxlength="4" pattern="[0-9]&#123;4}" required />
  </label>
  <label class="otp otp-xl">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <input type="text" autocomplete="one-time-code" inputmode="numeric" maxlength="4" pattern="[0-9]&#123;4}" required />
  </label>
</div>

```html
<label class="$$otp $$otp-xs">
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <input type="text" autocomplete="one-time-code" inputmode="numeric" maxlength="4" pattern="[0-9]{4}" required />
</label>

<label class="$$otp $$otp-sm">
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <input type="text" autocomplete="one-time-code" inputmode="numeric" maxlength="4" pattern="[0-9]{4}" required />
</label>

<label class="$$otp $$otp-md">
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <input type="text" autocomplete="one-time-code" inputmode="numeric" maxlength="4" pattern="[0-9]{4}" required />
</label>

<label class="$$otp $$otp-lg">
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <input type="text" autocomplete="one-time-code" inputmode="numeric" maxlength="4" pattern="[0-9]{4}" required />
</label>

<label class="$$otp $$otp-xl">
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <input type="text" autocomplete="one-time-code" inputmode="numeric" maxlength="4" pattern="[0-9]{4}" required />
</label>
```

### ~OTP with different colors

<div class="flex flex-col gap-4 items-center">
  <label class="otp otp-neutral">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <input type="text" autocomplete="one-time-code" inputmode="numeric" maxlength="4" pattern="[0-9]&#123;4}" required />
  </label>
  <label class="otp otp-primary">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <input type="text" autocomplete="one-time-code" inputmode="numeric" maxlength="4" pattern="[0-9]&#123;4}" required />
  </label>
  <label class="otp otp-secondary">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <input type="text" autocomplete="one-time-code" inputmode="numeric" maxlength="4" pattern="[0-9]&#123;4}" required />
  </label>
  <label class="otp otp-accent">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <input type="text" autocomplete="one-time-code" inputmode="numeric" maxlength="4" pattern="[0-9]&#123;4}" required />
  </label>
  <label class="otp otp-info">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <input type="text" autocomplete="one-time-code" inputmode="numeric" maxlength="4" pattern="[0-9]&#123;4}" required />
  </label>
  <label class="otp otp-success">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <input type="text" autocomplete="one-time-code" inputmode="numeric" maxlength="4" pattern="[0-9]&#123;4}" required />
  </label>
  <label class="otp otp-warning">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <input type="text" autocomplete="one-time-code" inputmode="numeric" maxlength="4" pattern="[0-9]&#123;4}" required />
  </label>
  <label class="otp otp-error">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <input type="text" autocomplete="one-time-code" inputmode="numeric" maxlength="4" pattern="[0-9]&#123;4}" required />
  </label>
</div>

```html
<label class="$$otp $$otp-neutral">
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <input type="text" autocomplete="one-time-code" inputmode="numeric" maxlength="4" pattern="[0-9]{4}" required />
</label>

<label class="$$otp $$otp-primary">
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <input type="text" autocomplete="one-time-code" inputmode="numeric" maxlength="4" pattern="[0-9]{4}" required />
</label>

<label class="$$otp $$otp-secondary">
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <input type="text" autocomplete="one-time-code" inputmode="numeric" maxlength="4" pattern="[0-9]{4}" required />
</label>

<label class="$$otp $$otp-accent">
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <input type="text" autocomplete="one-time-code" inputmode="numeric" maxlength="4" pattern="[0-9]{4}" required />
</label>

<label class="$$otp $$otp-info">
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <input type="text" autocomplete="one-time-code" inputmode="numeric" maxlength="4" pattern="[0-9]{4}" required />
</label>

<label class="$$otp $$otp-success">
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <input type="text" autocomplete="one-time-code" inputmode="numeric" maxlength="4" pattern="[0-9]{4}" required />
</label>

<label class="$$otp $$otp-warning">
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <input type="text" autocomplete="one-time-code" inputmode="numeric" maxlength="4" pattern="[0-9]{4}" required />
</label>

<label class="$$otp $$otp-error">
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <input type="text" autocomplete="one-time-code" inputmode="numeric" maxlength="4" pattern="[0-9]{4}" required />
</label>
```
