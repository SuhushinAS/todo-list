import {Table} from 'modules/common/components/Table';
import {WithId} from 'modules/firebase/lib/types';
import {TaskEmpty} from 'modules/task/components/TaskEmpty';
import {TaskListItem} from 'modules/task/components/TaskListItem';
import {TTask} from 'modules/task/lib/types';
import React from 'react';

type Props = {
  taskList?: WithId<TTask>[];
};

export const TaskList = ({taskList}: Props) => {
  if (taskList === undefined) {
    return <TaskEmpty />;
  }

  return (
    <Table>
      {taskList.map((task, index) => {
        return <TaskListItem index={index} key={task.id} task={task} />;
      })}
    </Table>
  );
};
