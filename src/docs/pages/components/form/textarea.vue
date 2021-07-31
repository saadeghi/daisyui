<template>
  <div>
    <ClassTable v-bind:data="{
      components : [
        { class: 'form-control', desc: 'Container element' },
        { class: 'label', desc: 'For helper text' },
        { class: 'textarea', desc: 'For <textarea> element' },
      ],
      utilities : [
        { class: 'textarea-bordered', desc: 'Adds border to textarea' },
        { class: 'textarea-ghost', desc: 'Adds ghost style to checkbox' },
        { class: 'textarea-primary', desc: 'Adds `primary` color to textarea' },
        { class: 'textarea-secondary', desc: 'Adds `secondary` color to textarea' },
        { class: 'textarea-accent', desc: 'Adds `accent` color to textarea' },
        { class: 'textarea-info', desc: 'Adds `info` color to textarea' },
        { class: 'textarea-success', desc: 'Adds `success` color to textarea' },
        { class: 'textarea-warning', desc: 'Adds `warning` color to textarea' },
        { class: 'textarea-error', desc: 'Adds `error` color to textarea' },
      ]
    }"/>
    <Wrapper
      title="Textarea with border"
      classes="flex flex-col space-y-2 max-w-xs"
    >
      <FormControl>
        <label class="label">
          <span class="label-text">Your bio</span>
        </label>
        <Textarea
          class="h-24 textarea-bordered"
          placeholder="Bio"
        >
        </Textarea>
      </FormControl>
    </Wrapper>
    <Wrapper
      title="Textarea without border"
      classes="flex flex-col space-y-2 max-w-xs"
    >
      <div class="p-10 card bg-base-200">
        <FormControl>
          <label class="label">
            <span class="label-text">Your bio</span>
          </label>
          <Textarea class="h-24" placeholder="Bio" /></Textarea>
        </FormControl>
      </div>
    </Wrapper>
    <Wrapper
      title="input ghost (no background)"
      classes="flex flex-col space-y-2 max-w-xs"
    >
      <div class="p-10 card bg-base-200">
        <FormControl>
          <label class="label">
            <span class="label-text">Your bio</span>
          </label>
          <Textarea class="h-24 textarea-ghost" placeholder="Bio" /></Textarea>
        </FormControl>
      </div>
    </Wrapper>
    <Wrapper
      title="Textarea disabled"
      classes="flex flex-col space-y-2 max-w-xs"
    >
      <FormControl>
        <label class="label">
          <span class="label-text">Disabled</span>
        </label>
        <Textarea
          class="h-24 textarea-bordered"
          placeholder="Disabled"
          disabled="disabled"
        >
        </Textarea>
      </FormControl>
    </Wrapper>
    <Wrapper
      title="Textarea with brand colors"
      classes="flex flex-col space-y-2 max-w-xs"
    >
      <FormControl>
        <label class="label">
          <span class="label-text">primary</span>
        </label>
        <Textarea
          class="h-24 textarea-bordered textarea-primary"
          placeholder="Bio"
        >
        </Textarea>
      </FormControl>
      <FormControl>
        <label class="label">
          <span class="label-text">secondary</span>
        </label>
        <Textarea
          class="h-24 textarea-bordered textarea-secondary"
          placeholder="Bio"
        >
        </Textarea>
      </FormControl>
      <FormControl>
        <label class="label">
          <span class="label-text">accent</span>
        </label>
        <Textarea
          class="h-24 textarea-bordered textarea-accent"
          placeholder="Bio"
        >
        </Textarea>
      </FormControl>
    </Wrapper>
    <Wrapper
      title="Textarea with state colors"
      classes="flex flex-col space-y-2 max-w-xs"
    >
      <FormControl>
        <label class="label">
          <span class="label-text">info</span>
        </label>
        <Textarea
          class="h-24 textarea-bordered textarea-info"
          placeholder="Bio"
        >
        </Textarea>
      </FormControl>
      <FormControl>
        <label class="label">
          <span class="label-text">success</span>
        </label>
        <Textarea
          class="h-24 textarea-bordered textarea-success"
          placeholder="Bio"
        >
        </Textarea>
      </FormControl>
      <FormControl>
        <label class="label">
          <span class="label-text">warning</span>
        </label>
        <Textarea
          class="h-24 textarea-bordered textarea-warning"
          placeholder="Bio"
        >
        </Textarea>
      </FormControl>
      <FormControl>
        <label class="label">
          <span class="label-text">error</span>
        </label>
        <Textarea
          class="h-24 textarea-bordered textarea-error"
          placeholder="Bio"
        >
        </Textarea>
      </FormControl>
    </Wrapper>
  </div>
</template>


<script>
export default {
  head() {
    return {
      title: "daisyUI — Tailwind CSS textarea component",
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Tailwind CSS textarea component - Tailwind CSS textarea examples'
        }
      ]
    }
  }
}
</script>
