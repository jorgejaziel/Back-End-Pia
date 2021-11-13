import express from 'express';
import cors from 'cors';
import userRutas from './rutas/users-rutas';
import productRutas from './rutas/product-rutas';
import brandRutas from './rutas/brand-rutas';
import salesRutas from './rutas/sales-rutas';
import 'reflect-metadata';
import { createConnection } from 'typeorm';
import { TokenValidation } from './libs/verifyToken';

//variables
const app = express()
const port = 3000

//middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));
createConnection()

//rutas
app.use('/user', userRutas);
app.use('/product', TokenValidation, productRutas);
app.use('/brand', TokenValidation, brandRutas);
app.use('/sales', TokenValidation,salesRutas);


app.listen(port, () => {
  console.log(`Server express en: http://localhost:${port}`)
})
