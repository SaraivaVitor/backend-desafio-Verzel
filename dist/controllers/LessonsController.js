"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongodb_1 = require("mongodb");
var Lessons_1 = __importDefault(require("../models/Lessons"));
var LessonsController = /** @class */ (function () {
    function LessonsController() {
    }
    //criando Aula
    LessonsController.prototype.CreateLesson = function (Req, Res) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, name, date, description, module, error_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = Req.body, name = _a.name, date = _a.date, description = _a.description, module = _a.module;
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, Lessons_1.default.create({
                                name: name,
                                date: date,
                                description: description,
                                module: module
                            })];
                    case 2:
                        _b.sent();
                        return [2 /*return*/, Res.status(200).send({ message: name + " adicionado ao banco com sucesso!" })];
                    case 3:
                        error_1 = _b.sent();
                        return [2 /*return*/, Res.status(401).send({ error: error_1, message: "N\u00E3o foi possivel adicionar o m\u00F3dulo" })];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    //listando aulas
    LessonsController.prototype.FindAllLessons = function (Req, Res) {
        return __awaiter(this, void 0, void 0, function () {
            var GetLessons, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, Lessons_1.default.find().populate('module')];
                    case 1:
                        GetLessons = _a.sent();
                        return [2 /*return*/, Res.json(GetLessons)];
                    case 2:
                        error_2 = _a.sent();
                        return [2 /*return*/, Res.status(401).send({ message: "Não foi possivel encontrar as aulas!" })];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    //listando aulas pelo modulo
    LessonsController.prototype.FindLessonsByModule = function (Req, Res) {
        return __awaiter(this, void 0, void 0, function () {
            var module, GetLessons, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        module = Req.params.module;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, Lessons_1.default.find({ "module": new mongodb_1.ObjectId(module) })];
                    case 2:
                        GetLessons = _a.sent();
                        console.log(GetLessons);
                        return [2 /*return*/, Res.json(GetLessons)];
                    case 3:
                        error_3 = _a.sent();
                        return [2 /*return*/, Res.status(400).send({ error: error_3, message: "Não foi possivel encontrar as aulas!" })];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    //separando aulas pelo id
    LessonsController.prototype.FindLessonById = function (Req, Res) {
        return __awaiter(this, void 0, void 0, function () {
            var id, GetLessonById, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = Req.params;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, Lessons_1.default.findOne({ "_id": id }).populate('lessons')];
                    case 2:
                        GetLessonById = _a.sent();
                        return [2 /*return*/, Res.json([GetLessonById])];
                    case 3:
                        error_4 = _a.sent();
                        return [2 /*return*/, Res.status(401).send({ message: "Desculpe, mas n\u00E3o foi possivel encontrar a aula!" })];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    //deletando aula
    LessonsController.prototype.DeleteLesson = function (Req, Res) {
        return __awaiter(this, void 0, void 0, function () {
            var id, error_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = Req.params;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, Lessons_1.default.deleteOne({ "_id": id })];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, Res.status(200).send({ message: "Módulo deletado" })];
                    case 3:
                        error_5 = _a.sent();
                        return [2 /*return*/, Res.status(401).send({ message: "Não foi possivel deletar o módulo" })];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    //editando modulos
    LessonsController.prototype.UpdateLesson = function (Req, Res) {
        return __awaiter(this, void 0, void 0, function () {
            var id, _a, name, date, error_6;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        id = Req.params;
                        _a = Req.body, name = _a.name, date = _a.date;
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, Lessons_1.default.updateOne({ "_id": id }, {
                                $set: {
                                    name: name,
                                    date: date
                                }
                            })];
                    case 2:
                        _b.sent();
                        return [2 /*return*/, Res.status(200).send({ message: "Modulo editado com sucesso!" })];
                    case 3:
                        error_6 = _b.sent();
                        return [2 /*return*/, Res.status(401).send({ message: "Não foi possivel editar o módulo" })];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return LessonsController;
}());
exports.default = new LessonsController();
