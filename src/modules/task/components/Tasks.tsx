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
      <TaskCreate boardId={boardId} userId={userId} />
    </div>
  );
};
