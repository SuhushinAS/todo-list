import {doc, DocumentReference} from 'firebase/firestore';
import {useFirestoreContext} from 'modules/firebase/components/Firestore';
import {DD} from 'modules/firebase/lib/types';
import {useMemo} from 'react';

export const useDocRef = <A = DD, D extends DD = A>(
  path: string,
  pathSegment: string
) => {
  const firestore = useFirestoreContext();

  return useMemo(() => {
    return doc(firestore, path, pathSegment) as DocumentReference<A, D>;
  }, [firestore, path, pathSegment]);
};
