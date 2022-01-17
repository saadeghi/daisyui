<template>
  <div>
    <ClassTable
      v-bind:data="{
        components: [
          { class: 'menu', desc: 'Container <ul> element' },
          { class: 'menu-title', desc: 'Identify <li> as the title of menu' }
        ],
        responsive: [
          { class: 'menu-normal', desc: 'Normal text size and normal spacing (default)' },
          { class: 'menu-compact', desc: 'Smaller text size and compact spacing' },
          { class: 'menu-vertical', desc: 'Vertical menu (default)' },
          { class: 'menu-horizontal', desc: 'Horisontal menu' }
        ]
      }"
    />
    <Wrapper title="veritcal with icon and badge" classes="flex flex-col space-y-2">
      <Menu class="w-64 border bg-base-100 rounded-box">
        <MenuItem>
          <a>
            Item without icon
          </a>
        </MenuItem>
        <MenuItem>
          <a>
            <Icon
              glyph="eye"
              class="inline-block w-5 h-5 mr-2 stroke-current"
            />
            Item with icon
          </a>
        </MenuItem>
        <MenuItem>
          <a>
            <Icon
              glyph="folder"
              class="inline-block w-5 h-5 mr-2 stroke-current"
            />
            Item with icon
            <Badge class="ml-2 success">3</Badge>
          </a>
        </MenuItem>
      </Menu>
    </Wrapper>
    <Wrapper
      title="with menu-title and padding"
      classes="flex flex-col space-y-2"
    >
      <Menu class="w-64 p-3 border bg-base-100 rounded-box">
        <MenuItem class="menu-title">
          <span>
            Menu Title
          </span>
        </MenuItem>
        <MenuItem>
          <a>
            <Icon
              glyph="eye"
              class="inline-block w-5 h-5 mr-2 stroke-current"
            />
            Item with icon
          </a>
        </MenuItem>
        <MenuItem>
          <a>
            <Icon
              glyph="code"
              class="inline-block w-5 h-5 mr-2 stroke-current"
            />
            Item with icon
          </a>
        </MenuItem>
        <MenuItem>
          <a>
            <Icon
              glyph="folder"
              class="inline-block w-5 h-5 mr-2 stroke-current"
            />
            Item with icon
          </a>
        </MenuItem>
      </Menu>
    </Wrapper>
    <Wrapper
      title="bordered, hover-bordered, disabled"
      classes="flex flex-col space-y-2"
    >
      <Menu class="w-64 py-3 border bg-base-100 rounded-box">
        <MenuItem class="menu-title">
          <span>
            Menu Title
          </span>
        </MenuItem>
        <MenuItem class="bordered disabled">
          <a>
            <Icon
              glyph="folder"
              class="inline-block w-5 h-5 mr-2 stroke-current"
            />
            Item is disabled
          </a>
        </MenuItem>
        <MenuItem class="bordered">
          <a>
            <Icon
              glyph="folder"
              class="inline-block w-5 h-5 mr-2 stroke-current"
            />
            It has border
          </a>
        </MenuItem>
        <MenuItem class="hover-bordered">
          <a>
            <Icon
              glyph="folder"
              class="inline-block w-5 h-5 mr-2 stroke-current"
            />
            It shows border on hover
          </a>
        </MenuItem>
      </Menu>
    </Wrapper>
    <Wrapper title="menu-horizontal" classes="flex flex-col space-y-2">
      <Menu
        class="px-3 border bg-base-100 menu-horizontal rounded-box"
      >
        <MenuItem class="bordered">
          <a>
            Bordered link
          </a>
        </MenuItem>
        <MenuItem>
          <span>
            Span
          </span>
        </MenuItem>
        <MenuItem>
          <a>
            <Icon
              glyph="eye"
              class="inline-block w-6 h-6 mr-2 stroke-current"
            />
            With icon
          </a>
        </MenuItem>
      </Menu>
    </Wrapper>

    <Wrapper
      title="responsive (menu-vertical lg:menu-horizontal)"
      classes="flex flex-col space-y-2"
    >
      <Menu
        class="p-3 border bg-base-100 menu-vertical lg:menu-horizontal rounded-box"
      >
        <MenuItem>
          <a>
            Menu Item
          </a>
        </MenuItem>
        <MenuItem>
          <a>
            Menu Item
          </a>
        </MenuItem>
        <MenuItem>
          <a>
            Menu Item
          </a>
        </MenuItem>
      </Menu>
    </Wrapper>

    <Wrapper
      title="responsive (menu-compact lg:menu-normal)"
      classes="flex flex-col space-y-2"
    >
      <Menu
        class="w-64 border bg-base-100 menu-compact lg:menu-normal rounded-box"
      >
        <MenuItem>
          <a>
            Menu Item
          </a>
        </MenuItem>
        <MenuItem>
          <a>
            Menu Item
          </a>
        </MenuItem>
        <MenuItem>
          <a>
            Menu Item
          </a>
        </MenuItem>
      </Menu>
    </Wrapper>

    <Wrapper title="veritcal with icon" classes="flex flex-col space-y-2">
      <Menu class="w-16 py-3 border bg-base-100 rounded-box">
        <MenuItem>
          <a>
            <Icon glyph="bell" class="inline-block w-6 h-6 stroke-current" />
          </a>
        </MenuItem>
        <MenuItem>
          <a>
            <Icon glyph="code" class="inline-block w-6 h-6 stroke-current" />
          </a>
        </MenuItem>
        <MenuItem>
          <a>
            <Icon glyph="eye" class="inline-block w-6 h-6 stroke-current" />
          </a>
        </MenuItem>
      </Menu>
    </Wrapper>

    <Wrapper
      title="menu-horizontal with icon"
      classes="flex flex-col space-y-2"
    >
      <Menu class="px-3 border bg-base-100 rounded-box menu-horizontal">
        <MenuItem>
          <a>
            <Icon glyph="bell" class="inline-block w-6 h-6 stroke-current" />
          </a>
        </MenuItem>
        <MenuItem>
          <a>
            <Icon glyph="code" class="inline-block w-6 h-6 stroke-current" />
          </a>
        </MenuItem>
        <MenuItem>
          <a>
            <Icon glyph="eye" class="inline-block w-6 h-6 stroke-current" />
          </a>
        </MenuItem>
      </Menu>
    </Wrapper>

    <Wrapper title="veritcal with submenu" classes="flex flex-col space-y-2">
      <Menu class="w-64 p-3 border bg-base-100 rounded-box">
        <MenuItem>
          <a>
            <Icon
              glyph="folder"
              class="inline-block w-5 h-5 mr-2 stroke-current"
            />
            Level 1
          </a>
        </MenuItem>
        <MenuItem>
          <a>
            <Icon
              glyph="folder"
              class="inline-block w-5 h-5 mr-2 stroke-current"
            />
            Level 1
          </a>
          <Menu>
            <MenuItem>
              <a>
                <Icon
                  glyph="folder"
                  class="inline-block w-5 h-5 mr-2 stroke-current"
                />
                Level 2
              </a>
            </MenuItem>
            <MenuItem>
              <a>
                <Icon
                  glyph="folder"
                  class="inline-block w-5 h-5 mr-2 stroke-current"
                />
                Level 2
              </a>
              <Menu>
                <MenuItem>
                  <a>
                    <Icon
                      glyph="folder"
                      class="inline-block w-5 h-5 mr-2 stroke-current"
                    />
                    Level 3
                  </a>
                </MenuItem>
              </Menu>
            </MenuItem>
            <MenuItem>
              <a>
                <Icon
                  glyph="folder"
                  class="inline-block w-5 h-5 mr-2 stroke-current"
                />
                Level 2
              </a>
            </MenuItem>
          </Menu>
        </MenuItem>
      </Menu>
    </Wrapper>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "daisyUI — Tailwind CSS menu component",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Tailwind CSS menu list component - Tailwind CSS menu list examples"
        }
      ]
    };
  }
};
</script>
