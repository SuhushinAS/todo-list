import {TaskList} from 'modules/task/components/TaskList';
import {useTaskList} from 'modules/task/model/useTaskList';
import React from 'react';

type Props = {
  boardId: string;
};

export const Tasks = ({boardId}: Props) => {
  const taskList = useTaskList(boardId);
  console.log(taskList);

  return <TaskList taskList={taskList} />;
};
