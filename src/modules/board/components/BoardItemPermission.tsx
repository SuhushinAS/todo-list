import {BoardItem} from 'modules/board/components/BoardItem';
import {Permission} from 'modules/permission/components/Permission';
import {PermissionMapProvider} from 'modules/permission/components/PermissionMapProvider';
import {TPermission} from 'modules/permission/lib/types';
import React from 'react';
import {useParams} from 'react-router-dom';

type Props = {
  userId: string;
};

export const BoardItemPermission = ({userId}: Props) => {
  const {boardId = ''} = useParams<{boardId: string}>();

  return (
    <PermissionMapProvider boardId={boardId} userId={userId}>
      <Permission permission={TPermission.BoardRead}>
        <BoardItem boardId={boardId} userId={userId} />
      </Permission>
    </PermissionMapProvider>
  );
};
