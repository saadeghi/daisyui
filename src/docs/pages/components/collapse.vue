<template>
  <div>
    <ClassTable v-bind:data="{
      components : [
        { class: 'collapse', desc: 'Container element' },
        { class: 'collapse-title', desc: 'Title element' },
        { class: 'collapse-content', desc: 'Cointainer for content' },
      ],
      utilities : [
        { class: 'collapse-arrow', desc: 'Adds arrow icon' },
        { class: 'collapse-plus', desc: 'Adds plus/minus icon' },
        { class: 'collapse-open', desc: 'Force open' },
        { class: 'collapse-close', desc: 'Force close' },
      ]
    }"/>
    <Wrapper title="collapse" classes="space-y-2">
      <Collapse title="I open with focus"/>
      <Collapse title="I open with focus"/>
      <Collapse title="I open with focus"/>
    </Wrapper>

    <Wrapper title="with border" classes="space-y-2">
      <Collapse class="border rounded-box border-base-300" title="I open with focus"/>
      <Collapse class="border rounded-box border-base-300" title="I open with focus"/>
      <Collapse class="border rounded-box border-base-300" title="I open with focus"/>
    </Wrapper>

    <Wrapper title="with arrow" classes="space-y-2">
      <Collapse class="border rounded-box border-base-300 collapse-arrow" title="I open with focus"/>
      <Collapse class="border rounded-box border-base-300 collapse-arrow" title="I open with focus"/>
      <Collapse class="border rounded-box border-base-300 collapse-arrow" title="I open with focus"/>
    </Wrapper>

    <Wrapper title="with plus/minus" classes="space-y-2">
      <Collapse class="border rounded-box border-base-300 collapse-plus" title="I open with focus"/>
      <Collapse class="border rounded-box border-base-300 collapse-plus" title="I open with focus"/>
      <Collapse class="border rounded-box border-base-300 collapse-plus" title="I open with focus"/>
    </Wrapper>

    <Wrapper title="with checkbox (works with checkbox instead of focus)" classes="space-y-2">
      <Collapse checkbox="true" class="border rounded-box border-base-300 collapse-arrow" title="I open/close with click"/>
      <Collapse checkbox="true" class="border rounded-box border-base-300 collapse-arrow" title="I open/close with click"/>
      <Collapse checkbox="true" class="border rounded-box border-base-300 collapse-arrow" title="I open/close with click"/>
    </Wrapper>

    <Wrapper title="collapse-open (force open)" classes="space-y-2">
      <Collapse v-bind:class="{ 'collapse-open': toggleOpenClass }" class="border rounded-box border-base-300 collapse-arrow" title="I'm always open"/>
      <Collapse v-bind:class="{ 'collapse-open': toggleOpenClass }" class="border rounded-box border-base-300 collapse-arrow" title="I'm always open"/>
      <Collapse v-bind:class="{ 'collapse-open': toggleOpenClass }" class="border rounded-box border-base-300 collapse-arrow" title="I'm always open"/>
    </Wrapper>
    <button class="btn btn-sm btn-info" v-on:click="toggleOpenClass = !toggleOpenClass">
      <span v-if="!toggleOpenClass" class="lowercase">↑ Add <span class="badge badge-outline">collapse-open</span> class to all</span>
      <span v-if="toggleOpenClass" class="lowercase">↑ remove <span class="badge badge-outline">collapse-open</span> class from all</span>
    </button>

    <Wrapper title="collapse-close (force close)" classes="space-y-2">
      <Collapse v-bind:class="{ 'collapse-close': toggleCloseClass }" class="border rounded-box border-base-300 collapse-arrow" title="I'm always close"/>
      <Collapse v-bind:class="{ 'collapse-close': toggleCloseClass }" class="border rounded-box border-base-300 collapse-arrow" title="I'm always close"/>
      <Collapse v-bind:class="{ 'collapse-close': toggleCloseClass }" class="border rounded-box border-base-300 collapse-arrow" title="I'm always close"/>
    </Wrapper>
    <button class="btn btn-sm btn-info" v-on:click="toggleCloseClass = !toggleCloseClass">
      <span v-if="!toggleCloseClass" class="lowercase">↑ Add <span class="badge badge-outline">collapse-close</span> class to all</span>
      <span v-if="toggleCloseClass" class="lowercase">↑ remove <span class="badge badge-outline">collapse-close</span> class from all</span>
    </button>


  </div>
</template>


<script>
export default {
  data() {
    return {
      toggleOpenClass: true,
      toggleCloseClass: true,
    }
  },
  head() {
    return {
      title: "daisyUI — Tailwind CSS collapse component",
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Tailwind CSS collapse accordion component - Tailwind CSS collapse accordion examples'
        }
      ]
    }
  }
}
</script>
