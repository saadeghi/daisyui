<script>
  import "../../../../dist/themes.css"
  const base = import.meta.glob("../../../base/*.css", { eager: true })
  import "tailwindcss/base.css"
  const unstyled = import.meta.glob("../../../components/unstyled/*.css", { eager: true })
  const styled = import.meta.glob("../../../components/styled/*.css", { eager: true })
  import "tailwindcss/components.css"
  const utilitiesGlobal = import.meta.glob("../../../utilities/global/*.css", { eager: true })
  const utilitiesUnstyled = import.meta.glob("../../../utilities/unstyled/*.css", { eager: true })
  const utilitiesStyled = import.meta.glob("../../../utilities/styled/*.css", { eager: true })
  import "tailwindcss/utilities.css"
</script>
