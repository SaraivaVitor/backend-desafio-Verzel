"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var AdminController_1 = __importDefault(require("../controllers/AdminController"));
var AuthRouter = express_1.Router();
//All of user
AuthRouter.post('/api/createuser', AdminController_1.default.CreateUser);
AuthRouter.delete('/api/deleteuser/:_id', AdminController_1.default.DeleteUser);
//Auth
AuthRouter.post('/api/adminauth', AdminController_1.default.Authenticate);
exports.default = AuthRouter;
