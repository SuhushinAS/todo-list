import {SvgIcon} from 'modules/common/components/SvgIcon';
import 'modules/task/components/TaskPriorityIcon.less';
import {TTaskPriority} from 'modules/task/lib/types';
import React, {useMemo} from 'react';

type Props = {
  isCurrent: boolean;
  priority: TTaskPriority;
};

const priorityIconMap = {
  [TTaskPriority.high]: 'bookmark',
  [TTaskPriority.low]: 'bookmark-o',
};

export const TaskPriorityIcon = ({isCurrent, priority}: Props) => {
  const className = useMemo(() => {
    const classList = ['TaskPriorityIcon'];

    if (isCurrent) {
      classList.push('TaskPriorityIcon_Current');
    }

    return classList.join(' ');
  }, [isCurrent]);

  return <SvgIcon className={className} name={priorityIconMap[priority]} />;
};
