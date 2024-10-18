import {addDoc, serverTimestamp} from 'firebase/firestore';
import {useCollectionRef} from 'modules/firebase/model/useCollectionRef';
import {TaskForm} from 'modules/task/components/TaskForm';
import {TTask, TTaskPriority, TTaskStatus} from 'modules/task/lib/types';
import React, {useCallback, useMemo} from 'react';
import {DefaultValues, SubmitHandler} from 'react-hook-form';

type Props = {
  boardId: string;
  userId: string;
};

export const TaskCreate = ({boardId, userId}: Props) => {
  const defaultValues = useMemo<DefaultValues<TTask>>(() => {
    return {
      boardId,
      createdAt: serverTimestamp(),
      createdBy: userId,
      priority: TTaskPriority.low,
      status: TTaskStatus.todo,
      title: '',
    };
  }, [boardId, userId]);

  const taskCollectionRef = useCollectionRef('task');
  const onSubmit = useCallback<SubmitHandler<TTask>>(
    (values) => {
      return addDoc(taskCollectionRef, values);
    },
    [taskCollectionRef]
  );

  return <TaskForm defaultValues={defaultValues} onSubmit={onSubmit} />;
};
