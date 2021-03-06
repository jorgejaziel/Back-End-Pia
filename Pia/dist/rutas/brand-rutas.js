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
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var typeorm_1 = require("typeorm");
var Brand_1 = require("../entidades/Brand");
var router = (0, express_1.Router)();
// Metodo get que regresa todas las marcas
router.get('/', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var brands;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, typeorm_1.getRepository)(Brand_1.Brand).find()];
            case 1:
                brands = _a.sent();
                res.json(brands);
                return [2 /*return*/];
        }
    });
}); });
// Metodo get que regresa una marca y manda como parametro el id
router.get('/:id', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var brand;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, typeorm_1.getRepository)(Brand_1.Brand).findOne(req.params.id)];
            case 1:
                brand = _a.sent();
                res.json(brand);
                return [2 /*return*/];
        }
    });
}); });
// Metodo post que crea una marca
router.post('/', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var newBrand, result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, typeorm_1.getRepository)(Brand_1.Brand).create(req.body)];
            case 1:
                newBrand = _a.sent();
                return [4 /*yield*/, (0, typeorm_1.getRepository)(Brand_1.Brand).save(newBrand)];
            case 2:
                result = _a.sent();
                res.json(result);
                return [2 /*return*/];
        }
    });
}); });
// Metodo put que edita una marca y se envia como parametro un id
router.put('/:id', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var brand, result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, typeorm_1.getRepository)(Brand_1.Brand).findOne(req.params.id)];
            case 1:
                brand = _a.sent();
                if (brand) {
                    (0, typeorm_1.getRepository)(Brand_1.Brand).merge(brand, req.body);
                    result = (0, typeorm_1.getRepository)(Brand_1.Brand).save(brand);
                    res.json(brand);
                }
                else {
                    res.json({ mensaje: "No existe ese usuario" });
                }
                return [2 /*return*/];
        }
    });
}); });
// Metodo delete para borrar una marca que envia como parametro el id
router.delete('/:id', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        (0, typeorm_1.getRepository)(Brand_1.Brand).delete(req.params.id);
        res.json({ mensaje: 'registro eliminado' });
        return [2 /*return*/];
    });
}); });
exports.default = router;
