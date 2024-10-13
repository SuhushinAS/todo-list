import {BoardList} from 'modules/board/components/BoardList';
import {useBoardList} from 'modules/board/model/useBoardList';
import React from 'react';

type Props = {
  userId: string;
};

export const Boards = ({userId}: Props) => {
  const boardList = useBoardList(userId);

  return <BoardList boardList={boardList} />;
};
