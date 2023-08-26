import { Schema, model } from 'mongoose';
import { ContentModel, IContent } from './content.interface';

const ContentSchema = new Schema<IContent, ContentModel>({
  title: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
    enum: ['blog', 'article'],
  },
  writer: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
    enum: ['active', 'archive'],
  },
  contents: [
    {
      heading: {
        type: String,
      },
      text: {
        type: String,
        required: true,
      },
    },
  ],
});

export const Content = model<IContent, ContentModel>('Content', ContentSchema);
