<template>
  <div>
    <ClassTable v-bind:data="{
      components : [
        { class: 'card', desc: 'Container element' },
        { class: 'card-title', desc: 'Title of card' },
        { class: 'card-body', desc: 'Container for content' },
        { class: 'card-actions', desc: 'Container for buttons' },
      ],
      utilities : [
        { class: 'bordered', desc: 'Adds border' },
        { class: 'compact', desc: 'Less padding' },
        { class: 'card-side', desc: 'The image in <figure> will be on to the side' },
        { class: 'image-full', desc: 'The image in <figure> element will be the background' },
      ]
    }"/>
    <Wrapper title="card" classes="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

      <Card class="bordered">
        <figure>
          <img src="https://picsum.photos/id/1005/400/250" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">Top image<Badge class="mx-2 badge-secondary">NEW</Badge></h2>
          <p>Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente.</p>
          <div class="justify-end card-actions">
            <Button class="btn-secondary">More info</Button>
          </div>
        </div>
      </Card>

      <Card class="bordered">
        <div class="card-body">
          <h2 class="card-title">Image bottom</h2>
          <p>Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente.</p>
          <div class="card-actions">
            <Button classes="btn-primary">Login</Button>
            <Button classes="btn-ghost">Register</Button>
          </div>
        </div>
        <figure>
          <img src="https://picsum.photos/id/1005/400/250" />
        </figure>
      </Card>

      <Card class="bordered">
        <figure>
          <img class="w-full" src="https://picsum.photos/id/1005/60/40" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">Small image file</h2>
          <p>Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente.</p>
          <div class="card-actions">
            <Badge class="badge-ghost">Article</Badge>
            <Badge class="badge-ghost">Photography</Badge>
          </div>
        </div>
      </Card>

    </Wrapper>

    <Wrapper title="card with shadow, image-full, small image size" classes="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

      <Card class="text-center shadow-2xl">
        <figure class="px-10 pt-10">
          <img class="rounded-xl" src="https://picsum.photos/id/1005/400/250" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">shadow, center, padding</h2>
          <p>Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente.</p>
          <div class="justify-center card-actions">
            <Button classes="btn-outline btn-accent">More info</Button>
          </div>
        </div>
      </Card>

      <Card class="shadow-xl image-full">
        <figure>
          <img src="https://picsum.photos/id/1005/400/250" />
        </figure>
        <div class="justify-end card-body">
          <h2 class="card-title">Image overlay</h2>
          <p>Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente.</p>
          <div class="card-actions">
            <Button classes="btn-primary">Get Started</Button>
          </div>
        </div>
      </Card>

      <Card class="shadow-sm bg-accent text-accent-content">
        <figure>
          <img src="https://picsum.photos/id/1005/400/250" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">Accent color</h2>
          <p>Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente.</p>
          <div class="card-actions">
            <Button classes="btn-secondary">More info</Button>
          </div>
        </div>
      </Card>

    </Wrapper>

    <Wrapper title="card with side image" classes="grid grid-cols-1 gap-6">

      <Card class="lg:card-side bordered">
        <figure>
          <img src="https://picsum.photos/id/1005/400/250" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">Horizontal</h2>
          <p>Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente.</p>
          <div class="card-actions">
            <Button classes="btn-primary">Get Started</Button>
            <Button classes="btn-ghost">More info</Button>
          </div>
        </div>
      </Card>

      <Card class="lg:card-side bordered">
        <figure>
          <img src="https://picsum.photos/id/1005/400/250" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">Horizontal<Badge class="mx-2">NEW</Badge></h2>
          <p>Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente.</p>
          <div class="card-actions">
            <Button classes="btn-primary">Get Started</Button>
            <Button classes="btn-ghost">More info</Button>
          </div>
        </div>
      </Card>


    </Wrapper>

    <Wrapper title="card without image" classes="grid grid-cols-1 gap-6">

      <Card class="lg:card-side bordered">
        <div class="card-body">
          <h2 class="card-title">No Images</h2>
          <p>Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente.</p>
          <div class="card-actions">
            <Button classes="btn-primary">Get Started</Button>
            <Button classes="btn-ghost">More info</Button>
          </div>
        </div>
      </Card>

    </Wrapper>

    <Wrapper title="card with out image" classes="grid grid-cols-1 md:grid-cols-2 gap-6">

      <Card class="shadow">
        <div class="card-body">
          <h2 class="card-title">no border with shadow</h2>
          <p>Rerum reiciendis beatae tenetur excepturi</p>
        </div>
      </Card>

      <Card class="shadow-lg">
        <div class="card-body">
          <h2 class="card-title">no border with shadow</h2>
          <p>Rerum reiciendis beatae tenetur excepturi</p>
        </div>
      </Card>

    </Wrapper>

    <Wrapper title="glass card">

      <div class="flex items-center w-full px-4 py-10 bg-cover card bg-base-200" style="background-image: url(https://picsum.photos/id/314/1000/300)">
        <Card class="glass lg:card-side text-neutral-content">
          <figure class="p-6">
            <img src="https://picsum.photos/id/1005/300/200" class="rounded-lg shadow-lg" />
          </figure>
          <div class="max-w-md card-body">
            <h2 class="card-title">Glass</h2>
            <p>Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente.</p>
            <div class="card-actions">
              <Button classes="glass rounded-full">Get Started</Button>
            </div>
          </div>
        </Card>
      </div>



    </Wrapper>

    <Wrapper title="mini cards" classes="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

      <Card class="shadow-2xl lg:card-side bg-primary text-primary-content">
        <div class="card-body">
          <p>Rerum reiciendis beatae tenetur excepturi aut pariatur est eos.</p>
          <div class="justify-end card-actions">
            <Button classes="btn-primary">
              More info
              <Icon glyph="arrow" class="inline-block w-6 h-6 ml-2 stroke-current" />
            </Button>
          </div>
        </div>
      </Card>

      <Card class="shadow-2xl lg:card-side bg-secondary text-secondary-content">
        <div class="card-body">
          <div class="justify-end card-actions">
            <Button classes="btn-secondary btn-square">
              <Icon glyph="close" class="inline-block w-6 h-6 stroke-current" />
            </Button>
          </div>
          <p>Rerum reiciendis beatae tenetur excepturi aut pariatur est eos.</p>
        </div>
      </Card>

      <Card class="text-center shadow-2xl lg:card-side bg-accent text-accent-content">
        <div class="card-body">
          <p>Rerum reiciendis beatae tenetur excepturi aut pariatur est eos.</p>
          <div class="justify-center card-actions">
            <Button classes="btn-accent">Start now</Button>
            <Button classes="btn-accent">More info</Button>
          </div>
        </div>
      </Card>

    </Wrapper>

  </div>
</template>


<script>
export default {
  head() {
    return {
      title: "daisyUI — Tailwind CSS card component",
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Tailwind CSS card component - Tailwind CSS card examples'
        }
      ]
    }
  }
}
</script>
