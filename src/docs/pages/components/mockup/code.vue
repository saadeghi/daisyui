<template>
  <div>
    <ClassTable v-bind:data="{
      components : [
        { class: 'mockup-code', desc: 'Container element' },
      ]
    }"/>
    <Wrapper title="code mockup" classes="max-w-md">
      <div class="mockup-code">
        <pre data-prefix="$"><code>npm i daisyui</code></pre>
      </div>
    </Wrapper>
    <Wrapper title="code mockup multiline" classes="max-w-md">
      <div class="mockup-code">
        <pre data-prefix="$"><code>npm i daisyui</code></pre>
        <pre data-prefix=">" class="text-warning"><code>installing...</code></pre>
        <pre data-prefix=">" class="text-success"><code>Done!</code></pre>
      </div>
    </Wrapper>
    <Wrapper title="with numbers and line highlight" classes="max-w-md">
      <div class="mockup-code">
        <pre data-prefix="1"><code>npm i daisyui</code></pre>
        <pre data-prefix="2"><code>installing...</code></pre>
        <pre data-prefix="3" class="bg-warning text-neutral"><code>Error!</code></pre>
      </div>
    </Wrapper>
    <Wrapper title="code mockup long text scroll" classes="max-w-md">
      <div class="mockup-code">
        <pre data-prefix="~"><code>Magnam dolore beatae necessitatibus nemo ipsum itaque sit. Et porro quae qui et et dolore ratione.</code></pre>
      </div>
    </Wrapper>
    <Wrapper title="code mockup without prefix" classes="max-w-md">
      <div class="mockup-code">
        <pre><code>without prefix</code></pre>
      </div>
    </Wrapper>
    <Wrapper title="code with colors" classes="max-w-md">
      <div class="mockup-code bg-primary text-primary-content">
        <pre><code>can be any color!</code></pre>
      </div>
    </Wrapper>
  </div>
</template>


<script>
export default {
  head() {
    return {
      title: "daisyUI — Tailwind CSS code section component",
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Tailwind CSS code section component - Tailwind CSS code section examples'
        }
      ]
    }
  }
}
</script>
