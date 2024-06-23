import React, { useEffect, useState } from 'react';
import Card from '../../../../../components/card/Card';
import Button from '../../../../../components/button/Button';
import './NotificacionesContent.css';
import { IonGrid, IonRow, IonCol } from '@ionic/react';

const InicioContent = () => {
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
                <IonRow>
                    <IonCol>1</IonCol>
                    <IonCol>15-05-2024</IonCol>
                    <IonCol>Corte programado de agua</IonCol>
                    <IonCol>Se informa que el día 16-05-2024 se realizará un corte de agua entre las 10:00 y las 19:00 horas.</IonCol>
                </IonRow>
                <IonRow>
                    <IonCol>2</IonCol>
                    <IonCol>01-06-2024</IonCol>
                    <IonCol>Mantenimiento piscina.</IonCol>
                    <IonCol>Se informa que durante el día de hoy, 01-06-2024, se realizará mantenimiento a la piscina, por lo que no estará disponible para su uso.</IonCol>
                </IonRow>
                <IonRow>
                    <IonCol>3</IonCol>
                    <IonCol>20-06-2024</IonCol>
                    <IonCol>Corte programado de luz.</IonCol>
                    <IonCol>Se informa que el día 21-06-2024 se realizará un corte de luz entre las 06:00 y las 10:00 horas.</IonCol>
                </IonRow>
            </IonGrid>
        </div>
    );
};

export default InicioContent;