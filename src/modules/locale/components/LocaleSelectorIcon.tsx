import clsx from 'clsx';
import 'modules/theme/components/ThemeSelector.less';
import React, {useMemo} from 'react';

type Props = {
  isCurrent: boolean;
  locale: string;
};

export const LocaleSelectorIcon = ({isCurrent, locale}: Props) => {
  const className = useMemo(() => {
    return clsx({
      LocaleSelector__Icon: true,
      LocaleSelector__Icon_Current: isCurrent,
    });
  }, [isCurrent]);

  return <div className={className}>{locale.toUpperCase()}</div>;
};
