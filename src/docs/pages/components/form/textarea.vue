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
  </div>
</template>
