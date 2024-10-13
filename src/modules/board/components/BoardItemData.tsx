import {TBoard, WithId} from 'modules/board/lib/types';
import React from 'react';

type Props = {
  board: WithId<TBoard>;
};

export const BoardItemData = ({board}: Props) => {
  console.log(board);

  return (
    <div>
      <h2>{board.title}</h2>
    </div>
  );
};
