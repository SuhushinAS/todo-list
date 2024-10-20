import {appPath} from 'app/lib/constants';
import {boardPath} from 'modules/board/lib/constants';
import {TBoard} from 'modules/board/lib/types';
import {WithId} from 'modules/firebase/lib/types';
import React from 'react';
import {generatePath, Link} from 'react-router-dom';

type Props = {
  board: WithId<TBoard>;
};

export const BoardListItem = ({board}: Props) => {
  return (
    <tr>
      <td className="Table__Cell">
        <Link
          to={`${appPath.boards}${generatePath(boardPath.item, {boardId: board.id})}`}
        >
          {board.title}
        </Link>
      </td>
    </tr>
  );
};
