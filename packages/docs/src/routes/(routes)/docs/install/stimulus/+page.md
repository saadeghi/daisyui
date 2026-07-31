---
title: Use daisyUI with Stimulus
desc: How to use daisyUI components with Stimulus controllers
---

<script>
  import Translate from "$components/Translate.svelte"
</script>

> :INFO:
>
> daisyUI components are pure CSS and work without any JavaScript.
> This page is about the extra behavior you might want once Stimulus is already part of your stack, like persisting a theme or closing a dropdown after a click.

### 1. Add daisyUI

daisyUI needs no Stimulus-specific setup. Follow the guide for whatever builds your CSS.

<div class="tabs tabs-lift max-sm:tabs-sm">
  <input type="radio" name="install_options" class="tab" aria-label="Rails" checked="checked" />
  <div class="tab-content bg-base-100 border-base-300 px-6 py-3">

Stimulus ships with Rails 7 and later. Follow the [Rails install guide](/docs/install/rails/) to add Tailwind CSS and daisyUI, then put your controllers in `app/javascript/controllers/`.

  </div>

  <input type="radio" name="install_options" class="tab" aria-label="Vite or another bundler" />
  <div class="tab-content bg-base-100 border-base-300 px-6 py-3">

Follow the [Vite install guide](/docs/install/vite/) for Tailwind CSS and daisyUI, then add Stimulus.

```sh:Terminal
npm install @hotwired/stimulus
```

Register your controllers explicitly.

```js:src/application.js
import { Application } from "@hotwired/stimulus"
import ModalController from "./controllers/modal_controller"

window.Stimulus = Application.start()
Stimulus.register("modal", ModalController)
```

  </div>

  <input type="radio" name="install_options" class="tab" aria-label="No build step" />
  <div class="tab-content bg-base-100 border-base-300 px-6 py-3">

Build your CSS with the [Tailwind CSS CLI](/docs/install/cli/), then load Stimulus from a CDN as a module.

```html:index.html
<script type="module">
  import { Application, Controller } from "https://unpkg.com/@hotwired/stimulus/dist/stimulus.js"
  window.Stimulus = Application.start()

  Stimulus.register("modal", class extends Controller {
    static targets = ["dialog"]
    open() { this.dialogTarget.showModal() }
    close() { this.dialogTarget.close() }
  })
</script>
```

  </div>
</div>

### 2. Persist the theme

[Theme Controller](/components/theme-controller/) changes the theme with CSS only. To keep the choice across page loads, save it and restore it yourself.

Restore the theme in a script in your `<head>`, before anything renders. A Stimulus controller connects after the first paint, so restoring it in `connect()` shows a flash of the old theme.

```html
<script>
  ;(() => {
    const theme = localStorage.getItem("theme")
    if (theme) document.documentElement.setAttribute("data-theme", theme)
  })()
</script>
```

The controller keeps localStorage and the input in sync.

```js:app/javascript/controllers/theme_controller.js
import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["input"]
  static values = { storageKey: { type: String, default: "theme" } }

  connect() {
    const saved = localStorage.getItem(this.storageKeyValue)
    if (!saved) return

    this.inputTargets.forEach((input) => {
      input.checked = input.value === saved
    })
  }

  save(event) {
    const input = event.target

    if (input.checked) {
      localStorage.setItem(this.storageKeyValue, input.value)
      document.documentElement.setAttribute("data-theme", input.value)
    } else {
      localStorage.removeItem(this.storageKeyValue)
      document.documentElement.removeAttribute("data-theme")
    }
  }
}
```

```html:index.html
<div data-controller="theme" data-action="change->theme#save">
  <input type="checkbox" value="synthwave" class="toggle theme-controller" data-theme-target="input" />
</div>
```

The theme you name has to be enabled, otherwise nothing happens. daisyUI enables `light` and `dark` by default.

```postcss:app.css
@plugin "daisyui" {
  themes: light --default, dark --prefersdark, synthwave;
}
```

### 3. Open and close a modal

The [modal](/components/modal/) is a native `<dialog>` element. A target avoids relying on a global element ID.

```js:app/javascript/controllers/modal_controller.js
import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["dialog"]

  open() {
    this.dialogTarget.showModal()
  }

  close() {
    this.dialogTarget.close()
  }
}
```

```html:index.html
<div data-controller="modal">
  <button class="btn" data-action="modal#open">open modal</button>
  <dialog class="modal" data-modal-target="dialog">
    <div class="modal-box">
      <h3 class="text-lg font-bold">Hello!</h3>
      <div class="modal-action">
        <button class="btn" data-action="modal#close">Close</button>
      </div>
    </div>
    <form method="dialog" class="modal-backdrop">
      <button>close</button>
    </form>
  </dialog>
</div>
```

Esc and the backdrop still close it without any extra code.

### 4. Close a dropdown

A [dropdown](/components/dropdown/) built from `details` and `summary` stays open after you click an item. Remove the `open` attribute to close it.

```js:app/javascript/controllers/dropdown_controller.js
import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  close() {
    this.element.removeAttribute("open")
  }

  closeOnOutsideClick(event) {
    if (this.element.contains(event.target)) return

    this.close()
  }
}
```

```html:index.html
<details class="dropdown" data-controller="dropdown" data-action="click@window->dropdown#closeOnOutsideClick">
  <summary class="btn m-1">open menu</summary>
  <ul class="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm" data-action="click->dropdown#close">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</details>
```

The [popover method](/components/dropdown/#method-2-popover-api-and-anchor-positioning-new) dismisses itself and needs no controller.

### 5. Dismiss a toast

```js:app/javascript/controllers/toast_controller.js
import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static values = { delay: { type: Number, default: 3000 } }

  connect() {
    this.timeout = setTimeout(() => this.element.remove(), this.delayValue)
  }

  disconnect() {
    clearTimeout(this.timeout)
  }
}
```

```html:index.html
<div class="toast toast-end" data-controller="toast" data-toast-delay-value="3000">
  <div class="alert alert-success">
    <span>Message sent successfully.</span>
  </div>
</div>
```

`disconnect()` clears the timer when Turbo removes the element, so nothing is left scheduled against a detached node.

### 6. Notes for Turbo

If you use Turbo Drive or Turbo morphing (`turbo_refreshes_with method: :morph`), a couple of things behave differently than a plain page load.

> :WARNING:
>
> A morph refresh can make the whole page stop responding to clicks if a modal is open. Your server's HTML has no `open` attribute on the `<dialog>`, so a morph strips it: `dialog.open` becomes `false`. But the element stays in the browser's top layer, still holding a full-viewport `.modal-backdrop` that is now just `visibility: hidden` and `pointer-events: none`. Every click on the page then hits that invisible backdrop instead of your content, and nothing is logged to the console, so it looks like the page has simply frozen. Add `data-turbo-permanent` and an `id` to the dialog to exclude it from morphing. With that in place the dialog stays open through the morph and still closes and reopens normally afterward.

```html:index.html
<dialog id="my-modal" class="modal" data-modal-target="dialog" data-turbo-permanent>
```

**Turbo Drive Back can restore a modal that no longer behaves like one.** Go back to a page that had an open modal, and `dialog.open` comes back `true` with the page still scroll-locked, but the dialog is not re-entered into the browser's top layer. Escape no longer closes it, although the Close button still works. No fix for this has been tested yet.

**An open dropdown just closes during a morph.** No mitigation needed.
