import {useAppDispatch} from 'app/lib/hooks';
import {themeCurrentKey} from 'modules/theme/model/constants';
import {themeActions} from 'modules/theme/model/reducers';
import {useCallback} from 'react';

export const useThemeCurrentSet = () => {
  const dispatch = useAppDispatch();

  return useCallback(
    (themeCurrent: string) => {
      localStorage.setItem(themeCurrentKey, themeCurrent);

      return dispatch(themeActions.setCurrent(themeCurrent));
    },
    [dispatch]
  );
};
