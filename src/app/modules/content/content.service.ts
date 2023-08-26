/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-dgetAllFacultiesisable @typescript-eslint/no-explicit-any */

import { IContent } from './content.interface';
import { Content } from './content.model';

const getAllContents = async (): Promise<IContent[]> => {
  const contents = await Content.find().sort({ $natural: -1 });
  return contents;
};
const getLatestContents = async (): Promise<IContent[]> => {
  const contents = await Content.aggregate([{ $sample: { size: 6 } }]);
  return contents;
};

const getContentsByStatus = async (status: string): Promise<IContent[]> => {
  const contents = await Content.find({ status: status }).sort({
    $natural: -1,
  });
  return contents;
};

const getSingleContent = async (id: string): Promise<IContent | null> => {
  const content = await Content.findById(id);
  return content;
};

const getCategorizedContents = async (
  category: string
): Promise<IContent[]> => {
  const contents = await Content.find({ category: category.toLowerCase() });
  return contents;
};

const postContent = async (payload: IContent): Promise<void> => {
  await Content.create(payload);
};

const updateContent = async (id: string, payload: IContent): Promise<void> => {
  await Content.findByIdAndUpdate(id, payload, { multi: true });
};

export const ContentService = {
  getAllContents,
  getLatestContents,
  getContentsByStatus,
  getSingleContent,
  getCategorizedContents,
  postContent,
  updateContent,
};
