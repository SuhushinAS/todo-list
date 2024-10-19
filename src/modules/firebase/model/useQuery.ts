import {Query, query} from 'firebase/firestore';
import {useMemo} from 'react';

export const useQuery = (q: Query) => {
  return useMemo(() => query(q), [q]);
};
