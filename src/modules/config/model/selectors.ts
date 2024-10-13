import {TState} from 'app/lib/types';
import {configName} from 'modules/config/model/reducers';

export const selectConfig = (state: TState) => {
  return state[configName];
};
