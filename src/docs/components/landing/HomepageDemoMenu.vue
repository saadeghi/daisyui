<template>
  <div class="grid gap-4">
    <div class="shadow-xl rounded-box bg-base-100 text-base-content">

      <Menu class="py-3 overflow-visible">

          <MenuItem class="menu-title">
          <span>
            Menu Title
          </span>
          </MenuItem>

        <PromoDropdown title="menu" desc="Use it for sidebar or any other list of items" classes="w-full dropdown-end" link="components/menu">
          <MenuItem>
          <a tabindex="0">
            <Icon glyph="color-swatch" class="inline-block w-5 h-5 mr-2 stroke-current" />
            Menu Item 1
          </a>
          </MenuItem>
        </PromoDropdown>
        <PromoDropdown title="menu" desc="Use it for sidebar or any other list of items" classes="w-full dropdown-end dropdown-top" link="components/menu">
          <MenuItem>
          <a tabindex="0">
            <Icon glyph="lightning-bolt" class="inline-block w-5 h-5 mr-2 stroke-current" />
            Menu Item 2
          </a>
          </MenuItem>
        </PromoDropdown>
        <PromoDropdown title="menu" desc="Use it for sidebar or any other list of items" classes="w-full dropdown-end dropdown-top" link="components/menu">
          <MenuItem>
          <a tabindex="0">
            <Icon glyph="folder" class="inline-block w-5 h-5 mr-2 stroke-current" />
            Menu Item 3
            <Badge class="ml-2 success">new</Badge>
          </a>
          </MenuItem>
        </PromoDropdown>
      </Menu>

    </div>
  </div>
</template>
