import React, { useEffect, useState } from 'react';
import { IonGrid, IonRow, IonCol } from '@ionic/react';
import './NotificacionesContent.css';
import {Notificacion, listaNotificaciones} from './interfaces/interfaces'

const InicioContent = () => {
    const [notificaciones, setNotificaciones] = useState<Notificacion[]>([]);

    const fetchNotificaciones = async () => {
        try {
            const response = await fetch('http://your-backend-api-url.com/notificaciones', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${sessionStorage.getItem('token')}` 
                }
            });

            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            
            const data = await response.json();
            setNotificaciones(data);
        } catch (error) {
            setNotificaciones(listaNotificaciones);
        }
    };

    useEffect(() => {
        fetchNotificaciones();
    }, []);

    return (
        <div className='notificaciones-content-container'>
            <IonGrid>
                {/* Fila de encabezado */}
                <IonRow className="table-header">
                    <IonCol>ID</IonCol>
                    <IonCol>Fecha</IonCol>
                    <IonCol>Asunto</IonCol>
                    <IonCol>Descripción</IonCol>
                </IonRow>
                {/* Filas de datos */}
                {notificaciones.map((notificacion) => (
                    <IonRow key={notificacion.id_notificacion}>
                        <IonCol>{notificacion.id_notificacion}</IonCol>
                        <IonCol>{notificacion.fecha}</IonCol>
                        <IonCol>{notificacion.asunto}</IonCol>
                        <IonCol>{notificacion.descripcion}</IonCol>
                    </IonRow>
                ))}
            </IonGrid>
        </div>
    );
};

export default InicioContent;