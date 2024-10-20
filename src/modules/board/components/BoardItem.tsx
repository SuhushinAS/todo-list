import {appPath} from 'app/lib/constants';
import {BoardItemData} from 'modules/board/components/BoardItemData';
import {boardItem, boardPath} from 'modules/board/lib/constants';
import {useBoard} from 'modules/board/model/useBoard';
import React from 'react';
import {generatePath, Navigate, Route, Routes} from 'react-router-dom';

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

  return (
    <Routes>
      <Route
        element={<BoardItemData board={board} userId={userId} />}
        path={`${boardItem.edit}/*`}
      />
      <Route
        element={
          <Navigate
            to={`${appPath.boards}${generatePath(boardPath.item, {boardId})}${boardItem.edit}`}
          />
        }
        path="*"
      />
    </Routes>
  );
};
