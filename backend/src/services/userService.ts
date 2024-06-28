import db from '../database/database';
import { User } from '../models/userModel';


export const getUserByEmail = async (correo: string): Promise<User | null> => {
    try {
        const database = await db();
        const row = await database.get('SELECT * FROM Usuarios WHERE correo = ?', [correo]);
        if (row) {
            return row as User; 
        } else {
            return null;
        }
    } catch (err) {
        throw new Error(`Error al buscar usuario por email: ${err}`);
    }
};

export const createUser = async (
    nombre: string,
    apellido: string,
    clave: string,
    propiedad: string,
    correo: string,
    telefono: string
): Promise<User> => {
    try {
        const database = await db();
        await database.run(
            'INSERT INTO Usuarios (nombre, apellido, clave, propiedad, correo, telefono) VALUES (?, ?, ?, ?, ?, ?)',
            [nombre, apellido, clave, propiedad, correo, telefono]
        );

        return { nombre, apellido, clave, propiedad, correo, telefono } as User;
    } catch (err) {
        throw new Error(`Error al crear usuario: ${err}`);
    }
};


export const getUserByMail = async (correo: string): Promise<User | null> => {
    const database = await db();
    const user = await database.get<User>('SELECT * FROM Usuarios WHERE correo = ?', [correo]);
    return user || null;
};
