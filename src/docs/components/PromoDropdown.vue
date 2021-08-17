<template>
  <div class="dropdown" :class="classes">
    <div tabindex="0">
      <slot></slot>
    </div>
    <div tabindex="0" class="py-2 dropdown-content">
      <div class="shadow-xl w-72 card compact bg-neutral-focus text-neutral-content rounded-box">
        <div class="card-body">
          <h2 class="font-extrabold capitalize card-title">{{ title }} component</h2>
          <p class="text-sm text-neutral-content text-opacity-80">{{ desc }}</p>
          <div class="flex justify-end mt-4">
            <NuxtLink :to="link" class="btn btn-primary btn-sm xl:btn-md">
              See component
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      title: String,
      desc: String,
      link: String,
      classes: String,
    },
  }

</script>
