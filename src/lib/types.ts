export type Category = {
  id: string;
  name: string;
  slug: string;
  description: string;
  imageUrl: string;
  hint?: string;
};

export type User = {
  id: string;
  name: string;
  avatarUrl: string;
  bio: string;
};

export type PostStatus = 'published' | 'draft';

export type Post = {
  id:string;
  title: string;
  content: string;
  author: User;
  category: Category;
  imageUrl: string;
  hint?: string;
  keywords: string[];
  createdAt: string;
  status: PostStatus;
};

export type Comment = {
  id: string;
  content: string;
  author: {
    name: string;
    avatarUrl: string;
  };
  post: {
    id: string;
    title: string;
  };
  createdAt: string;
};
