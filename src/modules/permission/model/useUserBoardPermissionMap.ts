import {useRolePermissionMap} from 'modules/permission/model/useRolePermissionMap';
import {useRoleIds} from 'modules/role/model/useRoleIds';

export const useUserBoardPermissionMap = (boardId: string, userId: string) => {
  const roleIds = useRoleIds(boardId, userId);

  return useRolePermissionMap(roleIds);
};
