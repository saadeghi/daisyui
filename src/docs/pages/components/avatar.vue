<template>
  <div>
    <Wrapper title="avatar" classes="flex items-center space-x-8 flex-wrap">
      <Avatar classes="mb-8 rounded-btn w-32 h-32">
        <img src="https://i.pravatar.cc/500?img=32" />
      </Avatar>
      <Avatar classes="mb-8 rounded-btn w-24 h-24">
        <img src="https://i.pravatar.cc/500?img=32" />
      </Avatar>
      <Avatar classes="mb-8 rounded-btn w-16 h-16">
        <img src="https://i.pravatar.cc/500?img=32" />
      </Avatar>
      <Avatar classes="mb-8 rounded-btn w-10 h-10">
        <img src="https://i.pravatar.cc/500?img=32" />
      </Avatar>
    </Wrapper>

    <Wrapper title="avatar circle" classes="flex items-center space-x-8 flex-wrap">
      <Avatar classes="mb-8 rounded-full w-32 h-32">
        <img src="https://i.pravatar.cc/500?img=32" />
      </Avatar>
      <Avatar classes="mb-8 rounded-full w-24 h-24">
        <img src="https://i.pravatar.cc/500?img=32" />
      </Avatar>
      <Avatar classes="mb-8 rounded-full w-16 h-16">
        <img src="https://i.pravatar.cc/500?img=32" />
      </Avatar>
      <Avatar classes="mb-8 rounded-full w-10 h-10">
        <img src="https://i.pravatar.cc/500?img=32" />
      </Avatar>
    </Wrapper>

    <Wrapper title="avatar with mask" classes="flex items-center space-x-8 flex-wrap">
      <Avatar classes="mb-8 w-32 h-32 mask mask-squircle">
        <img src="https://i.pravatar.cc/500?img=32" />
      </Avatar>
      <Avatar classes="mb-8 w-32 h-32 mask mask-hexagon">
        <img src="https://i.pravatar.cc/500?img=32" />
      </Avatar>
      <Avatar classes="mb-8 w-32 h-32 mask mask-decagon">
        <img src="https://i.pravatar.cc/500?img=32" />
      </Avatar>
    </Wrapper>

    <Wrapper title="avatar with border" classes="flex items-center space-x-8 flex-wrap">
      <Avatar classes="mb-8 rounded-btn w-32 h-32 ring ring-primary ring-offset-base-100 ring-offset-2">
        <img src="https://i.pravatar.cc/500?img=32" />
      </Avatar>
      <Avatar classes="mb-8 rounded-btn w-24 h-24 ring ring-primary ring-offset-base-100 ring-offset-2">
        <img src="https://i.pravatar.cc/500?img=32" />
      </Avatar>
      <Avatar classes="mb-8 rounded-btn w-16 h-16 ring ring-primary ring-offset-base-100 ring-offset-2">
        <img src="https://i.pravatar.cc/500?img=32" />
      </Avatar>
      <Avatar classes="mb-8 rounded-btn w-10 h-10 ring ring-primary ring-offset-base-100 ring-offset-2">
        <img src="https://i.pravatar.cc/500?img=32" />
      </Avatar>
    </Wrapper>

    <Wrapper title="avatar circle" classes="flex items-center space-x-8 flex-wrap">
      <Avatar classes="mb-8 rounded-full w-32 h-32 ring ring-primary ring-offset-base-100 ring-offset-2">
        <img src="https://i.pravatar.cc/500?img=32" />
      </Avatar>
      <Avatar classes="mb-8 rounded-full w-24 h-24 ring ring-primary ring-offset-base-100 ring-offset-2">
        <img src="https://i.pravatar.cc/500?img=32" />
      </Avatar>
      <Avatar classes="mb-8 rounded-full w-16 h-16 ring ring-primary ring-offset-base-100 ring-offset-2">
        <img src="https://i.pravatar.cc/500?img=32" />
      </Avatar>
      <Avatar classes="mb-8 rounded-full w-10 h-10 ring ring-primary ring-offset-base-100 ring-offset-2">
        <img src="https://i.pravatar.cc/500?img=32" />
      </Avatar>
    </Wrapper>

    <Wrapper title="avatar with presense indicator" classes="flex items-center space-x-8 flex-wrap">
      <Avatar class="offline" classes="rounded-btn w-32 h-32">
        <img src="https://i.pravatar.cc/500?img=32" />
      </Avatar>
      <Avatar class="online" classes="rounded-btn w-24 h-24">
        <img src="https://i.pravatar.cc/500?img=32" />
      </Avatar>
      <Avatar class="offline" classes="rounded-btn w-16 h-16">
        <img src="https://i.pravatar.cc/500?img=32" />
      </Avatar>
      <Avatar class="online" classes="rounded-btn w-10 h-10">
        <img src="https://i.pravatar.cc/500?img=32" />
      </Avatar>
    </Wrapper>
    <Wrapper title="avatar with presense indicator" classes="flex items-center space-x-8 flex-wrap">
      <Avatar class="offline" classes="rounded-full w-32 h-32">
        <img src="https://i.pravatar.cc/500?img=32" />
      </Avatar>
      <Avatar class="online" classes="rounded-full w-24 h-24">
        <img src="https://i.pravatar.cc/500?img=32" />
      </Avatar>
      <Avatar class="offline" classes="rounded-full w-16 h-16">
        <img src="https://i.pravatar.cc/500?img=32" />
      </Avatar>
      <Avatar class="online" classes="rounded-full w-10 h-10">
        <img src="https://i.pravatar.cc/500?img=32" />
      </Avatar>
    </Wrapper>
    <Wrapper title="avatar placeholder" classes="flex items-center space-x-8 flex-wrap">
      <Avatar class="placeholder" classes="bg-neutral-focus text-neutral-content rounded-full w-32 h-32">
        <span class="text-3xl">K</span>
      </Avatar>
      <Avatar class="online placeholder" classes="bg-neutral-focus text-neutral-content rounded-full w-24 h-24">
        <span class="text-xl">JO</span>
      </Avatar>
      <Avatar class="placeholder" classes="bg-neutral-focus text-neutral-content rounded-full w-16 h-16">
        <span>MX</span>
      </Avatar>
      <Avatar class="placeholder" classes="bg-neutral-focus text-neutral-content rounded-full w-10 h-10">
        <span>AA</span>
      </Avatar>
    </Wrapper>
  </div>
</template>
