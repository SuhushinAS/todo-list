import {SvgIcon} from 'modules/common/components/SvgIcon';
import 'modules/theme/components/ThemeSelectorIcon.less';
import {TTheme, TThemeAuto, TThemeDevice} from 'modules/theme/lib/types';
import React, {useMemo} from 'react';

type Props = {
  isCurrent: boolean;
  theme: TTheme;
};

const themeIconMap = {
  [TThemeAuto.auto]: 'adjust',
  [TThemeDevice.dark]: 'moon-o',
  [TThemeDevice.light]: 'sun-o',
};

export const ThemeSelectorIcon = ({isCurrent, theme}: Props) => {
  const className = useMemo(() => {
    const classList = ['ThemeSelectorIcon'];

    if (isCurrent) {
      classList.push('ThemeSelectorIcon_Current');
    }

    return classList.join(' ');
  }, [isCurrent]);

  return <SvgIcon className={className} name={themeIconMap[theme]} />;
};
