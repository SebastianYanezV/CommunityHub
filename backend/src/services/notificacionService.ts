import db from '../database/database';
import { Notificacion } from '../models/notificacionModel';

export const getAllNotificaciones = async (): Promise<Notificacion[]> => {
    const database = await db();
    const notificaciones = await database.all('SELECT * FROM Notificaciones');
    return notificaciones;
};

export const createNotificacion = async (notificacion: Notificacion): Promise<Notificacion> => {
    const database = await db();
    const result = await database.run(
        'INSERT INTO Notificaciones (datos, idAdmin, idUsuario, todos) VALUES (?, ?, ?, ?)',
        [notificacion.datos, notificacion.idAdmin, notificacion.idUsuario, notificacion.todos]
    );

    // Assuming your database assigns a unique id to the notification
    return {
        id: result.lastID,
        ...notificacion
    } as Notificacion;
};
