---
title: Megamenu
desc: A megamenu is a large, horizontal menu where each item opens a popover to show a large block of navigation links. Megamenu must be used once, on top of the page. Inside each popover, you can use a daisyUI menu, or any custom content. Megamenu fits better on large screens only, and for small screens, you can hide the megamenu and show the content in a dropdown or a drawer.
source: https://raw.githubusercontent.com/saadeghi/daisyui/refs/heads/master/packages/daisyui/src/components/megamenu.css
layout: components
classnames:
  component:
  - class: megamenu
    desc: For the container div
  modifier:
  - class: megamenu-wide
    desc: megamenu dropdown will be as wide as the megamenu container
  - class: megamenu-full
    desc: megamenu dropdown will fill the entire width of the page
  direction:
  - class: megamenu-vertical
    desc: Hides horizontal megamenu so we can open a vertical megamenu in small screens
  size:
  - class: megamenu-xs
    desc: Extra small size
  - class: megamenu-sm
    desc: Small size
  - class: megamenu-md
    desc: Medium size
    default: true
  - class: megamenu-lg
    desc: Large size
  - class: megamenu-xl
    desc: Extra large size
---

<script>
  import Component from "$components/Component.svelte"
  import Translate from "$components/Translate.svelte"
</script>

### Structure

Megamenu is a big menu with a lot of items but it must be responsive and work on all screen sizes.
On small screens the whole megamenu must be hidden by default and it must be vertical when visible. A button opens the megamenu and `max-sm:megamenu-vertical` class name to make the megamenu vertical on small screens.  
On larger screens, we hide the button and show the megamenu as a horizontal menu, and each button inside the megamenu will open its corresponding popover.

```json:Structure
<button class="btn sm:hidden" popovertarget="my-megamenu">Menu</button> // Opens the megamenu on small screens
<div class="megamenu max-sm:megamenu-vertical" id="my-megamenu" popover>
  ├── <span class="megamenu-active"></span> // the visual indicator that moves to the active item
  │
  ├── <button popovertarget="first">1</button> // Opens the first popover. all IDs must be unique and match the popovertarget value
  ├── <div id="first" popover>
  │
  ├── <button popovertarget="second">2</button> // Opens the second popover
  ├── <div id="second" popover>
  │
  ├── <button popovertarget="third">3</button> // Opens the third popover
  ├── <div id="third" popover>
  │
  ╰── ... // max 10 popovers
```

### ~Responsive megamenu with small vertical menus
#### Each button must have a corresponding popover with the same id as the popovertarget value. HTML IDs must be unique.
<button class="btn sm:hidden" popovertarget="my-megamenu-1">Menu</button>
<div class="megamenu max-sm:megamenu-vertical w-full p-2 border border-base-300" id="my-megamenu-1" popover>
  <span class="megamenu-active"></span>

  <button popovertarget="a1">Services</button>
  <div id="a1" popover>
    <ul class="menu">
      <li><a>Enterprise</a></li>
      <li><a>CRM software</a></li>
      <li><a>Security</a></li>
      <li><a>Consulting</a></li>
    </ul>
  </div>

  <button popovertarget="a2">AI</button>
  <div id="a2" popover>
    <ul class="menu">
      <li><a>AI infrastructure</a></li>
      <li><a>Image generation</a></li>
      <li><a>MCP servers</a></li>
    </ul>
  </div>

  <button popovertarget="a3">Cloud Solutions</button>
  <div id="a3" popover>
    <ul class="menu">
      <li><a>Cloud computing</a></li>
      <li><a>Storage solutions</a></li>
      <li><a>Database services</a></li>
      <li><a>CDN performance</a></li>
    </ul>
  </div>
</div>

```html
<!-- popovertarget must match the ID of the corresponding popover, and each ID must be unique -->
<button class="$$btn sm:hidden" popovertarget="my-megamenu-1">Menu</button>

<div class="$$megamenu max-sm:$$megamenu-vertical p-2 border border-base-300" id="my-megamenu-1" popover>
  <span class="$$megamenu-active"></span>

  <button popovertarget="a1">Services</button>
  <div id="a1" popover>
    <ul class="$$menu">
      <li><a>Enterprise</a></li>
      <li><a>CRM software</a></li>
      <li><a>Security</a></li>
      <li><a>Consulting</a></li>
    </ul>
  </div>

  <button popovertarget="a2">AI</button>
  <div id="a2" popover>
    <ul class="$$menu">
      <li><a>AI infrastructure</a></li>
      <li><a>Image generation</a></li>
      <li><a>MCP servers</a></li>
    </ul>
  </div>

  <button popovertarget="a3">Cloud Solutions</button>
  <div id="a3" popover>
    <ul class="$$menu">
      <li><a>Cloud computing</a></li>
      <li><a>Storage solutions</a></li>
      <li><a>Database services</a></li>
      <li><a>CDN performance</a></li>
    </ul>
  </div>
</div>
```


### ~Megamenu with wide popovers and horizontal menus
<button class="btn sm:hidden" popovertarget="my-megamenu-2">Menu</button>
<div class="megamenu max-sm:megamenu-vertical megamenu-wide w-full p-2 border border-base-300" id="my-megamenu-2" popover>
  <span class="megamenu-active"></span>

  <button popovertarget="b1">One</button>
  <div id="b1" popover>
    <ul class="menu menu-horizontal">
      <li><a>Enterprise</a></li>
      <li><a>CRM software</a></li>
      <li><a>Security</a></li>
      <li><a>Consulting</a></li>
    </ul>
  </div>

  <button popovertarget="b2">Two</button>
  <div id="b2" popover>
    <ul class="menu menu-horizontal">
      <li><a>AI infrastructure</a></li>
      <li><a>Image generation</a></li>
      <li><a>MCP servers</a></li>
    </ul>
  </div>

  <button popovertarget="b3">Three</button>
  <div id="b3" popover>
    <ul class="menu menu-horizontal">
      <li><a>Cloud computing</a></li>
      <li><a>Storage solutions</a></li>
      <li><a>Database services</a></li>
      <li><a>CDN performance</a></li>
    </ul>
  </div>
</div>

```html
<button class="$$btn sm:hidden" popovertarget="my-megamenu-2">Menu</button>
<div class="$$megamenu max-sm:$$megamenu-vertical $$megamenu-wide p-2 border border-base-300" id="my-megamenu-2" popover>
  <span class="$$megamenu-active"></span>

  <button popovertarget="b1">One</button>
  <div id="b1" popover>
    <ul class="$$menu $$menu-horizontal">
      <li><a>Enterprise</a></li>
      <li><a>CRM software</a></li>
      <li><a>Security</a></li>
      <li><a>Consulting</a></li>
    </ul>
  </div>

  <button popovertarget="b2">Two</button>
  <div id="b2" popover>
    <ul class="$$menu $$menu-horizontal">
      <li><a>AI infrastructure</a></li>
      <li><a>Image generation</a></li>
      <li><a>MCP servers</a></li>
    </ul>
  </div>

  <button popovertarget="b3">Three</button>
  <div id="b3" popover>
    <ul class="$$menu $$menu-horizontal">
      <li><a>Cloud computing</a></li>
      <li><a>Storage solutions</a></li>
      <li><a>Database services</a></li>
      <li><a>CDN performance</a></li>
    </ul>
  </div>
</div>
```


### ~Megamenu with a menus and lots of links
<button class="btn sm:hidden" popovertarget="my-megamenu-3">Menu</button>
<div class="megamenu max-sm:megamenu-vertical megamenu-wide w-full p-2 border border-base-300 [anchor-name:--megamenu-c]" id="my-megamenu-3" popover>
  <span class="megamenu-active"></span>

  <button popovertarget="c1">One</button>
  <div id="c1" popover class="[position-anchor:--megamenu-c]">
    <div class="flex max-sm:flex-col items-start">
      <ul class="menu w-full md:menu-horizontal">
        <li>
          <a>Enterprise</a>
          <ul>
            <li><a>CRM software</a></li>
            <li><a>Marketing management</a></li>
            <li><a>Security</a></li>
            <li><a>Consulting</a></li>
          </ul>
        </li>
        <li>
          <a>Company</a>
          <ul>
            <li><a>About us</a></li>
            <li><a>Contact us</a></li>
            <li><a>Privacy policy</a></li>
            <li><a>Press kit</a></li>
          </ul>
        </li>
      </ul>
      <img src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp" class="md:max-w-sm max-md:w-auto" alt="Tailwind CSS megamenu">
    </div>
  </div>

  <button popovertarget="c2">Two</button>
  <div id="c2" popover class="[position-anchor:--megamenu-c]">
    <div class="flex max-sm:flex-col items-start">
      <ul class="menu w-full md:menu-horizontal">
        <li>
          <a>Enterprise</a>
          <ul>
            <li><a>CRM software</a></li>
            <li><a>Marketing management</a></li>
            <li><a>Security</a></li>
            <li><a>Consulting</a></li>
            <li><a>Privacy policy</a></li>
            <li><a>Press kit</a></li>
          </ul>
        </li>
        <li>
          <a>Products</a>
          <ul>
            <li><a>UI Kit</a></li>
            <li><a>WordPress themes</a></li>
            <li><a>WordPress plugins</a></li>
            <li><a>Color picker app</a></li>
            <li><a>About us</a></li>
            <li><a>Contact us</a></li>
          </ul>
        </li>
      </ul>
      <img src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp" class="md:max-w-sm max-md:w-auto" alt="Tailwind CSS megamenu component">
    </div>
  </div>

  <button popovertarget="c3">Three</button>
  <div id="c3" popover class="[position-anchor:--megamenu-c]">
    <div class="flex max-sm:flex-col items-start">
      <ul class="menu w-full md:menu-horizontal">
        <li>
          <ul>
            <li class="menu-title">Solutions</li>
            <li><a>Design</a></li>
            <li><a>Development</a></li>
            <li><a>Hosting</a></li>
            <li><a>Domain register</a></li>
          </ul>
        </li>
        <li>
          <ul>
            <li class="menu-title">Products</li>
            <li><a>UI Kit</a></li>
            <li><a>Cloud Platform</a></li>
            <li><a>Open source</a></li>
            <li>
              <ul>
                <li><a>Auth management system</a></li>
                <li><a>VScode theme</a></li>
                <li><a>Color picker app</a></li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <ul>
            <li class="menu-title">Enterprise</li>
            <li><a>CRM software</a></li>
            <li><a>Marketing management</a></li>
            <li><a>Security</a></li>
            <li><a>Consulting</a></li>
          </ul>
        </li>
        <li>
          <ul>
            <li class="menu-title">Company</li>
            <li><a>About us</a></li>
            <li><a>Contact us</a></li>
            <li><a>Privacy policy</a></li>
            <li><a>Press kit</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</div>

```html
<button class="$$btn sm:hidden" popovertarget="my-megamenu-3">Menu</button>
<div class="$$megamenu max-sm:$$megamenu-vertical $$megamenu-wide p-2 border border-base-300" id="my-megamenu-3" popover>
  <span class="$$megamenu-active"></span>

  <button popovertarget="c1">One</button>
  <div id="c1" popover>
    <div class="flex max-sm:flex-col items-start">
      <ul class="$$menu w-full md:$$menu-horizontal">
        <li>
          <a>Enterprise</a>
          <ul>
            <li><a>CRM software</a></li>
            <li><a>Marketing management</a></li>
            <li><a>Security</a></li>
            <li><a>Consulting</a></li>
          </ul>
        </li>
        <li>
          <a>Company</a>
          <ul>
            <li><a>About us</a></li>
            <li><a>Contact us</a></li>
            <li><a>Privacy policy</a></li>
            <li><a>Press kit</a></li>
          </ul>
        </li>
      </ul>
      <img src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp" class="md:max-w-sm max-md:w-auto" alt="Tailwind CSS megamenu">
    </div>
  </div>

  <button popovertarget="c2">Two</button>
  <div id="c2" popover>
    <div class="flex max-sm:flex-col items-start">
      <ul class="$$menu w-full md:$$menu-horizontal">
        <li>
          <a>Enterprise</a>
          <ul>
            <li><a>CRM software</a></li>
            <li><a>Marketing management</a></li>
            <li><a>Security</a></li>
            <li><a>Consulting</a></li>
            <li><a>Privacy policy</a></li>
            <li><a>Press kit</a></li>
          </ul>
        </li>
        <li>
          <a>Products</a>
          <ul>
            <li><a>UI Kit</a></li>
            <li><a>WordPress themes</a></li>
            <li><a>WordPress plugins</a></li>
            <li><a>Color picker app</a></li>
            <li><a>About us</a></li>
            <li><a>Contact us</a></li>
          </ul>
        </li>
      </ul>
      <img src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp" class="md:max-w-sm max-md:w-auto" alt="Tailwind CSS megamenu component">
    </div>
  </div>

  <button popovertarget="c3">Three</button>
  <div id="c3" popover>
    <div class="flex max-sm:flex-col items-start">
      <ul class="$$menu w-full md:$$menu-horizontal">
        <li>
          <ul>
            <li class="$$menu-title">Solutions</li>
            <li><a>Design</a></li>
            <li><a>Development</a></li>
            <li><a>Hosting</a></li>
            <li><a>Domain register</a></li>
          </ul>
        </li>
        <li>
          <ul>
            <li class="$$menu-title">Products</li>
            <li><a>UI Kit</a></li>
            <li><a>Cloud Platform</a></li>
            <li><a>Open source</a></li>
            <li>
              <ul>
                <li><a>Auth management system</a></li>
                <li><a>VScode theme</a></li>
                <li><a>Color picker app</a></li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <ul>
            <li class="$$menu-title">Enterprise</li>
            <li><a>CRM software</a></li>
            <li><a>Marketing management</a></li>
            <li><a>Security</a></li>
            <li><a>Consulting</a></li>
          </ul>
        </li>
        <li>
          <ul>
            <li class="$$menu-title">Company</li>
            <li><a>About us</a></li>
            <li><a>Contact us</a></li>
            <li><a>Privacy policy</a></li>
            <li><a>Press kit</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</div>
```

### ~Megamenu in a navbar
<div class="navbar bg-base-100 shadow-sm">
  <div class="navbar-start">
    <a class="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div class="navbar-center">
    <div class="megamenu max-sm:megamenu-vertical megamenu-full [anchor-name:--megamenu-d]" id="my-megamenu-4" popover>
      <span class="megamenu-active"></span>
      <button popovertarget="d1">One</button>
      <div id="d1" popover class="[position-anchor:--megamenu-d]">
        <div class="flex max-sm:flex-col items-start">
          <ul class="menu w-full md:menu-horizontal">
            <li>
              <a>Enterprise</a>
              <ul>
                <li><a>CRM software</a></li>
                <li><a>Marketing management</a></li>
                <li><a>Security</a></li>
                <li><a>Consulting</a></li>
              </ul>
            </li>
            <li>
              <a>Company</a>
              <ul>
                <li><a>About us</a></li>
                <li><a>Contact us</a></li>
                <li><a>Privacy policy</a></li>
                <li><a>Press kit</a></li>
              </ul>
            </li>
          </ul>
          <img src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp" class="md:max-w-sm max-md:hidden" alt="Tailwind CSS megamenu">
        </div>
      </div>
      <button popovertarget="d2">Two</button>
      <div id="d2" popover class="[position-anchor:--megamenu-d]">
        <div class="flex max-sm:flex-col items-start">
          <ul class="menu w-full md:menu-horizontal">
            <li>
              <a>Enterprise</a>
              <ul>
                <li><a>CRM software</a></li>
                <li><a>Marketing management</a></li>
                <li><a>Security</a></li>
                <li><a>Consulting</a></li>
                <li><a>Privacy policy</a></li>
                <li><a>Press kit</a></li>
              </ul>
            </li>
            <li>
              <a>Products</a>
              <ul>
                <li><a>UI Kit</a></li>
                <li><a>WordPress themes</a></li>
                <li><a>WordPress plugins</a></li>
                <li><a>Color picker app</a></li>
                <li><a>About us</a></li>
                <li><a>Contact us</a></li>
              </ul>
            </li>
          </ul>
          <img src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp" class="md:max-w-sm max-md:hidden" alt="Tailwind CSS megamenu component">
        </div>
      </div>
      <button popovertarget="d3">Three</button>
      <div id="d3" popover class="[position-anchor:--megamenu-d]">
        <div class="flex max-sm:flex-col items-start">
          <ul class="menu w-full md:menu-horizontal">
            <li>
              <a>Solutions</a>
              <ul>
                <li><a>Design</a></li>
                <li><a>Development</a></li>
                <li><a>Hosting</a></li>
                <li><a>Domain register</a></li>
              </ul>
            </li>
            <li>
              <a>Products</a>
              <ul>
                <li><a>UI Kit</a></li>
                <li>
                  <a>Open source</a>
                  <ul>
                    <li><a>Auth management system</a></li>
                    <li><a>VScode theme</a></li>
                    <li><a>Color picker app</a></li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <a>Company</a>
              <ul>
                <li><a>About us</a></li>
                <li><a>Contact us</a></li>
                <li><a>Privacy policy</a></li>
                <li><a>Press kit</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div class="navbar-end">
    <a class="btn">Login</a>
    <button class="btn sm:hidden" popovertarget="my-megamenu-4">Menu</button>
  </div>
</div>


```html
<div class="$$navbar bg-base-100 shadow-sm">
  <div class="$$navbar-start">
    <a class="$$btn $$btn-ghost text-xl">daisyUI</a>
  </div>
  <div class="$$navbar-center">
    <div class="$$megamenu max-sm:$$megamenu-vertical $$megamenu-full" id="my-megamenu-4" popover>
      <span class="$$megamenu-active"></span>
      <button popovertarget="d1">One</button>
      <div id="d1" popover>
        <div class="flex max-sm:flex-col items-start">
          <ul class="$$menu w-full md:$$menu-horizontal">
            <li>
              <a>Enterprise</a>
              <ul>
                <li><a>CRM software</a></li>
                <li><a>Marketing management</a></li>
                <li><a>Security</a></li>
                <li><a>Consulting</a></li>
              </ul>
            </li>
            <li>
              <a>Company</a>
              <ul>
                <li><a>About us</a></li>
                <li><a>Contact us</a></li>
                <li><a>Privacy policy</a></li>
                <li><a>Press kit</a></li>
              </ul>
            </li>
          </ul>
          <img src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp" class="md:max-w-sm max-md:hidden" alt="Tailwind CSS megamenu">
        </div>
      </div>
      <button popovertarget="d2">Two</button>
      <div id="d2" popover>
        <div class="flex max-sm:flex-col items-start">
          <ul class="$$menu w-full md:$$menu-horizontal">
            <li>
              <a>Enterprise</a>
              <ul>
                <li><a>CRM software</a></li>
                <li><a>Marketing management</a></li>
                <li><a>Security</a></li>
                <li><a>Consulting</a></li>
                <li><a>Privacy policy</a></li>
                <li><a>Press kit</a></li>
              </ul>
            </li>
            <li>
              <a>Products</a>
              <ul>
                <li><a>UI Kit</a></li>
                <li><a>WordPress themes</a></li>
                <li><a>WordPress plugins</a></li>
                <li><a>Color picker app</a></li>
                <li><a>About us</a></li>
                <li><a>Contact us</a></li>
              </ul>
            </li>
          </ul>
          <img src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp" class="md:max-w-sm max-md:hidden" alt="Tailwind CSS megamenu component">
        </div>
      </div>
      <button popovertarget="d3">Three</button>
      <div id="d3" popover>
        <div class="flex max-sm:flex-col items-start">
          <ul class="$$menu w-full md:$$menu-horizontal">
            <li>
              <a>Solutions</a>
              <ul>
                <li><a>Design</a></li>
                <li><a>Development</a></li>
                <li><a>Hosting</a></li>
                <li><a>Domain register</a></li>
              </ul>
            </li>
            <li>
              <a>Products</a>
              <ul>
                <li><a>UI Kit</a></li>
                <li>
                  <a>Open source</a>
                  <ul>
                    <li><a>Auth management system</a></li>
                    <li><a>VScode theme</a></li>
                    <li><a>Color picker app</a></li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <a>Company</a>
              <ul>
                <li><a>About us</a></li>
                <li><a>Contact us</a></li>
                <li><a>Privacy policy</a></li>
                <li><a>Press kit</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div class="$$navbar-end">
    <a class="$$btn">Login</a>
    <button class="$$btn sm:hidden" popovertarget="my-megamenu-4">Menu</button>
  </div>
</div>
```


### ~megamenu without arrows
<div class="megamenu w-full p-2 border border-base-300">
  <span class="megamenu-active"></span>

  <button class="after:content-none" popovertarget="e1">One</button>
  <div id="e1" popover>
    <div class="p-4">Content for the first item</div>
  </div>

  <button class="after:content-none" popovertarget="e2">Two</button>
  <div id="e2" popover>
    <div class="p-4">Content for the second item</div>
  </div>
</div>

```html
<div class="$$megamenu p-2 border border-base-300">
  <span class="$$megamenu-active"></span>

  <button class="after:content-none" popovertarget="e1">One</button>
  <div id="e1" popover>
    <div class="p-4">Content for the first item</div>
  </div>

  <button class="after:content-none" popovertarget="e2">Two</button>
  <div id="e2" popover>
    <div class="p-4">Content for the second item</div>
  </div>
</div>
```

### ~Megamenu in different sizes
<div class="megamenu megamenu-xs w-full p-2 border border-base-300">
  <span class="megamenu-active"></span>

  <button popovertarget="f1">One</button>
  <div id="f1" popover>
    <div class="p-4">Content for the first item</div>
  </div>

  <button popovertarget="f2">Two</button>
  <div id="f2" popover>
    <div class="p-4">Content for the second item</div>
  </div>

  <button popovertarget="f3">Three</button>
  <div id="f3" popover>
    <div class="p-4">Content for the third item</div>
  </div>
</div>
<div class="megamenu megamenu-sm w-full p-2 border border-base-300">
  <span class="megamenu-active"></span>

  <button popovertarget="g1">One</button>
  <div id="g1" popover>
    <div class="p-4">Content for the first item</div>
  </div>

  <button popovertarget="g2">Two</button>
  <div id="g2" popover>
    <div class="p-4">Content for the second item</div>
  </div>

  <button popovertarget="g3">Three</button>
  <div id="g3" popover>
    <div class="p-4">Content for the third item</div>
  </div>
</div>
<div class="megamenu megamenu-md w-full p-2 border border-base-300">
  <span class="megamenu-active"></span>

  <button popovertarget="h1">One</button>
  <div id="h1" popover>
    <div class="p-4">Content for the first item</div>
  </div>

  <button popovertarget="h2">Two</button>
  <div id="h2" popover>
    <div class="p-4">Content for the second item</div>
  </div>

  <button popovertarget="h3">Three</button>
  <div id="h3" popover>
    <div class="p-4">Content for the third item</div>
  </div>
</div>
<div class="megamenu megamenu-lg w-full p-2 border border-base-300">
  <span class="megamenu-active"></span>

  <button popovertarget="i1">One</button>
  <div id="i1" popover>
    <div class="p-4">Content for the first item</div>
  </div>

  <button popovertarget="i2">Two</button>
  <div id="i2" popover>
    <div class="p-4">Content for the second item</div>
  </div>

  <button popovertarget="i3">Three</button>
  <div id="i3" popover>
    <div class="p-4">Content for the third item</div>
  </div>
</div>
<div class="megamenu megamenu-xl w-full p-2 border border-base-300">
  <span class="megamenu-active"></span>

  <button popovertarget="j1">One</button>
  <div id="j1" popover>
    <div class="p-4">Content for the first item</div>
  </div>

  <button popovertarget="j2">Two</button>
  <div id="j2" popover>
    <div class="p-4">Content for the second item</div>
  </div>

  <button popovertarget="j3">Three</button>
  <div id="j3" popover>
    <div class="p-4">Content for the third item</div>
  </div>
</div>

```html
<div class="$$megamenu $$megamenu-xs p-2 border border-base-300">
  <span class="megamenu-active"></span>

  <button popovertarget="f1">One</button>
  <div id="f1" popover>
    <div class="p-4">Content for the first item</div>
  </div>

  <button popovertarget="f2">Two</button>
  <div id="f2" popover>
    <div class="p-4">Content for the second item</div>
  </div>

  <button popovertarget="f3">Three</button>
  <div id="f3" popover>
    <div class="p-4">Content for the third item</div>
  </div>
</div>
<div class="$$megamenu $$megamenu-sm p-2 border border-base-300">
  <span class="$$megamenu-active"></span>

  <button popovertarget="g1">One</button>
  <div id="g1" popover>
    <div class="p-4">Content for the first item</div>
  </div>

  <button popovertarget="g2">Two</button>
  <div id="g2" popover>
    <div class="p-4">Content for the second item</div>
  </div>

  <button popovertarget="g3">Three</button>
  <div id="g3" popover>
    <div class="p-4">Content for the third item</div>
  </div>
</div>
<div class="$$megamenu $$megamenu-md p-2 border border-base-300">
  <span class="megamenu-active"></span>

  <button popovertarget="h1">One</button>
  <div id="h1" popover>
    <div class="p-4">Content for the first item</div>
  </div>

  <button popovertarget="h2">Two</button>
  <div id="h2" popover>
    <div class="p-4">Content for the second item</div>
  </div>

  <button popovertarget="h3">Three</button>
  <div id="h3" popover>
    <div class="p-4">Content for the third item</div>
  </div>
</div>
<div class="$$megamenu $$megamenu-lg p-2 border border-base-300">
  <span class="$$megamenu-active"></span>

  <button popovertarget="i1">One</button>
  <div id="i1" popover>
    <div class="p-4">Content for the first item</div>
  </div>

  <button popovertarget="i2">Two</button>
  <div id="i2" popover>
    <div class="p-4">Content for the second item</div>
  </div>

  <button popovertarget="i3">Three</button>
  <div id="i3" popover>
    <div class="p-4">Content for the third item</div>
  </div>
</div>
<div class="$$megamenu $$megamenu-xl p-2 border border-base-300">
  <span class="$$megamenu-active"></span>

  <button popovertarget="j1">One</button>
  <div id="j1" popover>
    <div class="p-4">Content for the first item</div>
  </div>

  <button popovertarget="j2">Two</button>
  <div id="j2" popover>
    <div class="p-4">Content for the second item</div>
  </div>

  <button popovertarget="j3">Three</button>
  <div id="j3" popover>
    <div class="p-4">Content for the third item</div>
  </div>
</div>
```
