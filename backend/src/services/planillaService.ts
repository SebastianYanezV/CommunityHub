import db from '../database/database';

export const getPlanillaGastoMensualActual = async () => {
    const database = await db();
    const planilla = await database.get('SELECT * FROM Planillas WHERE mes = strftime("%m", "now")');
    return planilla;
};

export const updatePlanilla = async (id: string, nuevaPlanilla: any) => {
    const database = await db();
    await database.run(
        'UPDATE Planillas SET ? WHERE id = ?',
        [nuevaPlanilla, id]
    );
    return nuevaPlanilla;
};

export const getAllPlanillasGastoMensual = async () => {
    const database = await db();
    const planillas = await database.all('SELECT * FROM Planillas');
    return planillas;
};
