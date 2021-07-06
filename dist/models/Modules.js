"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __importDefault(require("../database/index"));
var ModuleSchema = new index_1.default.Schema({
    name: {
        type: String,
        required: true
    },
    totalQuanity: {
        type: String,
        required: true
    },
    lessons: [{
            type: String
        }]
});
exports.default = index_1.default.model('Modules', ModuleSchema);
