import { Request, Response } from 'express';
import { getAllRecomendaciones, createRecomendacion } from '../services/recomendacionService';

export const getRecomendaciones = async (req: Request, res: Response) => {
    try {
        const recomendaciones = await getAllRecomendaciones();
        res.json(recomendaciones);
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
};

export const postRecomendacion = async (req: Request, res: Response) => {
    const { recomendacion } = req.body;
    try {
        const newRecomendacion = await createRecomendacion(recomendacion);
        res.status(201).json(newRecomendacion);
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
};
