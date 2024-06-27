import React, { useEffect, useState } from 'react';
import Card from '../../../../../components/card/Card';
import Button from '../../../../../components/button/Button';
import './GastosAdministrativosContent.css';
import { IonGrid, IonRow, IonCol } from '@ionic/react';

const InicioContent = () => {
    return (
        <div className='gastoAdmin-content-container'>     
            <IonGrid>
                {/* Fila de encabezado */}
                <IonRow className="table-header">
                    <IonCol>ID Planilla</IonCol>
                    <IonCol>ID Administrador</IonCol>
                    <IonCol>Fecha</IonCol>
                </IonRow>

                {/* Filas de datos */}
                <IonRow>
                    <IonCol>25</IonCol>
                    <IonCol>1</IonCol>
                    <IonCol>31-05-2024</IonCol>
                </IonRow>

                <IonRow className="table-header">
                    <IonCol>Descripción</IonCol>
                    <IonCol>Total</IonCol>
                </IonRow>

                {/* Filas de datos */}
                <IonRow>
                    <IonCol>Reparación de ascensores</IonCol>
                    <IonCol>$100.000</IonCol>
                </IonRow>
                <IonRow>
                    <IonCol>Pago de electricidad</IonCol>
                    <IonCol>$50.000</IonCol>
                </IonRow>
                <IonRow>
                    <IonCol>Limpieza de áreas comunes</IonCol>
                    <IonCol>$30.000</IonCol>
                </IonRow>
                <IonRow>
                    <IonCol>Seguridad privada</IonCol>
                    <IonCol>$120.000</IonCol>
                </IonRow>
                <IonRow>
                    <IonCol>Jardinería</IonCol>
                    <IonCol>$20.000</IonCol>
                </IonRow>
                <IonRow>
                    <IonCol>Agua potable</IonCol>
                    <IonCol>$40.000</IonCol>
                </IonRow>
                <IonRow>
                    <IonCol>Suministro de gas</IonCol>
                    <IonCol>$60.000</IonCol>
                </IonRow>
                <IonRow>
                    <IonCol></IonCol>
                    <IonCol>$420.000</IonCol>
                </IonRow>
            </IonGrid>
        </div>
    );
};

export default InicioContent;