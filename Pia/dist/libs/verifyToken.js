"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenValidation = void 0;
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
//Valida nuestro token
var TokenValidation = function (req, res, next) {
    var token = req.header('auth-token');
    if (!token)
        return res.status(401).json('Access denied');
    var payload = jsonwebtoken_1.default.verify(token, "Secret key");
    next();
};
exports.TokenValidation = TokenValidation;
