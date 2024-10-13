import {onSnapshot} from 'firebase/firestore';
import {TBoard, WithId} from 'modules/board/lib/types';
import {getData} from 'modules/firebase/lib/getData';
import {hasData} from 'modules/firebase/lib/hasData';
import {useDocRef} from 'modules/firebase/model/useDocRef';
import {useEffect, useState} from 'react';

export const useBoard = (boardId: string) => {
  const [board, setBoard] = useState<WithId<TBoard> | null>();
  const boardDocRef = useDocRef<TBoard, TBoard>('board', boardId);

  useEffect(() => {
    return onSnapshot<TBoard, TBoard>(boardDocRef, (snap) => {
      const board = hasData(snap) ? getData(snap) : null;

      setBoard(board);
    });
  }, [boardDocRef]);

  return board;
};
