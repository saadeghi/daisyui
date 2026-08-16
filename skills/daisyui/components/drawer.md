### Drawer
A drawer is a grid layout that can show and hide a sidebar. The sidebar can be on either side of the page.

[Drawer documentation](https://daisyui.com/components/drawer/)

#### Class names
- component: `drawer`
- part: `drawer-toggle`, `drawer-content`, `drawer-side`, `drawer-overlay`, `drawer-button`
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
The `{CONTENT}` can contain a navbar, the site content, or a footer.
The `{SIDEBAR}` can contain a menu:
```html
<ul class="menu p-4 w-80 min-h-full bg-base-100 text-base-content">
  <li><a>Item 1</a></li>
  <li><a>Item 2</a></li>
</ul>
```
To open and close the drawer, use a label whose `for` attribute matches the `drawer-toggle` input ID:
```html
<label for="my-drawer" class="btn drawer-button">Open/close drawer</label>
```
Example: This sidebar is always visible on large screens. The user can toggle it on small screens:
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

Example: This sidebar is always visible. In the closed state, it shows only icons. In the open state, it shows icons and text:
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
            {ICON_HERE}
            <span class="is-drawer-close:hidden">Homepage</span>
          </button>
        </li>
        <!-- list item -->
        <li>
          <button class="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Settings">
            {ICON_HERE}
            <span class="is-drawer-close:hidden">Settings</span>
          </button>
        </li>
      </ul>
      <!-- button to open/close drawer -->
      <div class="m-2 is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Open">
        <label for="my-drawer-4" class="btn btn-ghost btn-circle drawer-button is-drawer-open:rotate-y-180">
          {ICON_HERE}
        </label>
      </div>
    </div>
  </div>
</div>
```

#### Rules
- `{MODIFIER}` is optional. It can include one modifier class name and one placement class name.
- You must add an `id` to the `drawer-toggle` input. Change `my-drawer` to a unique HTML ID.
- To make the sidebar visible on larger screens, use `lg:drawer-open`.
- The `drawer-toggle` is a hidden checkbox. Use a label with a `for` attribute to change the checkbox state.
- To open the drawer with a button, use `<label for="my-drawer" class="btn drawer-button">Open drawer</label>`. The `my-drawer` value is the ID of the `drawer-toggle` input.
- When you use a drawer, put all page content in the `drawer-content` element. Put the navbar and footer inside the `drawer`.
