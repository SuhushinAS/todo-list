import {useCallback, useMemo} from 'react';

const getNumEntry = <TItem>(value: TItem, index: number): [TItem, number] => {
  return [value, index];
};

export const useGetNextItem = <TItem>(list: TItem[]) => {
  const numMap = useMemo(() => {
    return Object.fromEntries(list.map(getNumEntry));
  }, [list]);

  return useCallback(
    (current) => {
      const currentNum = numMap[current];
      const nextNum = (currentNum + 1) % list.length;

      return list[nextNum];
    },
    [list, numMap]
  );
};
