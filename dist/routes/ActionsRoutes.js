"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var ModulesController_1 = __importDefault(require("../controllers/ModulesController"));
var LessonsController_1 = __importDefault(require("../controllers/LessonsController"));
var authMiddleware_1 = require("../middleware/authMiddleware");
var ActionsRoutes = express_1.Router();
// Rotas de modulos
ActionsRoutes.get('/api/allmodules', ModulesController_1.default.FindAllModules);
ActionsRoutes.get('/api/allmodules/:_id', ModulesController_1.default.FindModuleById);
ActionsRoutes.post('/api/createmodules', authMiddleware_1.AuthMiddleware, ModulesController_1.default.CreateModule);
ActionsRoutes.delete('/api/deletemodules/:_id', authMiddleware_1.AuthMiddleware, ModulesController_1.default.DeleteModule);
ActionsRoutes.put('/api/editmodules/:_id', authMiddleware_1.AuthMiddleware, ModulesController_1.default.UpdatePost);
//Rotas de aulas
ActionsRoutes.get('/api/alllessons', LessonsController_1.default.FindAllLessons);
ActionsRoutes.get('/api/alllessons/:_id', LessonsController_1.default.FindLessonById);
ActionsRoutes.get('/api/alllessonsbymodule/:module', LessonsController_1.default.FindLessonsByModule);
ActionsRoutes.post('/api/createlesson', authMiddleware_1.AuthMiddleware, LessonsController_1.default.CreateLesson);
ActionsRoutes.delete('/api/deletelesson/:_id', authMiddleware_1.AuthMiddleware, LessonsController_1.default.DeleteLesson);
ActionsRoutes.put('/api/editlesson/:_id', authMiddleware_1.AuthMiddleware, LessonsController_1.default.UpdateLesson);
exports.default = ActionsRoutes;
