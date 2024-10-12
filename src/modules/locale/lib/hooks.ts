import {useAppSelector} from 'app/lib/hooks';
import {getLocaleCurrent, getMessage} from 'modules/locale/lib/helpers';
import {useLocaleSetCurrent} from 'modules/locale/model/actions';
import {selectLocaleList} from 'modules/locale/model/selectors';
import {TMessage} from 'modules/locale/model/types';
import {useEffect, useMemo} from 'react';
import {useIntl} from 'react-intl';

export const useLocaleCurrent = () => {
  const localeSetCurrent = useLocaleSetCurrent();
  const localeList = useAppSelector(selectLocaleList);

  useEffect(() => {
    const themeCurrent = getLocaleCurrent(localeList);

    localeSetCurrent(themeCurrent);
  }, [localeList, localeSetCurrent]);
};

export const useMessage: TMessage = (id, values) => {
  const intl = useIntl();

  return useMemo(() => getMessage(intl)(id, values), [id, intl, values]);
};
