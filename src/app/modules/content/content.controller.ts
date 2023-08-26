import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { IContent } from './content.interface';
import { ContentService } from './content.service';

const getAllContents = catchAsync(async (req: Request, res: Response) => {
  const contents = await ContentService.getAllContents();

  sendResponse<IContent[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Contents retrieved successfully !',
    data: contents,
  });
});

const getLatestContents = catchAsync(async (req: Request, res: Response) => {
  const contents = await ContentService.getLatestContents();

  sendResponse<IContent[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Contents retrieved successfully !',
    data: contents,
  });
});

const getContentsByStatus = catchAsync(async (req: Request, res: Response) => {
  const { status } = req.params;
  const contents = await ContentService.getContentsByStatus(status);

  sendResponse<IContent[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Contents retrieved successfully !',
    data: contents,
  });
});

const getSingleContent = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const content = await ContentService.getSingleContent(id);

  sendResponse<IContent>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Content retrieved successfully !',
    data: content,
  });
});

const getCategorizedContents = catchAsync(
  async (req: Request, res: Response) => {
    const { category } = req.params;
    const contents = await ContentService.getCategorizedContents(
      category as string
    );

    sendResponse<IContent[]>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Contents retrieved successfully !',
      data: contents,
    });
  }
);

const postContent = catchAsync(async (req: Request, res: Response) => {
  const content = req.body;
  await ContentService.postContent(content);
  sendResponse<void>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Content created successfully !',
  });
});

const updateContent = catchAsync(async (req: Request, res: Response) => {
  const content = req.body;
  const { id } = req.params;
  await ContentService.updateContent(id, content);
  sendResponse<void>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Content updated successfully !',
  });
});

export const ContentController = {
  getAllContents,
  getLatestContents,
  getContentsByStatus,
  getSingleContent,
  getCategorizedContents,
  postContent,
  updateContent,
};
