import {noop, Noop} from 'modules/common/lib/noop';
import {WithId} from 'modules/firebase/lib/types';
import 'modules/task/components/TaskListItem.less';
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
        className="TaskListItem__Cell Table__Cell Table__Cell_Control Table__Cell_Control_Fixed"
        onClick={onClick}
      >
        <p className="offset_ver">{index + 1}</p>
      </td>
      <td
        className="TaskListItem__Cell Table__Cell Table__Cell_Title"
        onClick={onClick}
      >
        <p className="TaskListItem__Title" title={task.title}>
          {task.title}
        </p>
      </td>
      {action}
    </tr>
  );
};
