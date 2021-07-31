<template>
  <div>
    <ClassTable v-bind:data="{
      components : [
        { class: 'form-control', desc: 'Container element' },
        { class: 'toggle', desc: 'For checkbox' },
      ],
      utilities : [
        { class: 'toggle-primary', desc: 'Adds `primary` to toggle' },
        { class: 'toggle-secondary', desc: 'Adds `secondary` to toggle' },
        { class: 'toggle-accent', desc: 'Adds `accent` to toggle' },
        { class: 'toggle-lg', desc: 'Large toggle' },
        { class: 'toggle-md', desc: 'Medium toggle (default)' },
        { class: 'toggle-sm', desc: 'Small toggle' },
        { class: 'toggle-xs', desc: 'Extra small toggle' },
      ]
    }"/>
    <Wrapper title="toggle" classes="flex flex-col space-y-2 max-w-xs">
      <Toggle/>
    </Wrapper>
    <Wrapper title="toggle with label and container" classes="flex flex-col space-y-2 max-w-xs">
      <div class="p-6 card bordered">
        <FormControl>
          <label class="cursor-pointer label">
            <span class="label-text">Remember me</span>
            <Toggle class="" />
          </label>
        </FormControl>
      </div>
    </Wrapper>
    <Wrapper title="toggle primary" classes="flex flex-col space-y-2 max-w-xs">
      <div class="p-6 card bordered">
        <FormControl>
          <label class="cursor-pointer label">
            <span class="label-text">Remember me</span>
            <Toggle classes="toggle-primary" />
          </label>
        </FormControl>
      </div>
    </Wrapper>
    <Wrapper title="toggle secondary" classes="flex flex-col space-y-2 max-w-xs">
      <div class="p-6 card bordered">
        <FormControl>
          <label class="cursor-pointer label">
            <span class="label-text">Remember me</span>
            <Toggle classes="toggle-secondary" />
          </label>
        </FormControl>
      </div>
    </Wrapper>
    <Wrapper title="toggle accent" classes="flex flex-col space-y-2 max-w-xs">
      <div class="p-6 card bordered">
        <FormControl>
          <label class="cursor-pointer label">
            <span class="label-text">Remember me</span>
            <Toggle classes="toggle-accent" />
          </label>
        </FormControl>
      </div>
    </Wrapper>
    <Wrapper title="toggle sizes" classes="flex flex-col space-y-2 max-w-xs">
      <Toggle classes="toggle-xs" />
      <Toggle classes="toggle-sm" />
      <Toggle classes="toggle-md" />
      <Toggle classes="toggle-lg" />
    </Wrapper>
    <Wrapper title="Disabled" classes="flex flex-col space-y-2 max-w-xs">
      <div class="p-6 card bordered">
        <FormControl>
          <label class="label">
            <span class="label-text">Unchecked + Disabled</span>
            <input type="checkbox" class="toggle" :class="classes" disabled="disabled" />
          </label>
        </FormControl>
        <FormControl>
          <label class="label">
            <span class="label-text">Checked + Disabled</span>
            <input type="checkbox" class="toggle" :class="classes" checked disabled="disabled" />
          </label>
        </FormControl>
      </div>
    </Wrapper>
  </div>
</template>


<script>
export default {
  head() {
    return {
      title: "daisyUI — Tailwind CSS toggle component",
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Tailwind CSS switch toggle component - Tailwind CSS switch toggle examples'
        }
      ]
    }
  }
}
</script>
