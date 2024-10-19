import {TPermission} from 'modules/permission/lib/types';

export type TRole = {
  name: string;
  permissionIds: TPermission[];
};

export type TPermissionMap = {
  [key in TPermission]?: boolean;
};
