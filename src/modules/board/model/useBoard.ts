import {DocumentSnapshot, onSnapshot} from 'firebase/firestore';
import {TBoard} from 'modules/board/lib/types';
import {getData} from 'modules/firebase/lib/getData';
import {hasData} from 'modules/firebase/lib/hasData';
import {WithId} from 'modules/firebase/lib/types';
import {useDocRef} from 'modules/firebase/model/useDocRef';
import {useCallback, useEffect, useState} from 'react';

export const useBoard = (boardId: string) => {
  const [board, setBoard] = useState<WithId<TBoard> | null>();
  const boardDocRef = useDocRef<TBoard>('board', boardId);

  const onSnapshotNext = useCallback(
    (snap: DocumentSnapshot<TBoard, TBoard>) => {
      const board = hasData(snap) ? getData(snap) : null;

      setBoard(board);
    },
    []
  );

  useEffect(() => {
    return onSnapshot<TBoard, TBoard>(boardDocRef, onSnapshotNext);
  }, [boardDocRef, onSnapshotNext]);

  return board;
};
