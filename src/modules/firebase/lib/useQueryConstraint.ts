import {Query, QueryConstraint} from '@firebase/firestore';
import {query} from 'firebase/firestore';
import {useMemo} from 'react';

export const useQueryConstraint = (q: Query, constraint: QueryConstraint) => {
  return useMemo(() => {
    return query(q, constraint);
  }, [q, constraint]);
};
