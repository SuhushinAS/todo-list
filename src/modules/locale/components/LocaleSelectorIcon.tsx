import 'modules/theme/components/ThemeSelector.less';
import React, {useMemo} from 'react';

type Props = {
  isCurrent: boolean;
  locale: string;
};

export const LocaleSelectorIcon = ({isCurrent, locale}: Props) => {
  const className = useMemo(() => {
    const classList = ['LocaleSelector__Icon'];

    if (isCurrent) {
      classList.push('LocaleSelector__Icon_Current');
    }

    return classList.join(' ');
  }, [isCurrent]);

  return <div className={className}>{locale.toUpperCase()}</div>;
};
