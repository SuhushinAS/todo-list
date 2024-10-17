import {Table} from 'modules/common/components/Table';
import {WithId} from 'modules/firebase/lib/types';
import {TaskListItem} from 'modules/task/components/TaskListItem';
import {TTask} from 'modules/task/lib/types';
import React from 'react';

type Props = {
  taskList?: WithId<TTask>[];
};

export const TaskList = ({taskList}: Props) => {
  if (taskList === undefined) {
    return null;
  }

  return (
    <Table>
      {taskList.map((task) => {
        return <TaskListItem key={task.id} task={task} />;
      })}
    </Table>
  );
};
