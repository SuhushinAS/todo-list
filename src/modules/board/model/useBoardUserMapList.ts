import {onSnapshot, where} from 'firebase/firestore';
import {TBoardUserMap} from 'modules/board/lib/types';
import {useCollectionRef} from 'modules/firebase/model/useCollectionRef';
import {useQueryConstraint} from 'modules/firebase/model/useQueryConstraint';
import {useEffect, useMemo, useState} from 'react';

export const useBoardUserMapList = (userId: string) => {
  const [boardUserMap, setBoardUserMap] = useState<TBoardUserMap[]>();
  const constraint = useMemo(() => {
    return where('userId', '==', userId);
  }, [userId]);
  const queryConstraint = useQueryConstraint(
    useCollectionRef('boardUserMap'),
    constraint
  );

  useEffect(() => {
    return onSnapshot(queryConstraint, (snap) => {
      const boardUserMapNew = snap.docs.map((doc) => {
        return doc.data() as TBoardUserMap;
      });

      setBoardUserMap(boardUserMapNew);
    });
  }, [queryConstraint]);

  return boardUserMap;
};
