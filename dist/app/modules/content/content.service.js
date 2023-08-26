"use strict";
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-dgetAllFacultiesisable @typescript-eslint/no-explicit-any */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContentService = void 0;
const content_model_1 = require("./content.model");
const getAllContents = () => __awaiter(void 0, void 0, void 0, function* () {
    const contents = yield content_model_1.Content.find().sort({ $natural: -1 });
    return contents;
});
const getLatestContents = () => __awaiter(void 0, void 0, void 0, function* () {
    const contents = yield content_model_1.Content.aggregate([{ $sample: { size: 6 } }]);
    return contents;
});
const getContentsByStatus = (status) => __awaiter(void 0, void 0, void 0, function* () {
    const contents = yield content_model_1.Content.find({ status: status }).sort({
        $natural: -1,
    });
    return contents;
});
const getSingleContent = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const content = yield content_model_1.Content.findById(id);
    return content;
});
const getCategorizedContents = (category) => __awaiter(void 0, void 0, void 0, function* () {
    const contents = yield content_model_1.Content.find({ category: category.toLowerCase() });
    return contents;
});
const postContent = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    yield content_model_1.Content.create(payload);
});
const updateContent = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    yield content_model_1.Content.findByIdAndUpdate(id, payload, { multi: true });
});
exports.ContentService = {
    getAllContents,
    getLatestContents,
    getContentsByStatus,
    getSingleContent,
    getCategorizedContents,
    postContent,
    updateContent,
};
