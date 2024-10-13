import {Timestamp} from 'firebase/firestore';

export type TBoard = {
  createdAt: Timestamp;
  createdBy: string;
  id: string;
  title: string;
  updatedAt: Timestamp;
  updatedBy: string;
};

export type TBoardUserMap = {
  boardId: string;
  roleId: string;
  userId: string;
};
