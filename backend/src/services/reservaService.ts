import db from '../database/database';

export const createReserva = async (fechaInicio: string) => {
    const database = await db();
    const fechaTermino = new Date(fechaInicio);
    fechaTermino.setDate(fechaTermino.getDate() + 1); 
    await database.run(
        'INSERT INTO Reservas (fechaInicio, fechaTermino) VALUES (?, ?)',
        [fechaInicio, fechaTermino.toISOString()]
    );
    return { fechaInicio, fechaTermino };
};
