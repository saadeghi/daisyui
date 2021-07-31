<template>
  <div>
    <ClassTable v-bind:data="{
      components : [
        { class: 'progress', desc: 'Progress element' },
      ],
      utilities : [
        { class: 'progress-primary', desc: 'Adds `primary` color' },
        { class: 'progress-secondary', desc: 'Adds `secondary` color' },
        { class: 'progress-accent', desc: 'Adds `accent` color' },
        { class: 'progress-info', desc: 'Adds `info` color' },
        { class: 'progress-success', desc: 'Adds `success` color' },
        { class: 'progress-warning', desc: 'Adds `warning` color' },
        { class: 'progress-error', desc: 'Adds `error` color' },
      ]
    }"/>
    <Wrapper title="progress" classes="flex flex-col">
      <div class="p-6 space-y-2 artboard phone">
        <Progress value="0" max="100"></Progress>
        <Progress value="10" max="100"></Progress>
        <Progress value="40" max="100"></Progress>
        <Progress value="70" max="100"></Progress>
        <Progress value="100" max="100"></Progress>
      </div>
    </Wrapper>
    <Wrapper title="progress primary" classes="flex flex-col">
      <div class="p-6 space-y-2 artboard phone">
        <Progress class="progress-primary" value="0" max="100"></Progress>
        <Progress class="progress-primary" value="10" max="100"></Progress>
        <Progress class="progress-primary" value="40" max="100"></Progress>
        <Progress class="progress-primary" value="70" max="100"></Progress>
        <Progress class="progress-primary" value="100" max="100"></Progress>
      </div>
    </Wrapper>
    <Wrapper title="progress secondary" classes="flex flex-col">
      <div class="p-6 space-y-2 artboard phone">
        <Progress class="progress-secondary" value="0" max="100"></Progress>
        <Progress class="progress-secondary" value="10" max="100"></Progress>
        <Progress class="progress-secondary" value="40" max="100"></Progress>
        <Progress class="progress-secondary" value="70" max="100"></Progress>
        <Progress class="progress-secondary" value="100" max="100"></Progress>
      </div>
    </Wrapper>
    <Wrapper title="progress accent" classes="flex flex-col">
      <div class="p-6 space-y-2 artboard phone">
        <Progress class="progress-accent" value="0" max="100"></Progress>
        <Progress class="progress-accent" value="10" max="100"></Progress>
        <Progress class="progress-accent" value="40" max="100"></Progress>
        <Progress class="progress-accent" value="70" max="100"></Progress>
        <Progress class="progress-accent" value="100" max="100"></Progress>
      </div>
    </Wrapper>
    <Wrapper title="progress info" classes="flex flex-col">
      <div class="p-6 space-y-2 artboard phone">
        <Progress class="progress-info" value="0" max="100"></Progress>
        <Progress class="progress-info" value="10" max="100"></Progress>
        <Progress class="progress-info" value="40" max="100"></Progress>
        <Progress class="progress-info" value="70" max="100"></Progress>
        <Progress class="progress-info" value="100" max="100"></Progress>
      </div>
    </Wrapper>
    <Wrapper title="progress success" classes="flex flex-col">
      <div class="p-6 space-y-2 artboard phone">
        <Progress class="progress-success" value="0" max="100"></Progress>
        <Progress class="progress-success" value="10" max="100"></Progress>
        <Progress class="progress-success" value="40" max="100"></Progress>
        <Progress class="progress-success" value="70" max="100"></Progress>
        <Progress class="progress-success" value="100" max="100"></Progress>
      </div>
    </Wrapper>
    <Wrapper title="progress warning" classes="flex flex-col">
      <div class="p-6 space-y-2 artboard phone">
        <Progress class="progress-warning" value="0" max="100"></Progress>
        <Progress class="progress-warning" value="10" max="100"></Progress>
        <Progress class="progress-warning" value="40" max="100"></Progress>
        <Progress class="progress-warning" value="70" max="100"></Progress>
        <Progress class="progress-warning" value="100" max="100"></Progress>
      </div>
    </Wrapper>
    <Wrapper title="progress error" classes="flex flex-col">
      <div class="p-6 space-y-2 artboard phone">
        <Progress class="progress-error" value="0" max="100"></Progress>
        <Progress class="progress-error" value="10" max="100"></Progress>
        <Progress class="progress-error" value="40" max="100"></Progress>
        <Progress class="progress-error" value="70" max="100"></Progress>
        <Progress class="progress-error" value="100" max="100"></Progress>
      </div>
    </Wrapper>
  </div>
</template>


<script>
export default {
  head() {
    return {
      title: "daisyUI — Tailwind CSS progress bar component",
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Tailwind CSS progress bar component - Tailwind CSS progress bar examples'
        }
      ]
    }
  }
}
</script>
