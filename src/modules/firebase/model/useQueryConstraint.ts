import {Query, query, QueryConstraint} from 'firebase/firestore';
import {DD} from 'modules/firebase/lib/types';
import {useMemo} from 'react';

export const useQueryConstraint = <A = DD, D extends DD = A>(
  q: Query,
  constraint: QueryConstraint
) => {
  return useMemo(() => {
    return query<A, D>(q, constraint);
  }, [q, constraint]);
};
