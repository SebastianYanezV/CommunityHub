import React, { useEffect, useState } from 'react';
import Card from '../../../../../components/card/Card';
import Button from '../../../../../components/button/Button';
import './RecomendacionesContent.css';
import InputField from './../../../../../components/inputField/InputField';

const InicioContent = () => {
    const handleClick = async () => {
        // Lógica para manejar el clic del botón
    };

    return (
        <div className='recomendacion-content-container recomendacion-content-container-stats'>
            <div className='input-container'>
                <h2>Enviar recomendación a la administración</h2>
                <p>Rellene los siguientes campos para crear y enviar su recomendación.</p>
                <InputField inputText='Asunto' type='string' value={''} onChange={function (event: React.ChangeEvent<HTMLInputElement>): void {
                    throw new Error('Function not implemented.');
                } }/>
            </div>
            <div className='input-container'>
                <InputField inputText='Descripción' type='string' value={''} onChange={function (event: React.ChangeEvent<HTMLInputElement>): void {
                    throw new Error('Function not implemented.');
                } }/>
            </div>
            <div className='edit-profile-button'>
                <Button onClick={handleClick} buttonText='Enviar'></Button>
            </div>
        </div>
    );
};

export default InicioContent;