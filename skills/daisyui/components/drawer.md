### drawer
Drawer is a grid layout that can show/hide a sidebar on the left or right side of the page

[drawer docs](https://daisyui.com/components/drawer/)

#### Class names
- component: `drawer`
- part: `drawer-toggle`, `drawer-content`, `drawer-side`, `drawer-overlay`
- placement: `drawer-end`
- modifier: `drawer-open`
- variant: `is-drawer-open:`, `is-drawer-close:`

#### Syntax
```html
<div class="drawer {MODIFIER}">
  <input id="my-drawer" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content">{CONTENT}</div>
  <div class="drawer-side">{SIDEBAR}</div>
</div>
```
where {CONTENT} can be navbar, site content, footer, etc
and {SIDEBAR} can be a menu like:
```html
<ul class="menu p-4 w-80 min-h-full bg-base-100 text-base-content">
  <li><a>Item 1</a></li>
  <li><a>Item 2</a></li>
</ul>
```
To open/close the drawer, use a label that points to the `drawer-toggle` input:
```html
<label for="my-drawer" class="btn drawer-button">Open/close drawer</label>
```
Example: This sidebar is always visible on large screen, can be toggled on small screen:
```html
<div class="drawer lg:drawer-open">
  <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content flex flex-col items-center justify-center">
    <!-- Page content here -->
    <label for="my-drawer-3" class="btn drawer-button lg:hidden">
      Open drawer
    </label>
  </div>
  <div class="drawer-side">
    <label for="my-drawer-3" aria-label="close sidebar" class="drawer-overlay"></label>
    <ul class="menu bg-base-200 min-h-full w-80 p-4">
      <!-- Sidebar content here -->
      <li><button>Sidebar Item 1</button></li>
      <li><button>Sidebar Item 2</button></li>
    </ul>
  </div>
</div>
```

Example: This sidebar is always visible. When it's close we only see iocns, when it's open we see icons and text
```html
<div class="drawer lg:drawer-open">
  <input id="my-drawer-4" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content">
    <!-- Page content here -->
  </div>
  <div class="drawer-side is-drawer-close:overflow-visible">
    <label for="my-drawer-4" aria-label="close sidebar" class="drawer-overlay"></label>
    <div class="is-drawer-close:w-14 is-drawer-open:w-64 bg-base-200 flex flex-col items-start min-h-full">
      <!-- Sidebar content here -->
      <ul class="menu w-full grow">
        <!-- list item -->
        <li>
          <button class="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Homepage">
            🏠
            <span class="is-drawer-close:hidden">Homepage</span>
          </button>
        </li>
        <!-- list item -->
        <li>
          <button class="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Settings">
            ⚙️
            <span class="is-drawer-close:hidden">Settings</span>
          </button>
        </li>
      </ul>
      <!-- button to open/close drawer -->
      <div class="m-2 is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Open">
        <label for="my-drawer-4" class="btn btn-ghost btn-circle drawer-button is-drawer-open:rotate-y-180">
          ↔️
        </label>
      </div>
    </div>
  </div>
</div>
```

#### Rules
- {MODIFIER} is optional and can have one of the modifier/placement class names
- `id` is required for the `drawer-toggle` input. change `my-drawer` to a unique id according to your needs
- `lg:drawer-open` can be used to make sidebar visible on larger screens
- `drawer-toggle` is a hidden checkbox. Use label with "for" attribute to toggle state
- if you want to open the drawer when a button is clicked, use `<label for="my-drawer" class="btn drawer-button">Open drawer</label>` where `my-drawer` is the id of the `drawer-toggle` input
- when using drawer, every page content must be inside `drawer-content` element. for example navbar, footer, etc should not be outside of `drawer`
