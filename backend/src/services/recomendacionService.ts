import db from '../database/database';

export const getAllRecomendaciones = async () => {
    const database = await db();
    const recomendaciones = await database.all('SELECT * FROM Recomendaciones');
    return recomendaciones;
};

export const createRecomendacion = async (recomendacion: string) => {
    const database = await db();
    await database.run('INSERT INTO Recomendaciones (recomendacion) VALUES (?)', [recomendacion]);
    return { recomendacion };
};
