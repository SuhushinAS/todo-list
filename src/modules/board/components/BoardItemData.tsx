import {TBoard} from 'modules/board/lib/types';
import {WithId} from 'modules/firebase/lib/types';
import {Tasks} from 'modules/task/components/Tasks';
import React from 'react';

type Props = {
  board: WithId<TBoard>;
  userId: string;
};

export const BoardItemData = ({board, userId}: Props) => {
  return (
    <div className="box">
      <h2>{board.title}</h2>
      <Tasks boardId={board.id} userId={userId} />
    </div>
  );
};
