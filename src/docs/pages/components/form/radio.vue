<template>
  <div>
    <ClassTable v-bind:data="{
      components : [
        { class: 'form-control', desc: 'Container element' },
        { class: 'radio', desc: 'For radio input' },
      ],
      utilities : [
        { class: 'radio-primary', desc: 'Adds `primary` to radio' },
        { class: 'radio-secondary', desc: 'Adds `secondary` to radio' },
        { class: 'radio-accent', desc: 'Adds `accent` to radio' },
        { class: 'radio-lg', desc: 'Large radio' },
        { class: 'radio-md', desc: 'Medium radio (default)' },
        { class: 'radio-sm', desc: 'Small radio' },
        { class: 'radio-xs', desc: 'Extra small radio' },
      ]
    }"/>
    <Wrapper title="input" classes="flex flex-col space-y-2 max-w-xs">
      <div class="p-6 card bordered">
        <FormControl>
          <label class="cursor-pointer label">
            <span class="label-text">Neutral</span>
            <Radio name="opt" class="" />
          </label>
        </FormControl>

        <FormControl>
          <label class="cursor-pointer label">
            <span class="label-text">Primary</span>
            <Radio name="opt" classes="radio-primary" />
          </label>
        </FormControl>

        <FormControl>
          <label class="cursor-pointer label">
            <span class="label-text">Secondary</span>
            <Radio name="opt" classes="radio-secondary" />
          </label>
        </FormControl>

        <FormControl>
          <label class="cursor-pointer label">
            <span class="label-text">Accent</span>
            <Radio name="opt" classes="radio-accent" />
          </label>
        </FormControl>

        <FormControl>
          <label class="label">
            <span class="label-text">Disabled</span>
            <input type="radio" name="opt" checked="checked" class="radio" value="" disabled>
          </label>
        </FormControl>
      </div>
    </Wrapper>


    <Wrapper title="radio sizes" classes="flex flex-col space-y-2 max-w-xs">
      <Radio classes="radio-xs" />
      <Radio classes="radio-sm" />
      <Radio classes="radio-md" />
      <Radio classes="radio-lg" />
    </Wrapper>

  </div>
</template>


<script>
export default {
  head() {
    return {
      title: "daisyUI — Tailwind CSS radio button component",
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Tailwind CSS radio button component - Tailwind CSS radio button examples'
        }
      ]
    }
  }
}
</script>
