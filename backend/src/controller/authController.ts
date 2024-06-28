import { Request, Response } from 'express';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { getUserByEmail, createUser } from '../services/userService';

const secretKey = process.env.JWT_SECRET || 'your_secret_key';

export const login = async (req: Request, res: Response) => {
    const { correo, clave } = req.body;

    try {
        const user = await getUserByEmail(correo);
        if (!user) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const isMatch = await bcryptjs.compare(clave, user.clave);
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const token = jwt.sign({ id: user.id }, secretKey, { expiresIn: '1h' });
        return res.json({ token });
    } catch (err) {
        return res.status(500).json({ message: 'Internal server error' });
    }
};

export const register = async (req: Request, res: Response) => {
    const { nombre, apellido, clave, propiedad, correo, telefono } = req.body;
    try {
        const existingUser = await getUserByEmail(correo);
        if (existingUser) {
            return res.status(400).json({ message: 'Email already in use' });
        }

        const hashedClave = await bcryptjs.hash(clave, 10);
        const newUser = await createUser(nombre, apellido, hashedClave, propiedad, correo, telefono);
        return res.status(201).json(newUser);
    } catch (err) {
        console.log(err)
        return res.status(500).json({ message: 'Internal server error' });
    }
};