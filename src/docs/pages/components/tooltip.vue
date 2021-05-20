<template>
  <div>

    <Wrapper title="tooltip" classes="flex justify-center my-6">
      <div class="tooltip" data-tip="hello">
        <button class="btn">Hover me</button>
      </div>
    </Wrapper>

    <Wrapper title="tooltip-open" classes="flex justify-center my-6">
      <div class="tooltip tooltip-open" data-tip="hello">
        <button class="btn">open by default</button>
      </div>
    </Wrapper>

    <Wrapper title="tooltip-bottom" classes="flex justify-center my-6">
      <div class="tooltip tooltip-open tooltip-bottom" data-tip="hello">
        <button class="btn">bottom</button>
      </div>
    </Wrapper>

    <Wrapper title="tooltip-left" classes="flex justify-center my-6">
      <div class="tooltip tooltip-open tooltip-left" data-tip="hello">
        <button class="btn">left</button>
      </div>
    </Wrapper>

    <Wrapper title="tooltip-right" classes="flex justify-center my-6">
      <div class="tooltip tooltip-open tooltip-right" data-tip="hello">
        <button class="btn">right</button>
      </div>
    </Wrapper>

    <Wrapper title="with colors" classes="grid grid-cols-3 lg:grid-cols-5 my-10 place-items-center gap-y-10">
      <div class="tooltip tooltip-open" data-tip="neutral">
        <button class="btn">neutral</button>
      </div>
      <div class="tooltip tooltip-open tooltip-primary" data-tip="primary">
        <button class="btn btn-primary">primary</button>
      </div>
      <div class="tooltip tooltip-open tooltip-secondary" data-tip="secondary">
        <button class="btn btn-secondary">secondary</button>
      </div>
      <div class="tooltip tooltip-open tooltip-accent" data-tip="accent">
        <button class="btn btn-accent">accent</button>
      </div>
      <div class="tooltip tooltip-open tooltip-info" data-tip="info">
        <button class="btn btn-info">info</button>
      </div>
      <div class="tooltip tooltip-open tooltip-success" data-tip="success">
        <button class="btn btn-success">success</button>
      </div>
      <div class="tooltip tooltip-open tooltip-warning" data-tip="warning">
        <button class="btn btn-warning">warning</button>
      </div>
      <div class="tooltip tooltip-open tooltip-error" data-tip="error">
        <button class="btn btn-error">error</button>
      </div>
    </Wrapper>

  </div>
</template>
