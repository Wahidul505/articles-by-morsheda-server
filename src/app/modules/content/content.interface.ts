import { Model } from 'mongoose';

export type IContentBody = {
  heading: string;
  text: string;
};

export type IContent = {
  title: string;
  category: 'blog' | 'article';
  status: 'active' | 'archive';
  writer: string;
  contents: IContentBody[];
};

export type ContentModel = Model<IContent, Record<string, unknown>>;
