<template>
  <div>
    <ClassTable v-bind:data="{
      components : [
        { class: 'mask', desc: 'Masks the content with shape' },
      ],
      utilities : [
        { class: 'mask-squircle', desc: 'Applies `squircle` shape' },
        { class: 'mask-heart', desc: 'Applies `heart` shape' },
        { class: 'mask-hexagon', desc: 'Applies `hexagon` shape' },
        { class: 'mask-hexagon-2', desc: 'Applies `hexagon` alternative shape' },
        { class: 'mask-decagon', desc: 'Applies `decagon` shape' },
        { class: 'mask-pentagon', desc: 'Applies `pentagon` shape' },
        { class: 'mask-diamond', desc: 'Applies `diamond` shape' },
        { class: 'mask-square', desc: 'Applies `square` shape' },
        { class: 'mask-circle', desc: 'Applies `circle` shape' },
        { class: 'mask-parallelogram', desc: 'Applies `parallelogram` shape' },
        { class: 'mask-parallelogram-2', desc: 'Applies `parallelogram` alternative shape' },
        { class: 'mask-parallelogram-3', desc: 'Applies `parallelogram` alternative shape' },
        { class: 'mask-parallelogram-4', desc: 'Applies `parallelogram` alternative shape' },
        { class: 'mask-star', desc: 'Applies `star` shape' },
        { class: 'mask-star-2', desc: 'Applies `star` alternative shape' },
        { class: 'mask-triangle', desc: 'Applies `triangle` shape' },
        { class: 'mask-triangle-2', desc: 'Applies `triangle` alternative shape' },
        { class: 'mask-triangle-3', desc: 'Applies `triangle` alternative shape' },
        { class: 'mask-triangle-4', desc: 'Applies `triangle` alternative shape' },
      ]
    }"/>
    <Wrapper title="mask-squircle">
      <img class="mask mask-squircle" src="https://picsum.photos/id/1005/200/200" />
    </Wrapper>
    <Wrapper title="mask-heart">
      <img class="mask mask-heart" src="https://picsum.photos/id/1005/200/200" />
    </Wrapper>
    <Wrapper title="mask-hexagon">
      <img class="mask mask-hexagon" src="https://picsum.photos/id/1005/200/200" />
    </Wrapper>
    <Wrapper title="mask-hexagon-2">
      <img class="mask mask-hexagon-2" src="https://picsum.photos/id/1005/200/200" />
    </Wrapper>
    <Wrapper title="mask-decagon">
      <img class="mask mask-decagon" src="https://picsum.photos/id/1005/200/200" />
    </Wrapper>
    <Wrapper title="mask-pentagon">
      <img class="mask mask-pentagon" src="https://picsum.photos/id/1005/200/200" />
    </Wrapper>
    <Wrapper title="mask-diamond">
      <img class="mask mask-diamond" src="https://picsum.photos/id/1005/200/200" />
    </Wrapper>
    <Wrapper title="mask-square">
      <img class="mask mask-square" src="https://picsum.photos/id/1005/200/200" />
    </Wrapper>
    <Wrapper title="mask-circle">
      <img class="mask mask-circle" src="https://picsum.photos/id/1005/200/200" />
    </Wrapper>
    <Wrapper title="mask-parallelogram">
      <img class="mask mask-parallelogram" src="https://picsum.photos/id/1005/200/200" />
    </Wrapper>
    <Wrapper title="mask-parallelogram-2">
      <img class="mask mask-parallelogram-2" src="https://picsum.photos/id/1005/200/200" />
    </Wrapper>
    <Wrapper title="mask-parallelogram-3">
      <img class="mask mask-parallelogram-3" src="https://picsum.photos/id/1005/200/200" />
    </Wrapper>
    <Wrapper title="mask-parallelogram-4">
      <img class="mask mask-parallelogram-4" src="https://picsum.photos/id/1005/200/200" />
    </Wrapper>
    <Wrapper title="mask-star">
      <img class="mask mask-star" src="https://picsum.photos/id/1005/200/200" />
    </Wrapper>
    <Wrapper title="mask-star-2">
      <img class="mask mask-star-2" src="https://picsum.photos/id/1005/200/200" />
    </Wrapper>
    <Wrapper title="mask-triangle">
      <img class="mask mask-triangle" src="https://picsum.photos/id/1005/200/200" />
    </Wrapper>
    <Wrapper title="mask-triangle-2">
      <img class="mask mask-triangle-2" src="https://picsum.photos/id/1005/200/200" />
    </Wrapper>
    <Wrapper title="mask-triangle-3">
      <img class="mask mask-triangle-3" src="https://picsum.photos/id/1005/200/200" />
    </Wrapper>
    <Wrapper title="mask-triangle-4">
      <img class="mask mask-triangle-4" src="https://picsum.photos/id/1005/200/200" />
    </Wrapper>
  </div>
</template>


<script>
export default {
  head() {
    return {
      title: "daisyUI — Tailwind CSS mask component",
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Tailwind CSS image mask component - Tailwind CSS image mask examples'
        }
      ]
    }
  }
}
</script>
