<template>
  <div>
    <ClassTable v-bind:data="{
      components : [
        { class: 'link', desc: 'Adds underline to a text' },
      ],
      utilities : [
        { class: 'link-primary', desc: 'Link with `primary` color' },
        { class: 'link-secondary', desc: 'Link with `secondary` color' },
        { class: 'link-accent', desc: 'Link with `accent` color' },
        { class: 'link-neutral', desc: 'Link with `neutral` color' },
        { class: 'link-hover', desc: 'Only show underline on hover' },
      ]
    }"/>
    <Wrapper title="link">
      <a class="link">It's just a simple link</a>
    </Wrapper>
    <Wrapper title="link inside text">
      <p>Tailwind resets the style of links by default.<br>But you can add `link` class to make it look like a <a class="link">normal link</a> again.</p>
    </Wrapper>
    <Wrapper title="link-primary">
      <a class="link link-primary">It's just a simple link</a>
    </Wrapper>
    <Wrapper title="link-secondary">
      <a class="link link-secondary">It's just a simple link</a>
    </Wrapper>
    <Wrapper title="link-accent">
      <a class="link link-accent">It's just a simple link</a>
    </Wrapper>
    <Wrapper title="link-neutral">
      <a class="link link-neutral">It's just a simple link</a>
    </Wrapper>
    <Wrapper title="link-hover">
      <a class="link link-hover">Only show underline on hover</a>
    </Wrapper>
  </div>
</template>


<script>
export default {
  head() {
    return {
      title: "daisyUI — Tailwind CSS link component",
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Tailwind CSS link component - Tailwind CSS link examples'
        }
      ]
    }
  }
}
</script>
