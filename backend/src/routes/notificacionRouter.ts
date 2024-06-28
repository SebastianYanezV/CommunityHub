import { Router } from 'express';
import { postNotificacion, getNotificaciones } from '../controller/notificacionController';

const router = Router();

router.post('/', postNotificacion);
router.get('/', getNotificaciones);

export default router;
