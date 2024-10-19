import {TPermission} from 'modules/permission/lib/types';
import {usePermissionMap} from 'modules/permission/model/usePermissionMap';

export const usePermission = (permission: TPermission) => {
  const permissionMap = usePermissionMap();

  return permissionMap[permission];
};
