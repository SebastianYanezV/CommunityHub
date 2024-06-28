import { Router } from 'express';
import { postBoleta } from '../controller/boletaController';

const boletaRouter = Router();

boletaRouter.post('/boletas', postBoleta);
boletaRouter.get('/boletas/ultimas');
boletaRouter.put('/boletas/:id');

export default boletaRouter;
