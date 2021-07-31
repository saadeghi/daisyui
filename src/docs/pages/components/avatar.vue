<template>
  <div>
    <ClassTable v-bind:data="{
      components : [
        { class: 'avatar', desc: 'Container element' },
        { class: 'avatar-group', desc: 'Container for grouping multiple avatars' },
      ],
      utilities : [
        { class: 'online', desc: 'shows a green dot as online indicator' },
        { class: 'offline', desc: 'shows a gray dot as online indicator' },
        { class: 'placeholder', desc: 'to show some letters as avatar placeholder' },
      ]
    }"/>
    <Wrapper title="avatar" classes="flex items-center space-x-8 flex-wrap">
      <Avatar classes="mb-8 rounded-btn w-24 h-24">
        <img src="http://daisyui.com/tailwind-css-component-profile-1@94w.png">
      </Avatar>
      <Avatar classes="mb-8 rounded-btn w-14 h-14">
        <img src="http://daisyui.com/tailwind-css-component-profile-1@56w.png">
      </Avatar>
      <Avatar classes="mb-8 rounded-btn w-10 h-10">
        <img src="http://daisyui.com/tailwind-css-component-profile-1@40w.png">
      </Avatar>
    </Wrapper>

    <Wrapper title="avatar-group" classes="flex items-center space-x-8 flex-wrap">
      <div class="-space-x-6 avatar-group">
        <Avatar classes="w-16 h-16">
          <img src="http://daisyui.com/tailwind-css-component-profile-1@56w.png">
        </Avatar>
        <Avatar classes="w-16 h-16">
          <img src="http://daisyui.com/tailwind-css-component-profile-2@56w.png">
        </Avatar>
        <Avatar classes="w-16 h-16">
          <img src="http://daisyui.com/tailwind-css-component-profile-3@56w.png">
        </Avatar>
        <Avatar classes="w-16 h-16">
          <img src="http://daisyui.com/tailwind-css-component-profile-5@56w.png">
        </Avatar>
      </div>
    </Wrapper>

    <Wrapper title="avatar-group" classes="flex items-center space-x-8 flex-wrap">
      <div class="-space-x-5 avatar-group">
        <Avatar classes="w-10 h-10">
          <img src="http://daisyui.com/tailwind-css-component-profile-1@40w.png">
        </Avatar>
        <Avatar classes="w-10 h-10">
          <img src="http://daisyui.com/tailwind-css-component-profile-2@40w.png">
        </Avatar>
        <Avatar classes="w-10 h-10">
          <img src="http://daisyui.com/tailwind-css-component-profile-3@40w.png">
        </Avatar>
        <Avatar classes="w-10 h-10">
          <img src="http://daisyui.com/tailwind-css-component-profile-5@40w.png">
        </Avatar>
        <div class="avatar placeholder">
          <div class="w-10 h-10 rounded-full bg-neutral-focus text-neutral-content">
            <span>+99</span>
          </div>
        </div>
      </div>
    </Wrapper>


    <Wrapper title="avatar circle" classes="flex items-center space-x-8 flex-wrap">
      <Avatar classes="mb-8 rounded-full w-24 h-24">
        <img src="http://daisyui.com/tailwind-css-component-profile-1@94w.png">
      </Avatar>
      <Avatar classes="mb-8 rounded-full w-14 h-14">
        <img src="http://daisyui.com/tailwind-css-component-profile-1@56w.png">
      </Avatar>
      <Avatar classes="mb-8 rounded-full w-10 h-10">
        <img src="http://daisyui.com/tailwind-css-component-profile-1@40w.png">
      </Avatar>
    </Wrapper>

    <Wrapper title="avatar with mask" classes="flex items-center space-x-8 flex-wrap">
      <Avatar classes="mb-8 w-24 h-24 mask mask-squircle">
        <img src="http://daisyui.com/tailwind-css-component-profile-1@94w.png">
      </Avatar>
      <Avatar classes="mb-8 w-24 h-24 mask mask-hexagon">
        <img src="http://daisyui.com/tailwind-css-component-profile-1@94w.png">
      </Avatar>
      <Avatar classes="mb-8 w-24 h-24 mask mask-decagon">
        <img src="http://daisyui.com/tailwind-css-component-profile-1@94w.png">
      </Avatar>
    </Wrapper>

    <Wrapper title="avatar with border" classes="flex items-center space-x-8 flex-wrap">
      <Avatar classes="mb-8 rounded-box w-24 h-24 ring ring-primary ring-offset-base-100 ring-offset-2">
        <img src="http://daisyui.com/tailwind-css-component-profile-1@94w.png">
      </Avatar>
      <Avatar classes="mb-8 rounded-box w-14 h-14 ring ring-primary ring-offset-base-100 ring-offset-2">
        <img src="http://daisyui.com/tailwind-css-component-profile-1@56w.png">
      </Avatar>
      <Avatar classes="mb-8 rounded-box w-10 h-10 ring ring-primary ring-offset-base-100 ring-offset-2">
        <img src="http://daisyui.com/tailwind-css-component-profile-1@40w.png">
      </Avatar>
    </Wrapper>

    <Wrapper title="avatar circle" classes="flex items-center space-x-8 flex-wrap">
      <Avatar classes="mb-8 rounded-full w-24 h-24 ring ring-primary ring-offset-base-100 ring-offset-2">
        <img src="http://daisyui.com/tailwind-css-component-profile-1@94w.png">
      </Avatar>
      <Avatar classes="mb-8 rounded-full w-14 h-14 ring ring-primary ring-offset-base-100 ring-offset-2">
        <img src="http://daisyui.com/tailwind-css-component-profile-1@56w.png">
      </Avatar>
      <Avatar classes="mb-8 rounded-full w-10 h-10 ring ring-primary ring-offset-base-100 ring-offset-2">
        <img src="http://daisyui.com/tailwind-css-component-profile-1@40w.png">
      </Avatar>
    </Wrapper>

    <Wrapper title="avatar with presense indicator" classes="flex items-center space-x-8 flex-wrap">
      <Avatar class="online" classes="rounded-btn w-24 h-24">
        <img src="http://daisyui.com/tailwind-css-component-profile-1@94w.png">
      </Avatar>
      <Avatar class="offline" classes="rounded-btn w-14 h-14">
        <img src="http://daisyui.com/tailwind-css-component-profile-1@56w.png">
      </Avatar>
      <Avatar class="online" classes="rounded-btn w-10 h-10">
        <img src="http://daisyui.com/tailwind-css-component-profile-1@40w.png">
      </Avatar>
    </Wrapper>
    <Wrapper title="avatar with presense indicator" classes="flex items-center space-x-8 flex-wrap">
      <Avatar class="online" classes="rounded-full w-24 h-24">
        <img src="http://daisyui.com/tailwind-css-component-profile-1@94w.png">
      </Avatar>
      <Avatar class="offline" classes="rounded-full w-14 h-14">
        <img src="http://daisyui.com/tailwind-css-component-profile-1@56w.png">
      </Avatar>
      <Avatar class="online" classes="rounded-full w-10 h-10">
        <img src="http://daisyui.com/tailwind-css-component-profile-1@40w.png">
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


<script>
export default {
  head() {
    return {
      title: "daisyUI — Tailwind CSS avatar component",
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Tailwind CSS avatar component - Tailwind CSS avatar examples'
        }
      ]
    }
  }
}
</script>
