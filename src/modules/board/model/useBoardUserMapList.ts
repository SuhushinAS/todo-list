import {onSnapshot, query, QuerySnapshot, where} from 'firebase/firestore';
import {TBoardUserMap} from 'modules/board/lib/types';
import {useCollectionRef} from 'modules/firebase/model/useCollectionRef';
import {useCallback, useEffect, useMemo, useState} from 'react';

type Props = {
  boardId?: string;
  userId?: string;
};

export const useBoardUserMapList = (props: Props) => {
  const [boardUserMap, setBoardUserMap] = useState<TBoardUserMap[]>();

  const constraints = useMemo(() => {
    return Object.entries(props).map(([key, value]) => where(key, '==', value));
  }, [props]);

  const collectionRef = useCollectionRef<TBoardUserMap>('boardUserMap');

  const queryConstraint = useMemo(() => {
    return query(collectionRef, ...constraints);
  }, [collectionRef, constraints]);

  const onSnapshotNext = useCallback(
    (snap: QuerySnapshot<TBoardUserMap, TBoardUserMap>) => {
      const boardUserMapNew = snap.docs.map((doc) => {
        return doc.data();
      });

      setBoardUserMap(boardUserMapNew);
    },
    []
  );

  useEffect(() => {
    return onSnapshot<TBoardUserMap, TBoardUserMap>(
      queryConstraint,
      onSnapshotNext
    );
  }, [onSnapshotNext, queryConstraint]);

  return boardUserMap;
};
