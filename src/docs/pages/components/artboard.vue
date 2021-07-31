<template>
  <div>
    <ClassTable v-bind:data="{
      components : [
        { class: 'artboard', desc: 'Container element' },
      ],
      utilities : [
        { class: 'artboard-demo', desc: 'Adds shadow and radius. Puts items in center' },
        { class: 'phone-1', desc: 'Size 1' },
        { class: 'phone-2', desc: 'Size 2' },
        { class: 'phone-3', desc: 'Size 3' },
        { class: 'phone-4', desc: 'Size 4' },
        { class: 'phone-5', desc: 'Size 5' },
        { class: 'phone-6', desc: 'Size 6' },
        { class: 'horizontal', desc: 'shows horizontal view' },
      ]
    }"/>
    <Wrapper title="artboard - phone" classes="overflow-x-auto bg-base-200 p-10 rounded-box border border-base-content border-opacity-10">
      <div class="flex w-auto space-x-10 flex-nowrap">
        <div class="artboard phone-1 artboard-demo">
          phone-1
        </div>
        <div class="artboard phone-2 artboard-demo">
          phone-2
        </div>
        <div class="artboard phone-3 artboard-demo">
          phone-3
        </div>
        <div class="artboard phone-4 artboard-demo">
          phone-4
        </div>
        <div class="artboard phone-5 artboard-demo">
          phone-5
        </div>
        <div class="artboard phone-6 artboard-demo">
          phone-6
        </div>
      </div>
    </Wrapper>
    <Wrapper title="artboard - phone horizontal" classes="overflow-x-auto bg-base-200 p-4 rounded-box border border-base-content border-opacity-10">
      <div class="flex w-auto space-x-4 flex-nowrap">
        <div class="artboard phone-1 horizontal artboard-demo">
          phone-1
        </div>
        <div class="artboard phone-2 horizontal artboard-demo">
          phone-2
        </div>
        <div class="artboard phone-3 horizontal artboard-demo">
          phone-3
        </div>
        <div class="artboard phone-4 horizontal artboard-demo">
          phone-4
        </div>
        <div class="artboard phone-5 horizontal artboard-demo">
          phone-5
        </div>
        <div class="artboard phone-6 horizontal artboard-demo">
          phone-6
        </div>
      </div>
    </Wrapper>
  </div>
</template>


<script>
  export default {
    head() {
      return {
        title: "daisyUI — Tailwind CSS artboard component",
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: 'Tailwind CSS artboard component - Tailwind CSS artboard examples'
          }
        ]
      }
    }
  }
</script>
