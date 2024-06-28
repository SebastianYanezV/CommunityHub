import { Request, Response } from 'express';
import { getAllResidentes } from '../services/residenteService';

export const getResidentes = async (req: Request, res: Response) => {
    try {
        const residentes = await getAllResidentes();
        res.json(residentes);
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
};
