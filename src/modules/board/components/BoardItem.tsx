import {BoardItemData} from 'modules/board/components/BoardItemData';
import {boardPath} from 'modules/board/lib/constants';
import {useBoard} from 'modules/board/model/useBoard';
import React from 'react';
import {Navigate, useParams} from 'react-router-dom';

type Props = {
  userId: string;
};

export const BoardItem = ({userId}: Props) => {
  const {boardId = ''} = useParams<{boardId: string}>();
  const board = useBoard(boardId);

  if (board === undefined) {
    return null;
  }

  if (null === board) {
    return <Navigate to={boardPath.home} />;
  }

  return <BoardItemData board={board} userId={userId} />;
};
