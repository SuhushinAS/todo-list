import {useAppSelector} from 'app/lib/hooks';
import 'modules/theme/components/ThemeSelector.less';
import {ThemeSelectorIcon} from 'modules/theme/components/ThemeSelectorIcon';
import {
  useTheme,
  useThemeCurrent,
  useThemeDevice,
} from 'modules/theme/lib/hooks';
import {useThemeCurrentSet} from 'modules/theme/model/actions';
import {selectThemeCurrent} from 'modules/theme/model/selectors';
import {TThemeAuto, TThemeDevice} from 'modules/theme/model/types';
import React, {MouseEventHandler, useCallback} from 'react';

const themeList = [TThemeAuto.auto, TThemeDevice.dark, TThemeDevice.light];

const themeNumMap = Object.fromEntries(
  themeList.map((value, index) => [value, index])
);

export const ThemeSelector = () => {
  const themeCurrent = useAppSelector(selectThemeCurrent);
  const themeCurrentSet = useThemeCurrentSet();

  const onClick = useCallback<MouseEventHandler<HTMLButtonElement>>(() => {
    const themeCurrentNum = themeNumMap[themeCurrent];
    const themeNextNum = (themeCurrentNum + 1) % themeList.length;
    const themeNext = themeList[themeNextNum];

    themeCurrentSet(themeNext);
  }, [themeCurrent, themeCurrentSet]);

  useThemeCurrent();

  useThemeDevice();

  useTheme();

  return (
    <button className="ThemeSelector" onClick={onClick} type="button">
      <div className="ThemeSelector__IconWrapper">
        {themeList.map((theme) => {
          return (
            <ThemeSelectorIcon
              isCurrent={theme === themeCurrent}
              key={theme}
              theme={theme}
            />
          );
        })}
      </div>
    </button>
  );
};
