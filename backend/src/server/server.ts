import express, { Request, Response } from 'express';
import cors from 'cors';
import authRouter from '../routes/authRouter';
import residenteRouter from '../routes/residenteRouter';
import boletaRouter from '../routes/boletaRouter';
import observacionRouter from '../routes/observacionRouter';
import recomendacionRouter from '../routes/recomendacionRouter';
import notificacionRouter from '../routes/notificacionRouter';
import planillaRouter from '../routes/planillaRouter';
import reservaRouter from '../routes/reservaRouter';

export default class Server {
    public app: express.Application;
    public port: number;

    constructor(port: number) {
        this.port = port;
        this.app = express();
        this.config();
        this.routes();
    }

    static init(port: number) {
        return new Server(port);
    }

    private config(): void {
        this.app.use(express.json());

        const corsOptions = {
            origin: '*', 
            optionsSuccessStatus: 200
        };
        this.app.use(cors(corsOptions));
    }

    private routes(): void {
        this.app.use('/boletas', boletaRouter);
        this.app.use('/residentes', residenteRouter);
        this.app.use('/auth', authRouter);
        this.app.use('/observaciones', observacionRouter);
        this.app.use('/recomendaciones', recomendacionRouter);
        this.app.use('/notificaciones', notificacionRouter);
        this.app.use('/planillas', planillaRouter);
        this.app.use('/reservas', reservaRouter);

        this.app.get('/ping', (req: Request, res: Response) => {
            res.json({ message: 'pong' });
        });
    }

    start(callback: () => void): void {
        this.app.listen(this.port, callback);
    }
}
