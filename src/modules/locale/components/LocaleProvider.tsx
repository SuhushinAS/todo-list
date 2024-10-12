import {useAppSelector} from 'app/lib/hooks';
import {useLocaleCurrent} from 'modules/locale/lib/hooks';
import {
  useLocaleGetList,
  useLocaleGetMessages,
} from 'modules/locale/model/actions';
import {localeActions} from 'modules/locale/model/reducers';
import {
  selectCurrentMessages,
  selectLocaleCurrent,
} from 'modules/locale/model/selectors';
import {selectStatusItem} from 'modules/status/model/selectors';
import {Status} from 'modules/status/model/types';
import React, {ReactNode, useEffect} from 'react';
import {IntlProvider} from 'react-intl';

type TLocaleProps = {
  children: ReactNode;
};

export const LocaleProvider = (props: TLocaleProps) => {
  const {children} = props;
  const localeGetList = useLocaleGetList();
  const localeGetMessages = useLocaleGetMessages();
  const localeCurrent = useAppSelector(selectLocaleCurrent);
  const loadMessages = useAppSelector(
    selectStatusItem(localeActions.getMessages.type)
  );
  const messages = useAppSelector(selectCurrentMessages);

  useLocaleCurrent();

  useEffect(() => {
    localeGetList();
  }, [localeGetList]);

  useEffect(() => {
    if (!messages && loadMessages !== Status.loading && localeCurrent) {
      localeGetMessages(localeCurrent);
    }
  }, [loadMessages, localeCurrent, localeGetMessages, messages]);

  if (!messages) {
    return null;
  }

  return (
    <IntlProvider locale={localeCurrent} messages={messages}>
      {children}
    </IntlProvider>
  );
};
