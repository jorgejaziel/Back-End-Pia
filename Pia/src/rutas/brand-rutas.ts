import {Router, Request, Response} from 'express'
import { getRepository } from 'typeorm';
import { Brand } from '../entidades/Brand';

const router = Router()

// Metodo get que regresa todas las marcas
router.get('/', async (req : Request, res: Response) => {
  const brands = await getRepository(Brand).find();
  res.json( brands );
})

// Metodo get que regresa una marca y manda como parametro el id
router.get('/:id', async (req : Request, res: Response) => {
  const brand = await getRepository(Brand).findOne(req.params.id);
  res.json( brand );
})

// Metodo post que crea una marca
router.post('/', async (req : Request, res: Response) => {
  const newBrand = await getRepository(Brand).create(req.body);
  const result = await getRepository(Brand).save(newBrand);
  res.json(result);
})

// Metodo put que edita una marca y se envia como parametro un id
router.put('/:id', async (req : Request, res: Response) => {
  const brand = await getRepository(Brand).findOne(req.params.id);
  if ( brand ) {
    getRepository(Brand).merge(brand, req.body);
    const result = getRepository(Brand).save(brand);
    res.json( brand );
  }
  else {
    res.json({ mensaje: "No existe ese usuario"});
  }
})

// Metodo delete para borrar una marca que envia como parametro el id
router.delete('/:id', async (req : Request, res: Response) => {
  getRepository(Brand).delete(req.params.id);
  res.json({ mensaje: 'registro eliminado' });
})

export default router;
