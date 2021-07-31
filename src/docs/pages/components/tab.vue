<template>
  <div>
    <ClassTable v-bind:data="{
      components : [
        { class: 'tabs', desc: 'Container of tab items' },
        { class: 'tab', desc: 'A tab item' },
      ],
      utilities : [
        { class: 'tab-active', desc: 'For the active tab' },
        { class: 'tab-bordered', desc: 'Adds bottom border to tab item' },
        { class: 'tab-lifted', desc: 'Adds lifted style to tab item' },
        { class: 'tabs-boxed', desc: 'Adds a box style to tabs container' },
        { class: 'tab-xs', desc: 'Shows tab in extra small size' },
        { class: 'tab-sm', desc: 'Shows tab in small size' },
        { class: 'tab-md', desc: 'Shows tab in medium (defaul) size' },
        { class: 'tab-lg', desc: 'Shows tab in large size' },
      ]
    }"/>

    <Wrapper classes="flex items-start flex-col space-y-2" title="tabs">
      <div class="tabs">
        <a class="tab">Tab 1</a>
        <a class="tab tab-active">Tab 2</a>
        <a class="tab">Tab 3</a>
      </div>
    </Wrapper>

    <Wrapper classes="flex items-start flex-col space-y-2" title="tab-bordered">
      <div class="tabs">
        <a class="tab tab-bordered">Tab 1</a>
        <a class="tab tab-bordered tab-active">Tab 2</a>
        <a class="tab tab-bordered">Tab 3</a>
      </div>
    </Wrapper>

    <Wrapper classes="flex items-start flex-col space-y-2" title="tab-lifted">
      <div class="tabs">
        <a class="tab tab-lifted">Tab 1</a>
        <a class="tab tab-lifted tab-active">Tab 2</a>
        <a class="tab tab-lifted">Tab 3</a>
      </div>
    </Wrapper>

    <Wrapper classes="flex items-start flex-col space-y-2" title="tabs-boxed">
      <div class="tabs tabs-boxed">
        <a class="tab">Tab 1</a>
        <a class="tab tab-active">Tab 2</a>
        <a class="tab">Tab 3</a>
      </div>
    </Wrapper>


    <Wrapper classes="flex items-start flex-col space-y-2" title="sizes">
      <div class="tabs">
        <a class="tab tab-xs tab-lifted">Tiny</a>
        <a class="tab tab-xs tab-lifted tab-active">Tiny</a>
        <a class="tab tab-xs tab-lifted">Tiny</a>
      </div>
      <div class="tabs">
        <a class="tab tab-sm tab-lifted">Small</a>
        <a class="tab tab-sm tab-lifted tab-active">Small</a>
        <a class="tab tab-sm tab-lifted">Small</a>
      </div>
      <div class="tabs">
        <a class="tab tab-lifted">Normal</a>
        <a class="tab tab-lifted tab-active">Normal</a>
        <a class="tab tab-lifted">Normal</a>
      </div>
      <div class="tabs">
        <a class="tab tab-lg tab-lifted">Large</a>
        <a class="tab tab-lg tab-lifted tab-active">Large</a>
        <a class="tab tab-lg tab-lifted">Large</a>
      </div>
    </Wrapper>

  </div>
</template>


<script>
export default {
  head() {
    return {
      title: "daisyUI — Tailwind CSS tab component",
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Tailwind CSS tab component - Tailwind CSS tab examples'
        }
      ]
    }
  }
}
</script>
