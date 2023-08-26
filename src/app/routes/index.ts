import express from 'express';
import { ContentRoutes } from '../modules/content/content.route';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/content',
    route: ContentRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;
