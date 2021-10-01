<template>
  <div class="grid grid-cols-1 gap-6 lg:p-10 xl:grid-cols-3 lg:bg-base-200 rounded-box">






    <Navbar class="col-span-1 shadow-lg xl:col-span-3 bg-neutral-focus text-neutral-content rounded-box">
      <div class="flex-none">
        <Button classes="btn-square btn-ghost">
          <Icon glyph="menu" class="inline-block w-6 h-6 stroke-current" />
        </Button>
      </div>
      <div class="flex-none px-2 mx-2">
        <span class="text-lg font-bold">
          daisyUI
        </span>
      </div>
      <div class="flex justify-center flex-1 px-2 mx-2">
        <div class="items-stretch hidden lg:flex">
          <a class="btn btn-ghost btn-sm rounded-btn">
            Home
          </a>
          <a class="btn btn-ghost btn-sm rounded-btn">
            Portfolio
          </a>
          <a class="btn btn-ghost btn-sm rounded-btn">
            About
          </a>
          <a class="btn btn-ghost btn-sm rounded-btn">
            Contact
          </a>
        </div>

      </div>
      <div class="flex-none">
        <Button classes="btn-square btn-ghost">
          <Icon glyph="bell" class="inline-block w-6 h-6 stroke-current" />
        </Button>
      </div>
      <div class="flex-none">
        <Button classes="btn-square btn-ghost">
          <Icon glyph="search" class="inline-block w-6 h-6 stroke-current" />
        </Button>
      </div>
    </Navbar>


      <Card class="shadow-lg compact side bg-base-100">
        <div class="flex-row items-center space-x-4 card-body">
          <div>
            <Avatar classes="rounded-full w-14 h-14 shadow">
              <img src="https://i.pravatar.cc/500?img=32" />
            </Avatar>
          </div>
          <div class="">
            <h2 class="card-title">Janis Johnson</h2>
            <p class="text-base-content text-opacity-40">Accounts Agent</p>
          </div>
        </div>
      </Card>





      <Card class="shadow-lg compact side bg-base-100">
        <div class="flex-row items-center space-x-4 card-body">
          <div class="flex-1">
            <h2 class="card-title">Meredith Mayer</h2>
            <p class="text-base-content text-opacity-40">Data Liaison</p>
          </div>
          <div class="flex-0">
            <Button classes="btn-sm">Follow</Button>
          </div>
        </div>
      </Card>





      <Card class="row-span-3 shadow-lg compact bg-base-100">
        <figure>
          <img src="https://picsum.photos/id/1005/600/400" />
        </figure>
        <div class="flex-row items-center space-x-4 card-body">
          <div class="">
            <h2 class="card-title">Karolann Collins</h2>
            <p class="text-base-content text-opacity-40">Direct Interactions Liaison</p>
          </div>
        </div>
      </Card>





      <Card class="shadow-lg compact side bg-base-100">
        <div class="flex-row items-center space-x-4 card-body">
          <div class="flex-1">
            <h2 class="card-title text-primary">4,600</h2>
            <p class="text-base-content text-opacity-40">Page views</p>
          </div>
          <div class="flex space-x-2 flex-0">
            <Button classes="btn-sm btn-square">
              <Icon glyph="eye" class="inline-block w-6 h-6 stroke-current" />
            </Button>
            <Button classes="btn-sm btn-square">
              <Icon
                glyph="dots"
                class="inline-block w-6 h-6 stroke-current"
              />
            </Button>
          </div>
        </div>
      </Card>





      <Card class="shadow-lg compact side bg-base-100">
        <div class="flex-row items-center space-x-4 card-body">
          <label class="flex-0">
            <Toggle classes="toggle-primary" />
          </label>
          <div class="flex-1">
            <h2 class="card-title">Enable Notifications</h2>
            <p class="text-base-content text-opacity-40">To get latest updates</p>
          </div>
        </div>
      </Card>




      <Card class="col-span-1 row-span-3 shadow-lg xl:col-span-2 bg-base-100">
        <div class="card-body">
          <h2 class="my-4 text-4xl font-bold card-title">Top 10 UI Components</h2>
          <div class="mb-4 space-x-2 card-actions">
            <Badge class="badge-ghost">Colors</Badge>
            <Badge class="badge-ghost">UI Design</Badge>
            <Badge class="badge-ghost">Creativity</Badge>
          </div>
          <p>Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente.</p>
          <div class="justify-end space-x-2 card-actions">
            <Button classes="btn-primary">Login</Button>
            <Button classes="">Register</Button>
          </div>
        </div>
      </Card>




      <Card class="shadow-lg compact side bg-base-100">
        <div class="flex-row items-center space-x-4 card-body">
          <div class="flex-1">
            <h2 class="flex card-title">
              <button class="btn btn-ghost btn-sm btn-circle loading"></button>
              Downloading...
            </h2>
            <progress class="progress progress-secondary" value="70" max="100"></progress>
          </div>
          <div class="flex-0">
            <button class="btn btn-circle">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
        </div>
      </Card>







      <Card class="shadow-lg compact side bg-base-100">
        <div class="flex-row items-center space-x-4 card-body">
          <label class="cursor-pointer label">
            <Checkbox classes="checkbox-accent" checked />
            <span class="mx-4 label-text">Enable Autosave</span>
          </label>
        </div>
      </Card>




      <Menu class="row-span-3 p-4 shadow-lg bg-base-100 text-base-content text-opacity-40 rounded-box">
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


      <Alert class="col-span-1 xl:col-span-2 bg-base-100">
        <div class="flex-1">
          <label class="mx-3">Lorem ipsum dolor sit amet, consectetur adip!</label>
        </div>
        <div class="flex-none">
          <Button classes="btn-sm btn-ghost mr-2">Cancel</Button>
          <Button classes="btn-sm btn-primary">Apply</Button>
        </div>
      </Alert>

      <Alert class="col-span-1 xl:col-span-2 alert-info">
        <div class="flex-1">
          <Icon glyph="info" class="w-6 h-6 mx-2 stroke-current" />
          <label>Lorem ipsum dolor sit amet, consectetur adip!</label>
        </div>
      </Alert>

      <Alert class="col-span-1 xl:col-span-2 alert-success">
        <div class="flex-1">
          <Icon glyph="folder" class="w-6 h-6 mx-2 stroke-current" />
          <label>Lorem ipsum dolor sit amet, consectetur adip!</label>
        </div>
      </Alert>


  </div>
</template>


<script>
export default {
  head() {
    return {
      title: "daisyUI — Cards demo",
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Tailwind CSS template example - Tailwind CSS sample'
        }
      ]
    }
  }
}
</script>
