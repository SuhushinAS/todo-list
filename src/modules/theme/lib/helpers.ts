import {themeCurrentKey, themeDefault} from 'modules/theme/lib/constants';
import {TTheme, TThemeDevice} from 'modules/theme/lib/types';

export const getThemeCurrent = (): TTheme => {
  try {
    const themeCurrent = localStorage.getItem(themeCurrentKey);

    if (null === themeCurrent) {
      return themeDefault;
    }

    const themeDevice: TThemeDevice = TThemeDevice[themeCurrent];

    if (themeDevice === undefined) {
      return themeDefault;
    }

    return themeDevice;
  } catch {
    return themeDefault;
  }
};

export const getThemeDevice = (
  themeDark: MediaQueryList | MediaQueryListEvent
): TThemeDevice => {
  return themeDark.matches ? TThemeDevice.dark : TThemeDevice.light;
};
