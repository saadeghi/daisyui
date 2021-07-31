<template>
  <div>
    <ClassTable v-bind:data="{
      components : [
        { class: 'btn-group', desc: 'Container for grouping multiple buttons' },
      ]
    }"/>
    <Wrapper classes="flex items-start flex-col space-y-2" title="button group">
      <div class="btn-group">
        <Button class="btn-lg btn-active">Large</Button>
        <Button class="btn-lg">Large</Button>
        <Button class="btn-lg">Large</Button>
        <Button class="btn-lg">
          <Icon glyph="dots" class="inline-block w-4 stroke-current" />
        </Button>
      </div>
      <div class="btn-group">
        <Button class="btn-active">Normal</Button>
        <Button class="">Normal</Button>
        <Button class="">Normal</Button>
        <Button class="">
          <Icon glyph="dots" class="inline-block w-4 stroke-current" />
        </Button>
      </div>
      <div class="btn-group">
        <Button class="btn-sm btn-active">Small</Button>
        <Button class="btn-sm">Small</Button>
        <Button class="btn-sm">Small</Button>
        <Button class="btn-sm">
          <Icon glyph="dots" class="inline-block w-4 stroke-current" />
        </Button>
      </div>
      <div class="btn-group">
        <Button class="btn-xs btn-active">Tiny</Button>
        <Button class="btn-xs">Tiny</Button>
        <Button class="btn-xs">Tiny</Button>
        <Button class="btn-xs">
          <Icon glyph="dots" class="inline-block w-4 stroke-current" />
        </Button>
      </div>
    </Wrapper>


    <Wrapper classes="flex items-start flex-col space-y-2" title="button group outline">
      <div class="btn-group">
        <Button class="btn-outline btn-lg btn-active">Large</Button>
        <Button class="btn-outline btn-lg">Large</Button>
        <Button class="btn-outline btn-lg">Large</Button>
        <Button class="btn-outline btn-lg">
          <Icon glyph="dots" class="inline-block w-4 stroke-current" />
        </Button>
      </div>
      <div class="btn-group">
        <Button class="btn-outline btn-active">Normal</Button>
        <Button class="btn-outline">Normal</Button>
        <Button class="btn-outline">Normal</Button>
        <Button class="btn-outline">
          <Icon glyph="dots" class="inline-block w-4 stroke-current" />
        </Button>
      </div>
      <div class="btn-group">
        <Button class="btn-outline btn-sm btn-active">Small</Button>
        <Button class="btn-outline btn-sm">Small</Button>
        <Button class="btn-outline btn-sm">Small</Button>
        <Button class="btn-outline btn-sm">
          <Icon glyph="dots" class="inline-block w-4 stroke-current" />
        </Button>
      </div>
      <div class="btn-group">
        <Button class="btn-outline btn-xs btn-active">Tiny</Button>
        <Button class="btn-outline btn-xs">Tiny</Button>
        <Button class="btn-outline btn-xs">Tiny</Button>
        <Button class="btn-outline btn-xs">
          <Icon glyph="dots" class="inline-block w-4 stroke-current" />
        </Button>
      </div>
    </Wrapper>



    <Wrapper classes="flex items-start flex-col space-y-2" title="button group with radio buttons">
      <div class="btn-group">
        <input class="btn" type="radio" name="options" id="option1" data-title="1">
        <input class="btn" type="radio" name="options" id="option2" data-title="2" checked >
        <input class="btn" type="radio" name="options" id="option3" data-title="3">
        <input class="btn" type="radio" name="options" id="option4" data-title="4">
        <input class="btn" type="radio" name="options" id="option5" data-title="5">
      </div>
    </Wrapper>

  </div>
</template>


<script>
export default {
  head() {
    return {
      title: "daisyUI — Tailwind CSS button group component",
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Tailwind CSS button group component - Tailwind CSS button group examples'
        }
      ]
    }
  }
}
</script>
