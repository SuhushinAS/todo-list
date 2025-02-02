import {
  collection,
  CollectionReference,
  documentId,
  onSnapshot,
  query,
  where,
} from 'firebase/firestore';
import {TBoard} from 'modules/board/lib/types';
import {useBoardUserMapList} from 'modules/board/model/useBoardUserMapList';
import {useFirestoreContext} from 'modules/firebase/components/Firestore';
import {getData} from 'modules/firebase/lib/getData';
import {hasData} from 'modules/firebase/lib/hasData';
import {WithId} from 'modules/firebase/lib/types';
import {useEffect, useMemo, useState} from 'react';

export const useBoardList = (userId: string) => {
  const [boardList, setBoardList] = useState<WithId<TBoard>[]>();
  const props = useMemo(() => ({userId}), [userId]);
  const boardUserMapList = useBoardUserMapList(props);
  const firestore = useFirestoreContext();

  useEffect(() => {
    if (boardUserMapList === undefined || 0 === boardUserMapList.length) {
      return undefined;
    }

    const boardCollectionRef = collection(
      firestore,
      'board'
    ) as CollectionReference<TBoard, TBoard>;
    const boardIdList = boardUserMapList.map(({boardId}) => {
      return boardId;
    });
    const constraint = where(documentId(), 'in', boardIdList);
    const queryConstraint = query<TBoard, TBoard>(
      boardCollectionRef,
      constraint
    );

    return onSnapshot<TBoard, TBoard>(queryConstraint, (snap) => {
      const boardList = snap.docs.filter(hasData).map(getData);

      setBoardList(boardList);
    });
  }, [boardUserMapList, firestore]);

  return boardList;
};
