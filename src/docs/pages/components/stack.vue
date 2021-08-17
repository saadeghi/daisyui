<template>
  <div>
    <ClassTable v-bind:data="{
      components : [
        { class: 'stack', desc: 'Puts the child elements on top of each other' },
      ],
      utilities : [
      ]
    }"/>
    <Wrapper title="3 divs without stack">
      <div>
        <div class="grid w-32 h-20 rounded bg-primary text-primary-content place-content-center">1</div>
        <div class="grid w-32 h-20 rounded bg-accent text-accent-content place-content-center">2</div>
        <div class="grid w-32 h-20 rounded bg-secondary text-secondary-content place-content-center">3</div>
      </div>
    </Wrapper>
    <Wrapper title="3 divs with stack">
      <div class="stack">
        <div class="grid w-32 h-20 rounded bg-primary text-primary-content place-content-center">1</div>
        <div class="grid w-32 h-20 rounded bg-accent text-accent-content place-content-center">2</div>
        <div class="grid w-32 h-20 rounded bg-secondary text-secondary-content place-content-center">3</div>
      </div>
    </Wrapper>
    <Wrapper title="stacked images">
      <div class="stack">
        <img class="rounded" src="/tailwind-css-component-profile-1@94w.png" alt="Image 1"/>
        <img class="rounded" src="/tailwind-css-component-profile-2@94w.png" alt="Image 2"/>
        <img class="rounded" src="/tailwind-css-component-profile-3@94w.png" alt="Image 3"/>
      </div>
    </Wrapper>
    <Wrapper title="stacked cards with border">
      <div class="stack">
        <div class="text-center border border-base-content card w-36 bg-base-100">
          <div class="card-body">A</div>
        </div>
        <div class="text-center border border-base-content card w-36 bg-base-100">
          <div class="card-body">B</div>
        </div>
        <div class="text-center border border-base-content card w-36 bg-base-100">
          <div class="card-body">C</div>
        </div>
      </div>
    </Wrapper>
    <Wrapper title="stacked cards with shadow">
      <div class="stack">
        <div class="text-center shadow-md w-36 card bg-base-200">
          <div class="card-body">A</div>
        </div>
        <div class="text-center shadow w-36 card bg-base-200">
          <div class="card-body">B</div>
        </div>
        <div class="text-center shadow-sm w-36 card bg-base-200">
          <div class="card-body">C</div>
        </div>
      </div>
    </Wrapper>
    <Wrapper title="stacked cards with shadow">
      <div class="stack">
        <div class="shadow-md card bg-primary text-primary-content">
          <div class="card-body">
            <h2 class="card-title">Notification 1</h2>
            <p>You have 3 unread messages. Tap here to see.</p>
          </div>
        </div>
        <div class="shadow card bg-primary text-primary-content">
          <div class="card-body">
            <h2 class="card-title">Notification 2</h2>
            <p>You have 3 unread messages. Tap here to see.</p>
          </div>
        </div>
        <div class="shadow-sm card bg-primary text-primary-content">
          <div class="card-body">
            <h2 class="card-title">Notification 3</h2>
            <p>You have 3 unread messages. Tap here to see.</p>
          </div>
        </div>
      </div>
    </Wrapper>
  </div>
</template>


<script>
  export default {
    head() {
      return {
        title: "daisyUI — Tailwind CSS stack component",
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: 'Tailwind CSS stack component - Tailwind CSS stack examples'
          }
        ]
      }
    }
  }
</script>
