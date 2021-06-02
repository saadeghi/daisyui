<template>
  <div>
    <ClassTable v-bind:data="{
      components : [
        { class: 'mockup-window', desc: 'Container element' },
      ]
    }"/>
    <Wrapper title="window mockup with border" classes="max-w-md">
      <div class="border mockup-window border-base-300">
        <div class="flex justify-center px-4 py-16 border-t border-base-300">
          Hello!
        </div>
      </div>
    </Wrapper>
    <Wrapper title="window mockup with bg color" classes="max-w-md">
      <div class="mockup-window bg-base-300">
        <div class="flex justify-center px-4 py-16 bg-base-200">
          Hello!
        </div>
      </div>
    </Wrapper>
  </div>
</template>
