import {Permission} from 'modules/permission/components/Permission';
import {TPermission} from 'modules/permission/lib/types';
import {TaskCreate} from 'modules/task/components/TaskCreate';
import {TaskList} from 'modules/task/components/TaskList';
import {useTaskList} from 'modules/task/model/useTaskList';
import React from 'react';

type Props = {
  boardId: string;
  userId: string;
};

export const Tasks = ({boardId, userId}: Props) => {
  const taskList = useTaskList(boardId);

  return (
    <div>
      <TaskList taskList={taskList} />
      <Permission permission={TPermission.TaskCreate}>
        <TaskCreate boardId={boardId} userId={userId} />
      </Permission>
    </div>
  );
};
