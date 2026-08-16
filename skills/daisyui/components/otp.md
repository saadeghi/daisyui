### OTP
An OTP is a one-time password component that lets a user enter a verification code. The code usually contains four to six digits. Use it for two-factor authentication (2FA) or passwordless login.

[OTP documentation](https://daisyui.com/components/otp/)

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
- `{MODIFIER}` is optional. It can include one size class name and one color class name.
- The `otp-joined` modifier connects the character boxes.
- The `otp` class is for a label. The label must have four to six empty `<span>` elements that show the digits. It must also have an input field for the code.
- The number of `<span>` elements must agree with the `maxlength` attribute and the input pattern. For six `<span>` elements, use `maxlength="6"` and `pattern="\d{6}"`.
- On mobile devices, add `autocomplete="one-time-code"` and `inputmode="numeric"`. These attributes show the applicable keyboard and permit OTP autofill.
