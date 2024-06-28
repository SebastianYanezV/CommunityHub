import { Request, Response } from 'express';
import { getObservacionesById, deleteResidenteById } from '../services/observacionService';

export const getObservaciones = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const observaciones = await getObservacionesById(id);
        res.json(observaciones);
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
};

export const deleteResidente = async (req: Request, res: Response) => {
    const { id } = req.body;
    try {
        await deleteResidenteById(id);
        res.json({ message: `Residente con id ${id} eliminado` });
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
};
