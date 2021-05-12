<template>
  <div>
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
      title="input brand colors"
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
    <Wrapper title="input states" classes="flex flex-col space-y-2 max-w-xs">
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
          <button class="absolute right-0 rounded-l-none btn btn-primary">go</button>
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
