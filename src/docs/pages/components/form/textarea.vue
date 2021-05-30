<template>
  <div>
    <Wrapper
      title="Textarea with border"
      classes="flex flex-col space-y-2 max-w-xs"
    >
      <FormControl>
        <label class="label">
          <span class="label-text">Your bio</span>
        </label>
        <Textarea
          class="h-24 textarea textarea-bordered"
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
          <Textarea class="h-24 textarea" placeholder="Bio" /></Textarea>
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
          <Textarea class="h-24 textarea textarea-ghost" placeholder="Bio" /></Textarea>
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
          class="h-24 textarea textarea-bordered"
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
          class="h-24 textarea textarea-bordered textarea-primary"
          placeholder="Bio"
        >
        </Textarea>
      </FormControl>
      <FormControl>
        <label class="label">
          <span class="label-text">secondary</span>
        </label>
        <Textarea
          class="h-24 textarea textarea-bordered textarea-secondary"
          placeholder="Bio"
        >
        </Textarea>
      </FormControl>
      <FormControl>
        <label class="label">
          <span class="label-text">accent</span>
        </label>
        <Textarea
          class="h-24 textarea textarea-bordered textarea-accent"
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
          class="h-24 textarea textarea-bordered textarea-info"
          placeholder="Bio"
        >
        </Textarea>
      </FormControl>
      <FormControl>
        <label class="label">
          <span class="label-text">success</span>
        </label>
        <Textarea
          class="h-24 textarea textarea-bordered textarea-success"
          placeholder="Bio"
        >
        </Textarea>
      </FormControl>
      <FormControl>
        <label class="label">
          <span class="label-text">warning</span>
        </label>
        <Textarea
          class="h-24 textarea textarea-bordered textarea-warning"
          placeholder="Bio"
        >
        </Textarea>
      </FormControl>
      <FormControl>
        <label class="label">
          <span class="label-text">error</span>
        </label>
        <Textarea
          class="h-24 textarea textarea-bordered textarea-error"
          placeholder="Bio"
        >
        </Textarea>
      </FormControl>
    </Wrapper>
  </div>
</template>
