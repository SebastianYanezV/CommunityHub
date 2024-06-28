import React, { useState } from 'react';
import Button from '../../../../../components/button/Button';
import './RecomendacionesContent.css';
import InputField from '../../../../../components/inputField/InputField';
import {Recomendacion} from './interfaces/interfaces'

const InicioContent = () => {
    const [asunto, setAsunto] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [error, setError] = useState('');
    const [overlay, setOverlay] = useState(false);

    const handleRecomendacion = async (e?: any) => {
        e.preventDefault();

        if (!asunto || !descripcion) {
            setError('Por favor, complete todos los campos.');
            return;
        }

        const id_usuario = parseInt(sessionStorage.getItem('user_id') || '0');

        const nuevaRecomendacion: Recomendacion = {
            id_recomendacion: 1,
            id_usuario: id_usuario,
            fecha: todayDate,
            asunto: asunto,
            descripcion: descripcion
        };

        try {
            const response = await fetch('http://your-backend-api-url.com/recomendaciones', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${sessionStorage.getItem('token')}`
                },
                body: JSON.stringify(nuevaRecomendacion)
            });

            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }

            const data = await response.json();
            setAsunto('');
            setDescripcion('');
            setError('');
            setOverlay(true);
        } catch (error) {
            setAsunto('');
            setDescripcion('');
            setError('');
            setOverlay(true);
        }
    };

    const today = new Date();
    const todayDate = today.toISOString().split('T')[0];

    return (
        <div className='recomendacion-content-container recomendacion-content-container-stats'>
            <div className='input-container'>
                <h2>Enviar recomendación a la administración</h2>
                <p>Rellene los siguientes campos para crear y enviar su recomendación.</p>
                <InputField inputText='Asunto' type='text' value={asunto} onChange={(event) => setAsunto(event.target.value)}/>
            </div>
            <div className="input-group">
                <span className="input-group-text">Descripción</span>
                <textarea className="form-control" aria-label="With textarea" value={descripcion} onChange={(event) => { setDescripcion(event.target.value) }}></textarea>
            </div>
            {error && <p className='error'>{error}</p>}
            <div className='edit-profile-button'>
                <Button onClick={handleRecomendacion} buttonText='Enviar'></Button>
            </div>

            { overlay && (
                <div className="eliminar-residente-overlay">
                    <div className="message-container d-flex flex-column align-items-center">
                        <h2 className="mb-5 mt-3">¡Recomendación enviada!</h2>
                        <Button onClick={() => { setOverlay(false) } } buttonText="OK"></Button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default InicioContent;