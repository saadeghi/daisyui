import { CustomTheme, Theme } from '../index';

declare const themes: Record<`[data-theme=${Theme}]`, CustomTheme[string]>;

export default themes;
