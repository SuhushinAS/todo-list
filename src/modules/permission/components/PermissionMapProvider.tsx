import {PermissionMapContext} from 'modules/permission/lib/PermissionMapcContext';
import {useUserBoardPermissionMap} from 'modules/permission/model/useUserBoardPermissionMap';
import React from 'react';

type Props = {
  boardId: string;
  children: React.ReactNode;
  userId: string;
};

export const PermissionMapProvider = ({boardId, children, userId}: Props) => {
  const permissionMap = useUserBoardPermissionMap(boardId, userId);

  return (
    <PermissionMapContext.Provider value={permissionMap}>
      {children}
    </PermissionMapContext.Provider>
  );
};
