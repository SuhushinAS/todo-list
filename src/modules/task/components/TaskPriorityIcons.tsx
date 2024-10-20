import {TaskPriorityIcon} from 'modules/task/components/TaskPriorityIcon';
import {TTaskPriority} from 'modules/task/lib/types';
import React from 'react';

type Props = {
  priority: TTaskPriority;
};

const priorityList = [TTaskPriority.low, TTaskPriority.high];

export const TaskPriorityIcons = ({priority}: Props) => {
  return priorityList.map((item) => (
    <TaskPriorityIcon
      isCurrent={item === priority}
      key={item}
      priority={item}
    />
  ));
};
