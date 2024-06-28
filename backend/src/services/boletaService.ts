import db from '../database/database';
import { Boleta } from '../models/boletaModel';

export const createBoleta = async (boleta: Boleta) => {
    const database = await db();
    await database.run(
        'INSERT INTO Boletas (id, id_admin, descripcion, fechaEmision, fechaExpiracion, total) VALUES (?, ?, ?, ?, ?, ?)',
        [boleta.id, boleta.id_admin, boleta.descripcion, boleta.fechaEmision, boleta.fechaExpiracion, boleta.total]
    );
    return boleta;
};


export const getLastBoletas = async () => {
    const database = await db();
    const boletas = await database.all('SELECT * FROM Boletas ORDER BY fecha DESC LIMIT 3');
    return boletas;
};

export const updateBoletaPagado = async (id: string, pagado: boolean) => {
    const database = await db();
    await database.run(
        'UPDATE Boletas SET pagado = ? WHERE id = ?',
        [pagado, id]
    );
    return { id, pagado };
};
