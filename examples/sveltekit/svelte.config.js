import preprocess from 'svelte-preprocess'

export default {
  preprocess: [
    preprocess({
      defaults: {
        style: 'postcss'
      },
      postcss: true
    })
  ],

  kit: {
    target: '#svelte'
  }
}
