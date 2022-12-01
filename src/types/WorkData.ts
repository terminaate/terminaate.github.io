export type WorkData = {
  id: string;
  title: string;
  description: string;
  type: string;
  link: string;
  githubLink?: string;
  image: string;
  tags: string[];
};

export type CreateWorkData = Omit<WorkData, 'id'>;

export type PatchWorkData = Partial<WorkData>;