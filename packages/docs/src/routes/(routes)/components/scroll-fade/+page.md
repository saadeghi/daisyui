---
title: Scroll fade
desc: Scroll fade adds a shade at the edge of a scrollable container when there is more content in that direction.
source: https://raw.githubusercontent.com/saadeghi/daisyui/refs/heads/master/packages/daisyui/src/components/scrollfade.css
layout: components
classnames:
  component:
    - class: scroll-fade
      desc: Container of the scrollable area
  part:
    - class: scroll-fade-body
      desc: The scrollable area inside it
  direction:
    - class: scroll-fade-x
      desc: Fades the inline edges instead of the block edges
---

<script>
  import Component from "$components/Component.svelte"
  import Translate from "$components/Translate.svelte"
</script>

### ~Scroll fade

#### The shade appears only while there is more content in that direction. Padding on `.scroll-fade-body` shows as a gap around the shade, so pad the content inside it instead.

<div class="scroll-fade h-52 rounded-box border border-base-300">
  <div class="scroll-fade-body">
    <ul class="menu">
      <li><a>Dashboard</a></li>
      <li><a>Projects</a></li>
      <li><a>Deployments</a></li>
      <li><a>Analytics</a></li>
      <li><a>Logs</a></li>
      <li><a>Alerts</a></li>
      <li><a>Integrations</a></li>
      <li><a>Members</a></li>
      <li><a>Billing</a></li>
      <li><a>Settings</a></li>
    </ul>
  </div>
</div>

```html
<div class="$$scroll-fade rounded-box border-base-300 h-52 border">
  <div class="$$scroll-fade-body">
    <ul class="$$menu">
      <li><a>Dashboard</a></li>
      <li><a>Projects</a></li>
      <li><a>Deployments</a></li>
      <li><a>Analytics</a></li>
      <li><a>Logs</a></li>
      <li><a>Alerts</a></li>
      <li><a>Integrations</a></li>
      <li><a>Members</a></li>
      <li><a>Billing</a></li>
      <li><a>Settings</a></li>
    </ul>
  </div>
</div>
```

### ~Horizontal

#### `scroll-fade-x` fades the inline edges, which follow the writing direction

<div class="scroll-fade scroll-fade-x w-md rounded-box border border-base-300">
  <div class="scroll-fade-body">
    <div class="flex w-max gap-3 p-3">
      <div class="card card-border bg-base-100 w-36 shrink-0">
        <div class="card-body p-4">
          <h2 class="card-title text-base">One</h2>
          <p class="text-xs opacity-60">Card</p>
        </div>
      </div>
      <div class="card card-border bg-base-100 w-36 shrink-0">
        <div class="card-body p-4">
          <h2 class="card-title text-base">Two</h2>
          <p class="text-xs opacity-60">Card</p>
        </div>
      </div>
      <div class="card card-border bg-base-100 w-36 shrink-0">
        <div class="card-body p-4">
          <h2 class="card-title text-base">Three</h2>
          <p class="text-xs opacity-60">Card</p>
        </div>
      </div>
      <div class="card card-border bg-base-100 w-36 shrink-0">
        <div class="card-body p-4">
          <h2 class="card-title text-base">Four</h2>
          <p class="text-xs opacity-60">Card</p>
        </div>
      </div>
      <div class="card card-border bg-base-100 w-36 shrink-0">
        <div class="card-body p-4">
          <h2 class="card-title text-base">Five</h2>
          <p class="text-xs opacity-60">Card</p>
        </div>
      </div>
      <div class="card card-border bg-base-100 w-36 shrink-0">
        <div class="card-body p-4">
          <h2 class="card-title text-base">Six</h2>
          <p class="text-xs opacity-60">Card</p>
        </div>
      </div>
      <div class="card card-border bg-base-100 w-36 shrink-0">
        <div class="card-body p-4">
          <h2 class="card-title text-base">Seven</h2>
          <p class="text-xs opacity-60">Card</p>
        </div>
      </div>
      <div class="card card-border bg-base-100 w-36 shrink-0">
        <div class="card-body p-4">
          <h2 class="card-title text-base">Eight</h2>
          <p class="text-xs opacity-60">Card</p>
        </div>
      </div>
    </div>
  </div>
</div>

```html
<div class="$$scroll-fade $$scroll-fade-x rounded-box border-base-300 w-md border">
  <div class="$$scroll-fade-body">
    <div class="$$flex w-max gap-3 p-3">
      <div class="$$card $$card-border bg-base-100 w-36 shrink-0">
        <div class="$$card-body p-4">
          <h2 class="$$card-title text-base">One</h2>
          <p class="text-xs opacity-60">Card</p>
        </div>
      </div>
      ...
    </div>
  </div>
</div>
```

### ~With a table

#### A `max-height` on the container bounds the scroller

<div class="scroll-fade max-h-64 rounded-box border border-base-300">
  <div class="scroll-fade-body">
    <table class="table">
      <thead>
        <tr><th>Name</th><th>Job</th><th>Favorite color</th></tr>
      </thead>
      <tbody>
        <tr><td>Cy Ganderton</td><td>Quality Control Specialist</td><td>Blue</td></tr>
        <tr><td>Hart Hagerty</td><td>Desktop Support Technician</td><td>Purple</td></tr>
        <tr><td>Brice Swyre</td><td>Tax Accountant</td><td>Red</td></tr>
        <tr><td>Marjy Ferencz</td><td>Office Assistant I</td><td>Crimson</td></tr>
        <tr><td>Yancy Tear</td><td>Community Outreach Specialist</td><td>Indigo</td></tr>
        <tr><td>Irma Vasilik</td><td>Editor</td><td>Pink</td></tr>
        <tr><td>Winnifred Frayling</td><td>Internal Auditor</td><td>Orange</td></tr>
        <tr><td>Jackson Beatty</td><td>Research Assistant</td><td>Teal</td></tr>
        <tr><td>Annabell Hargreaves</td><td>Paralegal</td><td>Amber</td></tr>
        <tr><td>Milo Danforth</td><td>Surveyor</td><td>Slate</td></tr>
      </tbody>
    </table>
  </div>
</div>

```html
<div class="$$scroll-fade rounded-box border-base-300 max-h-64 border">
  <div class="$$scroll-fade-body">
    <table class="$$table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Job</th>
          <th>Favorite color</th>
        </tr>
      </thead>
      <tbody>
        ...
      </tbody>
    </table>
  </div>
</div>
```

### ~Sticky header

#### `--scroll-fade-offset` keeps the shade solid until the pinned header ends

<div class="scroll-fade max-h-72 rounded-box border border-base-300 [--scroll-fade-offset:3rem]">
  <div class="scroll-fade-body">
    <table class="table table-pin-rows">
      <thead>
        <tr><th>Name</th><th>Job</th><th>Favorite color</th></tr>
      </thead>
      <tbody>
        <tr><td>Cy Ganderton</td><td>Quality Control Specialist</td><td>Blue</td></tr>
        <tr><td>Hart Hagerty</td><td>Desktop Support Technician</td><td>Purple</td></tr>
        <tr><td>Brice Swyre</td><td>Tax Accountant</td><td>Red</td></tr>
        <tr><td>Marjy Ferencz</td><td>Office Assistant I</td><td>Crimson</td></tr>
        <tr><td>Yancy Tear</td><td>Community Outreach Specialist</td><td>Indigo</td></tr>
        <tr><td>Irma Vasilik</td><td>Editor</td><td>Pink</td></tr>
        <tr><td>Winnifred Frayling</td><td>Internal Auditor</td><td>Orange</td></tr>
        <tr><td>Jackson Beatty</td><td>Research Assistant</td><td>Teal</td></tr>
        <tr><td>Annabell Hargreaves</td><td>Paralegal</td><td>Amber</td></tr>
        <tr><td>Milo Danforth</td><td>Surveyor</td><td>Slate</td></tr>
        <tr><td>Terrill Hacking</td><td>Financial Advisor</td><td>Cyan</td></tr>
        <tr><td>Alastair Brion</td><td>Data Analyst</td><td>Lime</td></tr>
      </tbody>
    </table>
  </div>
</div>

```html
<div class="$$scroll-fade rounded-box border-base-300 max-h-72 border [--scroll-fade-offset:3rem]">
  <div class="$$scroll-fade-body">
    <table class="$$table $$table-pin-rows">
      <thead>
        <tr>
          <th>Name</th>
          <th>Job</th>
          <th>Favorite color</th>
        </tr>
      </thead>
      <tbody>
        ...
      </tbody>
    </table>
  </div>
</div>
```

### ~Fade size

#### Set `--scroll-fade-size` to change the shade size

<div class="flex flex-wrap gap-6">
  <div class="scroll-fade h-40 w-56 rounded-box border border-base-300 [--scroll-fade-size:0.75rem]">
    <div class="scroll-fade-body">
      <ul class="menu">
        <li><a>Dashboard</a></li>
        <li><a>Projects</a></li>
        <li><a>Deployments</a></li>
        <li><a>Analytics</a></li>
        <li><a>Logs</a></li>
        <li><a>Alerts</a></li>
        <li><a>Integrations</a></li>
      </ul>
    </div>
  </div>
  <div class="scroll-fade h-40 w-56 rounded-box border border-base-300 [--scroll-fade-size:3rem]">
    <div class="scroll-fade-body">
      <ul class="menu">
        <li><a>Dashboard</a></li>
        <li><a>Projects</a></li>
        <li><a>Deployments</a></li>
        <li><a>Analytics</a></li>
        <li><a>Logs</a></li>
        <li><a>Alerts</a></li>
        <li><a>Integrations</a></li>
      </ul>
    </div>
  </div>
</div>

```html
<div
  class="$$scroll-fade rounded-box border-base-300 h-40 w-56 border [--scroll-fade-size:0.75rem]"
>
  <div class="$$scroll-fade-body">...</div>
</div>

<div class="$$scroll-fade rounded-box border-base-300 h-40 w-56 border [--scroll-fade-size:3rem]">
  <div class="$$scroll-fade-body">...</div>
</div>
```

### ~Shade color

#### Set `--scroll-fade-color` to match the surface behind the shade

<div class="scroll-fade h-40 w-56 rounded-box border border-base-300 bg-base-200 [--scroll-fade-color:var(--color-base-200)]">
  <div class="scroll-fade-body">
    <ul class="menu">
      <li><a>Dashboard</a></li>
      <li><a>Projects</a></li>
      <li><a>Deployments</a></li>
      <li><a>Analytics</a></li>
      <li><a>Logs</a></li>
      <li><a>Alerts</a></li>
      <li><a>Integrations</a></li>
    </ul>
  </div>
</div>

```html
<div
  class="$$scroll-fade rounded-box border-base-300 bg-base-200 h-40 w-56 border [--scroll-fade-color:var(--color-base-200)]"
>
  <div class="$$scroll-fade-body">...</div>
</div>
```
