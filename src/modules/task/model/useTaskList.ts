import {onSnapshot, where} from 'firebase/firestore';
import {getData} from 'modules/firebase/lib/getData';
import {hasData} from 'modules/firebase/lib/hasData';
import {WithId} from 'modules/firebase/lib/types';
import {useCollectionRef} from 'modules/firebase/model/useCollectionRef';
import {useQueryConstraint} from 'modules/firebase/model/useQueryConstraint';
import {TTask} from 'modules/task/lib/types';
import {useEffect, useMemo, useState} from 'react';

export const useTaskList = (boardId: string) => {
  const [taskList, setTaskList] = useState<WithId<TTask>[]>();
  const queryConstraint = useMemo(() => {
    return where('boardId', '==', boardId);
  }, [boardId]);
  const q = useQueryConstraint<TTask, TTask>(
    useCollectionRef('task'),
    queryConstraint
  );

  useEffect(
    () =>
      onSnapshot<TTask, TTask>(q, (snap) => {
        const taskList = snap.docs.filter(hasData).map(getData);

        setTaskList(taskList);
      }),
    [q]
  );

  return taskList;
};
