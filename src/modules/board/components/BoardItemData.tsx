import {TBoard} from 'modules/board/lib/types';
import {WithId} from 'modules/firebase/lib/types';
import {Tasks} from 'modules/task/components/Tasks';
import React from 'react';

type Props = {
  board: WithId<TBoard>;
};

export const BoardItemData = ({board}: Props) => {
  return (
    <div>
      <h2>{board.title}</h2>
      <Tasks boardId={board.id} />
    </div>
  );
};
