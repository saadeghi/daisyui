<template>
  <div>
    <ClassTable v-bind:data="{
      components : [
        { class: 'btn', desc: 'Button' },
      ],
      utilities : [
        { class: 'btn-lg', desc: 'Large button' },
        { class: 'btn-md', desc: 'Medium button (default)' },
        { class: 'btn-sm', desc: 'Small button' },
        { class: 'btn-xs', desc: 'Extra small button' },
        { class: 'btn-wide', desc: 'Wide button (more horizontal padding)' },
        { class: 'btn-block', desc: 'Full width button' },
        { class: 'btn-circle', desc: 'Circle button with a 1:1 ratio' },
        { class: 'btn-square', desc: 'Square button with a 1:1 ratio' },
        { class: 'btn-primary', desc: 'Button with `primary` color' },
        { class: 'btn-secondary', desc: 'Button with `secondary` color' },
        { class: 'btn-accent', desc: 'Button with `accent` color' },
        { class: 'btn-info', desc: 'Button with `info` color' },
        { class: 'btn-success', desc: 'Button with `success` color' },
        { class: 'btn-warning', desc: 'Button with `warning` color' },
        { class: 'btn-error', desc: 'Button with `error` color' },
        { class: 'btn-ghost', desc: 'Button with ghost style' },
        { class: 'btn-link', desc: 'Button styled as a link' },
        { class: 'btn-outline', desc: 'Transparent Button with colored border' },
        { class: 'btn-active', desc: 'Force button to show active state' },
        { class: 'btn-disabled', desc: 'Force button to show disabled state' },
        { class: 'glass', desc: 'Button with a glass effect' },
        { class: 'loading', desc: 'Shows loading spinner' },
        { class: 'no-animation', desc: 'Disables click animation' },
      ]
    }"/>
    <Wrapper classes="flex flex-wrap items-start md:space-x-2 space-y-2 md:space-y-0 flex-col md:flex-row" title="button with brand colors">
      <Button classes="">neutral</Button>
      <Button classes="btn-primary">primary</Button>
      <Button classes="btn-secondary">secondary</Button>
      <Button classes="btn-accent">accent</Button>
      <Button classes="btn-ghost">ghost</Button>
      <Button classes="btn-link">link</Button>
    </Wrapper>

    <Wrapper classes="flex flex-wrap items-start md:space-x-2 space-y-2 md:space-y-0 flex-col md:flex-row" title="active state button">
      <Button classes="btn-active" role="button" aria-pressed="true">neutral</Button>
      <Button classes="btn-primary btn-active" role="button" aria-pressed="true">primary</Button>
      <Button classes="btn-secondary btn-active" role="button" aria-pressed="true">secondary</Button>
      <Button classes="btn-accent btn-active" role="button" aria-pressed="true">accent</Button>
      <Button classes="btn-link btn-active" role="button" aria-pressed="true">link</Button>
    </Wrapper>

    <Wrapper classes="flex flex-wrap items-start md:space-x-2 space-y-2 md:space-y-0 flex-col md:flex-row" title="outline button">
      <Button classes="btn-outline">neutral</Button>
      <Button classes="btn-outline btn-primary">primary</Button>
      <Button classes="btn-outline btn-secondary">secondary</Button>
      <Button classes="btn-outline btn-accent">accent</Button>
    </Wrapper>

    <Wrapper classes="flex flex-wrap items-start md:space-x-2 space-y-2 md:space-y-0 flex-col md:flex-row" title="disabled button">
      <Button disabled>neutral</Button>
      <Button disabled classes="btn-primary">primary</Button>
      <Button disabled classes="btn-ghost">ghost</Button>
      <Button disabled classes="btn-link">link</Button>
      <Button classes="btn-disabled" tabindex="-1" role="button" aria-disabled="true">visually disabled</Button>
    </Wrapper>

    <Wrapper classes="flex flex-wrap items-start md:space-x-2 space-y-2 md:space-y-0 flex-col md:flex-row" title="button with state colors">
      <Button classes="btn-info">info</Button>
      <Button classes="btn-success">success</Button>
      <Button classes="btn-warning">warning</Button>
      <Button classes="btn-error">error</Button>
    </Wrapper>

    <Wrapper classes="flex flex-wrap items-start space-x-2 flex-row" title="responsive buttons">
      <Button classes="btn-xs md:btn-sm lg:btn-md xl:btn-lg">resize your browser</Button>
      <Button classes="btn-square btn-xs md:btn-sm lg:btn-md xl:btn-lg">
        <Icon glyph="close" class="inline-block w-4 h-4 stroke-current md:w-6 md:h-6" />
      </Button>
      <Button classes="btn-circle btn-xs md:btn-sm lg:btn-md xl:btn-lg">
        <Icon glyph="close" class="inline-block w-4 h-4 stroke-current md:w-6 md:h-6" />
      </Button>
    </Wrapper>

    <Wrapper classes="flex flex-wrap items-start md:space-x-2 space-y-2 md:space-y-0 flex-col md:flex-row" title="glass">
      <div class="p-20 bg-cover card bg-base-200" style="background-image: url(https://picsum.photos/id/314/400/300)">
        <Button classes="glass">Glass button</Button>
      </div>
    </Wrapper>

    <Wrapper classes="flex flex-wrap items-start md:space-x-2 space-y-2 md:space-y-0 flex-col md:flex-row" title="button with diffrent HTML tags">
      <a class="btn" href="#" role="button">Link</a>
      <button class="btn" type="submit">Button</button>
      <input class="btn" type="button" value="Input">
      <input class="btn" type="submit" value="Submit">
      <input class="btn" type="reset" value="Reset">
    </Wrapper>

    <Wrapper classes="flex flex-wrap items-start md:space-x-2 space-y-2 md:space-y-0 flex-col md:flex-row" title="button size">
      <Button classes="btn-lg">Large</Button>
      <Button classes="">Normal</Button>
      <Button classes="btn-sm">Small</Button>
      <Button classes="btn-xs">Tiny</Button>
    </Wrapper>

    <Wrapper classes="flex flex-wrap items-start space-y-2 flex-col" title="button wide">
      <Button classes="btn-wide btn-lg">large</Button>
      <Button classes="btn-wide">normal</Button>
      <Button classes="btn-wide btn-sm">small</Button>
      <Button classes="btn-wide btn-xs">tiny</Button>
    </Wrapper>

    <Wrapper classes="flex flex-wrap items-start md:space-x-2 space-y-2 md:space-y-0 flex-col md:flex-row" title="icon button start">
      <Button classes="btn-lg">
        <Icon glyph="close" class="inline-block w-6 h-6 mr-2 stroke-current" />
        Large
      </Button>
      <Button classes="">
        <Icon glyph="close" class="inline-block w-6 h-6 mr-2 stroke-current" />
        Normal
      </Button>
      <Button classes="btn-sm">
        <Icon glyph="close" class="inline-block w-4 h-4 mr-2 stroke-current" />
        Small
      </Button>
      <Button classes="btn-xs">
        <Icon glyph="close" class="inline-block w-4 h-4 mr-1 stroke-current" />
        Tiny
      </Button>
    </Wrapper>

    <Wrapper classes="flex flex-wrap items-start md:space-x-2 space-y-2 md:space-y-0 flex-col md:flex-row" title="icon button end">
      <Button classes="btn-lg">
        Large
        <Icon glyph="arrow" class="inline-block w-6 h-6 ml-2 stroke-current" />
      </Button>
      <Button classes="">
        Normal
        <Icon glyph="arrow" class="inline-block w-6 h-6 ml-2 stroke-current" />
      </Button>
      <Button classes="btn-sm">
        Small
        <Icon glyph="arrow" class="inline-block w-4 h-4 ml-2 stroke-current" />
      </Button>
      <Button classes="btn-xs">
        Tiny
        <Icon glyph="arrow" class="inline-block w-4 h-4 ml-1 stroke-current" />
      </Button>
    </Wrapper>

    <Wrapper classes="flex flex-wrap items-start md:space-x-2 space-y-2 md:space-y-0 flex-col md:flex-row" title="button shapes">
      <Button classes="btn-circle btn-lg">
        <Icon glyph="close" class="inline-block w-6 h-6 stroke-current" />
      </Button>
      <Button classes="btn-circle">
        <Icon glyph="close" class="inline-block w-6 h-6 stroke-current" />
      </Button>
      <Button classes="btn-circle btn-sm">
        <Icon glyph="close" class="inline-block w-4 h-4 stroke-current" />
      </Button>
      <Button classes="btn-circle btn-xs">
        <Icon glyph="close" class="inline-block w-4 h-4 stroke-current" />
      </Button>

    </Wrapper>

    <Wrapper classes="flex flex-wrap items-start md:space-x-2 space-y-2 md:space-y-0 flex-col md:flex-row" title="button shapes">
      <Button classes="btn-square btn-lg">
        <Icon glyph="close" class="inline-block w-6 h-6 stroke-current" />
      </Button>
      <Button classes="btn-square">
        <Icon glyph="close" class="inline-block w-6 h-6 stroke-current" />
      </Button>
      <Button classes="btn-square btn-sm">
        <Icon glyph="close" class="inline-block w-4 h-4 stroke-current" />
      </Button>
      <Button classes="btn-square btn-xs">
        <Icon glyph="close" class="inline-block w-4 h-4 stroke-current" />
      </Button>

    </Wrapper>

    <Wrapper classes="flex flex-wrap items-start md:space-x-2 space-y-2 md:space-y-0 flex-col md:flex-row" title="button shapes">
      <Button classes="btn-outline btn-circle btn-lg">
        <Icon glyph="close" class="inline-block w-6 h-6 stroke-current" />
      </Button>
      <Button classes="btn-outline btn-circle">
        <Icon glyph="close" class="inline-block w-6 h-6 stroke-current" />
      </Button>
      <Button classes="btn-outline btn-circle btn-sm">
        <Icon glyph="close" class="inline-block w-4 h-4 stroke-current" />
      </Button>
      <Button classes="btn-outline btn-circle btn-xs">
        <Icon glyph="close" class="inline-block w-4 h-4 stroke-current" />
      </Button>

    </Wrapper>

    <Wrapper classes="flex flex-wrap items-start md:space-x-2 space-y-2 md:space-y-0 flex-col md:flex-row" title="button shapes">
      <Button classes="btn-outline btn-square btn-lg">
        <Icon glyph="close" class="inline-block w-6 h-6 stroke-current" />
      </Button>
      <Button classes="btn-outline btn-square">
        <Icon glyph="close" class="inline-block w-6 h-6 stroke-current" />
      </Button>
      <Button classes="btn-outline btn-square btn-sm">
        <Icon glyph="close" class="inline-block w-4 h-4 stroke-current" />
      </Button>
      <Button classes="btn-outline btn-square btn-xs">
        <Icon glyph="close" class="inline-block w-4 h-4 stroke-current" />
      </Button>
    </Wrapper>

    <Wrapper classes="flex flex-wrap items-start md:space-x-2 space-y-2 md:space-y-0 flex-col md:flex-row" title="button block">
      <Button classes="btn-block">block</Button>
    </Wrapper>

    <Wrapper classes="flex flex-wrap items-start md:space-x-2 space-y-2 md:space-y-0 flex-col md:flex-row" title="button loading">
      <Button classes="btn-lg loading">loading</Button>
      <Button classes="btn-primary loading">loading</Button>
      <Button classes="btn-sm btn-secondary loading">loading</Button>
      <Button classes="btn-xs btn-accent loading">loading</Button>
    </Wrapper>

    <Wrapper classes="flex flex-wrap items-start md:space-x-2 space-y-2 md:space-y-0 flex-col md:flex-row" title="button loading">
      <Button classes="btn-sm btn-outline btn-primary loading">loading</Button>
      <Button classes="btn-sm btn-outline btn-secondary loading">loading</Button>
      <Button classes="btn-sm btn-outline btn-accent loading">loading</Button>
      <Button classes="btn-sm btn-ghost loading">loading</Button>
    </Wrapper>

    <Wrapper classes="flex flex-wrap items-start md:space-x-2 space-y-2 md:space-y-0 flex-col md:flex-row" title="button loading">
      <Button classes="btn-lg btn-square loading"></Button>
      <Button classes="btn-square loading"></Button>
      <Button classes="btn-sm btn-square loading"></Button>
      <Button classes="btn-xs btn-square loading"></Button>

    </Wrapper>

    <Wrapper classes="flex flex-wrap items-start md:space-x-2 space-y-2 md:space-y-0 flex-col md:flex-row" title="button loading">
      <Button classes="btn-lg btn-circle loading"></Button>
      <Button classes="btn-circle loading"></Button>
      <Button classes="btn-sm btn-circle loading"></Button>
      <Button classes="btn-xs btn-circle loading"></Button>
    </Wrapper>

    <Wrapper classes="flex flex-wrap items-start md:space-x-2 space-y-2 md:space-y-0 flex-col md:flex-row" title="disable animation">
      <Button classes="btn-primary no-animation">I don't have click animation</Button>
    </Wrapper>

  </div>
</template>


<script>
export default {
  head() {
    return {
      title: "daisyUI — Tailwind CSS button component",
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Tailwind CSS button component - Tailwind CSS button examples'
        }
      ]
    }
  }
}
</script>
