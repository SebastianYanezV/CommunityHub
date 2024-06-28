import db from '../database/database';

export const getAllResidentes = async () => {
    const database = await db();
    const residentes = await database.all('SELECT * FROM Usuarios');
    return residentes;
};
