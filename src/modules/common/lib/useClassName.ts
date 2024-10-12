import {getClassName} from 'modules/common/lib/getClassName';
import {useMemo} from 'react';

export const useClassName = (classNameBase: string, className?: string) => {
  return useMemo(() => {
    return getClassName(classNameBase, className);
  }, [className, classNameBase]);
};
