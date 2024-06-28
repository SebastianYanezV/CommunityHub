import { Request, Response } from 'express';
import { createBoleta, getLastBoletas, updateBoletaPagado} from '../services/boletaService';
import { Boleta } from '../models/boletaModel';

export const postBoleta = async (req: Request, res: Response) => {
    const { id, id_admin, descripcion, fechaEmision, fechaExpiracion, total } = req.body;
    const newBoleta: Boleta = { id, id_admin, descripcion, fechaEmision, fechaExpiracion, total };
    
    try {
        const createdBoleta = await createBoleta(newBoleta);
        res.status(201).json(createdBoleta);
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
};

export const getLastThreeBoletas = async (req: Request, res: Response) => {
    try {
        const boletas = await getLastBoletas();
        res.json(boletas);
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
};

export const putBoleta = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { pagado } = req.body;
    try {
        const updatedBoleta = await updateBoletaPagado(id, pagado);
        res.json(updatedBoleta);
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
};
