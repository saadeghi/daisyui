<template>
  <div>
    <ClassTable v-bind:data="{
      components : [
        { class: 'mockup-phone', desc: 'Container element' },
      ]
    }"/>
    <Wrapper title="iPhone mockup" classes="max-w-md">
      <div class="mockup-phone">
        <div class="camera"></div>
        <div class="display">
          <div class="artboard phone-1 artboard-demo">
            Hi.
          </div>
        </div>
      </div>
    </Wrapper>
    <Wrapper title="iPhone mockup with color" classes="max-w-md">
      <div class="mockup-phone border-primary">
        <div class="camera"></div>
        <div class="display">
          <div class="artboard phone-1 artboard-demo">
            Hi.
          </div>
        </div>
      </div>
    </Wrapper>
  </div>
</template>
