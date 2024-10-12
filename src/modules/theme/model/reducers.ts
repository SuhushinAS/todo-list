import {createSlice} from '@reduxjs/toolkit';
import {getThemeCurrent, getThemeDevice} from 'modules/theme/lib/helpers';
import {themeDark} from 'modules/theme/model/constants';
import {TThemeStore} from 'modules/theme/model/types';

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
