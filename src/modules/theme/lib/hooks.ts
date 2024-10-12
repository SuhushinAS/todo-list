import {useAppDispatch, useAppSelector} from 'app/lib/hooks';
import {getThemeCurrent, getThemeDevice} from 'modules/theme/lib/helpers';
import {useThemeCurrentSet} from 'modules/theme/model/actions';
import {themeDark} from 'modules/theme/model/constants';
import {themeActions} from 'modules/theme/model/reducers';
import {selectTheme} from 'modules/theme/model/selectors';
import {TThemeDevice} from 'modules/theme/model/types';
import {useCallback, useEffect} from 'react';

const {body} = document;

export const useThemeCurrent = () => {
  const themeCurrentSet = useThemeCurrentSet();

  useEffect(() => {
    const themeCurrent = getThemeCurrent();

    themeCurrentSet(themeCurrent);
  }, [themeCurrentSet]);
};

export const useThemeDevice = () => {
  const dispatch = useAppDispatch();

  const onChange = useCallback(
    (e: MediaQueryListEvent) => {
      const themeDevice = getThemeDevice(e);

      dispatch(themeActions.setDevice(themeDevice));
    },
    [dispatch]
  );

  useEffect(() => {
    const themeDevice = getThemeDevice(themeDark);

    dispatch(themeActions.setDevice(themeDevice));
  }, [dispatch]);

  useEffect(() => {
    themeDark.addEventListener('change', onChange);

    return () => {
      themeDark.removeEventListener('change', onChange);
    };
  }, [onChange]);
};

export const useTheme = () => {
  const theme = useAppSelector(selectTheme);

  useEffect(() => {
    body.classList.add('theme');
  }, []);

  useEffect(() => {
    body.classList.remove(
      `theme_${TThemeDevice.dark}`,
      `theme_${TThemeDevice.light}`
    );
    body.classList.add(`theme_${theme}`);
  }, [theme]);
};
