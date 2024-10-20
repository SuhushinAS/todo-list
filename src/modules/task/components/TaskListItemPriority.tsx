import {TPermission} from 'modules/permission/lib/types';
import {usePermission} from 'modules/permission/model/usePermission';
import {TaskPriorityButton} from 'modules/task/components/TaskPriorityButton';
import {TaskPriorityIcons} from 'modules/task/components/TaskPriorityIcons';
import {TTaskPriority} from 'modules/task/lib/types';
import React from 'react';

type Props = {
  priority: TTaskPriority;
  taskId: string;
};

export const TaskListItemPriority = ({priority, taskId}: Props) => {
  const canTaskUpdate = usePermission(TPermission.TaskUpdate);

  if (canTaskUpdate) {
    return (
      <TaskPriorityButton priority={priority} taskId={taskId}>
        <TaskPriorityIcons priority={priority} />
      </TaskPriorityButton>
    );
  }

  return <TaskPriorityIcons priority={priority} />;
};
