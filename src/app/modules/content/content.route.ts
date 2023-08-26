import express from 'express';
import { auth } from '../../middlewares/auth';
import { ContentController } from './content.controller';

const router = express.Router();

router.get('/category/:category', ContentController.getCategorizedContents);
router.get('/status/:status', ContentController.getContentsByStatus);
router.get('/latest', ContentController.getLatestContents);
router.get('/:id', ContentController.getSingleContent);
router.get('/', ContentController.getAllContents);
router.post('/', auth(), ContentController.postContent);
router.patch('/:id', auth(), ContentController.updateContent);

export const ContentRoutes = router;
