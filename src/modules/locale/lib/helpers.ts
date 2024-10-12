import {localeCurrentKey, localeDefault} from 'modules/locale/model/constants';
import {IntlShape} from 'react-intl';

export const defaultMessage = '\u00A0';

export const getMessage = <V>(intl: IntlShape) => {
  return (id, values: V) => {
    return intl.formatMessage({defaultMessage, id}, values);
  };
};

export const getLocaleCurrent = (localeList: string[]): string => {
  try {
    const localeCurrent = localStorage.getItem(localeCurrentKey);

    if (null === localeCurrent) {
      return localeDefault;
    }

    if (localeList.includes(localeCurrent)) {
      return localeCurrent;
    }

    return localeDefault;
  } catch {
    return localeDefault;
  }
};
