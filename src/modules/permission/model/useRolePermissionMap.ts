import {
  collection,
  CollectionReference,
  documentId,
  onSnapshot,
  query,
  QueryDocumentSnapshot,
  QuerySnapshot,
  where,
} from 'firebase/firestore';
import {useFirestoreContext} from 'modules/firebase/components/Firestore';
import {hasData} from 'modules/firebase/lib/hasData';
import {TPermission} from 'modules/permission/lib/types';
import {TPermissionMap, TRole} from 'modules/role/lib/types';
import {useCallback, useEffect, useState} from 'react';

const getPermissionIds = (snap: QueryDocumentSnapshot<TRole, TRole>) => {
  return snap
    .data()
    .permissionIds.map<[TPermission, boolean]>((permissionId) => {
      return [permissionId, true];
    });
};

export const useRolePermissionMap = (roleIds: string[]) => {
  const [permissions, setPermissions] = useState<TPermissionMap>({});
  const firestore = useFirestoreContext();

  const onSnapshotNext = useCallback((snap: QuerySnapshot<TRole, TRole>) => {
    const permissionMap = Object.fromEntries(
      snap.docs.filter(hasData).flatMap(getPermissionIds)
    ) as TPermissionMap;

    setPermissions(permissionMap);
  }, []);

  useEffect(() => {
    if (0 === roleIds.length) {
      return undefined;
    }

    const boardCollectionRef = collection(
      firestore,
      'role'
    ) as CollectionReference<TRole, TRole>;
    const constraint = where(documentId(), 'in', roleIds);
    const queryConstraint = query<TRole, TRole>(boardCollectionRef, constraint);

    return onSnapshot<TRole, TRole>(queryConstraint, onSnapshotNext);
  }, [firestore, onSnapshotNext, roleIds]);

  return permissions;
};
