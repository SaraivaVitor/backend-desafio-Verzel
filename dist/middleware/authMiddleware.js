"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthMiddleware = void 0;
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
function AuthMiddleware(Request, Response, Next) {
    var authorization = Request.headers.authorization;
    if (!authorization)
        return Response.sendStatus(401);
    var token = authorization.replace('Bearer', '').trim();
    try {
        var data = jsonwebtoken_1.default.verify(token, "238e27d7791c8ab87201c216c4df0b90");
        var id = data.id;
        Request.idDoUsuario = id;
        return Next();
    }
    catch (_a) {
        return Response.sendStatus(401);
    }
}
exports.AuthMiddleware = AuthMiddleware;
