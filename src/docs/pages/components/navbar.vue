<template>
  <div>
    <ClassTable v-bind:data="{
      components : [
        { class: 'navbar', desc: 'Container element' },
        { class: 'navbar-start', desc: 'Child element, fills 50% of width to be on start' },
        { class: 'navbar-center', desc: 'Child element, fills remaining space to be on center' },
        { class: 'navbar-end', desc: 'Child element, fills 50% of width to be on end' },
      ]
    }"/>
    <Wrapper title="navbar" classes="flex flex-col space-y-2">

        <Navbar class="mb-2 shadow-lg bg-neutral text-neutral-content rounded-box">
          <div class="flex-none">
            <Button classes="btn-square btn-ghost">
              <Icon glyph="menu" class="inline-block w-6 h-6 stroke-current" />
            </Button>
          </div>
          <div class="flex-1 px-2 mx-2">
            <span class="text-lg font-bold">
              With two icons
            </span>
          </div>
          <div class="flex-none">
            <Button classes="btn-square btn-ghost">
              <Icon glyph="dots" class="inline-block w-6 h-6 stroke-current" />
            </Button>
          </div>
        </Navbar>

    </Wrapper>
    <Wrapper title="navbar" classes="flex flex-col space-y-2">

        <Navbar class="mb-2 shadow-lg bg-neutral text-neutral-content rounded-box">
          <div class="flex-none">
            <Button classes="btn-square btn-ghost">
              <Icon glyph="back" class="inline-block w-6 h-6 stroke-current text-success" />
            </Button>
          </div>
          <div class="flex-1 px-2 mx-2">
            <span class="text-lg font-bold">
              With one icon
            </span>
          </div>
        </Navbar>

    </Wrapper>
    <Wrapper title="navbar" classes="flex flex-col space-y-2">

        <Navbar class="mb-2 shadow-lg bg-neutral text-neutral-content rounded-box">
          <div class="flex-1 px-2 mx-2">
            <span class="text-lg font-bold">
              daisyUI
            </span>
          </div>
          <div class="flex-none">
            <Button classes="btn-square btn-ghost">
              <Icon glyph="close" class="inline-block w-6 h-6 stroke-current text-error" />
            </Button>
          </div>
        </Navbar>

    </Wrapper>
    <Wrapper title="navbar" classes="flex flex-col space-y-2">

        <Navbar class="mb-2 shadow-lg bg-neutral text-neutral-content rounded-box">
          <div class="flex-none hidden lg:flex">
            <Button classes="btn-square btn-ghost">
              <Icon glyph="menu" class="inline-block w-6 h-6 stroke-current" />
            </Button>
          </div>
          <div class="flex-1 hidden px-2 mx-2 lg:flex">
            <span class="text-lg font-bold">
              daisyUI
            </span>
          </div>
          <div class="flex-1 lg:flex-none">
            <FormControl>
              <Input type="text" class="input input-ghost" placeholder="Search" />
            </FormControl>
          </div>
          <div class="flex-none">
            <Button classes="btn-square btn-ghost">
              <Icon glyph="search" class="inline-block w-6 h-6 stroke-current" />
            </Button>
          </div>
          <div class="flex-none">
            <Button classes="btn-square btn-ghost">
              <Icon glyph="bell" class="inline-block w-6 h-6 stroke-current" />
            </Button>
          </div>
          <div class="flex-none">
            <Avatar classes="rounded-full w-10 h-10 m-1">
              <img src="https://i.pravatar.cc/500?img=32" />
            </Avatar>
          </div>
        </Navbar>

    </Wrapper>


    <Wrapper title="navbar" classes="flex flex-col space-y-2">

        <Navbar class="mb-2 shadow-lg bg-neutral text-neutral-content rounded-box">
          <div class="flex-none px-2 mx-2">
            <span class="text-lg font-bold">
              daisyUI
            </span>
          </div>
          <div class="flex-1 px-2 mx-2">
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
              <Icon glyph="heart" class="inline-block w-6 h-6 stroke-current" />
            </Button>
          </div>
          <div class="flex-none">
            <Button classes="btn-square btn-ghost">
              <Icon glyph="search" class="inline-block w-6 h-6 stroke-current" />
            </Button>
          </div>
        </Navbar>

    </Wrapper>



    <Wrapper title="navbar" classes="flex flex-col space-y-2">

        <Navbar class="mb-2 shadow-lg bg-neutral text-neutral-content rounded-box">
          <div class="flex-1 px-2 mx-2">
            <span class="text-lg font-bold">
              daisyUI
            </span>
          </div>
          <div class="flex-none hidden px-2 mx-2 lg:flex">
            <div class="flex items-stretch">
              <a class="btn btn-ghost btn-sm rounded-btn">
                <Icon glyph="heart" class="inline-block w-5 mr-2 stroke-current" />
                Likes
              </a>
              <a class="btn btn-ghost btn-sm rounded-btn">
                <Icon glyph="bell" class="inline-block w-5 mr-2 stroke-current" />
                Notifications
              </a>
              <a class="btn btn-ghost btn-sm rounded-btn">
                <Icon glyph="folder" class="inline-block w-5 mr-2 stroke-current" />
                Files
              </a>
              <a class="btn btn-ghost btn-sm rounded-btn">
                <Icon glyph="code" class="inline-block w-5 mr-2 stroke-current" />
                Config
              </a>
            </div>

          </div>
          <div class="flex-none">
            <Button classes="btn-square btn-ghost">
              <Icon glyph="menu" class="inline-block w-6 h-6 stroke-current" />
            </Button>
          </div>
        </Navbar>

    </Wrapper>

    <Wrapper title="start/center/end" classes="flex flex-col space-y-2">

        <Navbar class="mb-2 shadow-lg bg-neutral text-neutral-content rounded-box">
          <div class="px-2 mx-2 navbar-start">
            <span class="text-lg font-bold">
              daisyUI
            </span>
          </div>
          <div class="hidden px-2 mx-2 navbar-center lg:flex">
            <div class="flex items-stretch">
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
          <div class="navbar-end">

            <Button classes="btn-square btn-ghost">
              <Icon glyph="bell" class="inline-block w-6 h-6 stroke-current" />
            </Button>

            <Button classes="btn-square btn-ghost">
              <Icon glyph="search" class="inline-block w-6 h-6 stroke-current" />
            </Button>

          </div>
        </Navbar>

    </Wrapper>




  </div>
</template>


<script>
export default {
  head() {
    return {
      title: "daisyUI — Tailwind CSS navbar component",
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Tailwind CSS navbar component - Tailwind CSS navbar examples'
        }
      ]
    }
  }
}
</script>
