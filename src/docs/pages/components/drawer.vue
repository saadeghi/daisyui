<template>
  <div>
    <ClassTable v-bind:data="{
      components : [
        { class: 'drawer', desc: 'Container element' },
        { class: 'drawer-toggle', desc: 'For checkbox element that controls the drawer' },
        { class: 'drawer-content', desc: 'The content container' },
        { class: 'drawer-side', desc: 'The sidebar container' },
        { class: 'drawer-overlay', desc: 'The label covers the content when drawer is open' },
      ],
      utilities : [
        { class: 'drawer-mobile', desc: 'Makes drawer to open/close on mobile but will be always visible on desktop' },
        { class: 'drawer-end', desc: 'puts drawer to the right' },
      ]
    }"/>

    <Wrapper title="sliding drawer menu" classes="flex flex-col space-y-2">
      <div class="rounded-lg shadow bg-base-200 drawer h-52">
        <input id="my-drawer" type="checkbox" class="drawer-toggle"/>
        <div class="flex flex-col items-center justify-center drawer-content">
          <label class="btn btn-primary drawer-button" for="my-drawer">open menu</label>
        </div>
        <div class="drawer-side">
          <label class="drawer-overlay" for="my-drawer"></label>
          <Menu class="p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
            <MenuItem>
              <a>Menu Item</a>
            </MenuItem>
            <MenuItem>
              <a>Menu Item</a>
            </MenuItem>
          </Menu>
        </div>
      </div>
    </Wrapper>

    <Wrapper title="sliding drawer for mobile only" classes="flex flex-col space-y-2">
      <div class="rounded-lg shadow bg-base-200 drawer drawer-mobile h-52">
        <input id="my-drawer-2" type="checkbox" class="drawer-toggle"/>
        <div class="flex flex-col items-center justify-center drawer-content">
          <label class="mb-4 btn btn-primary drawer-button lg:hidden" for="my-drawer-2">open menu</label>
          <div class="hidden text-xs text-center lg:block">Menu is always open on desktop size.<br>Resize the browser to see toggle button on mobile size</div>
          <div class="text-xs text-center lg:hidden">Menu can be toggled on mobile size.<br>Resize the browser to see fixed sidebar on desktop size</div>
        </div>
        <div class="drawer-side">
          <label class="drawer-overlay" for="my-drawer-2"></label>
          <Menu class="p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
            <MenuItem>
              <a>Menu Item</a>
            </MenuItem>
            <MenuItem>
              <a>Menu Item</a>
            </MenuItem>
          </Menu>
        </div>
      </div>
    </Wrapper>

    <Wrapper title="navbar menu for desktop + drawer for mobile" classes="flex flex-col space-y-2">
      <div class="rounded-lg shadow bg-base-200 drawer h-52">
        <input id="my-drawer-3" type="checkbox" class="drawer-toggle">
        <div class="flex flex-col drawer-content">
          <div class="w-full navbar bg-base-300">
            <div class="flex-none lg:hidden">
              <label for="my-drawer-3" class="btn btn-square btn-ghost">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><!----> <!----> <!----> <!----> <!----> <!----> <!----> <!----> <!----> <!----> <!---->
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path> <!----> <!----> <!----> <!----> <!----> <!----> <!----> <!----> <!----> <!----> <!----> <!----> <!----> <!---->
                </svg>
              </label>
            </div>
            <div class="flex-1 px-2 mx-2">
              <span>
                Change screen size to show/hide menu
              </span>
            </div>
            <div class="flex-none hidden lg:block">
              <ul class="menu horizontal">
                <li><a class="rounded-btn">Item 1</a></li>
                <li><a class="rounded-btn">Item 2</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="drawer-side">
          <label for="my-drawer-3" class="drawer-overlay"></label>
          <ul class="p-4 overflow-y-auto menu w-80 bg-base-100">
            <li><a>Item 1</a></li>
            <li><a>Item 2</a></li>
          </ul>
        </div>
      </div>
    </Wrapper>


    <Wrapper title="drawer-end" classes="flex flex-col space-y-2">
      <div class="rounded-lg shadow bg-base-200 drawer drawer-end h-52">
        <input id="my-drawer-4" type="checkbox" class="drawer-toggle"/>
        <div class="flex flex-col items-center justify-center drawer-content">
          <label class="btn btn-primary drawer-button" for="my-drawer-4">open menu</label>
        </div>
        <div class="drawer-side">
          <label class="drawer-overlay" for="my-drawer-4"></label>
          <Menu class="p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
            <MenuItem>
              <a>Menu Item</a>
            </MenuItem>
            <MenuItem>
              <a>Menu Item</a>
            </MenuItem>
          </Menu>
        </div>
      </div>
    </Wrapper>

  </div>
</template>


<script>
export default {
  head() {
    return {
      title: "daisyUI — Tailwind CSS drawer sidebar component",
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Tailwind CSS drawer sidebar component - Tailwind CSS drawer sidebar examples'
        }
      ]
    }
  }
}
</script>
