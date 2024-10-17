import {onSnapshot} from 'firebase/firestore';
import {getData} from 'modules/firebase/lib/getData';
import {hasData} from 'modules/firebase/lib/hasData';
import {WithId} from 'modules/firebase/lib/types';
import {useDocRef} from 'modules/firebase/model/useDocRef';
import {TTask} from 'modules/task/lib/types';
import {useEffect, useState} from 'react';

export const useTask = (taskId: string) => {
  const [task, setTask] = useState<WithId<TTask> | null>();
  const taskDocRef = useDocRef<TTask, TTask>('task', taskId);

  useEffect(() => {
    return onSnapshot<TTask, TTask>(taskDocRef, (snap) => {
      const task = hasData(snap) ? getData(snap) : null;

      setTask(task);
    });
  }, [taskDocRef]);

  return task;
};
