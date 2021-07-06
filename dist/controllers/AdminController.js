"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
var Admin_1 = __importDefault(require("../models/Admin"));
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var bcrypt = __importStar(require("bcrypt"));
var AdminController = /** @class */ (function () {
    function AdminController() {
    }
    //criando usuario
    AdminController.prototype.CreateUser = function (Req, Res) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, email, password, firstName, passwordHash, user, error_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = Req.body, email = _a.email, password = _a.password, firstName = _a.firstName;
                        return [4 /*yield*/, bcrypt.hash(password, 8)];
                    case 1:
                        passwordHash = _b.sent();
                        _b.label = 2;
                    case 2:
                        _b.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, Admin_1.default.create({
                                firstName: firstName,
                                email: email,
                                password: passwordHash
                            })];
                    case 3:
                        user = _b.sent();
                        user.password = undefined;
                        return [2 /*return*/, Res.status(200).send({ user: user, message: "Usuario criado" })];
                    case 4:
                        error_1 = _b.sent();
                        return [2 /*return*/, Res.status(401).send({ message: "N\u00E3o foi possivel criar usu\u00E1rio" })];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    //deletando usuário
    AdminController.prototype.DeleteUser = function (Req, Res) {
        return __awaiter(this, void 0, void 0, function () {
            var id, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = Req.params;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, Admin_1.default.deleteOne({ "_id": id })];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, Res.status(200).send({ message: "Usuário deletado" })];
                    case 3:
                        error_2 = _a.sent();
                        return [2 /*return*/, Res.status(401).send({ message: "Desculpe, mas n\u00E3o foi possivel deletar usu\u00E1rio!" })];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    //Autenticando
    AdminController.prototype.Authenticate = function (Req, Res) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, email, password, UserExists, token, error_3;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = Req.body, email = _a.email, password = _a.password;
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 4, , 5]);
                        return [4 /*yield*/, Admin_1.default.findOne({ email: email }).select("+password")
                            // Tratando erros possíveis.
                        ];
                    case 2:
                        UserExists = _b.sent();
                        // Tratando erros possíveis.
                        if (!UserExists)
                            return [2 /*return*/, Res.status(401).send({ message: "Desculpe, aqui consta q seu usuario n\u00E3o existe!" })];
                        return [4 /*yield*/, bcrypt.compare(password, UserExists.password)];
                    case 3:
                        if (!(_b.sent()))
                            return [2 /*return*/, Res.status(401).send({ message: "Senha incorreta!" })];
                        UserExists.password = undefined;
                        token = jsonwebtoken_1.default.sign({ id: UserExists.id }, "238e27d7791c8ab87201c216c4df0b90", {
                            expiresIn: 86400,
                        });
                        return [2 /*return*/, Res.status(200).send({ UserExists: UserExists, token: token, message: email + " logado!" })];
                    case 4:
                        error_3 = _b.sent();
                        console.log(error_3);
                        return [2 /*return*/, Res.status(401).send({ message: "Desculpe " + email + " n\u00E3o foi possivel logar!" })];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    return AdminController;
}());
exports.default = new AdminController();
