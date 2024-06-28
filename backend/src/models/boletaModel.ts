export interface Boleta {
    id?: string;
    id_admin: string;
    descripcion: string;
    fechaEmision: string;
    fechaExpiracion: string;
    total: number;
}