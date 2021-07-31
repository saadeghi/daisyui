<template>
  <div>
    <ClassTable v-bind:data="{
      components : [
        { class: 'breadcrumbs', desc: 'Container element' },
      ]
    }"/>
    <Wrapper classes="flex items-start flex-col space-y-2" title="breadcrumbs">
      <div class="text-sm breadcrumbs">
        <ul>
          <li><a>Home</a></li>
          <li><a>Documents</a></li>
          <li>Add Document</li>
        </ul>
      </div>
    </Wrapper>
    <Wrapper classes="flex items-start flex-col space-y-2" title="breadcrumbs with icon">
      <div class="text-sm breadcrumbs">
        <ul>
          <li>
            <a>
              <Icon glyph="folder" class="w-4 h-4 mr-2 stroke-current" />
              Home
            </a>
          </li>
          <li>
            <a>
              <Icon glyph="folder" class="w-4 h-4 mr-2 stroke-current" />
              Documents
            </a>
          </li>
          <li>
            <Icon glyph="document-add" class="w-4 h-4 mr-2 stroke-current" />
            Add Document
          </li>
        </ul>
      </div>
    </Wrapper>
    <Wrapper classes="flex items-start flex-col space-y-2" title="breadcrumbs overflow scroll">
      <div class="max-w-xs text-sm breadcrumbs">
        <ul>
          <li>If you set max-width</li>
          <li>or the list</li>
          <li>gets larger than</li>
          <li>the container</li>
          <li>it will scroll</li>
        </ul>
      </div>
    </Wrapper>
  </div>
</template>


<script>
export default {
  head() {
    return {
      title: "daisyUI — Tailwind CSS breadcrumbs component",
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Tailwind CSS breadcrumbs component - Tailwind CSS breadcrumbs examples'
        }
      ]
    }
  }
}
</script>
