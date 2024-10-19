import {useBoardUserMapList} from 'modules/board/model/useBoardUserMapList';
import {useMemo} from 'react';

export const useRoleIds = (boardId: string, userId: string) => {
  const props = useMemo(() => ({boardId, userId}), [boardId, userId]);
  const boardUserMapList = useBoardUserMapList(props);

  return useMemo<string[]>(() => {
    if (boardUserMapList === undefined) {
      return [];
    }

    return boardUserMapList.map(({roleId}) => roleId);
  }, [boardUserMapList]);
};
