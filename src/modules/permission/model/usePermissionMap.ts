import {PermissionMapContext} from 'modules/permission/lib/PermissionMapcContext';
import {useContext} from 'react';

export const usePermissionMap = () => {
  const permissionMap = useContext(PermissionMapContext);

  if (permissionMap === undefined) {
    throw new Error(
      'usePermissionMapContext can only be used in a PermissionMapProvider'
    );
  }

  return permissionMap;
};
