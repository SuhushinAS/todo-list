import {DocumentSnapshot} from 'firebase/firestore';
import {DD, WithId} from 'modules/firebase/lib/types';

export const getData = <A, D extends DD>(
  snap: DocumentSnapshot<A, D>
): WithId<A> => {
  return {
    ...snap.data(),
    id: snap.id,
  };
};
