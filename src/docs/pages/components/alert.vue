<template>
  <div>
    <ClassTable v-bind:data="{
      components : [
        { class: 'alert', desc: 'Container element' },
      ],
      utilities : [
        { class: 'alert-info', desc: 'Alert with `info` color' },
        { class: 'alert-success', desc: 'Alert with `success` color' },
        { class: 'alert-warning', desc: 'Alert with `warning` color' },
        { class: 'alert-error', desc: 'Alert with `error` color' },
      ]
    }"/>
    <Wrapper title="alert" classes="flex flex-col space-y-2">
      <Alert>
        <div class="flex-1">
          <Icon glyph="info" class="w-6 h-6 mx-2" color="#2196f3" />
          <label>Lorem ipsum dolor sit amet, consectetur adip!</label>
        </div>
      </Alert>
    </Wrapper>

    <Wrapper title="alert state: info" classes="flex flex-col space-y-2">
      <Alert class="alert-info">
        <div class="flex-1">
          <Icon glyph="info" class="w-6 h-6 mx-2 stroke-current" />
          <label>Lorem ipsum dolor sit amet, consectetur adip!</label>
        </div>
      </Alert>
    </Wrapper>
    <Wrapper title="alert state: success" classes="flex flex-col space-y-2">
      <Alert class="alert-success">
        <div class="flex-1">
          <Icon glyph="folder" class="w-6 h-6 mx-2 stroke-current" />
          <label>Lorem ipsum dolor sit amet, consectetur adip!</label>
        </div>
      </Alert>
    </Wrapper>
    <Wrapper title="alert state: warning" classes="flex flex-col space-y-2">
      <Alert class="alert-warning">
        <div class="flex-1">
          <Icon glyph="warning" class="w-6 h-6 mx-2 stroke-current" />
          <label>Lorem ipsum dolor sit amet, consectetur adip!</label>
        </div>
      </Alert>
    </Wrapper>
    <Wrapper title="alert state: error" classes="flex flex-col space-y-2">
      <Alert class="alert-error">
        <div class="flex-1">
          <Icon glyph="invalid" class="w-6 h-6 mx-2 stroke-current" />
          <label>Lorem ipsum dolor sit amet, consectetur adip!</label>
        </div>
      </Alert>
    </Wrapper>

    <Wrapper title="alert" classes="flex flex-col space-y-2">
      <Alert>
        <div class="flex-1">
          <label class="mx-3">Lorem ipsum dolor sit amet, consectetur adip!</label>
        </div>
        <div class="flex-none">
          <Button classes="btn-sm btn-ghost mr-2">Cancel</Button>
          <Button classes="btn-sm btn-primary">Apply</Button>
        </div>
      </Alert>
    </Wrapper>
    <Wrapper title="alert" classes="flex flex-col space-y-2">
      <Alert>
        <div class="flex-1">
          <Icon glyph="invalid" class="w-6 h-6 mx-2" color="#ff5722" />
          <label>Lorem ipsum dolor sit amet, consectetur adip!</label>
        </div>
        <div class="flex-none">
          <Button classes="btn-sm btn-ghost">
            <Icon glyph="bell" class="inline-block w-4 mr-2 stroke-current" />
            Remind me later
          </Button>
        </div>
      </Alert>
    </Wrapper>
    <Wrapper title="alert" classes="flex flex-col space-y-2">
      <Alert>
        <div class="flex-1">
          <Icon glyph="bell" class="flex-shrink-0 w-6 h-6 mx-2" color="#009688" />
          <label>
            <h4>Lorem ipsum dolor sit!</h4>
            <p class="text-sm text-base-content text-opacity-60">
              Lorem ipsum dolor sit amet, consectetur adip! Lorem ipsum dolor
              sit amet, consectetur adip!Lorem ipsum dolor sit amet, consectetur
              adip!Lorem ipsum dolor sit amet, consectetur adip!Lorem ipsum
              dolor sit amet, consectetur adip!Lorem ipsum dolor sit amet,
              consectetur adip!
            </p>
          </label>
        </div>
        <div class="flex-none">
          <Button class="btn-sm btn-ghost btn-square">
            <Icon glyph="dots" class="w-6 h-6 stroke-current" />
          </Button>
        </div>
      </Alert>
    </Wrapper>
  </div>
</template>


<script>
  export default {
    head() {
      return {
        title: "daisyUI — Tailwind CSS alert component",
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: 'Tailwind CSS alert component - Tailwind CSS alert examples'
          }
        ]
      }
    }
  }
</script>
