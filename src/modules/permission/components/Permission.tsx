import {TPermission} from 'modules/permission/lib/types';
import {usePermission} from 'modules/permission/model/usePermission';
import React from 'react';

type Props = {
  children: React.ReactNode;
  permission: TPermission;
};

export const Permission = ({children, permission}: Props) => {
  const hasAccess = usePermission(permission);

  if (true === hasAccess) {
    return children;
  }

  return null;
};
