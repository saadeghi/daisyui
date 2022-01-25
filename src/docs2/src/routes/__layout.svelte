<script>

  if (process.env.NODE_ENV === "development") {
    import('../../../../dist/themes.css')
    const base = import.meta.globEager('../../../base/*.css')
    import('tailwindcss/base.css')
    const unstyled = import.meta.globEager('../../../components/unstyled/*.css')
    const styled = import.meta.globEager('../../../components/styled/*.css')
    import('tailwindcss/components.css')
    const utilitiesGlobal = import.meta.globEager('../../../utilities/global/*.css')
    const utilitiesUnstyled = import.meta.globEager('../../../utilities/unstyled/*.css')
    const utilitiesStyled = import.meta.globEager('../../../utilities/styled/*.css')
    import('tailwindcss/utilities.css')
  }
  if (process.env.NODE_ENV === "production") {
    // import('../tailwind.css')
  }
  import "prism-themes/themes/prism-material-dark.css";

  import Navbar from "@components/Navbar.svelte";
  import Scripts from "@components/Scripts.svelte";

</script>

<style global>
  .prose pre[class*="language-"]{
    background-color: hsl(var(--n));
    color: hsl(var(--nc));
  }
</style>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap" rel="stylesheet">
</svelte:head>

<Navbar />
<slot />
<Scripts />

