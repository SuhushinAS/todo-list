import {TThemeAuto} from 'modules/theme/model/types';

export const themeDefault = TThemeAuto.auto;
export const themeCurrentKey = 'themeCurrent';
export const themeDark = window.matchMedia('(prefers-color-scheme: dark)');
