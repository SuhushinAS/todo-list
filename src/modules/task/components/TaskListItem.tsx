import {WithId} from 'modules/firebase/lib/types';
import {TaskListItemBase} from 'modules/task/components/TaskListItemBase';
import {TaskListItemDeleteCol} from 'modules/task/components/TaskListItemDeleteCol';
import {TTask} from 'modules/task/lib/types';
import React from 'react';

type Props = {
  index: number;
  task: WithId<TTask>;
};

export const TaskListItem = ({index, task}: Props) => {
  return (
    <TaskListItemBase
      action={<TaskListItemDeleteCol taskId={task.id} />}
      index={index}
      task={task}
    />
  );
};
