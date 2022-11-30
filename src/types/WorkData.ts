import { UserData } from '@/types/UserData';

export type WorkData = {
  id: string;
  title: string;
  content: string;
  author: UserData;
  updatedAt: string;
};

export type PatchWorkData = Pick<WorkData, 'id' | 'title' | 'content'>;

export type CreateWorkData = Omit<WorkData, 'id' | 'updatedAt' | 'author'>;
