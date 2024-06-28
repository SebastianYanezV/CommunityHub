import { Router } from 'express';
import { postReserva } from '../controller/reservaController';

const router = Router();

router.post('/reservas', postReserva);

export default router;
