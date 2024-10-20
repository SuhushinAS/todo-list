import {noop, Noop} from 'modules/common/lib/noop';
import {WithId} from 'modules/firebase/lib/types';
import 'modules/task/components/TaskListItem.less';
import {TaskListItemPriority} from 'modules/task/components/TaskListItemPriority';
import {TTask} from 'modules/task/lib/types';
import React, {ReactNode} from 'react';

type Props = {
  action?: ReactNode;
  index: number;
  onClick?: Noop;
  task: WithId<TTask>;
};

export const TaskListItemBase = (props: Props) => {
  const {action, index, onClick = noop, task} = props;

  return (
    <tr className="TaskListItem">
      <td
        className="Table__Cell Table__Cell_Control Table__Cell_Control_Fixed"
        onClick={onClick}
      >
        <p className="offset_ver">{index + 1}</p>
      </td>
      <td className="Table__Cell Table__Cell_Title" onClick={onClick}>
        <p className="TaskListItem__Col" title={task.title}>
          {task.title}
        </p>
      </td>
      <td className="Table__Cell" onClick={onClick}>
        <p className="TaskListItem__Col" title={task.status}>
          {task.status}
        </p>
      </td>
      <td className="TaskListItem__Col_Priority Table__Cell Table__Cell_Control Table__Cell_Control_Fixed">
        <TaskListItemPriority priority={task.priority} taskId={task.id} />
      </td>
      {action}
    </tr>
  );
};
