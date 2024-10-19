import {doc, DocumentData, DocumentReference} from 'firebase/firestore';
import {useFirestoreContext} from 'modules/firebase/components/Firestore';
import {useMemo} from 'react';

export const useDocRef = <
  AppModelType = DocumentData,
  DbModelType extends DocumentData = DocumentData,
>(
  path: string,
  pathSegment: string
) => {
  const firestore = useFirestoreContext();

  return useMemo(() => {
    return doc(firestore, path, pathSegment) as DocumentReference<
      AppModelType,
      DbModelType
    >;
  }, [firestore, path, pathSegment]);
};
