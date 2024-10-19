import {collection, CollectionReference} from 'firebase/firestore';
import {useFirestoreContext} from 'modules/firebase/components/Firestore';
import {DD} from 'modules/firebase/lib/types';
import {useMemo} from 'react';

export const useCollectionRef = <A = DD, D extends DD = A>(path: string) => {
  const firestore = useFirestoreContext();

  return useMemo(() => {
    return collection(firestore, path) as CollectionReference<A, D>;
  }, [firestore, path]);
};
