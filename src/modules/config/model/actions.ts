import {useAppDispatch} from 'app/lib/hooks';
import {api} from 'modules/common/lib/api';
import {TConfig} from 'modules/config/lib/types';
import {configActions} from 'modules/config/model/reducers';
import {useStatusSet} from 'modules/status/model/actions';
import {Status} from 'modules/status/model/types';
import {useCallback} from 'react';

export const useConfigGet = () => {
  const dispatch = useAppDispatch();
  const configUpdateStatusSet = useStatusSet(configActions.update.type);

  return useCallback(() => {
    configUpdateStatusSet(Status.loading);

    api
      .requestLocal<TConfig>('/api/v1/config.json')
      .then((data) => {
        dispatch(configActions.update(data));
        configUpdateStatusSet(Status.success);
      })
      .catch(() => {
        configUpdateStatusSet(Status.error);
      });
  }, [configUpdateStatusSet, dispatch]);
};
