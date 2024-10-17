import {BoardListItem} from 'modules/board/components/BoardListItem';
import {TBoard} from 'modules/board/lib/types';
import {Table} from 'modules/common/components/Table';
import {WithId} from 'modules/firebase/lib/types';
import React from 'react';

type Props = {
  boardList?: WithId<TBoard>[];
};

export const BoardList = ({boardList}: Props) => {
  if (boardList === undefined) {
    return null;
  }

  return (
    <Table>
      {boardList.map((board) => {
        return <BoardListItem board={board} key={board.id} />;
      })}
    </Table>
  );
};
