import { compile } from './node_modules/tailwindcss/dist/lib.js'

const result = await compile(`
  @theme {
    --color-primary: 'red';
  }
  .red {
    @apply bg-primary;
  }
`);

console.log(result.build([]));
