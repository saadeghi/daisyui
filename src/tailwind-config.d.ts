// Color name utils
type WithContentAndFocusColorNames<BaseName extends string> = WithContentColorName<BaseName> | `${BaseName}-focus`
type WithContentColorName<BaseName extends string> = BaseName | `${BaseName}-content`

// Theme color and CSS variable options
type RequiredDaisyUiThemeColorNames = "primary" | "secondary" | "accent" | "neutral" | "base-100"
type OptionalDaisyUiThemeColorNames = Exclude<WithContentAndFocusColorNames<"primary" | "secondary" | "accent" | "neutral">, RequiredDaisyUiThemeColorNames> | WithContentColorName<"info" | "success" | "warning" | "error"> | "base-200" | "base-300" | "base-content"
type DaisyUiThemeCssVariables = "--rounded-box" | "--rounded-btn" | "--rounded-badge" | "--animation-btn" | "--animation-input" | "--btn-text-case" | "--btn-focus-scale" | "--border-btn" | "--tab-border" | "--tab-radius"

interface DaisyUiTheme extends Record<RequiredDaisyUiThemeColorNames, string>, Partial<Record<OptionalDaisyUiThemeColorNames, string>>, Partial<Record<OptionalDaisyUiThemeColorNames, string>>, Partial<Record<DaisyUiThemeCssVariables, string>> {}

type DaisyUiConfig = Partial<{
  styled: boolean
  themes: boolean | Array<string | Record<string, DaisyUiTheme>>
  base: boolean
  utils: boolean
  logs: boolean
  rtl: boolean
  prefix: string
  darkTheme: string
}>

// Config type augmentation
declare module "tailwindcss/types/config" {
  interface OptionalConfig {
    daisyui: DaisyUiConfig
  }
}

export {}
