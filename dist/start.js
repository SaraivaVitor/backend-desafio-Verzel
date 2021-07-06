"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var ActionsRoutes_1 = __importDefault(require("./routes/ActionsRoutes"));
var AuthRoutes_1 = __importDefault(require("./routes/AuthRoutes"));
var app = express_1.default();
app.use(cors_1.default());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(ActionsRoutes_1.default);
app.use(AuthRoutes_1.default);
app.listen(process.env.PORT || 8080);
