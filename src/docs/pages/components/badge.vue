<template>
  <div>
    <ClassTable v-bind:data="{
      components : [
        { class: 'badge', desc: 'Container element' },
      ],
      utilities : [
        { class: 'badge-outline', desc: 'transparent badge with [colorful] border' },
        { class: 'badge-primary', desc: 'badge with `primary` color' },
        { class: 'badge-secondary', desc: 'badge with `secondary` color' },
        { class: 'badge-accent', desc: 'badge with `accent` color' },
        { class: 'badge-ghost', desc: 'badge with `ghost` color' },
        { class: 'badge-info', desc: 'badge with `info` color' },
        { class: 'badge-success', desc: 'badge with `success` color' },
        { class: 'badge-warning', desc: 'badge with `warning` color' },
        { class: 'badge-error', desc: 'badge with `error` color' },
        { class: 'badge-lg', desc: 'badge with large size' },
        { class: 'badge-md', desc: 'badge with medium size (default)' },
        { class: 'badge-sm', desc: 'badge with small size' },
        { class: 'badge-xs', desc: 'badge with extra small size' },
      ]
    }"/>
    <Wrapper classes="flex flex-wrap items-start md:space-x-2 space-x-0 space-y-2 md:space-y-0 flex-col md:flex-row" title="badge">
      <Badge>neutral</Badge>
      <Badge class="badge-primary">primary</Badge>
      <Badge class="badge-secondary">secondary</Badge>
      <Badge class="badge-accent">accent</Badge>
      <Badge class="badge-ghost">ghost</Badge>
    </Wrapper>

    <Wrapper classes="flex flex-wrap items-start md:space-x-2 space-x-0 space-y-2 md:space-y-0 flex-col md:flex-row" title="badge size">
      <Badge class="badge-lg">987,654</Badge>
      <Badge class="badge-md">987,654</Badge>
      <Badge class="badge-sm">987,654</Badge>
      <Badge class="badge-xs">987,654</Badge>
    </Wrapper>

    <Wrapper classes="flex flex-wrap items-start md:space-x-2 space-x-0 space-y-2 md:space-y-0 flex-col md:flex-row" title="empty badge">
      <Badge class="badge-lg"></Badge>
      <Badge class="badge-md"></Badge>
      <Badge class="badge-sm"></Badge>
      <Badge class="badge-xs"></Badge>
    </Wrapper>

    <Wrapper classes="flex flex-wrap items-start md:space-x-2 space-x-0 space-y-2 md:space-y-0 flex-col md:flex-row" title="badge variants">
      <Badge class="badge-info">
        <Icon glyph="close" class="inline-block w-4 h-4 mr-2 stroke-current" />
        info
      </Badge>
      <Badge class="badge-success">
        <Icon glyph="close" class="inline-block w-4 h-4 mr-2 stroke-current" />
        success
      </Badge>
      <Badge class="badge-warning">
        <Icon glyph="close" class="inline-block w-4 h-4 mr-2 stroke-current" />
        warning
      </Badge>
      <Badge class="badge-error">
        <Icon glyph="close" class="inline-block w-4 h-4 mr-2 stroke-current" />
        error
      </Badge>
    </Wrapper>

    <Wrapper classes="flex flex-wrap items-start md:space-x-2 space-x-0 space-y-2 md:space-y-0 flex-col md:flex-row" title="badge outline">
      <Badge class="badge-outline">neutral</Badge>
      <Badge class="badge-primary badge-outline">primary</Badge>
      <Badge class="badge-secondary badge-outline">secondary</Badge>
      <Badge class="badge-accent badge-outline">accent</Badge>
    </Wrapper>

    <Wrapper classes="flex flex-wrap items-start md:space-x-2 space-x-0 space-y-2 md:space-y-0 flex-col md:flex-row" title="Badge in text">
      <div>
        <div>
          <h2 class="mb-5 text-2xl">
            Heading
            <Badge class="badge-outline badge-lg">New</Badge>
          </h2>
        </div>
        <div>
          <h2 class="mb-5 text-xl">
            Heading
            <Badge class="badge-outline badge-md">New</Badge>
          </h2>
        </div>
        <div>
          <h2 class="mb-5 text-lg">
            Heading
            <Badge class="badge-outline badge-md">New</Badge>
          </h2>
        </div>
        <div>
          <h2 class="mb-5 text-md">
            Heading
            <Badge class="badge-outline badge-sm">New</Badge>
          </h2>
        </div>
        <div>
          <h2 class="mb-5 text-sm">
            Heading
            <Badge class="badge-outline badge-sm">New</Badge>
          </h2>
        </div>
      </div>
    </Wrapper>

    <Wrapper classes="flex flex-wrap items-start md:space-x-2 space-x-0 space-y-2 md:space-y-0 flex-col md:flex-row" title="badge in button">
      <Button classes="">
        Version 2.7.0
        <Badge class="ml-2">new</Badge>
      </Button>
      <Button classes="btn-primary">
        Inbox
        <Badge class="ml-2 badge-outline">3</Badge>
      </Button>
      <Button classes="btn-secondary btn-outline">
        Notifications
        <Badge class="ml-2 badge-outline">+999</Badge>
      </Button>
      <Button classes="btn-accent">
        accent
        <Badge class="ml-2 badge-outline">new</Badge>
      </Button>
    </Wrapper>
  </div>
</template>


<script>
export default {
  head() {
    return {
      title: "daisyUI — Tailwind CSS badge component",
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Tailwind CSS badge component - Tailwind CSS badge examples'
        }
      ]
    }
  }
}
</script>
