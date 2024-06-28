import { Router } from 'express';
import { getPlanillaGastoMensual, putPlanillaGastoMensual, getPlanillasGastoMensual } from '../controller/planillaController';

const router = Router();

router.get('/planilla-gasto-mensual', getPlanillaGastoMensual);
router.put('/planilla-gasto-mensual', putPlanillaGastoMensual);
router.get('/planillas-gasto-mensual', getPlanillasGastoMensual);

export default router;
