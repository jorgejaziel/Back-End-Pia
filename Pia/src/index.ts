import express from 'express';
import cors from 'cors';
import userRutas from './rutas/users-rutas';
import productRutas from './rutas/product-rutas';
import brandRutas from './rutas/brand-rutas';
import salesRutas from './rutas/sales-rutas';
import 'reflect-metadata';
import { createConnection } from 'typeorm';

//variables
const app = express()
const port = 3000

//middleware
app.use(cors());
app.use(express.json());
createConnection()

//rutas
app.use('/user', userRutas);
app.use('/product', productRutas);
app.use('/brand', brandRutas);
app.use('/sales', salesRutas);

app.listen(port, () => {
  console.log(`Server express en: http://localhost:${port}`)
})
