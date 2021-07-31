<template>
  <div>
    <ClassTable v-bind:data="{
      components : [
        { class: 'btn-group', desc: 'Groups buttons together' },
      ]
    }"/>
    <Wrapper classes="flex items-start flex-col space-y-2" title="pagination">
      <div class="btn-group">
        <Button class="">Previous</Button>
        <Button class="">1</Button>
        <Button class="btn-active">2</Button>
        <Button class="">3</Button>
        <Button class="">4</Button>
        <Button class="">Next</Button>
      </div>
    </Wrapper>

    <Wrapper classes="flex items-start flex-col space-y-2" title="pagination">
      <div class="btn-group">
        <Button class="btn-sm">1</Button>
        <Button class="btn-sm">2</Button>
        <Button class="btn-sm">3</Button>
        <Button class="btn-sm btn-disabled">...</Button>
        <Button class="btn-sm">99</Button>
        <Button class="btn-sm">100</Button>
      </div>
    </Wrapper>

    <Wrapper classes="flex items-start flex-col space-y-2" title="pagination">
      <div class="btn-group">
        <Button class="btn-xs">«</Button>
        <Button class="btn-xs">1</Button>
        <Button class="btn-xs btn-active">2</Button>
        <Button class="btn-xs">3</Button>
        <Button class="btn-xs">4</Button>
        <Button class="btn-xs">»</Button>
      </div>
    </Wrapper>

    <Wrapper classes="flex items-start flex-col space-y-2" title="pagination">
      <div class="btn-group">
        <Button class="btn-outline btn-wide">Previous Page</Button>
        <Button class="btn-outline btn-wide">Next Page</Button>
      </div>
    </Wrapper>
  </div>
</template>


<script>
export default {
  head() {
    return {
      title: "daisyUI — Tailwind CSS pagination component",
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Tailwind CSS pagination component - Tailwind CSS pagination examples'
        }
      ]
    }
  }
}
</script>
