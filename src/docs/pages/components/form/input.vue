<template>
  <div>
    <ClassTable v-bind:data="{
      components : [
        { class: 'form-control', desc: 'Container element' },
        { class: 'label', desc: 'For helper text' },
        { class: 'input', desc: 'For <input> element' },
      ],
      utilities : [
        { class: 'input-bordered', desc: 'Adds border to input' },
        { class: 'input-ghost', desc: 'Adds ghost style to checkbox' },
        { class: 'input-primary', desc: 'Adds `primary` color to input' },
        { class: 'input-secondary', desc: 'Adds `secondary` color to input' },
        { class: 'input-accent', desc: 'Adds `accent` color to input' },
        { class: 'input-info', desc: 'Adds `info` color to input' },
        { class: 'input-success', desc: 'Adds `success` color to input' },
        { class: 'input-warning', desc: 'Adds `warning` color to input' },
        { class: 'input-error', desc: 'Adds `error` color to input' },
        { class: 'input-lg', desc: 'Large size for input' },
        { class: 'input-md', desc: 'Medium (default) size for input' },
        { class: 'input-sm', desc: 'Small size for input' },
        { class: 'input-xs', desc: 'Extra small size for input' },
      ]
    }"/>
    <Wrapper
      title="input with border"
      classes="flex flex-col space-y-2 max-w-xs"
    >
      <FormControl>
        <label class="label">
          <span class="label-text">Username</span>
        </label>
        <Input
          class="input input-bordered"
          type="text"
          placeholder="username"
        />
      </FormControl>
    </Wrapper>
    <Wrapper
      title="input without border"
      classes="flex flex-col space-y-2 max-w-xs"
    >
      <div class="p-10 card bg-base-200">
        <FormControl>
          <label class="label">
            <span class="label-text">Username</span>
          </label>
          <Input class="input" type="text" placeholder="username" />
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
            <span class="label-text">Username</span>
          </label>
          <Input class="input input-ghost" type="text" placeholder="username" />
        </FormControl>
      </div>
    </Wrapper>

    <Wrapper
      title="input disabled"
      classes="flex flex-col space-y-2 max-w-xs"
    >
      <FormControl>
        <label class="label">
          <span class="label-text">Disabled input</span>
        </label>
        <Input
          class="input input-bordered"
          type="text"
          placeholder="username"
          disabled
        />
      </FormControl>
    </Wrapper>

    <Wrapper
      title="input helper texts"
      classes="flex flex-col space-y-2 max-w-xs"
    >
      <FormControl>
        <label class="label">
          <span class="label-text">Username</span>
          <a href="#" class="label-text-alt">
            Need help?
          </a>
        </label>
        <Input
          class="input input-bordered"
          type="text"
          placeholder="username"
        />
        <label class="label">
          <a href="#" class="label-text-alt">Forgot username?</a>
          <a href="#" class="label-text-alt">Are you sure?</a>
        </label>
      </FormControl>
    </Wrapper>
    <Wrapper
      title="input with brand colors"
      classes="flex flex-col space-y-2 max-w-xs"
    >
      <FormControl>
        <label class="label">
          <span class="label-text">Primary</span>
        </label>
        <Input
          class="input input-primary input-bordered"
          type="text"
          placeholder="username"
        />
      </FormControl>
      <FormControl>
        <label class="label">
          <span class="label-text">Secondary</span>
        </label>
        <Input
          class="input input-secondary input-bordered"
          type="text"
          placeholder="username"
        />
      </FormControl>
      <FormControl>
        <label class="label">
          <span class="label-text">Accent</span>
        </label>
        <Input
          class="input input-accent input-bordered"
          type="text"
          placeholder="username"
        />
      </FormControl>
    </Wrapper>
    <Wrapper title="input with state colors" classes="flex flex-col space-y-2 max-w-xs">
      <FormControl>
        <label class="label">
          <span class="label-text">Username</span>
        </label>
        <Input
          class="input input-info input-bordered"
          type="text"
          placeholder="username"
        />
        <label class="label">
          <span class="label-text-alt">Please enter data</span>
        </label>
      </FormControl>
      <FormControl>
        <label class="label">
          <span class="label-text">Username</span>
        </label>
        <Input
          class="input input-success input-bordered"
          type="text"
          placeholder="username"
        />
        <label class="label">
          <span class="label-text-alt">Data is valid</span>
        </label>
      </FormControl>
      <FormControl>
        <label class="label">
          <span class="label-text">Username</span>
        </label>
        <Input
          class="input input-warning input-bordered"
          type="text"
          placeholder="username"
        />
        <label class="label">
          <span class="label-text-alt"
            >Data must be more than 3 characters</span
          >
        </label>
      </FormControl>
      <FormControl>
        <label class="label">
          <span class="label-text">Username</span>
        </label>
        <Input
          class="input input-error input-bordered"
          type="text"
          placeholder="username"
        />
        <label class="label">
          <span class="label-text-alt">Data is incorrect</span>
        </label>
      </FormControl>
    </Wrapper>
    <Wrapper title="input sizes" classes="flex flex-col space-y-2 max-w-xs">
      <FormControl>
        <label class="label">
          <span class="label-text">Large</span>
        </label>
        <Input
          class="input input-lg input-bordered"
          type="text"
          placeholder="username"
        />
      </FormControl>
      <FormControl>
        <label class="label">
          <span class="label-text">Normal</span>
        </label>
        <Input
          class="input input-bordered"
          type="text"
          placeholder="username"
        />
      </FormControl>
      <FormControl>
        <label class="label">
          <span class="label-text">Small</span>
        </label>
        <Input
          class="input input-sm input-bordered"
          type="text"
          placeholder="username"
        />
      </FormControl>
      <FormControl>
        <label class="label">
          <span class="label-text">Tiny</span>
        </label>
        <Input
          class="input input-xs input-bordered"
          type="text"
          placeholder="username"
        />
      </FormControl>
    </Wrapper>
    <Wrapper
      title="with button"
      classes="flex flex-col space-y-2 max-w-xs"
    >
      <FormControl>
        <label class="label">
          <span class="label-text">connected</span>
        </label>
        <div class="relative">
          <Input
            class="w-full pr-16 input input-primary input-bordered"
            type="text"
            placeholder="Search"
          />
          <button class="absolute top-0 right-0 rounded-l-none btn btn-primary">go</button>
        </div>
      </FormControl>
      <FormControl>
        <label class="label">
          <span class="label-text">with space</span>
        </label>
        <div class="flex space-x-2">
          <Input
            class="w-full input input-primary input-bordered"
            type="text"
            placeholder="Search"
          />
          <button class="btn btn-primary">go</button>
        </div>
      </FormControl>
    </Wrapper>
  </div>
</template>


<script>
export default {
  head() {
    return {
      title: "daisyUI — Tailwind CSS text input field component",
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Tailwind CSS text input field component - Tailwind CSS text input field examples'
        }
      ]
    }
  }
}
</script>
