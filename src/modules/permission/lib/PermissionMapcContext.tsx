import {TPermissionMap} from 'modules/role/lib/types';
import {createContext} from 'react';

export const PermissionMapContext = createContext<TPermissionMap>({});
