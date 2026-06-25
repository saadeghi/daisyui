### OTP
OTP (One-Time Password) component for inputting verification codes. It's usually 4 to 6 digits long and is used for two-factor authentication (2FA) or passwordless login.

[OTP docs](https://daisyui.com/components/otp/)

#### Class names
- component: `otp`
- size: `otp-xs`, `otp-sm`, `otp-md`, `otp-lg`, `otp-xl`
- modifier: `otp-joined`
- color: `otp-neutral`, `otp-primary`, `otp-secondary`, `otp-accent`, `otp-info`, `otp-success`, `otp-warning`, `otp-error`

#### Syntax
```html
<label class="otp {MODIFIER}">
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <input type="text" autocomplete="one-time-code" inputmode="numeric" maxlength="4" pattern="[0-9]{4}" required />
</label>
```

#### Rules
- {MODIFIER} is optional and can have one of the size/color class names
- `otp-joined` modifier connects the character boxes together
- the `otp` class is for a label. The label should have 4 to 6 empty `<span>` elements for the visual representation of each digit and an input field for entering the code
- The number of `<span>` elements must match the `maxlength` attribute and the pattern in the input field. For example, if you have 6 `<span>` elements, the input should have `maxlength="6"` and `pattern="\d{6}"`
- `autocomplete="one-time-code"` and `inputmode="numeric"` are important for mobile devices to show the appropriate keyboard and to allow autofill of the OTP code
