import db from '../database/database';

export const getObservacionesById = async (id: string) => {
    const database = await db();
    const observaciones = await database.all('SELECT * FROM Observaciones WHERE residente_id = ?', [id]);
    return observaciones;
};

export const deleteResidenteById = async (id: string) => {
    const database = await db();
    await database.run('DELETE FROM Residentes WHERE id = ?', [id]);
};
