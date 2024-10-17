import {Timestamp} from 'firebase/firestore';

export type TTask = {
  boardId: string;
  createdAt: Timestamp;
  createdBy: string;
  priority: TTaskPriority;
  status: TTaskStatus;
  title: string;
  updatedAt: Timestamp;
  updatedBy: string;
};

export enum TTaskPriority {
  high = 'high',
  low = 'low',
}

export enum TTaskStatus {
  active = 'active',
  done = 'done',
  todo = 'todo',
}
