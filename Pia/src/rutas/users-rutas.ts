import {Router, Request, Response} from 'express'
import { getRepository } from 'typeorm';
import { Sale } from '../entidades/Sale';
import { User } from '../entidades/User';
import jwt from 'jsonwebtoken';

import { TokenValidation } from '../libs/verifyToken';

const router = Router()

// define the home page route
router.get('/', TokenValidation,async (req : Request, res: Response) => {
  const users = await getRepository(User).find();
  res.json( users );
})

router.get('/:id', TokenValidation,async (req : Request, res: Response) => {
  const user = await getRepository(User).findOne(req.params.id);
  res.json( user );
})

router.post('/', async (req : Request, res: Response) => {
  const newUser = await getRepository(User).create(req.body);
  const result = await getRepository(User).save(newUser);

  const token: string = jwt.sign({newUser}, "Secret key");


  res.header('auth-token', token).json(newUser);
})

router.put('/:id', TokenValidation,async (req : Request, res: Response) => {
  const user = await getRepository(User).findOne(req.params.id);
  if ( user ) {
    getRepository(User).merge(user, req.body);
    const result = getRepository(User).save(user);
    res.json( user );
  }
  else {
    res.json({ mensaje: "No existe ese usuario"});
  }
})

router.delete('/:id', TokenValidation,async (req : Request, res: Response) => {
  await getRepository(Sale).delete({
    user: parseInt(req.params.id) 
  });
  await getRepository(User).delete(req.params.id);
  res.json({ mensaje: 'registro eliminado' });
})

export default router;
