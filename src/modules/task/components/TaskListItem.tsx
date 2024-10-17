import {TTask} from 'modules/task/lib/types';
import React from 'react';

type Props = {
  task: TTask;
};

export const TaskListItem = ({task}: Props) => {
  return (
    <tr>
      <td className="Table__Cell">{task.title}</td>
    </tr>
  );
};
