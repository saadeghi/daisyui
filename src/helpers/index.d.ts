export interface ThemeColors {
    primary: string;
    primaryFocus: string;
    primaryContent: string;
    secondary: string;
    secondaryFocus: string;
    secondaryContent: string;
    accent: string;
    accentFocus: string;
    accentContent: string;
    neutral: string;
    neutralFocus: string;
    neutralContent: string;
    base100: string;
    base200: string;
    base300: string;
    baseContent: string;
    info: string;
    infoContent: string;
    success: string;
    successContent: string;
    warning: string;
    warningContent: string;
    error: string;
    errorContent: string;
}


export function extractThemeColorsFromDOM(): ThemeColors
