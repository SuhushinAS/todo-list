import {DocumentSnapshot} from 'firebase/firestore';
import {DD} from 'modules/firebase/lib/types';

export const hasData = <A, D extends DD>(
  snap: DocumentSnapshot<A, D>
): boolean => {
  return snap.exists();
};
