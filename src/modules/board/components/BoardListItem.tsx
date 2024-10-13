import {boardPath} from 'modules/board/lib/constants';
import {TBoard} from 'modules/board/lib/types';
import React from 'react';
import {generatePath, Link} from 'react-router-dom';

type Props = {
  board: TBoard;
};

export const BoardListItem = ({board}: Props) => {
  return (
    <tr>
      <td className="Table__Cell">
        <Link to={generatePath(boardPath.item, {boardId: board.id})}>
          {board.title}
        </Link>
      </td>
    </tr>
  );
};
