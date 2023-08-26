"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContentRoutes = void 0;
const express_1 = __importDefault(require("express"));
const auth_1 = require("../../middlewares/auth");
const content_controller_1 = require("./content.controller");
const router = express_1.default.Router();
router.get('/category/:category', content_controller_1.ContentController.getCategorizedContents);
router.get('/status/:status', content_controller_1.ContentController.getContentsByStatus);
router.get('/latest', content_controller_1.ContentController.getLatestContents);
router.get('/:id', content_controller_1.ContentController.getSingleContent);
router.get('/', content_controller_1.ContentController.getAllContents);
router.post('/', (0, auth_1.auth)(), content_controller_1.ContentController.postContent);
router.patch('/:id', (0, auth_1.auth)(), content_controller_1.ContentController.updateContent);
exports.ContentRoutes = router;
