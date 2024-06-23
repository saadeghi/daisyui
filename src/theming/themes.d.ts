import type { CustomTheme, Theme } from "../index"

declare const themes: Record<`${Theme}`, CustomTheme[string]>

export = themes
