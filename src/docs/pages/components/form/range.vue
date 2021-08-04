<template>
  <div>
    <ClassTable v-bind:data="{
      components : [
        { class: 'range', desc: 'Range input' },
      ],
      utilities: [
        { class: 'range-primary', desc: 'primary color' },
        { class: 'range-secondary', desc: 'secondary color' },
        { class: 'range-accent', desc: 'accent color' },
        { class: 'range-lg', desc: 'Large range' },
        { class: 'range-md', desc: 'Medium range (default)' },
        { class: 'range-sm', desc: 'Small range' },
        { class: 'range-xs', desc: 'Extra small range' },
      ]
    }"/>

    <Wrapper title="range" classes="flex flex-col max-w-xs space-y-4">
      <input type="range" class="range" max="100" value="40" />
      <input type="range" class="range range-primary" max="100" value="50" />
      <input type="range" class="range range-secondary" max="100" value="60" />
      <input type="range" class="range range-accent" max="100" value="70" />
    </Wrapper>

    <Wrapper title="range sizes" classes="flex flex-col max-w-xs space-y-4">
      <input type="range" class="range range-xs" max="100" value="40" />
      <input type="range" class="range range-sm" max="100" value="50" />
      <input type="range" class="range range-md" max="100" value="60" />
      <input type="range" class="range range-lg" max="100" value="70" />
    </Wrapper>

  </div>
</template>


<script>
export default {
  head() {
    return {
      title: "daisyUI — Tailwind CSS range slider component",
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Tailwind CSS range  slider component - Tailwind CSS range slider examples'
        }
      ]
    }
  }
}
</script>
