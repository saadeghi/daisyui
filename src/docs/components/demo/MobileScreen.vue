<template>
  <div class="mockup-phone">
    <div class="camera"></div>
    <div class="display">
      <div
        class="relative flex flex-col overflow-hidden shadow rounded-box artboard phone-2"
      >
        <div class="flex-grow h-full drawer">
          <input id="mobile-drawer" type="checkbox" class="drawer-toggle" />
          <div
            class="flex flex-col items-center flex-grow h-full text-center drawer-content"
          >
            <Navbar
              class="flex-none w-full pt-6 bg-neutral text-neutral-content"
            >
              <div class="flex-none">
                <label
                  for="mobile-drawer"
                  class="btn btn-circle btn-ghost drawer-button"
                >
                  <Icon
                    glyph="menu"
                    class="inline-block w-6 h-6 stroke-current"
                  />
                </label>
              </div>
              <div class="flex-1 px-2 mx-2">
                <span class="text-lg font-bold"> </span>
              </div>
              <div class="flex-none">
                <Button classes="btn-circle btn-ghost">
                  <Icon
                    glyph="search"
                    class="inline-block w-6 h-6 stroke-current"
                  />
                </Button>
              </div>
            </Navbar>

            <div
              class="flex flex-col items-center flex-1 w-full h-full pt-10 overflow-y-auto bg-base-200"
            >
              <div class="avatar">
                <div class="w-32 h-32 mask mask-squircle">
                  <img src="https://i.pravatar.cc/128?img=54" />
                </div>
              </div>
              <div class="my-4 text-2xl font-bold">
                Jotaro Kujo
              </div>
              <p class="text-sm">
                Quidem eos vel exercitationem repellendus natus.
              </p>
              <div class="mt-4 mb-10">
                <Button classes="btn btn-primary btn-sm mt-4">Follow</Button>
                <Button classes="btn btn-primary btn-sm mt-4">Message</Button>
              </div>

              <div class="w-full tabs">
                <a class="flex-grow tab tab-lifted"></a>
                <a class="tab tab-lifted tab-active">Photos</a>
                <a class="tab tab-lifted">Followers</a>
                <a class="tab tab-lifted">Following</a>
                <a class="flex-grow tab tab-lifted"></a>
              </div>
              <div class="grid grid-cols-3 gap-2 p-2 pt-4 bg-base-100">
                <img src="https://picsum.photos/id/1004/200/200" />
                <img src="https://picsum.photos/id/1003/200/200" />
                <img src="https://picsum.photos/id/1002/200/200" />
                <img src="https://picsum.photos/id/1001/200/200" />
                <img src="https://picsum.photos/id/1000/200/200" />
                <img src="https://picsum.photos/id/999/200/200" />
                <img src="https://picsum.photos/id/998/200/200" />
                <img src="https://picsum.photos/id/997/200/200" />
                <img src="https://picsum.photos/id/996/200/200" />
                <img src="https://picsum.photos/id/995/200/200" />
                <img src="https://picsum.photos/id/994/200/200" />
                <img src="https://picsum.photos/id/993/200/200" />
              </div>
            </div>

            <Menu
              class="justify-center flex-none w-full px-3 horizontal bg-base-100"
            >
              <MenuItem>
                <a>
                  <Icon
                    glyph="bell"
                    class="inline-block w-6 h-6 stroke-current"
                  />
                </a>
              </MenuItem>
              <MenuItem>
                <a>
                  <Icon
                    glyph="code"
                    class="inline-block w-6 h-6 stroke-current"
                  />
                </a>
              </MenuItem>
              <MenuItem>
                <a>
                  <Icon
                    glyph="eye"
                    class="inline-block w-6 h-6 stroke-current"
                  />
                </a>
              </MenuItem>
              <MenuItem>
                <a>
                  <Icon
                    glyph="folder"
                    class="inline-block w-6 h-6 stroke-current"
                  />
                </a>
              </MenuItem>
              <MenuItem>
                <a>
                  <Icon
                    glyph="info"
                    class="inline-block w-6 h-6 stroke-current"
                  />
                </a>
              </MenuItem>
            </Menu>
          </div>
          <div class="drawer-side">
            <label for="mobile-drawer" class="drawer-overlay"></label>
            <ul
              class="p-4 overflow-y-auto pt-14 menu w-80 bg-base-100 text-base-content"
            >
              <li>
                <a>Profile</a>
              </li>
              <li>
                <a>Messages</a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>About</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
