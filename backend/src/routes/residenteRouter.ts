import { Router } from 'express';
import { getResidentes } from '../controller/residenteController';

const residenteRouter = Router();

residenteRouter.get('/residentes', getResidentes);

export default residenteRouter;
