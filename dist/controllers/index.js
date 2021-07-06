"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require('fs');
var path = require('path');
function app() {
    fs
        .readdirSync(__dirname)
        .filter(function (file) { return ((file.indexOf('.')) !== 0 && (file !== "start.ts")); })
        .forEach(function (file) { return require(path.resolve(__dirname, file))(app); });
}
exports.default = app;
