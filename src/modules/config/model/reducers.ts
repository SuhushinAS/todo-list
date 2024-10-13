import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import type {TConfig} from 'modules/config/lib/types';

const initialState: TConfig = {
  host: '',
};

export const config = createSlice({
  initialState,
  name: 'config',
  reducers: {
    update(state, {payload}: PayloadAction<TConfig>) {
      return {...state, ...payload};
    },
  },
});

export const configActions = config.actions;
export const configName = config.name;
export const configReducer = config.reducer;
