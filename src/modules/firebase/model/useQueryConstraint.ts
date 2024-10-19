import {DocumentData, Query, query, QueryConstraint} from 'firebase/firestore';
import {useMemo} from 'react';

export const useQueryConstraint = <
  AppModelType = DocumentData,
  DbModelType extends DocumentData = DocumentData,
>(
  q: Query,
  constraint: QueryConstraint
) => {
  return useMemo(() => {
    return query<AppModelType, DbModelType>(q, constraint);
  }, [q, constraint]);
};
