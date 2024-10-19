import {
  collection,
  CollectionReference,
  DocumentData,
} from 'firebase/firestore';
import {useFirestoreContext} from 'modules/firebase/components/Firestore';
import {useMemo} from 'react';

export const useCollectionRef = <
  AppModelType = DocumentData,
  DbModelType extends DocumentData = DocumentData,
>(
  path: string
) => {
  const firestore = useFirestoreContext();

  return useMemo(() => {
    return collection(firestore, path) as CollectionReference<
      AppModelType,
      DbModelType
    >;
  }, [firestore, path]);
};
