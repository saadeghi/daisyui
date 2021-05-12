<template>
  <div class="shadow w-96 card">
    <Navbar class="flex-none w-full bg-neutral text-neutral-content">
      <div class="flex-none">
        <label
          for="mobile-drawer"
          class="btn btn-circle btn-ghost drawer-button"
        >
          <Icon glyph="menu" class="inline-block w-6 h-6 stroke-current" />
        </label>
      </div>
      <div class="flex-1 px-2 mx-2">
        <span class="text-lg font-bold"> </span>
      </div>
      <div class="flex-none">
        <Button classes="btn-circle btn-ghost">
          <Icon glyph="search" class="inline-block w-6 h-6 stroke-current" />
        </Button>
      </div>
    </Navbar>

    <div
      class="flex flex-col items-center flex-1 w-full h-full pt-10 overflow-y-auto bg-gradient-to-br from-primary to-accent text-primary-content"
    >
      <div class="avatar">
        <div class="w-32 h-32 p-1 mask mask-squircle bg-base-100">
          <img src="https://i.pravatar.cc/128?img=54" class="w-32 h-32 mask mask-squircle" />
        </div>
      </div>
      <div class="my-4 text-2xl font-bold">
        Jotaro Kujo
      </div>
      <p class="text-sm">
        Quidem eos vel exercitationem repellendus natus.
      </p>
      <div class="mt-4 mb-10 space-x">
        <Button classes="btn btn-sm">Follow</Button>
        <Button classes="btn btn-sm">Message</Button>
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
      </div>
    </div>

    <Menu class="justify-center flex-none w-full px-3 horizontal bg-base-100">
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
      <MenuItem>
        <a>
          <Icon glyph="folder" class="inline-block w-6 h-6 stroke-current" />
        </a>
      </MenuItem>
      <MenuItem>
        <a>
          <Icon glyph="info" class="inline-block w-6 h-6 stroke-current" />
        </a>
      </MenuItem>
    </Menu>
  </div>
</template>
