"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Content = void 0;
const mongoose_1 = require("mongoose");
const ContentSchema = new mongoose_1.Schema({
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
exports.Content = (0, mongoose_1.model)('Content', ContentSchema);
