"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __importDefault(require("../database/index"));
var LessonsSchema = new index_1.default.Schema({
    name: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    module: {
        type: index_1.default.Schema.Types.ObjectId,
        ref: 'Modules',
        required: true
    }
});
exports.default = index_1.default.model('Lessons', LessonsSchema);
