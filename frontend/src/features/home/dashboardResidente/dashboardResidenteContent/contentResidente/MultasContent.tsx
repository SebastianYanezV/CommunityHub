import React, { useEffect, useState } from 'react';
import Card from '../../../../../components/card/Card';
import Button from '../../../../../components/button/Button';
import './MultasContent.css';
import { IonGrid, IonRow, IonCol } from '@ionic/react';

const InicioContent = () => {
    return (
        <div className='multas-content-container'>            
            <IonGrid>
                {/* Fila de encabezado */}
                <IonRow className="table-header">
                    <IonCol>ID</IonCol>
                    <IonCol>Descripción</IonCol>
                    <IonCol>Fecha Emisión</IonCol>
                    <IonCol>Fecha Expiración</IonCol>
                    <IonCol>Total</IonCol>
                </IonRow>

                {/* Filas de datos */}
                <IonRow>
                    <IonCol>1</IonCol>
                    <IonCol>Atraso en pago de gastos comunes.</IonCol>
                    <IonCol>15-12-2022</IonCol>
                    <IonCol>15-01-2023</IonCol>
                    <IonCol>$35.000</IonCol>
                </IonRow>
                <IonRow>
                    <IonCol>2</IonCol>
                    <IonCol>Atraso en pago de gastos comunes.</IonCol>
                    <IonCol>21-06-2023</IonCol>
                    <IonCol>21-07-2023</IonCol>
                    <IonCol>$50.000</IonCol>
                </IonRow>
                <IonRow>
                    <IonCol>3</IonCol>
                    <IonCol>Atraso en pago de gastos comunes.</IonCol>
                    <IonCol>03-03-2024</IonCol>
                    <IonCol>03-04-2024</IonCol>
                    <IonCol>$40.000</IonCol>
                </IonRow>
            </IonGrid>
        </div>
    );
};

export default InicioContent;