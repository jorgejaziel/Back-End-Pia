import {Router, Request, Response} from 'express'
import { getRepository } from 'typeorm';
import { Product } from '../entidades/Product';

const router = Router()

// Metodo get que regresa todas los productos
router.get('/', async (req : Request, res: Response) => {
  const products = await getRepository(Product).find();
  res.json( products );
})

router.get('/:id', async (req : Request, res: Response) => {
  const product = await getRepository(Product).findOne(req.params.id);
  res.json( product );
})

router.post('/', async (req : Request, res: Response) => {
  const newProduct = await getRepository(Product).create(req.body);
  const result = await getRepository(Product).save(newProduct);
  res.json(result);
})

router.put('/:id', async (req : Request, res: Response) => {
  const product = await getRepository(Product).findOne(req.params.id);
  if ( product ) {
    await getRepository(Product).merge(product, req.body);
    const result = getRepository(Product).save(product);
    res.json( product );
  }
  else {
    res.json({ mensaje: "No existe este producto"});
  }
})

router.delete('/:id', async (req : Request, res: Response) => {
  getRepository(Product).delete(req.params.id);
  res.json({ mensaje: 'registro eliminado' });
})

export default router;
