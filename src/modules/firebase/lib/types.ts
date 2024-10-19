import {DocumentData} from 'firebase/firestore';

export type WithId<T> = T & {
  id: string;
};

export type DD = DocumentData;
