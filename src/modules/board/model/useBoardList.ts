import {
  collection,
  documentId,
  onSnapshot,
  query,
  where,
} from 'firebase/firestore';
import {TBoard} from 'modules/board/lib/types';
import {useBoardUserMapList} from 'modules/board/model/useBoardUserMapList';
import {useFirestoreContext} from 'modules/firebase/components/Firestore';
import {useEffect, useState} from 'react';

export const useBoardList = (userId: string) => {
  const [boardList, setBoardList] = useState<TBoard[]>();
  const boardUserMapList = useBoardUserMapList(userId);
  const firestore = useFirestoreContext();

  useEffect(() => {
    if (boardUserMapList === undefined || 0 === boardUserMapList.length) {
      return undefined;
    }

    const boardCollectionRef = collection(firestore, 'board');
    const boardIdList = boardUserMapList.map((boardUserMap) => {
      return boardUserMap.boardId;
    });
    const constraint = where(documentId(), 'in', boardIdList);
    const queryConstraint = query(boardCollectionRef, constraint);

    return onSnapshot(queryConstraint, (snap) => {
      const boardListNew = snap.docs.map((doc) => {
        return {
          ...doc.data(),
          id: doc.id,
        } as TBoard;
      });

      setBoardList(boardListNew);
    });
  }, [boardUserMapList, firestore]);

  return boardList;
};
