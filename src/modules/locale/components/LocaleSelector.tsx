import {useAppSelector} from 'app/lib/hooks';
import {useGetNextItem} from 'modules/common/lib/useGetNextItem';
import 'modules/locale/components/LocaleSelector.less';
import {LocaleSelectorIcon} from 'modules/locale/components/LocaleSelectorIcon';
import {
  useLocaleGetMessages,
  useLocaleSetCurrent,
} from 'modules/locale/model/actions';
import {
  selectLocaleCurrent,
  selectLocaleData,
  selectLocaleList,
} from 'modules/locale/model/selectors';
import React, {ChangeEvent, useCallback, useEffect, useState} from 'react';

const renderLocaleOption = (locale: string) => (
  <option key={locale} value={locale}>
    {locale}
  </option>
);

export const LocaleSelector = () => {
  const localeCurrent = useAppSelector(selectLocaleCurrent);
  const localeList = useAppSelector(selectLocaleList);
  const localeData = useAppSelector(selectLocaleData);
  const [locale, setLocale] = useState(localeCurrent);
  const localeSetCurrent = useLocaleSetCurrent();
  const localeGetMessages = useLocaleGetMessages();
  const getNextItem = useGetNextItem(localeList);

  const onLocaleNext = useCallback(() => {
    const localeNext = getNextItem(locale);

    setLocale(localeNext);
  }, [getNextItem, locale]);

  const onLocaleChange = useCallback(
    (event: ChangeEvent<HTMLSelectElement>) => {
      setLocale(event.target.value);
    },
    []
  );

  useEffect(() => {
    if (!localeData[locale]) {
      localeGetMessages(locale);
    } else if (locale !== localeCurrent) {
      localeSetCurrent(locale);
    }
  }, [locale, localeCurrent, localeData, localeGetMessages, localeSetCurrent]);

  return (
    <button className="LocaleSelector" onClick={onLocaleNext} type="button">
      <div className="LocaleSelector__IconWrapper">
        {localeList.map((localeItem) => {
          return (
            <LocaleSelectorIcon
              isCurrent={localeItem === locale}
              key={localeItem}
              locale={localeItem}
            />
          );
        })}
      </div>
    </button>
  );
};
