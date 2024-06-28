export interface AreaComun {
    id_areaComun: number;
    nombre: string;
    descripcion: string;
}

export interface Reserva {
    id_reserva?: number;
    id_usuario: number;
    id_areaComun: number;
    fecha: string;
    hora: string;
}

export const listaAreasComunes = [
    {
        id_areaComun: 1,
        nombre: 'Gimnasio Comunal',
        descripcion: 'El Gimnasio Comunal está diseñado para ofrecer a los residentes un espacio completo y moderno para sus necesidades de fitness y bienestar. Equipado con una variedad de máquinas cardiovasculares, equipos de musculación y una zona de pesas libres, el gimnasio proporciona todas las herramientas necesarias para realizar un entrenamiento completo. Además, cuenta con una sala de clases grupales donde se ofrecen actividades como yoga, pilates, y aeróbicos.',
    },
    {
        id_areaComun: 2,
        nombre: 'Sala de Eventos',
        descripcion: 'La Sala de Eventos es un espacio multifuncional diseñado para albergar una variedad de actividades sociales y comunitarias. Este salón amplio y elegante está disponible para que los residentes organicen reuniones, fiestas, talleres y otras actividades. Equipado con mesas, sillas y una pequeña cocina de apoyo, el salón se adapta a diferentes configuraciones y necesidades.',
    },
    {
        id_areaComun: 3,
        nombre: 'Piscina y Zona de Recreación',
        descripcion: 'La Piscina y Zona de Recreación es un área al aire libre que ofrece a los residentes un lugar para relajarse y disfrutar del buen tiempo. La piscina, de tamaño mediano y con diferentes profundidades, es ideal tanto para nadar como para juegos acuáticos. Alrededor de la piscina, hay tumbonas y sombrillas para tomar el sol, así como una zona de césped y jardines bien cuidados. Además, hay una zona de juegos infantiles cercana, asegurando diversión para toda la familia.',
    }
]

export interface PlanillaGastoAdministrativo {
    id_planilla: number;
    id_administrador: number;
    fecha: string;
    cuerpo: DescripcionItem[];
}

export interface DescripcionItem {
    descripcion: string;
    total: string;
}

export const listaPlanillasGastoAdministrativo = [
    {
        id_planilla: 25,
        id_administrador: 1,
        fecha: '31-05-2024',
        cuerpo: [
            {
                descripcion: 'Reparación de ascensores',
                total: '$100.000',
            },
            {
                descripcion: 'Pago de electricidad',
                total: '$50.000',
            },
            {
                descripcion: 'Limpieza de áreas comunes',
                total: '$30.000',
            },
            {
                descripcion: 'Seguridad privada',
                total: '$120.000',
            },
            {
                descripcion: 'Jardinería',
                total: '$20.000',
            },
            {
                descripcion: 'Agua potable',
                total: '$40.000',
            },
            {
                descripcion: 'Suministro de gas',
                total: '$60.000',
            },
            {
                descripcion: '',
                total: '$420.000',
            }
        ]
    }
]

export interface Multa {
    id_multa: number;
    id_usuario: number;
    descripcion: string;
    fecha_emision: string;
    fecha_expiracion: string;
    total: string;
}

export const listaMultas = [
    {
        id_multa: 1,
        id_usuario: 1,
        descripcion: 'Atraso en pago de gastos comunes',
        fecha_emision: '15-12-2022',
        fecha_expiracion: '15-01-2023',
        total: '$35.000',
    },
    {
        id_multa: 2,
        id_usuario: 1,
        descripcion: 'Atraso en pago de gastos comunes',
        fecha_emision: '21-06-2023',
        fecha_expiracion: '21-07-2023',
        total: '$50.000',
    },
    {
        id_multa: 3,
        id_usuario: 1,
        descripcion: 'Atraso en pago de gastos comunes',
        fecha_emision: '03-03-2024',
        fecha_expiracion: '03-04-2024',
        total: '$40.000',
    }
]

export interface Notificacion {
    id_notificacion: number;
    id_administrador: number;
    fecha: string;
    asunto: string;
    descripcion: string;
}

export const listaNotificaciones = [
    {
        id_notificacion: 1,
        id_administrador: 1,
        fecha: '15-05-2024',
        asunto: 'Corte programado de agua',
        descripcion: 'Se informa que el día 16-05-2024 se realizará un corte de agua entre las 10:00 y las 19:00 horas.',
    },
    {
        id_notificacion: 2,
        id_administrador: 1,
        fecha: '01-06-2024',
        asunto: 'Mantenimiento piscina',
        descripcion: 'Se informa que durante el día de hoy, 01-06-2024, se realizará mantenimiento a la piscina, por lo que no estará disponible para su uso.',
    },
    {
        id_notificacion: 3,
        id_administrador: 1,
        fecha: '20-06-2024',
        asunto: 'Corte programado de luz',
        descripcion: 'Se informa que el día 21-06-2024 se realizará un corte de luz entre las 06:00 y las 10:00 horas.',
    }
];

export interface Recomendacion {
    id_recomendacion?: number;
    id_usuario: number;
    fecha: string;
    asunto: string;
    descripcion: string;
}