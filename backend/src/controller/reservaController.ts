import { Request, Response } from 'express';
import { createReserva } from '../services/reservaService';

export const postReserva = async (req: Request, res: Response) => {
    const { fechaInicio } = req.body;
    try {
        const newReserva = await createReserva(fechaInicio);
        res.status(201).json(newReserva);
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
};
