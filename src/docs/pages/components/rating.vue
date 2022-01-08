<template>
  <div>
    <ClassTable v-bind:data="{
      components : [
        { class: 'rating', desc: 'Wrapper component for radio buttons' },
      ],
      utility : [
        { class: 'rating-hidden', desc: 'hides the input. Useful to clear the the rating' },
      ],
      responsive : [
        { class: 'btn-lg', desc: 'Large rating' },
        { class: 'btn-md', desc: 'Medium rating (default)' },
        { class: 'btn-sm', desc: 'Small rating' },
        { class: 'btn-xs', desc: 'Extra small rating' },
      ],
    }"/>
    <Wrapper title="rating">

      <div class="rating">
        <input class="mask mask-star" type="radio" name="rating-1">
        <input class="mask mask-star" type="radio" name="rating-1" checked>
        <input class="mask mask-star" type="radio" name="rating-1">
        <input class="mask mask-star" type="radio" name="rating-1">
        <input class="mask mask-star" type="radio" name="rating-1">
      </div>

    </Wrapper>
    <Wrapper title="mask-star-2 bg-warning">

      <div class="rating">
        <input class="mask mask-star-2 bg-warning" type="radio" name="rating-2">
        <input class="mask mask-star-2 bg-warning" type="radio" name="rating-2" checked>
        <input class="mask mask-star-2 bg-warning" type="radio" name="rating-2">
        <input class="mask mask-star-2 bg-warning" type="radio" name="rating-2">
        <input class="mask mask-star-2 bg-warning" type="radio" name="rating-2">
      </div>

    </Wrapper>
    <Wrapper title="mask-heart bg-error">

      <div class="gap-1 rating">
        <input class="mask mask-heart bg-error" type="radio" name="rating-3">
        <input class="mask mask-heart bg-error" type="radio" name="rating-3" checked>
        <input class="mask mask-heart bg-error" type="radio" name="rating-3">
        <input class="mask mask-heart bg-error" type="radio" name="rating-3">
        <input class="mask mask-heart bg-error" type="radio" name="rating-3">
      </div>

    </Wrapper>
    <Wrapper title="mask-star-2 bg-green-500">

      <div class="rating">
        <input class="bg-green-500 mask mask-star-2" type="radio" name="rating-4">
        <input class="bg-green-500 mask mask-star-2" type="radio" name="rating-4" checked>
        <input class="bg-green-500 mask mask-star-2" type="radio" name="rating-4">
        <input class="bg-green-500 mask mask-star-2" type="radio" name="rating-4">
        <input class="bg-green-500 mask mask-star-2" type="radio" name="rating-4">
      </div>

    </Wrapper>


    <Wrapper title="rating rating-xs">

      <div class="rating rating-xs">
        <input class="mask mask-star-2 bg-warning" type="radio" name="rating-5">
        <input class="mask mask-star-2 bg-warning" type="radio" name="rating-5" checked>
        <input class="mask mask-star-2 bg-warning" type="radio" name="rating-5">
        <input class="mask mask-star-2 bg-warning" type="radio" name="rating-5">
        <input class="mask mask-star-2 bg-warning" type="radio" name="rating-5">
      </div>

    </Wrapper>
    <Wrapper title="rating rating-sm">

      <div class="rating rating-sm">
        <input class="mask mask-star-2 bg-warning" type="radio" name="rating-6">
        <input class="mask mask-star-2 bg-warning" type="radio" name="rating-6" checked>
        <input class="mask mask-star-2 bg-warning" type="radio" name="rating-6">
        <input class="mask mask-star-2 bg-warning" type="radio" name="rating-6">
        <input class="mask mask-star-2 bg-warning" type="radio" name="rating-6">
      </div>

    </Wrapper>
    <Wrapper title="rating rating-md">

      <div class="rating rating-md">
        <input class="mask mask-star-2 bg-warning" type="radio" name="rating-7">
        <input class="mask mask-star-2 bg-warning" type="radio" name="rating-7" checked>
        <input class="mask mask-star-2 bg-warning" type="radio" name="rating-7">
        <input class="mask mask-star-2 bg-warning" type="radio" name="rating-7">
        <input class="mask mask-star-2 bg-warning" type="radio" name="rating-7">
      </div>

    </Wrapper>
    <Wrapper title="rating rating-lg">

      <div class="rating rating-lg">
        <input class="mask mask-star-2 bg-warning" type="radio" name="rating-8">
        <input class="mask mask-star-2 bg-warning" type="radio" name="rating-8" checked>
        <input class="mask mask-star-2 bg-warning" type="radio" name="rating-8">
        <input class="mask mask-star-2 bg-warning" type="radio" name="rating-8">
        <input class="mask mask-star-2 bg-warning" type="radio" name="rating-8">
      </div>

    </Wrapper>
    <Wrapper title="with `rating-hidden` (to clear the rating)">

      <div class="rating">
        <input class="rating-hidden" type="radio" name="rating-9">
        <input class="mask mask-star-2" type="radio" name="rating-9">
        <input class="mask mask-star-2" type="radio" name="rating-9" checked>
        <input class="mask mask-star-2" type="radio" name="rating-9">
        <input class="mask mask-star-2" type="radio" name="rating-9">
        <input class="mask mask-star-2" type="radio" name="rating-9">
      </div>

    </Wrapper>

  </div>
</template>


<script>
export default {
  head() {
    return {
      title: "daisyUI — Tailwind CSS star rating component",
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Tailwind CSS star rating example - Tailwind CSS star rating example'
        }
      ]
    }
  }
}
</script>
