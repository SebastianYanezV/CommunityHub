import { Router } from 'express';
import { getObservaciones, deleteResidente } from '../controller/observacionController';

const router = Router();

router.get('/observaciones/:id', getObservaciones);
router.delete('/residentes', deleteResidente);

export default router;
