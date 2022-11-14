import { UserData } from '@/types/UserData';

export type PostData = {
  id: string;
  title: string;
  content: string;
  author: UserData;
  updatedAt: string;
};

export type PatchPostData = Pick<PostData, 'id' | 'title' | 'content'>;

export type CreatePostData = Omit<PatchPostData, 'id'>;
