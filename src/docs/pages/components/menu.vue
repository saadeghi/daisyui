<template>
  <div>
    <ClassTable v-bind:data="{
      components : [
        { class: 'menu', desc: 'Container <ul> element' },
        { class: 'menu-title', desc: 'Identify <li> as the title of menu' },
      ],
      utilities : [
        { class: 'compact', desc: 'Makes menu more compact' },
      ]
    }"/>
    <Wrapper title="veritcal with icons" classes="flex flex-col space-y-2">
      <div class="py-4 artboard artboard-demo bg-base-200">
        <Menu class="py-3 shadow-lg bg-base-100 rounded-box">
          <MenuItem class="menu-title">
            <span>
              Menu Title
            </span>
          </MenuItem>
          <MenuItem>
            <a>
              Item without icon
            </a>
          </MenuItem>
          <MenuItem>
            <a>
              <Icon glyph="eye" class="inline-block w-5 h-5 mr-2 stroke-current" />
              Item with icon
            </a>
          </MenuItem>
          <MenuItem>
            <a>
              <Icon glyph="folder" class="inline-block w-5 h-5 mr-2 stroke-current" />
              Item with icon
              <Badge class="ml-2 success">3</Badge>
            </a>
          </MenuItem>
        </Menu>
      </div>
    </Wrapper>
    <Wrapper title="veritcal with icons and padding" classes="flex flex-col space-y-2">
      <div class="py-4 artboard artboard-demo bg-base-200">
        <Menu class="p-4 shadow-lg bg-base-100 rounded-box">
          <MenuItem class="menu-title">
            <span>
              Menu Title
            </span>
          </MenuItem>
          <MenuItem>
            <a>
              <Icon glyph="eye" class="inline-block w-5 h-5 mr-2 stroke-current" />
              Item with icon
            </a>
          </MenuItem>
          <MenuItem>
            <a>
              <Icon glyph="code" class="inline-block w-5 h-5 mr-2 stroke-current" />
              Item with icon
            </a>
          </MenuItem>
          <MenuItem>
            <a>
              <Icon glyph="folder" class="inline-block w-5 h-5 mr-2 stroke-current" />
              Item with icon
            </a>
          </MenuItem>
        </Menu>
      </div>
    </Wrapper>
    <Wrapper title="bordered, hover-bordered, disabled" classes="flex flex-col space-y-2">
      <div class="py-4 artboard artboard-demo bg-base-200">
        <Menu class="py-4 shadow-lg bg-base-100 rounded-box">
          <MenuItem class="menu-title">
            <span>
              Menu Title
            </span>
          </MenuItem>
          <MenuItem class="bordered disabled">
            <a>
              <Icon glyph="folder" class="inline-block w-5 h-5 mr-2 stroke-current" />
              Item is disabled
            </a>
          </MenuItem>
          <MenuItem class="bordered">
            <a>
              <Icon glyph="folder" class="inline-block w-5 h-5 mr-2 stroke-current" />
              It has border
            </a>
          </MenuItem>
          <MenuItem class="hover-bordered">
            <a>
              <Icon glyph="folder" class="inline-block w-5 h-5 mr-2 stroke-current" />
              It shows border on hover
            </a>
          </MenuItem>
        </Menu>
      </div>
    </Wrapper>
    <Wrapper title="horizontal" classes="flex flex-col space-y-2">
      <div class="py-4 artboard artboard-demo bg-base-200">
        <Menu class="items-stretch px-3 shadow-lg bg-base-100 horizontal rounded-box">
          <MenuItem>
            <a>
              With link
            </a>
          </MenuItem>
          <MenuItem class="bordered">
            <a>
              Bordered
            </a>
          </MenuItem>
          <MenuItem>
            <span>
              With a span
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
      </div>
    </Wrapper>

    <Wrapper title="veritcal with icon" classes="flex flex-col space-y-2">
      <div class="py-4 artboard artboard-demo bg-base-200">
        <Menu class="w-16 py-3 shadow-lg bg-base-100 rounded-box">
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
      </div>
    </Wrapper>


    <Wrapper title="horizontal with icon" classes="flex flex-col space-y-2">
      <div class="py-4 artboard artboard-demo bg-base-200">
        <Menu class="px-3 shadow-lg bg-base-100 rounded-box horizontal">
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
      </div>
    </Wrapper>

    <Wrapper title="veritcal with submenu" classes="flex flex-col space-y-2">
      <div class="py-4 artboard artboard-demo bg-base-200">
        <Menu class="p-4 shadow-lg bg-base-100 rounded-box">
          <MenuItem>
            <a>
              <Icon glyph="folder" class="inline-block w-5 h-5 mr-2 stroke-current" />
              Level 1
            </a>
          </MenuItem>
          <MenuItem>
            <a>
              <Icon glyph="folder" class="inline-block w-5 h-5 mr-2 stroke-current" />
              Level 1
            </a>
            <Menu>
              <MenuItem>
                <a>
                  <Icon glyph="folder" class="inline-block w-5 h-5 mr-2 stroke-current" />
                  Level 2
                </a>
              </MenuItem>
              <MenuItem>
                <a>
                  <Icon glyph="folder" class="inline-block w-5 h-5 mr-2 stroke-current" />
                  Level 2
                </a>
                <Menu>
                  <MenuItem>
                    <a>
                      <Icon glyph="folder" class="inline-block w-5 h-5 mr-2 stroke-current" />
                      Level 3
                    </a>
                  </MenuItem>
                </Menu>
              </MenuItem>
              <MenuItem>
                <a>
                  <Icon glyph="folder" class="inline-block w-5 h-5 mr-2 stroke-current" />
                  Level 2
                </a>
              </MenuItem>
            </Menu>
          </MenuItem>
        </Menu>
      </div>
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
          hid: 'description',
          name: 'description',
          content: 'Tailwind CSS menu list component - Tailwind CSS menu list examples'
        }
      ]
    }
  }
}
</script>
