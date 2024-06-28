export interface RecomendacionItem {
    id: string;
    id_usuario: string;
    fecha: string;
    asunto: string;
    descripcion: string;
}

export const listaRecomendaciones = [
    {
        id: "1",
        id_usuario: "1",
        fecha: "15-06-2024",
        asunto: "Mejorar infraestructura",
        descripcion: "Como recomendación se propone realizar mantenimiento en varias zonas del edificio, como en escaleras y espacios comunes."
    },
    {
        id: "2",
        id_usuario: "3",
        fecha: "16-06-2024",
        asunto: "Seguridad en el estacionamiento",
        descripcion: "Se sugiere instalar más cámaras de seguridad en el estacionamiento para prevenir robos y vandalismo."
    },
    {
        id: "3",
        id_usuario: "1",
        fecha: "17-06-2024",
        asunto: "Área de juegos para niños",
        descripcion: "Se recomienda la creación de un área de juegos para niños en el patio trasero para que puedan jugar de forma segura."
    },
    {
        id: "4",
        id_usuario: "2",
        fecha: "18-06-2024",
        asunto: "Mejorar la iluminación",
        descripcion: "Se sugiere mejorar la iluminación en los pasillos y áreas comunes para aumentar la seguridad y comodidad de los residentes."
    },
    {
        id: "5",
        id_usuario: "4",
        fecha: "19-06-2024",
        asunto: "Revisión de la presión del agua",
        descripcion: "Se recomienda revisar y ajustar la presión del agua en los departamentos, ya que algunos residentes han reportado problemas con la misma."
    },
    {
        id: "6",
        id_usuario: "3",
        fecha: "20-06-2024",
        asunto: "Control de plagas",
        descripcion: "Se sugiere contratar un servicio de control de plagas para evitar infestaciones en el edificio."
    },
    {
        id: "7",
        id_usuario: "5",
        fecha: "21-06-2024",
        asunto: "Reparación de ascensores",
        descripcion: "Se recomienda una revisión y reparación de los ascensores, ya que han estado presentando fallas frecuentes."
    },
    {
        id: "8",
        id_usuario: "2",
        fecha: "22-06-2024",
        asunto: "Creación de un gimnasio",
        descripcion: "Se propone habilitar un gimnasio en una de las áreas comunes para que los residentes puedan hacer ejercicio sin salir del edificio."
    },
    {
        id: "9",
        id_usuario: "1",
        fecha: "23-06-2024",
        asunto: "Organización de eventos comunitarios",
        descripcion: "Se sugiere organizar eventos comunitarios mensuales para fomentar la convivencia entre los residentes."
    },
    {
        id: "10",
        id_usuario: "4",
        fecha: "24-06-2024",
        asunto: "Instalación de paneles solares",
        descripcion: "Se recomienda considerar la instalación de paneles solares para reducir el consumo de electricidad y promover el uso de energías renovables."
    }
];

export interface DescripcionItem {
    nombre: string;
    total: number;
}

export interface PlanillaGastoItem {
    id: string;
    descripcion: DescripcionItem[];
    fecha: string;
    total: number;
}

export interface ResidenteItem {
    id: string;
    nombre: string;
    apellido: string;
    clave: string;
    propiedad: string;
    correo: string;
    telefono: string;
}

export interface BoletaGastoItem {
    id_admin: string;
    descripcion: DescripcionItem[];
    fechaEmision: string;
    fechaExpiracion: string;
    total: number;
}

export interface ObservacionItem {
    id: string;
    id_usuario: string;
    fecha: string;
    asunto: string;
    descripcion: string;
}

export const listaResidentes = [
    {
        id: "1",
        nombre: "Carlos",
        apellido: "Gómez",
        clave: "5f4dcc3b5aa765d61d8327deb882cf99", // hash de "password"
        propiedad: "Block 1 Departamento 101",
        correo: "carlos.gomez@example.com",
        telefono: "1234567890"
    },
    {
        id: "2",
        nombre: "María",
        apellido: "Pérez",
        clave: "e99a18c428cb38d5f260853678922e03", // hash de "abc123"
        propiedad: "Block 1 Departamento 102",
        correo: "maria.perez@example.com",
        telefono: "0987654321"
    },
    {
        id: "3",
        nombre: "José",
        apellido: "López",
        clave: "098f6bcd4621d373cade4e832627b4f6", // hash de "test"
        propiedad: "Block 1 Departamento 103",
        correo: "jose.lopez@example.com",
        telefono: "1231231234"
    },
    {
        id: "4",
        nombre: "Ana",
        apellido: "Martínez",
        clave: "21232f297a57a5a743894a0e4a801fc3", // hash de "admin"
        propiedad: "Block 1 Departamento 104",
        correo: "ana.martinez@example.com",
        telefono: "3213214321"
    },
    {
        id: "5",
        nombre: "Luis",
        apellido: "Rodríguez",
        clave: "827ccb0eea8a706c4c34a16891f84e7b", // hash de "12345"
        propiedad: "Block 1 Departamento 105",
        correo: "luis.rodriguez@example.com",
        telefono: "4564564567"
    },
    {
        id: "6",
        nombre: "Lucía",
        apellido: "Hernández",
        clave: "5ebe2294ecd0e0f08eab7690d2a6ee69", // hash de "secret"
        propiedad: "Block 1 Departamento 106",
        correo: "lucia.hernandez@example.com",
        telefono: "6546546543"
    },
    {
        id: "7",
        nombre: "Miguel",
        apellido: "García",
        clave: "d8578edf8458ce06fbc5bb76a58c5ca4", // hash de "qwerty"
        propiedad: "Block 1 Departamento 107",
        correo: "miguel.garcia@example.com",
        telefono: "7897897890"
    },
    {
        id: "8",
        nombre: "Elena",
        apellido: "Ramírez",
        clave: "fcea920f7412b5da7be0cf42b8c93759", // hash de "1234567"
        propiedad: "Block 1 Departamento 108",
        correo: "elena.ramirez@example.com",
        telefono: "9879879876"
    },
    {
        id: "9",
        nombre: "Pedro",
        apellido: "Fernández",
        clave: "6cb75f652a9b52798eb6cf2201057c73", // hash de "password1"
        propiedad: "Block 1 Departamento 109",
        correo: "pedro.fernandez@example.com",
        telefono: "4561237890"
    },
    {
        id: "10",
        nombre: "Sofía",
        apellido: "Sánchez",
        clave: "25d55ad283aa400af464c76d713c07ad", // hash de "12345678"
        propiedad: "Block 1 Departamento 110",
        correo: "sofia.sanchez@example.com",
        telefono: "3216549870"
    }
];

export const listaObservaciones = [
    {
        id: "1",
        id_usuario: "1",
        fecha: "15-06-2024",
        asunto: "Ruidos molestos",
        descripcion: "Carlos Gómez ha recibido varias quejas por ruidos molestos en su departamento durante la noche."
    },
    {
        id: "2",
        id_usuario: "1",
        fecha: "16-06-2024",
        asunto: "Pago de mantenimiento atrasado",
        descripcion: "Carlos Gómez tiene varios meses de retraso en el pago de las cuotas de mantenimiento."
    },
    {
        id: "3",
        id_usuario: "3",
        fecha: "17-06-2024",
        asunto: "Mal uso de áreas comunes",
        descripcion: "José López ha sido visto fumando en áreas donde está prohibido hacerlo."
    },
    {
        id: "4",
        id_usuario: "3",
        fecha: "18-06-2024",
        asunto: "Mascotas sin control",
        descripcion: "José López no controla a sus mascotas, lo que ha causado molestias a otros residentes."
    },
    {
        id: "5",
        id_usuario: "3",
        fecha: "19-06-2024",
        asunto: "Estacionamiento indebido",
        descripcion: "José López ha estacionado su coche en lugares no autorizados en varias ocasiones."
    },
    {
        id: "6",
        id_usuario: "6",
        fecha: "20-06-2024",
        asunto: "Mantenimiento de propiedad",
        descripcion: "Lucía Hernández no ha realizado el mantenimiento adecuado de su propiedad, lo que ha causado problemas en áreas comunes."
    },
    {
        id: "7",
        id_usuario: "6",
        fecha: "21-06-2024",
        asunto: "Ruido de fiestas",
        descripcion: "Lucía Hernández ha organizado fiestas ruidosas que han molestado a los vecinos."
    },
    {
        id: "8",
        id_usuario: "8",
        fecha: "22-06-2024",
        asunto: "No respeta las normas de convivencia",
        descripcion: "Elena Ramírez ha sido reportada por no respetar las normas de convivencia del condominio."
    },
    {
        id: "9",
        id_usuario: "9",
        fecha: "23-06-2024",
        asunto: "Incumplimiento de normas de reciclaje",
        descripcion: "Pedro Fernández no ha seguido las normas de reciclaje establecidas por el condominio."
    },
    {
        id: "10",
        id_usuario: "10",
        fecha: "24-06-2024",
        asunto: "Quejas por comportamiento",
        descripcion: "Sofía Sánchez ha recibido varias quejas por su comportamiento hacia otros residentes."
    }
];