import {useAppSelector} from 'app/lib/hooks';
import {useGetNextItem} from 'modules/common/lib/useGetNextItem';
import 'modules/theme/components/ThemeSelector.less';
import {ThemeSelectorIcon} from 'modules/theme/components/ThemeSelectorIcon';
import {
  useTheme,
  useThemeCurrent,
  useThemeDevice,
} from 'modules/theme/lib/hooks';
import {TThemeAuto, TThemeDevice} from 'modules/theme/lib/types';
import {useThemeCurrentSet} from 'modules/theme/model/actions';
import {selectThemeCurrent} from 'modules/theme/model/selectors';
import React, {MouseEventHandler, useCallback} from 'react';

const themeList = [TThemeAuto.auto, TThemeDevice.dark, TThemeDevice.light];

export const ThemeSelector = () => {
  const themeCurrent = useAppSelector(selectThemeCurrent);
  const themeCurrentSet = useThemeCurrentSet();
  const getNextItem = useGetNextItem(themeList);

  const onClick = useCallback<MouseEventHandler<HTMLButtonElement>>(() => {
    const themeNext = getNextItem(themeCurrent);

    themeCurrentSet(themeNext);
  }, [getNextItem, themeCurrent, themeCurrentSet]);

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
