import React, { useEffect, useState } from 'react';
import Card from '../../../../../components/card/Card';
import Button from '../../../../../components/button/Button';
import './GastoComunContent.css';

const InicioContent = () => {
    const handleClick = async () => {
        // Lógica para manejar el clic del botón
    };

    return (
        <div className='gastoComun-content-container gastoComun-content-container-stats'>
            <div>
                <div className='gastoComun-content-graphs'>
                    <h2>Total a pagar: $100.000 CLP</h2>
                </div>
                <div className='edit-profile-button'>
                    <Button onClick={handleClick} buttonText='Descargar Detalle'></Button>
                </div>
                <div className='edit-profile-button'>
                    <Button onClick={handleClick} buttonText='Pagar'></Button>
                </div>
            </div>
            <div>
                <div className='gastoComun-content-graphs'>
                    <h2>Mes pasado: $130.000 CLP</h2>
                </div>
                <div className='gastoComun-content-graphs'>
                    <h2>Promedio último trimestre: $110.000 CLP</h2>
                </div>
            </div>
        </div>
    );
};

export default InicioContent;