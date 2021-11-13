import {Router, Request, Response} from 'express'
import { getRepository } from 'typeorm';
import { Sale } from '../entidades/Sale';

const router = Router()

// define the home page route
router.get('/', async (req : Request, res: Response) => {
  const sales = await getRepository(Sale).find();
  res.json( sales );
})

router.get('/:id', async (req : Request, res: Response) => {
  const sale = await getRepository(Sale).findOne(req.params.id);
  res.json( sale );
})

router.post('/', async (req : Request, res: Response) => {
  const newSale = await getRepository(Sale).create(req.body);
  const result = await getRepository(Sale).save(newSale);
  res.json(result);
})

router.put('/:id', async (req : Request, res: Response) => {
  const sale = await getRepository(Sale).findOne(req.params.id);
  if ( sale ) {
    await getRepository(Sale).merge(sale, req.body);
    await getRepository(Sale).save(sale);
    res.json ( sale )
  }
  else {
    res.json({ mensaje: "No existe esta venta"});
  }
})

router.delete('/:id', async (req : Request, res: Response) => {
  getRepository(Sale).delete(req.params.id);
  res.json({ mensaje: 'registro eliminado' });
})

export default router;
