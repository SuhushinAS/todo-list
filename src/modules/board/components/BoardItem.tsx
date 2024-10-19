import {BoardItemData} from 'modules/board/components/BoardItemData';
import {boardPath} from 'modules/board/lib/constants';
import {useBoard} from 'modules/board/model/useBoard';
import React from 'react';
import {Navigate} from 'react-router-dom';

type Props = {
  boardId: string;
  userId: string;
};

export const BoardItem = ({boardId, userId}: Props) => {
  const board = useBoard(boardId);

  if (board === undefined) {
    return null;
  }

  if (null === board) {
    return <Navigate to={boardPath.home} />;
  }

  return <BoardItemData board={board} userId={userId} />;
};
