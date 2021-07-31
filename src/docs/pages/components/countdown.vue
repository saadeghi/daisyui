<template>
  <div>
    <ClassTable v-bind:data="{
      components : [
        { class: 'countdown', desc: 'Container element' },
      ],
    }"/>
    <p class="my-4 text-base-content text-opacity-60">
      This countdown component just gives you a transition effect of changing
      numbers.
      <br />You still need to handle the values using JavaScript.
    </p>
    <p class="mb-4 text-base-content text-opacity-60">
      set your number value in <span class="badge badge-outline">--value</span>
      variable (max value:99) <br />and whenever you change the number, it changes with swipe
      effect like this:
      <span class="countdown">
        <span :style="{ '--value': countDown }"></span>
      </span>
    </p>

    <Wrapper title="simple text">
      <span class="countdown">
        <span :style="{ '--value': countDown }"></span>
      </span>
    </Wrapper>

    <Wrapper title="large text">
      <span class="font-mono text-6xl countdown">
        <span :style="{ '--value': countDown }"></span>
      </span>
    </Wrapper>

    <Wrapper title="clock countdown">
      <span class="font-mono text-2xl countdown">
        <span style="--value:10"></span>h
        <span style="--value:24"></span>m
        <span :style="{ '--value': countDown }"></span>s
      </span>
    </Wrapper>

    <Wrapper title="clock countdown with colons">
      <span class="font-mono text-2xl countdown">
        <span style="--value:10"></span>: <span style="--value:24"></span>:
        <span :style="{ '--value': countDown }"></span>
      </span>
    </Wrapper>

    <Wrapper title="large text with labels">
      <div class="grid grid-flow-col gap-5 place-items-end auto-cols-max">
        <div>
          <span class="font-mono text-4xl countdown">
            <span style="--value:15"></span>
          </span>
          days
        </div>
        <div>
          <span class="font-mono text-4xl countdown">
            <span style="--value:10"></span>
          </span>
          hours
        </div>
        <div>
          <span class="font-mono text-4xl countdown">
            <span style="--value:24"></span>
          </span>
          min
        </div>
        <div>
          <span class="font-mono text-4xl countdown">
            <span :style="{ '--value': countDown }"></span>
          </span>
          sec
        </div>
      </div>
    </Wrapper>
    <Wrapper title="large text with labels under">
      <div class="grid grid-flow-col gap-5 text-center auto-cols-max">
        <div class="flex flex-col">
          <span class="font-mono text-5xl countdown">
            <span style="--value:15"></span>
          </span>
          days
        </div>
        <div class="flex flex-col">
          <span class="font-mono text-5xl countdown">
            <span style="--value:10"></span>
          </span>
          hours
        </div>
        <div class="flex flex-col">
          <span class="font-mono text-5xl countdown">
            <span style="--value:24"></span>
          </span>
          min
        </div>
        <div class="flex flex-col">
          <span class="font-mono text-5xl countdown">
            <span :style="{ '--value': countDown }"></span>
          </span>
          sec
        </div>
      </div>
    </Wrapper>
    <Wrapper title="box with labels under">
      <div class="grid grid-flow-col gap-5 text-center auto-cols-max">
        <div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
          <span class="font-mono text-5xl countdown">
            <span style="--value:15"></span>
          </span>
          days
        </div>
        <div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
          <span class="font-mono text-5xl countdown">
            <span style="--value:10"></span>
          </span>
          hours
        </div>
        <div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
          <span class="font-mono text-5xl countdown">
            <span style="--value:24"></span>
          </span>
          min
        </div>
        <div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
          <span class="font-mono text-5xl countdown">
            <span :style="{ '--value': countDown }"></span>
          </span>
          sec
        </div>
      </div>
    </Wrapper>
  </div>
</template>

<script>
export default {
  data() {
    return {
      countDown: 60
    };
  },

  watch: {
    countDown: {
      handler(value) {
        if (value > 0) {
          setTimeout(() => {
            this.countDown--;
          }, 1000);
        }
      },
      immediate: true // This ensures the watcher is triggered upon creation
    }
  },
  head() {
    return {
      title: "daisyUI — Tailwind CSS countdown component",
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Tailwind CSS countdown component - Tailwind CSS countdown examples'
        }
      ]
    }
  }
}
</script>
