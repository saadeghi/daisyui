<template>
  <div>
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
