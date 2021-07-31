<template>
  <div>
    <ClassTable v-bind:data="{
      components : [
        { class: 'carousel', desc: 'Container element' },
        { class: 'carousel-item', desc: 'Carousel itme' },
      ],
      utilities : [
        { class: 'carousel-center', desc: 'Snap elements to center' },
        { class: 'carousel-end', desc: 'Snap elements to end' },
        { class: 'carousel-vertical', desc: 'Vertical carousel' },
      ]
    }"/>
    <Wrapper title="carousel (snap to start)">
      <div class="carousel rounded-box">
        <div class="carousel-item">
          <img src="https://picsum.photos/id/500/256/144" />
        </div>
        <div class="carousel-item">
          <img src="https://picsum.photos/id/501/256/144" />
        </div>
        <div class="carousel-item">
          <img src="https://picsum.photos/id/502/256/144" />
        </div>
        <div class="carousel-item">
          <img src="https://picsum.photos/id/503/256/144" />
        </div>
        <div class="carousel-item">
          <img src="https://picsum.photos/id/504/256/144" />
        </div>
        <div class="carousel-item">
          <img src="https://picsum.photos/id/505/256/144" />
        </div>
        <div class="carousel-item">
          <img src="https://picsum.photos/id/506/256/144" />
        </div>
      </div>
    </Wrapper>
    <Wrapper title="carousel carousel-center (snap to center)">
      <div class="carousel carousel-center rounded-box">
        <div class="carousel-item">
          <img src="https://picsum.photos/id/500/256/144" />
        </div>
        <div class="carousel-item">
          <img src="https://picsum.photos/id/501/256/144" />
        </div>
        <div class="carousel-item">
          <img src="https://picsum.photos/id/502/256/144" />
        </div>
        <div class="carousel-item">
          <img src="https://picsum.photos/id/503/256/144" />
        </div>
        <div class="carousel-item">
          <img src="https://picsum.photos/id/504/256/144" />
        </div>
        <div class="carousel-item">
          <img src="https://picsum.photos/id/505/256/144" />
        </div>
        <div class="carousel-item">
          <img src="https://picsum.photos/id/506/256/144" />
        </div>
      </div>
    </Wrapper>
    <Wrapper title="carousel carousel-end (snap to end)">
      <div class="carousel rounded-box carousel-end">
        <div class="carousel-item">
          <img src="https://picsum.photos/id/500/256/144" />
        </div>
        <div class="carousel-item">
          <img src="https://picsum.photos/id/501/256/144" />
        </div>
        <div class="carousel-item">
          <img src="https://picsum.photos/id/502/256/144" />
        </div>
        <div class="carousel-item">
          <img src="https://picsum.photos/id/503/256/144" />
        </div>
        <div class="carousel-item">
          <img src="https://picsum.photos/id/504/256/144" />
        </div>
        <div class="carousel-item">
          <img src="https://picsum.photos/id/505/256/144" />
        </div>
        <div class="carousel-item">
          <img src="https://picsum.photos/id/506/256/144" />
        </div>
      </div>
    </Wrapper>

    <Wrapper title="slider with indicators">
      <div class="w-full carousel">
        <div class="w-full pt-20 carousel-item" id="item1">
          <img src="https://picsum.photos/id/500/800/300" class="w-full" />
        </div>
        <div class="w-full pt-20 carousel-item" id="item2">
          <img src="https://picsum.photos/id/501/800/300" class="w-full" />
        </div>
        <div class="w-full pt-20 carousel-item" id="item3">
          <img src="https://picsum.photos/id/502/800/300" class="w-full" />
        </div>
        <div class="w-full pt-20 carousel-item" id="item4">
          <img src="https://picsum.photos/id/503/800/300" class="w-full" />
        </div>
      </div>
      <div class="flex justify-center w-full py-4 space-x-2">
        <a class="btn btn-xs btn-circle" :href="`/components/carousel#item1`">1</a>
        <a class="btn btn-xs btn-circle" :href="`/components/carousel#item2`">2</a>
        <a class="btn btn-xs btn-circle" :href="`/components/carousel#item3`">3</a>
        <a class="btn btn-xs btn-circle" :href="`/components/carousel#item4`">4</a>
      </div>
    </Wrapper>
    <Wrapper title="slider with next/prev">
      <div class="w-full carousel">
        <div class="relative w-full pt-20 carousel-item" id="slide1">
          <img src="https://picsum.photos/id/500/800/300" class="w-full" />
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a class="btn btn-circle" :href="`/components/carousel#slide4`">❮</a>
            <a class="btn btn-circle" :href="`/components/carousel#slide2`">❯</a>
          </div>
        </div>
        <div class="relative w-full pt-20 carousel-item" id="slide2">
          <img src="https://picsum.photos/id/501/800/300" class="w-full" />
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a class="btn btn-circle" :href="`/components/carousel#slide1`">❮</a>
            <a class="btn btn-circle" :href="`/components/carousel#slide3`">❯</a>
          </div>
        </div>
        <div class="relative w-full pt-20 carousel-item" id="slide3">
          <img src="https://picsum.photos/id/502/800/300" class="w-full" />
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a class="btn btn-circle" :href="`/components/carousel#slide2`">❮</a>
            <a class="btn btn-circle" :href="`/components/carousel#slide4`">❯</a>
          </div>
        </div>
        <div class="relative w-full pt-20 carousel-item" id="slide4">
          <img src="https://picsum.photos/id/503/800/300" class="w-full" />
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a class="btn btn-circle" :href="`/components/carousel#slide3`">❮</a>
            <a class="btn btn-circle" :href="`/components/carousel#slide1`">❯</a>
          </div>
        </div>
      </div>
    </Wrapper>
    <Wrapper title="carousel with full width items">
      <div class="w-64 carousel rounded-box">
        <div class="w-full carousel-item">
          <img src="https://picsum.photos/id/500/256/144" class="w-full" />
        </div>
        <div class="w-full carousel-item">
          <img src="https://picsum.photos/id/501/256/144" class="w-full" />
        </div>
        <div class="w-full carousel-item">
          <img src="https://picsum.photos/id/502/256/144" class="w-full" />
        </div>
        <div class="w-full carousel-item">
          <img src="https://picsum.photos/id/503/256/144" class="w-full" />
        </div>
        <div class="w-full carousel-item">
          <img src="https://picsum.photos/id/504/256/144" class="w-full" />
        </div>
        <div class="w-full carousel-item">
          <img src="https://picsum.photos/id/505/256/144" class="w-full" />
        </div>
        <div class="w-full carousel-item">
          <img src="https://picsum.photos/id/506/256/144" class="w-full" />
        </div>
      </div>
    </Wrapper>
    <Wrapper title="carousel with half-width items">
      <div class="w-96 carousel rounded-box">
        <div class="w-1/2 carousel-item">
          <img src="https://picsum.photos/id/500/256/144" class="w-full" />
        </div>
        <div class="w-1/2 carousel-item">
          <img src="https://picsum.photos/id/501/256/144" class="w-full" />
        </div>
        <div class="w-1/2 carousel-item">
          <img src="https://picsum.photos/id/502/256/144" class="w-full" />
        </div>
        <div class="w-1/2 carousel-item">
          <img src="https://picsum.photos/id/503/256/144" class="w-full" />
        </div>
        <div class="w-1/2 carousel-item">
          <img src="https://picsum.photos/id/504/256/144" class="w-full" />
        </div>
        <div class="w-1/2 carousel-item">
          <img src="https://picsum.photos/id/505/256/144" class="w-full" />
        </div>
        <div class="w-1/2 carousel-item">
          <img src="https://picsum.photos/id/506/256/144" class="w-full" />
        </div>
      </div>
    </Wrapper>
    <Wrapper title="full-bleed carousel carousel-center" class="">
      <div class="max-w-lg p-4 space-x-4 carousel carousel-center bg-neutral rounded-box">
        <div class="carousel-item">
          <img src="https://picsum.photos/id/500/256/144" class="rounded-box" />
        </div>
        <div class="carousel-item">
          <img src="https://picsum.photos/id/501/256/144" class="rounded-box" />
        </div>
        <div class="carousel-item">
          <img src="https://picsum.photos/id/502/256/144" class="rounded-box" />
        </div>
        <div class="carousel-item">
          <img src="https://picsum.photos/id/503/256/144" class="rounded-box" />
        </div>
        <div class="carousel-item">
          <img src="https://picsum.photos/id/504/256/144" class="rounded-box" />
        </div>
        <div class="carousel-item">
          <img src="https://picsum.photos/id/505/256/144" class="rounded-box" />
        </div>
        <div class="carousel-item">
          <img src="https://picsum.photos/id/506/256/144" class="rounded-box" />
        </div>
      </div>
    </Wrapper>
    <Wrapper title="carousel carousel-vertical">
      <div class="w-64 h-36 carousel rounded-box carousel-vertical">
        <div class="carousel-item">
          <img src="https://picsum.photos/id/500/256/144" />
        </div>
        <div class="carousel-item">
          <img src="https://picsum.photos/id/501/256/144" />
        </div>
        <div class="carousel-item">
          <img src="https://picsum.photos/id/502/256/144" />
        </div>
        <div class="carousel-item">
          <img src="https://picsum.photos/id/503/256/144" />
        </div>
        <div class="carousel-item">
          <img src="https://picsum.photos/id/504/256/144" />
        </div>
        <div class="carousel-item">
          <img src="https://picsum.photos/id/505/256/144" />
        </div>
        <div class="carousel-item">
          <img src="https://picsum.photos/id/506/256/144" />
        </div>
      </div>
    </Wrapper>
  </div>
</template>


<script>
export default {
  head() {
    return {
      title: "daisyUI — Tailwind CSS carousel component",
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Tailwind CSS carousel component - Tailwind CSS carousel examples'
        }
      ]
    }
  }
}
</script>
