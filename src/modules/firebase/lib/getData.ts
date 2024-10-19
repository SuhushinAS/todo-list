import {DocumentData, DocumentSnapshot} from 'firebase/firestore';
import {WithId} from 'modules/firebase/lib/types';

export const getData = <A, D extends DocumentData>(
  snap: DocumentSnapshot<A, D>
): WithId<A> => {
  return {
    ...snap.data(),
    id: snap.id,
  };
};
