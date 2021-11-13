"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var users_rutas_1 = __importDefault(require("./rutas/users-rutas"));
var product_rutas_1 = __importDefault(require("./rutas/product-rutas"));
var brand_rutas_1 = __importDefault(require("./rutas/brand-rutas"));
var sales_rutas_1 = __importDefault(require("./rutas/sales-rutas"));
require("reflect-metadata");
var typeorm_1 = require("typeorm");
//variables
var app = (0, express_1.default)();
var port = 3000;
//middleware
app.use((0, cors_1.default)());
app.use(express_1.default.json());
(0, typeorm_1.createConnection)();
//rutas
app.use('/user', users_rutas_1.default);
app.use('/product', product_rutas_1.default);
app.use('/brand', brand_rutas_1.default);
app.use('/sales', sales_rutas_1.default);
app.listen(port, function () {
    console.log("Server express en: http://localhost:" + port);
});
