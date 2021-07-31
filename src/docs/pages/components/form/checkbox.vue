<template>
  <div>
    <ClassTable v-bind:data="{
      components : [
        { class: 'form-control', desc: 'Container element' },
        { class: 'checkbox', desc: 'For checkbox' },
      ],
      utilities : [
        { class: 'checkbox-primary', desc: 'Adds `primary` to checkbox' },
        { class: 'checkbox-secondary', desc: 'Adds `secondary` to checkbox' },
        { class: 'checkbox-accent', desc: 'Adds `accent` to checkbox' },
        { class: 'checkbox-lg', desc: 'Large checkbox' },
        { class: 'checkbox-md', desc: 'Medium checkbox (default)' },
        { class: 'checkbox-sm', desc: 'Small checkbox' },
        { class: 'checkbox-xs', desc: 'Extra small checkbox' },
      ]
    }"/>
    <Wrapper title="checkbox" classes="flex flex-col space-y-2 max-w-xs">
      <Checkbox/>
    </Wrapper>
    <Wrapper title="checkbox with label and container" classes="flex flex-col space-y-2 max-w-xs">
      <div class="p-6 card bordered">
        <FormControl>
          <label class="cursor-pointer label">
            <span class="label-text">Remember me</span>
            <Checkbox class="" />
          </label>
        </FormControl>
      </div>
    </Wrapper>
    <Wrapper title="checkbox primary" classes="flex flex-col space-y-2 max-w-xs">
      <div class="p-6 card bordered">
        <FormControl>
          <label class="cursor-pointer label">
            <span class="label-text">Remember me</span>
            <Checkbox classes="checkbox-primary" />
          </label>
        </FormControl>
      </div>
    </Wrapper>
    <Wrapper title="checkbox secondary" classes="flex flex-col space-y-2 max-w-xs">
      <div class="p-6 card bordered">
        <FormControl>
          <label class="cursor-pointer label">
            <span class="label-text">Remember me</span>
            <Checkbox classes="checkbox-secondary" />
          </label>
        </FormControl>
      </div>
    </Wrapper>
    <Wrapper title="checkbox accent" classes="flex flex-col space-y-2 max-w-xs">
      <div class="p-6 card bordered">
        <FormControl>
          <label class="cursor-pointer label">
            <span class="label-text">Remember me</span>
            <Checkbox classes="checkbox-accent" />
          </label>
        </FormControl>
      </div>
    </Wrapper>
    <Wrapper title="checkbox sizes" classes="flex flex-col space-y-2 max-w-xs">
      <Checkbox classes="checkbox-xs" />
      <Checkbox classes="checkbox-sm" />
      <Checkbox classes="checkbox-md" />
      <Checkbox classes="checkbox-lg" />
    </Wrapper>
    <Wrapper title="checkbox disabled" classes="flex flex-col space-y-2 max-w-xs">
      <div class="p-6 card bordered">
        <FormControl>
          <label class="label">
            <span class="label-text">Disabled + unchecked</span>
            <input type="checkbox" class="checkbox" disabled>
          </label>
        </FormControl>
        <FormControl>
          <label class="label">
            <span class="label-text">Disabled + checked</span>
            <input type="checkbox" checked="checked" class="checkbox" disabled>
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
      title: "daisyUI — Tailwind CSS checkbox component",
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Tailwind CSS checkbox component - Tailwind CSS checkbox examples'
        }
      ]
    }
  }
}
</script>
