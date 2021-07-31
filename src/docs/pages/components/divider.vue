<template>
  <div>
    <ClassTable v-bind:data="{
      components : [
        { class: 'divider', desc: 'Divide elements on top of each other' },
      ],
      utilities : [
        { class: 'divider-vertical', desc: 'Divide elements next to each other' },
      ]
    }"/>
    <Wrapper title="divider">
      <div class="flex flex-col w-full">
        <div class="grid h-20 card bg-base-300 rounded-box place-items-center">content</div>
        <div class="divider">OR</div>
        <div class="grid h-20 card bg-base-300 rounded-box place-items-center">content</div>
      </div>
    </Wrapper>
    <Wrapper title="divider vertical">
      <div class="flex flex-row w-full">
        <div class="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">content</div>
        <div class="divider divider-vertical">OR</div>
        <div class="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">content</div>
      </div>
    </Wrapper>
    <Wrapper title="divider with no text">
      <div class="flex flex-col w-full">
        <div class="grid h-20 card bg-base-300 rounded-box place-items-center">content</div>
        <div class="divider"></div>
        <div class="grid h-20 card bg-base-300 rounded-box place-items-center">content</div>
      </div>
    </Wrapper>
    <Wrapper title="divider vertical with no text">
      <div class="flex flex-row w-full">
        <div class="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">content</div>
        <div class="divider divider-vertical"></div>
        <div class="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">content</div>
      </div>
    </Wrapper>

    <Wrapper title="responsive (lg:divider-vertical)">
      <div class="flex flex-col w-full lg:flex-row">
        <div class="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">content</div>
        <div class="divider lg:divider-vertical">OR</div>
        <div class="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">content</div>
      </div>
    </Wrapper>
  </div>
</template>


<script>
export default {
  head() {
    return {
      title: "daisyUI — Tailwind CSS divider component",
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Tailwind CSS divider component - Tailwind CSS divider examples'
        }
      ]
    }
  }
}
</script>
