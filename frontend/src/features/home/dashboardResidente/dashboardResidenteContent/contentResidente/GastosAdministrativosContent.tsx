import React, { useEffect, useState } from 'react';
import Card from '../../../../../components/card/Card';
import Button from '../../../../../components/button/Button';
import './GastosAdministrativosContent.css';
import { IonGrid, IonRow, IonCol } from '@ionic/react';
import {PlanillaGastoAdministrativo, DescripcionItem, listaPlanillasGastoAdministrativo} from './interfaces/interfaces'

const InicioContent = () => {
    const [planillasGastoAdministrativo, setPlanillasGastoAdministrativo] = useState<PlanillaGastoAdministrativo[]>([]);

    const fetchPlanillasGastoAdministrativo = async () => {
        try {
            const response = await fetch('http://your-backend-api-url.com/planillasGastoAdministrativo', {
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
            setPlanillasGastoAdministrativo(data);
        } catch (error) {
            setPlanillasGastoAdministrativo(listaPlanillasGastoAdministrativo);
        }
    };

    useEffect(() => {
        fetchPlanillasGastoAdministrativo();
    }, []);

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
                {planillasGastoAdministrativo.map((planillaGastoAdministrativo) => (
                    <React.Fragment key={planillaGastoAdministrativo.id_planilla}>
                        <IonRow>
                            <IonCol>{planillaGastoAdministrativo.id_planilla}</IonCol>
                            <IonCol>{planillaGastoAdministrativo.id_administrador}</IonCol>
                            <IonCol>{planillaGastoAdministrativo.fecha}</IonCol>
                        </IonRow>
                        {/* Sub encabezado para el cuerpo */}
                        <IonRow className="table-header">
                            <IonCol>Descripción</IonCol>
                            <IonCol>Total</IonCol>
                        </IonRow>
                        {planillaGastoAdministrativo.cuerpo.map((item, index) => (
                            <IonRow key={index}>
                                <IonCol>{item.descripcion}</IonCol>
                                <IonCol>{item.total}</IonCol>
                            </IonRow>
                        ))}
                    </React.Fragment>
                ))}
            </IonGrid>
        </div>
    );
};

export default InicioContent;