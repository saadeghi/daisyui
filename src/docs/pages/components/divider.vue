<template>
  <div>
    <Wrapper title="divider">
      <div class="flex flex-col w-full">
        <div class="grid h-20 card bg-base-300 rounded-box place-items-center">content</div>
        <div class="divider">OR</div>
        <div class="grid h-20 card bg-base-300 rounded-box place-items-center">content</div>
      </div>
    </Wrapper>
    <Wrapper title="divider vertical">
      <div class="flex flex-row w-full">
        <div class="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">content</div>
        <div class="divider divider-vertical">OR</div>
        <div class="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">content</div>
      </div>
    </Wrapper>
    <Wrapper title="divider with no text">
      <div class="flex flex-col w-full">
        <div class="grid h-20 card bg-base-300 rounded-box place-items-center">content</div>
        <div class="divider"></div>
        <div class="grid h-20 card bg-base-300 rounded-box place-items-center">content</div>
      </div>
    </Wrapper>
    <Wrapper title="divider vertical with no text">
      <div class="flex flex-row w-full">
        <div class="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">content</div>
        <div class="divider divider-vertical"></div>
        <div class="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">content</div>
      </div>
    </Wrapper>
  </div>
</template>
