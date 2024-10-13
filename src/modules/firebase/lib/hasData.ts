import {DocumentData} from '@firebase/firestore';
import {DocumentSnapshot} from 'firebase/firestore';

export const hasData = <A, D extends DocumentData>(
  snap: DocumentSnapshot<A, D>
): boolean => {
  return snap.exists();
};
