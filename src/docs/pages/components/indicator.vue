<template>
  <div>
    <ClassTable v-bind:data="{
      components : [
        { class: 'indicator', desc: 'Container element' },
        { class: 'indicator-item', desc: 'will be placed on the corner of sibiling' },
      ],
      utilities : [
        { class: 'indicator-start', desc: 'align horizontally to the left' },
        { class: 'indicator-center', desc: 'align horizontally to the center' },
        { class: 'indicator-end', desc: 'align horizontally to the right (default)' },
        { class: 'indicator-top', desc: 'align vertically to top (default)' },
        { class: 'indicator-middle', desc: 'align vertically to middle' },
        { class: 'indicator-bottom', desc: 'align vertically to bottom' },
      ]
    }"/>

    <Wrapper title="an empty badge as indicator" classes="flex flex-col space-y-2">
      <div class="m-6 indicator">
        <div class="indicator-item badge badge-secondary"></div>
        <div class="grid w-32 h-32 bg-base-300 place-items-center">content</div>
      </div>
    </Wrapper>

    <Wrapper title="a badge as indicator" classes="flex flex-col space-y-2">
      <div class="m-6 indicator">
        <div class="indicator-item badge badge-primary">new</div>
        <div class="grid w-32 h-32 bg-base-300 place-items-center">content</div>
      </div>
    </Wrapper>

    <Wrapper title="a badge as indicator for tab" classes="flex flex-col space-y-2">
      <div class="my-6 tabs">
        <a class="tab tab-lifted">Messages</a>
        <a class="indicator tab tab-lifted tab-active">
          Notifications <div class="indicator-item badge">8</div>
        </a>
        <a class="tab tab-lifted">Requests</a>
      </div>
    </Wrapper>

    <Wrapper title="a badge as indicator for button" classes="flex flex-col space-y-2">
      <div class="my-6 indicator">
        <div class="indicator-item badge">99+</div>
        <button class="btn btn-primary">inbox</button>
      </div>
    </Wrapper>

    <Wrapper title="a badge as indicator for image (canter and middle)" classes="flex flex-col space-y-2">
      <div class="indicator">
        <div class="indicator-item indicator-center indicator-middle badge">Text Here</div>
        <img src="https://picsum.photos/id/1005/400/200">
      </div>
    </Wrapper>

    <Wrapper title="a badge as indicator for avatar" classes="flex flex-col space-y-2">
      <div class="my-6 avatar indicator">
        <div class="indicator-item badge">typing…</div>
        <div class="w-24 h-24 rounded-btn">
          <img src="http://daisyui.com/tailwind-css-component-profile-1@94w.png">
        </div>
      </div>
    </Wrapper>

    <Wrapper title="a button as indicator for card" classes="flex flex-col space-y-2">
      <div class="my-6 indicator">
        <div class="indicator-item indicator-bottom">
          <button class="btn btn-primary">Apply</button>
        </div>
        <div class="border card">
          <div class="card-body">
            <h2 class="card-title">Job Title</h2>
            <p>Rerum reiciendis beatae tenetur excepturi</p>
          </div>
        </div>
      </div>
    </Wrapper>

    <Wrapper title="a badge as indicator for input" classes="flex flex-col space-y-2">
      <div class="my-6 indicator">
        <div class="indicator-item badge">Available</div>
        <input type="text" placeholder="Pick username" class="input input-bordered">
      </div>
    </Wrapper>

    <Wrapper title="indicator indicator-start" classes="flex flex-col space-y-2">
      <div class="m-6 indicator">
        <div class="indicator-item indicator-start badge badge-secondary"></div>
        <div class="grid w-32 h-32 bg-base-300 place-items-center">content</div>
      </div>
    </Wrapper>

    <Wrapper title="indicator indicator-center" classes="flex flex-col space-y-2">
      <div class="m-6 indicator">
        <div class="indicator-item indicator-center badge badge-secondary"></div>
        <div class="grid w-32 h-32 bg-base-300 place-items-center">content</div>
      </div>
    </Wrapper>

    <Wrapper title="indicator [indicator-end is default]" classes="flex flex-col space-y-2">
      <div class="m-6 indicator">
        <div class="indicator-item badge badge-secondary"></div>
        <div class="grid w-32 h-32 bg-base-300 place-items-center">content</div>
      </div>
    </Wrapper>

    <Wrapper title="indicator indicator-middle indicator-start" classes="flex flex-col space-y-2">
      <div class="m-6 indicator">
        <div class="indicator-item indicator-middle indicator-start badge badge-secondary"></div>
        <div class="grid w-32 h-32 bg-base-300 place-items-center">content</div>
      </div>
    </Wrapper>

    <Wrapper title="indicator indicator-middle indicator-center" classes="flex flex-col space-y-2">
      <div class="m-6 indicator">
        <div class="indicator-item indicator-middle indicator-center badge badge-secondary"></div>
        <div class="grid w-32 h-32 bg-base-300 place-items-center">content</div>
      </div>
    </Wrapper>

    <Wrapper title="indicator indicator-middle [indicator-end is default]" classes="flex flex-col space-y-2">
      <div class="m-6 indicator">
        <div class="indicator-item indicator-middle badge badge-secondary"></div>
        <div class="grid w-32 h-32 bg-base-300 place-items-center">content</div>
      </div>
    </Wrapper>

    <Wrapper title="indicator indicator-bottom indicator-start" classes="flex flex-col space-y-2">
      <div class="m-6 indicator">
        <div class="indicator-item indicator-bottom indicator-start badge badge-secondary"></div>
        <div class="grid w-32 h-32 bg-base-300 place-items-center">content</div>
      </div>
    </Wrapper>

    <Wrapper title="indicator indicator-bottom indicator-center" classes="flex flex-col space-y-2">
      <div class="m-6 indicator">
        <div class="indicator-item indicator-bottom indicator-center badge badge-secondary"></div>
        <div class="grid w-32 h-32 bg-base-300 place-items-center">content</div>
      </div>
    </Wrapper>

    <Wrapper title="indicator indicator-bottom [indicator-end is default]" classes="flex flex-col space-y-2">
      <div class="m-6 indicator">
        <div class="indicator-item indicator-bottom badge badge-secondary"></div>
        <div class="grid w-32 h-32 bg-base-300 place-items-center">content</div>
      </div>
    </Wrapper>

    <Wrapper title="multiple indicators" classes="flex flex-col space-y-2">
      <div class="m-6 indicator">
        <div class="indicator-item indicator-top indicator-start badge badge-secondary">1</div>
        <div class="indicator-item indicator-top indicator-center badge badge-secondary">2</div>
        <div class="indicator-item indicator-top indicator-end badge badge-secondary">3</div>
        <div class="indicator-item indicator-middle indicator-start badge badge-secondary">4</div>
        <div class="indicator-item indicator-middle indicator-center badge badge-secondary">5</div>
        <div class="indicator-item indicator-middle indicator-end badge badge-secondary">6</div>
        <div class="indicator-item indicator-bottom indicator-start badge badge-secondary">7</div>
        <div class="indicator-item indicator-bottom indicator-center badge badge-secondary">8</div>
        <div class="indicator-item indicator-bottom indicator-end badge badge-secondary">9</div>
        <div class="grid w-32 h-32 bg-base-300 place-items-center">content</div>
      </div>
    </Wrapper>

  </div>
</template>


<script>
export default {
  head() {
    return {
      title: "daisyUI — Tailwind CSS indicator component",
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Tailwind CSS notification indicator component - Tailwind CSS notification indicator examples'
        }
      ]
    }
  }
}
</script>
