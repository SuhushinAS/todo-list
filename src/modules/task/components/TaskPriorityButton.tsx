import {updateDoc} from 'firebase/firestore';
import {useGetNextItem} from 'modules/common/lib/useGetNextItem';
import {useDocRef} from 'modules/firebase/model/useDocRef';
import {Button} from 'modules/form/components/Button';
import 'modules/task/components/TaskPriorityButton.less';
import {TTask, TTaskPriority} from 'modules/task/lib/types';
import React, {useCallback} from 'react';

type Props = {
  children: React.ReactNode;
  priority: TTaskPriority;
  taskId: string;
};

const priorityList = [TTaskPriority.low, TTaskPriority.high];

export const TaskPriorityButton = ({children, priority, taskId}: Props) => {
  const taskDocRef = useDocRef<TTask>('task', taskId);
  const getNextItem = useGetNextItem(priorityList);

  const onClick = useCallback(() => {
    const nextPriority = getNextItem(priority);

    return updateDoc(taskDocRef, {priority: nextPriority});
  }, [getNextItem, priority, taskDocRef]);

  return (
    <Button className="TaskPriorityButton" onClick={onClick} type="button">
      {children}
    </Button>
  );
};
