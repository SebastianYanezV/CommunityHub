// app.ts
import initDB from './database';

const connectToDatabase = async () => {
    try {
        const db = await initDB();
        
        const nombre = 'John';
        const apellido = 'Doe';
        const clave = 'password123';
        const propiedad = 'owner';
        const correo = 'john.doe@example.com';
        const telefono = '1234567890';

        await db.run(
            'INSERT INTO Usuarios (nombre, apellido, clave, propiedad, correo, telefono) VALUES (?, ?, ?, ?, ?, ?)',
            [nombre, apellido, clave, propiedad, correo, telefono]
        );

        console.log('Conectado a la base de datos y datos insertados correctamente');
    } catch (error) {
        console.error('Error al conectar a la base de datos:', error);
    }
};

connectToDatabase();
