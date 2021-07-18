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
