import React, { useEffect, useState } from 'react';
import Card from '../../../../../components/card/Card';
import Button from '../../../../../components/button/Button';
import './MultasContent.css';
import { IonGrid, IonRow, IonCol } from '@ionic/react';
import {Multa, listaMultas} from './interfaces/interfaces'

const InicioContent = () => {
    const [multas, setMultas] = useState<Multa[]>([]);

    const fetchMultas = async () => {
        try {
            const response = await fetch('http://your-backend-api-url.com/multas', {
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
            setMultas(data);
        } catch (error) {
            setMultas(listaMultas);
        }
    };

    useEffect(() => {
        fetchMultas();
    }, []);

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
                {multas.map((multa) => (
                    <IonRow key={multa.id_multa}>
                        <IonCol>{multa.id_multa}</IonCol>
                        <IonCol>{multa.descripcion}</IonCol>
                        <IonCol>{multa.fecha_emision}</IonCol>
                        <IonCol>{multa.fecha_expiracion}</IonCol>
                        <IonCol>{multa.total}</IonCol>
                    </IonRow>
                ))}
            </IonGrid>
        </div>
    );
};

export default InicioContent;