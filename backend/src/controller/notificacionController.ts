import { Request, Response } from 'express';
import { createNotificacion, getAllNotificaciones } from '../services/notificacionService';
import { Notificacion } from '../models/notificacionModel';

export const postNotificacion = async (req: Request, res: Response) => {
    const { datos, idAdmin, idUsuario, todos } = req.body;

    if (!datos || !idAdmin || (!todos && !idUsuario)) {
        return res.status(400).json({ message: 'Datos incompletos' });
    }

    try {
        const newNotificacion: Notificacion = {
            datos,
            idAdmin,
            idUsuario: todos ? null : idUsuario,
            todos
        };

        const createdNotificacion = await createNotificacion(newNotificacion);
        res.status(201).json(createdNotificacion);
    } catch (error) {
        res.status(500).json({ message: 'Error al crear notificación', error });
    }
};

export const getNotificaciones = async (req: Request, res: Response) => {
    try {
        const notificaciones = await getAllNotificaciones();
        res.json(notificaciones);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener notificaciones', error });
    }
};
