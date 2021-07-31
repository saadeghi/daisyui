<template>
  <div>
    <ClassTable v-bind:data="{
      components : [
        { class: 'form-control', desc: 'Container element' },
        { class: 'label', desc: 'For helper text' },
        { class: 'select', desc: 'For <select> element' },
      ],
      utilities : [
        { class: 'select-bordered', desc: 'Adds border to select' },
        { class: 'select-ghost', desc: 'Adds ghost style to checkbox' },
        { class: 'select-primary', desc: 'Adds `primary` color to select' },
        { class: 'select-secondary', desc: 'Adds `secondary` color to select' },
        { class: 'select-accent', desc: 'Adds `accent` color to select' },
        { class: 'select-info', desc: 'Adds `info` color to select' },
        { class: 'select-success', desc: 'Adds `success` color to select' },
        { class: 'select-warning', desc: 'Adds `warning` color to select' },
        { class: 'select-error', desc: 'Adds `error` color to select' },
        { class: 'select-lg', desc: 'Large size for select' },
        { class: 'select-md', desc: 'Medium (default) size for select' },
        { class: 'select-sm', desc: 'Small size for select' },
        { class: 'select-xs', desc: 'Extra small size for select' },
      ]
    }"/>

    <Wrapper classes="flex flex-col space-y-2" title="select">
      <Select classes="select-bordered w-full max-w-xs">
        <option disabled selected>Choose your superpower</option>
        <option>telekinesis</option>
        <option>time travel</option>
        <option>invisibility</option>
      </Select>
    </Wrapper>

    <Wrapper classes="flex flex-col space-y-2" title="select primary">
      <Select classes="select-bordered select-primary w-full max-w-xs">
        <option disabled selected>Choose your superpower</option>
        <option>telekinesis</option>
        <option>time travel</option>
        <option>invisibility</option>
      </Select>
    </Wrapper>

    <Wrapper classes="flex flex-col space-y-2" title="select secondary">
      <Select classes="select-bordered select-secondary w-full max-w-xs">
        <option disabled selected>Choose your superpower</option>
        <option>telekinesis</option>
        <option>time travel</option>
        <option>invisibility</option>
      </Select>
    </Wrapper>

    <Wrapper classes="flex flex-col space-y-2" title="select accent">
      <Select classes="select-bordered select-accent w-full max-w-xs">
        <option disabled selected>Choose your superpower</option>
        <option>telekinesis</option>
        <option>time travel</option>
        <option>invisibility</option>
      </Select>
    </Wrapper>

    <Wrapper classes="flex flex-col space-y-2" title="select info">
      <Select classes="select-bordered select-info w-full max-w-xs">
        <option disabled selected>Choose your superpower</option>
        <option>telekinesis</option>
        <option>time travel</option>
        <option>invisibility</option>
      </Select>
    </Wrapper>

    <Wrapper classes="flex flex-col space-y-2" title="select success">
      <Select classes="select-bordered select-success w-full max-w-xs">
        <option disabled selected>Choose your superpower</option>
        <option>telekinesis</option>
        <option>time travel</option>
        <option>invisibility</option>
      </Select>
    </Wrapper>

    <Wrapper classes="flex flex-col space-y-2" title="select warning">
      <Select classes="select-bordered select-warning w-full max-w-xs">
        <option disabled selected>Choose your superpower</option>
        <option>telekinesis</option>
        <option>time travel</option>
        <option>invisibility</option>
      </Select>
    </Wrapper>

    <Wrapper classes="flex flex-col space-y-2" title="select error">
      <Select classes="select-bordered select-error w-full max-w-xs">
        <option disabled selected>Choose your superpower</option>
        <option>telekinesis</option>
        <option>time travel</option>
        <option>invisibility</option>
      </Select>
    </Wrapper>




    <Wrapper classes="flex flex-col space-y-2" title="select with labels">

      <FormControl class="w-full max-w-xs">
        <label class="label">
          <span class="label-text">Choose your superpower</span>
          <a href="#" class="label-text-alt">
            Pick wisely
          </a>
        </label>
        <Select classes="select-bordered w-full">
          <option disabled selected>Choose your superpower</option>
          <option>telekinesis</option>
          <option>time travel</option>
          <option>invisibility</option>
        </Select>
        <label class="label">
          <a href="#" class="label-text-alt">Cant pick?</a>
          <a href="#" class="label-text-alt">Need hint?</a>
        </label>
      </FormControl>



    <Wrapper classes="flex flex-col space-y-2" title="select sizes">
      <Select classes="select-bordered select-lg w-full max-w-xs">
        <option disabled selected>Large</option>
        <option>telekinesis</option>
        <option>time travel</option>
        <option>invisibility</option>
      </Select>
      <Select classes="select-bordered w-full max-w-xs">
        <option disabled selected>Normal</option>
        <option>telekinesis</option>
        <option>time travel</option>
        <option>invisibility</option>
      </Select>
      <Select classes="select-bordered select-sm w-full max-w-xs">
        <option disabled selected>Small</option>
        <option>telekinesis</option>
        <option>time travel</option>
        <option>invisibility</option>
      </Select>
      <Select classes="select-bordered select-xs w-full max-w-xs">
        <option disabled selected>Tiny</option>
        <option>telekinesis</option>
        <option>time travel</option>
        <option>invisibility</option>
      </Select>
    </Wrapper>


    <Wrapper classes="flex flex-col space-y-2" title="select diabled">
      <Select classes="select-bordered w-full max-w-xs" disabled>
        <option disabled selected>Choose your superpower</option>
        <option>telekinesis</option>
        <option>time travel</option>
        <option>invisibility</option>
      </Select>
    </Wrapper>

    </Wrapper>
  </div>
</template>


<script>
export default {
  head() {
    return {
      title: "daisyUI — Tailwind CSS select menu component",
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Tailwind CSS select menu component - Tailwind CSS select option examples'
        }
      ]
    }
  }
}
</script>
