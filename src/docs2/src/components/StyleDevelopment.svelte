<script>
  import "../../../../dist/themes.css"
  const base = import.meta.globEager("../../../base/*.css")
  import "tailwindcss/base.css"
  const unstyled = import.meta.globEager("../../../components/unstyled/*.css")
  const styled = import.meta.globEager("../../../components/styled/*.css")
  import "tailwindcss/components.css"
  const utilitiesGlobal = import.meta.globEager("../../../utilities/global/*.css")
  const utilitiesUnstyled = import.meta.globEager("../../../utilities/unstyled/*.css")
  const utilitiesStyled = import.meta.globEager("../../../utilities/styled/*.css")
  import "tailwindcss/utilities.css"
</script>
