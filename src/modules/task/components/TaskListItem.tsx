import {TaskListItemBase} from 'modules/task/components/TaskListItemBase';
import {TTask} from 'modules/task/lib/types';
import React from 'react';

type Props = {
  index: number;
  task: TTask;
};

export const TaskListItem = ({index, task}: Props) => {
  return <TaskListItemBase index={index} task={task} />;
};
