import {createSlice} from '@reduxjs/toolkit';
import {themeDark} from 'modules/theme/lib/constants';
import {getThemeCurrent, getThemeDevice} from 'modules/theme/lib/helpers';
import {TThemeStore} from 'modules/theme/lib/types';

const initialState: TThemeStore = {
  current: getThemeCurrent(),
  device: getThemeDevice(themeDark),
};

export const theme = createSlice({
  initialState,
  name: 'theme',
  reducers: {
    setCurrent: (state, {payload}) => {
      state.current = payload;
    },
    setDevice: (state, {payload}) => {
      state.device = payload;
    },
  },
});

export const themeActions = theme.actions;
export const themeName = theme.name;
export const themeReducer = theme.reducer;
